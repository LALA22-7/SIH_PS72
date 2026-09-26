"""Data format decoders for multi-source atmospheric observations.

Provides thin wrappers around standard scientific Python libraries
for reading GRIB2, HDF5, and NetCDF files commonly used in
meteorological data.
"""
from __future__ import annotations

import logging
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)


def read_netcdf(filepath: str | Path, variables: list[str] | None = None) -> Any:
    """Read a NetCDF file and return an xarray Dataset.

    Parameters
    ----------
    filepath : path to the .nc file
    variables : optional list of variable names to load (None = all)
    """
    import xarray as xr
    ds = xr.open_dataset(str(filepath))
    if variables:
        ds = ds[variables]
    return ds


def read_grib2(filepath: str | Path, shortName: str | None = None) -> Any:
    """Read a GRIB2 file and return an xarray Dataset.

    Requires cfgrib and eccodes.

    Parameters
    ----------
    filepath : path to the .grib2 file
    shortName : optional GRIB shortName filter (e.g., 'cape', 'cin')
    """
    import xarray as xr
    filter_keys = {}
    if shortName:
        filter_keys["shortName"] = shortName
    ds = xr.open_dataset(
        str(filepath),
        engine="cfgrib",
        backend_kwargs={"filter_by_keys": filter_keys} if filter_keys else {},
    )
    return ds


def read_hdf5(filepath: str | Path, dataset_name: str | None = None) -> Any:
    """Read an HDF5 file and return data as a numpy array or dict.

    Parameters
    ----------
    filepath : path to the .h5 file
    dataset_name : specific dataset to read (None = return all keys)
    """
    import h5py
    import numpy as np

    with h5py.File(str(filepath), "r") as f:
        if dataset_name:
            return np.array(f[dataset_name])
        return {key: np.array(f[key]) for key in f.keys()}
