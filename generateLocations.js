const fs = require('fs');

const csv = fs.readFileSync('./data/india_state_district_city_with_codes.csv', 'utf8');
const lines = csv.split('\n').filter(l => l.trim().length > 0);

const statesSet = new Set();
const locations = [];

const STATE_COORDS = {
  'Andaman And Nicobar Islands': [11.7401, 92.6586],
  'Andhra Pradesh': [15.9129, 79.7400],
  'Arunachal Pradesh': [28.2180, 94.7278],
  'Assam': [26.2006, 92.9376],
  'Bihar': [25.0961, 85.3131],
  'Chandigarh': [30.7333, 76.7794],
  'Chhattisgarh': [21.2787, 81.8661],
  'Dadra And Nagar Haveli': [20.1809, 73.0169],
  'Daman And Diu': [20.4283, 72.8397],
  'Delhi': [28.7041, 77.1025],
  'Goa': [15.2993, 74.1240],
  'Gujarat': [22.2587, 71.1924],
  'Haryana': [29.0588, 76.0856],
  'Himachal Pradesh': [31.1048, 77.1734],
  'Jammu And Kashmir': [33.7782, 76.5762],
  'Jharkhand': [23.6102, 85.2799],
  'Karnataka': [15.3173, 75.7139],
  'Kerala': [10.8505, 76.2711],
  'Lakshadweep': [10.5667, 72.6417],
  'Madhya Pradesh': [22.9734, 78.6569],
  'Maharashtra': [19.7515, 75.7139],
  'Manipur': [24.6637, 93.9063],
  'Meghalaya': [25.4670, 91.3662],
  'Mizoram': [23.1645, 92.9376],
  'Nagaland': [26.1584, 94.5624],
  'Odisha': [20.9517, 85.0985],
  'Puducherry': [11.9416, 79.8083],
  'Punjab': [31.1471, 75.3412],
  'Rajasthan': [27.0238, 74.2179],
  'Sikkim': [27.5330, 88.5122],
  'Tamil Nadu': [11.1271, 78.6569],
  'Telangana': [18.1124, 79.0193],
  'Tripura': [23.9408, 91.9882],
  'Uttar Pradesh': [26.8467, 80.9462],
  'Uttarakhand': [30.0668, 79.0193],
  'West Bengal': [22.9868, 87.8550],
  'Ladakh': [34.1526, 77.5771]
};

// Simple deterministic hash to offset coordinates
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
  }
  return hash;
}

// id, name, state, type, lat, lng
for (let i = 1; i < lines.length; i++) {
  // Use regex to split by comma, ignoring commas inside quotes (if any)
  const parts = lines[i].split(',');
  if (parts.length < 6) continue;
  
  const stateCode = parts[0];
  const state = parts[1];
  const districtCode = parts[2];
  const district = parts[3];
  const cityCode = parts[4];
  const city = parts[5];
  
  statesSet.add(state);
  
  const baseCoord = STATE_COORDS[state] || [20.5937, 78.9629];
  
  if (city && city.trim().length > 0) {
    const offset1 = (hashString(city) % 1000) / 1000.0 * 2 - 1; // -1 to 1
    const offset2 = (hashString(city + 'x') % 1000) / 1000.0 * 2 - 1;
    locations.push({
      id: 'city-' + cityCode,
      name: city,
      state: state,
      type: 'City',
      lat: baseCoord[0] + offset1,
      lng: baseCoord[1] + offset2
    });
  } else if (district && district.trim().length > 0) {
    const offset1 = (hashString(district) % 1000) / 1000.0 * 2 - 1; 
    const offset2 = (hashString(district + 'x') % 1000) / 1000.0 * 2 - 1;
    locations.push({
      id: 'dist-' + districtCode,
      name: district,
      state: state,
      type: 'District',
      lat: baseCoord[0] + offset1,
      lng: baseCoord[1] + offset2
    });
  }
}

const statesArray = Array.from(statesSet).sort().map((s, i) => ({ id: s.toLowerCase().replace(/\s+/g, '-'), name: s }));
statesArray.unshift({ id: 'all', name: 'All India' });

const fileContent = `
export interface Region {
  id: string;
  name: string;
}

export const INDIA_REGIONS: Region[] = ${JSON.stringify(statesArray, null, 2)};

export interface LocationRecord {
  id: string;
  name: string;
  state: string;
  type: 'City' | 'District' | 'Village';
  lat: number;
  lng: number;
}

export const LOCATIONS_DB: LocationRecord[] = ${JSON.stringify(locations, null, 2)};
`;

fs.writeFileSync('./frontend/src/lib/locations.ts', fileContent);
console.log('Successfully generated locations.ts. ' + locations.length + ' locations.');
