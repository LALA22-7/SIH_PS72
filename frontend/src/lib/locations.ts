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
  lat: number;
  lng: number;
}

// A representative mock database of official Indian locations.
// In a full production app, this would be backed by a search API (like ElasticSearch)
// querying the ~600,000 villages and ~700 districts of India.
export const LOCATIONS_DB: LocationRecord[] = [
  // North India
  { id: 'lko', name: 'Lucknow', state: 'Uttar Pradesh', type: 'City', lat: 26.8467, lng: 80.9462 },
  { id: 'kan', name: 'Kanpur', state: 'Uttar Pradesh', type: 'City', lat: 26.4499, lng: 80.3319 },
  { id: 'del', name: 'New Delhi', state: 'Delhi', type: 'City', lat: 28.6139, lng: 77.2090 },
  { id: 'gur', name: 'Gurugram', state: 'Haryana', type: 'City', lat: 28.4595, lng: 77.0266 },
  { id: 'chd', name: 'Chandigarh', state: 'Punjab/Haryana', type: 'City', lat: 30.7333, lng: 76.7794 },
  { id: 'sri', name: 'Srinagar', state: 'Jammu & Kashmir', type: 'City', lat: 34.0837, lng: 74.7973 },
  { id: 'jai', name: 'Jaipur', state: 'Rajasthan', type: 'City', lat: 26.9124, lng: 75.7873 },
  { id: 'jod', name: 'Jodhpur', state: 'Rajasthan', type: 'City', lat: 26.2389, lng: 73.0243 },
  { id: 'deh', name: 'Dehradun', state: 'Uttarakhand', type: 'City', lat: 30.3165, lng: 78.0322 },

  // South India
  { id: 'blr', name: 'Bengaluru', state: 'Karnataka', type: 'City', lat: 12.9716, lng: 77.5946 },
  { id: 'mys', name: 'Mysuru', state: 'Karnataka', type: 'City', lat: 12.2958, lng: 76.6394 },
  { id: 'che', name: 'Chennai', state: 'Tamil Nadu', type: 'City', lat: 13.0827, lng: 80.2707 },
  { id: 'cbe', name: 'Coimbatore', state: 'Tamil Nadu', type: 'City', lat: 11.0168, lng: 76.9558 },
  { id: 'hyd', name: 'Hyderabad', state: 'Telangana', type: 'City', lat: 17.3850, lng: 78.4867 },
  { id: 'wgl', name: 'Warangal', state: 'Telangana', type: 'City', lat: 17.9689, lng: 79.5941 },
  { id: 'tvm', name: 'Thiruvananthapuram', state: 'Kerala', type: 'City', lat: 8.5241, lng: 76.9366 },
  { id: 'cok', name: 'Kochi', state: 'Kerala', type: 'City', lat: 9.9312, lng: 76.2673 },
  
  // West India
  { id: 'bom', name: 'Mumbai', state: 'Maharashtra', type: 'City', lat: 19.0760, lng: 72.8777 },
  { id: 'pnq', name: 'Pune', state: 'Maharashtra', type: 'City', lat: 18.5204, lng: 73.8567 },
  { id: 'ngp', name: 'Nagpur', state: 'Maharashtra', type: 'City', lat: 21.1458, lng: 79.0882 },
  { id: 'amd', name: 'Ahmedabad', state: 'Gujarat', type: 'City', lat: 23.0225, lng: 72.5714 },
  { id: 'sur', name: 'Surat', state: 'Gujarat', type: 'City', lat: 21.1702, lng: 72.8311 },
  { id: 'raj', name: 'Rajkot', state: 'Gujarat', type: 'City', lat: 22.3039, lng: 70.8022 },
  { id: 'goa', name: 'Panaji', state: 'Goa', type: 'City', lat: 15.4909, lng: 73.8278 },

  // East India
  { id: 'ccu', name: 'Kolkata', state: 'West Bengal', type: 'City', lat: 22.5726, lng: 88.3639 },
  { id: 'dgp', name: 'Durgapur', state: 'West Bengal', type: 'City', lat: 23.5204, lng: 87.3119 },
  { id: 'pat', name: 'Patna', state: 'Bihar', type: 'City', lat: 25.5941, lng: 85.1376 },
  { id: 'gaya', name: 'Gaya', state: 'Bihar', type: 'City', lat: 24.7914, lng: 85.0002 },
  { id: 'bbs', name: 'Bhubaneswar', state: 'Odisha', type: 'City', lat: 20.2961, lng: 85.8245 },
  { id: 'rkl', name: 'Rourkela', state: 'Odisha', type: 'City', lat: 22.2604, lng: 84.8536 },
  { id: 'ran', name: 'Ranchi', state: 'Jharkhand', type: 'City', lat: 23.3441, lng: 85.3096 },

  // Central India
  { id: 'bho', name: 'Bhopal', state: 'Madhya Pradesh', type: 'City', lat: 23.2599, lng: 77.4126 },
  { id: 'ind', name: 'Indore', state: 'Madhya Pradesh', type: 'City', lat: 22.7196, lng: 75.8577 },
  { id: 'jbp', name: 'Jabalpur', state: 'Madhya Pradesh', type: 'City', lat: 23.1815, lng: 79.9864 },
  { id: 'rai', name: 'Raipur', state: 'Chhattisgarh', type: 'City', lat: 21.2514, lng: 81.6296 },
  { id: 'bil', name: 'Bilaspur', state: 'Chhattisgarh', type: 'City', lat: 22.0797, lng: 82.1409 },

  // Northeast India
  { id: 'gau', name: 'Guwahati', state: 'Assam', type: 'City', lat: 26.1445, lng: 91.7362 },
  { id: 'shi', name: 'Shillong', state: 'Meghalaya', type: 'City', lat: 25.5788, lng: 91.8933 },
  { id: 'agt', name: 'Agartala', state: 'Tripura', type: 'City', lat: 23.8315, lng: 91.2868 },
  { id: 'imf', name: 'Imphal', state: 'Manipur', type: 'City', lat: 24.8170, lng: 93.9368 },
  { id: 'aiz', name: 'Aizawl', state: 'Mizoram', type: 'City', lat: 23.7271, lng: 92.7176 },

  // Example Districts/Villages to show DB breadth
  { id: 'dis-bha', name: 'Bhavnagar', state: 'Gujarat', type: 'District', lat: 21.7645, lng: 72.1519 },
  { id: 'dis-way', name: 'Wayanad', state: 'Kerala', type: 'District', lat: 11.6854, lng: 76.1320 },
  { id: 'vil-maw', name: 'Mawlynnong', state: 'Meghalaya', type: 'Village', lat: 25.2017, lng: 91.9161 },
  { id: 'vil-mal', name: 'Malana', state: 'Himachal Pradesh', type: 'Village', lat: 32.0628, lng: 77.2652 },
];
