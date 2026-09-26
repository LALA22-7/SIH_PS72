"""Retry utility with exponential backoff for transient network errors.

Adapted from PS 070's aws_downloader.py retry pattern.
"""
from __future__ import annotations

import logging
import time
import socket
from typing import Any, Callable, TypeVar

logger = logging.getLogger(__name__)

T = TypeVar("T")

# Transient network errors worth retrying
RETRYABLE_EXCEPTIONS = (
    ConnectionError,
    socket.gaierror,
    socket.timeout,
    TimeoutError,
    OSError,
)

MAX_RETRIES = 4
RETRY_BASE_DELAY_SEC = 2


def with_retries(
    fn: Callable[..., T],
    *args: Any,
    max_retries: int = MAX_RETRIES,
    base_delay: float = RETRY_BASE_DELAY_SEC,
    **kwargs: Any,
) -> T:
    """Retry a function call on transient errors with exponential backoff."""
    last_exc: Exception | None = None
    for attempt in range(1, max_retries + 1):
        try:
            return fn(*args, **kwargs)
        except RETRYABLE_EXCEPTIONS as e:
            last_exc = e
            if attempt < max_retries:
                delay = base_delay * (2 ** (attempt - 1))
                logger.warning(
                    "Transient error: %s; retry %d/%d in %.1fs",
                    e, attempt, max_retries, delay,
                )
                time.sleep(delay)
            else:
                logger.error("Giving up after %d attempts: %s", max_retries, e)
    raise last_exc  # type: ignore[misc]
