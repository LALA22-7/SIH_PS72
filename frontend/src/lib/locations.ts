export interface Region {
  id: string;
  name: string;
}

export const INDIA_REGIONS: Region[] = [
  { id: 'all', name: 'All India' },
  { id: 'north', name: 'North India' },
  { id: 'south', name: 'South India' },
  { id: 'east', name: 'East India' },
  { id: 'west', name: 'West India' },
  { id: 'central', name: 'Central India' },
  { id: 'northeast', name: 'Northeast India' },
];

export interface LocationRecord {
  id: string;
  name: string;
  state: string;
  type: 'City' | 'District' | 'Village';
}

// A representative mock database of official Indian locations.
// In a full production app, this would be backed by a search API (like ElasticSearch)
// querying the ~600,000 villages and ~700 districts of India.
export const LOCATIONS_DB: LocationRecord[] = [
  // North India
  { id: 'lko', name: 'Lucknow', state: 'Uttar Pradesh', type: 'City' },
  { id: 'kan', name: 'Kanpur', state: 'Uttar Pradesh', type: 'City' },
  { id: 'del', name: 'New Delhi', state: 'Delhi', type: 'City' },
  { id: 'gur', name: 'Gurugram', state: 'Haryana', type: 'City' },
  { id: 'chd', name: 'Chandigarh', state: 'Punjab/Haryana', type: 'City' },
  { id: 'sri', name: 'Srinagar', state: 'Jammu & Kashmir', type: 'City' },
  { id: 'jai', name: 'Jaipur', state: 'Rajasthan', type: 'City' },
  { id: 'jod', name: 'Jodhpur', state: 'Rajasthan', type: 'City' },
  { id: 'deh', name: 'Dehradun', state: 'Uttarakhand', type: 'City' },

  // South India
  { id: 'blr', name: 'Bengaluru', state: 'Karnataka', type: 'City' },
  { id: 'mys', name: 'Mysuru', state: 'Karnataka', type: 'City' },
  { id: 'che', name: 'Chennai', state: 'Tamil Nadu', type: 'City' },
  { id: 'cbe', name: 'Coimbatore', state: 'Tamil Nadu', type: 'City' },
  { id: 'hyd', name: 'Hyderabad', state: 'Telangana', type: 'City' },
  { id: 'wgl', name: 'Warangal', state: 'Telangana', type: 'City' },
  { id: 'tvm', name: 'Thiruvananthapuram', state: 'Kerala', type: 'City' },
  { id: 'cok', name: 'Kochi', state: 'Kerala', type: 'City' },
  
  // West India
  { id: 'bom', name: 'Mumbai', state: 'Maharashtra', type: 'City' },
  { id: 'pnq', name: 'Pune', state: 'Maharashtra', type: 'City' },
  { id: 'ngp', name: 'Nagpur', state: 'Maharashtra', type: 'City' },
  { id: 'amd', name: 'Ahmedabad', state: 'Gujarat', type: 'City' },
  { id: 'sur', name: 'Surat', state: 'Gujarat', type: 'City' },
  { id: 'raj', name: 'Rajkot', state: 'Gujarat', type: 'City' },
  { id: 'goa', name: 'Panaji', state: 'Goa', type: 'City' },

  // East India
  { id: 'ccu', name: 'Kolkata', state: 'West Bengal', type: 'City' },
  { id: 'dgp', name: 'Durgapur', state: 'West Bengal', type: 'City' },
  { id: 'pat', name: 'Patna', state: 'Bihar', type: 'City' },
  { id: 'gaya', name: 'Gaya', state: 'Bihar', type: 'City' },
  { id: 'bbs', name: 'Bhubaneswar', state: 'Odisha', type: 'City' },
  { id: 'rkl', name: 'Rourkela', state: 'Odisha', type: 'City' },
  { id: 'ran', name: 'Ranchi', state: 'Jharkhand', type: 'City' },

  // Central India
  { id: 'bho', name: 'Bhopal', state: 'Madhya Pradesh', type: 'City' },
  { id: 'ind', name: 'Indore', state: 'Madhya Pradesh', type: 'City' },
  { id: 'jbp', name: 'Jabalpur', state: 'Madhya Pradesh', type: 'City' },
  { id: 'rai', name: 'Raipur', state: 'Chhattisgarh', type: 'City' },
  { id: 'bil', name: 'Bilaspur', state: 'Chhattisgarh', type: 'City' },

  // Northeast India
  { id: 'gau', name: 'Guwahati', state: 'Assam', type: 'City' },
  { id: 'shi', name: 'Shillong', state: 'Meghalaya', type: 'City' },
  { id: 'agt', name: 'Agartala', state: 'Tripura', type: 'City' },
  { id: 'imf', name: 'Imphal', state: 'Manipur', type: 'City' },
  { id: 'aiz', name: 'Aizawl', state: 'Mizoram', type: 'City' },

  // Example Districts/Villages to show DB breadth
  { id: 'dis-bha', name: 'Bhavnagar', state: 'Gujarat', type: 'District' },
  { id: 'dis-way', name: 'Wayanad', state: 'Kerala', type: 'District' },
  { id: 'vil-maw', name: 'Mawlynnong', state: 'Meghalaya', type: 'Village' },
  { id: 'vil-mal', name: 'Malana', state: 'Himachal Pradesh', type: 'Village' },
];
