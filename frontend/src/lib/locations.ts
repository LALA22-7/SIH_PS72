
export interface Region {
  id: string;
  name: string;
}

export const INDIA_REGIONS: Region[] = [
  {
    "id": "all",
    "name": "All India"
  },
  {
    "id": "andaman-and-nicobar-islands",
    "name": "Andaman And Nicobar Islands"
  },
  {
    "id": "andhra-pradesh",
    "name": "Andhra Pradesh"
  },
  {
    "id": "arunachal-pradesh",
    "name": "Arunachal Pradesh"
  },
  {
    "id": "assam",
    "name": "Assam"
  },
  {
    "id": "bihar",
    "name": "Bihar"
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh"
  },
  {
    "id": "chhattisgarh",
    "name": "Chhattisgarh"
  },
  {
    "id": "delhi",
    "name": "Delhi"
  },
  {
    "id": "goa",
    "name": "Goa"
  },
  {
    "id": "gujarat",
    "name": "Gujarat"
  },
  {
    "id": "haryana",
    "name": "Haryana"
  },
  {
    "id": "himachal-pradesh",
    "name": "Himachal Pradesh"
  },
  {
    "id": "jammu-and-kashmir",
    "name": "Jammu And Kashmir"
  },
  {
    "id": "jharkhand",
    "name": "Jharkhand"
  },
  {
    "id": "karnataka",
    "name": "Karnataka"
  },
  {
    "id": "kerala",
    "name": "Kerala"
  },
  {
    "id": "ladakh",
    "name": "Ladakh"
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep"
  },
  {
    "id": "madhya-pradesh",
    "name": "Madhya Pradesh"
  },
  {
    "id": "maharashtra",
    "name": "Maharashtra"
  },
  {
    "id": "manipur",
    "name": "Manipur"
  },
  {
    "id": "meghalaya",
    "name": "Meghalaya"
  },
  {
    "id": "mizoram",
    "name": "Mizoram"
  },
  {
    "id": "nagaland",
    "name": "Nagaland"
  },
  {
    "id": "odisha",
    "name": "Odisha"
  },
  {
    "id": "puducherry",
    "name": "Puducherry"
  },
  {
    "id": "punjab",
    "name": "Punjab"
  },
  {
    "id": "rajasthan",
    "name": "Rajasthan"
  },
  {
    "id": "sikkim",
    "name": "Sikkim"
  },
  {
    "id": "tamil-nadu",
    "name": "Tamil Nadu"
  },
  {
    "id": "telangana",
    "name": "Telangana"
  },
  {
    "id": "the-dadra-and-nagar-haveli-and-daman-and-diu",
    "name": "The Dadra And Nagar Haveli And Daman And Diu"
  },
  {
    "id": "tripura",
    "name": "Tripura"
  },
  {
    "id": "uttar-pradesh",
    "name": "Uttar Pradesh"
  },
  {
    "id": "uttarakhand",
    "name": "Uttarakhand"
  },
  {
    "id": "west-bengal",
    "name": "West Bengal"
  }
];

export interface LocationRecord {
  id: string;
  name: string;
  state: string;
  type: 'City' | 'District' | 'Village';
  lat: number;
  lng: number;
}

export const LOCATIONS_DB: LocationRecord[] = [
  {
    "id": "dist-603",
    "name": "Nicobars",
    "state": "Andaman And Nicobar Islands",
    "type": "District",
    "lat": 12.3701,
    "lng": 91.8366
  },
  {
    "id": "dist-632",
    "name": "North And Middle Andaman",
    "state": "Andaman And Nicobar Islands",
    "type": "District",
    "lat": 8.790099999999999,
    "lng": 92.63260000000001
  },
  {
    "id": "city-253098",
    "name": "Port Blair",
    "state": "Andaman And Nicobar Islands",
    "type": "City",
    "lat": 12.1501,
    "lng": 89.83260000000001
  },
  {
    "id": "dist-745",
    "name": "Alluri Sitharama Raju",
    "state": "Andhra Pradesh",
    "type": "District",
    "lat": 16.4749,
    "lng": 76.89
  },
  {
    "id": "city-251716",
    "name": "Narsipatnam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.968900000000001,
    "lng": 76.94
  },
  {
    "id": "city-251719",
    "name": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.8369,
    "lng": 79.952
  },
  {
    "id": "city-258054",
    "name": "Yelamanchili",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.0809,
    "lng": 79.10799999999999
  },
  {
    "id": "city-248112",
    "name": "Anantapur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.332900000000002,
    "lng": 77.22399999999999
  },
  {
    "id": "city-251797",
    "name": "Gooty",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2729,
    "lng": 80.14
  },
  {
    "id": "city-248113",
    "name": "Guntakal",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.2989,
    "lng": 79.68199999999999
  },
  {
    "id": "city-251799",
    "name": "Kalyandurg",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9649,
    "lng": 76.856
  },
  {
    "id": "city-253252",
    "name": "Pamidi",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.212900000000001,
    "lng": 79.568
  },
  {
    "id": "city-248117",
    "name": "Rayadurg",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.962900000000001,
    "lng": 78.57
  },
  {
    "id": "city-248114",
    "name": "Tadipatri",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.616900000000001,
    "lng": 79.69999999999999
  },
  {
    "id": "city-299714",
    "name": "B Kothakota",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2729,
    "lng": 78.36399999999999
  },
  {
    "id": "city-248119",
    "name": "Madanapalli",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2729,
    "lng": 77.548
  },
  {
    "id": "city-248120",
    "name": "Punganur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.0249,
    "lng": 79.348
  },
  {
    "id": "city-251786",
    "name": "Rayachoti",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.1449,
    "lng": 80.05199999999999
  },
  {
    "id": "city-251760",
    "name": "Bapatla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.8109,
    "lng": 76.898
  },
  {
    "id": "city-251763",
    "name": "Chirala",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.776900000000001,
    "lng": 80.05199999999999
  },
  {
    "id": "city-251761",
    "name": "Repalle",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.0749,
    "lng": 78.514
  },
  {
    "id": "city-248122",
    "name": "Chittoor",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.988900000000001,
    "lng": 77.64
  },
  {
    "id": "city-296257",
    "name": "Kuppam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.564900000000002,
    "lng": 80.07199999999999
  },
  {
    "id": "city-248125",
    "name": "Nagari",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.6089,
    "lng": 76.844
  },
  {
    "id": "city-248123",
    "name": "Palamaner",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9869,
    "lng": 80.19399999999999
  },
  {
    "id": "city-251735",
    "name": "Amalapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.558900000000001,
    "lng": 76.886
  },
  {
    "id": "city-277315",
    "name": "Mummidivaram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.154900000000001,
    "lng": 78.362
  },
  {
    "id": "city-251733",
    "name": "Ramachandrapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.8069,
    "lng": 78.58999999999999
  },
  {
    "id": "city-251736",
    "name": "Kovvur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.5869,
    "lng": 78.75399999999999
  },
  {
    "id": "city-251732",
    "name": "Mandapeta",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.6269,
    "lng": 77.00999999999999
  },
  {
    "id": "city-251737",
    "name": "Nidadavole",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9189,
    "lng": 80.454
  },
  {
    "id": "city-251725",
    "name": "Rajahmundry",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9349,
    "lng": 77.92599999999999
  },
  {
    "id": "city-299715",
    "name": "Chinthalapudi",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.8849,
    "lng": 78.848
  },
  {
    "id": "city-251739",
    "name": "Eluru",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.8429,
    "lng": 79.80999999999999
  },
  {
    "id": "city-257906",
    "name": "Jangareddygudem",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9709,
    "lng": 79.55399999999999
  },
  {
    "id": "city-251745",
    "name": "Nuzvid",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.3009,
    "lng": 78.29599999999999
  },
  {
    "id": "city-251757",
    "name": "Guntur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.7229,
    "lng": 80.21
  },
  {
    "id": "city-251752",
    "name": "Mangalagiri Tadepalli",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.728900000000001,
    "lng": 77.05199999999999
  },
  {
    "id": "city-251759",
    "name": "Ponnuru",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.146900000000002,
    "lng": 79.90599999999999
  },
  {
    "id": "city-251758",
    "name": "Tenali",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.2909,
    "lng": 79.39399999999999
  },
  {
    "id": "city-277316",
    "name": "Gollaprolu",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.4269,
    "lng": 78.874
  },
  {
    "id": "city-251731",
    "name": "Kakinada",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.6569,
    "lng": 77.89999999999999
  },
  {
    "id": "city-251724",
    "name": "Peddapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.7469,
    "lng": 80.57
  },
  {
    "id": "city-251728",
    "name": "Pithapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.2509,
    "lng": 77.354
  },
  {
    "id": "city-251727",
    "name": "Samalkot",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.2849,
    "lng": 78.63199999999999
  },
  {
    "id": "city-251722",
    "name": "Tuni",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7049,
    "lng": 79.532
  },
  {
    "id": "city-277317",
    "name": "Yeleswaram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.692900000000002,
    "lng": 78.93599999999999
  },
  {
    "id": "city-251747",
    "name": "Gudivada",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 12.9829,
    "lng": 77.07
  },
  {
    "id": "city-251750",
    "name": "Machilipatnam Municipal Corporation",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7569,
    "lng": 77.448
  },
  {
    "id": "city-251749",
    "name": "Pedana",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.3709,
    "lng": 79.466
  },
  {
    "id": "city-254923",
    "name": "Vuyyuru",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.8109,
    "lng": 78.514
  },
  {
    "id": "city-299612",
    "name": "Ysr Tadigadapa",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.2289,
    "lng": 77.184
  },
  {
    "id": "city-251792",
    "name": "Adoni",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2149,
    "lng": 80.342
  },
  {
    "id": "city-251773",
    "name": "Gudur (Kurnool)",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.3249,
    "lng": 79.60799999999999
  },
  {
    "id": "city-251789",
    "name": "Kurnool",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.172900000000002,
    "lng": 80.71199999999999
  },
  {
    "id": "city-251787",
    "name": "Yemmiganur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9449,
    "lng": 76.74799999999999
  },
  {
    "id": "city-257869",
    "name": "Giddalur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.2129,
    "lng": 79.728
  },
  {
    "id": "city-253295",
    "name": "Kanigiri",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7489,
    "lng": 78.752
  },
  {
    "id": "city-251762",
    "name": "Markapur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9549,
    "lng": 80.098
  },
  {
    "id": "city-299716",
    "name": "Podili",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.058900000000001,
    "lng": 79.794
  },
  {
    "id": "city-253272",
    "name": "Allagadda",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7589,
    "lng": 78.91799999999999
  },
  {
    "id": "city-253270",
    "name": "Atmakur (Kurnool)",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.2329,
    "lng": 79.532
  },
  {
    "id": "city-296260",
    "name": "Bethamcherla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.3169,
    "lng": 77.36
  },
  {
    "id": "city-253169",
    "name": "Dhone(M)",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.180900000000001,
    "lng": 79.24799999999999
  },
  {
    "id": "city-253273",
    "name": "Nandikotkur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.552900000000001,
    "lng": 79.332
  },
  {
    "id": "city-251795",
    "name": "Nandyal",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9909,
    "lng": 80.542
  },
  {
    "id": "city-277319",
    "name": "Jaggiahpet",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.876900000000001,
    "lng": 79.55999999999999
  },
  {
    "id": "city-296264",
    "name": "Kondapalli",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.738900000000001,
    "lng": 78.54599999999999
  },
  {
    "id": "city-254922",
    "name": "Nandigama",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.6769,
    "lng": 77.256
  },
  {
    "id": "city-254924",
    "name": "Tiruvuru",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.6529,
    "lng": 77.616
  },
  {
    "id": "city-251746",
    "name": "Vijayawada Municipal Corporation",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.3109,
    "lng": 79.726
  },
  {
    "id": "city-251756",
    "name": "Chilakaluripeta",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.7789,
    "lng": 76.786
  },
  {
    "id": "city-296261",
    "name": "Dachepalli",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.8749,
    "lng": 80.106
  },
  {
    "id": "city-296262",
    "name": "Gurajala",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.3869,
    "lng": 76.818
  },
  {
    "id": "city-251751",
    "name": "Macherla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.878900000000002,
    "lng": 79.518
  },
  {
    "id": "city-251755",
    "name": "Narasaraopeta",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.988900000000001,
    "lng": 78.848
  },
  {
    "id": "city-253167",
    "name": "Piduguralla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.0529,
    "lng": 78.768
  },
  {
    "id": "city-251753",
    "name": "Sattenapalle",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.0369,
    "lng": 78.86399999999999
  },
  {
    "id": "city-251754",
    "name": "Vinukonda",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.930900000000001,
    "lng": 79.722
  },
  {
    "id": "city-257967",
    "name": "Palakonda",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9549,
    "lng": 79.202
  },
  {
    "id": "city-251701",
    "name": "Parvathipuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.6249,
    "lng": 79.604
  },
  {
    "id": "city-251703",
    "name": "Salur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9109,
    "lng": 77.326
  },
  {
    "id": "dist-791",
    "name": "Polavaram",
    "state": "Andhra Pradesh",
    "type": "District",
    "lat": 15.2149,
    "lng": 79.83
  },
  {
    "id": "city-257868",
    "name": "Addanki",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2729,
    "lng": 77.77199999999999
  },
  {
    "id": "city-253274",
    "name": "Chimakurthy",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.0029,
    "lng": 79.178
  },
  {
    "id": "city-296263",
    "name": "Darsi",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.6709,
    "lng": 80.478
  },
  {
    "id": "city-251768",
    "name": "Kandukur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.7349,
    "lng": 79.318
  },
  {
    "id": "city-251766",
    "name": "Ongole",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.9849,
    "lng": 80.5
  },
  {
    "id": "city-299716",
    "name": "Podili",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.058900000000001,
    "lng": 79.794
  },
  {
    "id": "city-299713",
    "name": "Alluru",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.1109,
    "lng": 79.83
  },
  {
    "id": "city-258033",
    "name": "Atmakur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.3549,
    "lng": 79.538
  },
  {
    "id": "city-296328",
    "name": "Buchireddypalem",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7249,
    "lng": 78.6
  },
  {
    "id": "city-263068",
    "name": "Gudur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.6709,
    "lng": 80.478
  },
  {
    "id": "city-251770",
    "name": "Kavali",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.0609,
    "lng": 79.448
  },
  {
    "id": "city-251772",
    "name": "Nellore Municipal Corporation",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.9709,
    "lng": 79.002
  },
  {
    "id": "city-248115",
    "name": "Dharmavaram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.0689,
    "lng": 79.11999999999999
  },
  {
    "id": "city-248118",
    "name": "Hindupur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.6389,
    "lng": 78.40599999999999
  },
  {
    "id": "city-248116",
    "name": "Kadiri",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.3329,
    "lng": 78.88
  },
  {
    "id": "city-253253",
    "name": "Madakasira",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.7609,
    "lng": 80.268
  },
  {
    "id": "city-296250",
    "name": "Penukonda",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.2149,
    "lng": 80.30199999999999
  },
  {
    "id": "city-253254",
    "name": "Puttaparthi",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.416900000000002,
    "lng": 76.868
  },
  {
    "id": "city-251699",
    "name": "Amadalavalasa",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.0989,
    "lng": 77.03399999999999
  },
  {
    "id": "city-251696",
    "name": "Ichapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.7809,
    "lng": 79.99199999999999
  },
  {
    "id": "city-251695",
    "name": "Palasa Kasibugga",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.8129,
    "lng": 77.65599999999999
  },
  {
    "id": "city-251700",
    "name": "Srikakulam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.004900000000001,
    "lng": 78.93599999999999
  },
  {
    "id": "city-263068",
    "name": "Gudur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.6709,
    "lng": 80.478
  },
  {
    "id": "city-257831",
    "name": "Naidupeta",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.3229,
    "lng": 77.874
  },
  {
    "id": "city-248126",
    "name": "Puttur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.340900000000001,
    "lng": 79.536
  },
  {
    "id": "city-248124",
    "name": "Srikalahasti",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.4529,
    "lng": 76.8
  },
  {
    "id": "city-253227",
    "name": "Sullurupeta",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9529,
    "lng": 78.484
  },
  {
    "id": "city-248121",
    "name": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.8209,
    "lng": 76.824
  },
  {
    "id": "city-251774",
    "name": "Venkatagiri",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.8549,
    "lng": 80.67
  },
  {
    "id": "city-251719",
    "name": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.8369,
    "lng": 79.952
  },
  {
    "id": "city-251702",
    "name": "Bobbili",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.9069,
    "lng": 80.69
  },
  {
    "id": "city-251711",
    "name": "Nellimarla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.3709,
    "lng": 77.72999999999999
  },
  {
    "id": "city-251698",
    "name": "Rajam",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7749,
    "lng": 77.11
  },
  {
    "id": "city-251709",
    "name": "Vizianagaram Municipal Corporation",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.6089,
    "lng": 78.636
  },
  {
    "id": "city-296256",
    "name": "Akiveedu",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.1929,
    "lng": 78.51599999999999
  },
  {
    "id": "city-251741",
    "name": "Bhimavaram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.5529,
    "lng": 77.228
  },
  {
    "id": "city-251742",
    "name": "Narasapur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.914900000000001,
    "lng": 78.18599999999999
  },
  {
    "id": "city-251743",
    "name": "Palacole",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.7989,
    "lng": 77.71
  },
  {
    "id": "city-251738",
    "name": "Tadepalligudem",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.8809,
    "lng": 78.02799999999999
  },
  {
    "id": "city-251740",
    "name": "Tanuku",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.5249,
    "lng": 80.648
  },
  {
    "id": "city-248111",
    "name": "Badvel",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.392900000000001,
    "lng": 79.57199999999999
  },
  {
    "id": "city-251782",
    "name": "Cuddapah",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.712900000000001,
    "lng": 78.59599999999999
  },
  {
    "id": "city-251780",
    "name": "Jammalamadugu",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.5169,
    "lng": 79.52
  },
  {
    "id": "city-296259",
    "name": "Kamalapuram",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 13.924900000000001,
    "lng": 78.27199999999999
  },
  {
    "id": "city-253297",
    "name": "Mydukur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 14.6949,
    "lng": 76.958
  },
  {
    "id": "city-251778",
    "name": "Proddatur",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.3709,
    "lng": 77.03399999999999
  },
  {
    "id": "city-253101",
    "name": "Pulivendula",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.510900000000001,
    "lng": 77.82199999999999
  },
  {
    "id": "city-253102",
    "name": "Rajampet",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 15.2809,
    "lng": 79.79599999999999
  },
  {
    "id": "city-251781",
    "name": "Yerraguntla",
    "state": "Andhra Pradesh",
    "type": "City",
    "lat": 16.4289,
    "lng": 78.42399999999999
  },
  {
    "id": "city-299588",
    "name": "Hayuliang",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.058,
    "lng": 93.3758
  },
  {
    "id": "dist-787",
    "name": "Bichom",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 28.166,
    "lng": 95.0678
  },
  {
    "id": "city-299586",
    "name": "Bordumsa",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.972,
    "lng": 93.2218
  },
  {
    "id": "city-249712",
    "name": "Jairampur",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.028,
    "lng": 93.4058
  },
  {
    "id": "city-299590",
    "name": "Kharsang",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.212,
    "lng": 95.4778
  },
  {
    "id": "city-249711",
    "name": "Changlang",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.112,
    "lng": 92.2338
  },
  {
    "id": "city-299587",
    "name": "Chayangtajo",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 29.088,
    "lng": 92.6098
  },
  {
    "id": "city-249700",
    "name": "Seppa",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.888,
    "lng": 92.14580000000001
  },
  {
    "id": "city-249707",
    "name": "Pasighat",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.776,
    "lng": 94.9378
  },
  {
    "id": "city-276622",
    "name": "Pasighat",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.776,
    "lng": 94.9378
  },
  {
    "id": "city-299592",
    "name": "Ruksin",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.338,
    "lng": 92.38380000000001
  },
  {
    "id": "city-299585",
    "name": "Raga",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.956,
    "lng": 94.8458
  },
  {
    "id": "city-299596",
    "name": "Yachuli",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.948,
    "lng": 93.41380000000001
  },
  {
    "id": "dist-677",
    "name": "Kra Daadi",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 26.36,
    "lng": 93.9618
  },
  {
    "id": "city-299594",
    "name": "Sangram",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 25.808,
    "lng": 93.8098
  },
  {
    "id": "city-249706",
    "name": "Basar",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.716,
    "lng": 94.4058
  },
  {
    "id": "city-249709",
    "name": "Tezu",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.026,
    "lng": 95.0158
  },
  {
    "id": "dist-666",
    "name": "Longding",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 26.342,
    "lng": 95.6918
  },
  {
    "id": "city-249708",
    "name": "Roing",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 29.1,
    "lng": 93.7178
  },
  {
    "id": "dist-719",
    "name": "Lower Siang",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 26.028,
    "lng": 94.6298
  },
  {
    "id": "city-299596",
    "name": "Yachuli",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.948,
    "lng": 93.41380000000001
  },
  {
    "id": "city-249703",
    "name": "Ziro",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.698,
    "lng": 93.8478
  },
  {
    "id": "city-249710",
    "name": "Namsai",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.948,
    "lng": 91.8858
  },
  {
    "id": "city-299591",
    "name": "Lemmi",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.658,
    "lng": 92.0158
  },
  {
    "id": "city-299584",
    "name": "Doimukh",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.04,
    "lng": 95.0018
  },
  {
    "id": "city-249701",
    "name": "Itanagar",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.728,
    "lng": 95.0418
  },
  {
    "id": "city-276621",
    "name": "Itanagar",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.728,
    "lng": 95.0418
  },
  {
    "id": "city-299583",
    "name": "Kimin",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.706,
    "lng": 92.5038
  },
  {
    "id": "city-249702",
    "name": "Naharlagun",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.02,
    "lng": 92.3418
  },
  {
    "id": "city-299597",
    "name": "Mechuka",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 25.918,
    "lng": 92.7718
  },
  {
    "id": "city-299595",
    "name": "Tato",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 27.954,
    "lng": 94.7838
  },
  {
    "id": "dist-679",
    "name": "Siang",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 27.274,
    "lng": 93.1118
  },
  {
    "id": "city-249698",
    "name": "Tawang",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.786,
    "lng": 94.2718
  },
  {
    "id": "city-249713",
    "name": "Deomali",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 26.896,
    "lng": 94.7218
  },
  {
    "id": "city-249714",
    "name": "Khonsa",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 25.990000000000002,
    "lng": 94.77980000000001
  },
  {
    "id": "dist-240",
    "name": "Upper Siang",
    "state": "Arunachal Pradesh",
    "type": "District",
    "lat": 25.63,
    "lng": 93.3318
  },
  {
    "id": "city-249704",
    "name": "Daporijo",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.914,
    "lng": 92.8478
  },
  {
    "id": "city-299582",
    "name": "Dumporijo",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.672,
    "lng": 92.0818
  },
  {
    "id": "city-249699",
    "name": "Bomdila",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.822,
    "lng": 94.5878
  },
  {
    "id": "city-299589",
    "name": "Kalaktang",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 25.262,
    "lng": 95.4758
  },
  {
    "id": "city-299593",
    "name": "Rupa",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.954,
    "lng": 93.7838
  },
  {
    "id": "city-249705",
    "name": "Along",
    "state": "Arunachal Pradesh",
    "type": "City",
    "lat": 28.172,
    "lng": 95.5418
  },
  {
    "id": "city-262892",
    "name": "Patacharkuchi",
    "state": "Assam",
    "type": "City",
    "lat": 24.5086,
    "lng": 93.68560000000001
  },
  {
    "id": "city-249847",
    "name": "Pathsala",
    "state": "Assam",
    "type": "City",
    "lat": 26.192600000000002,
    "lng": 93.6016
  },
  {
    "id": "city-277147",
    "name": "Goreswar",
    "state": "Assam",
    "type": "City",
    "lat": 25.1366,
    "lng": 93.0736
  },
  {
    "id": "city-249843",
    "name": "Barpeta",
    "state": "Assam",
    "type": "City",
    "lat": 25.5786,
    "lng": 89.9756
  },
  {
    "id": "city-249841",
    "name": "Barpeta Road",
    "state": "Assam",
    "type": "City",
    "lat": 23.9906,
    "lng": 93.17960000000001
  },
  {
    "id": "city-249844",
    "name": "Howli",
    "state": "Assam",
    "type": "City",
    "lat": 25.4506,
    "lng": 91.3356
  },
  {
    "id": "city-249842",
    "name": "Sarbhog",
    "state": "Assam",
    "type": "City",
    "lat": 23.684600000000003,
    "lng": 90.1416
  },
  {
    "id": "city-249846",
    "name": "Sarthebari",
    "state": "Assam",
    "type": "City",
    "lat": 25.9266,
    "lng": 92.7636
  },
  {
    "id": "city-249879",
    "name": "Biswanath Chariali",
    "state": "Assam",
    "type": "City",
    "lat": 26.5086,
    "lng": 90.4376
  },
  {
    "id": "city-249880",
    "name": "Gohpur",
    "state": "Assam",
    "type": "City",
    "lat": 25.5786,
    "lng": 93.0156
  },
  {
    "id": "city-249838",
    "name": "Abhayapuri",
    "state": "Assam",
    "type": "City",
    "lat": 24.300600000000003,
    "lng": 90.6456
  },
  {
    "id": "city-249836",
    "name": "Bongaigaon",
    "state": "Assam",
    "type": "City",
    "lat": 24.8626,
    "lng": 90.0676
  },
  {
    "id": "city-249939",
    "name": "Lakhipur Municipality",
    "state": "Assam",
    "type": "City",
    "lat": 25.404600000000002,
    "lng": 89.98960000000001
  },
  {
    "id": "city-249933",
    "name": "Silchar",
    "state": "Assam",
    "type": "City",
    "lat": 24.584600000000002,
    "lng": 93.4496
  },
  {
    "id": "city-277152",
    "name": "Sonai",
    "state": "Assam",
    "type": "City",
    "lat": 26.9326,
    "lng": 91.2776
  },
  {
    "id": "city-289552",
    "name": "Sonai",
    "state": "Assam",
    "type": "City",
    "lat": 26.9326,
    "lng": 91.2776
  },
  {
    "id": "city-249902",
    "name": "Moran Town",
    "state": "Assam",
    "type": "City",
    "lat": 23.4666,
    "lng": 91.9756
  },
  {
    "id": "city-249908",
    "name": "Sonari",
    "state": "Assam",
    "type": "City",
    "lat": 25.0686,
    "lng": 91.7816
  },
  {
    "id": "city-249823",
    "name": "Basugaon",
    "state": "Assam",
    "type": "City",
    "lat": 24.244600000000002,
    "lng": 93.6456
  },
  {
    "id": "city-249839",
    "name": "Bijni",
    "state": "Assam",
    "type": "City",
    "lat": 26.8446,
    "lng": 93.1416
  },
  {
    "id": "city-296999",
    "name": "Kajalgaon Tc",
    "state": "Assam",
    "type": "City",
    "lat": 23.7106,
    "lng": 92.1316
  },
  {
    "id": "city-249861",
    "name": "Kharupatia",
    "state": "Assam",
    "type": "City",
    "lat": 24.4886,
    "lng": 92.9856
  },
  {
    "id": "city-249860",
    "name": "Mangaldoi",
    "state": "Assam",
    "type": "City",
    "lat": 25.276600000000002,
    "lng": 93.42960000000001
  },
  {
    "id": "city-296992",
    "name": "Sipajhar Mb",
    "state": "Assam",
    "type": "City",
    "lat": 25.3106,
    "lng": 91.66760000000001
  },
  {
    "id": "city-249883",
    "name": "Dhemaji",
    "state": "Assam",
    "type": "City",
    "lat": 23.2406,
    "lng": 91.5616
  },
  {
    "id": "city-249884",
    "name": "Silapathar",
    "state": "Assam",
    "type": "City",
    "lat": 25.090600000000002,
    "lng": 93.2796
  },
  {
    "id": "city-300488",
    "name": "Bilasipara Tc",
    "state": "Assam",
    "type": "City",
    "lat": 26.1386,
    "lng": 90.0716
  },
  {
    "id": "city-300489",
    "name": "Chapar Tc",
    "state": "Assam",
    "type": "City",
    "lat": 24.3886,
    "lng": 92.55760000000001
  },
  {
    "id": "city-300490",
    "name": "Chapar Tc",
    "state": "Assam",
    "type": "City",
    "lat": 24.3886,
    "lng": 92.55760000000001
  },
  {
    "id": "city-249827",
    "name": "Dhubri",
    "state": "Assam",
    "type": "City",
    "lat": 26.832600000000003,
    "lng": 91.8896
  },
  {
    "id": "city-249826",
    "name": "Gauripur",
    "state": "Assam",
    "type": "City",
    "lat": 24.262600000000003,
    "lng": 93.61160000000001
  },
  {
    "id": "city-300491",
    "name": "Golokganj Tc",
    "state": "Assam",
    "type": "City",
    "lat": 26.5786,
    "lng": 91.1996
  },
  {
    "id": "city-249828",
    "name": "Sapatgram",
    "state": "Assam",
    "type": "City",
    "lat": 25.7526,
    "lng": 90.5536
  },
  {
    "id": "city-249898",
    "name": "Chabua",
    "state": "Assam",
    "type": "City",
    "lat": 27.0606,
    "lng": 90.9576
  },
  {
    "id": "city-249896",
    "name": "Dibrugarh",
    "state": "Assam",
    "type": "City",
    "lat": 26.3366,
    "lng": 90.80160000000001
  },
  {
    "id": "city-249903",
    "name": "Naharkatiya",
    "state": "Assam",
    "type": "City",
    "lat": 23.6506,
    "lng": 93.67960000000001
  },
  {
    "id": "city-249904",
    "name": "Namrup",
    "state": "Assam",
    "type": "City",
    "lat": 24.262600000000003,
    "lng": 91.3876
  },
  {
    "id": "city-249930",
    "name": "Haflong",
    "state": "Assam",
    "type": "City",
    "lat": 24.5946,
    "lng": 91.67960000000001
  },
  {
    "id": "city-249931",
    "name": "Mahur",
    "state": "Assam",
    "type": "City",
    "lat": 26.2586,
    "lng": 90.3836
  },
  {
    "id": "city-249932",
    "name": "Maibong",
    "state": "Assam",
    "type": "City",
    "lat": 24.1186,
    "lng": 92.33160000000001
  },
  {
    "id": "city-249929",
    "name": "Umrangso",
    "state": "Assam",
    "type": "City",
    "lat": 25.1126,
    "lng": 91.0016
  },
  {
    "id": "city-249834",
    "name": "Goalpara",
    "state": "Assam",
    "type": "City",
    "lat": 25.878600000000002,
    "lng": 91.4996
  },
  {
    "id": "city-300492",
    "name": "Lakhipur Tc",
    "state": "Assam",
    "type": "City",
    "lat": 25.3306,
    "lng": 90.5116
  },
  {
    "id": "city-249922",
    "name": "Barpathar",
    "state": "Assam",
    "type": "City",
    "lat": 23.570600000000002,
    "lng": 93.42360000000001
  },
  {
    "id": "city-277144",
    "name": "Bokakhat",
    "state": "Assam",
    "type": "City",
    "lat": 25.7986,
    "lng": 92.4276
  },
  {
    "id": "city-300494",
    "name": "Bokakhat Tc",
    "state": "Assam",
    "type": "City",
    "lat": 25.7206,
    "lng": 92.0096
  },
  {
    "id": "city-249918",
    "name": "Dergaon",
    "state": "Assam",
    "type": "City",
    "lat": 24.7086,
    "lng": 93.6616
  },
  {
    "id": "city-249919",
    "name": "Golaghat",
    "state": "Assam",
    "type": "City",
    "lat": 25.9386,
    "lng": 92.1756
  },
  {
    "id": "city-249921",
    "name": "Sarupathar",
    "state": "Assam",
    "type": "City",
    "lat": 23.8386,
    "lng": 93.6516
  },
  {
    "id": "city-249944",
    "name": "Hailakandi",
    "state": "Assam",
    "type": "City",
    "lat": 25.744600000000002,
    "lng": 90.1616
  },
  {
    "id": "city-249945",
    "name": "Lala",
    "state": "Assam",
    "type": "City",
    "lat": 26.756600000000002,
    "lng": 92.4136
  },
  {
    "id": "city-249871",
    "name": "Doboka",
    "state": "Assam",
    "type": "City",
    "lat": 26.6046,
    "lng": 90.8216
  },
  {
    "id": "city-249870",
    "name": "Hojai",
    "state": "Assam",
    "type": "City",
    "lat": 25.782600000000002,
    "lng": 91.6276
  },
  {
    "id": "city-249872",
    "name": "Lumding",
    "state": "Assam",
    "type": "City",
    "lat": 24.596600000000002,
    "lng": 90.3336
  },
  {
    "id": "city-249912",
    "name": "Jorhat",
    "state": "Assam",
    "type": "City",
    "lat": 25.1006,
    "lng": 91.9576
  },
  {
    "id": "city-249915",
    "name": "Mariani",
    "state": "Assam",
    "type": "City",
    "lat": 23.666600000000003,
    "lng": 92.31960000000001
  },
  {
    "id": "city-263017",
    "name": "Teoktc",
    "state": "Assam",
    "type": "City",
    "lat": 23.864600000000003,
    "lng": 92.4576
  },
  {
    "id": "city-249916",
    "name": "Titabor Town",
    "state": "Assam",
    "type": "City",
    "lat": 24.2706,
    "lng": 92.5316
  },
  {
    "id": "city-249855",
    "name": "North Guwahati",
    "state": "Assam",
    "type": "City",
    "lat": 23.8106,
    "lng": 90.4156
  },
  {
    "id": "city-249851",
    "name": "Palasbari",
    "state": "Assam",
    "type": "City",
    "lat": 23.910600000000002,
    "lng": 92.1076
  },
  {
    "id": "city-277143",
    "name": "Rangia",
    "state": "Assam",
    "type": "City",
    "lat": 25.1366,
    "lng": 91.8896
  },
  {
    "id": "city-249854",
    "name": "Guwahati",
    "state": "Assam",
    "type": "City",
    "lat": 23.532600000000002,
    "lng": 90.0216
  },
  {
    "id": "city-253264",
    "name": "Bakalia",
    "state": "Assam",
    "type": "City",
    "lat": 25.326600000000003,
    "lng": 90.1636
  },
  {
    "id": "city-249926",
    "name": "Bokajan",
    "state": "Assam",
    "type": "City",
    "lat": 25.2406,
    "lng": 92.31360000000001
  },
  {
    "id": "city-299966",
    "name": "Deithor Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 26.256600000000002,
    "lng": 89.95360000000001
  },
  {
    "id": "city-249925",
    "name": "Diphu",
    "state": "Assam",
    "type": "City",
    "lat": 26.1126,
    "lng": 92.4496
  },
  {
    "id": "city-249928",
    "name": "Dokmoka",
    "state": "Assam",
    "type": "City",
    "lat": 24.5606,
    "lng": 93.8896
  },
  {
    "id": "city-299967",
    "name": "Dolamara Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 24.3926,
    "lng": 92.0096
  },
  {
    "id": "city-249927",
    "name": "Howraghat",
    "state": "Assam",
    "type": "City",
    "lat": 25.878600000000002,
    "lng": 90.8276
  },
  {
    "id": "city-277148",
    "name": "Langhin",
    "state": "Assam",
    "type": "City",
    "lat": 26.718600000000002,
    "lng": 90.1316
  },
  {
    "id": "city-299968",
    "name": "Manja Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 24.108600000000003,
    "lng": 90.1016
  },
  {
    "id": "city-299969",
    "name": "Phuloni Centre Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 23.806600000000003,
    "lng": 90.6596
  },
  {
    "id": "city-299970",
    "name": "Rongmongve Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 26.2866,
    "lng": 91.2516
  },
  {
    "id": "city-299971",
    "name": "Samelangso Town Committee",
    "state": "Assam",
    "type": "City",
    "lat": 23.6306,
    "lng": 93.79560000000001
  },
  {
    "id": "city-249821",
    "name": "Gossaigaon",
    "state": "Assam",
    "type": "City",
    "lat": 27.1386,
    "lng": 93.8876
  },
  {
    "id": "city-300487",
    "name": "Kokrajhar Mb",
    "state": "Assam",
    "type": "City",
    "lat": 25.1046,
    "lng": 90.3856
  },
  {
    "id": "city-249881",
    "name": "Bihpuria",
    "state": "Assam",
    "type": "City",
    "lat": 26.4406,
    "lng": 93.0656
  },
  {
    "id": "city-253211",
    "name": "Dhakuakhana",
    "state": "Assam",
    "type": "City",
    "lat": 26.8746,
    "lng": 93.9276
  },
  {
    "id": "city-253212",
    "name": "Narayanpur",
    "state": "Assam",
    "type": "City",
    "lat": 23.858600000000003,
    "lng": 91.3116
  },
  {
    "id": "city-249882",
    "name": "North Lakhimpur",
    "state": "Assam",
    "type": "City",
    "lat": 26.184600000000003,
    "lng": 92.5376
  },
  {
    "id": "dist-706",
    "name": "Majuli",
    "state": "Assam",
    "type": "District",
    "lat": 24.4086,
    "lng": 91.9136
  },
  {
    "id": "city-249864",
    "name": "Marigaon",
    "state": "Assam",
    "type": "City",
    "lat": 26.4406,
    "lng": 93.4336
  },
  {
    "id": "city-277145",
    "name": "Dhing",
    "state": "Assam",
    "type": "City",
    "lat": 25.4206,
    "lng": 92.9976
  },
  {
    "id": "city-249869",
    "name": "Kampur Town",
    "state": "Assam",
    "type": "City",
    "lat": 24.9526,
    "lng": 91.8176
  },
  {
    "id": "city-300495",
    "name": "Lanka Mb",
    "state": "Assam",
    "type": "City",
    "lat": 24.0926,
    "lng": 90.3416
  },
  {
    "id": "city-249866",
    "name": "Nagaon",
    "state": "Assam",
    "type": "City",
    "lat": 23.7206,
    "lng": 90.5856
  },
  {
    "id": "city-271990",
    "name": "Raha",
    "state": "Assam",
    "type": "City",
    "lat": 26.000600000000002,
    "lng": 92.97760000000001
  },
  {
    "id": "city-249858",
    "name": "Nalbari",
    "state": "Assam",
    "type": "City",
    "lat": 23.9506,
    "lng": 93.5716
  },
  {
    "id": "city-249857",
    "name": "Tihu",
    "state": "Assam",
    "type": "City",
    "lat": 26.5806,
    "lng": 92.9576
  },
  {
    "id": "city-249906",
    "name": "Amguri",
    "state": "Assam",
    "type": "City",
    "lat": 25.506600000000002,
    "lng": 93.3756
  },
  {
    "id": "city-277146",
    "name": "Demow",
    "state": "Assam",
    "type": "City",
    "lat": 26.4566,
    "lng": 93.1136
  },
  {
    "id": "city-249907",
    "name": "Nazira",
    "state": "Assam",
    "type": "City",
    "lat": 23.314600000000002,
    "lng": 89.9996
  },
  {
    "id": "city-249905",
    "name": "Sibsagar",
    "state": "Assam",
    "type": "City",
    "lat": 25.756600000000002,
    "lng": 90.2296
  },
  {
    "id": "city-253214",
    "name": "Simaluguri",
    "state": "Assam",
    "type": "City",
    "lat": 26.8486,
    "lng": 92.67360000000001
  },
  {
    "id": "city-249875",
    "name": "Dhekiajuli",
    "state": "Assam",
    "type": "City",
    "lat": 23.812600000000003,
    "lng": 92.3336
  },
  {
    "id": "city-296973",
    "name": "Jamugurihat Mb",
    "state": "Assam",
    "type": "City",
    "lat": 24.7966,
    "lng": 90.9816
  },
  {
    "id": "city-300493",
    "name": "Jamugurihat Tc",
    "state": "Assam",
    "type": "City",
    "lat": 23.2326,
    "lng": 90.4976
  },
  {
    "id": "city-249876",
    "name": "Rangapara",
    "state": "Assam",
    "type": "City",
    "lat": 26.562600000000003,
    "lng": 93.0716
  },
  {
    "id": "city-277151",
    "name": "Sootea",
    "state": "Assam",
    "type": "City",
    "lat": 24.346600000000002,
    "lng": 91.3996
  },
  {
    "id": "city-249877",
    "name": "Tezpur",
    "state": "Assam",
    "type": "City",
    "lat": 24.968600000000002,
    "lng": 92.6816
  },
  {
    "id": "dist-707",
    "name": "South Salmara Mancachar",
    "state": "Assam",
    "type": "District",
    "lat": 26.1686,
    "lng": 93.59360000000001
  },
  {
    "id": "city-249941",
    "name": "Badarpur",
    "state": "Assam",
    "type": "City",
    "lat": 23.486600000000003,
    "lng": 91.92360000000001
  },
  {
    "id": "city-249940",
    "name": "Karimganj",
    "state": "Assam",
    "type": "City",
    "lat": 26.7646,
    "lng": 93.47760000000001
  },
  {
    "id": "city-302545",
    "name": "Patharkandi",
    "state": "Assam",
    "type": "City",
    "lat": 25.582600000000003,
    "lng": 92.69160000000001
  },
  {
    "id": "city-277150",
    "name": "Ramkrishna Nagar",
    "state": "Assam",
    "type": "City",
    "lat": 23.7146,
    "lng": 90.3996
  },
  {
    "id": "city-289553",
    "name": "Ramkrishnanagar",
    "state": "Assam",
    "type": "City",
    "lat": 24.6746,
    "lng": 92.83160000000001
  },
  {
    "id": "dist-756",
    "name": "Tamulpur",
    "state": "Assam",
    "type": "District",
    "lat": 23.468600000000002,
    "lng": 92.8536
  },
  {
    "id": "city-259861",
    "name": "Chapakhowa",
    "state": "Assam",
    "type": "City",
    "lat": 25.518600000000003,
    "lng": 91.5236
  },
  {
    "id": "city-249890",
    "name": "Digboi",
    "state": "Assam",
    "type": "City",
    "lat": 25.5406,
    "lng": 91.83760000000001
  },
  {
    "id": "city-249886",
    "name": "Doom Dooma",
    "state": "Assam",
    "type": "City",
    "lat": 24.3226,
    "lng": 93.55160000000001
  },
  {
    "id": "city-249887",
    "name": "Makum",
    "state": "Assam",
    "type": "City",
    "lat": 26.0146,
    "lng": 90.81960000000001
  },
  {
    "id": "city-249892",
    "name": "Margherita",
    "state": "Assam",
    "type": "City",
    "lat": 24.2606,
    "lng": 92.81360000000001
  },
  {
    "id": "city-249888",
    "name": "Tinsukia",
    "state": "Assam",
    "type": "City",
    "lat": 23.248600000000003,
    "lng": 89.95360000000001
  },
  {
    "id": "city-249859",
    "name": "Tangla",
    "state": "Assam",
    "type": "City",
    "lat": 23.9266,
    "lng": 92.3796
  },
  {
    "id": "city-249862",
    "name": "Udalguri",
    "state": "Assam",
    "type": "City",
    "lat": 24.126600000000003,
    "lng": 91.84360000000001
  },
  {
    "id": "city-301400",
    "name": "Baithalangso",
    "state": "Assam",
    "type": "City",
    "lat": 24.986600000000003,
    "lng": 91.6876
  },
  {
    "id": "city-249924",
    "name": "Donkamokam",
    "state": "Assam",
    "type": "City",
    "lat": 24.872600000000002,
    "lng": 93.7056
  },
  {
    "id": "city-249923",
    "name": "Hamren",
    "state": "Assam",
    "type": "City",
    "lat": 23.454600000000003,
    "lng": 90.9316
  },
  {
    "id": "city-249587",
    "name": "Araria",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7801,
    "lng": 84.46910000000001
  },
  {
    "id": "city-249586",
    "name": "Forbesganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1461,
    "lng": 85.77510000000001
  },
  {
    "id": "city-249585",
    "name": "Jogabani",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5701,
    "lng": 84.1671
  },
  {
    "id": "city-299113",
    "name": "Jokihat",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6721,
    "lng": 83.22510000000001
  },
  {
    "id": "city-299112",
    "name": "Narpatganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.6041,
    "lng": 85.2211
  },
  {
    "id": "city-299114",
    "name": "Raniganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2241,
    "lng": 85.3371
  },
  {
    "id": "city-253281",
    "name": "Arwal",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1221,
    "lng": 84.35910000000001
  },
  {
    "id": "city-299116",
    "name": "Kurtha",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0101,
    "lng": 84.7671
  },
  {
    "id": "city-290025",
    "name": "Aurangabad",
    "state": "Bihar",
    "type": "City",
    "lat": 22.2881,
    "lng": 85.4651
  },
  {
    "id": "city-299118",
    "name": "Barun",
    "state": "Bihar",
    "type": "City",
    "lat": 24.9041,
    "lng": 85.6011
  },
  {
    "id": "city-249674",
    "name": "Daudnagar",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6421,
    "lng": 82.5831
  },
  {
    "id": "city-299117",
    "name": "Deo",
    "state": "Bihar",
    "type": "City",
    "lat": 25.2761,
    "lng": 85.1331
  },
  {
    "id": "city-305270",
    "name": "JAMHAUR",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5441,
    "lng": 84.17710000000001
  },
  {
    "id": "city-305834",
    "name": "MADANPUR",
    "state": "Bihar",
    "type": "City",
    "lat": 24.4321,
    "lng": 84.6011
  },
  {
    "id": "city-249678",
    "name": "Nabinagar",
    "state": "Bihar",
    "type": "City",
    "lat": 23.7501,
    "lng": 82.70710000000001
  },
  {
    "id": "city-249675",
    "name": "Rafiganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8081,
    "lng": 83.0331
  },
  {
    "id": "city-249632",
    "name": "Amarpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4241,
    "lng": 84.1691
  },
  {
    "id": "city-249633",
    "name": "Banka",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5701,
    "lng": 85.2471
  },
  {
    "id": "city-300565",
    "name": "Bounsi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5441,
    "lng": 85.15310000000001
  },
  {
    "id": "city-299121",
    "name": "Katoria",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3541,
    "lng": 85.59110000000001
  },
  {
    "id": "city-277129",
    "name": "Bakhri",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5421,
    "lng": 85.09110000000001
  },
  {
    "id": "city-277136",
    "name": "Balia",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6021,
    "lng": 86.23910000000001
  },
  {
    "id": "city-300544",
    "name": "Barauni",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1401,
    "lng": 82.9971
  },
  {
    "id": "city-249624",
    "name": "Begusarai",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1661,
    "lng": 85.3951
  },
  {
    "id": "city-276643",
    "name": "Bihat",
    "state": "Bihar",
    "type": "City",
    "lat": 25.112099999999998,
    "lng": 86.04910000000001
  },
  {
    "id": "city-277130",
    "name": "Teghara",
    "state": "Bihar",
    "type": "City",
    "lat": 25.9001,
    "lng": 83.29310000000001
  },
  {
    "id": "city-299131",
    "name": "Akbarnagar",
    "state": "Bihar",
    "type": "City",
    "lat": 22.1521,
    "lng": 85.9851
  },
  {
    "id": "city-249630",
    "name": "Bhagalpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8361,
    "lng": 82.9411
  },
  {
    "id": "city-299123",
    "name": "Habibpur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.6381,
    "lng": 85.5391
  },
  {
    "id": "city-277134",
    "name": "Kahalgaon",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8361,
    "lng": 83.08510000000001
  },
  {
    "id": "city-249627",
    "name": "Naugachhia",
    "state": "Bihar",
    "type": "City",
    "lat": 24.9421,
    "lng": 86.1871
  },
  {
    "id": "city-299135",
    "name": "Pirpainti",
    "state": "Bihar",
    "type": "City",
    "lat": 25.9281,
    "lng": 84.60910000000001
  },
  {
    "id": "city-299126",
    "name": "Sabour",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5041,
    "lng": 83.89710000000001
  },
  {
    "id": "city-249629",
    "name": "Sultanganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7221,
    "lng": 85.26310000000001
  },
  {
    "id": "city-249659",
    "name": "Arrah",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5041,
    "lng": 86.20110000000001
  },
  {
    "id": "city-249661",
    "name": "Behea",
    "state": "Bihar",
    "type": "City",
    "lat": 24.9941,
    "lng": 84.39110000000001
  },
  {
    "id": "city-299146",
    "name": "Garhani",
    "state": "Bihar",
    "type": "City",
    "lat": 25.9921,
    "lng": 82.81710000000001
  },
  {
    "id": "city-249662",
    "name": "Jagdishpur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3101,
    "lng": 85.7791
  },
  {
    "id": "city-249660",
    "name": "Koilwar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5221,
    "lng": 86.0231
  },
  {
    "id": "city-249663",
    "name": "Piro",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7561,
    "lng": 86.01310000000001
  },
  {
    "id": "city-249658",
    "name": "Shahpur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.2421,
    "lng": 83.4471
  },
  {
    "id": "city-300545",
    "name": "Brahmpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2381,
    "lng": 84.9551
  },
  {
    "id": "city-249665",
    "name": "Buxar",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8441,
    "lng": 85.7411
  },
  {
    "id": "city-300546",
    "name": "Chausa",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3501,
    "lng": 83.5471
  },
  {
    "id": "city-249664",
    "name": "Dumraon",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6281,
    "lng": 83.4131
  },
  {
    "id": "city-300547",
    "name": "Itarhi",
    "state": "Bihar",
    "type": "City",
    "lat": 23.6421,
    "lng": 83.35910000000001
  },
  {
    "id": "city-301283",
    "name": "Baheri",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0301,
    "lng": 85.21910000000001
  },
  {
    "id": "city-276642",
    "name": "Benipur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6781,
    "lng": 85.6751
  },
  {
    "id": "city-299170",
    "name": "Bharwara",
    "state": "Bihar",
    "type": "City",
    "lat": 22.9921,
    "lng": 85.51310000000001
  },
  {
    "id": "city-301284",
    "name": "Biraul",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6901,
    "lng": 85.6791
  },
  {
    "id": "city-249600",
    "name": "Darbhanga",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0841,
    "lng": 84.7731
  },
  {
    "id": "city-301285",
    "name": "GHANSHYAMPUR",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7901,
    "lng": 82.96310000000001
  },
  {
    "id": "city-301277",
    "name": "HAYAGHAT",
    "state": "Bihar",
    "type": "City",
    "lat": 24.9221,
    "lng": 83.4231
  },
  {
    "id": "city-301286",
    "name": "Jale",
    "state": "Bihar",
    "type": "City",
    "lat": 24.4961,
    "lng": 84.9531
  },
  {
    "id": "city-299158",
    "name": "KAMTAUL Ahiyari",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7761,
    "lng": 85.6331
  },
  {
    "id": "city-301276",
    "name": "KUSHESWAR ASTHAN EAST",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1141,
    "lng": 84.9911
  },
  {
    "id": "city-301272",
    "name": "SINGHWARA",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1161,
    "lng": 85.8451
  },
  {
    "id": "city-249683",
    "name": "Bodh Gaya",
    "state": "Bihar",
    "type": "City",
    "lat": 23.6661,
    "lng": 83.7351
  },
  {
    "id": "city-299185",
    "name": "Dobhi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5681,
    "lng": 86.1851
  },
  {
    "id": "city-299188",
    "name": "Fatehpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6501,
    "lng": 83.9911
  },
  {
    "id": "city-249680",
    "name": "Gaya",
    "state": "Bihar",
    "type": "City",
    "lat": 24.548099999999998,
    "lng": 84.5651
  },
  {
    "id": "city-299186",
    "name": "Imamganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3721,
    "lng": 85.6611
  },
  {
    "id": "city-299187",
    "name": "Khizarsarai",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7941,
    "lng": 86.1911
  },
  {
    "id": "city-249682",
    "name": "Sherghati",
    "state": "Bihar",
    "type": "City",
    "lat": 23.4301,
    "lng": 83.09110000000001
  },
  {
    "id": "city-249679",
    "name": "Tekari",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1001,
    "lng": 85.37310000000001
  },
  {
    "id": "city-299189",
    "name": "Wazirganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.4301,
    "lng": 84.8271
  },
  {
    "id": "city-277131",
    "name": "Barauli",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0161,
    "lng": 83.15310000000001
  },
  {
    "id": "city-249606",
    "name": "Gopalganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.4181,
    "lng": 85.1271
  },
  {
    "id": "city-299138",
    "name": "Hathua",
    "state": "Bihar",
    "type": "City",
    "lat": 23.170099999999998,
    "lng": 82.72710000000001
  },
  {
    "id": "city-249604",
    "name": "Kataiya",
    "state": "Bihar",
    "type": "City",
    "lat": 25.9001,
    "lng": 85.5171
  },
  {
    "id": "city-249605",
    "name": "Mirganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8161,
    "lng": 82.38510000000001
  },
  {
    "id": "city-249687",
    "name": "Jamui",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6201,
    "lng": 83.2051
  },
  {
    "id": "city-249688",
    "name": "Jhajha",
    "state": "Bihar",
    "type": "City",
    "lat": 24.048099999999998,
    "lng": 85.94510000000001
  },
  {
    "id": "city-299198",
    "name": "Sikandra",
    "state": "Bihar",
    "type": "City",
    "lat": 24.4341,
    "lng": 85.2551
  },
  {
    "id": "city-300548",
    "name": "Ghoshi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1961,
    "lng": 85.7731
  },
  {
    "id": "city-249672",
    "name": "Jehanabad",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8841,
    "lng": 85.98110000000001
  },
  {
    "id": "city-301334",
    "name": "KAKO",
    "state": "Bihar",
    "type": "City",
    "lat": 24.4841,
    "lng": 84.5811
  },
  {
    "id": "city-249673",
    "name": "Makhdumpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.708099999999998,
    "lng": 82.7891
  },
  {
    "id": "city-249666",
    "name": "Bhabua",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6541,
    "lng": 84.5631
  },
  {
    "id": "city-299203",
    "name": "Hata",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8201,
    "lng": 85.9971
  },
  {
    "id": "city-299204",
    "name": "Kudra",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8021,
    "lng": 83.84710000000001
  },
  {
    "id": "city-276648",
    "name": "Mohaniya",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3161,
    "lng": 83.1491
  },
  {
    "id": "city-299206",
    "name": "Ramgarh",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6521,
    "lng": 84.8931
  },
  {
    "id": "city-301385",
    "name": "AMDABAD",
    "state": "Bihar",
    "type": "City",
    "lat": 22.2961,
    "lng": 83.3451
  },
  {
    "id": "city-301330",
    "name": "BARARI",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6421,
    "lng": 86.1911
  },
  {
    "id": "city-299212",
    "name": "Balrampur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.0321,
    "lng": 85.48910000000001
  },
  {
    "id": "city-276406",
    "name": "Barsoi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5721,
    "lng": 86.0211
  },
  {
    "id": "city-249595",
    "name": "Katihar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1801,
    "lng": 85.1971
  },
  {
    "id": "city-299210",
    "name": "Korha",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5981,
    "lng": 82.5231
  },
  {
    "id": "city-299209",
    "name": "Kursela",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8381,
    "lng": 85.22710000000001
  },
  {
    "id": "city-249596",
    "name": "Manihari",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8861,
    "lng": 85.45110000000001
  },
  {
    "id": "city-299218",
    "name": "Alauli",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4961,
    "lng": 85.66510000000001
  },
  {
    "id": "city-299214",
    "name": "Beldaur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8541,
    "lng": 86.1311
  },
  {
    "id": "city-249626",
    "name": "Gogri Jamalpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2361,
    "lng": 84.8931
  },
  {
    "id": "city-249625",
    "name": "Khagaria",
    "state": "Bihar",
    "type": "City",
    "lat": 22.5041,
    "lng": 84.89710000000001
  },
  {
    "id": "city-299216",
    "name": "Mansi",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5441,
    "lng": 83.8491
  },
  {
    "id": "city-299215",
    "name": "Parbatta",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7701,
    "lng": 84.1191
  },
  {
    "id": "city-249589",
    "name": "Bahadurganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0381,
    "lng": 85.7551
  },
  {
    "id": "city-249590",
    "name": "Kishanganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7081,
    "lng": 84.9731
  },
  {
    "id": "city-299298",
    "name": "Pauakhali",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6641,
    "lng": 82.4491
  },
  {
    "id": "city-249588",
    "name": "Thakurganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3301,
    "lng": 82.72710000000001
  },
  {
    "id": "city-249638",
    "name": "Barahiya",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5501,
    "lng": 82.73110000000001
  },
  {
    "id": "city-249639",
    "name": "Lakhisarai",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7461,
    "lng": 84.7831
  },
  {
    "id": "city-299148",
    "name": "Suryagadha",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7741,
    "lng": 83.34710000000001
  },
  {
    "id": "city-299227",
    "name": "Alamnagar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.676099999999998,
    "lng": 84.7971
  },
  {
    "id": "city-299224",
    "name": "Bihariganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7781,
    "lng": 85.2471
  },
  {
    "id": "city-249597",
    "name": "Madhepura",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3781,
    "lng": 84.3751
  },
  {
    "id": "city-249598",
    "name": "Murliganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8021,
    "lng": 82.33510000000001
  },
  {
    "id": "city-299225",
    "name": "Singheshwar",
    "state": "Bihar",
    "type": "City",
    "lat": 26.0941,
    "lng": 85.53110000000001
  },
  {
    "id": "city-299226",
    "name": "Udakishunganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0321,
    "lng": 84.68910000000001
  },
  {
    "id": "city-299291",
    "name": "Benipatti",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7881,
    "lng": 83.9251
  },
  {
    "id": "city-249581",
    "name": "Ghoghardiha",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7481,
    "lng": 84.90910000000001
  },
  {
    "id": "city-249578",
    "name": "Jainagar",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5901,
    "lng": 82.4191
  },
  {
    "id": "city-249580",
    "name": "Jhanjharpur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.0781,
    "lng": 84.32310000000001
  },
  {
    "id": "city-249579",
    "name": "Madhubani",
    "state": "Bihar",
    "type": "City",
    "lat": 25.2301,
    "lng": 83.19510000000001
  },
  {
    "id": "city-299284",
    "name": "Phulparas",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6401,
    "lng": 86.12910000000001
  },
  {
    "id": "city-300549",
    "name": "Asarganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.5781,
    "lng": 85.0471
  },
  {
    "id": "city-299171",
    "name": "Haweli Kharagpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0741,
    "lng": 83.64710000000001
  },
  {
    "id": "city-249635",
    "name": "Jamalpur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1921,
    "lng": 86.0811
  },
  {
    "id": "city-249634",
    "name": "Munger",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1481,
    "lng": 83.4531
  },
  {
    "id": "city-300550",
    "name": "Sangrampur",
    "state": "Bihar",
    "type": "City",
    "lat": 26.0921,
    "lng": 82.65310000000001
  },
  {
    "id": "city-299175",
    "name": "Tarapur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1301,
    "lng": 83.0151
  },
  {
    "id": "city-300564",
    "name": "Baruraaj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3641,
    "lng": 82.9651
  },
  {
    "id": "city-249602",
    "name": "Kanti",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5221,
    "lng": 83.1671
  },
  {
    "id": "city-299230",
    "name": "Kurhani",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8881,
    "lng": 85.7771
  },
  {
    "id": "city-300551",
    "name": "Madhopur Susta",
    "state": "Bihar",
    "type": "City",
    "lat": 23.0161,
    "lng": 83.4411
  },
  {
    "id": "city-299223",
    "name": "Minapur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.4361,
    "lng": 82.60510000000001
  },
  {
    "id": "city-249601",
    "name": "Motipur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.1561,
    "lng": 82.3331
  },
  {
    "id": "city-300552",
    "name": "Muraul",
    "state": "Bihar",
    "type": "City",
    "lat": 22.9241,
    "lng": 82.5091
  },
  {
    "id": "city-249603",
    "name": "Muzaffarpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1301,
    "lng": 84.46310000000001
  },
  {
    "id": "city-253219",
    "name": "Sahebganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.9221,
    "lng": 85.26310000000001
  },
  {
    "id": "city-299240",
    "name": "Sakra",
    "state": "Bihar",
    "type": "City",
    "lat": 24.9521,
    "lng": 82.4971
  },
  {
    "id": "city-299228",
    "name": "Saraiya",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5281,
    "lng": 83.9051
  },
  {
    "id": "city-299293",
    "name": "Asthawan",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8901,
    "lng": 83.3511
  },
  {
    "id": "city-249642",
    "name": "Biharsharif",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0901,
    "lng": 85.2471
  },
  {
    "id": "city-299288",
    "name": "Chandi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.9821,
    "lng": 84.1391
  },
  {
    "id": "city-299301",
    "name": "Ekangarsarai",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1821,
    "lng": 84.6671
  },
  {
    "id": "city-299285",
    "name": "Giriak",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3341,
    "lng": 86.0511
  },
  {
    "id": "city-276429",
    "name": "Harnaut",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7101,
    "lng": 85.8751
  },
  {
    "id": "city-249643",
    "name": "Hilsa",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1301,
    "lng": 83.0151
  },
  {
    "id": "city-249644",
    "name": "Islampur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5421,
    "lng": 84.0111
  },
  {
    "id": "city-299454",
    "name": "Nalanda",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3661,
    "lng": 86.06710000000001
  },
  {
    "id": "city-299296",
    "name": "Parbalpur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7861,
    "lng": 83.12710000000001
  },
  {
    "id": "city-300553",
    "name": "Pawapuri",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7821,
    "lng": 83.8991
  },
  {
    "id": "city-299300",
    "name": "Rahui",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3461,
    "lng": 83.7111
  },
  {
    "id": "city-299316",
    "name": "Rajgir",
    "state": "Bihar",
    "type": "City",
    "lat": 23.7381,
    "lng": 83.1511
  },
  {
    "id": "city-299297",
    "name": "Sarmera",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3901,
    "lng": 82.62710000000001
  },
  {
    "id": "city-249646",
    "name": "Silao",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5041,
    "lng": 82.60910000000001
  },
  {
    "id": "city-249686",
    "name": "Hisua",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7081,
    "lng": 83.93310000000001
  },
  {
    "id": "city-249684",
    "name": "Nawada",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2201,
    "lng": 83.6851
  },
  {
    "id": "city-300554",
    "name": "Rajauli",
    "state": "Bihar",
    "type": "City",
    "lat": 22.1041,
    "lng": 85.9051
  },
  {
    "id": "city-249685",
    "name": "Warisaliganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6281,
    "lng": 85.86110000000001
  },
  {
    "id": "city-249562",
    "name": "Bagaha",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1241,
    "lng": 86.1331
  },
  {
    "id": "city-249564",
    "name": "Bettiah",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6181,
    "lng": 84.8151
  },
  {
    "id": "city-249563",
    "name": "Chanpatia",
    "state": "Bihar",
    "type": "City",
    "lat": 22.1621,
    "lng": 86.1511
  },
  {
    "id": "city-300555",
    "name": "Lauria",
    "state": "Bihar",
    "type": "City",
    "lat": 22.4361,
    "lng": 85.9731
  },
  {
    "id": "city-300556",
    "name": "Macharganwa",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0401,
    "lng": 86.1451
  },
  {
    "id": "city-249561",
    "name": "Narkatiaganj",
    "state": "Bihar",
    "type": "City",
    "lat": 22.7781,
    "lng": 83.39110000000001
  },
  {
    "id": "city-249560",
    "name": "Ramnagar",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3821,
    "lng": 86.2351
  },
  {
    "id": "city-277098",
    "name": "Bakhtiyarpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0801,
    "lng": 85.1371
  },
  {
    "id": "city-249656",
    "name": "Barh",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2181,
    "lng": 84.33510000000001
  },
  {
    "id": "city-299176",
    "name": "Bihta",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2521,
    "lng": 85.3891
  },
  {
    "id": "city-276644",
    "name": "Bikarm",
    "state": "Bihar",
    "type": "City",
    "lat": 24.4321,
    "lng": 84.6811
  },
  {
    "id": "city-249648",
    "name": "Danapur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.9461,
    "lng": 85.23110000000001
  },
  {
    "id": "city-249653",
    "name": "Fatuha",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3381,
    "lng": 86.1751
  },
  {
    "id": "city-249649",
    "name": "Khagaul",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1061,
    "lng": 82.71910000000001
  },
  {
    "id": "city-249654",
    "name": "Khusrupur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.7261,
    "lng": 84.1871
  },
  {
    "id": "city-249647",
    "name": "Maner",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6941,
    "lng": 83.4991
  },
  {
    "id": "city-249652",
    "name": "Masaurhi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6801,
    "lng": 84.4731
  },
  {
    "id": "city-249657",
    "name": "Mokama",
    "state": "Bihar",
    "type": "City",
    "lat": 23.0801,
    "lng": 83.3451
  },
  {
    "id": "city-276645",
    "name": "Naubatpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7881,
    "lng": 84.9011
  },
  {
    "id": "city-299205",
    "name": "Paliganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8721,
    "lng": 83.87310000000001
  },
  {
    "id": "city-249650",
    "name": "Patna",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8761,
    "lng": 84.14110000000001
  },
  {
    "id": "city-249651",
    "name": "Phulwari Sharif",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1421,
    "lng": 84.8991
  },
  {
    "id": "city-299196",
    "name": "Punpun",
    "state": "Bihar",
    "type": "City",
    "lat": 22.336100000000002,
    "lng": 86.28110000000001
  },
  {
    "id": "city-299178",
    "name": "Sampatchak",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3021,
    "lng": 86.24310000000001
  },
  {
    "id": "city-249570",
    "name": "Areraj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6301,
    "lng": 85.8191
  },
  {
    "id": "city-249571",
    "name": "Chakia",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5101,
    "lng": 82.50710000000001
  },
  {
    "id": "city-249567",
    "name": "Dhaka",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7421,
    "lng": 84.57910000000001
  },
  {
    "id": "city-277126",
    "name": "Kesaria",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3721,
    "lng": 85.5571
  },
  {
    "id": "city-305835",
    "name": "Madhuban",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2681,
    "lng": 85.47710000000001
  },
  {
    "id": "city-277128",
    "name": "Mehsi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3401,
    "lng": 82.52510000000001
  },
  {
    "id": "city-249568",
    "name": "Motihari",
    "state": "Bihar",
    "type": "City",
    "lat": 22.990099999999998,
    "lng": 84.85910000000001
  },
  {
    "id": "city-277127",
    "name": "Pakri Dayal",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6401,
    "lng": 82.6811
  },
  {
    "id": "city-249565",
    "name": "Raxaul",
    "state": "Bihar",
    "type": "City",
    "lat": 23.086100000000002,
    "lng": 82.93910000000001
  },
  {
    "id": "city-249566",
    "name": "Sugauli",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3801,
    "lng": 83.9491
  },
  {
    "id": "city-299232",
    "name": "Amour",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0881,
    "lng": 85.30510000000001
  },
  {
    "id": "city-299120",
    "name": "Baisi ",
    "state": "Bihar",
    "type": "City",
    "lat": 24.8161,
    "lng": 84.58510000000001
  },
  {
    "id": "city-299234",
    "name": "Banmankhi",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3941,
    "lng": 83.6071
  },
  {
    "id": "city-299237",
    "name": "Bhawanipur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3141,
    "lng": 84.2711
  },
  {
    "id": "city-299272",
    "name": "Champanagar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.8301,
    "lng": 84.61110000000001
  },
  {
    "id": "city-299236",
    "name": "Dhamdaha",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8521,
    "lng": 85.72510000000001
  },
  {
    "id": "city-300557",
    "name": "Jankinagar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3441,
    "lng": 84.5051
  },
  {
    "id": "city-299233",
    "name": "Kasba",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0001,
    "lng": 83.9851
  },
  {
    "id": "city-299271",
    "name": "Mirganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8161,
    "lng": 82.38510000000001
  },
  {
    "id": "city-249592",
    "name": "Purnea",
    "state": "Bihar",
    "type": "City",
    "lat": 23.8021,
    "lng": 85.72710000000001
  },
  {
    "id": "city-299238",
    "name": "Rupauli",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3961,
    "lng": 84.5891
  },
  {
    "id": "city-249668",
    "name": "Bikramganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6081,
    "lng": 84.1371
  },
  {
    "id": "city-299307",
    "name": "Chenari",
    "state": "Bihar",
    "type": "City",
    "lat": 22.8521,
    "lng": 86.2771
  },
  {
    "id": "city-249671",
    "name": "Dehri Dalmianagar",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3861,
    "lng": 84.8311
  },
  {
    "id": "city-299306",
    "name": "Dinara",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7581,
    "lng": 83.19510000000001
  },
  {
    "id": "city-299304",
    "name": "Karakat",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2101,
    "lng": 85.1271
  },
  {
    "id": "city-249667",
    "name": "Koath",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6821,
    "lng": 83.12710000000001
  },
  {
    "id": "city-276405",
    "name": "Kochas",
    "state": "Bihar",
    "type": "City",
    "lat": 22.5661,
    "lng": 86.0031
  },
  {
    "id": "city-276646",
    "name": "Nasriganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.3861,
    "lng": 82.7671
  },
  {
    "id": "city-249669",
    "name": "Nokha",
    "state": "Bihar",
    "type": "City",
    "lat": 25.2701,
    "lng": 82.35510000000001
  },
  {
    "id": "city-301296",
    "name": "ROHTAS",
    "state": "Bihar",
    "type": "City",
    "lat": 22.1341,
    "lng": 86.01910000000001
  },
  {
    "id": "city-249670",
    "name": "Sasaram",
    "state": "Bihar",
    "type": "City",
    "lat": 22.4041,
    "lng": 83.06110000000001
  },
  {
    "id": "city-300558",
    "name": "Bangaon",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0961,
    "lng": 82.63310000000001
  },
  {
    "id": "city-299160",
    "name": "Nauhatta",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1801,
    "lng": 85.2771
  },
  {
    "id": "city-249599",
    "name": "Saharsa",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0341,
    "lng": 86.18310000000001
  },
  {
    "id": "city-299164",
    "name": "Simri Bakhtiarpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1221,
    "lng": 83.9911
  },
  {
    "id": "city-299161",
    "name": "Sonbarsa",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3661,
    "lng": 83.8191
  },
  {
    "id": "city-299163",
    "name": "Sour Bazar",
    "state": "Bihar",
    "type": "City",
    "lat": 23.3221,
    "lng": 85.2951
  },
  {
    "id": "city-249621",
    "name": "Dalsinghsarai",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4761,
    "lng": 84.59710000000001
  },
  {
    "id": "city-300559",
    "name": "Musri Gharari",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0401,
    "lng": 86.0411
  },
  {
    "id": "city-249622",
    "name": "Rosera",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2441,
    "lng": 83.8371
  },
  {
    "id": "city-249619",
    "name": "Samastipur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2061,
    "lng": 83.6751
  },
  {
    "id": "city-299173",
    "name": "Sarairanjan",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2561,
    "lng": 83.84110000000001
  },
  {
    "id": "city-299229",
    "name": "Shahpur Patori",
    "state": "Bihar",
    "type": "City",
    "lat": 23.9081,
    "lng": 84.42110000000001
  },
  {
    "id": "city-299195",
    "name": "Singhia",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3541,
    "lng": 84.9191
  },
  {
    "id": "city-299448",
    "name": "Tajpur",
    "state": "Bihar",
    "type": "City",
    "lat": 22.3841,
    "lng": 85.17710000000001
  },
  {
    "id": "city-249612",
    "name": "Chapra",
    "state": "Bihar",
    "type": "City",
    "lat": 24.6781,
    "lng": 83.7151
  },
  {
    "id": "city-249614",
    "name": "Dighwara",
    "state": "Bihar",
    "type": "City",
    "lat": 22.4941,
    "lng": 82.89110000000001
  },
  {
    "id": "city-265438",
    "name": "Ekma Bazar",
    "state": "Bihar",
    "type": "City",
    "lat": 25.612099999999998,
    "lng": 83.62910000000001
  },
  {
    "id": "city-300560",
    "name": "Kopa",
    "state": "Bihar",
    "type": "City",
    "lat": 25.2261,
    "lng": 85.5831
  },
  {
    "id": "city-299156",
    "name": "Manjhi",
    "state": "Bihar",
    "type": "City",
    "lat": 22.2421,
    "lng": 83.36710000000001
  },
  {
    "id": "city-249613",
    "name": "Marhaura",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4021,
    "lng": 85.85510000000001
  },
  {
    "id": "city-299157",
    "name": "Mashrakh",
    "state": "Bihar",
    "type": "City",
    "lat": 25.7381,
    "lng": 86.2711
  },
  {
    "id": "city-265437",
    "name": "Parsa Bazar",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1501,
    "lng": 83.04310000000001
  },
  {
    "id": "city-249611",
    "name": "Rivilganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3521,
    "lng": 84.9371
  },
  {
    "id": "city-249615",
    "name": "Sonepur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1561,
    "lng": 85.18910000000001
  },
  {
    "id": "city-277103",
    "name": "Barbigha",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2761,
    "lng": 84.23710000000001
  },
  {
    "id": "city-299151",
    "name": "Chewara",
    "state": "Bihar",
    "type": "City",
    "lat": 23.0741,
    "lng": 85.15910000000001
  },
  {
    "id": "city-299150",
    "name": "Sheikhopur Sarai",
    "state": "Bihar",
    "type": "City",
    "lat": 25.5201,
    "lng": 84.7771
  },
  {
    "id": "city-249641",
    "name": "Sheikhpura",
    "state": "Bihar",
    "type": "City",
    "lat": 23.1721,
    "lng": 84.8691
  },
  {
    "id": "city-299145",
    "name": "Sheohar",
    "state": "Bihar",
    "type": "City",
    "lat": 22.8681,
    "lng": 82.85310000000001
  },
  {
    "id": "city-249573",
    "name": "Bairgania",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1841,
    "lng": 86.09710000000001
  },
  {
    "id": "city-249574",
    "name": "Belsand",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1221,
    "lng": 85.43910000000001
  },
  {
    "id": "city-249577",
    "name": "Janakpur Road",
    "state": "Bihar",
    "type": "City",
    "lat": 23.9441,
    "lng": 83.9851
  },
  {
    "id": "city-249575",
    "name": "Sitamarhi",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7281,
    "lng": 84.22510000000001
  },
  {
    "id": "city-290059",
    "name": "Sursand",
    "state": "Bihar",
    "type": "City",
    "lat": 23.9921,
    "lng": 83.92110000000001
  },
  {
    "id": "city-299134",
    "name": "Andar",
    "state": "Bihar",
    "type": "City",
    "lat": 24.2881,
    "lng": 84.5051
  },
  {
    "id": "city-299143",
    "name": "Barharia",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0761,
    "lng": 83.03710000000001
  },
  {
    "id": "city-299139",
    "name": "Basantpur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4601,
    "lng": 84.24510000000001
  },
  {
    "id": "city-300561",
    "name": "Gopalpur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.9721,
    "lng": 83.5891
  },
  {
    "id": "city-299136",
    "name": "Guthani",
    "state": "Bihar",
    "type": "City",
    "lat": 24.1161,
    "lng": 84.29310000000001
  },
  {
    "id": "city-299133",
    "name": "Hasanpura",
    "state": "Bihar",
    "type": "City",
    "lat": 24.7421,
    "lng": 85.6991
  },
  {
    "id": "city-249609",
    "name": "Maharajganj",
    "state": "Bihar",
    "type": "City",
    "lat": 25.0161,
    "lng": 86.1131
  },
  {
    "id": "city-249610",
    "name": "Mairwa",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6221,
    "lng": 83.14710000000001
  },
  {
    "id": "city-249608",
    "name": "Siwan",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6441,
    "lng": 83.9491
  },
  {
    "id": "city-249583",
    "name": "Birpur",
    "state": "Bihar",
    "type": "City",
    "lat": 24.5321,
    "lng": 85.78110000000001
  },
  {
    "id": "city-249582",
    "name": "Nirmali",
    "state": "Bihar",
    "type": "City",
    "lat": 22.5441,
    "lng": 85.4011
  },
  {
    "id": "city-299129",
    "name": "Pipra",
    "state": "Bihar",
    "type": "City",
    "lat": 26.0921,
    "lng": 83.8371
  },
  {
    "id": "city-300562",
    "name": "Simrahi",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2141,
    "lng": 85.57910000000001
  },
  {
    "id": "city-249584",
    "name": "Supaul",
    "state": "Bihar",
    "type": "City",
    "lat": 23.5721,
    "lng": 84.0051
  },
  {
    "id": "city-299128",
    "name": "Tribeniganj",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2941,
    "lng": 84.6511
  },
  {
    "id": "city-300563",
    "name": "Goraul",
    "state": "Bihar",
    "type": "City",
    "lat": 25.4521,
    "lng": 85.7091
  },
  {
    "id": "city-249617",
    "name": "Hajipur",
    "state": "Bihar",
    "type": "City",
    "lat": 23.2901,
    "lng": 83.85510000000001
  },
  {
    "id": "city-299273",
    "name": "Jandaha",
    "state": "Bihar",
    "type": "City",
    "lat": 22.6021,
    "lng": 82.8311
  },
  {
    "id": "city-249616",
    "name": "Lalganj",
    "state": "Bihar",
    "type": "City",
    "lat": 24.3781,
    "lng": 84.1911
  },
  {
    "id": "city-249618",
    "name": "Mahnar",
    "state": "Bihar",
    "type": "City",
    "lat": 24.0221,
    "lng": 82.5471
  },
  {
    "id": "city-277125",
    "name": "Mahua",
    "state": "Bihar",
    "type": "City",
    "lat": 25.1201,
    "lng": 83.7051
  },
  {
    "id": "city-299127",
    "name": "Patepur",
    "state": "Bihar",
    "type": "City",
    "lat": 25.6861,
    "lng": 86.2911
  },
  {
    "id": "city-276386",
    "name": "Chandigarh",
    "state": "Chandigarh",
    "type": "City",
    "lat": 29.3633,
    "lng": 77.73339999999999
  },
  {
    "id": "city-253155",
    "name": "Arjunda",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.3087,
    "lng": 79.8921
  },
  {
    "id": "city-250642",
    "name": "Balod",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.1627,
    "lng": 82.51010000000001
  },
  {
    "id": "city-253157",
    "name": "Chikhlakasa",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.4747,
    "lng": 79.10210000000001
  },
  {
    "id": "city-250643",
    "name": "Dalli Rajhara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.532700000000002,
    "lng": 81.2681
  },
  {
    "id": "city-253156",
    "name": "Dondi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5667,
    "lng": 82.03410000000001
  },
  {
    "id": "city-253159",
    "name": "Dondilohara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0607,
    "lng": 82.79610000000001
  },
  {
    "id": "city-253154",
    "name": "Gunderdehi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.1087,
    "lng": 80.7161
  },
  {
    "id": "city-253158",
    "name": "Gurur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.9447,
    "lng": 82.7521
  },
  {
    "id": "city-305304",
    "name": "Palari.",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1687,
    "lng": 82.14410000000001
  },
  {
    "id": "city-250648",
    "name": "Baloda Bazar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.5727,
    "lng": 81.9161
  },
  {
    "id": "city-250651",
    "name": "Bhatapara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2227,
    "lng": 81.6341
  },
  {
    "id": "city-250645",
    "name": "Kasdol",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.6387,
    "lng": 81.1461
  },
  {
    "id": "city-253184",
    "name": "Lavan",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.9547,
    "lng": 80.4701
  },
  {
    "id": "city-250647",
    "name": "Palari",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4887,
    "lng": 80.9041
  },
  {
    "id": "city-301528",
    "name": "Rohansi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.410700000000002,
    "lng": 79.5261
  },
  {
    "id": "city-250644",
    "name": "Simga",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.9527,
    "lng": 79.4081
  },
  {
    "id": "city-250654",
    "name": "Tundra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.4507,
    "lng": 82.1341
  },
  {
    "id": "city-253119",
    "name": "Balrampur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.2147,
    "lng": 82.0421
  },
  {
    "id": "city-253118",
    "name": "Kusmi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.5207,
    "lng": 79.01610000000001
  },
  {
    "id": "city-253117",
    "name": "Rajpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.9627,
    "lng": 79.0061
  },
  {
    "id": "city-250583",
    "name": "Ramanujganj",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5307,
    "lng": 79.5901
  },
  {
    "id": "city-253116",
    "name": "Wadrafnagar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.2947,
    "lng": 79.8261
  },
  {
    "id": "city-248143",
    "name": "Bastar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.4087,
    "lng": 82.8481
  },
  {
    "id": "city-250665",
    "name": "Jagdalpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1467,
    "lng": 79.4621
  },
  {
    "id": "city-250632",
    "name": "Bemetara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.012700000000002,
    "lng": 82.7561
  },
  {
    "id": "city-253152",
    "name": "Berla",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8307,
    "lng": 82.2181
  },
  {
    "id": "city-301511",
    "name": "Bhinbhouree",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0447,
    "lng": 81.26010000000001
  },
  {
    "id": "city-301508",
    "name": "Dadhi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.4467,
    "lng": 81.3141
  },
  {
    "id": "city-253151",
    "name": "Devkar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.628700000000002,
    "lng": 79.0761
  },
  {
    "id": "city-301834",
    "name": "Kusmi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.5207,
    "lng": 79.01610000000001
  },
  {
    "id": "city-253160",
    "name": "Maro",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8167,
    "lng": 82.78410000000001
  },
  {
    "id": "city-253148",
    "name": "Nawagarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.9447,
    "lng": 80.63210000000001
  },
  {
    "id": "city-253150",
    "name": "Parpodi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.192700000000002,
    "lng": 80.88810000000001
  },
  {
    "id": "city-253149",
    "name": "Saja",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.7847,
    "lng": 82.7921
  },
  {
    "id": "city-250633",
    "name": "Than Khamharia",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.6647,
    "lng": 79.4401
  },
  {
    "id": "city-253245",
    "name": "Bhairamgarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.7267,
    "lng": 79.5061
  },
  {
    "id": "city-253246",
    "name": "Bhopalpatnam",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.192700000000002,
    "lng": 80.7681
  },
  {
    "id": "city-253244",
    "name": "Bijapur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.2447,
    "lng": 81.54010000000001
  },
  {
    "id": "city-250616",
    "name": "Bilaspur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8667,
    "lng": 79.1901
  },
  {
    "id": "city-250622",
    "name": "Bilha",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.378700000000002,
    "lng": 81.2061
  },
  {
    "id": "city-250621",
    "name": "Bodri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1307,
    "lng": 82.5181
  },
  {
    "id": "city-250613",
    "name": "Kota",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.6567,
    "lng": 81.8241
  },
  {
    "id": "city-253174",
    "name": "Malhar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.000700000000002,
    "lng": 79.7761
  },
  {
    "id": "city-250612",
    "name": "Ratanpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.2367,
    "lng": 82.02810000000001
  },
  {
    "id": "city-250615",
    "name": "Takhatpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.974700000000002,
    "lng": 80.6421
  },
  {
    "id": "city-250670",
    "name": "Bade Bacheli",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.6907,
    "lng": 78.9821
  },
  {
    "id": "city-253215",
    "name": "Barsoor",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.346700000000002,
    "lng": 79.2941
  },
  {
    "id": "city-250669",
    "name": "Dantewada",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.352700000000002,
    "lng": 81.6641
  },
  {
    "id": "city-250668",
    "name": "Geedam",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.1767,
    "lng": 82.0641
  },
  {
    "id": "city-250671",
    "name": "Kirandul",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.3547,
    "lng": 82.2381
  },
  {
    "id": "city-253106",
    "name": "Aamdi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.3707,
    "lng": 80.9581
  },
  {
    "id": "city-305259",
    "name": "Badekareli",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.4667,
    "lng": 80.4221
  },
  {
    "id": "city-253107",
    "name": "Bhakhara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.1507,
    "lng": 82.3221
  },
  {
    "id": "city-248062",
    "name": "Dhamtari",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.9827,
    "lng": 82.6661
  },
  {
    "id": "city-248061",
    "name": "Kurud",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0847,
    "lng": 80.5001
  },
  {
    "id": "city-253108",
    "name": "Magarlod",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.384700000000002,
    "lng": 80.3921
  },
  {
    "id": "city-253109",
    "name": "Nagri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.2527,
    "lng": 79.7081
  },
  {
    "id": "city-250635",
    "name": "Ahiwara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2927,
    "lng": 79.5801
  },
  {
    "id": "city-299657",
    "name": "Amleshwar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.3547,
    "lng": 79.2381
  },
  {
    "id": "city-250639",
    "name": "Bhilai",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.4887,
    "lng": 81.3281
  },
  {
    "id": "city-250638",
    "name": "Bhilai Charoda",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0047,
    "lng": 82.6121
  },
  {
    "id": "city-250634",
    "name": "Dhamdha",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.7767,
    "lng": 79.6881
  },
  {
    "id": "city-250640",
    "name": "Durg",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0027,
    "lng": 82.5501
  },
  {
    "id": "city-250636",
    "name": "Jamul",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8087,
    "lng": 79.9441
  },
  {
    "id": "city-250637",
    "name": "Kumhari",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1087,
    "lng": 82.5081
  },
  {
    "id": "city-250641",
    "name": "Patan",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.2787,
    "lng": 80.5141
  },
  {
    "id": "city-296874",
    "name": "Risali",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.1307,
    "lng": 79.2141
  },
  {
    "id": "city-253153",
    "name": "Utai",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.9247,
    "lng": 82.13210000000001
  },
  {
    "id": "city-253181",
    "name": "Churra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.3447,
    "lng": 80.27210000000001
  },
  {
    "id": "city-301812",
    "name": "Devbhog",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4847,
    "lng": 81.2281
  },
  {
    "id": "city-253180",
    "name": "Fingeswar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.9627,
    "lng": 82.0061
  },
  {
    "id": "city-253182",
    "name": "Gariabandh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.0287,
    "lng": 81.64410000000001
  },
  {
    "id": "city-301514",
    "name": "Kopra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5567,
    "lng": 79.13210000000001
  },
  {
    "id": "city-253178",
    "name": "Rajim",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.6367,
    "lng": 80.6121
  },
  {
    "id": "city-250610",
    "name": "Gaurella",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.7327,
    "lng": 81.6921
  },
  {
    "id": "city-301513",
    "name": "Marwahi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.5207,
    "lng": 82.3041
  },
  {
    "id": "city-250609",
    "name": "Pendra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.570700000000002,
    "lng": 82.4461
  },
  {
    "id": "city-250603",
    "name": "Akaltara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.5927,
    "lng": 78.8801
  },
  {
    "id": "city-250601",
    "name": "Baloda",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8767,
    "lng": 82.3561
  },
  {
    "id": "city-301919",
    "name": "Bamhanidih",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.8007,
    "lng": 82.5761
  },
  {
    "id": "city-250605",
    "name": "Champa",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.9707,
    "lng": 79.6781
  },
  {
    "id": "city-250608",
    "name": "Kharod",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.3487,
    "lng": 82.15610000000001
  },
  {
    "id": "city-250602",
    "name": "Naila Janjgir",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.2147,
    "lng": 82.0821
  },
  {
    "id": "city-301526",
    "name": "Nariyara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8247,
    "lng": 79.1521
  },
  {
    "id": "city-253283",
    "name": "Nawagarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.9447,
    "lng": 80.63210000000001
  },
  {
    "id": "city-301512",
    "name": "Pamgarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.7027,
    "lng": 82.6981
  },
  {
    "id": "city-253288",
    "name": "Rahoud",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8487,
    "lng": 80.4721
  },
  {
    "id": "city-250606",
    "name": "Sakti",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2747,
    "lng": 79.3901
  },
  {
    "id": "city-253287",
    "name": "Saragaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4267,
    "lng": 79.5741
  },
  {
    "id": "city-250604",
    "name": "Shivrinarayan",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.1647,
    "lng": 79.6121
  },
  {
    "id": "city-253200",
    "name": "Bagicha",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.532700000000002,
    "lng": 80.0601
  },
  {
    "id": "city-250590",
    "name": "Jashpur Nagar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0187,
    "lng": 80.6781
  },
  {
    "id": "city-253199",
    "name": "Kotba",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2527,
    "lng": 80.7081
  },
  {
    "id": "city-253198",
    "name": "Kunkuri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.3367,
    "lng": 81.5761
  },
  {
    "id": "city-250591",
    "name": "Pathalgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.5367,
    "lng": 81.8401
  },
  {
    "id": "city-273466",
    "name": "Bodla",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.7427,
    "lng": 82.4901
  },
  {
    "id": "city-301507",
    "name": "Indouri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4067,
    "lng": 81.03410000000001
  },
  {
    "id": "city-250623",
    "name": "Kawardha",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.6527,
    "lng": 81.3721
  },
  {
    "id": "city-250624",
    "name": "Pandariya",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.968700000000002,
    "lng": 82.7201
  },
  {
    "id": "city-273467",
    "name": "Pandatarai",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.076700000000002,
    "lng": 81.9641
  },
  {
    "id": "city-273465",
    "name": "Pipariya",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.0807,
    "lng": 79.1521
  },
  {
    "id": "city-273468",
    "name": "Sahaspur-Lohara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.3647,
    "lng": 82.4041
  },
  {
    "id": "city-250626",
    "name": "Chhuikhadan",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.942700000000002,
    "lng": 79.1781
  },
  {
    "id": "city-250625",
    "name": "Gandai",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2387,
    "lng": 81.98610000000001
  },
  {
    "id": "city-262094",
    "name": "Khairagarh Municipality",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.9827,
    "lng": 81.8101
  },
  {
    "id": "city-265121",
    "name": "Farasgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.1947,
    "lng": 81.1341
  },
  {
    "id": "city-248063",
    "name": "Keshkal",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.7007,
    "lng": 81.6361
  },
  {
    "id": "city-250664",
    "name": "Kondagaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8707,
    "lng": 79.2341
  },
  {
    "id": "city-301510",
    "name": "Banki Mongra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5447,
    "lng": 79.5761
  },
  {
    "id": "city-253111",
    "name": "Churikala",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.6187,
    "lng": 80.2381
  },
  {
    "id": "city-250599",
    "name": "Dipka",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.3367,
    "lng": 81.9041
  },
  {
    "id": "city-250597",
    "name": "Katghora",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.9407,
    "lng": 81.8921
  },
  {
    "id": "city-250598",
    "name": "Korba",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.4087,
    "lng": 79.5441
  },
  {
    "id": "city-253110",
    "name": "Pali",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1787,
    "lng": 82.0061
  },
  {
    "id": "city-250579",
    "name": "Baikunthpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8367,
    "lng": 80.0361
  },
  {
    "id": "city-301809",
    "name": "Patna",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.0587,
    "lng": 80.6941
  },
  {
    "id": "city-259685",
    "name": "Shivpur Charcha",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.0087,
    "lng": 81.8401
  },
  {
    "id": "city-250662",
    "name": "Bagbahara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.204700000000003,
    "lng": 80.1001
  },
  {
    "id": "city-250658",
    "name": "Basna",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5487,
    "lng": 81.4761
  },
  {
    "id": "city-250661",
    "name": "Mahasamund",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.3687,
    "lng": 82.8161
  },
  {
    "id": "city-250660",
    "name": "Pithora",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8887,
    "lng": 79.2801
  },
  {
    "id": "city-250659",
    "name": "Saraipali",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.7387,
    "lng": 80.8781
  },
  {
    "id": "city-253105",
    "name": "Tumgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.4247,
    "lng": 81.6721
  },
  {
    "id": "city-250578",
    "name": "Chirimiri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.9787,
    "lng": 81.9261
  },
  {
    "id": "city-301515",
    "name": "Janakpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.0947,
    "lng": 80.3621
  },
  {
    "id": "city-250582",
    "name": "Jhagrakhand",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8447,
    "lng": 80.77210000000001
  },
  {
    "id": "city-250581",
    "name": "Khongapani",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8107,
    "lng": 80.2701
  },
  {
    "id": "city-250580",
    "name": "Manendragarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.6307,
    "lng": 80.6901
  },
  {
    "id": "city-253220",
    "name": "Nai Ladri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.262700000000002,
    "lng": 81.3221
  },
  {
    "id": "city-250631",
    "name": "Ambagarh Chowki",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.5347,
    "lng": 81.6341
  },
  {
    "id": "city-301522",
    "name": "Barela",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.6447,
    "lng": 82.1641
  },
  {
    "id": "city-301630",
    "name": "Jarhagaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.032700000000002,
    "lng": 82.6001
  },
  {
    "id": "city-250611",
    "name": "Lormi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.1487,
    "lng": 79.4841
  },
  {
    "id": "city-250614",
    "name": "Mungeli",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.0167,
    "lng": 81.3121
  },
  {
    "id": "city-253172",
    "name": "Pathariya",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.756700000000002,
    "lng": 79.8201
  },
  {
    "id": "city-253176",
    "name": "Sargaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.2327,
    "lng": 79.6401
  },
  {
    "id": "city-248064",
    "name": "Narayanpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.936700000000002,
    "lng": 80.2401
  },
  {
    "id": "city-250592",
    "name": "Dharamjaigarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4647,
    "lng": 79.7921
  },
  {
    "id": "city-250593",
    "name": "Gharghoda",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8087,
    "lng": 80.5761
  },
  {
    "id": "city-250595",
    "name": "Kharsia",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.5207,
    "lng": 79.4641
  },
  {
    "id": "city-253280",
    "name": "Kirodimal Nagar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.7367,
    "lng": 81.0801
  },
  {
    "id": "city-253279",
    "name": "Lailunga",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.8687,
    "lng": 79.5001
  },
  {
    "id": "city-253278",
    "name": "Pussore",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8807,
    "lng": 81.8481
  },
  {
    "id": "city-250594",
    "name": "Raigarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.6667,
    "lng": 82.2381
  },
  {
    "id": "city-305193",
    "name": "Tamnar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.2287,
    "lng": 81.2521
  },
  {
    "id": "city-253177",
    "name": "Abhanpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.7287,
    "lng": 80.5441
  },
  {
    "id": "city-250650",
    "name": "Arang",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8167,
    "lng": 82.78410000000001
  },
  {
    "id": "city-253179",
    "name": "Birgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8627,
    "lng": 82.6981
  },
  {
    "id": "city-298991",
    "name": "Chandkhuri",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.0167,
    "lng": 82.16810000000001
  },
  {
    "id": "city-250649",
    "name": "Gobra Nawapara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.1027,
    "lng": 82.4261
  },
  {
    "id": "city-250652",
    "name": "Kharora",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.3907,
    "lng": 80.4341
  },
  {
    "id": "city-250646",
    "name": "Kurra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.8927,
    "lng": 80.5481
  },
  {
    "id": "city-250655",
    "name": "Mana Camp",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0747,
    "lng": 80.2701
  },
  {
    "id": "city-300355",
    "name": "Mandir Hasod",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.7787,
    "lng": 82.6061
  },
  {
    "id": "city-250653",
    "name": "Raipur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.3807,
    "lng": 79.9641
  },
  {
    "id": "city-298990",
    "name": "Samoda",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.000700000000002,
    "lng": 80.1841
  },
  {
    "id": "city-250657",
    "name": "Tilda Newra",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.5247,
    "lng": 82.4441
  },
  {
    "id": "city-253112",
    "name": "Chhuriya",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.9847,
    "lng": 81.88810000000001
  },
  {
    "id": "city-250630",
    "name": "Dongargaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.2987,
    "lng": 78.87010000000001
  },
  {
    "id": "city-250628",
    "name": "Dongargarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4727,
    "lng": 80.2641
  },
  {
    "id": "city-301920",
    "name": "Ghumka",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.5087,
    "lng": 82.3561
  },
  {
    "id": "city-301808",
    "name": "Lal Bahadur Nagar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8167,
    "lng": 82.2321
  },
  {
    "id": "city-250629",
    "name": "Rajnandgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.6487,
    "lng": 79.8001
  },
  {
    "id": "city-253289",
    "name": "Adbhar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2747,
    "lng": 81.6941
  },
  {
    "id": "city-253285",
    "name": "Chandrapur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8307,
    "lng": 81.4021
  },
  {
    "id": "city-253286",
    "name": "Dhabhara",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.5207,
    "lng": 82.3441
  },
  {
    "id": "city-253284",
    "name": "Jaijaipur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.3447,
    "lng": 80.6641
  },
  {
    "id": "city-250607",
    "name": "Naya Baradwar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8047,
    "lng": 79.3321
  },
  {
    "id": "city-250606",
    "name": "Sakti",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2747,
    "lng": 79.3901
  },
  {
    "id": "city-253276",
    "name": "Baramkela",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.2667,
    "lng": 81.2861
  },
  {
    "id": "city-253114",
    "name": "Bhatgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.7867,
    "lng": 81.0381
  },
  {
    "id": "city-250656",
    "name": "Bilaigarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4727,
    "lng": 81.6721
  },
  {
    "id": "city-301527",
    "name": "Pawni",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.840700000000002,
    "lng": 79.9361
  },
  {
    "id": "city-250596",
    "name": "Sarangarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.0807,
    "lng": 82.48010000000001
  },
  {
    "id": "city-253277",
    "name": "Saria",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.0307,
    "lng": 80.8261
  },
  {
    "id": "city-301509",
    "name": "Sarsiwan",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.762700000000002,
    "lng": 78.9901
  },
  {
    "id": "city-253218",
    "name": "Dornapal",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8247,
    "lng": 80.1121
  },
  {
    "id": "city-253217",
    "name": "Konta",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.8367,
    "lng": 79.8121
  },
  {
    "id": "city-253216",
    "name": "Sukma",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.4647,
    "lng": 80.2801
  },
  {
    "id": "city-253183",
    "name": "Bhatgaon",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.7867,
    "lng": 81.0381
  },
  {
    "id": "city-253115",
    "name": "Jarhi",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.6067,
    "lng": 80.6821
  },
  {
    "id": "city-253123",
    "name": "Pratappur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.192700000000002,
    "lng": 81.7441
  },
  {
    "id": "city-253191",
    "name": "Premnagar",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.2127,
    "lng": 79.9161
  },
  {
    "id": "city-301867",
    "name": "Shivnandanpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.8087,
    "lng": 81.6401
  },
  {
    "id": "city-250585",
    "name": "Surajpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 20.2547,
    "lng": 78.8741
  },
  {
    "id": "city-250586",
    "name": "Vishrampur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.140700000000002,
    "lng": 81.3801
  },
  {
    "id": "city-250588",
    "name": "Ambikapur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.5027,
    "lng": 82.01010000000001
  },
  {
    "id": "city-253121",
    "name": "Lakhanpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 22.1147,
    "lng": 82.4701
  },
  {
    "id": "city-253120",
    "name": "Sitapur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.4507,
    "lng": 81.8061
  },
  {
    "id": "city-253248",
    "name": "Antagarh",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8107,
    "lng": 79.3741
  },
  {
    "id": "city-253145",
    "name": "Bhanupratappur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.9327,
    "lng": 79.8921
  },
  {
    "id": "city-253144",
    "name": "Charama",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 18.8687,
    "lng": 81.6841
  },
  {
    "id": "city-250663",
    "name": "Kanker",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.5747,
    "lng": 82.16210000000001
  },
  {
    "id": "city-253249",
    "name": "Narharpur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 19.532700000000002,
    "lng": 81.5321
  },
  {
    "id": "city-253146",
    "name": "Pakhajur",
    "state": "Chhattisgarh",
    "type": "City",
    "lat": 21.9667,
    "lng": 80.6981
  },
  {
    "id": "city-276401",
    "name": "North Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 28.6701,
    "lng": 75.3285
  },
  {
    "id": "dist-796",
    "name": "Central North",
    "state": "Delhi",
    "type": "District",
    "lat": 28.5241,
    "lng": 74.5785
  },
  {
    "id": "city-276400",
    "name": "East Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 29.022100000000002,
    "lng": 74.6085
  },
  {
    "id": "city-276447",
    "name": "New Delhi Municipal Council",
    "state": "Delhi",
    "type": "City",
    "lat": 29.6061,
    "lng": 77.52850000000001
  },
  {
    "id": "city-276402",
    "name": "South Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 26.2061,
    "lng": 74.27250000000001
  },
  {
    "id": "city-276401",
    "name": "North Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 28.6701,
    "lng": 75.3285
  },
  {
    "id": "city-276400",
    "name": "East Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 29.022100000000002,
    "lng": 74.6085
  },
  {
    "id": "city-276401",
    "name": "North Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 28.6701,
    "lng": 75.3285
  },
  {
    "id": "dist-795",
    "name": "Old Delhi",
    "state": "Delhi",
    "type": "District",
    "lat": 29.2941,
    "lng": 74.75250000000001
  },
  {
    "id": "dist-794",
    "name": "Outer North",
    "state": "Delhi",
    "type": "District",
    "lat": 26.4081,
    "lng": 76.45450000000001
  },
  {
    "id": "city-276402",
    "name": "South Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 26.2061,
    "lng": 74.27250000000001
  },
  {
    "id": "city-276402",
    "name": "South Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 26.2061,
    "lng": 74.27250000000001
  },
  {
    "id": "city-276401",
    "name": "North Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 28.6701,
    "lng": 75.3285
  },
  {
    "id": "city-276402",
    "name": "South Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 26.2061,
    "lng": 74.27250000000001
  },
  {
    "id": "city-276401",
    "name": "North Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 28.6701,
    "lng": 75.3285
  },
  {
    "id": "city-276402",
    "name": "South Delhi Municipal Corporation",
    "state": "Delhi",
    "type": "City",
    "lat": 26.2061,
    "lng": 74.27250000000001
  },
  {
    "id": "city-252100",
    "name": "Canacona",
    "state": "Goa",
    "type": "City",
    "lat": 14.1553,
    "lng": 72.89999999999999
  },
  {
    "id": "city-252096",
    "name": "Curchorem Cacora",
    "state": "Goa",
    "type": "City",
    "lat": 14.317300000000001,
    "lng": 74.36999999999999
  },
  {
    "id": "city-252097",
    "name": "Quepem",
    "state": "Goa",
    "type": "City",
    "lat": 13.609300000000001,
    "lng": 71.67
  },
  {
    "id": "city-252099",
    "name": "Sanguem",
    "state": "Goa",
    "type": "City",
    "lat": 12.903300000000002,
    "lng": 73.64
  },
  {
    "id": "city-252075",
    "name": "Bicholim",
    "state": "Goa",
    "type": "City",
    "lat": 14.6933,
    "lng": 74.618
  },
  {
    "id": "city-252071",
    "name": "City Corporation Panaji",
    "state": "Goa",
    "type": "City",
    "lat": 14.6353,
    "lng": 74.89999999999999
  },
  {
    "id": "city-252061",
    "name": "Mapusa",
    "state": "Goa",
    "type": "City",
    "lat": 13.417300000000001,
    "lng": 72.31
  },
  {
    "id": "city-252057",
    "name": "Pernem",
    "state": "Goa",
    "type": "City",
    "lat": 13.3573,
    "lng": 74.44999999999999
  },
  {
    "id": "city-252077",
    "name": "Sankhali",
    "state": "Goa",
    "type": "City",
    "lat": 14.6373,
    "lng": 72.96199999999999
  },
  {
    "id": "city-252079",
    "name": "Valpoi",
    "state": "Goa",
    "type": "City",
    "lat": 13.965300000000001,
    "lng": 74.70599999999999
  },
  {
    "id": "city-252095",
    "name": "Cuncolim",
    "state": "Goa",
    "type": "City",
    "lat": 16.043300000000002,
    "lng": 73.06
  },
  {
    "id": "city-252087",
    "name": "Margao",
    "state": "Goa",
    "type": "City",
    "lat": 12.5853,
    "lng": 72.518
  },
  {
    "id": "city-252084",
    "name": "Mormugao",
    "state": "Goa",
    "type": "City",
    "lat": 13.8133,
    "lng": 72.89
  },
  {
    "id": "city-252082",
    "name": "Ponda",
    "state": "Goa",
    "type": "City",
    "lat": 15.0753,
    "lng": 72.82799999999999
  },
  {
    "id": "city-251096",
    "name": "Ahmadabad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2287,
    "lng": 71.91040000000001
  },
  {
    "id": "city-277165",
    "name": "Bareja",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.500700000000002,
    "lng": 71.6464
  },
  {
    "id": "city-251109",
    "name": "Bavla",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1707,
    "lng": 71.7044
  },
  {
    "id": "city-251110",
    "name": "Dhandhuka",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.6067,
    "lng": 70.11640000000001
  },
  {
    "id": "city-251108",
    "name": "Dholka",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.1687,
    "lng": 69.7624
  },
  {
    "id": "city-251090",
    "name": "Sanand",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.2807,
    "lng": 69.8104
  },
  {
    "id": "city-251089",
    "name": "Viramgam",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.282700000000002,
    "lng": 69.0724
  },
  {
    "id": "city-251157",
    "name": "Amreli",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.8427,
    "lng": 70.2484
  },
  {
    "id": "city-253147",
    "name": "Babra",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.102700000000002,
    "lng": 71.5964
  },
  {
    "id": "city-251158",
    "name": "Bagasara",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.9827,
    "lng": 70.1644
  },
  {
    "id": "city-251159",
    "name": "Chalala",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.294700000000002,
    "lng": 70.83640000000001
  },
  {
    "id": "city-302660",
    "name": "DHARI",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.178700000000003,
    "lng": 70.95240000000001
  },
  {
    "id": "city-251156",
    "name": "Damnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.7167,
    "lng": 71.52640000000001
  },
  {
    "id": "city-251161",
    "name": "Jafrabad",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.3767,
    "lng": 71.23440000000001
  },
  {
    "id": "city-251155",
    "name": "Lathi",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5147,
    "lng": 69.77640000000001
  },
  {
    "id": "city-251162",
    "name": "Rajula",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.960700000000003,
    "lng": 69.8904
  },
  {
    "id": "city-251160",
    "name": "Savarkundla",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.8227,
    "lng": 69.8764
  },
  {
    "id": "city-251174",
    "name": "Anand",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.4627,
    "lng": 71.75640000000001
  },
  {
    "id": "city-251182",
    "name": "Anklav",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.608700000000002,
    "lng": 71.99440000000001
  },
  {
    "id": "city-251172",
    "name": "Boriavi",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.2427,
    "lng": 68.24040000000001
  },
  {
    "id": "city-251180",
    "name": "Borsad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.4447,
    "lng": 70.91040000000001
  },
  {
    "id": "city-251179",
    "name": "Khambhat",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.8227,
    "lng": 71.61240000000001
  },
  {
    "id": "city-251173",
    "name": "Ode",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.4987,
    "lng": 71.87240000000001
  },
  {
    "id": "city-251178",
    "name": "Petlad",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.3707,
    "lng": 70.1924
  },
  {
    "id": "city-253230",
    "name": "Sojitra",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.9467,
    "lng": 71.5364
  },
  {
    "id": "city-305197",
    "name": "Tarapur",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.2927,
    "lng": 68.8944
  },
  {
    "id": "city-251171",
    "name": "Umreth",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7847,
    "lng": 70.43440000000001
  },
  {
    "id": "city-253127",
    "name": "Bayad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2607,
    "lng": 71.49440000000001
  },
  {
    "id": "city-251077",
    "name": "Modasa",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.5407,
    "lng": 69.4624
  },
  {
    "id": "city-251057",
    "name": "Deesa",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.3427,
    "lng": 71.0364
  },
  {
    "id": "city-251053",
    "name": "Dhanera",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.8807,
    "lng": 68.8584
  },
  {
    "id": "city-251055",
    "name": "Palanpur",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.0527,
    "lng": 68.3104
  },
  {
    "id": "city-253164",
    "name": "Thara",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.0107,
    "lng": 70.1524
  },
  {
    "id": "city-253223",
    "name": "Amod",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.6687,
    "lng": 72.14240000000001
  },
  {
    "id": "city-251225",
    "name": "Anklesvar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.6487,
    "lng": 72.15440000000001
  },
  {
    "id": "city-251222",
    "name": "Bharuch",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.9127,
    "lng": 69.1944
  },
  {
    "id": "city-251219",
    "name": "Jambusar",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.160700000000002,
    "lng": 71.94640000000001
  },
  {
    "id": "city-251165",
    "name": "Bhavnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.134700000000002,
    "lng": 69.2604
  },
  {
    "id": "city-251167",
    "name": "Gariadhar",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.756700000000002,
    "lng": 69.01440000000001
  },
  {
    "id": "city-251170",
    "name": "Mahuva",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.9067,
    "lng": 68.8084
  },
  {
    "id": "city-251168",
    "name": "Palitana",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.582700000000003,
    "lng": 68.74040000000001
  },
  {
    "id": "city-251166",
    "name": "Sihor",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.852700000000002,
    "lng": 69.2544
  },
  {
    "id": "city-251169",
    "name": "Talaja",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.1647,
    "lng": 71.21440000000001
  },
  {
    "id": "city-253126",
    "name": "Vallabhipur",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.2587,
    "lng": 68.3524
  },
  {
    "id": "city-253241",
    "name": "Barwala",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.5267,
    "lng": 69.8204
  },
  {
    "id": "city-251163",
    "name": "Botad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.7987,
    "lng": 72.17240000000001
  },
  {
    "id": "city-251164",
    "name": "Gadhada",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.9307,
    "lng": 68.75240000000001
  },
  {
    "id": "city-305192",
    "name": "Bodeli",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.0807,
    "lng": 71.6264
  },
  {
    "id": "city-251211",
    "name": "Chhota-Udepur",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.9527,
    "lng": 70.84240000000001
  },
  {
    "id": "city-251199",
    "name": "Dahod",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.538700000000002,
    "lng": 72.11240000000001
  },
  {
    "id": "city-251200",
    "name": "Devgadbaria",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7027,
    "lng": 69.7484
  },
  {
    "id": "city-251197",
    "name": "Jhalod",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.4947,
    "lng": 70.6284
  },
  {
    "id": "city-277167",
    "name": "Saputara",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.960700000000003,
    "lng": 71.3144
  },
  {
    "id": "city-251136",
    "name": "Bhanvad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.3747,
    "lng": 68.5164
  },
  {
    "id": "city-251129",
    "name": "Dwarka",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1827,
    "lng": 69.19640000000001
  },
  {
    "id": "city-251131",
    "name": "Khambhalia",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.4707,
    "lng": 70.4924
  },
  {
    "id": "city-251127",
    "name": "Okha",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.532700000000002,
    "lng": 71.9264
  },
  {
    "id": "city-253143",
    "name": "Raval",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1827,
    "lng": 69.48440000000001
  },
  {
    "id": "city-251130",
    "name": "Salaya",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7927,
    "lng": 68.6824
  },
  {
    "id": "city-251088",
    "name": "Dehgam",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.762700000000002,
    "lng": 69.1764
  },
  {
    "id": "city-276440",
    "name": "Gandhinagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.7467,
    "lng": 71.0484
  },
  {
    "id": "city-251081",
    "name": "Kalol",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5367,
    "lng": 68.45840000000001
  },
  {
    "id": "city-251082",
    "name": "Mansa",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.6907,
    "lng": 69.23240000000001
  },
  {
    "id": "city-251153",
    "name": "Kodinar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.4307,
    "lng": 71.0284
  },
  {
    "id": "city-277171",
    "name": "Sutrapada",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.3927,
    "lng": 70.25840000000001
  },
  {
    "id": "city-277170",
    "name": "Talala",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.288700000000002,
    "lng": 71.0584
  },
  {
    "id": "city-251154",
    "name": "Una",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.6427,
    "lng": 70.33640000000001
  },
  {
    "id": "city-251152",
    "name": "Veraval",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5047,
    "lng": 69.17840000000001
  },
  {
    "id": "city-251134",
    "name": "Dhrol",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8487,
    "lng": 71.72240000000001
  },
  {
    "id": "city-251137",
    "name": "Jamjodhpur",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.4787,
    "lng": 71.17240000000001
  },
  {
    "id": "city-251133",
    "name": "Jamnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.960700000000003,
    "lng": 71.74640000000001
  },
  {
    "id": "city-251135",
    "name": "Kalavad",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.230700000000002,
    "lng": 71.60440000000001
  },
  {
    "id": "city-251132",
    "name": "Sikka",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.3367,
    "lng": 69.25840000000001
  },
  {
    "id": "city-251143",
    "name": "Bantwa",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8087,
    "lng": 70.1944
  },
  {
    "id": "city-251151",
    "name": "Chorvad",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.0607,
    "lng": 71.5824
  },
  {
    "id": "city-251147",
    "name": "Junagadh",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7147,
    "lng": 69.16040000000001
  },
  {
    "id": "city-251149",
    "name": "Keshod",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.4587,
    "lng": 71.5124
  },
  {
    "id": "city-251144",
    "name": "Manavadar",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1527,
    "lng": 70.6344
  },
  {
    "id": "city-251150",
    "name": "Mangrol",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.134700000000002,
    "lng": 70.2844
  },
  {
    "id": "city-251145",
    "name": "Vanthali",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.8007,
    "lng": 68.56240000000001
  },
  {
    "id": "city-251148",
    "name": "Visavadar",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.396700000000003,
    "lng": 70.6704
  },
  {
    "id": "city-251046",
    "name": "Anjar",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.9827,
    "lng": 71.8764
  },
  {
    "id": "city-251045",
    "name": "Bhachau",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.0987,
    "lng": 69.9604
  },
  {
    "id": "city-251047",
    "name": "Bhuj",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.024700000000003,
    "lng": 71.17840000000001
  },
  {
    "id": "city-251050",
    "name": "Gandhidham",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7407,
    "lng": 70.5584
  },
  {
    "id": "city-277169",
    "name": "Mandvi Kachchh",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.524700000000003,
    "lng": 70.16640000000001
  },
  {
    "id": "city-297099",
    "name": "Mundra-Baroi",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.7727,
    "lng": 69.73440000000001
  },
  {
    "id": "city-301161",
    "name": "Nakhatrana",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.524700000000003,
    "lng": 69.1264
  },
  {
    "id": "city-251044",
    "name": "Rapar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.6627,
    "lng": 68.3644
  },
  {
    "id": "city-251188",
    "name": "Chaklasi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2067,
    "lng": 69.3084
  },
  {
    "id": "city-251190",
    "name": "Dakor",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.332700000000003,
    "lng": 71.72640000000001
  },
  {
    "id": "city-253226",
    "name": "Kanajari",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.128700000000002,
    "lng": 70.25840000000001
  },
  {
    "id": "city-251183",
    "name": "Kapadvanj",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.0347,
    "lng": 69.59240000000001
  },
  {
    "id": "city-253225",
    "name": "Kathlal",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.436700000000002,
    "lng": 71.99040000000001
  },
  {
    "id": "city-251186",
    "name": "Kheda",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.4527,
    "lng": 68.85440000000001
  },
  {
    "id": "city-251189",
    "name": "Mahudha",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.666700000000002,
    "lng": 70.77640000000001
  },
  {
    "id": "city-251185",
    "name": "Mehmedabad",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5787,
    "lng": 71.2484
  },
  {
    "id": "city-251187",
    "name": "Nadiad",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.5207,
    "lng": 68.84240000000001
  },
  {
    "id": "city-253224",
    "name": "Thasra",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.1487,
    "lng": 71.7184
  },
  {
    "id": "city-305191",
    "name": "Bechar-Becharaji",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.096700000000002,
    "lng": 71.30640000000001
  },
  {
    "id": "city-251070",
    "name": "Kadi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.7527,
    "lng": 70.74640000000001
  },
  {
    "id": "city-251063",
    "name": "Kheralu",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2987,
    "lng": 68.5284
  },
  {
    "id": "city-251068",
    "name": "Mahesana",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2067,
    "lng": 71.8204
  },
  {
    "id": "city-251064",
    "name": "Unjha",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.2227,
    "lng": 69.7244
  },
  {
    "id": "city-251066",
    "name": "Vadnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.3227,
    "lng": 69.92840000000001
  },
  {
    "id": "city-251067",
    "name": "Vijapur",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.096700000000002,
    "lng": 71.5304
  },
  {
    "id": "city-251065",
    "name": "Visnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1567,
    "lng": 70.16640000000001
  },
  {
    "id": "city-251184",
    "name": "Balasinor",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.2727,
    "lng": 68.56240000000001
  },
  {
    "id": "city-251192",
    "name": "Lunawada",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.7607,
    "lng": 70.1384
  },
  {
    "id": "city-251191",
    "name": "Santrampur",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.1847,
    "lng": 68.28240000000001
  },
  {
    "id": "city-251111",
    "name": "Halvad",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.3507,
    "lng": 70.1644
  },
  {
    "id": "city-253135",
    "name": "Maliya Miyana",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.878700000000002,
    "lng": 68.91640000000001
  },
  {
    "id": "city-251118",
    "name": "Morbi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.4887,
    "lng": 69.97040000000001
  },
  {
    "id": "city-302662",
    "name": "TANKARA",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.710700000000003,
    "lng": 70.99640000000001
  },
  {
    "id": "city-251119",
    "name": "Wankaner",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.588700000000003,
    "lng": 71.88640000000001
  },
  {
    "id": "city-251216",
    "name": "Rajpipla",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.3247,
    "lng": 69.29440000000001
  },
  {
    "id": "city-251251",
    "name": "Bilimora",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.5487,
    "lng": 68.2784
  },
  {
    "id": "city-251249",
    "name": "Gandevi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8427,
    "lng": 69.0244
  },
  {
    "id": "city-251245",
    "name": "Navsari-Vijalpor",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.0787,
    "lng": 69.81240000000001
  },
  {
    "id": "city-251193",
    "name": "Godhra",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.7127,
    "lng": 71.6264
  },
  {
    "id": "city-251196",
    "name": "Halol",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.410700000000002,
    "lng": 69.5524
  },
  {
    "id": "city-251194",
    "name": "Kaalol",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.518700000000003,
    "lng": 70.37240000000001
  },
  {
    "id": "city-248076",
    "name": "Shahera",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.0427,
    "lng": 69.10440000000001
  },
  {
    "id": "city-251062",
    "name": "Chanasma",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.1387,
    "lng": 69.2004
  },
  {
    "id": "city-251061",
    "name": "Harij",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5667,
    "lng": 69.3884
  },
  {
    "id": "city-251060",
    "name": "Patan",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.2587,
    "lng": 69.8404
  },
  {
    "id": "city-251058",
    "name": "Radhanpur",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.372700000000002,
    "lng": 70.8224
  },
  {
    "id": "city-251059",
    "name": "Sidhpur",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.832700000000003,
    "lng": 71.59440000000001
  },
  {
    "id": "city-251142",
    "name": "Kutiyana",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.614700000000003,
    "lng": 69.7724
  },
  {
    "id": "city-251138",
    "name": "Porbandar",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.6367,
    "lng": 68.2544
  },
  {
    "id": "city-251141",
    "name": "Ranavav",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.7007,
    "lng": 70.23840000000001
  },
  {
    "id": "city-251123",
    "name": "Bhayavadar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.576700000000002,
    "lng": 69.5544
  },
  {
    "id": "city-251125",
    "name": "Dhoraji",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.628700000000002,
    "lng": 70.0464
  },
  {
    "id": "city-251122",
    "name": "Gondal",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8127,
    "lng": 71.72640000000001
  },
  {
    "id": "city-251121",
    "name": "Jasdan",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.4527,
    "lng": 68.3264
  },
  {
    "id": "city-251126",
    "name": "Jetpur Navagadh",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.8187,
    "lng": 70.6884
  },
  {
    "id": "city-251120",
    "name": "Rajkot",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.9647,
    "lng": 69.01440000000001
  },
  {
    "id": "city-251124",
    "name": "Upleta",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.404700000000002,
    "lng": 70.65440000000001
  },
  {
    "id": "city-251074",
    "name": "Himatnagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.1107,
    "lng": 71.5404
  },
  {
    "id": "city-251072",
    "name": "Idar",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.186700000000002,
    "lng": 70.2004
  },
  {
    "id": "city-251071",
    "name": "Khedbrahma",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.872700000000002,
    "lng": 70.09840000000001
  },
  {
    "id": "city-251075",
    "name": "Prantij",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.3507,
    "lng": 69.3644
  },
  {
    "id": "city-251076",
    "name": "Talod",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8987,
    "lng": 68.6804
  },
  {
    "id": "city-253128",
    "name": "Vadali",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.2527,
    "lng": 71.9424
  },
  {
    "id": "city-251243",
    "name": "Bardoli",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.3927,
    "lng": 68.66640000000001
  },
  {
    "id": "city-276024",
    "name": "Kadodara",
    "state": "Gujarat",
    "type": "City",
    "lat": 23.1887,
    "lng": 71.3024
  },
  {
    "id": "city-251048",
    "name": "Mandvi",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.7407,
    "lng": 68.6624
  },
  {
    "id": "city-251231",
    "name": "Surat",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.192700000000002,
    "lng": 68.79440000000001
  },
  {
    "id": "city-276026",
    "name": "Tarsadi",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.8667,
    "lng": 68.6884
  },
  {
    "id": "city-253137",
    "name": "Chotila",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.9147,
    "lng": 72.05640000000001
  },
  {
    "id": "city-251112",
    "name": "Dhrangadhra",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.826700000000002,
    "lng": 72.1444
  },
  {
    "id": "city-251117",
    "name": "Limbdi",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.2327,
    "lng": 71.50640000000001
  },
  {
    "id": "city-253138",
    "name": "Patdi",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.4347,
    "lng": 69.2964
  },
  {
    "id": "city-251114",
    "name": "Surendranagar",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.7767,
    "lng": 71.89840000000001
  },
  {
    "id": "city-251116",
    "name": "Thangadh",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.736700000000003,
    "lng": 68.51440000000001
  },
  {
    "id": "city-251230",
    "name": "Songadh",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.5787,
    "lng": 72.1284
  },
  {
    "id": "city-251244",
    "name": "Vyara",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.9887,
    "lng": 68.47040000000001
  },
  {
    "id": "city-251213",
    "name": "Dabhoi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.884700000000002,
    "lng": 69.95840000000001
  },
  {
    "id": "city-251215",
    "name": "Karjan",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.704700000000003,
    "lng": 72.1384
  },
  {
    "id": "city-251214",
    "name": "Padra",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.5347,
    "lng": 68.3964
  },
  {
    "id": "city-253247",
    "name": "Savli",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.9007,
    "lng": 68.7424
  },
  {
    "id": "city-251209",
    "name": "Vadodara",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.5987,
    "lng": 69.48440000000001
  },
  {
    "id": "city-305196",
    "name": "Vaghodiya",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8747,
    "lng": 71.56840000000001
  },
  {
    "id": "city-251261",
    "name": "Dharampur",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.6427,
    "lng": 69.6404
  },
  {
    "id": "city-251262",
    "name": "Pardi",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.590700000000002,
    "lng": 70.1324
  },
  {
    "id": "city-251269",
    "name": "Ummargam",
    "state": "Gujarat",
    "type": "City",
    "lat": 20.8687,
    "lng": 68.4864
  },
  {
    "id": "city-251254",
    "name": "Valsad",
    "state": "Gujarat",
    "type": "City",
    "lat": 19.8127,
    "lng": 71.3024
  },
  {
    "id": "city-251264",
    "name": "Vapi",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.8987,
    "lng": 71.2724
  },
  {
    "id": "city-253103",
    "name": "Bhabhar",
    "state": "Gujarat",
    "type": "City",
    "lat": 22.5107,
    "lng": 68.73240000000001
  },
  {
    "id": "city-251052",
    "name": "Tharad",
    "state": "Gujarat",
    "type": "City",
    "lat": 21.1787,
    "lng": 71.64840000000001
  },
  {
    "id": "city-248491",
    "name": "Ambala",
    "state": "Haryana",
    "type": "City",
    "lat": 29.626800000000003,
    "lng": 75.6456
  },
  {
    "id": "city-290431",
    "name": "Ambala Sadar",
    "state": "Haryana",
    "type": "City",
    "lat": 29.7848,
    "lng": 76.4636
  },
  {
    "id": "city-272866",
    "name": "Barara",
    "state": "Haryana",
    "type": "City",
    "lat": 29.108800000000002,
    "lng": 75.5876
  },
  {
    "id": "city-248490",
    "name": "Naraingarh",
    "state": "Haryana",
    "type": "City",
    "lat": 27.320800000000002,
    "lng": 74.9596
  },
  {
    "id": "city-248549",
    "name": "Bawani Khera",
    "state": "Haryana",
    "type": "City",
    "lat": 26.4008,
    "lng": 73.2556
  },
  {
    "id": "city-248550",
    "name": "Bhiwani",
    "state": "Haryana",
    "type": "City",
    "lat": 28.2028,
    "lng": 73.2776
  },
  {
    "id": "city-248553",
    "name": "Loharu",
    "state": "Haryana",
    "type": "City",
    "lat": 26.344800000000003,
    "lng": 77.0716
  },
  {
    "id": "city-248552",
    "name": "Siwani",
    "state": "Haryana",
    "type": "City",
    "lat": 27.6648,
    "lng": 74.8076
  },
  {
    "id": "city-248554",
    "name": "Charkhi Dadri",
    "state": "Haryana",
    "type": "City",
    "lat": 27.5228,
    "lng": 75.6696
  },
  {
    "id": "city-248585",
    "name": "Faridabad",
    "state": "Haryana",
    "type": "City",
    "lat": 29.3028,
    "lng": 74.3376
  },
  {
    "id": "city-262120",
    "name": "Bhuna",
    "state": "Haryana",
    "type": "City",
    "lat": 29.2468,
    "lng": 76.1536
  },
  {
    "id": "city-248538",
    "name": "Fatehabad",
    "state": "Haryana",
    "type": "City",
    "lat": 26.394800000000004,
    "lng": 73.4376
  },
  {
    "id": "city-276399",
    "name": "Jakhal Mandi",
    "state": "Haryana",
    "type": "City",
    "lat": 26.518800000000002,
    "lng": 75.9536
  },
  {
    "id": "city-248536",
    "name": "Ratia",
    "state": "Haryana",
    "type": "City",
    "lat": 28.6128,
    "lng": 73.9076
  },
  {
    "id": "city-248537",
    "name": "Tohana",
    "state": "Haryana",
    "type": "City",
    "lat": 26.4728,
    "lng": 75.8556
  },
  {
    "id": "city-248574",
    "name": "Farrukhnagar",
    "state": "Haryana",
    "type": "City",
    "lat": 26.614800000000002,
    "lng": 75.0736
  },
  {
    "id": "city-248576",
    "name": "Gurugram",
    "state": "Haryana",
    "type": "City",
    "lat": 27.6428,
    "lng": 74.5736
  },
  {
    "id": "city-297117",
    "name": "Manesar",
    "state": "Haryana",
    "type": "City",
    "lat": 27.8368,
    "lng": 76.1396
  },
  {
    "id": "city-248573",
    "name": "Pataudi Jatauli Mandi",
    "state": "Haryana",
    "type": "City",
    "lat": 27.2768,
    "lng": 76.0436
  },
  {
    "id": "city-248579",
    "name": "Sohna",
    "state": "Haryana",
    "type": "City",
    "lat": 29.0488,
    "lng": 73.4236
  },
  {
    "id": "city-248548",
    "name": "Hansi",
    "state": "Haryana",
    "type": "City",
    "lat": 29.2968,
    "lng": 73.1116
  },
  {
    "id": "city-248547",
    "name": "Narnaund",
    "state": "Haryana",
    "type": "City",
    "lat": 30.044800000000002,
    "lng": 74.0116
  },
  {
    "id": "city-248545",
    "name": "Barwala",
    "state": "Haryana",
    "type": "City",
    "lat": 29.326800000000002,
    "lng": 74.7136
  },
  {
    "id": "city-248546",
    "name": "Hisar",
    "state": "Haryana",
    "type": "City",
    "lat": 28.4648,
    "lng": 73.3196
  },
  {
    "id": "city-248547",
    "name": "Narnaund",
    "state": "Haryana",
    "type": "City",
    "lat": 30.044800000000002,
    "lng": 74.0116
  },
  {
    "id": "city-248544",
    "name": "Uklanamandi",
    "state": "Haryana",
    "type": "City",
    "lat": 27.5328,
    "lng": 75.9796
  },
  {
    "id": "city-248560",
    "name": "Bahadurgarh",
    "state": "Haryana",
    "type": "City",
    "lat": 29.2448,
    "lng": 76.0916
  },
  {
    "id": "city-248558",
    "name": "Beri",
    "state": "Haryana",
    "type": "City",
    "lat": 29.870800000000003,
    "lng": 75.4976
  },
  {
    "id": "city-248562",
    "name": "Jhajjar",
    "state": "Haryana",
    "type": "City",
    "lat": 29.5228,
    "lng": 76.7096
  },
  {
    "id": "city-248533",
    "name": "Jind",
    "state": "Haryana",
    "type": "City",
    "lat": 29.9568,
    "lng": 76.1636
  },
  {
    "id": "city-248534",
    "name": "Julana",
    "state": "Haryana",
    "type": "City",
    "lat": 28.0328,
    "lng": 75.39959999999999
  },
  {
    "id": "city-248531",
    "name": "Narwana",
    "state": "Haryana",
    "type": "City",
    "lat": 28.018800000000002,
    "lng": 76.2296
  },
  {
    "id": "city-248535",
    "name": "Safidon",
    "state": "Haryana",
    "type": "City",
    "lat": 27.4388,
    "lng": 75.6576
  },
  {
    "id": "city-248532",
    "name": "Uchana",
    "state": "Haryana",
    "type": "City",
    "lat": 26.2708,
    "lng": 75.5936
  },
  {
    "id": "city-248510",
    "name": "Cheeka",
    "state": "Haryana",
    "type": "City",
    "lat": 29.3928,
    "lng": 73.7996
  },
  {
    "id": "city-248511",
    "name": "Kaithal",
    "state": "Haryana",
    "type": "City",
    "lat": 29.070800000000002,
    "lng": 75.7376
  },
  {
    "id": "city-248512",
    "name": "Kalayat",
    "state": "Haryana",
    "type": "City",
    "lat": 28.8288,
    "lng": 76.2356
  },
  {
    "id": "city-248513",
    "name": "Pundri",
    "state": "Haryana",
    "type": "City",
    "lat": 27.038800000000002,
    "lng": 75.9936
  },
  {
    "id": "city-262119",
    "name": "Rajound",
    "state": "Haryana",
    "type": "City",
    "lat": 26.3288,
    "lng": 76.7996
  },
  {
    "id": "city-299095",
    "name": "Siwan",
    "state": "Haryana",
    "type": "City",
    "lat": 29.6068,
    "lng": 74.7216
  },
  {
    "id": "city-248519",
    "name": "Assandh",
    "state": "Haryana",
    "type": "City",
    "lat": 28.1428,
    "lng": 73.7856
  },
  {
    "id": "city-248520",
    "name": "Gharaunda",
    "state": "Haryana",
    "type": "City",
    "lat": 28.980800000000002,
    "lng": 74.9476
  },
  {
    "id": "city-248516",
    "name": "Indri",
    "state": "Haryana",
    "type": "City",
    "lat": 29.6228,
    "lng": 73.2176
  },
  {
    "id": "city-248517",
    "name": "Karnal",
    "state": "Haryana",
    "type": "City",
    "lat": 27.1888,
    "lng": 75.2356
  },
  {
    "id": "city-248514",
    "name": "Nilokheri",
    "state": "Haryana",
    "type": "City",
    "lat": 26.684800000000003,
    "lng": 73.0996
  },
  {
    "id": "city-253296",
    "name": "Nissing",
    "state": "Haryana",
    "type": "City",
    "lat": 26.5368,
    "lng": 75.1036
  },
  {
    "id": "city-248515",
    "name": "Taraori",
    "state": "Haryana",
    "type": "City",
    "lat": 29.966800000000003,
    "lng": 73.8816
  },
  {
    "id": "city-289253",
    "name": "Ismailabad",
    "state": "Haryana",
    "type": "City",
    "lat": 29.556800000000003,
    "lng": 77.02759999999999
  },
  {
    "id": "city-248509",
    "name": "Ladwa",
    "state": "Haryana",
    "type": "City",
    "lat": 28.4768,
    "lng": 73.6916
  },
  {
    "id": "city-248507",
    "name": "Pehowa",
    "state": "Haryana",
    "type": "City",
    "lat": 26.3108,
    "lng": 75.4256
  },
  {
    "id": "city-248506",
    "name": "Shahbad",
    "state": "Haryana",
    "type": "City",
    "lat": 28.0288,
    "lng": 74.7636
  },
  {
    "id": "city-248508",
    "name": "Thanesar",
    "state": "Haryana",
    "type": "City",
    "lat": 29.8028,
    "lng": 74.6536
  },
  {
    "id": "city-248565",
    "name": "Ateli",
    "state": "Haryana",
    "type": "City",
    "lat": 28.3288,
    "lng": 75.6956
  },
  {
    "id": "city-248563",
    "name": "Kanina",
    "state": "Haryana",
    "type": "City",
    "lat": 28.0348,
    "lng": 75.4616
  },
  {
    "id": "city-248564",
    "name": "Mahendragarh",
    "state": "Haryana",
    "type": "City",
    "lat": 27.878800000000002,
    "lng": 76.03359999999999
  },
  {
    "id": "city-259688",
    "name": "Nangal Chaudhary",
    "state": "Haryana",
    "type": "City",
    "lat": 27.998800000000003,
    "lng": 75.2416
  },
  {
    "id": "city-248566",
    "name": "Narnaul",
    "state": "Haryana",
    "type": "City",
    "lat": 26.236800000000002,
    "lng": 76.9876
  },
  {
    "id": "city-248582",
    "name": "Ferozepur Jhirka",
    "state": "Haryana",
    "type": "City",
    "lat": 26.3608,
    "lng": 74.3836
  },
  {
    "id": "city-248581",
    "name": "Nuh",
    "state": "Haryana",
    "type": "City",
    "lat": 29.4368,
    "lng": 76.0436
  },
  {
    "id": "city-248583",
    "name": "Punahana",
    "state": "Haryana",
    "type": "City",
    "lat": 29.538800000000002,
    "lng": 76.1016
  },
  {
    "id": "city-248580",
    "name": "Taoru",
    "state": "Haryana",
    "type": "City",
    "lat": 29.684800000000003,
    "lng": 73.1396
  },
  {
    "id": "city-248587",
    "name": "Hathin",
    "state": "Haryana",
    "type": "City",
    "lat": 26.4148,
    "lng": 73.2416
  },
  {
    "id": "city-248589",
    "name": "Hodal",
    "state": "Haryana",
    "type": "City",
    "lat": 29.114800000000002,
    "lng": 73.4696
  },
  {
    "id": "city-248586",
    "name": "Palwal",
    "state": "Haryana",
    "type": "City",
    "lat": 26.504800000000003,
    "lng": 75.4396
  },
  {
    "id": "city-248487",
    "name": "Kalka",
    "state": "Haryana",
    "type": "City",
    "lat": 28.0668,
    "lng": 74.9816
  },
  {
    "id": "city-248489",
    "name": "Panchkula",
    "state": "Haryana",
    "type": "City",
    "lat": 28.9248,
    "lng": 76.3956
  },
  {
    "id": "city-248521",
    "name": "Panipat",
    "state": "Haryana",
    "type": "City",
    "lat": 28.4888,
    "lng": 75.1036
  },
  {
    "id": "city-248526",
    "name": "Samalkha",
    "state": "Haryana",
    "type": "City",
    "lat": 28.9588,
    "lng": 74.3456
  },
  {
    "id": "city-248571",
    "name": "Bawal",
    "state": "Haryana",
    "type": "City",
    "lat": 29.2328,
    "lng": 75.7196
  },
  {
    "id": "city-248568",
    "name": "Dharuhera",
    "state": "Haryana",
    "type": "City",
    "lat": 29.010800000000003,
    "lng": 73.1416
  },
  {
    "id": "city-248569",
    "name": "Rewari",
    "state": "Haryana",
    "type": "City",
    "lat": 27.442800000000002,
    "lng": 73.9256
  },
  {
    "id": "city-248556",
    "name": "Kalanaur",
    "state": "Haryana",
    "type": "City",
    "lat": 29.8568,
    "lng": 74.9196
  },
  {
    "id": "city-248555",
    "name": "Meham",
    "state": "Haryana",
    "type": "City",
    "lat": 28.1948,
    "lng": 74.9496
  },
  {
    "id": "city-248557",
    "name": "Rohtak",
    "state": "Haryana",
    "type": "City",
    "lat": 27.600800000000003,
    "lng": 74.8236
  },
  {
    "id": "city-253298",
    "name": "Sampla",
    "state": "Haryana",
    "type": "City",
    "lat": 26.198800000000002,
    "lng": 73.3616
  },
  {
    "id": "city-248543",
    "name": "Ellenabad",
    "state": "Haryana",
    "type": "City",
    "lat": 26.2708,
    "lng": 73.4496
  },
  {
    "id": "city-248540",
    "name": "Kalanwali",
    "state": "Haryana",
    "type": "City",
    "lat": 27.8548,
    "lng": 75.1456
  },
  {
    "id": "city-248539",
    "name": "Mandi Dabwali",
    "state": "Haryana",
    "type": "City",
    "lat": 27.1688,
    "lng": 73.4316
  },
  {
    "id": "city-248542",
    "name": "Rania",
    "state": "Haryana",
    "type": "City",
    "lat": 29.0808,
    "lng": 74.4156
  },
  {
    "id": "city-248541",
    "name": "Sirsa",
    "state": "Haryana",
    "type": "City",
    "lat": 29.0868,
    "lng": 74.6016
  },
  {
    "id": "city-248528",
    "name": "Ganaur",
    "state": "Haryana",
    "type": "City",
    "lat": 28.510800000000003,
    "lng": 76.4576
  },
  {
    "id": "city-248527",
    "name": "Gohana",
    "state": "Haryana",
    "type": "City",
    "lat": 29.138800000000003,
    "lng": 75.9256
  },
  {
    "id": "city-248530",
    "name": "Kharkhoda",
    "state": "Haryana",
    "type": "City",
    "lat": 28.236800000000002,
    "lng": 76.5556
  },
  {
    "id": "city-289251",
    "name": "Kundli",
    "state": "Haryana",
    "type": "City",
    "lat": 27.1568,
    "lng": 76.2436
  },
  {
    "id": "city-248529",
    "name": "Sonipat",
    "state": "Haryana",
    "type": "City",
    "lat": 26.210800000000003,
    "lng": 75.8136
  },
  {
    "id": "city-274458",
    "name": "Radaur",
    "state": "Haryana",
    "type": "City",
    "lat": 27.4208,
    "lng": 73.2436
  },
  {
    "id": "city-289254",
    "name": "Sadhaura",
    "state": "Haryana",
    "type": "City",
    "lat": 29.972800000000003,
    "lng": 74.9636
  },
  {
    "id": "city-248500",
    "name": "Yamunanagar",
    "state": "Haryana",
    "type": "City",
    "lat": 29.102800000000002,
    "lng": 75.7696
  },
  {
    "id": "city-248239",
    "name": "Bilaspur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.692800000000002,
    "lng": 74.4974
  },
  {
    "id": "city-248236",
    "name": "Ghumarwin",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.2768,
    "lng": 76.0094
  },
  {
    "id": "city-305981",
    "name": "Jhandutta",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.2828,
    "lng": 75.2994
  },
  {
    "id": "city-248238",
    "name": "Naina Devi",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.5108,
    "lng": 76.10340000000001
  },
  {
    "id": "city-305930",
    "name": "Sawarghat",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.7168,
    "lng": 76.3054
  },
  {
    "id": "city-248237",
    "name": "Talai",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.8868,
    "lng": 76.0634
  },
  {
    "id": "city-305980",
    "name": "Banikhet",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.3088,
    "lng": 76.4334
  },
  {
    "id": "city-248046",
    "name": "Chamba",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.928800000000003,
    "lng": 76.0774
  },
  {
    "id": "city-276627",
    "name": "Chowari",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.518800000000002,
    "lng": 76.5354
  },
  {
    "id": "city-248044",
    "name": "Dalhousie",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.0008,
    "lng": 76.3334
  },
  {
    "id": "city-306001",
    "name": "Badsar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.582800000000002,
    "lng": 76.9434
  },
  {
    "id": "city-305995",
    "name": "Bhoranj",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.5928,
    "lng": 77.0294
  },
  {
    "id": "city-248230",
    "name": "Bhota",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.1328,
    "lng": 77.2814
  },
  {
    "id": "city-248229",
    "name": "Hamirpur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.2808,
    "lng": 77.8694
  },
  {
    "id": "city-248228",
    "name": "Nadaun",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.2508,
    "lng": 75.2274
  },
  {
    "id": "city-248227",
    "name": "Tira Sujanpur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.2008,
    "lng": 77.2854
  },
  {
    "id": "city-274797",
    "name": "Baijnath-Paprola",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.7588,
    "lng": 77.0154
  },
  {
    "id": "city-305934",
    "name": "Beed",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.1008,
    "lng": 77.2894
  },
  {
    "id": "city-276626",
    "name": "Dehra",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.8928,
    "lng": 77.84140000000001
  },
  {
    "id": "city-248211",
    "name": "Dharamshala",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.6568,
    "lng": 75.9334
  },
  {
    "id": "city-248216",
    "name": "Jawalamukhi",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.788800000000002,
    "lng": 75.9854
  },
  {
    "id": "city-275535",
    "name": "Jawali",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.5328,
    "lng": 74.5614
  },
  {
    "id": "city-248213",
    "name": "Kangra",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.4848,
    "lng": 77.0734
  },
  {
    "id": "city-305926",
    "name": "Khundian",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.8248,
    "lng": 75.46940000000001
  },
  {
    "id": "city-305924",
    "name": "Kotla",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.698800000000002,
    "lng": 75.2354
  },
  {
    "id": "city-248214",
    "name": "Nagrota Bagwan",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.7168,
    "lng": 78.0174
  },
  {
    "id": "city-305935",
    "name": "Nagrota Surian",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.1848,
    "lng": 76.1574
  },
  {
    "id": "city-248210",
    "name": "Nurpur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.076800000000002,
    "lng": 75.8334
  },
  {
    "id": "city-248217",
    "name": "Palampur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.3168,
    "lng": 75.2494
  },
  {
    "id": "city-297015",
    "name": "Shahpur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.2508,
    "lng": 75.3074
  },
  {
    "id": "dist-19",
    "name": "Kinnaur",
    "state": "Himachal Pradesh",
    "type": "District",
    "lat": 31.0488,
    "lng": 75.5334
  },
  {
    "id": "city-248221",
    "name": "Banjar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.1048,
    "lng": 77.1254
  },
  {
    "id": "city-248220",
    "name": "Bhuntar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.2448,
    "lng": 76.2414
  },
  {
    "id": "city-248219",
    "name": "Kullu",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.8548,
    "lng": 76.0714
  },
  {
    "id": "city-248218",
    "name": "Manali",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.2008,
    "lng": 74.6774
  },
  {
    "id": "city-297011",
    "name": "Nirmand",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.666800000000002,
    "lng": 76.7954
  },
  {
    "id": "dist-21",
    "name": "Lahaul And Spiti",
    "state": "Himachal Pradesh",
    "type": "District",
    "lat": 30.8348,
    "lng": 75.4914
  },
  {
    "id": "city-305938",
    "name": "Bladwara",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.268800000000002,
    "lng": 74.6414
  },
  {
    "id": "city-305979",
    "name": "Dharampur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.4888,
    "lng": 75.6214
  },
  {
    "id": "city-248222",
    "name": "Jogindarnagar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.3668,
    "lng": 76.6554
  },
  {
    "id": "city-276625",
    "name": "Karsog",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.7028,
    "lng": 76.8314
  },
  {
    "id": "city-248225",
    "name": "Mandi",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.6228,
    "lng": 74.8794
  },
  {
    "id": "city-274794",
    "name": "Nerchowk",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.5988,
    "lng": 77.3994
  },
  {
    "id": "city-248226",
    "name": "Rawalsar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.3308,
    "lng": 77.0514
  },
  {
    "id": "city-305922",
    "name": "Sandhol",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.5948,
    "lng": 78.1554
  },
  {
    "id": "city-248223",
    "name": "Sarkaghat",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.8048,
    "lng": 77.4414
  },
  {
    "id": "city-248224",
    "name": "Sundernagar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.960800000000003,
    "lng": 74.3174
  },
  {
    "id": "city-297013",
    "name": "Chirgaon",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.614800000000002,
    "lng": 77.1194
  },
  {
    "id": "city-248250",
    "name": "Chopal",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.8028,
    "lng": 76.1714
  },
  {
    "id": "city-248251",
    "name": "Jubbal",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.396800000000002,
    "lng": 77.3454
  },
  {
    "id": "city-248252",
    "name": "Kotkhai",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.5628,
    "lng": 77.8754
  },
  {
    "id": "city-248246",
    "name": "Narkanda",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.884800000000002,
    "lng": 75.71340000000001
  },
  {
    "id": "city-297014",
    "name": "Nerwa",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.8428,
    "lng": 75.6994
  },
  {
    "id": "city-248245",
    "name": "Rampur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.5348,
    "lng": 75.4394
  },
  {
    "id": "city-248253",
    "name": "Rohru",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.3408,
    "lng": 75.1374
  },
  {
    "id": "city-248248",
    "name": "Shimla",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.4448,
    "lng": 75.6494
  },
  {
    "id": "city-248247",
    "name": "Suni",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.3148,
    "lng": 77.9234
  },
  {
    "id": "city-248249",
    "name": "Theog",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.370800000000003,
    "lng": 75.0674
  },
  {
    "id": "city-248043",
    "name": "Nahan",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.9568,
    "lng": 74.2334
  },
  {
    "id": "city-248045",
    "name": "Paonta Sahib",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.5848,
    "lng": 74.8454
  },
  {
    "id": "city-248047",
    "name": "Rajgarh",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.5348,
    "lng": 77.84740000000001
  },
  {
    "id": "city-305963",
    "name": "Sangrah",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.684800000000003,
    "lng": 77.9454
  },
  {
    "id": "city-305960",
    "name": "Shillai",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.9688,
    "lng": 74.5654
  },
  {
    "id": "city-248240",
    "name": "Arki",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.8868,
    "lng": 76.6554
  },
  {
    "id": "city-248242",
    "name": "Baddi",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.9408,
    "lng": 76.3294
  },
  {
    "id": "city-297010",
    "name": "Kandaghat",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.4668,
    "lng": 74.4914
  },
  {
    "id": "city-305977",
    "name": "Kunihar",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.9768,
    "lng": 78.1174
  },
  {
    "id": "city-248241",
    "name": "Nalagarh",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 32.040800000000004,
    "lng": 76.1414
  },
  {
    "id": "city-248243",
    "name": "Parwanoo",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.8468,
    "lng": 78.0874
  },
  {
    "id": "city-248244",
    "name": "Solan",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 32.0028,
    "lng": 74.6594
  },
  {
    "id": "city-297009",
    "name": "Amb",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.9888,
    "lng": 76.8174
  },
  {
    "id": "city-305976",
    "name": "Bangana",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 32.0168,
    "lng": 75.7654
  },
  {
    "id": "city-248231",
    "name": "Daulatpur",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.1168,
    "lng": 74.7054
  },
  {
    "id": "city-248232",
    "name": "Gagret",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.1688,
    "lng": 76.5174
  },
  {
    "id": "city-248234",
    "name": "Mehatpur Basdehra",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 29.864800000000002,
    "lng": 75.1174
  },
  {
    "id": "city-248235",
    "name": "Santokhgarh",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 31.800800000000002,
    "lng": 75.6614
  },
  {
    "id": "city-276639",
    "name": "Tahliwal",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 28.940800000000003,
    "lng": 77.2894
  },
  {
    "id": "city-248233",
    "name": "Una",
    "state": "Himachal Pradesh",
    "type": "City",
    "lat": 30.4888,
    "lng": 76.3174
  },
  {
    "id": "city-248172",
    "name": "Municipal Committee Achabal",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.700199999999995,
    "lng": 74.3582
  },
  {
    "id": "city-296990",
    "name": "Municipal Committee Ashmuqam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.1862,
    "lng": 74.8722
  },
  {
    "id": "city-248169",
    "name": "Municipal Committee Bijbehara",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.5722,
    "lng": 75.3102
  },
  {
    "id": "city-248176",
    "name": "Municipal Committee Dooru Verinag",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.202199999999998,
    "lng": 77.1042
  },
  {
    "id": "city-248173",
    "name": "Municipal Committee Kokernag",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.7082,
    "lng": 75.9102
  },
  {
    "id": "city-248170",
    "name": "Municipal Committee Mattan",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.654199999999996,
    "lng": 77.5242
  },
  {
    "id": "city-248168",
    "name": "Municipal Committee Pahalgam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.5742,
    "lng": 74.3882
  },
  {
    "id": "city-248175",
    "name": "Municipal Committee Qazigund",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.2102,
    "lng": 75.9842
  },
  {
    "id": "city-296991",
    "name": "Municipal Committee Seer Hamdan",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.5242,
    "lng": 75.3902
  },
  {
    "id": "city-248171",
    "name": "Municipal Council Anantnag",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.9122,
    "lng": 73.6422
  },
  {
    "id": "city-248147",
    "name": "Municipal Committee Hajin",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.5402,
    "lng": 73.8062
  },
  {
    "id": "city-248148",
    "name": "Municipal Committee Sumbal",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.632199999999997,
    "lng": 74.6582
  },
  {
    "id": "city-248146",
    "name": "Municipal Council Bandipora",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 30.916199999999996,
    "lng": 74.9742
  },
  {
    "id": "city-248154",
    "name": "Municipal Committee Gulmarg Tangmarg",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.2442,
    "lng": 75.1422
  },
  {
    "id": "city-248153",
    "name": "Municipal Committee Kunzer",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.1862,
    "lng": 76.0162
  },
  {
    "id": "city-248150",
    "name": "Municipal Committee Pattan",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.5602,
    "lng": 75.0182
  },
  {
    "id": "city-248152",
    "name": "Municipal Committee Uri",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.024199999999997,
    "lng": 75.4422
  },
  {
    "id": "city-296985",
    "name": "Municipal Committee Watergam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.7722,
    "lng": 73.7102
  },
  {
    "id": "city-248151",
    "name": "Municipal Council Baramulla",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.398199999999996,
    "lng": 75.1162
  },
  {
    "id": "city-248149",
    "name": "Municipal Council Sopore",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.3842,
    "lng": 75.3782
  },
  {
    "id": "city-248158",
    "name": "Municipal Committee Beerwah",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.788199999999996,
    "lng": 74.9422
  },
  {
    "id": "city-253136",
    "name": "Municipal Committee Chadoora",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.338199999999997,
    "lng": 74.0562
  },
  {
    "id": "city-248161",
    "name": "Municipal Committee Chrari Sharief",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.5142,
    "lng": 75.2242
  },
  {
    "id": "city-248160",
    "name": "Municipal Committee Khansahib",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.8982,
    "lng": 74.8242
  },
  {
    "id": "city-248157",
    "name": "Municipal Committee Magam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.4862,
    "lng": 75.1322
  },
  {
    "id": "city-248159",
    "name": "Municipal Council Budgam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.1042,
    "lng": 77.0662
  },
  {
    "id": "city-248040",
    "name": "Municipal Committee Bhaderwah",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.0882,
    "lng": 73.6902
  },
  {
    "id": "city-254926",
    "name": "Municipal Committee Thathri",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.0642,
    "lng": 76.8262
  },
  {
    "id": "city-248038",
    "name": "Municipal Council Doda",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.8282,
    "lng": 74.0622
  },
  {
    "id": "city-248155",
    "name": "Municipal Council Ganderbal",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.0402,
    "lng": 74.2422
  },
  {
    "id": "city-248194",
    "name": "Jammu Municipal Corporation",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.9062,
    "lng": 76.9042
  },
  {
    "id": "city-248192",
    "name": "Municipal Committee Akhnoor",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.548199999999998,
    "lng": 76.0542
  },
  {
    "id": "city-248198",
    "name": "Municipal Committee Arnia",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 30.8022,
    "lng": 74.9282
  },
  {
    "id": "city-248197",
    "name": "Municipal Committee Bishnah",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.4662,
    "lng": 75.9602
  },
  {
    "id": "city-248195",
    "name": "Municipal Committee Ghou-Manhasan",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.5342,
    "lng": 74.8842
  },
  {
    "id": "city-248191",
    "name": "Municipal Committee Jourian",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.2962,
    "lng": 74.01820000000001
  },
  {
    "id": "city-248193",
    "name": "Municipal Committee Khour",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.102199999999996,
    "lng": 75.2282
  },
  {
    "id": "city-248196",
    "name": "Municipal Committee R S Pura",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.0582,
    "lng": 74.6002
  },
  {
    "id": "city-276585",
    "name": "Municipal Committee Basohli",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.276199999999996,
    "lng": 74.6622
  },
  {
    "id": "city-248204",
    "name": "Municipal Committee Billawar",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.4882,
    "lng": 73.7222
  },
  {
    "id": "city-276594",
    "name": "Municipal Committee Hiranagar",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.0182,
    "lng": 77.3602
  },
  {
    "id": "city-276584",
    "name": "Municipal Committee Lakhanpur",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.2362,
    "lng": 76.6862
  },
  {
    "id": "city-276586",
    "name": "Municipal Committee Parole",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.4502,
    "lng": 73.6082
  },
  {
    "id": "city-276581",
    "name": "Municipal Council Kathua",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.432199999999995,
    "lng": 74.0502
  },
  {
    "id": "city-248041",
    "name": "Municipal Council Kishtwar",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.5302,
    "lng": 76.4322
  },
  {
    "id": "city-296987",
    "name": "Municipal Committee Devsar",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.3542,
    "lng": 76.4082
  },
  {
    "id": "city-296989",
    "name": "Municipal Committee Frisal",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 30.926199999999998,
    "lng": 74.5482
  },
  {
    "id": "city-296988",
    "name": "Municipal Committee Yaripora",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.3262,
    "lng": 76.0282
  },
  {
    "id": "city-248174",
    "name": "Municipal Council Kulgam",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.478199999999998,
    "lng": 74.4762
  },
  {
    "id": "city-248035",
    "name": "Municipal Committee Handwara",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.828199999999995,
    "lng": 73.8142
  },
  {
    "id": "city-248139",
    "name": "Municipal Committee Langate",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.880199999999995,
    "lng": 75.2022
  },
  {
    "id": "city-248034",
    "name": "Municipal Council Kupwara",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.422199999999997,
    "lng": 74.9642
  },
  {
    "id": "city-253142",
    "name": "Municipal Committee Surankote",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.2202,
    "lng": 74.8862
  },
  {
    "id": "city-248042",
    "name": "Municipal Council Poonch",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.050199999999997,
    "lng": 74.6162
  },
  {
    "id": "city-248165",
    "name": "Municipal Committee Awantipora",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.5602,
    "lng": 75.3862
  },
  {
    "id": "city-248163",
    "name": "Municipal Committee Khrew",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 30.8862,
    "lng": 75.5322
  },
  {
    "id": "city-248162",
    "name": "Municipal Committee Pampore",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.716199999999997,
    "lng": 76.6702
  },
  {
    "id": "city-248164",
    "name": "Municipal Committee Tral",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.5422,
    "lng": 74.6442
  },
  {
    "id": "city-248166",
    "name": "Municipal Council Pulwama",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.1622,
    "lng": 74.3122
  },
  {
    "id": "city-296984",
    "name": "Municipal Committee Kalakote",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.572199999999995,
    "lng": 74.3262
  },
  {
    "id": "city-276593",
    "name": "Municipal Committee Nowshera",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.6702,
    "lng": 74.1642
  },
  {
    "id": "city-248190",
    "name": "Municipal Committee Sunderbani",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.1062,
    "lng": 73.9442
  },
  {
    "id": "city-248187",
    "name": "Municipal Committee Thanamandi",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.2262,
    "lng": 75.7042
  },
  {
    "id": "city-276592",
    "name": "Municipal Council Rajouri",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.8722,
    "lng": 74.9942
  },
  {
    "id": "city-248036",
    "name": "Municipal Committee Banihal",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.898199999999996,
    "lng": 73.9442
  },
  {
    "id": "city-248039",
    "name": "Municipal Committee Batote",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 30.882199999999997,
    "lng": 75.7762
  },
  {
    "id": "city-248037",
    "name": "Municipal Council Ramban",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.7262,
    "lng": 76.5722
  },
  {
    "id": "city-276591",
    "name": "Municipal Committee Katra",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.4182,
    "lng": 75.0242
  },
  {
    "id": "city-276590",
    "name": "Municipal Council Reasi",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 31.352199999999996,
    "lng": 73.8982
  },
  {
    "id": "city-248199",
    "name": "Municipal Committee Bari Brahmana",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.200199999999995,
    "lng": 73.8982
  },
  {
    "id": "city-248203",
    "name": "Municipal Committee Ramgarh",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.3002,
    "lng": 76.0782
  },
  {
    "id": "city-248201",
    "name": "Municipal Committee Vijaypur",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.840199999999996,
    "lng": 76.8582
  },
  {
    "id": "city-248202",
    "name": "Municipal Council Samba",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.060199999999995,
    "lng": 73.8462
  },
  {
    "id": "city-248167",
    "name": "Municipal Council Shopian",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.032199999999996,
    "lng": 75.8102
  },
  {
    "id": "city-248156",
    "name": "Srinagar Municipal Corporation",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.3642,
    "lng": 77.0222
  },
  {
    "id": "city-276588",
    "name": "Municipal Committee Chenani",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 33.252199999999995,
    "lng": 75.1822
  },
  {
    "id": "city-276589",
    "name": "Municipal Committee Ramnagar",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 32.9862,
    "lng": 76.1202
  },
  {
    "id": "city-276587",
    "name": "Municipal Council Udhampur",
    "state": "Jammu And Kashmir",
    "type": "City",
    "lat": 34.7402,
    "lng": 76.1262
  },
  {
    "id": "city-248056",
    "name": "Chas",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.7362,
    "lng": 84.4259
  },
  {
    "id": "city-248136",
    "name": "Phusro",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.9602,
    "lng": 84.6579
  },
  {
    "id": "city-248129",
    "name": "Chatra",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.8802,
    "lng": 84.0099
  },
  {
    "id": "city-248049",
    "name": "Deoghar",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.586199999999998,
    "lng": 85.5119
  },
  {
    "id": "city-248050",
    "name": "Madhupur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.9382,
    "lng": 84.2799
  },
  {
    "id": "city-248055",
    "name": "Chirkunda",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.7762,
    "lng": 84.7859
  },
  {
    "id": "city-250378",
    "name": "Dhanbad",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.4182,
    "lng": 83.7119
  },
  {
    "id": "city-250352",
    "name": "Basukinath",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.5342,
    "lng": 83.8999
  },
  {
    "id": "city-248054",
    "name": "Dumka",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.8862,
    "lng": 85.0759
  },
  {
    "id": "city-250445",
    "name": "Chakulia",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.3022,
    "lng": 82.4599
  },
  {
    "id": "city-250434",
    "name": "Jamshedpur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.504199999999997,
    "lng": 84.1139
  },
  {
    "id": "city-250435",
    "name": "Jugsalai",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.1742,
    "lng": 85.7799
  },
  {
    "id": "city-250433",
    "name": "Mango",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.3262,
    "lng": 83.12389999999999
  },
  {
    "id": "city-248128",
    "name": "Garhwa",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.9342,
    "lng": 85.6839
  },
  {
    "id": "city-253228",
    "name": "Manjhiaon",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.3842,
    "lng": 83.8179
  },
  {
    "id": "city-274815",
    "name": "Nagar Untari Nagar Panchayat",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.3502,
    "lng": 83.4599
  },
  {
    "id": "city-290364",
    "name": "Badaki Suriya",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.5442,
    "lng": 84.2499
  },
  {
    "id": "city-277138",
    "name": "Dhanwar",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.8082,
    "lng": 83.8019
  },
  {
    "id": "city-250349",
    "name": "Giridih Municipal Corporation",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.3462,
    "lng": 85.2319
  },
  {
    "id": "city-248051",
    "name": "Godda",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.7882,
    "lng": 86.0379
  },
  {
    "id": "city-300370",
    "name": "Mahagama Municipal Corporation",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.7322,
    "lng": 83.1979
  },
  {
    "id": "city-248057",
    "name": "Gumla",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.074199999999998,
    "lng": 85.9039
  },
  {
    "id": "city-248130",
    "name": "Hazaribag",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.1402,
    "lng": 86.1339
  },
  {
    "id": "city-248134",
    "name": "Jamtara",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.0062,
    "lng": 82.3879
  },
  {
    "id": "city-248135",
    "name": "Mihijam",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.5722,
    "lng": 82.8539
  },
  {
    "id": "city-250414",
    "name": "Khunti",
    "state": "Jharkhand",
    "type": "City",
    "lat": 20.952199999999998,
    "lng": 86.00189999999999
  },
  {
    "id": "city-277135",
    "name": "Domchanch",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.2762,
    "lng": 82.6779
  },
  {
    "id": "city-248132",
    "name": "Jhumri Telaiya",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.106199999999998,
    "lng": 82.6319
  },
  {
    "id": "city-248131",
    "name": "Kodarma",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.5242,
    "lng": 85.11789999999999
  },
  {
    "id": "city-250326",
    "name": "Latehar",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.728199999999998,
    "lng": 83.0739
  },
  {
    "id": "city-248137",
    "name": "Lohardaga",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.8282,
    "lng": 83.1339
  },
  {
    "id": "city-248133",
    "name": "Pakur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.5602,
    "lng": 82.3779
  },
  {
    "id": "city-253231",
    "name": "Bishrampur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.080199999999998,
    "lng": 83.8259
  },
  {
    "id": "city-300374",
    "name": "Chhatarpur ",
    "state": "Jharkhand",
    "type": "City",
    "lat": 23.1102,
    "lng": 83.7319
  },
  {
    "id": "city-300371",
    "name": "Hariharganj Municipal Corporation",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.8442,
    "lng": 84.1019
  },
  {
    "id": "city-250323",
    "name": "Hussainabad",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.2442,
    "lng": 84.4619
  },
  {
    "id": "city-250324",
    "name": "Medininagar (Daltonganj) Municipal Corporation",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.8422,
    "lng": 84.9759
  },
  {
    "id": "city-274814",
    "name": "Ramgarh Nagar Parishad",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.708199999999998,
    "lng": 86.1099
  },
  {
    "id": "city-250415",
    "name": "Bundu",
    "state": "Jharkhand",
    "type": "City",
    "lat": 24.330199999999998,
    "lng": 85.8399
  },
  {
    "id": "city-250413",
    "name": "Ranchi",
    "state": "Jharkhand",
    "type": "City",
    "lat": 20.812199999999997,
    "lng": 82.47789999999999
  },
  {
    "id": "city-277137",
    "name": "Barharwa",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.458199999999998,
    "lng": 83.9119
  },
  {
    "id": "city-248053",
    "name": "Rajmahal",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.8582,
    "lng": 83.0239
  },
  {
    "id": "city-248052",
    "name": "Sahibganj",
    "state": "Jharkhand",
    "type": "City",
    "lat": 20.644199999999998,
    "lng": 84.0859
  },
  {
    "id": "city-253166",
    "name": "Adityapur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.432199999999998,
    "lng": 84.3299
  },
  {
    "id": "city-276352",
    "name": "Kapali",
    "state": "Jharkhand",
    "type": "City",
    "lat": 22.266199999999998,
    "lng": 84.7359
  },
  {
    "id": "city-250423",
    "name": "Seraikella",
    "state": "Jharkhand",
    "type": "City",
    "lat": 20.7682,
    "lng": 84.74589999999999
  },
  {
    "id": "city-248138",
    "name": "Simdega",
    "state": "Jharkhand",
    "type": "City",
    "lat": 21.190199999999997,
    "lng": 84.86789999999999
  },
  {
    "id": "city-250430",
    "name": "Chaibasa",
    "state": "Jharkhand",
    "type": "City",
    "lat": 23.638199999999998,
    "lng": 83.8759
  },
  {
    "id": "city-250416",
    "name": "Chakradharpur",
    "state": "Jharkhand",
    "type": "City",
    "lat": 20.8382,
    "lng": 82.5479
  },
  {
    "id": "city-276597",
    "name": "Aminagad",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.6893,
    "lng": 75.5899
  },
  {
    "id": "city-251837",
    "name": "Badami",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.9253,
    "lng": 75.51389999999999
  },
  {
    "id": "city-251839",
    "name": "Bagalkot",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.039299999999999,
    "lng": 74.62389999999999
  },
  {
    "id": "city-276529",
    "name": "Belagali",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.6593,
    "lng": 75.4519
  },
  {
    "id": "city-251834",
    "name": "Bilgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.3713,
    "lng": 75.6279
  },
  {
    "id": "city-251838",
    "name": "Guledgudda",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.7053,
    "lng": 73.75789999999999
  },
  {
    "id": "city-251840",
    "name": "Hungund",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.703299999999999,
    "lng": 75.8399
  },
  {
    "id": "city-251841",
    "name": "Ilkal",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1233,
    "lng": 73.3479
  },
  {
    "id": "city-251832",
    "name": "Jamkhandi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.8553,
    "lng": 72.75189999999999
  },
  {
    "id": "city-301079",
    "name": "Kamatagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.023299999999999,
    "lng": 74.6959
  },
  {
    "id": "city-251836",
    "name": "Kerur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.8393,
    "lng": 74.5439
  },
  {
    "id": "city-299317",
    "name": "Lokapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5673,
    "lng": 73.5839
  },
  {
    "id": "city-251830",
    "name": "Mahalingpur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5213,
    "lng": 74.8699
  },
  {
    "id": "city-251835",
    "name": "Mudhol",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0793,
    "lng": 73.8639
  },
  {
    "id": "city-251833",
    "name": "Rabkavi-Banhatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0733,
    "lng": 75.34989999999999
  },
  {
    "id": "city-299179",
    "name": "Shiruru",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.049299999999999,
    "lng": 73.01389999999999
  },
  {
    "id": "city-251831",
    "name": "Terdal",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.113299999999999,
    "lng": 75.32589999999999
  },
  {
    "id": "city-251927",
    "name": "Ballari",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.3193,
    "lng": 73.0959
  },
  {
    "id": "city-251922",
    "name": "Hosapete",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.8673,
    "lng": 75.1879
  },
  {
    "id": "city-251924",
    "name": "Kampli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0573,
    "lng": 75.7739
  },
  {
    "id": "city-276534",
    "name": "Kudutini",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8273,
    "lng": 76.43589999999999
  },
  {
    "id": "city-276538",
    "name": "Kurekuppa",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.337299999999999,
    "lng": 76.6139
  },
  {
    "id": "city-276532",
    "name": "Kurugodu",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4253,
    "lng": 75.19789999999999
  },
  {
    "id": "city-251929",
    "name": "Sandur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5673,
    "lng": 73.3999
  },
  {
    "id": "city-251925",
    "name": "Siruguppa",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2893,
    "lng": 75.4939
  },
  {
    "id": "city-251926",
    "name": "Tekkalakote",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.8493,
    "lng": 73.7499
  },
  {
    "id": "city-276618",
    "name": "Ainapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.0893,
    "lng": 73.9259
  },
  {
    "id": "city-299329",
    "name": "Ankalagi-Akkathangerahal",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.4813,
    "lng": 73.9579
  },
  {
    "id": "city-276577",
    "name": "Arabhavi",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.8413,
    "lng": 74.30189999999999
  },
  {
    "id": "city-251812",
    "name": "Athni",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4773,
    "lng": 75.9139
  },
  {
    "id": "city-251827",
    "name": "Bail Hongal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0953,
    "lng": 73.3999
  },
  {
    "id": "city-251824",
    "name": "Belagavi",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2793,
    "lng": 76.6719
  },
  {
    "id": "city-305546",
    "name": "Benakanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.135299999999999,
    "lng": 73.8639
  },
  {
    "id": "city-276583",
    "name": "Boragaon",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1033,
    "lng": 75.4399
  },
  {
    "id": "city-276578",
    "name": "Chennammana Kittur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.613299999999999,
    "lng": 75.0499
  },
  {
    "id": "city-251811",
    "name": "Chikodi",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5353,
    "lng": 75.9999
  },
  {
    "id": "city-276477",
    "name": "Chinchali",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8993,
    "lng": 75.7079
  },
  {
    "id": "city-276575",
    "name": "Examba",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.4173,
    "lng": 76.17389999999999
  },
  {
    "id": "city-276574",
    "name": "Ghataprabha",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5193,
    "lng": 73.31989999999999
  },
  {
    "id": "city-251818",
    "name": "Gokak",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.783299999999999,
    "lng": 76.3999
  },
  {
    "id": "city-305550",
    "name": "HIREBAGEWADI",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.581299999999999,
    "lng": 74.4259
  },
  {
    "id": "city-276569",
    "name": "Harogeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.507299999999999,
    "lng": 75.25189999999999
  },
  {
    "id": "city-305548",
    "name": "Hindalaga",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6473,
    "lng": 75.5119
  },
  {
    "id": "city-251820",
    "name": "Hukeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0573,
    "lng": 73.7739
  },
  {
    "id": "city-276483",
    "name": "Kabbur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.3233,
    "lng": 76.01989999999999
  },
  {
    "id": "city-299331",
    "name": "Kagawada",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.7553,
    "lng": 73.9799
  },
  {
    "id": "city-276576",
    "name": "Kallolli",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.725299999999999,
    "lng": 74.4579
  },
  {
    "id": "city-276567",
    "name": "Kankanavadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.911299999999999,
    "lng": 75.5919
  },
  {
    "id": "city-251825",
    "name": "Khanapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.953299999999999,
    "lng": 76.3659
  },
  {
    "id": "city-251816",
    "name": "Konnur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.959299999999999,
    "lng": 75.7359
  },
  {
    "id": "city-251813",
    "name": "Kudchi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.4253,
    "lng": 76.1819
  },
  {
    "id": "city-299332",
    "name": "Machhe",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.209299999999999,
    "lng": 72.8939
  },
  {
    "id": "city-299417",
    "name": "Mkhubballi",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.8993,
    "lng": 73.8759
  },
  {
    "id": "city-251815",
    "name": "Mudalgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2873,
    "lng": 75.3519
  },
  {
    "id": "city-276563",
    "name": "Mugalakoda",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1093,
    "lng": 76.05789999999999
  },
  {
    "id": "city-276564",
    "name": "Munavalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.9153,
    "lng": 74.61189999999999
  },
  {
    "id": "city-301061",
    "name": "Naganur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.4653,
    "lng": 76.68589999999999
  },
  {
    "id": "city-251809",
    "name": "Nipani",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.3393,
    "lng": 72.92389999999999
  },
  {
    "id": "city-299333",
    "name": "Peeranawadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.5193,
    "lng": 75.9279
  },
  {
    "id": "city-251829",
    "name": "Ramdurg",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5653,
    "lng": 75.74589999999999
  },
  {
    "id": "city-251814",
    "name": "Raybag",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5613,
    "lng": 73.2139
  },
  {
    "id": "city-251810",
    "name": "Sadalgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.8273,
    "lng": 75.3159
  },
  {
    "id": "city-251819",
    "name": "Sankeshwar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.3033,
    "lng": 73.4799
  },
  {
    "id": "city-251828",
    "name": "Saundatti-Yellamma",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0453,
    "lng": 73.8099
  },
  {
    "id": "city-276579",
    "name": "Shedbala",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.485299999999999,
    "lng": 73.5299
  },
  {
    "id": "city-276565",
    "name": "Ugar Khurda",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.5893,
    "lng": 75.05789999999999
  },
  {
    "id": "city-299330",
    "name": "Yaragatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1973,
    "lng": 75.8659
  },
  {
    "id": "city-299169",
    "name": "Bashettihalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2693,
    "lng": 73.0179
  },
  {
    "id": "city-251994",
    "name": "Devanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4633,
    "lng": 72.8879
  },
  {
    "id": "city-251992",
    "name": "Dod Ballapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.337299999999999,
    "lng": 75.2059
  },
  {
    "id": "city-251995",
    "name": "Hosakote",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.177299999999999,
    "lng": 75.7979
  },
  {
    "id": "city-251996",
    "name": "Magadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.8433,
    "lng": 74.5479
  },
  {
    "id": "city-251990",
    "name": "Nelamangala",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.767299999999999,
    "lng": 74.8639
  },
  {
    "id": "city-251842",
    "name": "Vijayapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.825299999999999,
    "lng": 72.8459
  },
  {
    "id": "city-276526",
    "name": "Bidadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.703299999999999,
    "lng": 76.6319
  },
  {
    "id": "city-253185",
    "name": "Channapatna",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8393,
    "lng": 76.4399
  },
  {
    "id": "city-299326",
    "name": "Harohalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1933,
    "lng": 74.0059
  },
  {
    "id": "city-253188",
    "name": "Kanakpura",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.4333,
    "lng": 75.9979
  },
  {
    "id": "city-251996",
    "name": "Magadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.8433,
    "lng": 74.5479
  },
  {
    "id": "city-253186",
    "name": "Ramanagara",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.9153,
    "lng": 76.20389999999999
  },
  {
    "id": "city-253189",
    "name": "Anekal",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2333,
    "lng": 76.0619
  },
  {
    "id": "city-276539",
    "name": "Attibele",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1653,
    "lng": 75.87389999999999
  },
  {
    "id": "city-305851",
    "name": "Bengaluru Central City Corporation(Gba)",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.113299999999999,
    "lng": 74.5899
  },
  {
    "id": "city-305850",
    "name": "Bengaluru East City Corporation",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.043299999999999,
    "lng": 74.8279
  },
  {
    "id": "city-305853",
    "name": "Bengaluru North City Corporation (Gba)",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2213,
    "lng": 73.89789999999999
  },
  {
    "id": "city-305852",
    "name": "Bengaluru South City Corporation (Gba)",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2053,
    "lng": 76.3779
  },
  {
    "id": "city-305854",
    "name": "Bengaluru West City Corporation (Gba)",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.0213,
    "lng": 76.2659
  },
  {
    "id": "city-276537",
    "name": "Bommasandra",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.603299999999999,
    "lng": 74.9399
  },
  {
    "id": "city-276533",
    "name": "Chandapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2753,
    "lng": 74.8359
  },
  {
    "id": "city-299318",
    "name": "Chikkabanavara",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.687299999999999,
    "lng": 73.6879
  },
  {
    "id": "city-301176",
    "name": "Doddathoguru",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9613,
    "lng": 73.91789999999999
  },
  {
    "id": "city-276463",
    "name": "Hebbugodi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.055299999999999,
    "lng": 75.93589999999999
  },
  {
    "id": "city-299319",
    "name": "Hunasamaranahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.853299999999999,
    "lng": 75.7139
  },
  {
    "id": "city-276464",
    "name": "Jigani",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.8933,
    "lng": 76.6899
  },
  {
    "id": "city-301790",
    "name": "Konappanaagrahara",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.4893,
    "lng": 75.3659
  },
  {
    "id": "city-296975",
    "name": "Madanayakanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8433,
    "lng": 75.37989999999999
  },
  {
    "id": "city-251866",
    "name": "Aurad",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4633,
    "lng": 75.4799
  },
  {
    "id": "city-251864",
    "name": "Basavakalyan",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.293299999999999,
    "lng": 75.80189999999999
  },
  {
    "id": "city-251865",
    "name": "Bhalki",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.491299999999999,
    "lng": 76.0599
  },
  {
    "id": "city-251867",
    "name": "Bidar",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.6413,
    "lng": 75.9979
  },
  {
    "id": "city-251869",
    "name": "Chitgoppa",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0153,
    "lng": 76.7119
  },
  {
    "id": "city-277668",
    "name": "Hallikheda (B)",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.2373,
    "lng": 75.8419
  },
  {
    "id": "city-251868",
    "name": "Homnabad",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9253,
    "lng": 76.5779
  },
  {
    "id": "city-305557",
    "name": "Rajeshwara",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.469299999999999,
    "lng": 74.8899
  },
  {
    "id": "city-252054",
    "name": "Chamarajanagar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1553,
    "lng": 74.89189999999999
  },
  {
    "id": "city-252053",
    "name": "Gundlupet",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0973,
    "lng": 73.5419
  },
  {
    "id": "city-253130",
    "name": "Hanur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.697299999999998,
    "lng": 73.14189999999999
  },
  {
    "id": "city-252056",
    "name": "Kollegal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.911299999999999,
    "lng": 72.9999
  },
  {
    "id": "city-252055",
    "name": "Yelandur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5653,
    "lng": 73.3779
  },
  {
    "id": "city-305603",
    "name": "Allipur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5673,
    "lng": 75.7439
  },
  {
    "id": "city-251981",
    "name": "Bagepalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.491299999999999,
    "lng": 73.0439
  },
  {
    "id": "city-251979",
    "name": "Chik Ballapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.9973,
    "lng": 72.9939
  },
  {
    "id": "city-251983",
    "name": "Chintamani",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.273299999999999,
    "lng": 75.2619
  },
  {
    "id": "city-251978",
    "name": "Gauribidanur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.703299999999999,
    "lng": 73.47189999999999
  },
  {
    "id": "city-251980",
    "name": "Gudibanda",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.1673,
    "lng": 75.8959
  },
  {
    "id": "city-305605",
    "name": "Kaiwara ",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.837299999999999,
    "lng": 75.5219
  },
  {
    "id": "city-251982",
    "name": "Sidlaghatta",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.8773,
    "lng": 73.90589999999999
  },
  {
    "id": "city-296977",
    "name": "Ajjampura",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2153,
    "lng": 76.64789999999999
  },
  {
    "id": "city-251963",
    "name": "Birur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.789299999999999,
    "lng": 76.5859
  },
  {
    "id": "city-251965",
    "name": "Chikkamagaluru",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6433,
    "lng": 73.9799
  },
  {
    "id": "city-251964",
    "name": "Kadur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.603299999999999,
    "lng": 74.22789999999999
  },
  {
    "id": "city-251960",
    "name": "Koppa",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4713,
    "lng": 73.13589999999999
  },
  {
    "id": "city-251967",
    "name": "Kudremukh",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.3773,
    "lng": 75.30189999999999
  },
  {
    "id": "city-301082",
    "name": "Mudigere",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.057299999999998,
    "lng": 75.11789999999999
  },
  {
    "id": "city-251961",
    "name": "Narasimharajapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.3733,
    "lng": 73.2419
  },
  {
    "id": "city-251959",
    "name": "Sringeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5353,
    "lng": 73.3039
  },
  {
    "id": "city-251962",
    "name": "Tarikere",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.6553,
    "lng": 75.2079
  },
  {
    "id": "city-251933",
    "name": "Challakere",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.3133,
    "lng": 75.5259
  },
  {
    "id": "city-251934",
    "name": "Chitradurga",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.757299999999999,
    "lng": 74.67389999999999
  },
  {
    "id": "city-251937",
    "name": "Hiriyur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5613,
    "lng": 74.6219
  },
  {
    "id": "city-251935",
    "name": "Holalkere",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.1113,
    "lng": 74.3039
  },
  {
    "id": "city-251936",
    "name": "Hosdurga",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.075299999999999,
    "lng": 76.63589999999999
  },
  {
    "id": "city-251932",
    "name": "Molakalmuru",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5133,
    "lng": 75.9259
  },
  {
    "id": "city-276542",
    "name": "Nayakanahatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.741299999999999,
    "lng": 73.36189999999999
  },
  {
    "id": "city-299320",
    "name": "Bajape",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5953,
    "lng": 75.28389999999999
  },
  {
    "id": "city-252033",
    "name": "Bantval",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.3733,
    "lng": 72.76989999999999
  },
  {
    "id": "city-252034",
    "name": "Beltangadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.571299999999999,
    "lng": 76.0119
  },
  {
    "id": "city-296954",
    "name": "Kadaba",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.353299999999999,
    "lng": 74.9499
  },
  {
    "id": "city-299321",
    "name": "Kinnigoli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1413,
    "lng": 76.3779
  },
  {
    "id": "city-276555",
    "name": "Kotekar",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.0673,
    "lng": 75.4679
  },
  {
    "id": "city-252021",
    "name": "Mangaluru",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2773,
    "lng": 75.6099
  },
  {
    "id": "city-252018",
    "name": "Mudbidri",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0133,
    "lng": 75.7539
  },
  {
    "id": "city-252017",
    "name": "Mulki",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0653,
    "lng": 74.5499
  },
  {
    "id": "city-252035",
    "name": "Puttur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.7453,
    "lng": 75.5099
  },
  {
    "id": "city-252029",
    "name": "Someshwar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.571299999999999,
    "lng": 74.9079
  },
  {
    "id": "city-252036",
    "name": "Sulya",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1693,
    "lng": 72.7739
  },
  {
    "id": "city-252027",
    "name": "Ullal",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.549299999999999,
    "lng": 74.5539
  },
  {
    "id": "city-276554",
    "name": "Vitla",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8813,
    "lng": 72.8459
  },
  {
    "id": "city-251943",
    "name": "Channagiri",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0093,
    "lng": 75.40589999999999
  },
  {
    "id": "city-251941",
    "name": "Davanagere",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.821299999999999,
    "lng": 75.31389999999999
  },
  {
    "id": "city-251938",
    "name": "Harihar",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.2313,
    "lng": 75.57589999999999
  },
  {
    "id": "city-251942",
    "name": "Honnali",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.4113,
    "lng": 74.37989999999999
  },
  {
    "id": "city-251940",
    "name": "Jagalur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7653,
    "lng": 73.4339
  },
  {
    "id": "city-276556",
    "name": "Malebennuru",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.357299999999999,
    "lng": 74.1539
  },
  {
    "id": "city-299183",
    "name": "Nyamathi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.571299999999999,
    "lng": 75.9079
  },
  {
    "id": "city-251894",
    "name": "Alnavar",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2873,
    "lng": 75.06389999999999
  },
  {
    "id": "city-251896",
    "name": "Annigeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0633,
    "lng": 74.44789999999999
  },
  {
    "id": "city-251893",
    "name": "Hubballi-Dharwad",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.4713,
    "lng": 75.5039
  },
  {
    "id": "city-251897",
    "name": "Kalghatgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0773,
    "lng": 73.4739
  },
  {
    "id": "city-251898",
    "name": "Kundgol",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2133,
    "lng": 76.4019
  },
  {
    "id": "city-251895",
    "name": "Navalgund",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5213,
    "lng": 75.9739
  },
  {
    "id": "city-251888",
    "name": "Gadag-Betigeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8093,
    "lng": 75.0619
  },
  {
    "id": "city-251886",
    "name": "Gajendragarh",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0813,
    "lng": 74.3099
  },
  {
    "id": "city-251891",
    "name": "Lakshmeshwar",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7493,
    "lng": 73.3059
  },
  {
    "id": "city-251889",
    "name": "Mulgund",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.837299999999999,
    "lng": 75.4019
  },
  {
    "id": "city-251892",
    "name": "Mundargi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.687299999999999,
    "lng": 75.4639
  },
  {
    "id": "city-251887",
    "name": "Naregal",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.549299999999999,
    "lng": 76.28989999999999
  },
  {
    "id": "city-251884",
    "name": "Nargund",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.411299999999999,
    "lng": 75.0119
  },
  {
    "id": "city-251885",
    "name": "Ron",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.023299999999999,
    "lng": 74.8399
  },
  {
    "id": "city-251890",
    "name": "Shirahatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0233,
    "lng": 75.1039
  },
  {
    "id": "city-252013",
    "name": "Alur",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2053,
    "lng": 75.4819
  },
  {
    "id": "city-252014",
    "name": "Arkalgud",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.607299999999999,
    "lng": 73.8639
  },
  {
    "id": "city-252010",
    "name": "Arsikere",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.7493,
    "lng": 76.67389999999999
  },
  {
    "id": "city-306031",
    "name": "Banavar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.3273,
    "lng": 73.34389999999999
  },
  {
    "id": "city-252009",
    "name": "Belur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.9293,
    "lng": 74.9259
  },
  {
    "id": "city-252016",
    "name": "Channarayapatna",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0413,
    "lng": 75.68589999999999
  },
  {
    "id": "city-252012",
    "name": "Hassan",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.7373,
    "lng": 73.8539
  },
  {
    "id": "city-252015",
    "name": "Hole Narsipur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.3333,
    "lng": 76.5539
  },
  {
    "id": "city-252008",
    "name": "Sakleshpur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.033299999999999,
    "lng": 75.7019
  },
  {
    "id": "city-251913",
    "name": "Bankapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.9993,
    "lng": 73.91189999999999
  },
  {
    "id": "city-251917",
    "name": "Byadgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.581299999999999,
    "lng": 74.84989999999999
  },
  {
    "id": "city-276521",
    "name": "Guttal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.3673,
    "lng": 75.62389999999999
  },
  {
    "id": "city-251915",
    "name": "Hangal",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7593,
    "lng": 73.5359
  },
  {
    "id": "city-251916",
    "name": "Haveri",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.619299999999999,
    "lng": 73.1959
  },
  {
    "id": "city-251918",
    "name": "Hirekerur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.7273,
    "lng": 74.9519
  },
  {
    "id": "city-251919",
    "name": "Ranibennur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1213,
    "lng": 73.5899
  },
  {
    "id": "city-296955",
    "name": "Rattihalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.4173,
    "lng": 73.50189999999999
  },
  {
    "id": "city-251914",
    "name": "Savanur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.3133,
    "lng": 72.78989999999999
  },
  {
    "id": "city-251912",
    "name": "Shiggaon",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9413,
    "lng": 73.0739
  },
  {
    "id": "city-251849",
    "name": "Afzalpur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.895299999999999,
    "lng": 74.5439
  },
  {
    "id": "city-251848",
    "name": "Aland",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.357299999999999,
    "lng": 76.1939
  },
  {
    "id": "city-276568",
    "name": "Chincholi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.8073,
    "lng": 75.85589999999999
  },
  {
    "id": "city-251853",
    "name": "Chittapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6793,
    "lng": 73.4639
  },
  {
    "id": "city-251858",
    "name": "Jevargi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2493,
    "lng": 72.8459
  },
  {
    "id": "city-248127",
    "name": "Kalaburagi City Corporation",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0853,
    "lng": 72.8819
  },
  {
    "id": "city-296978",
    "name": "Kalagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.3353,
    "lng": 75.39189999999999
  },
  {
    "id": "city-301080",
    "name": "Kamalapura Kalburgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.9573,
    "lng": 75.67389999999999
  },
  {
    "id": "city-251852",
    "name": "Sedam",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.017299999999999,
    "lng": 74.0619
  },
  {
    "id": "city-251855",
    "name": "Shahabad",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1093,
    "lng": 75.46589999999999
  },
  {
    "id": "city-251854",
    "name": "Shahabad Acc",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.7433,
    "lng": 73.9759
  },
  {
    "id": "city-251856",
    "name": "Wadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.7953,
    "lng": 75.7719
  },
  {
    "id": "city-297132",
    "name": "Yadrami",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.5313,
    "lng": 73.4039
  },
  {
    "id": "city-252039",
    "name": "Kushalnagar",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.523299999999999,
    "lng": 74.7079
  },
  {
    "id": "city-252037",
    "name": "Madikeri",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5213,
    "lng": 74.8699
  },
  {
    "id": "city-301819",
    "name": "Ponnampete",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.1673,
    "lng": 73.2239
  },
  {
    "id": "city-252038",
    "name": "Somvarpet",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.5673,
    "lng": 73.4159
  },
  {
    "id": "city-252040",
    "name": "Virajpet",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1553,
    "lng": 72.8279
  },
  {
    "id": "city-299416",
    "name": "Bangarpete",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.9873,
    "lng": 76.45989999999999
  },
  {
    "id": "city-251985",
    "name": "Kolar",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8873,
    "lng": 73.0319
  },
  {
    "id": "city-251986",
    "name": "Malur",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.0633,
    "lng": 73.4879
  },
  {
    "id": "city-251989",
    "name": "Mulbagal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.491299999999999,
    "lng": 75.3879
  },
  {
    "id": "city-251988",
    "name": "Robertson Pet",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.427299999999999,
    "lng": 73.09989999999999
  },
  {
    "id": "city-251984",
    "name": "Srinivaspur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5133,
    "lng": 75.0299
  },
  {
    "id": "city-301054",
    "name": "Vemgal-Kurugol",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.4173,
    "lng": 74.01389999999999
  },
  {
    "id": "city-276604",
    "name": "Bhagyanagara",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5733,
    "lng": 76.5859
  },
  {
    "id": "city-251881",
    "name": "Gangawati",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.119299999999999,
    "lng": 73.9999
  },
  {
    "id": "city-305606",
    "name": "Hanumasagara",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.9313,
    "lng": 72.8839
  },
  {
    "id": "city-276599",
    "name": "Kanakgiri",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1473,
    "lng": 76.1319
  },
  {
    "id": "city-276496",
    "name": "Karatagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.533299999999999,
    "lng": 74.9139
  },
  {
    "id": "city-251882",
    "name": "Koppal",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7153,
    "lng": 76.1719
  },
  {
    "id": "city-276497",
    "name": "Kukanooru",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0633,
    "lng": 74.4079
  },
  {
    "id": "city-251880",
    "name": "Kushtagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.001299999999999,
    "lng": 75.0539
  },
  {
    "id": "city-276601",
    "name": "Tavaragera",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.453299999999999,
    "lng": 76.5779
  },
  {
    "id": "city-251879",
    "name": "Yelburga",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.6873,
    "lng": 73.1599
  },
  {
    "id": "city-276602",
    "name": "Belluru",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.991299999999999,
    "lng": 74.9279
  },
  {
    "id": "city-252001",
    "name": "Krishnarajpet",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.289299999999999,
    "lng": 74.6379
  },
  {
    "id": "city-252006",
    "name": "Maddur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9353,
    "lng": 73.3999
  },
  {
    "id": "city-252007",
    "name": "Malavalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.5273,
    "lng": 75.64789999999999
  },
  {
    "id": "city-252005",
    "name": "Mandya",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9693,
    "lng": 74.45389999999999
  },
  {
    "id": "city-252002",
    "name": "Nagamangala",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2533,
    "lng": 75.6019
  },
  {
    "id": "city-252003",
    "name": "Pandavapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8073,
    "lng": 74.9999
  },
  {
    "id": "city-252004",
    "name": "Shrirangapattana",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.177299999999999,
    "lng": 75.53389999999999
  },
  {
    "id": "city-252051",
    "name": "Bannur",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2453,
    "lng": 76.4339
  },
  {
    "id": "city-299334",
    "name": "Bogadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.7013,
    "lng": 75.56989999999999
  },
  {
    "id": "city-252049",
    "name": "Heggadadevankote",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5853,
    "lng": 75.3419
  },
  {
    "id": "city-299335",
    "name": "Hootagalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.889299999999999,
    "lng": 73.60589999999999
  },
  {
    "id": "city-252043",
    "name": "Hunsur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.915299999999998,
    "lng": 73.3719
  },
  {
    "id": "city-299323",
    "name": "Kadakola",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2693,
    "lng": 75.5059
  },
  {
    "id": "city-301081",
    "name": "Kr Nagar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.469299999999999,
    "lng": 73.52189999999999
  },
  {
    "id": "city-252045",
    "name": "Mysuru",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.1673,
    "lng": 73.5919
  },
  {
    "id": "city-252050",
    "name": "Nanjangud",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.665299999999998,
    "lng": 72.7419
  },
  {
    "id": "city-252042",
    "name": "Piriyapatna",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4893,
    "lng": 73.6939
  },
  {
    "id": "city-299322",
    "name": "Rammanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.363299999999999,
    "lng": 75.5239
  },
  {
    "id": "city-253132",
    "name": "Saragur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6913,
    "lng": 74.50789999999999
  },
  {
    "id": "city-299325",
    "name": "Srirampura",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.853299999999999,
    "lng": 73.38589999999999
  },
  {
    "id": "city-305558",
    "name": "Talakadu",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.9833,
    "lng": 72.9679
  },
  {
    "id": "city-252052",
    "name": "Tirumakudal - Narsipur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4333,
    "lng": 73.6699
  },
  {
    "id": "city-276523",
    "name": "Balaganur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.543299999999999,
    "lng": 74.65589999999999
  },
  {
    "id": "city-251874",
    "name": "Devadurga",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.1073,
    "lng": 74.7479
  },
  {
    "id": "city-251873",
    "name": "Hatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1493,
    "lng": 74.1539
  },
  {
    "id": "city-251872",
    "name": "Hatti Gold Mines",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4133,
    "lng": 73.64189999999999
  },
  {
    "id": "city-276522",
    "name": "Kavital",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5373,
    "lng": 74.81389999999999
  },
  {
    "id": "city-251871",
    "name": "Lingasugur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7313,
    "lng": 72.97189999999999
  },
  {
    "id": "city-251877",
    "name": "Manvi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.9513,
    "lng": 74.0159
  },
  {
    "id": "city-276519",
    "name": "Maski",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.879299999999999,
    "lng": 72.78389999999999
  },
  {
    "id": "city-251870",
    "name": "Mudgal",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.289299999999999,
    "lng": 73.37389999999999
  },
  {
    "id": "city-251876",
    "name": "Raichur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.0373,
    "lng": 75.3779
  },
  {
    "id": "city-251878",
    "name": "Sindhnur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.635299999999999,
    "lng": 76.4439
  },
  {
    "id": "city-276605",
    "name": "Siravara",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.6593,
    "lng": 73.5959
  },
  {
    "id": "city-276524",
    "name": "Turvihal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.635299999999999,
    "lng": 76.2199
  },
  {
    "id": "city-299181",
    "name": "Anavatti",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.145299999999999,
    "lng": 75.7659
  },
  {
    "id": "city-251952",
    "name": "Bhadravati",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2693,
    "lng": 72.87389999999999
  },
  {
    "id": "city-299180",
    "name": "Holehonnuru",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.2233,
    "lng": 75.7359
  },
  {
    "id": "city-251949",
    "name": "Hosanagara",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.847299999999999,
    "lng": 75.0959
  },
  {
    "id": "city-263293",
    "name": "Jog-Kargal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1753,
    "lng": 75.4319
  },
  {
    "id": "city-251945",
    "name": "Sagar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4653,
    "lng": 72.9499
  },
  {
    "id": "city-251948",
    "name": "Shikarpur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.8713,
    "lng": 73.4559
  },
  {
    "id": "city-251951",
    "name": "Shivamogga",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4293,
    "lng": 76.6499
  },
  {
    "id": "city-251947",
    "name": "Siralkoppa",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.6173,
    "lng": 73.06989999999999
  },
  {
    "id": "city-251946",
    "name": "Sorab",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.7233,
    "lng": 73.94789999999999
  },
  {
    "id": "city-251950",
    "name": "Tirthahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.6053,
    "lng": 73.9619
  },
  {
    "id": "city-251968",
    "name": "Chiknayakanhalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4653,
    "lng": 75.2539
  },
  {
    "id": "city-251974",
    "name": "Gubbi",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0353,
    "lng": 76.2119
  },
  {
    "id": "city-297133",
    "name": "Huliyaru",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1273,
    "lng": 75.6959
  },
  {
    "id": "city-251972",
    "name": "Koratagere",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.6553,
    "lng": 74.0239
  },
  {
    "id": "city-251977",
    "name": "Kunigal",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2553,
    "lng": 76.70389999999999
  },
  {
    "id": "city-251971",
    "name": "Madhugiri",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.985299999999999,
    "lng": 73.1499
  },
  {
    "id": "city-251970",
    "name": "Pavagada",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.139299999999999,
    "lng": 74.5159
  },
  {
    "id": "city-251969",
    "name": "Sira",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.6953,
    "lng": 76.6719
  },
  {
    "id": "city-251975",
    "name": "Tiptur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1213,
    "lng": 76.5739
  },
  {
    "id": "city-251973",
    "name": "Tumakuru",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4653,
    "lng": 75.5419
  },
  {
    "id": "city-251976",
    "name": "Turuvekere",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.757299999999999,
    "lng": 76.6339
  },
  {
    "id": "city-297129",
    "name": "Bainduru",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.9413,
    "lng": 76.5859
  },
  {
    "id": "city-301055",
    "name": "Kapu",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5793,
    "lng": 75.07589999999999
  },
  {
    "id": "city-251958",
    "name": "Karkal",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6813,
    "lng": 76.11789999999999
  },
  {
    "id": "city-251953",
    "name": "Kundapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5833,
    "lng": 75.2799
  },
  {
    "id": "city-251954",
    "name": "Saligram",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.385299999999999,
    "lng": 74.7739
  },
  {
    "id": "city-251955",
    "name": "Udupi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1153,
    "lng": 73.09989999999999
  },
  {
    "id": "city-251906",
    "name": "Ankola",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0733,
    "lng": 75.1019
  },
  {
    "id": "city-251911",
    "name": "Bhatkal",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.799299999999999,
    "lng": 74.3839
  },
  {
    "id": "city-251899",
    "name": "Dandeli",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.1953,
    "lng": 75.4999
  },
  {
    "id": "city-251901",
    "name": "Haliyal",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6413,
    "lng": 76.2859
  },
  {
    "id": "city-251909",
    "name": "Honavar",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.543299999999999,
    "lng": 73.47189999999999
  },
  {
    "id": "city-251900",
    "name": "Karwar",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.757299999999999,
    "lng": 75.4739
  },
  {
    "id": "city-251907",
    "name": "Kumta",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4453,
    "lng": 74.3299
  },
  {
    "id": "city-299328",
    "name": "Manki",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2693,
    "lng": 72.87389999999999
  },
  {
    "id": "city-251904",
    "name": "Mundgod",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.3293,
    "lng": 76.6539
  },
  {
    "id": "city-251908",
    "name": "Siddapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.385299999999999,
    "lng": 75.8779
  },
  {
    "id": "city-251905",
    "name": "Sirsi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.3613,
    "lng": 72.7259
  },
  {
    "id": "city-251903",
    "name": "Yellapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.5253,
    "lng": 74.1379
  },
  {
    "id": "city-276535",
    "name": "Hagaribommanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.8913,
    "lng": 72.86789999999999
  },
  {
    "id": "city-251939",
    "name": "Harapanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.757299999999999,
    "lng": 75.7139
  },
  {
    "id": "city-251921",
    "name": "Hoovina Hadagalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.0593,
    "lng": 76.3639
  },
  {
    "id": "city-251922",
    "name": "Hosapete",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.8673,
    "lng": 75.1879
  },
  {
    "id": "city-276611",
    "name": "Kamalapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.4673,
    "lng": 73.7479
  },
  {
    "id": "city-251931",
    "name": "Kotturu",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.0773,
    "lng": 75.77789999999999
  },
  {
    "id": "city-251930",
    "name": "Kudligi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.7913,
    "lng": 75.31989999999999
  },
  {
    "id": "city-276474",
    "name": "Mariyammanahalli",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2033,
    "lng": 76.6839
  },
  {
    "id": "city-276540",
    "name": "Alamela",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.6993,
    "lng": 74.8359
  },
  {
    "id": "city-299327",
    "name": "Babaleshwar",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.629299999999999,
    "lng": 72.84989999999999
  },
  {
    "id": "city-251845",
    "name": "Basavana Bagevadi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.193299999999999,
    "lng": 73.0299
  },
  {
    "id": "city-276559",
    "name": "Chadachana",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.6733,
    "lng": 73.3579
  },
  {
    "id": "city-276558",
    "name": "Devarahipparagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.5853,
    "lng": 74.9739
  },
  {
    "id": "city-251843",
    "name": "Indi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.6333,
    "lng": 75.7499
  },
  {
    "id": "city-276543",
    "name": "Kolhara",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.2773,
    "lng": 75.97789999999999
  },
  {
    "id": "city-276541",
    "name": "Managuli",
    "state": "Karnataka",
    "type": "City",
    "lat": 16.2573,
    "lng": 76.50189999999999
  },
  {
    "id": "city-251846",
    "name": "Muddebihal",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.9233,
    "lng": 74.7799
  },
  {
    "id": "city-276544",
    "name": "Nalatavada",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.959299999999999,
    "lng": 75.1199
  },
  {
    "id": "city-276557",
    "name": "Nidagundi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.831299999999999,
    "lng": 73.51989999999999
  },
  {
    "id": "city-251844",
    "name": "Sindgi",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.017299999999999,
    "lng": 74.34989999999999
  },
  {
    "id": "city-251847",
    "name": "Talikota",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.1793,
    "lng": 75.0439
  },
  {
    "id": "city-297131",
    "name": "Tikota",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.505299999999998,
    "lng": 76.47789999999999
  },
  {
    "id": "city-251993",
    "name": "Vijayapura",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.825299999999999,
    "lng": 72.8459
  },
  {
    "id": "city-251860",
    "name": "Bhimarayanagudi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.3973,
    "lng": 75.10589999999999
  },
  {
    "id": "city-305604",
    "name": "Dhoranahalli ",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.7273,
    "lng": 76.5599
  },
  {
    "id": "city-251862",
    "name": "Gurmatkal",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.7533,
    "lng": 74.24589999999999
  },
  {
    "id": "city-296976",
    "name": "Hunasagi",
    "state": "Karnataka",
    "type": "City",
    "lat": 15.1973,
    "lng": 73.2739
  },
  {
    "id": "city-276560",
    "name": "Kakkera",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.4413,
    "lng": 75.83789999999999
  },
  {
    "id": "city-276516",
    "name": "Kembhavi",
    "state": "Karnataka",
    "type": "City",
    "lat": 14.8673,
    "lng": 72.81989999999999
  },
  {
    "id": "city-251861",
    "name": "Shahpur",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.4633,
    "lng": 73.8479
  },
  {
    "id": "city-251859",
    "name": "Surapur",
    "state": "Karnataka",
    "type": "City",
    "lat": 13.0293,
    "lng": 73.61789999999999
  },
  {
    "id": "city-251863",
    "name": "Yadgir",
    "state": "Karnataka",
    "type": "City",
    "lat": 12.581299999999999,
    "lng": 76.2419
  },
  {
    "id": "city-252247",
    "name": "Alappuzha",
    "state": "Kerala",
    "type": "City",
    "lat": 10.9785,
    "lng": 75.1511
  },
  {
    "id": "city-252249",
    "name": "Chengannur",
    "state": "Kerala",
    "type": "City",
    "lat": 9.8125,
    "lng": 76.0291
  },
  {
    "id": "city-252242",
    "name": "Cherthala",
    "state": "Kerala",
    "type": "City",
    "lat": 8.8905,
    "lng": 73.67110000000001
  },
  {
    "id": "city-272880",
    "name": "Harippad",
    "state": "Kerala",
    "type": "City",
    "lat": 11.1045,
    "lng": 75.79310000000001
  },
  {
    "id": "city-252248",
    "name": "Kayamkulam",
    "state": "Kerala",
    "type": "City",
    "lat": 9.384500000000001,
    "lng": 73.5771
  },
  {
    "id": "city-252250",
    "name": "Mavelikkara",
    "state": "Kerala",
    "type": "City",
    "lat": 9.2905,
    "lng": 75.4791
  },
  {
    "id": "city-252211",
    "name": "Aluva",
    "state": "Kerala",
    "type": "City",
    "lat": 10.820500000000001,
    "lng": 75.5811
  },
  {
    "id": "city-252208",
    "name": "Angamaly",
    "state": "Kerala",
    "type": "City",
    "lat": 9.6105,
    "lng": 75.62310000000001
  },
  {
    "id": "city-252218",
    "name": "Eloor",
    "state": "Kerala",
    "type": "City",
    "lat": 11.0565,
    "lng": 76.89710000000001
  },
  {
    "id": "city-252224",
    "name": "Kalamassery",
    "state": "Kerala",
    "type": "City",
    "lat": 11.2045,
    "lng": 74.1571
  },
  {
    "id": "city-252220",
    "name": "Kochi",
    "state": "Kerala",
    "type": "City",
    "lat": 10.5385,
    "lng": 74.2471
  },
  {
    "id": "city-272881",
    "name": "Koothattukulam",
    "state": "Kerala",
    "type": "City",
    "lat": 8.1765,
    "lng": 76.12910000000001
  },
  {
    "id": "city-252231",
    "name": "Kothamangalam",
    "state": "Kerala",
    "type": "City",
    "lat": 11.5725,
    "lng": 76.52510000000001
  },
  {
    "id": "city-252226",
    "name": "Maradu",
    "state": "Kerala",
    "type": "City",
    "lat": 8.8025,
    "lng": 73.31110000000001
  },
  {
    "id": "city-252230",
    "name": "Muvattupuzha",
    "state": "Kerala",
    "type": "City",
    "lat": 7.9705,
    "lng": 75.2311
  },
  {
    "id": "city-252215",
    "name": "Paravur",
    "state": "Kerala",
    "type": "City",
    "lat": 10.560500000000001,
    "lng": 75.9691
  },
  {
    "id": "city-252207",
    "name": "Perumbavoor",
    "state": "Kerala",
    "type": "City",
    "lat": 8.3625,
    "lng": 74.4871
  },
  {
    "id": "city-272882",
    "name": "Piravom",
    "state": "Kerala",
    "type": "City",
    "lat": 10.5945,
    "lng": 73.8391
  },
  {
    "id": "city-259708",
    "name": "Thrikkakara",
    "state": "Kerala",
    "type": "City",
    "lat": 8.400500000000001,
    "lng": 74.25710000000001
  },
  {
    "id": "city-252227",
    "name": "Thrippunithura",
    "state": "Kerala",
    "type": "City",
    "lat": 11.6485,
    "lng": 73.6971
  },
  {
    "id": "city-272883",
    "name": "Kattappana",
    "state": "Kerala",
    "type": "City",
    "lat": 10.6365,
    "lng": 75.5891
  },
  {
    "id": "city-252233",
    "name": "Thodupuzha",
    "state": "Kerala",
    "type": "City",
    "lat": 8.2865,
    "lng": 74.8031
  },
  {
    "id": "city-272915",
    "name": "Anthur",
    "state": "Kerala",
    "type": "City",
    "lat": 10.9825,
    "lng": 76.3151
  },
  {
    "id": "city-272890",
    "name": "Iritty",
    "state": "Kerala",
    "type": "City",
    "lat": 8.5885,
    "lng": 75.26910000000001
  },
  {
    "id": "city-252125",
    "name": "Kannur",
    "state": "Kerala",
    "type": "City",
    "lat": 7.9045000000000005,
    "lng": 76.0651
  },
  {
    "id": "city-252144",
    "name": "Koothuparamba",
    "state": "Kerala",
    "type": "City",
    "lat": 8.8865,
    "lng": 73.6271
  },
  {
    "id": "city-252139",
    "name": "Mattannur",
    "state": "Kerala",
    "type": "City",
    "lat": 9.6145,
    "lng": 75.5231
  },
  {
    "id": "city-272885",
    "name": "Panoor",
    "state": "Kerala",
    "type": "City",
    "lat": 8.964500000000001,
    "lng": 76.3331
  },
  {
    "id": "city-252111",
    "name": "Payyannur",
    "state": "Kerala",
    "type": "City",
    "lat": 9.156500000000001,
    "lng": 76.8771
  },
  {
    "id": "city-272884",
    "name": "Sreekandapuram",
    "state": "Kerala",
    "type": "City",
    "lat": 11.5685,
    "lng": 73.8891
  },
  {
    "id": "city-252112",
    "name": "Taliparamba",
    "state": "Kerala",
    "type": "City",
    "lat": 11.0065,
    "lng": 76.2431
  },
  {
    "id": "city-252149",
    "name": "Thalassery",
    "state": "Kerala",
    "type": "City",
    "lat": 8.3985,
    "lng": 75.2351
  },
  {
    "id": "city-252110",
    "name": "Kanhangad",
    "state": "Kerala",
    "type": "City",
    "lat": 11.5405,
    "lng": 75.16510000000001
  },
  {
    "id": "city-252108",
    "name": "Kasaragod",
    "state": "Kerala",
    "type": "City",
    "lat": 11.6605,
    "lng": 75.47710000000001
  },
  {
    "id": "city-259711",
    "name": "Nileshwar",
    "state": "Kerala",
    "type": "City",
    "lat": 9.352500000000001,
    "lng": 73.6251
  },
  {
    "id": "city-259707",
    "name": "Karunagappally",
    "state": "Kerala",
    "type": "City",
    "lat": 9.4145,
    "lng": 76.1391
  },
  {
    "id": "city-252255",
    "name": "Kollam",
    "state": "Kerala",
    "type": "City",
    "lat": 8.2345,
    "lng": 76.2951
  },
  {
    "id": "city-272889",
    "name": "Kottarakkara",
    "state": "Kerala",
    "type": "City",
    "lat": 10.1625,
    "lng": 73.85510000000001
  },
  {
    "id": "city-252256",
    "name": "Paravoor",
    "state": "Kerala",
    "type": "City",
    "lat": 10.8185,
    "lng": 74.1911
  },
  {
    "id": "city-252254",
    "name": "Punalur",
    "state": "Kerala",
    "type": "City",
    "lat": 11.2125,
    "lng": 75.8131
  },
  {
    "id": "city-252239",
    "name": "Changanassery",
    "state": "Kerala",
    "type": "City",
    "lat": 10.2125,
    "lng": 74.2211
  },
  {
    "id": "city-272892",
    "name": "Erattupetta",
    "state": "Kerala",
    "type": "City",
    "lat": 8.9925,
    "lng": 76.0971
  },
  {
    "id": "city-272891",
    "name": "Ettumanoor",
    "state": "Kerala",
    "type": "City",
    "lat": 10.4425,
    "lng": 75.2711
  },
  {
    "id": "city-252238",
    "name": "Kottayam",
    "state": "Kerala",
    "type": "City",
    "lat": 11.4665,
    "lng": 76.64710000000001
  },
  {
    "id": "city-252234",
    "name": "Palai",
    "state": "Kerala",
    "type": "City",
    "lat": 10.464500000000001,
    "lng": 73.9531
  },
  {
    "id": "city-252236",
    "name": "Vaikom",
    "state": "Kerala",
    "type": "City",
    "lat": 9.1685,
    "lng": 76.0651
  },
  {
    "id": "city-272900",
    "name": "Feroke",
    "state": "Kerala",
    "type": "City",
    "lat": 10.7585,
    "lng": 76.7791
  },
  {
    "id": "city-272897",
    "name": "Koduvally",
    "state": "Kerala",
    "type": "City",
    "lat": 8.5085,
    "lng": 77.0931
  },
  {
    "id": "city-252159",
    "name": "Koyilandy",
    "state": "Kerala",
    "type": "City",
    "lat": 10.0465,
    "lng": 76.0351
  },
  {
    "id": "city-252160",
    "name": "Kozhikode",
    "state": "Kerala",
    "type": "City",
    "lat": 11.682500000000001,
    "lng": 74.6071
  },
  {
    "id": "city-272898",
    "name": "Mukkom",
    "state": "Kerala",
    "type": "City",
    "lat": 8.4545,
    "lng": 74.5231
  },
  {
    "id": "city-272896",
    "name": "Payyoli",
    "state": "Kerala",
    "type": "City",
    "lat": 11.7925,
    "lng": 76.1611
  },
  {
    "id": "city-272899",
    "name": "Ramanattukara",
    "state": "Kerala",
    "type": "City",
    "lat": 11.714500000000001,
    "lng": 75.51910000000001
  },
  {
    "id": "city-252157",
    "name": "Vatakara",
    "state": "Kerala",
    "type": "City",
    "lat": 9.5085,
    "lng": 73.6451
  },
  {
    "id": "city-272901",
    "name": "Kondotty",
    "state": "Kerala",
    "type": "City",
    "lat": 10.7225,
    "lng": 74.1751
  },
  {
    "id": "city-259709",
    "name": "Kottakkal",
    "state": "Kerala",
    "type": "City",
    "lat": 11.5305,
    "lng": 74.85510000000001
  },
  {
    "id": "city-252170",
    "name": "Malappuram",
    "state": "Kerala",
    "type": "City",
    "lat": 9.8545,
    "lng": 76.3071
  },
  {
    "id": "city-252169",
    "name": "Manjeri",
    "state": "Kerala",
    "type": "City",
    "lat": 9.666500000000001,
    "lng": 75.5031
  },
  {
    "id": "city-259710",
    "name": "Nilambur",
    "state": "Kerala",
    "type": "City",
    "lat": 11.118500000000001,
    "lng": 75.04310000000001
  },
  {
    "id": "city-272912",
    "name": "Parappanangadi",
    "state": "Kerala",
    "type": "City",
    "lat": 9.916500000000001,
    "lng": 76.2291
  },
  {
    "id": "city-252171",
    "name": "Perinthalmanna",
    "state": "Kerala",
    "type": "City",
    "lat": 10.7545,
    "lng": 73.6151
  },
  {
    "id": "city-252173",
    "name": "Ponnani",
    "state": "Kerala",
    "type": "City",
    "lat": 10.3725,
    "lng": 76.3651
  },
  {
    "id": "city-272904",
    "name": "Tanur",
    "state": "Kerala",
    "type": "City",
    "lat": 11.7345,
    "lng": 73.32310000000001
  },
  {
    "id": "city-252172",
    "name": "Tirur",
    "state": "Kerala",
    "type": "City",
    "lat": 10.0785,
    "lng": 73.9871
  },
  {
    "id": "city-272903",
    "name": "Tirurangadi",
    "state": "Kerala",
    "type": "City",
    "lat": 8.7585,
    "lng": 75.8031
  },
  {
    "id": "city-272902",
    "name": "Valanchery",
    "state": "Kerala",
    "type": "City",
    "lat": 8.1405,
    "lng": 74.8691
  },
  {
    "id": "city-272906",
    "name": "Cherpulassery",
    "state": "Kerala",
    "type": "City",
    "lat": 10.4585,
    "lng": 74.6631
  },
  {
    "id": "city-252178",
    "name": "Chittur-Thathamangalam",
    "state": "Kerala",
    "type": "City",
    "lat": 8.4745,
    "lng": 75.1431
  },
  {
    "id": "city-272907",
    "name": "Mannarkad",
    "state": "Kerala",
    "type": "City",
    "lat": 10.1085,
    "lng": 75.2211
  },
  {
    "id": "city-252175",
    "name": "Ottappalam",
    "state": "Kerala",
    "type": "City",
    "lat": 11.3885,
    "lng": 76.9011
  },
  {
    "id": "city-252176",
    "name": "Palakkad",
    "state": "Kerala",
    "type": "City",
    "lat": 11.0205,
    "lng": 75.0451
  },
  {
    "id": "city-272905",
    "name": "Pattambi",
    "state": "Kerala",
    "type": "City",
    "lat": 11.3305,
    "lng": 76.0631
  },
  {
    "id": "city-252174",
    "name": "Shoranur",
    "state": "Kerala",
    "type": "City",
    "lat": 8.6225,
    "lng": 74.6271
  },
  {
    "id": "city-252253",
    "name": "Adoor",
    "state": "Kerala",
    "type": "City",
    "lat": 10.2325,
    "lng": 75.3531
  },
  {
    "id": "city-272908",
    "name": "Pandalam",
    "state": "Kerala",
    "type": "City",
    "lat": 10.8705,
    "lng": 76.3951
  },
  {
    "id": "city-252252",
    "name": "Pathanamthitta",
    "state": "Kerala",
    "type": "City",
    "lat": 8.1425,
    "lng": 76.9311
  },
  {
    "id": "city-252251",
    "name": "Thiruvalla",
    "state": "Kerala",
    "type": "City",
    "lat": 11.2865,
    "lng": 75.5151
  },
  {
    "id": "city-252258",
    "name": "Attingal",
    "state": "Kerala",
    "type": "City",
    "lat": 9.8585,
    "lng": 75.39110000000001
  },
  {
    "id": "city-252259",
    "name": "Nedumangad",
    "state": "Kerala",
    "type": "City",
    "lat": 10.842500000000001,
    "lng": 76.56710000000001
  },
  {
    "id": "city-252261",
    "name": "Neyyattinkara",
    "state": "Kerala",
    "type": "City",
    "lat": 10.6745,
    "lng": 76.1751
  },
  {
    "id": "city-252260",
    "name": "Thiruvananthapuram",
    "state": "Kerala",
    "type": "City",
    "lat": 10.9305,
    "lng": 76.4791
  },
  {
    "id": "city-252257",
    "name": "Varkala",
    "state": "Kerala",
    "type": "City",
    "lat": 11.0065,
    "lng": 75.0591
  },
  {
    "id": "city-252205",
    "name": "Chalakudy",
    "state": "Kerala",
    "type": "City",
    "lat": 9.1625,
    "lng": 73.7351
  },
  {
    "id": "city-252181",
    "name": "Chavakkad",
    "state": "Kerala",
    "type": "City",
    "lat": 8.7345,
    "lng": 73.2831
  },
  {
    "id": "city-252184",
    "name": "Guruvayoor",
    "state": "Kerala",
    "type": "City",
    "lat": 8.868500000000001,
    "lng": 75.80510000000001
  },
  {
    "id": "city-252204",
    "name": "Irinjalakuda",
    "state": "Kerala",
    "type": "City",
    "lat": 9.964500000000001,
    "lng": 75.4931
  },
  {
    "id": "city-252200",
    "name": "Kodungallur",
    "state": "Kerala",
    "type": "City",
    "lat": 10.3305,
    "lng": 73.28710000000001
  },
  {
    "id": "city-252180",
    "name": "Kunnamkulam",
    "state": "Kerala",
    "type": "City",
    "lat": 11.7545,
    "lng": 74.8391
  },
  {
    "id": "city-252194",
    "name": "Thrissur",
    "state": "Kerala",
    "type": "City",
    "lat": 10.906500000000001,
    "lng": 75.7351
  },
  {
    "id": "city-272909",
    "name": "Wadakkanchery",
    "state": "Kerala",
    "type": "City",
    "lat": 9.1685,
    "lng": 76.7371
  },
  {
    "id": "city-252155",
    "name": "Kalpetta",
    "state": "Kerala",
    "type": "City",
    "lat": 11.4625,
    "lng": 73.3391
  },
  {
    "id": "city-272910",
    "name": "Mananthavady",
    "state": "Kerala",
    "type": "City",
    "lat": 10.6145,
    "lng": 75.6431
  },
  {
    "id": "city-272911",
    "name": "Sulthanbathery",
    "state": "Kerala",
    "type": "City",
    "lat": 8.374500000000001,
    "lng": 74.93910000000001
  },
  {
    "id": "city-248178",
    "name": "Kargil",
    "state": "Ladakh",
    "type": "City",
    "lat": 31.3246,
    "lng": 77.0291
  },
  {
    "id": "city-248177",
    "name": "Leh",
    "state": "Ladakh",
    "type": "City",
    "lat": 33.6946,
    "lng": 77.6191
  },
  {
    "id": "dist-553",
    "name": "Lakshadweep District",
    "state": "Lakshadweep",
    "type": "District",
    "lat": 9.7247,
    "lng": 72.4117
  },
  {
    "id": "city-250858",
    "name": "Agar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.011400000000002,
    "lng": 78.0749
  },
  {
    "id": "city-250733",
    "name": "Badagaon Shajapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1674,
    "lng": 77.64689999999999
  },
  {
    "id": "city-250857",
    "name": "Badod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.4814,
    "lng": 78.64489999999999
  },
  {
    "id": "city-250859",
    "name": "Kanad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2114,
    "lng": 75.68289999999999
  },
  {
    "id": "city-250855",
    "name": "Nalkheda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7174,
    "lng": 76.6729
  },
  {
    "id": "city-250853",
    "name": "Soyatkalan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0834,
    "lng": 78.61089999999999
  },
  {
    "id": "city-250854",
    "name": "Susner",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2014,
    "lng": 76.6609
  },
  {
    "id": "city-250882",
    "name": "Alirajpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.0054,
    "lng": 78.07289999999999
  },
  {
    "id": "city-250880",
    "name": "Bhavra",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.785400000000003,
    "lng": 77.78089999999999
  },
  {
    "id": "city-250881",
    "name": "Jobat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.285400000000003,
    "lng": 75.9769
  },
  {
    "id": "city-253195",
    "name": "Amarkantak",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.355400000000003,
    "lng": 78.2909
  },
  {
    "id": "city-265847",
    "name": "Anuppur Np",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.023400000000002,
    "lng": 76.07889999999999
  },
  {
    "id": "city-299804",
    "name": "Bargawan (Amlai)",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2774,
    "lng": 78.28089999999999
  },
  {
    "id": "city-253194",
    "name": "Bijuri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1594,
    "lng": 78.3749
  },
  {
    "id": "city-298927",
    "name": "Dola",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7814,
    "lng": 77.94489999999999
  },
  {
    "id": "city-298928",
    "name": "Doomar Kachhar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.8934,
    "lng": 77.7849
  },
  {
    "id": "city-253196",
    "name": "Jaithari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.297400000000003,
    "lng": 77.49289999999999
  },
  {
    "id": "city-253193",
    "name": "Kotma",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6294,
    "lng": 76.64089999999999
  },
  {
    "id": "city-253197",
    "name": "Pasan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0514,
    "lng": 75.7229
  },
  {
    "id": "city-299278",
    "name": "Rajnagar Bangawan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.959400000000002,
    "lng": 76.95089999999999
  },
  {
    "id": "city-250715",
    "name": "Ashoknagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4114,
    "lng": 76.35489999999999
  },
  {
    "id": "city-250713",
    "name": "Chanderi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.017400000000002,
    "lng": 75.74889999999999
  },
  {
    "id": "city-250712",
    "name": "Isagarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3874,
    "lng": 79.09889999999999
  },
  {
    "id": "city-250717",
    "name": "Mungaoli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0134,
    "lng": 77.58489999999999
  },
  {
    "id": "city-299252",
    "name": "Piprai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4674,
    "lng": 78.49889999999999
  },
  {
    "id": "city-262977",
    "name": "Shadora",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6494,
    "lng": 76.2209
  },
  {
    "id": "city-251041",
    "name": "Baihar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2194,
    "lng": 78.2349
  },
  {
    "id": "city-251040",
    "name": "Balaghat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.6614,
    "lng": 76.92089999999999
  },
  {
    "id": "city-250984",
    "name": "Katangi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.2874,
    "lng": 78.67089999999999
  },
  {
    "id": "city-253162",
    "name": "Lanji",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8214,
    "lng": 77.59289999999999
  },
  {
    "id": "city-251042",
    "name": "Malajkhand",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.503400000000003,
    "lng": 77.59089999999999
  },
  {
    "id": "city-251037",
    "name": "Waraseoni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.9634,
    "lng": 79.1789
  },
  {
    "id": "city-250915",
    "name": "Anjad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.669400000000003,
    "lng": 78.4729
  },
  {
    "id": "city-250914",
    "name": "Barwani",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.381400000000003,
    "lng": 77.6249
  },
  {
    "id": "city-250918",
    "name": "Khetia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.837400000000002,
    "lng": 78.56089999999999
  },
  {
    "id": "city-297118",
    "name": "Niwali Bujurg",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.855400000000003,
    "lng": 76.1989
  },
  {
    "id": "city-253251",
    "name": "Palsud",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9554,
    "lng": 79.62689999999999
  },
  {
    "id": "city-250917",
    "name": "Pansemal",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8714,
    "lng": 78.99889999999999
  },
  {
    "id": "city-250916",
    "name": "Rajpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.657400000000003,
    "lng": 75.7969
  },
  {
    "id": "city-250919",
    "name": "Sendhwa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.145400000000002,
    "lng": 79.18889999999999
  },
  {
    "id": "city-297119",
    "name": "Thikri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1594,
    "lng": 79.35889999999999
  },
  {
    "id": "city-248073",
    "name": "Amla",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1914,
    "lng": 79.6549
  },
  {
    "id": "city-263361",
    "name": "Athner",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.913400000000003,
    "lng": 78.74889999999999
  },
  {
    "id": "city-248072",
    "name": "Betul",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.9494,
    "lng": 78.15289999999999
  },
  {
    "id": "city-248070",
    "name": "Betul Bazar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.773400000000002,
    "lng": 78.2889
  },
  {
    "id": "city-250964",
    "name": "Bhainsdehi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1594,
    "lng": 77.0709
  },
  {
    "id": "city-263218",
    "name": "Chicholi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1474,
    "lng": 79.1869
  },
  {
    "id": "city-298919",
    "name": "Ghodadongri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2494,
    "lng": 79.08489999999999
  },
  {
    "id": "city-248071",
    "name": "Multai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.581400000000002,
    "lng": 77.0329
  },
  {
    "id": "city-248069",
    "name": "Sarni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0514,
    "lng": 75.7229
  },
  {
    "id": "city-298920",
    "name": "Shahpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.119400000000002,
    "lng": 76.7909
  },
  {
    "id": "city-250685",
    "name": "Akoda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7134,
    "lng": 78.8369
  },
  {
    "id": "city-250692",
    "name": "Alampur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0894,
    "lng": 79.5329
  },
  {
    "id": "city-250684",
    "name": "Bhind",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1034,
    "lng": 77.92689999999999
  },
  {
    "id": "city-250693",
    "name": "Daboh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.729400000000002,
    "lng": 78.3329
  },
  {
    "id": "city-250688",
    "name": "Gohad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6594,
    "lng": 78.1629
  },
  {
    "id": "city-250686",
    "name": "Gormi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6334,
    "lng": 79.3569
  },
  {
    "id": "city-250691",
    "name": "Lahar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7494,
    "lng": 77.36089999999999
  },
  {
    "id": "city-298924",
    "name": "Malanpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.349400000000003,
    "lng": 75.9609
  },
  {
    "id": "city-250689",
    "name": "Mau",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.215400000000002,
    "lng": 79.3989
  },
  {
    "id": "city-290392",
    "name": "Mehgaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1354,
    "lng": 76.02289999999999
  },
  {
    "id": "city-250690",
    "name": "Mihona",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.9294,
    "lng": 75.8209
  },
  {
    "id": "city-250683",
    "name": "Phuphkalan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.761400000000002,
    "lng": 79.1009
  },
  {
    "id": "city-298923",
    "name": "Roun",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5134,
    "lng": 78.6369
  },
  {
    "id": "city-250945",
    "name": "Berasia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.055400000000002,
    "lng": 78.51889999999999
  },
  {
    "id": "city-250946",
    "name": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.369400000000002,
    "lng": 78.88489999999999
  },
  {
    "id": "city-250925",
    "name": "Burhanpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.715400000000002,
    "lng": 78.4909
  },
  {
    "id": "city-250927",
    "name": "Nepanagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.5914,
    "lng": 79.64689999999999
  },
  {
    "id": "city-250926",
    "name": "Shahpur Burhanpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.709400000000002,
    "lng": 77.38489999999999
  },
  {
    "id": "city-250744",
    "name": "Bada -Malhera",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.291400000000003,
    "lng": 77.63489999999999
  },
  {
    "id": "city-250734",
    "name": "Barigarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3854,
    "lng": 75.77289999999999
  },
  {
    "id": "city-250747",
    "name": "Bijawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1534,
    "lng": 78.9649
  },
  {
    "id": "city-250748",
    "name": "Buxwaha",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.285400000000003,
    "lng": 76.28089999999999
  },
  {
    "id": "city-250736",
    "name": "Chandla",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.939400000000003,
    "lng": 79.1309
  },
  {
    "id": "city-250741",
    "name": "Chhatarpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.5214,
    "lng": 78.3329
  },
  {
    "id": "city-250739",
    "name": "Garhi -Malhara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.017400000000002,
    "lng": 77.14089999999999
  },
  {
    "id": "city-250745",
    "name": "Ghuwara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0714,
    "lng": 78.8309
  },
  {
    "id": "city-250737",
    "name": "Harpalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.523400000000002,
    "lng": 75.84289999999999
  },
  {
    "id": "city-250743",
    "name": "Khajuraho",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.343400000000003,
    "lng": 76.67089999999999
  },
  {
    "id": "city-250735",
    "name": "Lavkush Nagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4634,
    "lng": 76.1909
  },
  {
    "id": "city-250740",
    "name": "Maharajpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.867400000000004,
    "lng": 79.53089999999999
  },
  {
    "id": "city-250738",
    "name": "Nowgong",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.979400000000002,
    "lng": 79.45089999999999
  },
  {
    "id": "city-250742",
    "name": "Rajnagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3534,
    "lng": 77.49289999999999
  },
  {
    "id": "city-250746",
    "name": "Satai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0894,
    "lng": 75.9009
  },
  {
    "id": "city-251008",
    "name": "Amarwara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4174,
    "lng": 77.3569
  },
  {
    "id": "city-251025",
    "name": "Badkuhi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8774,
    "lng": 77.00089999999999
  },
  {
    "id": "city-253171",
    "name": "Bhuwa Bichhia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.7514,
    "lng": 78.75089999999999
  },
  {
    "id": "city-263072",
    "name": "Bichhua",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.3094,
    "lng": 77.8009
  },
  {
    "id": "city-250756",
    "name": "Chand",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7694,
    "lng": 79.57289999999999
  },
  {
    "id": "city-251023",
    "name": "Chandameta -Butaria",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1274,
    "lng": 78.99889999999999
  },
  {
    "id": "city-251009",
    "name": "Chaurai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.2554,
    "lng": 77.92689999999999
  },
  {
    "id": "city-251026",
    "name": "Chhindwara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.407400000000003,
    "lng": 77.90289999999999
  },
  {
    "id": "city-293808",
    "name": "Damua",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.229400000000002,
    "lng": 78.8329
  },
  {
    "id": "city-251022",
    "name": "Dongar Parasia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.9574,
    "lng": 78.2969
  },
  {
    "id": "city-251007",
    "name": "Harrai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.8794,
    "lng": 75.8629
  },
  {
    "id": "city-251010",
    "name": "Jamai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.2574,
    "lng": 76.10889999999999
  },
  {
    "id": "city-251018",
    "name": "Newton Chikhli Kalan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4054,
    "lng": 76.2889
  },
  {
    "id": "city-250774",
    "name": "Damoh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8714,
    "lng": 77.7349
  },
  {
    "id": "city-250771",
    "name": "Hatta",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7894,
    "lng": 76.6009
  },
  {
    "id": "city-250773",
    "name": "Hindoria",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.273400000000002,
    "lng": 76.11689999999999
  },
  {
    "id": "city-293826",
    "name": "Patera",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.511400000000002,
    "lng": 77.8629
  },
  {
    "id": "city-250772",
    "name": "Patharia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.977400000000003,
    "lng": 77.6929
  },
  {
    "id": "city-290462",
    "name": "Tendukheda- Damoh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.043400000000002,
    "lng": 79.5149
  },
  {
    "id": "city-277237",
    "name": "Badonee",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5574,
    "lng": 76.0809
  },
  {
    "id": "city-250704",
    "name": "Bhander",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7694,
    "lng": 76.06089999999999
  },
  {
    "id": "city-250703",
    "name": "Datia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.939400000000003,
    "lng": 78.84289999999999
  },
  {
    "id": "city-250702",
    "name": "Indergarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.5014,
    "lng": 75.9369
  },
  {
    "id": "city-250701",
    "name": "Seondha",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.389400000000002,
    "lng": 78.7529
  },
  {
    "id": "city-290389",
    "name": "Bagali",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.265400000000003,
    "lng": 77.6609
  },
  {
    "id": "city-250865",
    "name": "Bhaurasa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1474,
    "lng": 78.47489999999999
  },
  {
    "id": "city-250867",
    "name": "Dewas",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.573400000000003,
    "lng": 79.4969
  },
  {
    "id": "city-250872",
    "name": "Hatpipalya",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8514,
    "lng": 76.0749
  },
  {
    "id": "city-250868",
    "name": "Kannod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6274,
    "lng": 78.0509
  },
  {
    "id": "city-250870",
    "name": "Kantaphod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.241400000000002,
    "lng": 79.2849
  },
  {
    "id": "city-250873",
    "name": "Karnawad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.579400000000003,
    "lng": 78.9469
  },
  {
    "id": "city-250875",
    "name": "Khategaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.721400000000003,
    "lng": 76.2049
  },
  {
    "id": "city-250869",
    "name": "Loharda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8594,
    "lng": 79.0749
  },
  {
    "id": "city-274350",
    "name": "Nemawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.639400000000002,
    "lng": 78.0949
  },
  {
    "id": "city-290272",
    "name": "Pipalrawan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.2514,
    "lng": 79.4109
  },
  {
    "id": "city-250871",
    "name": "Satwas",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 19.995400000000004,
    "lng": 76.27489999999999
  },
  {
    "id": "city-250866",
    "name": "Sonkatch",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4874,
    "lng": 76.72689999999999
  },
  {
    "id": "city-290271",
    "name": "Tonk Khurd",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.793400000000002,
    "lng": 79.62089999999999
  },
  {
    "id": "city-250884",
    "name": "Badnawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.125400000000003,
    "lng": 78.48889999999999
  },
  {
    "id": "city-290394",
    "name": "Dahi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.6414,
    "lng": 78.60489999999999
  },
  {
    "id": "city-290379",
    "name": "Dhamnod- Dhar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.171400000000002,
    "lng": 76.5469
  },
  {
    "id": "city-250887",
    "name": "Dhar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6794,
    "lng": 78.7829
  },
  {
    "id": "city-250894",
    "name": "Dharampuri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.3914,
    "lng": 79.18289999999999
  },
  {
    "id": "city-250891",
    "name": "Kukshi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.907400000000003,
    "lng": 77.73089999999999
  },
  {
    "id": "city-250892",
    "name": "Manawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.111400000000003,
    "lng": 78.87089999999999
  },
  {
    "id": "city-250889",
    "name": "Mandav",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1794,
    "lng": 76.5709
  },
  {
    "id": "city-250888",
    "name": "Pithampur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.773400000000002,
    "lng": 78.8009
  },
  {
    "id": "city-250931",
    "name": "Rajgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4034,
    "lng": 79.3309
  },
  {
    "id": "city-250886",
    "name": "Sardarpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.573400000000003,
    "lng": 76.4169
  },
  {
    "id": "city-290390",
    "name": "Dindori",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8594,
    "lng": 79.50689999999999
  },
  {
    "id": "city-250986",
    "name": "Shahpura Dindori",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.6034,
    "lng": 76.6909
  },
  {
    "id": "city-250719",
    "name": "Aron",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0134,
    "lng": 78.1369
  },
  {
    "id": "city-250720",
    "name": "Chachaura -Binaganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.543400000000002,
    "lng": 75.8309
  },
  {
    "id": "city-250714",
    "name": "Guna",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.183400000000002,
    "lng": 78.4069
  },
  {
    "id": "city-250718",
    "name": "Kumbhraj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.913400000000003,
    "lng": 79.52489999999999
  },
  {
    "id": "city-299255",
    "name": "Madhusudangarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2654,
    "lng": 77.31689999999999
  },
  {
    "id": "city-250716",
    "name": "Raghogarh-Vijaypur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.7654,
    "lng": 76.73689999999999
  },
  {
    "id": "city-250699",
    "name": "Antari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.447400000000002,
    "lng": 79.3029
  },
  {
    "id": "city-250700",
    "name": "Bhitarwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.0574,
    "lng": 79.2769
  },
  {
    "id": "city-250695",
    "name": "Bilaua",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0534,
    "lng": 78.0889
  },
  {
    "id": "city-250698",
    "name": "Dabra",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.901400000000002,
    "lng": 77.66489999999999
  },
  {
    "id": "city-250694",
    "name": "Gwalior",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5834,
    "lng": 77.92689999999999
  },
  {
    "id": "city-299289",
    "name": "Mohna",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7114,
    "lng": 76.18289999999999
  },
  {
    "id": "city-250697",
    "name": "Pichhore Gwalior",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4234,
    "lng": 77.25489999999999
  },
  {
    "id": "city-250967",
    "name": "Harda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.953400000000002,
    "lng": 76.6849
  },
  {
    "id": "city-250966",
    "name": "Khirkiya",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.773400000000002,
    "lng": 78.2089
  },
  {
    "id": "city-298918",
    "name": "Sirali",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.5454,
    "lng": 76.3249
  },
  {
    "id": "city-250968",
    "name": "Timarni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.605400000000003,
    "lng": 75.71289999999999
  },
  {
    "id": "city-250897",
    "name": "Betma",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4314,
    "lng": 78.0949
  },
  {
    "id": "city-250896",
    "name": "Depalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.587400000000002,
    "lng": 78.78689999999999
  },
  {
    "id": "city-250900",
    "name": "Hatod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.485400000000002,
    "lng": 77.17689999999999
  },
  {
    "id": "city-250901",
    "name": "Indore",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8594,
    "lng": 76.24289999999999
  },
  {
    "id": "city-250906",
    "name": "Manpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4754,
    "lng": 75.7469
  },
  {
    "id": "city-250905",
    "name": "Mhowgaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.2454,
    "lng": 76.2089
  },
  {
    "id": "city-250904",
    "name": "Rau",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.825400000000002,
    "lng": 79.3089
  },
  {
    "id": "city-250895",
    "name": "Runji -Gautampura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.349400000000003,
    "lng": 79.3689
  },
  {
    "id": "city-250898",
    "name": "Sawer",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1214,
    "lng": 76.8929
  },
  {
    "id": "city-250997",
    "name": "Barela",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.3394,
    "lng": 78.9549
  },
  {
    "id": "city-250996",
    "name": "Bhedaghat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1414,
    "lng": 76.10489999999999
  },
  {
    "id": "city-250995",
    "name": "Jabalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.747400000000003,
    "lng": 79.62689999999999
  },
  {
    "id": "city-251035",
    "name": "Katangi Jabalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.7054,
    "lng": 75.87689999999999
  },
  {
    "id": "city-250982",
    "name": "Manjholi Jabalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.331400000000002,
    "lng": 75.89089999999999
  },
  {
    "id": "city-250987",
    "name": "Panagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.445400000000003,
    "lng": 78.97689999999999
  },
  {
    "id": "city-250985",
    "name": "Patan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9734,
    "lng": 77.30489999999999
  },
  {
    "id": "city-251003",
    "name": "Shahpura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.061400000000003,
    "lng": 78.58489999999999
  },
  {
    "id": "city-250983",
    "name": "Sihora",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.989400000000003,
    "lng": 77.0889
  },
  {
    "id": "city-250879",
    "name": "Jhabua",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.355400000000003,
    "lng": 79.6189
  },
  {
    "id": "city-273379",
    "name": "Meghnagar New",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3974,
    "lng": 78.22489999999999
  },
  {
    "id": "city-250877",
    "name": "Petlawad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1214,
    "lng": 79.11689999999999
  },
  {
    "id": "city-250883",
    "name": "Ranapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1154,
    "lng": 78.40289999999999
  },
  {
    "id": "city-250876",
    "name": "Thandla",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.317400000000003,
    "lng": 78.37689999999999
  },
  {
    "id": "city-250978",
    "name": "Barhi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.965400000000002,
    "lng": 79.6489
  },
  {
    "id": "city-250980",
    "name": "Kymore",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.163400000000003,
    "lng": 77.6669
  },
  {
    "id": "city-250979",
    "name": "Murwara - Katni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.767400000000002,
    "lng": 78.69489999999999
  },
  {
    "id": "city-250981",
    "name": "Vijayraghavgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8454,
    "lng": 76.48089999999999
  },
  {
    "id": "city-250920",
    "name": "Harsud",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.0314,
    "lng": 77.5749
  },
  {
    "id": "city-250923",
    "name": "Khandwa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.925400000000003,
    "lng": 77.2649
  },
  {
    "id": "city-250922",
    "name": "Mundi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.131400000000003,
    "lng": 77.2029
  },
  {
    "id": "city-250921",
    "name": "Omkareshwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4054,
    "lng": 76.5769
  },
  {
    "id": "city-250924",
    "name": "Pandhana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7074,
    "lng": 78.91489999999999
  },
  {
    "id": "city-300388",
    "name": "Punasa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.233400000000003,
    "lng": 79.24489999999999
  },
  {
    "id": "city-250907",
    "name": "Barwaha",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.9934,
    "lng": 77.59689999999999
  },
  {
    "id": "city-250912",
    "name": "Bhikangaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.241400000000002,
    "lng": 77.3089
  },
  {
    "id": "city-298931",
    "name": "Bistan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4314,
    "lng": 77.8069
  },
  {
    "id": "city-293822",
    "name": "Karahi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.5454,
    "lng": 78.5089
  },
  {
    "id": "city-250911",
    "name": "Kasrawad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.049400000000002,
    "lng": 79.51689999999999
  },
  {
    "id": "city-250913",
    "name": "Khargone",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.887400000000003,
    "lng": 78.92689999999999
  },
  {
    "id": "city-250909",
    "name": "Maheshwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.9614,
    "lng": 76.5649
  },
  {
    "id": "city-250910",
    "name": "Mandleshwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.0214,
    "lng": 77.89689999999999
  },
  {
    "id": "city-250908",
    "name": "Sanawad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.663400000000003,
    "lng": 78.8389
  },
  {
    "id": "city-250794",
    "name": "Hanumana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.747400000000003,
    "lng": 76.29889999999999
  },
  {
    "id": "city-250796",
    "name": "Mauganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4034,
    "lng": 78.9229
  },
  {
    "id": "city-250795",
    "name": "Nai-Garhi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.369400000000002,
    "lng": 79.4609
  },
  {
    "id": "city-250786",
    "name": "Amarpatan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.203400000000002,
    "lng": 76.35489999999999
  },
  {
    "id": "city-250787",
    "name": "Maihar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9494,
    "lng": 77.4409
  },
  {
    "id": "city-293819",
    "name": "New Ramnagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.011400000000002,
    "lng": 77.3389
  },
  {
    "id": "city-289260",
    "name": "Bamhni Banjar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3154,
    "lng": 77.8029
  },
  {
    "id": "city-289259",
    "name": "Mandla",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8194,
    "lng": 76.4109
  },
  {
    "id": "city-248075",
    "name": "\"Nagar Palika",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.3914,
    "lng": 78.9349
  },
  {
    "id": "city-253170",
    "name": "Niwas",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.3214,
    "lng": 76.09289999999999
  },
  {
    "id": "city-250827",
    "name": "Bhanpura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.067400000000003,
    "lng": 77.99489999999999
  },
  {
    "id": "city-298922",
    "name": "Bhensoda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6214,
    "lng": 79.5769
  },
  {
    "id": "city-250831",
    "name": "Garoth",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.579400000000003,
    "lng": 78.8029
  },
  {
    "id": "city-250828",
    "name": "Malhargarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1034,
    "lng": 76.43889999999999
  },
  {
    "id": "city-250833",
    "name": "Mandsaur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1594,
    "lng": 79.0709
  },
  {
    "id": "city-250834",
    "name": "Nagri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.947400000000002,
    "lng": 76.49889999999999
  },
  {
    "id": "city-250829",
    "name": "Narayangarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.6374,
    "lng": 76.48089999999999
  },
  {
    "id": "city-250830",
    "name": "Piplya Mandi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.477400000000003,
    "lng": 78.7849
  },
  {
    "id": "city-250832",
    "name": "Shamgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.607400000000002,
    "lng": 79.51089999999999
  },
  {
    "id": "city-250835",
    "name": "Sitamau",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.145400000000002,
    "lng": 79.59689999999999
  },
  {
    "id": "city-290381",
    "name": "Suwasra",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4414,
    "lng": 75.9969
  },
  {
    "id": "city-250675",
    "name": "Ambah",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.7194,
    "lng": 79.02289999999999
  },
  {
    "id": "city-250678",
    "name": "Banmor",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.607400000000002,
    "lng": 78.26289999999999
  },
  {
    "id": "city-250681",
    "name": "Jhundpura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9114,
    "lng": 75.97489999999999
  },
  {
    "id": "city-250679",
    "name": "Joura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8194,
    "lng": 77.53089999999999
  },
  {
    "id": "city-250680",
    "name": "Kailaras",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.197400000000002,
    "lng": 78.2889
  },
  {
    "id": "city-250677",
    "name": "Morena",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.7814,
    "lng": 76.23289999999999
  },
  {
    "id": "city-250676",
    "name": "Porsa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3674,
    "lng": 76.51889999999999
  },
  {
    "id": "city-250682",
    "name": "Sabalgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.267400000000002,
    "lng": 77.49889999999999
  },
  {
    "id": "city-250975",
    "name": "Babai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.779400000000003,
    "lng": 78.88289999999999
  },
  {
    "id": "city-263020",
    "name": "Bankhedi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6654,
    "lng": 78.0449
  },
  {
    "id": "city-250970",
    "name": "Itarsi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2014,
    "lng": 75.8449
  },
  {
    "id": "city-250974",
    "name": "Narmadapuram",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2074,
    "lng": 79.63889999999999
  },
  {
    "id": "city-250977",
    "name": "Pipariya",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.7754,
    "lng": 75.9429
  },
  {
    "id": "city-250969",
    "name": "Seoni-Malwa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9674,
    "lng": 79.4069
  },
  {
    "id": "city-250976",
    "name": "Sohagpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.195400000000003,
    "lng": 77.85889999999999
  },
  {
    "id": "city-251000",
    "name": "Chichli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.5774,
    "lng": 78.90889999999999
  },
  {
    "id": "city-250999",
    "name": "Gadarwara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1014,
    "lng": 78.4169
  },
  {
    "id": "city-250998",
    "name": "Gotegaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.105400000000003,
    "lng": 76.2769
  },
  {
    "id": "city-251002",
    "name": "Kareli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4814,
    "lng": 78.52489999999999
  },
  {
    "id": "city-251001",
    "name": "Narsimhapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.453400000000002,
    "lng": 76.59289999999999
  },
  {
    "id": "city-263217",
    "name": "Sainkheda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.889400000000002,
    "lng": 78.6609
  },
  {
    "id": "city-293820",
    "name": "Salichauka",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.0894,
    "lng": 79.18889999999999
  },
  {
    "id": "city-290429",
    "name": "Tendukheda- Narsimhapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.081400000000002,
    "lng": 76.6129
  },
  {
    "id": "city-293817",
    "name": "Athana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.451400000000003,
    "lng": 78.42689999999999
  },
  {
    "id": "city-250821",
    "name": "Diken",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.075400000000002,
    "lng": 78.0589
  },
  {
    "id": "city-250822",
    "name": "Jawad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.4674,
    "lng": 77.6189
  },
  {
    "id": "city-250824",
    "name": "Jiran",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5334,
    "lng": 76.66489999999999
  },
  {
    "id": "city-253134",
    "name": "Kukdeshwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4874,
    "lng": 78.05489999999999
  },
  {
    "id": "city-250826",
    "name": "Manasa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4874,
    "lng": 77.1189
  },
  {
    "id": "city-263154",
    "name": "Nayagoan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1094,
    "lng": 77.99289999999999
  },
  {
    "id": "city-250823",
    "name": "Neemuch",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.547400000000003,
    "lng": 78.24289999999999
  },
  {
    "id": "city-250825",
    "name": "Rampura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1934,
    "lng": 78.8209
  },
  {
    "id": "city-250820",
    "name": "Ratangarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.425400000000003,
    "lng": 79.0289
  },
  {
    "id": "city-263155",
    "name": "Sarwaniya Maharaj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8194,
    "lng": 77.8189
  },
  {
    "id": "city-250819",
    "name": "Singoli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.887400000000003,
    "lng": 79.59889999999999
  },
  {
    "id": "city-290323",
    "name": "Jeron Khalsa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2774,
    "lng": 78.87289999999999
  },
  {
    "id": "city-290382",
    "name": "Niwari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.317400000000003,
    "lng": 76.84889999999999
  },
  {
    "id": "city-293827",
    "name": "Orchha",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.175400000000003,
    "lng": 79.4469
  },
  {
    "id": "city-293821",
    "name": "Prithvipur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6994,
    "lng": 77.91489999999999
  },
  {
    "id": "city-293818",
    "name": "Taricharkala",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2074,
    "lng": 79.51889999999999
  },
  {
    "id": "city-251029",
    "name": "Lodhikheda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6274,
    "lng": 76.27489999999999
  },
  {
    "id": "city-251028",
    "name": "Mohgaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1554,
    "lng": 76.4589
  },
  {
    "id": "city-251030",
    "name": "Pandhurna",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3194,
    "lng": 77.25489999999999
  },
  {
    "id": "city-290395",
    "name": "Pipla Narayanwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7814,
    "lng": 76.76089999999999
  },
  {
    "id": "city-251027",
    "name": "Sausar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.887400000000003,
    "lng": 76.92689999999999
  },
  {
    "id": "city-250749",
    "name": "Ajaygarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.919400000000003,
    "lng": 75.8149
  },
  {
    "id": "city-250753",
    "name": "Amanganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.7074,
    "lng": 76.34689999999999
  },
  {
    "id": "city-250751",
    "name": "Devendranagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.413400000000003,
    "lng": 78.3129
  },
  {
    "id": "city-297930",
    "name": "Gunnor",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8794,
    "lng": 78.10289999999999
  },
  {
    "id": "city-250752",
    "name": "Kakarhati",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.3414,
    "lng": 76.00089999999999
  },
  {
    "id": "city-250750",
    "name": "Panna",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.221400000000003,
    "lng": 75.99289999999999
  },
  {
    "id": "city-250754",
    "name": "Pawai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.729400000000002,
    "lng": 75.7409
  },
  {
    "id": "city-250961",
    "name": "Badi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.229400000000002,
    "lng": 78.8329
  },
  {
    "id": "city-250962",
    "name": "Bareli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.355400000000003,
    "lng": 79.45089999999999
  },
  {
    "id": "city-250957",
    "name": "Begamganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3774,
    "lng": 78.4609
  },
  {
    "id": "city-250815",
    "name": "Devri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.6854,
    "lng": 77.96889999999999
  },
  {
    "id": "city-250956",
    "name": "Gairatganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.0214,
    "lng": 76.5289
  },
  {
    "id": "city-250959",
    "name": "Mandideep",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.139400000000002,
    "lng": 75.93889999999999
  },
  {
    "id": "city-250960",
    "name": "Obedullaganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0694,
    "lng": 78.3209
  },
  {
    "id": "city-250955",
    "name": "Raisen",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8414,
    "lng": 76.50089999999999
  },
  {
    "id": "city-250954",
    "name": "Sanchi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.477400000000003,
    "lng": 77.2169
  },
  {
    "id": "city-253125",
    "name": "Silwani",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.331400000000002,
    "lng": 79.3629
  },
  {
    "id": "city-250958",
    "name": "Sultanpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1614,
    "lng": 78.23689999999999
  },
  {
    "id": "city-250963",
    "name": "Udaipura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 19.995400000000004,
    "lng": 77.5389
  },
  {
    "id": "city-250934",
    "name": "Biaora",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3734,
    "lng": 79.0089
  },
  {
    "id": "city-250938",
    "name": "Boda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1214,
    "lng": 78.4849
  },
  {
    "id": "city-262992",
    "name": "Chhapiheda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.599400000000003,
    "lng": 75.75089999999999
  },
  {
    "id": "city-250929",
    "name": "Jirapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9874,
    "lng": 75.73889999999999
  },
  {
    "id": "city-250930",
    "name": "Khilchipur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.831400000000002,
    "lng": 75.79889999999999
  },
  {
    "id": "city-250932",
    "name": "Khujner",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.575400000000002,
    "lng": 77.41489999999999
  },
  {
    "id": "city-262908",
    "name": "Kurawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.1874,
    "lng": 78.2029
  },
  {
    "id": "city-250928",
    "name": "Machalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0074,
    "lng": 76.5829
  },
  {
    "id": "city-250937",
    "name": "Narsinghgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5534,
    "lng": 78.3249
  },
  {
    "id": "city-250935",
    "name": "Pachore",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4614,
    "lng": 79.4729
  },
  {
    "id": "city-250885",
    "name": "Rajgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4034,
    "lng": 79.3309
  },
  {
    "id": "city-250936",
    "name": "Sarangpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.811400000000003,
    "lng": 79.3869
  },
  {
    "id": "city-250933",
    "name": "Suthaliya",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4374,
    "lng": 78.1369
  },
  {
    "id": "city-250939",
    "name": "Talen",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0134,
    "lng": 77.5449
  },
  {
    "id": "city-250839",
    "name": "Alot",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.4934,
    "lng": 79.01689999999999
  },
  {
    "id": "city-250838",
    "name": "Badawada",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.2514,
    "lng": 77.39489999999999
  },
  {
    "id": "city-250893",
    "name": "Dhamnod Ratlam",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3014,
    "lng": 76.92089999999999
  },
  {
    "id": "city-250837",
    "name": "Jaora",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.139400000000002,
    "lng": 77.45089999999999
  },
  {
    "id": "city-250842",
    "name": "Namli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.107400000000002,
    "lng": 76.4589
  },
  {
    "id": "city-250836",
    "name": "Piploda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.875400000000003,
    "lng": 76.12289999999999
  },
  {
    "id": "city-250843",
    "name": "Ratlam",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.5394,
    "lng": 77.13889999999999
  },
  {
    "id": "city-250841",
    "name": "Sailana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.3714,
    "lng": 78.78689999999999
  },
  {
    "id": "city-250840",
    "name": "Tal",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.651400000000002,
    "lng": 77.91489999999999
  },
  {
    "id": "city-250792",
    "name": "Baikunthpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5314,
    "lng": 76.8269
  },
  {
    "id": "city-250788",
    "name": "Chakghat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3714,
    "lng": 76.7229
  },
  {
    "id": "city-298925",
    "name": "Dabhaura",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.785400000000003,
    "lng": 77.1489
  },
  {
    "id": "city-250798",
    "name": "Govindgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7834,
    "lng": 76.90289999999999
  },
  {
    "id": "city-250799",
    "name": "Gurh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.445400000000003,
    "lng": 78.5289
  },
  {
    "id": "city-250793",
    "name": "Mangawan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8454,
    "lng": 79.3369
  },
  {
    "id": "city-250797",
    "name": "Rewa",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3914,
    "lng": 77.85489999999999
  },
  {
    "id": "city-250791",
    "name": "Semaria",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.709400000000002,
    "lng": 78.6729
  },
  {
    "id": "city-250790",
    "name": "Sirmaur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.215400000000002,
    "lng": 78.76689999999999
  },
  {
    "id": "city-250789",
    "name": "Teonthar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.447400000000002,
    "lng": 77.9189
  },
  {
    "id": "city-250760",
    "name": "Banda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.0134,
    "lng": 79.1369
  },
  {
    "id": "city-297114",
    "name": "Bandri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.477400000000003,
    "lng": 79.23289999999999
  },
  {
    "id": "city-300085",
    "name": "Barodiyakalan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.753400000000003,
    "lng": 76.03689999999999
  },
  {
    "id": "city-298917",
    "name": "Bilhara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.047400000000003,
    "lng": 77.6789
  },
  {
    "id": "city-250755",
    "name": "Bina",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.209400000000002,
    "lng": 78.21289999999999
  },
  {
    "id": "city-250770",
    "name": "Deori",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2314,
    "lng": 78.89489999999999
  },
  {
    "id": "city-250768",
    "name": "Garhakota",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8414,
    "lng": 79.5409
  },
  {
    "id": "city-300387",
    "name": "Karrapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.561400000000003,
    "lng": 78.38889999999999
  },
  {
    "id": "city-250758",
    "name": "Khurai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.825400000000002,
    "lng": 79.18889999999999
  },
  {
    "id": "city-250766",
    "name": "Makronia Buzurg",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1914,
    "lng": 76.5349
  },
  {
    "id": "city-297116",
    "name": "Malthone",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.273400000000002,
    "lng": 79.60489999999999
  },
  {
    "id": "city-250761",
    "name": "Rahatgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.517400000000002,
    "lng": 77.76089999999999
  },
  {
    "id": "city-250769",
    "name": "Rehli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9934,
    "lng": 75.9249
  },
  {
    "id": "city-250764",
    "name": "Sagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1214,
    "lng": 75.8929
  },
  {
    "id": "city-250759",
    "name": "Shahgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3974,
    "lng": 78.00089999999999
  },
  {
    "id": "city-250965",
    "name": "Shahpur Sagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6434,
    "lng": 76.9309
  },
  {
    "id": "city-298934",
    "name": "Surkhi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.0214,
    "lng": 76.0809
  },
  {
    "id": "city-250778",
    "name": "Birsinghpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.363400000000002,
    "lng": 78.3149
  },
  {
    "id": "city-250777",
    "name": "Chitrakoot",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1414,
    "lng": 78.9849
  },
  {
    "id": "city-250780",
    "name": "Jaitwara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.011400000000002,
    "lng": 76.62689999999999
  },
  {
    "id": "city-250784",
    "name": "Kotar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.919400000000003,
    "lng": 76.6309
  },
  {
    "id": "city-250779",
    "name": "Kothi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3354,
    "lng": 77.5269
  },
  {
    "id": "city-250782",
    "name": "Nagod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.7514,
    "lng": 76.4229
  },
  {
    "id": "city-250785",
    "name": "Rampur Baghelan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.695400000000003,
    "lng": 75.7269
  },
  {
    "id": "city-250781",
    "name": "Satna",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8794,
    "lng": 76.39089999999999
  },
  {
    "id": "city-250783",
    "name": "Unchahara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.747400000000003,
    "lng": 79.29889999999999
  },
  {
    "id": "city-250949",
    "name": "Ashta",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.907400000000003,
    "lng": 78.8509
  },
  {
    "id": "city-250952",
    "name": "Budni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0694,
    "lng": 77.87289999999999
  },
  {
    "id": "city-250950",
    "name": "Ichhawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.7194,
    "lng": 77.5749
  },
  {
    "id": "city-250948",
    "name": "Jawar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.4954,
    "lng": 76.48689999999999
  },
  {
    "id": "city-290383",
    "name": "Kothri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3714,
    "lng": 79.11489999999999
  },
  {
    "id": "city-250951",
    "name": "Nasrullaganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.797400000000003,
    "lng": 76.25689999999999
  },
  {
    "id": "city-250953",
    "name": "Rehti",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.489400000000003,
    "lng": 77.3009
  },
  {
    "id": "city-250947",
    "name": "Sehore",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.8294,
    "lng": 76.12889999999999
  },
  {
    "id": "city-262903",
    "name": "Shahganj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1534,
    "lng": 78.4369
  },
  {
    "id": "city-251034",
    "name": "Barghat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.739400000000003,
    "lng": 75.7229
  },
  {
    "id": "city-298932",
    "name": "Chhapara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.8654,
    "lng": 78.44489999999999
  },
  {
    "id": "city-298933",
    "name": "Keolari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3834,
    "lng": 78.05489999999999
  },
  {
    "id": "city-251031",
    "name": "Lakhnadon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.3454,
    "lng": 78.87689999999999
  },
  {
    "id": "city-251033",
    "name": "Seoni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.613400000000002,
    "lng": 77.14489999999999
  },
  {
    "id": "city-298926",
    "name": "Bakho",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.523400000000002,
    "lng": 78.9469
  },
  {
    "id": "city-250805",
    "name": "Beohari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.9814,
    "lng": 78.22489999999999
  },
  {
    "id": "city-250808",
    "name": "Burhar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.297400000000003,
    "lng": 79.65289999999999
  },
  {
    "id": "city-250809",
    "name": "Dhanpuri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.831400000000002,
    "lng": 79.23089999999999
  },
  {
    "id": "city-250806",
    "name": "Jaisinghnagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.497400000000003,
    "lng": 75.77289999999999
  },
  {
    "id": "city-250804",
    "name": "Khand - Bansagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.933400000000002,
    "lng": 78.73689999999999
  },
  {
    "id": "city-250807",
    "name": "Shahdol",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.671400000000002,
    "lng": 75.90289999999999
  },
  {
    "id": "city-250863",
    "name": "Akodia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.6034,
    "lng": 78.13889999999999
  },
  {
    "id": "city-250861",
    "name": "Maksi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.6554,
    "lng": 76.4469
  },
  {
    "id": "city-263010",
    "name": "Pankhedi Kalapipal",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.259400000000003,
    "lng": 77.49889999999999
  },
  {
    "id": "city-250864",
    "name": "Polaykalan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8734,
    "lng": 78.87689999999999
  },
  {
    "id": "city-250860",
    "name": "Shajapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.0254,
    "lng": 78.46889999999999
  },
  {
    "id": "city-250862",
    "name": "Shujalpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8934,
    "lng": 78.45689999999999
  },
  {
    "id": "city-250674",
    "name": "Badoda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.9154,
    "lng": 78.81089999999999
  },
  {
    "id": "city-250673",
    "name": "Sheopur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.361400000000003,
    "lng": 77.29289999999999
  },
  {
    "id": "city-250672",
    "name": "Vijaypur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.113400000000002,
    "lng": 76.31689999999999
  },
  {
    "id": "city-250709",
    "name": "Badarwas",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.4754,
    "lng": 76.3389
  },
  {
    "id": "city-263211",
    "name": "Bairad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.4114,
    "lng": 79.1869
  },
  {
    "id": "city-250707",
    "name": "Karera",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.837400000000002,
    "lng": 79.56089999999999
  },
  {
    "id": "city-250711",
    "name": "Khaniyadhana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.151400000000002,
    "lng": 78.0869
  },
  {
    "id": "city-250708",
    "name": "Kolaras",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.515400000000003,
    "lng": 78.96289999999999
  },
  {
    "id": "city-299299",
    "name": "Magroni",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.1234,
    "lng": 78.24289999999999
  },
  {
    "id": "city-250706",
    "name": "Narwar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.3194,
    "lng": 75.9109
  },
  {
    "id": "city-250710",
    "name": "Pichhore Shivpuri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4094,
    "lng": 76.10889999999999
  },
  {
    "id": "city-289710",
    "name": "Pohari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.4434,
    "lng": 77.75489999999999
  },
  {
    "id": "city-298921",
    "name": "Rannod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.741400000000002,
    "lng": 76.4009
  },
  {
    "id": "city-250705",
    "name": "Shivpuri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.081400000000002,
    "lng": 77.0209
  },
  {
    "id": "city-248068",
    "name": "Churhat",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.151400000000002,
    "lng": 77.7029
  },
  {
    "id": "city-250818",
    "name": "Majhauli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5074,
    "lng": 75.85889999999999
  },
  {
    "id": "city-248067",
    "name": "Rampur Naikin",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.683400000000002,
    "lng": 76.0509
  },
  {
    "id": "city-248065",
    "name": "Sidhi",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.427400000000002,
    "lng": 76.37889999999999
  },
  {
    "id": "city-300395",
    "name": "Bargawan",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.0514,
    "lng": 77.4189
  },
  {
    "id": "city-300386",
    "name": "Sarai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.2454,
    "lng": 76.73689999999999
  },
  {
    "id": "city-248066",
    "name": "Singrauli",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.061400000000003,
    "lng": 76.25689999999999
  },
  {
    "id": "city-290258",
    "name": "Badagaon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.6474,
    "lng": 76.67089999999999
  },
  {
    "id": "city-290276",
    "name": "Baldevgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.733400000000003,
    "lng": 75.94489999999999
  },
  {
    "id": "city-290257",
    "name": "Jatara",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.011400000000002,
    "lng": 75.9549
  },
  {
    "id": "city-290256",
    "name": "Kari",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.3354,
    "lng": 79.1189
  },
  {
    "id": "city-290306",
    "name": "Khargapur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.919400000000003,
    "lng": 77.9349
  },
  {
    "id": "city-290253",
    "name": "Lidhorakhas",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.221400000000003,
    "lng": 79.4409
  },
  {
    "id": "city-290343",
    "name": "Palera",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.855400000000003,
    "lng": 79.5269
  },
  {
    "id": "city-290285",
    "name": "Tikamgarh",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.041400000000003,
    "lng": 79.4129
  },
  {
    "id": "city-250852",
    "name": "Badnagar",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3734,
    "lng": 79.17689999999999
  },
  {
    "id": "city-250845",
    "name": "Khacharod",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.875400000000003,
    "lng": 78.34689999999999
  },
  {
    "id": "city-250849",
    "name": "Mahidpur",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.657400000000003,
    "lng": 79.1009
  },
  {
    "id": "city-263205",
    "name": "Makdon",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.285400000000003,
    "lng": 75.8569
  },
  {
    "id": "city-250846",
    "name": "Nagda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.0634,
    "lng": 77.0949
  },
  {
    "id": "city-250850",
    "name": "Tarana",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.619400000000002,
    "lng": 78.6189
  },
  {
    "id": "city-250851",
    "name": "Ujjain",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3594,
    "lng": 79.5589
  },
  {
    "id": "city-250847",
    "name": "Unhel",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.9294,
    "lng": 76.9409
  },
  {
    "id": "city-250800",
    "name": "Chandia",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.753400000000003,
    "lng": 79.36489999999999
  },
  {
    "id": "city-297136",
    "name": "Manpur (Umaria)",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.887400000000003,
    "lng": 76.12689999999999
  },
  {
    "id": "city-250803",
    "name": "Nowrozabad - Khodargama",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.1274,
    "lng": 78.85489999999999
  },
  {
    "id": "city-250802",
    "name": "Pali",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.8734,
    "lng": 78.7969
  },
  {
    "id": "city-250801",
    "name": "Umaria",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.895400000000002,
    "lng": 79.1749
  },
  {
    "id": "city-293809",
    "name": "Ganjbasoda",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 23.233400000000003,
    "lng": 75.9969
  },
  {
    "id": "city-250942",
    "name": "Kurwai",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 21.235400000000002,
    "lng": 77.8989
  },
  {
    "id": "city-250940",
    "name": "Lateri",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.3194,
    "lng": 79.5029
  },
  {
    "id": "city-262993",
    "name": "Samsabad",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.5014,
    "lng": 77.38489999999999
  },
  {
    "id": "city-250941",
    "name": "Sironj",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 20.5794,
    "lng": 76.37889999999999
  },
  {
    "id": "city-250944",
    "name": "Vidisha",
    "state": "Madhya Pradesh",
    "type": "City",
    "lat": 22.1414,
    "lng": 78.22489999999999
  },
  {
    "id": "city-251548",
    "name": "Ahmadnagar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7675,
    "lng": 74.3059
  },
  {
    "id": "city-275728",
    "name": "Akole",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9955,
    "lng": 75.5179
  },
  {
    "id": "city-251552",
    "name": "Deolali Pravara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3775,
    "lng": 76.21589999999999
  },
  {
    "id": "city-251554",
    "name": "Jamkhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5635,
    "lng": 73.7179
  },
  {
    "id": "city-275729",
    "name": "Karjat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2095,
    "lng": 75.0319
  },
  {
    "id": "city-251540",
    "name": "Kopargaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.8755,
    "lng": 75.4699
  },
  {
    "id": "city-276320",
    "name": "Nevasa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3915,
    "lng": 73.08189999999999
  },
  {
    "id": "city-275730",
    "name": "Parner",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6515,
    "lng": 75.14189999999999
  },
  {
    "id": "city-251546",
    "name": "Pathardi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4615,
    "lng": 75.63589999999999
  },
  {
    "id": "city-251543",
    "name": "Rahta Pimplas",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8315,
    "lng": 75.20989999999999
  },
  {
    "id": "city-251551",
    "name": "Rahuri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6775,
    "lng": 74.35589999999999
  },
  {
    "id": "city-251539",
    "name": "Sangamner",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6555,
    "lng": 74.3459
  },
  {
    "id": "city-276331",
    "name": "Shevgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.7975,
    "lng": 72.7479
  },
  {
    "id": "city-251542",
    "name": "Shirdi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2215,
    "lng": 73.2199
  },
  {
    "id": "city-251553",
    "name": "Shrigonda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3495,
    "lng": 74.7799
  },
  {
    "id": "city-251544",
    "name": "Shrirampur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2615,
    "lng": 74.8039
  },
  {
    "id": "city-251312",
    "name": "Akola",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9875,
    "lng": 75.26989999999999
  },
  {
    "id": "city-251310",
    "name": "Akot",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3495,
    "lng": 76.4919
  },
  {
    "id": "city-251311",
    "name": "Balapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3855,
    "lng": 73.6879
  },
  {
    "id": "city-276332",
    "name": "Barshitakli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6355,
    "lng": 75.3179
  },
  {
    "id": "city-303119",
    "name": "Hiwarkhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.7175,
    "lng": 74.5959
  },
  {
    "id": "city-251315",
    "name": "Murtijapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7175,
    "lng": 74.3479
  },
  {
    "id": "city-251316",
    "name": "Patur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9995,
    "lng": 73.0499
  },
  {
    "id": "city-251309",
    "name": "Telhara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7655,
    "lng": 73.20389999999999
  },
  {
    "id": "city-251323",
    "name": "Achalpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8075,
    "lng": 72.97789999999999
  },
  {
    "id": "city-251328",
    "name": "Amravati",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1735,
    "lng": 75.9559
  },
  {
    "id": "city-251322",
    "name": "Anjangaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3495,
    "lng": 73.8599
  },
  {
    "id": "city-276290",
    "name": "Bhatkuli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8315,
    "lng": 76.61789999999999
  },
  {
    "id": "city-251330",
    "name": "Chandur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3095,
    "lng": 76.53989999999999
  },
  {
    "id": "city-251324",
    "name": "Chandurbazar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6575,
    "lng": 73.1199
  },
  {
    "id": "city-276634",
    "name": "Chikhaldara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9515,
    "lng": 73.25789999999999
  },
  {
    "id": "city-251329",
    "name": "Daryapur Banosa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0115,
    "lng": 75.9339
  },
  {
    "id": "city-251331",
    "name": "Dattapur Dhamangaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6175,
    "lng": 76.5119
  },
  {
    "id": "city-276292",
    "name": "Dharni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2475,
    "lng": 73.4499
  },
  {
    "id": "city-251325",
    "name": "Morshi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1115,
    "lng": 74.4019
  },
  {
    "id": "city-276291",
    "name": "Nandgaon Khandeshwar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8035,
    "lng": 73.8939
  },
  {
    "id": "city-251327",
    "name": "Shendurjana",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2255,
    "lng": 73.2799
  },
  {
    "id": "city-276289",
    "name": "Tiwsa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4315,
    "lng": 74.44189999999999
  },
  {
    "id": "city-251326",
    "name": "Warud",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4215,
    "lng": 73.1319
  },
  {
    "id": "city-251560",
    "name": "Ambajogai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1095,
    "lng": 74.6039
  },
  {
    "id": "city-275734",
    "name": "Ashti",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7015,
    "lng": 76.4039
  },
  {
    "id": "city-251557",
    "name": "Bid",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3135,
    "lng": 75.3759
  },
  {
    "id": "city-251555",
    "name": "Georai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3695,
    "lng": 76.2319
  },
  {
    "id": "city-259696",
    "name": "Kaij",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5575,
    "lng": 74.9399
  },
  {
    "id": "city-251558",
    "name": "Kille Dharur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3735,
    "lng": 75.2359
  },
  {
    "id": "city-251556",
    "name": "Majalgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.363500000000002,
    "lng": 74.8059
  },
  {
    "id": "city-251559",
    "name": "Parli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5795,
    "lng": 74.0299
  },
  {
    "id": "city-275732",
    "name": "Patoda.",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7215,
    "lng": 75.47189999999999
  },
  {
    "id": "city-275726",
    "name": "Shirur Kasar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6335,
    "lng": 76.00789999999999
  },
  {
    "id": "city-275731",
    "name": "Wadvani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6315,
    "lng": 74.74589999999999
  },
  {
    "id": "city-248078",
    "name": "Bhandara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.4215,
    "lng": 74.9079
  },
  {
    "id": "city-276324",
    "name": "Lakhandur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5235,
    "lng": 75.3339
  },
  {
    "id": "city-276323",
    "name": "Lakhani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5715,
    "lng": 73.26989999999999
  },
  {
    "id": "city-276325",
    "name": "Mohadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4475,
    "lng": 73.8179
  },
  {
    "id": "city-248077",
    "name": "Pauni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4695,
    "lng": 74.6199
  },
  {
    "id": "city-276319",
    "name": "Sakoli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8215,
    "lng": 73.81989999999999
  },
  {
    "id": "city-248079",
    "name": "Tumsar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1515,
    "lng": 75.0499
  },
  {
    "id": "city-251305",
    "name": "Buldana",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8735,
    "lng": 73.44789999999999
  },
  {
    "id": "city-251304",
    "name": "Chikhli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0115,
    "lng": 76.30189999999999
  },
  {
    "id": "city-251306",
    "name": "Deulgaon Raja",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5455,
    "lng": 74.0159
  },
  {
    "id": "city-251298",
    "name": "Jalgaon - Jamod",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6835,
    "lng": 73.8059
  },
  {
    "id": "city-251302",
    "name": "Khamgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6275,
    "lng": 74.8059
  },
  {
    "id": "city-251308",
    "name": "Lonar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2075,
    "lng": 74.4979
  },
  {
    "id": "city-251301",
    "name": "Malkapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9815,
    "lng": 76.4919
  },
  {
    "id": "city-251303",
    "name": "Mehkar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.0795,
    "lng": 73.4099
  },
  {
    "id": "city-276275",
    "name": "Motala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9115,
    "lng": 73.2019
  },
  {
    "id": "city-251300",
    "name": "Nandura",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1735,
    "lng": 76.17989999999999
  },
  {
    "id": "city-276274",
    "name": "Sangrampur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7475,
    "lng": 73.0539
  },
  {
    "id": "city-251299",
    "name": "Shegaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2735,
    "lng": 74.5039
  },
  {
    "id": "city-251307",
    "name": "Sindkhed Raja",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3555,
    "lng": 72.7819
  },
  {
    "id": "city-251381",
    "name": "Ballarpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.7855,
    "lng": 73.51989999999999
  },
  {
    "id": "city-251375",
    "name": "Bhadravati",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7035,
    "lng": 72.87389999999999
  },
  {
    "id": "city-300392",
    "name": "Bhisi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2015,
    "lng": 74.9039
  },
  {
    "id": "city-251373",
    "name": "Brahmapuri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9815,
    "lng": 74.1879
  },
  {
    "id": "city-248082",
    "name": "Chandrapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3035,
    "lng": 75.2499
  },
  {
    "id": "city-265713",
    "name": "Chimur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4435,
    "lng": 74.5259
  },
  {
    "id": "city-265791",
    "name": "Gadchandur Nagar Parishad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4195,
    "lng": 74.47789999999999
  },
  {
    "id": "city-298902",
    "name": "Ghugus",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1055,
    "lng": 75.0479
  },
  {
    "id": "city-276358",
    "name": "Gondpimpri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.8975,
    "lng": 75.70389999999999
  },
  {
    "id": "city-276355",
    "name": "Jiwati",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0115,
    "lng": 74.8939
  },
  {
    "id": "city-276357",
    "name": "Korpana",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3715,
    "lng": 76.4379
  },
  {
    "id": "city-251382",
    "name": "Mul",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2155,
    "lng": 76.33789999999999
  },
  {
    "id": "city-276361",
    "name": "Nagbhid Muncipal Council",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3015,
    "lng": 72.8999
  },
  {
    "id": "city-276359",
    "name": "Pombhurna",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9595,
    "lng": 74.0979
  },
  {
    "id": "city-251384",
    "name": "Rajura",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.825499999999998,
    "lng": 73.9439
  },
  {
    "id": "city-276356",
    "name": "Saoli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9395,
    "lng": 74.1899
  },
  {
    "id": "city-276362",
    "name": "Sindewahi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5035,
    "lng": 75.48989999999999
  },
  {
    "id": "city-251376",
    "name": "Warora",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4595,
    "lng": 73.0059
  },
  {
    "id": "city-251428",
    "name": "Aurangabad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9435,
    "lng": 75.8659
  },
  {
    "id": "city-276353",
    "name": "Fulambri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3915,
    "lng": 74.87389999999999
  },
  {
    "id": "city-251432",
    "name": "Gangapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5815,
    "lng": 73.7879
  },
  {
    "id": "city-251426",
    "name": "Kannad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5375,
    "lng": 76.1999
  },
  {
    "id": "city-251430",
    "name": "Khuldabad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.863500000000002,
    "lng": 75.7139
  },
  {
    "id": "city-251433",
    "name": "Paithan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.985500000000002,
    "lng": 75.65589999999999
  },
  {
    "id": "city-297092",
    "name": "Sillod Municipal Council",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6915,
    "lng": 74.98989999999999
  },
  {
    "id": "city-251436",
    "name": "Soyagaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8975,
    "lng": 74.19189999999999
  },
  {
    "id": "city-251431",
    "name": "Vaijapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6955,
    "lng": 74.1379
  },
  {
    "id": "city-251567",
    "name": "Bhum",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5235,
    "lng": 75.88589999999999
  },
  {
    "id": "city-251568",
    "name": "Kalamb",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1275,
    "lng": 76.48989999999999
  },
  {
    "id": "city-276313",
    "name": "Lohara (Bk)",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5775,
    "lng": 73.7439
  },
  {
    "id": "city-251572",
    "name": "Murum",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6595,
    "lng": 73.5099
  },
  {
    "id": "city-251571",
    "name": "Naldurg",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1015,
    "lng": 75.94789999999999
  },
  {
    "id": "city-251569",
    "name": "Osmanabad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.139499999999998,
    "lng": 76.0859
  },
  {
    "id": "city-251566",
    "name": "Paranda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9975,
    "lng": 75.02789999999999
  },
  {
    "id": "city-251570",
    "name": "Tuljapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7255,
    "lng": 76.14789999999999
  },
  {
    "id": "city-251573",
    "name": "Umarga",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.549500000000002,
    "lng": 76.3879
  },
  {
    "id": "city-276312",
    "name": "Washi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5475,
    "lng": 74.0379
  },
  {
    "id": "city-251282",
    "name": "Dhule",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9075,
    "lng": 74.78989999999999
  },
  {
    "id": "city-251281",
    "name": "Dondaicha-Warwade",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3935,
    "lng": 73.7359
  },
  {
    "id": "city-303133",
    "name": "Pimpalner Nagar Pnchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8655,
    "lng": 74.9759
  },
  {
    "id": "city-276339",
    "name": "Sakri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6235,
    "lng": 73.3939
  },
  {
    "id": "city-251280",
    "name": "Shirpur-Warwade",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.7775,
    "lng": 74.1279
  },
  {
    "id": "city-259701",
    "name": "Sindhakeda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2075,
    "lng": 74.4979
  },
  {
    "id": "city-276327",
    "name": "Aheri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4095,
    "lng": 76.3519
  },
  {
    "id": "city-276283",
    "name": "Bhamragad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.049500000000002,
    "lng": 73.0479
  },
  {
    "id": "city-276329",
    "name": "Chamorshi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3995,
    "lng": 73.59389999999999
  },
  {
    "id": "city-276284",
    "name": "Dhanora",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5935,
    "lng": 73.1999
  },
  {
    "id": "city-276330",
    "name": "Etapalli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5315,
    "lng": 73.6459
  },
  {
    "id": "city-305207",
    "name": "Korchi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.7555,
    "lng": 74.9579
  },
  {
    "id": "city-276286",
    "name": "Kurkheda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7615,
    "lng": 76.1599
  },
  {
    "id": "city-276287",
    "name": "Mulchera",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2295,
    "lng": 75.8119
  },
  {
    "id": "city-297866",
    "name": "Municipal Council Armori",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3095,
    "lng": 74.3959
  },
  {
    "id": "city-248081",
    "name": "Municipal Council Desaiganj ( Wadsa)",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.139499999999998,
    "lng": 74.0619
  },
  {
    "id": "city-248080",
    "name": "Municipal Council Gadchiroli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0335,
    "lng": 74.9999
  },
  {
    "id": "city-276288",
    "name": "Sironcha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2495,
    "lng": 73.4319
  },
  {
    "id": "city-276364",
    "name": "Amgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4415,
    "lng": 75.0559
  },
  {
    "id": "city-276366",
    "name": "Arjuni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7655,
    "lng": 75.09989999999999
  },
  {
    "id": "city-276363",
    "name": "Deori",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0095,
    "lng": 75.9519
  },
  {
    "id": "city-251371",
    "name": "Gondiya",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4215,
    "lng": 74.43589999999999
  },
  {
    "id": "city-251510",
    "name": "Goregaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2795,
    "lng": 75.2019
  },
  {
    "id": "city-276368",
    "name": "Sadak-Arjuni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3915,
    "lng": 75.7139
  },
  {
    "id": "city-276365",
    "name": "Salekasa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3975,
    "lng": 76.69189999999999
  },
  {
    "id": "city-251370",
    "name": "Tirora",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.889499999999998,
    "lng": 75.9279
  },
  {
    "id": "city-296909",
    "name": "Aundha Nagnath",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9715,
    "lng": 73.1819
  },
  {
    "id": "city-251413",
    "name": "Basmath",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7515,
    "lng": 74.03389999999999
  },
  {
    "id": "city-251411",
    "name": "Hingoli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8675,
    "lng": 73.6539
  },
  {
    "id": "city-251412",
    "name": "Kalamnuri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0795,
    "lng": 76.2659
  },
  {
    "id": "city-296910",
    "name": "Sengaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7455,
    "lng": 75.72789999999999
  },
  {
    "id": "city-251294",
    "name": "Amalner",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7515,
    "lng": 74.4019
  },
  {
    "id": "city-253140",
    "name": "Bhadgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5875,
    "lng": 76.0539
  },
  {
    "id": "city-251290",
    "name": "Bhusawal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1775,
    "lng": 74.9759
  },
  {
    "id": "city-276272",
    "name": "Bodwad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4775,
    "lng": 75.1719
  },
  {
    "id": "city-251296",
    "name": "Chalisgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.4135,
    "lng": 73.1719
  },
  {
    "id": "city-251283",
    "name": "Chopda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.613500000000002,
    "lng": 73.79589999999999
  },
  {
    "id": "city-251293",
    "name": "Dharangaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3575,
    "lng": 76.0679
  },
  {
    "id": "city-251292",
    "name": "Erandol",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6695,
    "lng": 75.81989999999999
  },
  {
    "id": "city-251285",
    "name": "Faizpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6655,
    "lng": 74.9199
  },
  {
    "id": "city-276571",
    "name": "Jalgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3795,
    "lng": 74.01389999999999
  },
  {
    "id": "city-253139",
    "name": "Jamner",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9295,
    "lng": 74.3519
  },
  {
    "id": "city-276421",
    "name": "Muktainagar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9195,
    "lng": 76.0179
  },
  {
    "id": "city-251297",
    "name": "Pachora",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2315,
    "lng": 76.2819
  },
  {
    "id": "city-251295",
    "name": "Parola",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9735,
    "lng": 75.12389999999999
  },
  {
    "id": "city-251287",
    "name": "Raver",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9355,
    "lng": 74.0659
  },
  {
    "id": "city-251286",
    "name": "Savda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8815,
    "lng": 73.39189999999999
  },
  {
    "id": "city-277413",
    "name": "Shendurni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6195,
    "lng": 74.6379
  },
  {
    "id": "city-276273",
    "name": "Varangaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7855,
    "lng": 75.9039
  },
  {
    "id": "city-251284",
    "name": "Yawal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8915,
    "lng": 73.7019
  },
  {
    "id": "city-251424",
    "name": "Ambad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4895,
    "lng": 75.83189999999999
  },
  {
    "id": "city-276369",
    "name": "Badnapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6895,
    "lng": 74.91189999999999
  },
  {
    "id": "city-251422",
    "name": "Bhokardan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1715,
    "lng": 75.19789999999999
  },
  {
    "id": "city-276370",
    "name": "Ghansawangi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.555500000000002,
    "lng": 76.0219
  },
  {
    "id": "city-276372",
    "name": "Jafrabad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8695,
    "lng": 75.7559
  },
  {
    "id": "city-251423",
    "name": "Jalna",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9035,
    "lng": 74.0739
  },
  {
    "id": "city-276371",
    "name": "Mantha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1015,
    "lng": 73.0919
  },
  {
    "id": "city-251425",
    "name": "Partur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1755,
    "lng": 75.38589999999999
  },
  {
    "id": "city-251630",
    "name": "Ajara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8695,
    "lng": 75.61189999999999
  },
  {
    "id": "city-290433",
    "name": "Chandgad.",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8755,
    "lng": 74.34989999999999
  },
  {
    "id": "city-251631",
    "name": "Gadhinglaj",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.697499999999998,
    "lng": 75.6079
  },
  {
    "id": "city-290434",
    "name": "Hatkanangale.",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1455,
    "lng": 74.6159
  },
  {
    "id": "city-276296",
    "name": "Hupari",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7135,
    "lng": 74.65589999999999
  },
  {
    "id": "city-251619",
    "name": "Ichalkaranji",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2695,
    "lng": 73.56389999999999
  },
  {
    "id": "city-251621",
    "name": "Jaysingpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7435,
    "lng": 73.6019
  },
  {
    "id": "city-251628",
    "name": "Kagal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5515,
    "lng": 74.16189999999999
  },
  {
    "id": "city-251625",
    "name": "Kolhapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3995,
    "lng": 74.67389999999999
  },
  {
    "id": "city-251622",
    "name": "Kurundvad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4435,
    "lng": 74.0779
  },
  {
    "id": "city-251614",
    "name": "Malkapur-Kolhapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.7715,
    "lng": 73.1259
  },
  {
    "id": "city-251629",
    "name": "Murgud",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.0955,
    "lng": 73.90589999999999
  },
  {
    "id": "city-251615",
    "name": "Panhala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4135,
    "lng": 75.92389999999999
  },
  {
    "id": "city-276635",
    "name": "Shirol",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9095,
    "lng": 74.5479
  },
  {
    "id": "city-251616",
    "name": "Vadgaon Kasba",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1635,
    "lng": 73.6459
  },
  {
    "id": "city-251562",
    "name": "Ahmadpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8795,
    "lng": 75.0259
  },
  {
    "id": "city-251563",
    "name": "Ausa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7795,
    "lng": 74.8219
  },
  {
    "id": "city-276375",
    "name": "Chakur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9435,
    "lng": 73.0259
  },
  {
    "id": "city-276377",
    "name": "Deoni (Bk)",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.0215,
    "lng": 73.69189999999999
  },
  {
    "id": "city-276373",
    "name": "Jalkot",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2055,
    "lng": 73.9079
  },
  {
    "id": "city-251561",
    "name": "Latur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8315,
    "lng": 73.8419
  },
  {
    "id": "city-251564",
    "name": "Nilanga",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6235,
    "lng": 75.9459
  },
  {
    "id": "city-276376",
    "name": "Renapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1015,
    "lng": 74.3159
  },
  {
    "id": "city-276374",
    "name": "Shirur-Anantpal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9015,
    "lng": 75.15589999999999
  },
  {
    "id": "city-251565",
    "name": "Udgir",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2255,
    "lng": 74.0559
  },
  {
    "id": "city-251488",
    "name": "Greater Mumbai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8775,
    "lng": 75.63589999999999
  },
  {
    "id": "city-251488",
    "name": "Greater Mumbai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8775,
    "lng": 75.63589999999999
  },
  {
    "id": "city-301085",
    "name": "Bahadura Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6915,
    "lng": 75.9099
  },
  {
    "id": "city-301078",
    "name": "Besa Pipla Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6935,
    "lng": 73.1959
  },
  {
    "id": "city-263363",
    "name": "Bhiwapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5195,
    "lng": 72.7619
  },
  {
    "id": "city-303126",
    "name": "Bidgaon Tarodi Khurd Pandhurna",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4875,
    "lng": 76.4819
  },
  {
    "id": "city-277411",
    "name": "Butibori",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.639499999999998,
    "lng": 75.2179
  },
  {
    "id": "city-303127",
    "name": "Digdoh Devi Municipal Council",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5835,
    "lng": 74.4819
  },
  {
    "id": "city-303128",
    "name": "Godhani Railway",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9055,
    "lng": 74.91189999999999
  },
  {
    "id": "city-263362",
    "name": "Hingna",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3135,
    "lng": 74.2559
  },
  {
    "id": "city-251342",
    "name": "Kalameshwar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4395,
    "lng": 74.36189999999999
  },
  {
    "id": "city-251356",
    "name": "Kamptee",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9015,
    "lng": 76.6439
  },
  {
    "id": "city-301086",
    "name": "Kandri Kanhan Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.4635,
    "lng": 74.72189999999999
  },
  {
    "id": "city-251350",
    "name": "Kanhan - Pipri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4555,
    "lng": 74.4099
  },
  {
    "id": "city-251341",
    "name": "Katol",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4055,
    "lng": 73.63589999999999
  },
  {
    "id": "city-251345",
    "name": "Khapa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.0015,
    "lng": 74.11189999999999
  },
  {
    "id": "city-303129",
    "name": "Kondhali",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5035,
    "lng": 73.89789999999999
  },
  {
    "id": "city-263364",
    "name": "Kuhi Nagar Parishad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6715,
    "lng": 73.6579
  },
  {
    "id": "city-251358",
    "name": "Mahadula",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1175,
    "lng": 75.2999
  },
  {
    "id": "city-251343",
    "name": "Mohpa",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6135,
    "lng": 73.0839
  },
  {
    "id": "city-259672",
    "name": "Mouda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8555,
    "lng": 74.5859
  },
  {
    "id": "city-251339",
    "name": "Mowad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5195,
    "lng": 74.1699
  },
  {
    "id": "city-303130",
    "name": "NIldoh",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.927500000000002,
    "lng": 73.69789999999999
  },
  {
    "id": "city-251362",
    "name": "Nagpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4815,
    "lng": 72.8719
  },
  {
    "id": "city-251340",
    "name": "Narkhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6295,
    "lng": 75.3159
  },
  {
    "id": "city-276305",
    "name": "Parshivni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2035,
    "lng": 75.37389999999999
  },
  {
    "id": "city-251353",
    "name": "Ramtek",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.863500000000002,
    "lng": 73.1219
  },
  {
    "id": "city-251344",
    "name": "Savner",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8855,
    "lng": 72.8039
  },
  {
    "id": "city-251366",
    "name": "Umred",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3295,
    "lng": 74.2799
  },
  {
    "id": "city-251359",
    "name": "Wadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2295,
    "lng": 75.7719
  },
  {
    "id": "city-251363",
    "name": "Wanadongri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5675,
    "lng": 73.9459
  },
  {
    "id": "city-303131",
    "name": "Yerkheda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5735,
    "lng": 73.5799
  },
  {
    "id": "city-258020",
    "name": "Ardhapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1455,
    "lng": 75.2719
  },
  {
    "id": "city-259697",
    "name": "Bhokar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.549500000000002,
    "lng": 76.4039
  },
  {
    "id": "city-251406",
    "name": "Biloli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1975,
    "lng": 76.4919
  },
  {
    "id": "city-251410",
    "name": "Deglur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5335,
    "lng": 73.3159
  },
  {
    "id": "city-251404",
    "name": "Dharmabad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4795,
    "lng": 73.82589999999999
  },
  {
    "id": "city-251399",
    "name": "Hadgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3195,
    "lng": 72.84989999999999
  },
  {
    "id": "city-276606",
    "name": "Himayatnagar Nagarpanchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2195,
    "lng": 73.5419
  },
  {
    "id": "city-251408",
    "name": "Kandhar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6735,
    "lng": 76.57589999999999
  },
  {
    "id": "city-251398",
    "name": "Kinwat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2035,
    "lng": 75.8459
  },
  {
    "id": "city-251405",
    "name": "Kundalwadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7955,
    "lng": 75.98989999999999
  },
  {
    "id": "city-251407",
    "name": "Loha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9675,
    "lng": 75.6499
  },
  {
    "id": "city-258024",
    "name": "Mahur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8095,
    "lng": 73.1599
  },
  {
    "id": "city-251402",
    "name": "Mudkhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7195,
    "lng": 75.28989999999999
  },
  {
    "id": "city-251409",
    "name": "Mukhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9515,
    "lng": 73.44189999999999
  },
  {
    "id": "city-276623",
    "name": "Naigaon (Khairgaon)",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6115,
    "lng": 74.6939
  },
  {
    "id": "city-251401",
    "name": "Nanded-Waghala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6675,
    "lng": 72.7179
  },
  {
    "id": "city-251403",
    "name": "Peth Umri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3875,
    "lng": 74.6699
  },
  {
    "id": "city-276345",
    "name": "Dhadgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3355,
    "lng": 74.7939
  },
  {
    "id": "city-251278",
    "name": "Nandurbar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6335,
    "lng": 73.8879
  },
  {
    "id": "city-251279",
    "name": "Nawapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4155,
    "lng": 74.0899
  },
  {
    "id": "city-251277",
    "name": "Shahade",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9875,
    "lng": 74.6379
  },
  {
    "id": "city-251275",
    "name": "Talode",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2015,
    "lng": 76.59989999999999
  },
  {
    "id": "city-251444",
    "name": "Bhagur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9535,
    "lng": 75.9279
  },
  {
    "id": "city-276281",
    "name": "Chandwad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3275,
    "lng": 74.2979
  },
  {
    "id": "city-276277",
    "name": "Deola",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6215,
    "lng": 75.92389999999999
  },
  {
    "id": "city-276276",
    "name": "Dindori",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6375,
    "lng": 76.56389999999999
  },
  {
    "id": "city-251445",
    "name": "Igatpuri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6655,
    "lng": 73.98389999999999
  },
  {
    "id": "city-276278",
    "name": "Kalwan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6915,
    "lng": 74.9739
  },
  {
    "id": "city-251438",
    "name": "Malegaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0115,
    "lng": 73.4219
  },
  {
    "id": "city-251440",
    "name": "Manmad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2195,
    "lng": 72.7499
  },
  {
    "id": "city-251439",
    "name": "Nandgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2435,
    "lng": 72.91789999999999
  },
  {
    "id": "city-251442",
    "name": "Nashik",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3315,
    "lng": 73.22189999999999
  },
  {
    "id": "city-276279",
    "name": "Niphad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4115,
    "lng": 74.7019
  },
  {
    "id": "city-276280",
    "name": "Peth",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.8335,
    "lng": 75.49589999999999
  },
  {
    "id": "city-303075",
    "name": "Pimpalgaon Baswant",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2955,
    "lng": 73.69789999999999
  },
  {
    "id": "city-251435",
    "name": "Satana",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2595,
    "lng": 74.39789999999999
  },
  {
    "id": "city-251447",
    "name": "Sinnar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3175,
    "lng": 73.1959
  },
  {
    "id": "city-251434",
    "name": "Surgana",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6575,
    "lng": 73.6319
  },
  {
    "id": "city-251441",
    "name": "Trimbak",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3635,
    "lng": 75.55789999999999
  },
  {
    "id": "city-251450",
    "name": "Yevla",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9575,
    "lng": 72.7479
  },
  {
    "id": "city-251451",
    "name": "Dahanu",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3775,
    "lng": 74.4799
  },
  {
    "id": "city-251453",
    "name": "Jawhar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9695,
    "lng": 73.5919
  },
  {
    "id": "city-276317",
    "name": "Mokhada",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9335,
    "lng": 73.5159
  },
  {
    "id": "city-251460",
    "name": "Palghar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5535,
    "lng": 75.26389999999999
  },
  {
    "id": "city-276315",
    "name": "Talasari",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9175,
    "lng": 73.4679
  },
  {
    "id": "city-251463",
    "name": "Vasai-Virar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1895,
    "lng": 74.81989999999999
  },
  {
    "id": "city-276316",
    "name": "Vikramgad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1515,
    "lng": 74.4339
  },
  {
    "id": "city-276318",
    "name": "Wada",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2135,
    "lng": 75.2759
  },
  {
    "id": "city-251420",
    "name": "Gangakhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0835,
    "lng": 73.42989999999999
  },
  {
    "id": "city-251415",
    "name": "Jintur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3715,
    "lng": 76.0539
  },
  {
    "id": "city-251417",
    "name": "Manwath",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5675,
    "lng": 75.9459
  },
  {
    "id": "city-276297",
    "name": "Palam",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3735,
    "lng": 73.6439
  },
  {
    "id": "city-251416",
    "name": "Parbhani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6255,
    "lng": 72.7199
  },
  {
    "id": "city-251418",
    "name": "Pathri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0715,
    "lng": 76.16189999999999
  },
  {
    "id": "city-251421",
    "name": "Purna",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3275,
    "lng": 74.2179
  },
  {
    "id": "city-251414",
    "name": "Sailu",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4315,
    "lng": 73.44189999999999
  },
  {
    "id": "city-251419",
    "name": "Sonpeth",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9895,
    "lng": 75.1079
  },
  {
    "id": "city-251521",
    "name": "Alandi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2015,
    "lng": 75.6159
  },
  {
    "id": "city-251536",
    "name": "Baramati",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4455,
    "lng": 74.5719
  },
  {
    "id": "city-251535",
    "name": "Bhor",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1615,
    "lng": 76.6639
  },
  {
    "id": "city-251520",
    "name": "Chakan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6955,
    "lng": 74.33789999999999
  },
  {
    "id": "city-251531",
    "name": "Daund",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9555,
    "lng": 75.27789999999999
  },
  {
    "id": "city-298888",
    "name": "Dehu",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1315,
    "lng": 74.73389999999999
  },
  {
    "id": "city-303134",
    "name": "Fursungi Uruli Devachi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9595,
    "lng": 72.7299
  },
  {
    "id": "city-251537",
    "name": "Indapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3255,
    "lng": 76.7079
  },
  {
    "id": "city-251533",
    "name": "Jejuri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5935,
    "lng": 73.93589999999999
  },
  {
    "id": "city-251516",
    "name": "Junnar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1035,
    "lng": 75.74589999999999
  },
  {
    "id": "city-251526",
    "name": "Lonavala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5875,
    "lng": 74.7499
  },
  {
    "id": "city-300394",
    "name": "Malegaon Budruk",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3615,
    "lng": 74.59989999999999
  },
  {
    "id": "city-300391",
    "name": "Manchar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2235,
    "lng": 76.2819
  },
  {
    "id": "city-251528",
    "name": "Pimpri Chinchwad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6195,
    "lng": 74.34989999999999
  },
  {
    "id": "city-251530",
    "name": "Pune",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2075,
    "lng": 75.0899
  },
  {
    "id": "city-296912",
    "name": "Rajgurunagar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.1455,
    "lng": 75.0479
  },
  {
    "id": "city-251532",
    "name": "Sasvad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.2395,
    "lng": 73.77789999999999
  },
  {
    "id": "city-251518",
    "name": "Shirur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2935,
    "lng": 74.4519
  },
  {
    "id": "city-251522",
    "name": "Talegaon Dabhade",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6195,
    "lng": 75.53389999999999
  },
  {
    "id": "city-276637",
    "name": "Vadgaon Mawal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8955,
    "lng": 73.33789999999999
  },
  {
    "id": "city-277475",
    "name": "Wadgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9735,
    "lng": 75.3479
  },
  {
    "id": "city-251503",
    "name": "Alibag",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6035,
    "lng": 75.0779
  },
  {
    "id": "city-251498",
    "name": "Karjat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2095,
    "lng": 75.0319
  },
  {
    "id": "city-276267",
    "name": "Khalapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3035,
    "lng": 75.7619
  },
  {
    "id": "city-251501",
    "name": "Khopoli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9315,
    "lng": 73.3899
  },
  {
    "id": "city-251513",
    "name": "Mahad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5415,
    "lng": 73.8519
  },
  {
    "id": "city-276268",
    "name": "Mangaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9575,
    "lng": 76.0359
  },
  {
    "id": "city-251497",
    "name": "Matheran",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1955,
    "lng": 73.94189999999999
  },
  {
    "id": "city-251512",
    "name": "Mhasla",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1555,
    "lng": 73.7659
  },
  {
    "id": "city-251504",
    "name": "Murud",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6415,
    "lng": 72.9519
  },
  {
    "id": "city-300027",
    "name": "Pali",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6515,
    "lng": 75.8539
  },
  {
    "id": "city-251492",
    "name": "Panvel",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6875,
    "lng": 75.25789999999999
  },
  {
    "id": "city-251502",
    "name": "Pen",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9935,
    "lng": 76.4559
  },
  {
    "id": "city-276636",
    "name": "Poladpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.0175,
    "lng": 74.83189999999999
  },
  {
    "id": "city-251506",
    "name": "Roha Ashtami",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.7935,
    "lng": 74.7679
  },
  {
    "id": "city-251511",
    "name": "Shrivardhan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.863500000000002,
    "lng": 75.87389999999999
  },
  {
    "id": "city-276270",
    "name": "Tala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9635,
    "lng": 75.5259
  },
  {
    "id": "city-251491",
    "name": "Uran",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5635,
    "lng": 75.1259
  },
  {
    "id": "city-251602",
    "name": "Chiplun",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.177500000000002,
    "lng": 75.44789999999999
  },
  {
    "id": "city-251599",
    "name": "Dapoli Camp",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2795,
    "lng": 74.7299
  },
  {
    "id": "city-259684",
    "name": "Devrukh",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0095,
    "lng": 76.6879
  },
  {
    "id": "city-251604",
    "name": "Guhagar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9375,
    "lng": 72.8399
  },
  {
    "id": "city-251601",
    "name": "Khed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7515,
    "lng": 75.95389999999999
  },
  {
    "id": "city-251607",
    "name": "Lanja",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5835,
    "lng": 74.1539
  },
  {
    "id": "city-276295",
    "name": "Mandangad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9735,
    "lng": 73.7319
  },
  {
    "id": "city-251608",
    "name": "Rajapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.7255,
    "lng": 76.25189999999999
  },
  {
    "id": "city-251605",
    "name": "Ratnagiri",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3695,
    "lng": 72.80789999999999
  },
  {
    "id": "city-251634",
    "name": "Ashta",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6855,
    "lng": 75.9079
  },
  {
    "id": "city-300410",
    "name": "Atpadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2815,
    "lng": 75.0959
  },
  {
    "id": "city-259699",
    "name": "Jath",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6535,
    "lng": 74.9159
  },
  {
    "id": "city-290358",
    "name": "Kadegaon.",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.8595,
    "lng": 73.3419
  },
  {
    "id": "city-276346",
    "name": "Kavthemahankal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4595,
    "lng": 74.5739
  },
  {
    "id": "city-276348",
    "name": "Khanapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3875,
    "lng": 76.3659
  },
  {
    "id": "city-276350",
    "name": "Palus",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6255,
    "lng": 74.4559
  },
  {
    "id": "city-251639",
    "name": "Sangli-Miraj Kupwad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.4355,
    "lng": 76.4459
  },
  {
    "id": "city-276349",
    "name": "Shirala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6315,
    "lng": 74.6019
  },
  {
    "id": "city-251636",
    "name": "Tasgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1095,
    "lng": 74.45989999999999
  },
  {
    "id": "city-251633",
    "name": "Uran Islampur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6735,
    "lng": 73.4559
  },
  {
    "id": "city-251635",
    "name": "Vita",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9995,
    "lng": 75.64189999999999
  },
  {
    "id": "city-276417",
    "name": "Dahiwadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9295,
    "lng": 72.95989999999999
  },
  {
    "id": "city-251598",
    "name": "Karad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6775,
    "lng": 73.0679
  },
  {
    "id": "city-276383",
    "name": "Khandala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7115,
    "lng": 75.4099
  },
  {
    "id": "city-276381",
    "name": "Koregaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3675,
    "lng": 74.0899
  },
  {
    "id": "city-276414",
    "name": "Lonand",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2475,
    "lng": 76.20989999999999
  },
  {
    "id": "city-251584",
    "name": "Mahabaleshwar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8435,
    "lng": 74.7659
  },
  {
    "id": "city-251314",
    "name": "Malkapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9815,
    "lng": 76.4919
  },
  {
    "id": "city-276415",
    "name": "Medha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6095,
    "lng": 72.95989999999999
  },
  {
    "id": "city-251589",
    "name": "Mhaswad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.9055,
    "lng": 74.83189999999999
  },
  {
    "id": "city-251585",
    "name": "Panchgani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9895,
    "lng": 76.5559
  },
  {
    "id": "city-251596",
    "name": "Patan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7515,
    "lng": 74.36189999999999
  },
  {
    "id": "city-251588",
    "name": "Phaltan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1715,
    "lng": 74.2379
  },
  {
    "id": "city-251590",
    "name": "Rahimatpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2095,
    "lng": 75.9679
  },
  {
    "id": "city-251593",
    "name": "Satara",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5075,
    "lng": 74.0859
  },
  {
    "id": "city-276416",
    "name": "Vaduj",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.4835,
    "lng": 73.0539
  },
  {
    "id": "city-251586",
    "name": "Wai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1895,
    "lng": 75.5319
  },
  {
    "id": "city-276321",
    "name": "Devgad-Jamsande",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.9415,
    "lng": 74.5799
  },
  {
    "id": "city-251609",
    "name": "Kankavli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7935,
    "lng": 76.11189999999999
  },
  {
    "id": "city-263884",
    "name": "Kasai Dodamarg",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6875,
    "lng": 75.4579
  },
  {
    "id": "city-251612",
    "name": "Kudal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4255,
    "lng": 74.2559
  },
  {
    "id": "city-251610",
    "name": "Malwan",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2955,
    "lng": 73.10589999999999
  },
  {
    "id": "city-251613",
    "name": "Sawantwadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9295,
    "lng": 74.5919
  },
  {
    "id": "city-263834",
    "name": "Vabhave Vaibhavwadi Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2575,
    "lng": 74.00789999999999
  },
  {
    "id": "city-251611",
    "name": "Vengurla",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.8275,
    "lng": 75.1899
  },
  {
    "id": "city-251581",
    "name": "Akkalkot",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0395,
    "lng": 72.7379
  },
  {
    "id": "city-300383",
    "name": "Akluj",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7975,
    "lng": 76.37989999999999
  },
  {
    "id": "city-300382",
    "name": "Angar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.7095,
    "lng": 75.6519
  },
  {
    "id": "city-251576",
    "name": "Barshi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7935,
    "lng": 74.9679
  },
  {
    "id": "city-251583",
    "name": "Dudhani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0135,
    "lng": 75.0359
  },
  {
    "id": "city-251574",
    "name": "Karmala",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2735,
    "lng": 76.1759
  },
  {
    "id": "city-251575",
    "name": "Kurduvadi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9135,
    "lng": 75.0159
  },
  {
    "id": "city-276302",
    "name": "Madha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.2815,
    "lng": 72.7919
  },
  {
    "id": "city-298893",
    "name": "Mahalung Shripur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1835,
    "lng": 73.89789999999999
  },
  {
    "id": "city-251582",
    "name": "Maindargi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.8595,
    "lng": 74.60589999999999
  },
  {
    "id": "city-276303",
    "name": "Malshiras",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.3355,
    "lng": 72.87389999999999
  },
  {
    "id": "city-251580",
    "name": "Mangalvedhe",
    "state": "Maharashtra",
    "type": "City",
    "lat": 16.8035,
    "lng": 73.0779
  },
  {
    "id": "city-276301",
    "name": "Mohol",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5735,
    "lng": 73.84389999999999
  },
  {
    "id": "city-300384",
    "name": "Natepute",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0675,
    "lng": 74.8699
  },
  {
    "id": "city-297006",
    "name": "Pandharpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5815,
    "lng": 73.97189999999999
  },
  {
    "id": "city-251579",
    "name": "Sangole",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2415,
    "lng": 76.6959
  },
  {
    "id": "city-251577",
    "name": "Solapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.3995,
    "lng": 74.8179
  },
  {
    "id": "city-300385",
    "name": "Vairag",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6435,
    "lng": 75.30189999999999
  },
  {
    "id": "city-251485",
    "name": "Ambarnath",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.5075,
    "lng": 72.94189999999999
  },
  {
    "id": "city-251486",
    "name": "Badlapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6055,
    "lng": 74.30789999999999
  },
  {
    "id": "city-251477",
    "name": "Bhiwandi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6035,
    "lng": 74.3659
  },
  {
    "id": "city-251483",
    "name": "Kalyan-Dombivli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.6935,
    "lng": 73.9319
  },
  {
    "id": "city-251470",
    "name": "Mira-Bhayandar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.4635,
    "lng": 74.9859
  },
  {
    "id": "city-251487",
    "name": "Murbad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.2455,
    "lng": 73.5559
  },
  {
    "id": "city-251472",
    "name": "Navi Mumbai",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.5335,
    "lng": 74.6039
  },
  {
    "id": "city-276333",
    "name": "Shahapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7195,
    "lng": 74.9219
  },
  {
    "id": "city-251471",
    "name": "Thane",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2635,
    "lng": 73.23389999999999
  },
  {
    "id": "city-251484",
    "name": "Ulhasnagar",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.4115,
    "lng": 72.7419
  },
  {
    "id": "city-251332",
    "name": "Arvi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.2155,
    "lng": 76.33789999999999
  },
  {
    "id": "city-276380",
    "name": "Ashti (Wardha)",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0815,
    "lng": 73.5119
  },
  {
    "id": "city-251337",
    "name": "Deoli",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6375,
    "lng": 76.4199
  },
  {
    "id": "city-251338",
    "name": "Hinganghat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.5335,
    "lng": 76.4199
  },
  {
    "id": "city-276633",
    "name": "Karanja Wardha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9375,
    "lng": 72.7999
  },
  {
    "id": "city-251336",
    "name": "Pulgaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.9995,
    "lng": 75.72189999999999
  },
  {
    "id": "city-276379",
    "name": "Samudrapur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4635,
    "lng": 73.1459
  },
  {
    "id": "city-276378",
    "name": "Seloo",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.6995,
    "lng": 73.7499
  },
  {
    "id": "city-251333",
    "name": "Sindi",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1775,
    "lng": 73.5679
  },
  {
    "id": "city-251334",
    "name": "Wardha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.6975,
    "lng": 74.3839
  },
  {
    "id": "city-251318",
    "name": "Karanja",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.1515,
    "lng": 76.3939
  },
  {
    "id": "city-276293",
    "name": "Malegaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0115,
    "lng": 73.4219
  },
  {
    "id": "city-251317",
    "name": "Mangrulpir",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3215,
    "lng": 76.11189999999999
  },
  {
    "id": "city-276294",
    "name": "Manora",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.1115,
    "lng": 74.4019
  },
  {
    "id": "city-251320",
    "name": "Risod",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4175,
    "lng": 74.00789999999999
  },
  {
    "id": "city-251319",
    "name": "Washim",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0535,
    "lng": 74.4199
  },
  {
    "id": "city-259703",
    "name": "Arni",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.7195,
    "lng": 74.9619
  },
  {
    "id": "city-272842",
    "name": "Babhulgaon Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3815,
    "lng": 76.07589999999999
  },
  {
    "id": "city-251389",
    "name": "Darwha",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.0695,
    "lng": 72.9319
  },
  {
    "id": "city-290430",
    "name": "Dhanki",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.3735,
    "lng": 73.35589999999999
  },
  {
    "id": "city-251390",
    "name": "Digras",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.9955,
    "lng": 73.6379
  },
  {
    "id": "city-251394",
    "name": "Ghatanji",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5995,
    "lng": 75.8339
  },
  {
    "id": "city-266073",
    "name": "Kalamb Nagar Panchayat",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.0275,
    "lng": 76.40589999999999
  },
  {
    "id": "city-276309",
    "name": "Mahagaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.6355,
    "lng": 75.3579
  },
  {
    "id": "city-276310",
    "name": "Maregaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8235,
    "lng": 75.00189999999999
  },
  {
    "id": "city-259704",
    "name": "Ner Nababpur",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.0035,
    "lng": 75.9099
  },
  {
    "id": "city-251395",
    "name": "Pandharkawda",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.7515,
    "lng": 74.6899
  },
  {
    "id": "city-251391",
    "name": "Pusad",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.4495,
    "lng": 72.9999
  },
  {
    "id": "city-276308",
    "name": "Ralegaon",
    "state": "Maharashtra",
    "type": "City",
    "lat": 20.1775,
    "lng": 73.9759
  },
  {
    "id": "city-251393",
    "name": "Umarkhed",
    "state": "Maharashtra",
    "type": "City",
    "lat": 17.5295,
    "lng": 74.9919
  },
  {
    "id": "city-251397",
    "name": "Wani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 19.8495,
    "lng": 74.9919
  },
  {
    "id": "city-251386",
    "name": "Yavatmal",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.7015,
    "lng": 73.99589999999999
  },
  {
    "id": "city-272845",
    "name": "Zari Zamani",
    "state": "Maharashtra",
    "type": "City",
    "lat": 18.3675,
    "lng": 73.1939
  },
  {
    "id": "city-276501",
    "name": "Bishnupur",
    "state": "Manipur",
    "type": "City",
    "lat": 24.307699999999997,
    "lng": 91.19030000000001
  },
  {
    "id": "city-276505",
    "name": "Kumbi",
    "state": "Manipur",
    "type": "City",
    "lat": 24.691699999999997,
    "lng": 92.4223
  },
  {
    "id": "city-276525",
    "name": "Kwakta",
    "state": "Manipur",
    "type": "City",
    "lat": 22.2137,
    "lng": 93.0763
  },
  {
    "id": "city-276514",
    "name": "Moirang",
    "state": "Manipur",
    "type": "City",
    "lat": 23.2137,
    "lng": 91.1163
  },
  {
    "id": "city-276515",
    "name": "Nambol",
    "state": "Manipur",
    "type": "City",
    "lat": 23.5937,
    "lng": 91.2643
  },
  {
    "id": "city-276530",
    "name": "Ningthoukhong",
    "state": "Manipur",
    "type": "City",
    "lat": 25.0337,
    "lng": 91.4723
  },
  {
    "id": "city-276506",
    "name": "Oinam",
    "state": "Manipur",
    "type": "City",
    "lat": 23.743699999999997,
    "lng": 91.0343
  },
  {
    "id": "dist-253",
    "name": "Chandel",
    "state": "Manipur",
    "type": "District",
    "lat": 23.217699999999997,
    "lng": 93.6083
  },
  {
    "id": "dist-254",
    "name": "Churachandpur",
    "state": "Manipur",
    "type": "District",
    "lat": 22.2757,
    "lng": 91.8943
  },
  {
    "id": "city-276527",
    "name": "Andro",
    "state": "Manipur",
    "type": "City",
    "lat": 24.903699999999997,
    "lng": 93.58630000000001
  },
  {
    "id": "city-276547",
    "name": "Imphal",
    "state": "Manipur",
    "type": "City",
    "lat": 21.9977,
    "lng": 92.3803
  },
  {
    "id": "city-276508",
    "name": "Lamlai",
    "state": "Manipur",
    "type": "City",
    "lat": 23.3357,
    "lng": 93.8583
  },
  {
    "id": "city-276547",
    "name": "Imphal",
    "state": "Manipur",
    "type": "City",
    "lat": 21.9977,
    "lng": 92.3803
  },
  {
    "id": "city-276545",
    "name": "Lamsang",
    "state": "Manipur",
    "type": "City",
    "lat": 23.9657,
    "lng": 91.4043
  },
  {
    "id": "city-276548",
    "name": "Lilong (Imphal West)",
    "state": "Manipur",
    "type": "City",
    "lat": 24.915699999999998,
    "lng": 91.8143
  },
  {
    "id": "city-276552",
    "name": "Mayang Imphal",
    "state": "Manipur",
    "type": "City",
    "lat": 25.4437,
    "lng": 92.1823
  },
  {
    "id": "city-276515",
    "name": "Nambol",
    "state": "Manipur",
    "type": "City",
    "lat": 23.5937,
    "lng": 91.2643
  },
  {
    "id": "city-276551",
    "name": "Samourou",
    "state": "Manipur",
    "type": "City",
    "lat": 25.3177,
    "lng": 91.5403
  },
  {
    "id": "city-276553",
    "name": "Sekmai",
    "state": "Manipur",
    "type": "City",
    "lat": 22.3757,
    "lng": 90.9143
  },
  {
    "id": "city-276550",
    "name": "Thongkhong Laxmi",
    "state": "Manipur",
    "type": "City",
    "lat": 21.7077,
    "lng": 93.6943
  },
  {
    "id": "city-276549",
    "name": "Wangoi",
    "state": "Manipur",
    "type": "City",
    "lat": 23.4977,
    "lng": 91.1043
  },
  {
    "id": "city-276503",
    "name": "Jiribam",
    "state": "Manipur",
    "type": "City",
    "lat": 24.1757,
    "lng": 92.4263
  },
  {
    "id": "city-276500",
    "name": "Kakching",
    "state": "Manipur",
    "type": "City",
    "lat": 24.671699999999998,
    "lng": 92.2503
  },
  {
    "id": "city-276536",
    "name": "Kakching Khunou",
    "state": "Manipur",
    "type": "City",
    "lat": 22.0077,
    "lng": 91.5863
  },
  {
    "id": "city-276510",
    "name": "Sugunu",
    "state": "Manipur",
    "type": "City",
    "lat": 22.9257,
    "lng": 91.96430000000001
  },
  {
    "id": "dist-717",
    "name": "Kamjong",
    "state": "Manipur",
    "type": "District",
    "lat": 25.273699999999998,
    "lng": 94.0963
  },
  {
    "id": "dist-712",
    "name": "Kangpokpi",
    "state": "Manipur",
    "type": "District",
    "lat": 24.8917,
    "lng": 93.0703
  },
  {
    "id": "dist-714",
    "name": "Noney",
    "state": "Manipur",
    "type": "District",
    "lat": 24.4657,
    "lng": 91.4163
  },
  {
    "id": "dist-715",
    "name": "Pherzawl",
    "state": "Manipur",
    "type": "District",
    "lat": 22.6737,
    "lng": 92.9683
  },
  {
    "id": "dist-257",
    "name": "Senapati",
    "state": "Manipur",
    "type": "District",
    "lat": 25.589699999999997,
    "lng": 93.5243
  },
  {
    "id": "dist-258",
    "name": "Tamenglong",
    "state": "Manipur",
    "type": "District",
    "lat": 24.9317,
    "lng": 92.9023
  },
  {
    "id": "dist-716",
    "name": "Tengnoupal",
    "state": "Manipur",
    "type": "District",
    "lat": 24.9137,
    "lng": 93.9763
  },
  {
    "id": "city-276546",
    "name": "Heirok",
    "state": "Manipur",
    "type": "City",
    "lat": 22.371699999999997,
    "lng": 91.9743
  },
  {
    "id": "city-276502",
    "name": "Lilong (Thoubal)",
    "state": "Manipur",
    "type": "City",
    "lat": 23.0217,
    "lng": 93.3883
  },
  {
    "id": "city-276551",
    "name": "Samourou",
    "state": "Manipur",
    "type": "City",
    "lat": 25.3177,
    "lng": 91.5403
  },
  {
    "id": "city-276509",
    "name": "Shikhong Sekmai",
    "state": "Manipur",
    "type": "City",
    "lat": 25.145699999999998,
    "lng": 94.4963
  },
  {
    "id": "city-276498",
    "name": "Thoubal",
    "state": "Manipur",
    "type": "City",
    "lat": 24.165699999999998,
    "lng": 93.5243
  },
  {
    "id": "city-276511",
    "name": "Wangjing Lamding",
    "state": "Manipur",
    "type": "City",
    "lat": 23.441699999999997,
    "lng": 92.8563
  },
  {
    "id": "city-276513",
    "name": "Yairipok",
    "state": "Manipur",
    "type": "City",
    "lat": 22.6317,
    "lng": 93.5223
  },
  {
    "id": "dist-260",
    "name": "Ukhrul",
    "state": "Manipur",
    "type": "District",
    "lat": 23.3417,
    "lng": 94.8603
  },
  {
    "id": "city-249808",
    "name": "Williamnagar",
    "state": "Meghalaya",
    "type": "City",
    "lat": 23.335,
    "lng": 88.8422
  },
  {
    "id": "city-279714",
    "name": "Khliehriat",
    "state": "Meghalaya",
    "type": "City",
    "lat": 25.808999999999997,
    "lng": 89.6162
  },
  {
    "id": "city-249814",
    "name": "Shillong",
    "state": "Meghalaya",
    "type": "City",
    "lat": 24.043,
    "lng": 89.2382
  },
  {
    "id": "dist-740",
    "name": "Eastern West Khasi Hills",
    "state": "Meghalaya",
    "type": "District",
    "lat": 23.249,
    "lng": 92.0322
  },
  {
    "id": "city-249807",
    "name": "Resubelpara",
    "state": "Meghalaya",
    "type": "City",
    "lat": 26.122999999999998,
    "lng": 92.1662
  },
  {
    "id": "city-249812",
    "name": "Nongpoh",
    "state": "Meghalaya",
    "type": "City",
    "lat": 24.081,
    "lng": 91.0082
  },
  {
    "id": "city-249809",
    "name": "Baghmara",
    "state": "Meghalaya",
    "type": "City",
    "lat": 23.993,
    "lng": 90.20020000000001
  },
  {
    "id": "dist-663",
    "name": "South West Garo Hills",
    "state": "Meghalaya",
    "type": "District",
    "lat": 22.673,
    "lng": 88.5442
  },
  {
    "id": "city-282009",
    "name": "Mawkyrwat",
    "state": "Meghalaya",
    "type": "City",
    "lat": 24.997,
    "lng": 89.7082
  },
  {
    "id": "city-249806",
    "name": "Tura Municipal Board",
    "state": "Meghalaya",
    "type": "City",
    "lat": 24.403,
    "lng": 89.35820000000001
  },
  {
    "id": "city-249820",
    "name": "Jowai",
    "state": "Meghalaya",
    "type": "City",
    "lat": 26.119,
    "lng": 89.2262
  },
  {
    "id": "city-249811",
    "name": "Mairang",
    "state": "Meghalaya",
    "type": "City",
    "lat": 23.788999999999998,
    "lng": 91.28420000000001
  },
  {
    "id": "city-249810",
    "name": "Nongstoin",
    "state": "Meghalaya",
    "type": "City",
    "lat": 23.637,
    "lng": 91.38820000000001
  },
  {
    "id": "city-249770",
    "name": "Aizawl",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.2365,
    "lng": 92.1216
  },
  {
    "id": "city-277318",
    "name": "Aizawl Municipal Co-Operation",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.1485,
    "lng": 93.0096
  },
  {
    "id": "city-249768",
    "name": "Darlawn",
    "state": "Mizoram",
    "type": "City",
    "lat": 20.8705,
    "lng": 93.3916
  },
  {
    "id": "city-249769",
    "name": "Sairang",
    "state": "Mizoram",
    "type": "City",
    "lat": 21.0665,
    "lng": 93.69160000000001
  },
  {
    "id": "city-249773",
    "name": "Champhai",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.8625,
    "lng": 90.3036
  },
  {
    "id": "city-249781",
    "name": "Hnahthial",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.4345,
    "lng": 93.7716
  },
  {
    "id": "city-249774",
    "name": "Khawhai",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.6945,
    "lng": 91.4636
  },
  {
    "id": "city-249772",
    "name": "Khawzawl",
    "state": "Mizoram",
    "type": "City",
    "lat": 21.0105,
    "lng": 91.5076
  },
  {
    "id": "city-249765",
    "name": "Bairabi",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.5405,
    "lng": 90.9136
  },
  {
    "id": "city-249766",
    "name": "Kolasib",
    "state": "Mizoram",
    "type": "City",
    "lat": 24.0905,
    "lng": 93.1476
  },
  {
    "id": "city-249767",
    "name": "N.Kawnpui",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.7625,
    "lng": 93.71560000000001
  },
  {
    "id": "city-249764",
    "name": "Vairengte",
    "state": "Mizoram",
    "type": "City",
    "lat": 20.186500000000002,
    "lng": 93.3716
  },
  {
    "id": "city-306307",
    "name": "Lawngtlai",
    "state": "Mizoram",
    "type": "City",
    "lat": 21.1785,
    "lng": 92.9396
  },
  {
    "id": "city-249780",
    "name": "Lunglei",
    "state": "Mizoram",
    "type": "City",
    "lat": 20.5605,
    "lng": 91.3336
  },
  {
    "id": "city-249779",
    "name": "Tlabung",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.5425,
    "lng": 92.1196
  },
  {
    "id": "city-249763",
    "name": "Lengpui",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.0005,
    "lng": 92.98960000000001
  },
  {
    "id": "city-249762",
    "name": "Mamit",
    "state": "Mizoram",
    "type": "City",
    "lat": 24.0925,
    "lng": 91.3536
  },
  {
    "id": "city-249761",
    "name": "Zawlnuam",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.4345,
    "lng": 91.4436
  },
  {
    "id": "city-249771",
    "name": "Saitual",
    "state": "Mizoram",
    "type": "City",
    "lat": 21.8745,
    "lng": 92.73960000000001
  },
  {
    "id": "city-249775",
    "name": "Biate",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.8745,
    "lng": 92.1876
  },
  {
    "id": "city-249778",
    "name": "N.Vanlaiphai",
    "state": "Mizoram",
    "type": "City",
    "lat": 21.8625,
    "lng": 91.4076
  },
  {
    "id": "city-249776",
    "name": "Serchhip",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.5125,
    "lng": 92.04560000000001
  },
  {
    "id": "city-249777",
    "name": "Thenzawl",
    "state": "Mizoram",
    "type": "City",
    "lat": 23.0945,
    "lng": 92.2716
  },
  {
    "id": "city-249782",
    "name": "Saiha",
    "state": "Mizoram",
    "type": "City",
    "lat": 22.5565,
    "lng": 91.7376
  },
  {
    "id": "city-249721",
    "name": "Chumukedima Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.2464,
    "lng": 94.7144
  },
  {
    "id": "city-253213",
    "name": "Medziphema Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 27.0404,
    "lng": 92.44839999999999
  },
  {
    "id": "city-249720",
    "name": "Dimapur Municipal Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.5004,
    "lng": 91.7084
  },
  {
    "id": "city-276217",
    "name": "East Dimapur Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.1544,
    "lng": 95.12639999999999
  },
  {
    "id": "city-253202",
    "name": "Kiphire Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.1764,
    "lng": 92.2564
  },
  {
    "id": "city-276224",
    "name": "Pungro Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.4144,
    "lng": 93.5944
  },
  {
    "id": "city-299082",
    "name": "Seyochung Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 27.1144,
    "lng": 93.9264
  },
  {
    "id": "city-299088",
    "name": "Chiephobozou Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.0104,
    "lng": 92.3984
  },
  {
    "id": "city-249722",
    "name": "Kohima Municipal Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.9184,
    "lng": 95.5064
  },
  {
    "id": "city-253201",
    "name": "Longleng Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.2324,
    "lng": 91.8724
  },
  {
    "id": "city-299084",
    "name": "Tamlu Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 27.1464,
    "lng": 95.43039999999999
  },
  {
    "id": "city-276222",
    "name": "Meluri Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.9164,
    "lng": 94.4844
  },
  {
    "id": "city-253207",
    "name": "Changtongya Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.9704,
    "lng": 94.0544
  },
  {
    "id": "city-276221",
    "name": "Mangkolemba Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.2724,
    "lng": 94.0084
  },
  {
    "id": "city-249717",
    "name": "Mokokchung Municipal Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.0844,
    "lng": 93.6284
  },
  {
    "id": "city-253206",
    "name": "Tuli Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.0244,
    "lng": 92.01639999999999
  },
  {
    "id": "city-276216",
    "name": "Aboi Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.8944,
    "lng": 93.0664
  },
  {
    "id": "city-249715",
    "name": "Mon Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.1244,
    "lng": 93.8524
  },
  {
    "id": "city-253203",
    "name": "Naginimora Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 27.0504,
    "lng": 93.4944
  },
  {
    "id": "city-276227",
    "name": "Tizit Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.0924,
    "lng": 94.1644
  },
  {
    "id": "city-276228",
    "name": "Tobu Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.3364,
    "lng": 94.83239999999999
  },
  {
    "id": "city-299083",
    "name": "Niuland Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.4824,
    "lng": 93.2144
  },
  {
    "id": "city-276223",
    "name": "Noklak Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.636400000000002,
    "lng": 95.2124
  },
  {
    "id": "city-253205",
    "name": "Jalukie Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.8704,
    "lng": 93.7944
  },
  {
    "id": "city-253204",
    "name": "Peren Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.200400000000002,
    "lng": 91.6964
  },
  {
    "id": "city-276226",
    "name": "Tening Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.3784,
    "lng": 94.3344
  },
  {
    "id": "city-276220",
    "name": "Chozuba Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.5884,
    "lng": 93.05239999999999
  },
  {
    "id": "city-253210",
    "name": "Pfutsero Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.0364,
    "lng": 94.87639999999999
  },
  {
    "id": "city-249723",
    "name": "Phek Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.0004,
    "lng": 93.6164
  },
  {
    "id": "city-276225",
    "name": "Shamator Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.1664,
    "lng": 94.41839999999999
  },
  {
    "id": "city-253209",
    "name": "Tseminyu Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.4124,
    "lng": 93.79639999999999
  },
  {
    "id": "city-276218",
    "name": "Longkhim Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.9624,
    "lng": 91.87039999999999
  },
  {
    "id": "city-249716",
    "name": "Tuensang Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.2744,
    "lng": 93.68639999999999
  },
  {
    "id": "city-276219",
    "name": "Bhandari Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 26.0624,
    "lng": 95.4584
  },
  {
    "id": "city-249719",
    "name": "Wokha Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.8204,
    "lng": 93.1004
  },
  {
    "id": "city-299085",
    "name": "Aghunato Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.2264,
    "lng": 91.9904
  },
  {
    "id": "city-299086",
    "name": "Atoizu Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 24.828400000000002,
    "lng": 95.2684
  },
  {
    "id": "city-299087",
    "name": "Satakha Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 25.0024,
    "lng": 95.1104
  },
  {
    "id": "city-249718",
    "name": "Zunheboto Town Council",
    "state": "Nagaland",
    "type": "City",
    "lat": 23.4844,
    "lng": 94.05239999999999
  },
  {
    "id": "city-248140",
    "name": "Anugola",
    "state": "Odisha",
    "type": "City",
    "lat": 20.505699999999997,
    "lng": 83.9605
  },
  {
    "id": "city-248142",
    "name": "Athamallik",
    "state": "Odisha",
    "type": "City",
    "lat": 21.3157,
    "lng": 85.0705
  },
  {
    "id": "city-305563",
    "name": "Pallahara",
    "state": "Odisha",
    "type": "City",
    "lat": 18.703699999999998,
    "lng": 84.3865
  },
  {
    "id": "city-248141",
    "name": "Talcher",
    "state": "Odisha",
    "type": "City",
    "lat": 20.5297,
    "lng": 83.6645
  },
  {
    "id": "city-250555",
    "name": "Balangir",
    "state": "Odisha",
    "type": "City",
    "lat": 18.2837,
    "lng": 82.3265
  },
  {
    "id": "city-250552",
    "name": "Kantabanji",
    "state": "Odisha",
    "type": "City",
    "lat": 20.337699999999998,
    "lng": 83.7125
  },
  {
    "id": "city-305699",
    "name": "Loisingha",
    "state": "Odisha",
    "type": "City",
    "lat": 18.4117,
    "lng": 82.8865
  },
  {
    "id": "city-250554",
    "name": "Patnagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 20.043699999999998,
    "lng": 83.4945
  },
  {
    "id": "city-250553",
    "name": "Titlagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 19.9117,
    "lng": 85.6905
  },
  {
    "id": "city-263006",
    "name": "Tusura",
    "state": "Odisha",
    "type": "City",
    "lat": 18.7077,
    "lng": 85.4705
  },
  {
    "id": "city-250486",
    "name": "Baleshwar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.0217,
    "lng": 83.6125
  },
  {
    "id": "city-305571",
    "name": "Basta",
    "state": "Odisha",
    "type": "City",
    "lat": 20.5937,
    "lng": 84.2405
  },
  {
    "id": "city-250482",
    "name": "Jaleswar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.2017,
    "lng": 85.6405
  },
  {
    "id": "city-250484",
    "name": "Nilagiri",
    "state": "Odisha",
    "type": "City",
    "lat": 20.9777,
    "lng": 82.3685
  },
  {
    "id": "city-300314",
    "name": "Remuna",
    "state": "Odisha",
    "type": "City",
    "lat": 19.691699999999997,
    "lng": 83.9745
  },
  {
    "id": "city-305596",
    "name": "Simulia",
    "state": "Odisha",
    "type": "City",
    "lat": 19.0037,
    "lng": 85.3185
  },
  {
    "id": "city-250485",
    "name": "Soro",
    "state": "Odisha",
    "type": "City",
    "lat": 21.889699999999998,
    "lng": 84.4165
  },
  {
    "id": "city-259705",
    "name": "Attabira",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5157,
    "lng": 84.4545
  },
  {
    "id": "city-250447",
    "name": "Barapali",
    "state": "Odisha",
    "type": "City",
    "lat": 19.895699999999998,
    "lng": 83.7065
  },
  {
    "id": "city-250448",
    "name": "Bargarh",
    "state": "Odisha",
    "type": "City",
    "lat": 20.293699999999998,
    "lng": 83.0205
  },
  {
    "id": "city-276628",
    "name": "Bijepur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.2457,
    "lng": 84.9405
  },
  {
    "id": "city-250446",
    "name": "Padmapur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.267699999999998,
    "lng": 84.5825
  },
  {
    "id": "city-305572",
    "name": "Sohela",
    "state": "Odisha",
    "type": "City",
    "lat": 19.627699999999997,
    "lng": 83.9905
  },
  {
    "id": "city-250489",
    "name": "Basudebpur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.5217,
    "lng": 85.9285
  },
  {
    "id": "city-250487",
    "name": "Bhadrak",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5737,
    "lng": 82.1085
  },
  {
    "id": "city-276631",
    "name": "Chandabali",
    "state": "Odisha",
    "type": "City",
    "lat": 18.9657,
    "lng": 84.9565
  },
  {
    "id": "city-276632",
    "name": "Dhamanagar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.5197,
    "lng": 83.8665
  },
  {
    "id": "city-305573",
    "name": "Dhusuri",
    "state": "Odisha",
    "type": "City",
    "lat": 19.0917,
    "lng": 83.8225
  },
  {
    "id": "city-305594",
    "name": "Tihidi",
    "state": "Odisha",
    "type": "City",
    "lat": 18.8857,
    "lng": 84.9885
  },
  {
    "id": "city-250548",
    "name": "Boudhgarh",
    "state": "Odisha",
    "type": "City",
    "lat": 20.9197,
    "lng": 85.9785
  },
  {
    "id": "city-250457",
    "name": "Debagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 21.3917,
    "lng": 84.6105
  },
  {
    "id": "city-248059",
    "name": "Bhuban",
    "state": "Odisha",
    "type": "City",
    "lat": 21.935699999999997,
    "lng": 85.5545
  },
  {
    "id": "city-248060",
    "name": "Dhenkanal",
    "state": "Odisha",
    "type": "City",
    "lat": 21.3237,
    "lng": 82.7265
  },
  {
    "id": "city-305567",
    "name": "Gondia",
    "state": "Odisha",
    "type": "City",
    "lat": 19.979699999999998,
    "lng": 84.3265
  },
  {
    "id": "city-259680",
    "name": "Hindol",
    "state": "Odisha",
    "type": "City",
    "lat": 19.831699999999998,
    "lng": 83.4985
  },
  {
    "id": "city-248058",
    "name": "Kamakhyanagar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.299699999999998,
    "lng": 84.8225
  },
  {
    "id": "city-250545",
    "name": "Kasinagar",
    "state": "Odisha",
    "type": "City",
    "lat": 21.1697,
    "lng": 82.7685
  },
  {
    "id": "city-250544",
    "name": "Paralakhemundi",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8557,
    "lng": 83.8745
  },
  {
    "id": "city-250529",
    "name": "Asika",
    "state": "Odisha",
    "type": "City",
    "lat": 20.249699999999997,
    "lng": 85.5765
  },
  {
    "id": "city-250527",
    "name": "Bellaguntha",
    "state": "Odisha",
    "type": "City",
    "lat": 19.3497,
    "lng": 83.4525
  },
  {
    "id": "city-250543",
    "name": "Berhampur",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5357,
    "lng": 82.5625
  },
  {
    "id": "city-250526",
    "name": "Bhanjanagar",
    "state": "Odisha",
    "type": "City",
    "lat": 20.901699999999998,
    "lng": 83.1965
  },
  {
    "id": "city-250525",
    "name": "Buguda",
    "state": "Odisha",
    "type": "City",
    "lat": 20.011699999999998,
    "lng": 85.9105
  },
  {
    "id": "city-250537",
    "name": "Chhatrapur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.319699999999997,
    "lng": 83.6025
  },
  {
    "id": "city-250540",
    "name": "Chikiti",
    "state": "Odisha",
    "type": "City",
    "lat": 19.6297,
    "lng": 84.64450000000001
  },
  {
    "id": "city-250541",
    "name": "Digapahandi",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8757,
    "lng": 83.6785
  },
  {
    "id": "city-250538",
    "name": "Ganjam",
    "state": "Odisha",
    "type": "City",
    "lat": 20.4517,
    "lng": 84.9585
  },
  {
    "id": "city-250539",
    "name": "Gopalpur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8277,
    "lng": 83.3745
  },
  {
    "id": "city-250542",
    "name": "Hinjilicut",
    "state": "Odisha",
    "type": "City",
    "lat": 18.3537,
    "lng": 84.9445
  },
  {
    "id": "city-305697",
    "name": "Jagannathprasad",
    "state": "Odisha",
    "type": "City",
    "lat": 18.357699999999998,
    "lng": 82.7005
  },
  {
    "id": "city-250532",
    "name": "Kavisurjyanagar",
    "state": "Odisha",
    "type": "City",
    "lat": 20.0997,
    "lng": 82.1905
  },
  {
    "id": "city-250535",
    "name": "Khalikote",
    "state": "Odisha",
    "type": "City",
    "lat": 19.979699999999998,
    "lng": 85.51050000000001
  },
  {
    "id": "city-250534",
    "name": "Kodala",
    "state": "Odisha",
    "type": "City",
    "lat": 19.1957,
    "lng": 85.7825
  },
  {
    "id": "city-305653",
    "name": "Patrapur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.3097,
    "lng": 84.1085
  },
  {
    "id": "city-250533",
    "name": "Polasara",
    "state": "Odisha",
    "type": "City",
    "lat": 20.8977,
    "lng": 85.2965
  },
  {
    "id": "city-250531",
    "name": "Purusottampur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.345699999999997,
    "lng": 82.8565
  },
  {
    "id": "city-250536",
    "name": "Rambha",
    "state": "Odisha",
    "type": "City",
    "lat": 18.633699999999997,
    "lng": 83.1765
  },
  {
    "id": "city-250528",
    "name": "Surada",
    "state": "Odisha",
    "type": "City",
    "lat": 19.5157,
    "lng": 82.5185
  },
  {
    "id": "city-263336",
    "name": "Jagatsinghpur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.1097,
    "lng": 83.7485
  },
  {
    "id": "city-263324",
    "name": "Paradeep",
    "state": "Odisha",
    "type": "City",
    "lat": 20.5997,
    "lng": 83.0985
  },
  {
    "id": "city-305566",
    "name": "Chandikhol",
    "state": "Odisha",
    "type": "City",
    "lat": 19.185699999999997,
    "lng": 85.7765
  },
  {
    "id": "city-250503",
    "name": "Jajapur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.2137,
    "lng": 84.0525
  },
  {
    "id": "city-250502",
    "name": "Vyasanagar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.9137,
    "lng": 85.3445
  },
  {
    "id": "city-250450",
    "name": "Belpahar",
    "state": "Odisha",
    "type": "City",
    "lat": 20.2217,
    "lng": 85.6045
  },
  {
    "id": "city-250451",
    "name": "Brajarajnagar",
    "state": "Odisha",
    "type": "City",
    "lat": 19.0597,
    "lng": 84.0145
  },
  {
    "id": "city-250452",
    "name": "Jharsuguda",
    "state": "Odisha",
    "type": "City",
    "lat": 17.959699999999998,
    "lng": 84.8745
  },
  {
    "id": "city-250558",
    "name": "Bhawanipatna",
    "state": "Odisha",
    "type": "City",
    "lat": 18.203699999999998,
    "lng": 82.2945
  },
  {
    "id": "city-263009",
    "name": "Dharmagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8097,
    "lng": 86.0805
  },
  {
    "id": "city-305568",
    "name": "Jayapatna",
    "state": "Odisha",
    "type": "City",
    "lat": 18.5097,
    "lng": 83.4125
  },
  {
    "id": "city-250560",
    "name": "Junagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 19.2757,
    "lng": 83.9745
  },
  {
    "id": "city-250559",
    "name": "Kesinga",
    "state": "Odisha",
    "type": "City",
    "lat": 21.0717,
    "lng": 85.5065
  },
  {
    "id": "city-305655",
    "name": "Narla",
    "state": "Odisha",
    "type": "City",
    "lat": 20.6797,
    "lng": 82.3145
  },
  {
    "id": "city-263005",
    "name": "Baliguda",
    "state": "Odisha",
    "type": "City",
    "lat": 18.1097,
    "lng": 82.9325
  },
  {
    "id": "city-250547",
    "name": "G. Udayagiri",
    "state": "Odisha",
    "type": "City",
    "lat": 20.6117,
    "lng": 85.02250000000001
  },
  {
    "id": "city-250546",
    "name": "Phulabani",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5597,
    "lng": 85.8985
  },
  {
    "id": "city-250498",
    "name": "Athagad",
    "state": "Odisha",
    "type": "City",
    "lat": 21.2277,
    "lng": 85.7505
  },
  {
    "id": "city-305598",
    "name": "Badamba",
    "state": "Odisha",
    "type": "City",
    "lat": 20.2717,
    "lng": 82.3385
  },
  {
    "id": "city-250500",
    "name": "Banki",
    "state": "Odisha",
    "type": "City",
    "lat": 20.441699999999997,
    "lng": 85.52850000000001
  },
  {
    "id": "city-250494",
    "name": "Choudwar",
    "state": "Odisha",
    "type": "City",
    "lat": 20.0777,
    "lng": 83.9565
  },
  {
    "id": "city-250501",
    "name": "Cuttack",
    "state": "Odisha",
    "type": "City",
    "lat": 18.8297,
    "lng": 86.0685
  },
  {
    "id": "city-305569",
    "name": "Narasinghpur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.267699999999998,
    "lng": 85.0945
  },
  {
    "id": "city-305678",
    "name": "Salipur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.0277,
    "lng": 85.2465
  },
  {
    "id": "city-250491",
    "name": "Kendrapara",
    "state": "Odisha",
    "type": "City",
    "lat": 21.1177,
    "lng": 83.5245
  },
  {
    "id": "city-250490",
    "name": "Pattamundai",
    "state": "Odisha",
    "type": "City",
    "lat": 21.4837,
    "lng": 85.4625
  },
  {
    "id": "city-250476",
    "name": "Anandapur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.6997,
    "lng": 83.7505
  },
  {
    "id": "city-250469",
    "name": "Barbil",
    "state": "Odisha",
    "type": "City",
    "lat": 20.3877,
    "lng": 85.5665
  },
  {
    "id": "city-263000",
    "name": "Champua",
    "state": "Odisha",
    "type": "City",
    "lat": 17.9577,
    "lng": 84.8125
  },
  {
    "id": "city-250471",
    "name": "Joda",
    "state": "Odisha",
    "type": "City",
    "lat": 20.755699999999997,
    "lng": 85.2625
  },
  {
    "id": "city-250474",
    "name": "Kendujhar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.3917,
    "lng": 84.9385
  },
  {
    "id": "city-250517",
    "name": "Balugaon",
    "state": "Odisha",
    "type": "City",
    "lat": 18.8817,
    "lng": 82.8645
  },
  {
    "id": "city-250519",
    "name": "Banapur",
    "state": "Odisha",
    "type": "City",
    "lat": 21.6697,
    "lng": 83.6765
  },
  {
    "id": "city-250520",
    "name": "Bhubaneswar",
    "state": "Odisha",
    "type": "City",
    "lat": 18.7397,
    "lng": 83.3585
  },
  {
    "id": "city-250516",
    "name": "Jatani",
    "state": "Odisha",
    "type": "City",
    "lat": 19.7577,
    "lng": 83.2045
  },
  {
    "id": "city-250514",
    "name": "Khordha",
    "state": "Odisha",
    "type": "City",
    "lat": 20.889699999999998,
    "lng": 83.27250000000001
  },
  {
    "id": "city-305595",
    "name": "Tangi",
    "state": "Odisha",
    "type": "City",
    "lat": 20.9497,
    "lng": 82.6845
  },
  {
    "id": "city-305565",
    "name": "Borigumma",
    "state": "Odisha",
    "type": "City",
    "lat": 18.1897,
    "lng": 84.00450000000001
  },
  {
    "id": "city-250574",
    "name": "Jeypur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.1177,
    "lng": 83.3645
  },
  {
    "id": "city-250571",
    "name": "Koraput",
    "state": "Odisha",
    "type": "City",
    "lat": 21.1437,
    "lng": 84.5545
  },
  {
    "id": "city-250570",
    "name": "Kotpad",
    "state": "Odisha",
    "type": "City",
    "lat": 18.6617,
    "lng": 85.2285
  },
  {
    "id": "city-250573",
    "name": "Sunabeda",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8337,
    "lng": 83.78450000000001
  },
  {
    "id": "city-250576",
    "name": "Balimela",
    "state": "Odisha",
    "type": "City",
    "lat": 19.3457,
    "lng": 83.2485
  },
  {
    "id": "city-263345",
    "name": "Malkangiri",
    "state": "Odisha",
    "type": "City",
    "lat": 21.377699999999997,
    "lng": 85.8085
  },
  {
    "id": "city-305635",
    "name": "Bangiriposhi",
    "state": "Odisha",
    "type": "City",
    "lat": 19.8977,
    "lng": 84.4405
  },
  {
    "id": "city-250481",
    "name": "Baripada",
    "state": "Odisha",
    "type": "City",
    "lat": 19.7197,
    "lng": 82.2505
  },
  {
    "id": "city-305636",
    "name": "Betnoti",
    "state": "Odisha",
    "type": "City",
    "lat": 21.6937,
    "lng": 84.4205
  },
  {
    "id": "city-305710",
    "name": "Chitrada",
    "state": "Odisha",
    "type": "City",
    "lat": 21.2397,
    "lng": 82.5705
  },
  {
    "id": "city-305638",
    "name": "Jashipur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.4077,
    "lng": 83.8425
  },
  {
    "id": "city-305640",
    "name": "Kaptipada",
    "state": "Odisha",
    "type": "City",
    "lat": 19.5457,
    "lng": 82.4885
  },
  {
    "id": "city-250480",
    "name": "Karanjia",
    "state": "Odisha",
    "type": "City",
    "lat": 20.081699999999998,
    "lng": 85.63250000000001
  },
  {
    "id": "city-250478",
    "name": "Rairangpur",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5097,
    "lng": 85.90050000000001
  },
  {
    "id": "city-305642",
    "name": "Rasgobindpur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.2477,
    "lng": 82.1865
  },
  {
    "id": "city-250479",
    "name": "Udala",
    "state": "Odisha",
    "type": "City",
    "lat": 20.0457,
    "lng": 82.6605
  },
  {
    "id": "city-250569",
    "name": "Nabarangapur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.3797,
    "lng": 82.4865
  },
  {
    "id": "city-250567",
    "name": "Umarkote",
    "state": "Odisha",
    "type": "City",
    "lat": 19.1157,
    "lng": 84.3425
  },
  {
    "id": "city-262987",
    "name": "Dasapalla",
    "state": "Odisha",
    "type": "City",
    "lat": 21.8017,
    "lng": 82.1365
  },
  {
    "id": "city-250510",
    "name": "Khandapada",
    "state": "Odisha",
    "type": "City",
    "lat": 18.5217,
    "lng": 85.7045
  },
  {
    "id": "city-250512",
    "name": "Nayagarh",
    "state": "Odisha",
    "type": "City",
    "lat": 19.2217,
    "lng": 84.5885
  },
  {
    "id": "city-276434",
    "name": "Odogaon",
    "state": "Odisha",
    "type": "City",
    "lat": 21.8297,
    "lng": 84.5565
  },
  {
    "id": "city-262994",
    "name": "Ranapur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.0937,
    "lng": 84.8445
  },
  {
    "id": "city-250557",
    "name": "Khariar",
    "state": "Odisha",
    "type": "City",
    "lat": 21.511699999999998,
    "lng": 82.5545
  },
  {
    "id": "city-250556",
    "name": "Khariar Road",
    "state": "Odisha",
    "type": "City",
    "lat": 18.871699999999997,
    "lng": 85.5945
  },
  {
    "id": "city-259201",
    "name": "Nuapada",
    "state": "Odisha",
    "type": "City",
    "lat": 18.543699999999998,
    "lng": 84.4665
  },
  {
    "id": "city-250523",
    "name": "Konark",
    "state": "Odisha",
    "type": "City",
    "lat": 19.4077,
    "lng": 84.3545
  },
  {
    "id": "city-250522",
    "name": "Nimapada",
    "state": "Odisha",
    "type": "City",
    "lat": 21.2577,
    "lng": 83.0485
  },
  {
    "id": "city-250521",
    "name": "Pipili",
    "state": "Odisha",
    "type": "City",
    "lat": 18.8297,
    "lng": 85.8445
  },
  {
    "id": "city-250524",
    "name": "Puri",
    "state": "Odisha",
    "type": "City",
    "lat": 20.6637,
    "lng": 84.4105
  },
  {
    "id": "city-305564",
    "name": "Bissamcuttack",
    "state": "Odisha",
    "type": "City",
    "lat": 19.607699999999998,
    "lng": 84.8585
  },
  {
    "id": "city-250563",
    "name": "Gudari",
    "state": "Odisha",
    "type": "City",
    "lat": 21.2197,
    "lng": 84.76650000000001
  },
  {
    "id": "city-250564",
    "name": "Gunupur",
    "state": "Odisha",
    "type": "City",
    "lat": 21.5677,
    "lng": 83.5545
  },
  {
    "id": "city-250565",
    "name": "Rayagada",
    "state": "Odisha",
    "type": "City",
    "lat": 20.427699999999998,
    "lng": 82.1345
  },
  {
    "id": "city-305597",
    "name": "Bamra",
    "state": "Odisha",
    "type": "City",
    "lat": 20.9377,
    "lng": 84.9045
  },
  {
    "id": "city-250453",
    "name": "Kochinda",
    "state": "Odisha",
    "type": "City",
    "lat": 21.6057,
    "lng": 82.4285
  },
  {
    "id": "city-250454",
    "name": "Redhakhol",
    "state": "Odisha",
    "type": "City",
    "lat": 18.055699999999998,
    "lng": 84.52250000000001
  },
  {
    "id": "city-305570",
    "name": "Rengali",
    "state": "Odisha",
    "type": "City",
    "lat": 18.3877,
    "lng": 82.3665
  },
  {
    "id": "city-253100",
    "name": "Sambalpur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.2377,
    "lng": 83.7165
  },
  {
    "id": "city-250551",
    "name": "Binika",
    "state": "Odisha",
    "type": "City",
    "lat": 19.9517,
    "lng": 86.0505
  },
  {
    "id": "city-305620",
    "name": "Biramaharajpur",
    "state": "Odisha",
    "type": "City",
    "lat": 20.8097,
    "lng": 82.5685
  },
  {
    "id": "city-250550",
    "name": "Sonapur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.683699999999998,
    "lng": 84.8065
  },
  {
    "id": "city-250549",
    "name": "Tarbha",
    "state": "Odisha",
    "type": "City",
    "lat": 19.1477,
    "lng": 85.1105
  },
  {
    "id": "city-250462",
    "name": "Biramitrapur",
    "state": "Odisha",
    "type": "City",
    "lat": 18.999699999999997,
    "lng": 85.5625
  },
  {
    "id": "city-250459",
    "name": "Rajagangapur",
    "state": "Odisha",
    "type": "City",
    "lat": 19.6417,
    "lng": 82.2805
  },
  {
    "id": "city-250467",
    "name": "Raurkela",
    "state": "Odisha",
    "type": "City",
    "lat": 21.4457,
    "lng": 82.28450000000001
  },
  {
    "id": "city-250458",
    "name": "Sundargarh",
    "state": "Odisha",
    "type": "City",
    "lat": 18.7217,
    "lng": 85.3925
  },
  {
    "id": "city-253096",
    "name": "Karaikal",
    "state": "Puducherry",
    "type": "City",
    "lat": 12.609599999999999,
    "lng": 80.0203
  },
  {
    "id": "city-253095",
    "name": "Mahe",
    "state": "Puducherry",
    "type": "City",
    "lat": 11.839599999999999,
    "lng": 78.8863
  },
  {
    "id": "city-253093",
    "name": "Ozhukarai",
    "state": "Puducherry",
    "type": "City",
    "lat": 9.7016,
    "lng": 78.8963
  },
  {
    "id": "city-253094",
    "name": "Pondicherry",
    "state": "Puducherry",
    "type": "City",
    "lat": 11.0316,
    "lng": 77.47030000000001
  },
  {
    "id": "city-253092",
    "name": "Yanam",
    "state": "Puducherry",
    "type": "City",
    "lat": 12.785599999999999,
    "lng": 77.6203
  },
  {
    "id": "city-248269",
    "name": "Ajnala",
    "state": "Punjab",
    "type": "City",
    "lat": 31.573099999999997,
    "lng": 74.4992
  },
  {
    "id": "city-248273",
    "name": "Amritsar",
    "state": "Punjab",
    "type": "City",
    "lat": 29.1771,
    "lng": 74.4312
  },
  {
    "id": "city-299457",
    "name": "Baba Bakala",
    "state": "Punjab",
    "type": "City",
    "lat": 30.2031,
    "lng": 75.9492
  },
  {
    "id": "city-248272",
    "name": "Jandiala Guru",
    "state": "Punjab",
    "type": "City",
    "lat": 31.329099999999997,
    "lng": 73.5272
  },
  {
    "id": "city-248271",
    "name": "Majitha",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4071,
    "lng": 76.3372
  },
  {
    "id": "city-248270",
    "name": "Raja Sansi",
    "state": "Punjab",
    "type": "City",
    "lat": 29.7551,
    "lng": 75.7572
  },
  {
    "id": "city-248268",
    "name": "Ramdas",
    "state": "Punjab",
    "type": "City",
    "lat": 28.2751,
    "lng": 74.2452
  },
  {
    "id": "city-248278",
    "name": "Rayya",
    "state": "Punjab",
    "type": "City",
    "lat": 31.303099999999997,
    "lng": 73.8252
  },
  {
    "id": "city-248378",
    "name": "Barnala",
    "state": "Punjab",
    "type": "City",
    "lat": 31.1771,
    "lng": 72.5912
  },
  {
    "id": "city-248377",
    "name": "Bhadaur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.3491,
    "lng": 74.3312
  },
  {
    "id": "city-248381",
    "name": "Dhanaula",
    "state": "Punjab",
    "type": "City",
    "lat": 28.887099999999997,
    "lng": 76.2572
  },
  {
    "id": "city-248379",
    "name": "Handiaya",
    "state": "Punjab",
    "type": "City",
    "lat": 30.5611,
    "lng": 75.4152
  },
  {
    "id": "city-248380",
    "name": "Tapa",
    "state": "Punjab",
    "type": "City",
    "lat": 30.6071,
    "lng": 74.8412
  },
  {
    "id": "city-248367",
    "name": "Bathinda",
    "state": "Punjab",
    "type": "City",
    "lat": 29.3891,
    "lng": 76.1872
  },
  {
    "id": "city-276562",
    "name": "Bhagta Bhai Ka Nagar Panchayat",
    "state": "Punjab",
    "type": "City",
    "lat": 32.0571,
    "lng": 74.01520000000001
  },
  {
    "id": "city-260770",
    "name": "Bhai Rupa",
    "state": "Punjab",
    "type": "City",
    "lat": 30.8951,
    "lng": 74.2172
  },
  {
    "id": "city-248366",
    "name": "Bhucho Mandi",
    "state": "Punjab",
    "type": "City",
    "lat": 28.199099999999998,
    "lng": 73.1532
  },
  {
    "id": "city-248364",
    "name": "Goniana",
    "state": "Punjab",
    "type": "City",
    "lat": 31.669099999999997,
    "lng": 73.4752
  },
  {
    "id": "city-248369",
    "name": "Kot Fatta",
    "state": "Punjab",
    "type": "City",
    "lat": 28.9591,
    "lng": 75.6732
  },
  {
    "id": "city-260782",
    "name": "Kot Shamir",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6711,
    "lng": 73.4572
  },
  {
    "id": "city-260780",
    "name": "Kotha Guru",
    "state": "Punjab",
    "type": "City",
    "lat": 30.867099999999997,
    "lng": 75.7172
  },
  {
    "id": "city-260778",
    "name": "Lehra Mohabat",
    "state": "Punjab",
    "type": "City",
    "lat": 29.6511,
    "lng": 73.7972
  },
  {
    "id": "city-260781",
    "name": "Maluka",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4411,
    "lng": 73.9832
  },
  {
    "id": "city-248371",
    "name": "Maur",
    "state": "Punjab",
    "type": "City",
    "lat": 31.8771,
    "lng": 76.2112
  },
  {
    "id": "city-260771",
    "name": "Mehraj",
    "state": "Punjab",
    "type": "City",
    "lat": 29.9131,
    "lng": 73.6152
  },
  {
    "id": "city-260779",
    "name": "Nathana",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4611,
    "lng": 74.4592
  },
  {
    "id": "city-248370",
    "name": "Raman",
    "state": "Punjab",
    "type": "City",
    "lat": 30.777099999999997,
    "lng": 73.5192
  },
  {
    "id": "city-248363",
    "name": "Rampura Phul",
    "state": "Punjab",
    "type": "City",
    "lat": 32.0771,
    "lng": 74.1232
  },
  {
    "id": "city-248368",
    "name": "Sangat",
    "state": "Punjab",
    "type": "City",
    "lat": 29.9271,
    "lng": 73.4572
  },
  {
    "id": "city-253124",
    "name": "Talwandi Sabo",
    "state": "Punjab",
    "type": "City",
    "lat": 28.469099999999997,
    "lng": 73.2992
  },
  {
    "id": "city-248360",
    "name": "Faridkot",
    "state": "Punjab",
    "type": "City",
    "lat": 30.9591,
    "lng": 75.6092
  },
  {
    "id": "city-248362",
    "name": "Jaitu",
    "state": "Punjab",
    "type": "City",
    "lat": 31.945099999999996,
    "lng": 73.7272
  },
  {
    "id": "city-248361",
    "name": "Kot Kapura",
    "state": "Punjab",
    "type": "City",
    "lat": 31.591099999999997,
    "lng": 74.1612
  },
  {
    "id": "city-248330",
    "name": "Amloh",
    "state": "Punjab",
    "type": "City",
    "lat": 30.981099999999998,
    "lng": 74.4352
  },
  {
    "id": "city-248327",
    "name": "Bassi Pathana",
    "state": "Punjab",
    "type": "City",
    "lat": 30.149099999999997,
    "lng": 74.0512
  },
  {
    "id": "city-248329",
    "name": "Gobindgarh",
    "state": "Punjab",
    "type": "City",
    "lat": 31.2931,
    "lng": 75.3712
  },
  {
    "id": "city-248331",
    "name": "Khamanon",
    "state": "Punjab",
    "type": "City",
    "lat": 29.5171,
    "lng": 74.7472
  },
  {
    "id": "city-248328",
    "name": "Sirhind Fatehgarh Sahib",
    "state": "Punjab",
    "type": "City",
    "lat": 29.6071,
    "lng": 73.7612
  },
  {
    "id": "city-248355",
    "name": "Abohar",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6251,
    "lng": 76.1112
  },
  {
    "id": "city-277198",
    "name": "Arniwala Shekh Suban",
    "state": "Punjab",
    "type": "City",
    "lat": 29.821099999999998,
    "lng": 75.5792
  },
  {
    "id": "city-248354",
    "name": "Fazilka",
    "state": "Punjab",
    "type": "City",
    "lat": 31.539099999999998,
    "lng": 75.3652
  },
  {
    "id": "city-248353",
    "name": "Jalalabad",
    "state": "Punjab",
    "type": "City",
    "lat": 31.2111,
    "lng": 76.0132
  },
  {
    "id": "city-248351",
    "name": "Firozpur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.705099999999998,
    "lng": 75.2472
  },
  {
    "id": "city-248352",
    "name": "Guru Har Sahai",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4271,
    "lng": 74.1412
  },
  {
    "id": "city-248348",
    "name": "Makhu",
    "state": "Punjab",
    "type": "City",
    "lat": 30.1711,
    "lng": 72.7332
  },
  {
    "id": "city-253222",
    "name": "Mallanwala",
    "state": "Punjab",
    "type": "City",
    "lat": 30.483099999999997,
    "lng": 74.1172
  },
  {
    "id": "city-277197",
    "name": "Mamdot",
    "state": "Punjab",
    "type": "City",
    "lat": 29.635099999999998,
    "lng": 72.9972
  },
  {
    "id": "city-253122",
    "name": "Mudki",
    "state": "Punjab",
    "type": "City",
    "lat": 30.519099999999998,
    "lng": 73.52120000000001
  },
  {
    "id": "city-248350",
    "name": "Talwandi Bhai",
    "state": "Punjab",
    "type": "City",
    "lat": 28.955099999999998,
    "lng": 72.3652
  },
  {
    "id": "city-248349",
    "name": "Zira",
    "state": "Punjab",
    "type": "City",
    "lat": 31.5991,
    "lng": 75.5932
  },
  {
    "id": "city-248264",
    "name": "Batala",
    "state": "Punjab",
    "type": "City",
    "lat": 31.989099999999997,
    "lng": 75.3952
  },
  {
    "id": "city-248267",
    "name": "Dera Baba Nanak",
    "state": "Punjab",
    "type": "City",
    "lat": 28.2491,
    "lng": 72.9272
  },
  {
    "id": "city-248262",
    "name": "Dhariwal",
    "state": "Punjab",
    "type": "City",
    "lat": 28.8951,
    "lng": 74.5052
  },
  {
    "id": "city-248259",
    "name": "Dinanagar",
    "state": "Punjab",
    "type": "City",
    "lat": 31.021099999999997,
    "lng": 74.5712
  },
  {
    "id": "city-248263",
    "name": "Fatehgarh Churian",
    "state": "Punjab",
    "type": "City",
    "lat": 30.7871,
    "lng": 74.5012
  },
  {
    "id": "city-248260",
    "name": "Gurdaspur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.1451,
    "lng": 74.4792
  },
  {
    "id": "city-248266",
    "name": "Qadian",
    "state": "Punjab",
    "type": "City",
    "lat": 29.335099999999997,
    "lng": 75.6972
  },
  {
    "id": "city-248265",
    "name": "Sri Hargobindpur",
    "state": "Punjab",
    "type": "City",
    "lat": 28.9731,
    "lng": 72.6992
  },
  {
    "id": "city-248300",
    "name": "Dasua",
    "state": "Punjab",
    "type": "City",
    "lat": 30.9351,
    "lng": 75.0092
  },
  {
    "id": "city-248301",
    "name": "Gardhiwala",
    "state": "Punjab",
    "type": "City",
    "lat": 29.387099999999997,
    "lng": 72.7172
  },
  {
    "id": "city-248311",
    "name": "Garhshankar",
    "state": "Punjab",
    "type": "City",
    "lat": 29.2231,
    "lng": 76.2252
  },
  {
    "id": "city-248306",
    "name": "Hariana",
    "state": "Punjab",
    "type": "City",
    "lat": 28.379099999999998,
    "lng": 76.0612
  },
  {
    "id": "city-248308",
    "name": "Hoshiarpur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.969099999999997,
    "lng": 73.4312
  },
  {
    "id": "city-248310",
    "name": "Mahilpur",
    "state": "Punjab",
    "type": "City",
    "lat": 31.487099999999998,
    "lng": 76.1212
  },
  {
    "id": "city-248303",
    "name": "Mukerian",
    "state": "Punjab",
    "type": "City",
    "lat": 31.887099999999997,
    "lng": 73.5612
  },
  {
    "id": "city-248309",
    "name": "Sham Chaurasi",
    "state": "Punjab",
    "type": "City",
    "lat": 30.141099999999998,
    "lng": 72.5392
  },
  {
    "id": "city-248305",
    "name": "Talwara",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6831,
    "lng": 73.6052
  },
  {
    "id": "city-248302",
    "name": "Urmar Tanda",
    "state": "Punjab",
    "type": "City",
    "lat": 29.3771,
    "lng": 73.5912
  },
  {
    "id": "city-248294",
    "name": "Adampur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.847099999999998,
    "lng": 73.9132
  },
  {
    "id": "city-248295",
    "name": "Alawalpur",
    "state": "Punjab",
    "type": "City",
    "lat": 31.141099999999998,
    "lng": 75.4752
  },
  {
    "id": "city-248298",
    "name": "Bhogpur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.513099999999998,
    "lng": 75.4152
  },
  {
    "id": "city-277200",
    "name": "Bilga",
    "state": "Punjab",
    "type": "City",
    "lat": 31.1851,
    "lng": 74.7592
  },
  {
    "id": "city-248292",
    "name": "Goraya",
    "state": "Punjab",
    "type": "City",
    "lat": 31.7291,
    "lng": 74.7432
  },
  {
    "id": "city-248296",
    "name": "Jalandhar",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6011,
    "lng": 76.1032
  },
  {
    "id": "city-248299",
    "name": "Kartarpur",
    "state": "Punjab",
    "type": "City",
    "lat": 31.2111,
    "lng": 72.6052
  },
  {
    "id": "city-248287",
    "name": "Lohian Khas",
    "state": "Punjab",
    "type": "City",
    "lat": 29.039099999999998,
    "lng": 74.9692
  },
  {
    "id": "city-277201",
    "name": "Mehatpur",
    "state": "Punjab",
    "type": "City",
    "lat": 28.6631,
    "lng": 73.5372
  },
  {
    "id": "city-248289",
    "name": "Nakodar",
    "state": "Punjab",
    "type": "City",
    "lat": 29.1511,
    "lng": 75.8492
  },
  {
    "id": "city-248291",
    "name": "Nurmahal",
    "state": "Punjab",
    "type": "City",
    "lat": 29.5951,
    "lng": 72.5732
  },
  {
    "id": "city-248293",
    "name": "Phillaur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.853099999999998,
    "lng": 73.3872
  },
  {
    "id": "city-248288",
    "name": "Shahkot",
    "state": "Punjab",
    "type": "City",
    "lat": 28.315099999999997,
    "lng": 74.1572
  },
  {
    "id": "city-248280",
    "name": "Begowal",
    "state": "Punjab",
    "type": "City",
    "lat": 32.1291,
    "lng": 76.1032
  },
  {
    "id": "city-248281",
    "name": "Bhulath",
    "state": "Punjab",
    "type": "City",
    "lat": 31.763099999999998,
    "lng": 76.1652
  },
  {
    "id": "city-248282",
    "name": "Dhilwan",
    "state": "Punjab",
    "type": "City",
    "lat": 28.509099999999997,
    "lng": 73.9472
  },
  {
    "id": "city-248283",
    "name": "Kapurthala",
    "state": "Punjab",
    "type": "City",
    "lat": 30.7291,
    "lng": 73.6632
  },
  {
    "id": "city-274218",
    "name": "Nadala",
    "state": "Punjab",
    "type": "City",
    "lat": 29.7091,
    "lng": 73.2912
  },
  {
    "id": "city-248286",
    "name": "Phagwara",
    "state": "Punjab",
    "type": "City",
    "lat": 29.4091,
    "lng": 74.8072
  },
  {
    "id": "city-248285",
    "name": "Sultanpur Lodhi",
    "state": "Punjab",
    "type": "City",
    "lat": 29.923099999999998,
    "lng": 76.2292
  },
  {
    "id": "city-248337",
    "name": "Doraha",
    "state": "Punjab",
    "type": "City",
    "lat": 31.769099999999998,
    "lng": 73.9832
  },
  {
    "id": "city-248343",
    "name": "Jagraon",
    "state": "Punjab",
    "type": "City",
    "lat": 29.9671,
    "lng": 73.5932
  },
  {
    "id": "city-248334",
    "name": "Khanna",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4611,
    "lng": 75.1952
  },
  {
    "id": "city-248338",
    "name": "Ludhiana",
    "state": "Punjab",
    "type": "City",
    "lat": 29.3951,
    "lng": 72.5972
  },
  {
    "id": "city-248333",
    "name": "Machhiwara",
    "state": "Punjab",
    "type": "City",
    "lat": 30.649099999999997,
    "lng": 75.5512
  },
  {
    "id": "city-248335",
    "name": "Maloud",
    "state": "Punjab",
    "type": "City",
    "lat": 29.5351,
    "lng": 73.8972
  },
  {
    "id": "city-248340",
    "name": "Mullanpur Dakha",
    "state": "Punjab",
    "type": "City",
    "lat": 28.8491,
    "lng": 72.8552
  },
  {
    "id": "city-248336",
    "name": "Payal",
    "state": "Punjab",
    "type": "City",
    "lat": 31.7531,
    "lng": 73.7752
  },
  {
    "id": "city-248342",
    "name": "Raikot",
    "state": "Punjab",
    "type": "City",
    "lat": 28.271099999999997,
    "lng": 74.1212
  },
  {
    "id": "city-248339",
    "name": "Sahnewal",
    "state": "Punjab",
    "type": "City",
    "lat": 30.661099999999998,
    "lng": 74.2272
  },
  {
    "id": "city-248332",
    "name": "Samrala",
    "state": "Punjab",
    "type": "City",
    "lat": 29.0811,
    "lng": 75.0872
  },
  {
    "id": "city-248382",
    "name": "Ahmedgarh",
    "state": "Punjab",
    "type": "City",
    "lat": 30.957099999999997,
    "lng": 74.5072
  },
  {
    "id": "city-273471",
    "name": "Amargarh",
    "state": "Punjab",
    "type": "City",
    "lat": 29.2931,
    "lng": 73.8032
  },
  {
    "id": "city-248383",
    "name": "Malerkotla",
    "state": "Punjab",
    "type": "City",
    "lat": 31.411099999999998,
    "lng": 75.3972
  },
  {
    "id": "city-248374",
    "name": "Bareta",
    "state": "Punjab",
    "type": "City",
    "lat": 31.009099999999997,
    "lng": 75.01520000000001
  },
  {
    "id": "city-248375",
    "name": "Bhikhi",
    "state": "Punjab",
    "type": "City",
    "lat": 30.8691,
    "lng": 74.6752
  },
  {
    "id": "city-277199",
    "name": "Boha",
    "state": "Punjab",
    "type": "City",
    "lat": 30.5431,
    "lng": 74.8572
  },
  {
    "id": "city-248373",
    "name": "Budhlada",
    "state": "Punjab",
    "type": "City",
    "lat": 29.1891,
    "lng": 75.3952
  },
  {
    "id": "city-262906",
    "name": "Joga",
    "state": "Punjab",
    "type": "City",
    "lat": 31.137099999999997,
    "lng": 75.27120000000001
  },
  {
    "id": "city-248376",
    "name": "Mansa",
    "state": "Punjab",
    "type": "City",
    "lat": 30.579099999999997,
    "lng": 73.3812
  },
  {
    "id": "city-248372",
    "name": "Sardulgarh",
    "state": "Punjab",
    "type": "City",
    "lat": 31.9851,
    "lng": 75.7832
  },
  {
    "id": "city-248344",
    "name": "Badhni Kalan",
    "state": "Punjab",
    "type": "City",
    "lat": 29.733099999999997,
    "lng": 74.8512
  },
  {
    "id": "city-248345",
    "name": "Bhagha Purana",
    "state": "Punjab",
    "type": "City",
    "lat": 31.2871,
    "lng": 74.1452
  },
  {
    "id": "city-248346",
    "name": "Dharamkot",
    "state": "Punjab",
    "type": "City",
    "lat": 31.553099999999997,
    "lng": 72.4712
  },
  {
    "id": "city-276647",
    "name": "Fatehgarh Panjtoor",
    "state": "Punjab",
    "type": "City",
    "lat": 29.0251,
    "lng": 72.3912
  },
  {
    "id": "city-262989",
    "name": "Kot Ise Khan",
    "state": "Punjab",
    "type": "City",
    "lat": 30.9931,
    "lng": 75.0312
  },
  {
    "id": "city-248347",
    "name": "Moga",
    "state": "Punjab",
    "type": "City",
    "lat": 31.8831,
    "lng": 74.3972
  },
  {
    "id": "city-262988",
    "name": "Nihal Singh Wala",
    "state": "Punjab",
    "type": "City",
    "lat": 31.9671,
    "lng": 75.4492
  },
  {
    "id": "city-277202",
    "name": "Norat Jamal Singh",
    "state": "Punjab",
    "type": "City",
    "lat": 29.2151,
    "lng": 76.2012
  },
  {
    "id": "city-248256",
    "name": "Pathankot",
    "state": "Punjab",
    "type": "City",
    "lat": 30.559099999999997,
    "lng": 74.2492
  },
  {
    "id": "city-248254",
    "name": "Sujanpur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.0351,
    "lng": 74.8052
  },
  {
    "id": "city-299458",
    "name": "Adda Devigarh",
    "state": "Punjab",
    "type": "City",
    "lat": 31.5631,
    "lng": 72.7012
  },
  {
    "id": "city-261762",
    "name": "Bhadson",
    "state": "Punjab",
    "type": "City",
    "lat": 30.565099999999997,
    "lng": 73.0272
  },
  {
    "id": "city-248394",
    "name": "Ghagga",
    "state": "Punjab",
    "type": "City",
    "lat": 31.957099999999997,
    "lng": 75.8112
  },
  {
    "id": "city-248402",
    "name": "Ghanaur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.387099999999997,
    "lng": 72.9172
  },
  {
    "id": "city-248397",
    "name": "Nabha",
    "state": "Punjab",
    "type": "City",
    "lat": 31.8751,
    "lng": 73.5572
  },
  {
    "id": "city-248399",
    "name": "Patiala",
    "state": "Punjab",
    "type": "City",
    "lat": 30.643099999999997,
    "lng": 74.40520000000001
  },
  {
    "id": "city-248395",
    "name": "Patran",
    "state": "Punjab",
    "type": "City",
    "lat": 29.643099999999997,
    "lng": 75.2452
  },
  {
    "id": "city-248403",
    "name": "Rajpura",
    "state": "Punjab",
    "type": "City",
    "lat": 28.2411,
    "lng": 74.5992
  },
  {
    "id": "city-248396",
    "name": "Samana",
    "state": "Punjab",
    "type": "City",
    "lat": 29.5811,
    "lng": 72.7312
  },
  {
    "id": "city-248398",
    "name": "Sanaur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.631099999999996,
    "lng": 74.2812
  },
  {
    "id": "city-248317",
    "name": "Anandpur Sahib",
    "state": "Punjab",
    "type": "City",
    "lat": 32.095099999999995,
    "lng": 73.6412
  },
  {
    "id": "city-261450",
    "name": "Chamkaur Sahib",
    "state": "Punjab",
    "type": "City",
    "lat": 29.073099999999997,
    "lng": 73.65520000000001
  },
  {
    "id": "city-261446",
    "name": "Kiratpur Sahib",
    "state": "Punjab",
    "type": "City",
    "lat": 28.3251,
    "lng": 74.0192
  },
  {
    "id": "city-248320",
    "name": "Morinda",
    "state": "Punjab",
    "type": "City",
    "lat": 29.1911,
    "lng": 72.8652
  },
  {
    "id": "city-277196",
    "name": "Nangal",
    "state": "Punjab",
    "type": "City",
    "lat": 28.4011,
    "lng": 72.7432
  },
  {
    "id": "city-248319",
    "name": "Rupnagar",
    "state": "Punjab",
    "type": "City",
    "lat": 30.2111,
    "lng": 72.4212
  },
  {
    "id": "city-248404",
    "name": "Banur",
    "state": "Punjab",
    "type": "City",
    "lat": 31.2751,
    "lng": 75.5492
  },
  {
    "id": "city-248405",
    "name": "Dera Bassi",
    "state": "Punjab",
    "type": "City",
    "lat": 28.263099999999998,
    "lng": 75.9532
  },
  {
    "id": "city-299456",
    "name": "Gharuan",
    "state": "Punjab",
    "type": "City",
    "lat": 31.9071,
    "lng": 74.0372
  },
  {
    "id": "city-248324",
    "name": "Kharar",
    "state": "Punjab",
    "type": "City",
    "lat": 29.3771,
    "lng": 75.5912
  },
  {
    "id": "city-248321",
    "name": "Kurali",
    "state": "Punjab",
    "type": "City",
    "lat": 29.8071,
    "lng": 74.9212
  },
  {
    "id": "city-277203",
    "name": "Lalru",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6711,
    "lng": 73.2332
  },
  {
    "id": "city-277194",
    "name": "Nayan Gaon",
    "state": "Punjab",
    "type": "City",
    "lat": 30.3511,
    "lng": 76.0252
  },
  {
    "id": "city-248325",
    "name": "S.A.S.Nagar - Mohali",
    "state": "Punjab",
    "type": "City",
    "lat": 31.637099999999997,
    "lng": 75.8112
  },
  {
    "id": "city-248407",
    "name": "Zirakpur",
    "state": "Punjab",
    "type": "City",
    "lat": 30.051099999999998,
    "lng": 73.6052
  },
  {
    "id": "city-248387",
    "name": "Bhawanigarh",
    "state": "Punjab",
    "type": "City",
    "lat": 29.3951,
    "lng": 73.0452
  },
  {
    "id": "city-248388",
    "name": "Cheema",
    "state": "Punjab",
    "type": "City",
    "lat": 31.605099999999997,
    "lng": 72.89920000000001
  },
  {
    "id": "city-248384",
    "name": "Dhuri",
    "state": "Punjab",
    "type": "City",
    "lat": 31.6831,
    "lng": 76.1972
  },
  {
    "id": "city-248389",
    "name": "Dirba",
    "state": "Punjab",
    "type": "City",
    "lat": 30.4911,
    "lng": 75.2452
  },
  {
    "id": "city-248393",
    "name": "Khanauri",
    "state": "Punjab",
    "type": "City",
    "lat": 28.189099999999996,
    "lng": 75.5792
  },
  {
    "id": "city-248391",
    "name": "Lehragaga",
    "state": "Punjab",
    "type": "City",
    "lat": 30.199099999999998,
    "lng": 75.4572
  },
  {
    "id": "city-248385",
    "name": "Longowal",
    "state": "Punjab",
    "type": "City",
    "lat": 28.7851,
    "lng": 75.2392
  },
  {
    "id": "city-248392",
    "name": "Moonak",
    "state": "Punjab",
    "type": "City",
    "lat": 29.7211,
    "lng": 73.6632
  },
  {
    "id": "city-248386",
    "name": "Sangrur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.987099999999998,
    "lng": 75.1732
  },
  {
    "id": "city-248390",
    "name": "Sunam",
    "state": "Punjab",
    "type": "City",
    "lat": 31.379099999999998,
    "lng": 74.1812
  },
  {
    "id": "city-248315",
    "name": "Balachaur",
    "state": "Punjab",
    "type": "City",
    "lat": 29.2931,
    "lng": 73.8032
  },
  {
    "id": "city-248312",
    "name": "Banga",
    "state": "Punjab",
    "type": "City",
    "lat": 30.373099999999997,
    "lng": 75.5872
  },
  {
    "id": "city-248313",
    "name": "Nawanshahr",
    "state": "Punjab",
    "type": "City",
    "lat": 29.277099999999997,
    "lng": 72.9392
  },
  {
    "id": "city-248314",
    "name": "Rahon",
    "state": "Punjab",
    "type": "City",
    "lat": 32.0351,
    "lng": 72.5172
  },
  {
    "id": "city-248358",
    "name": "Bariwala",
    "state": "Punjab",
    "type": "City",
    "lat": 29.4851,
    "lng": 73.1632
  },
  {
    "id": "city-248357",
    "name": "Giddarbaha",
    "state": "Punjab",
    "type": "City",
    "lat": 30.3131,
    "lng": 72.8472
  },
  {
    "id": "city-248356",
    "name": "Malout",
    "state": "Punjab",
    "type": "City",
    "lat": 29.567099999999996,
    "lng": 72.8892
  },
  {
    "id": "city-248359",
    "name": "Muktsar",
    "state": "Punjab",
    "type": "City",
    "lat": 28.5691,
    "lng": 74.9912
  },
  {
    "id": "city-248275",
    "name": "Bhikhiwind",
    "state": "Punjab",
    "type": "City",
    "lat": 29.925099999999997,
    "lng": 76.2112
  },
  {
    "id": "city-248276",
    "name": "Khemkaran",
    "state": "Punjab",
    "type": "City",
    "lat": 30.2031,
    "lng": 75.5812
  },
  {
    "id": "city-248277",
    "name": "Patti",
    "state": "Punjab",
    "type": "City",
    "lat": 31.315099999999997,
    "lng": 74.1972
  },
  {
    "id": "city-248274",
    "name": "Tarn-Taran",
    "state": "Punjab",
    "type": "City",
    "lat": 28.7991,
    "lng": 73.3052
  },
  {
    "id": "city-248788",
    "name": "Ajmer",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4338,
    "lng": 75.1679
  },
  {
    "id": "city-248793",
    "name": "Kekri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.887800000000002,
    "lng": 71.6499
  },
  {
    "id": "city-248786",
    "name": "Kishangarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.879800000000003,
    "lng": 73.4419
  },
  {
    "id": "city-277232",
    "name": "Nasirabad",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.585800000000003,
    "lng": 71.28790000000001
  },
  {
    "id": "city-302909",
    "name": "Pisangan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.0978,
    "lng": 74.9359
  },
  {
    "id": "city-248787",
    "name": "Pushkar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.507800000000003,
    "lng": 74.5419
  },
  {
    "id": "city-248792",
    "name": "Sarwar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.879800000000003,
    "lng": 71.6899
  },
  {
    "id": "city-301417",
    "name": "Sawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.9238,
    "lng": 72.7659
  },
  {
    "id": "city-301901",
    "name": "Tantoti",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.945800000000002,
    "lng": 72.4479
  },
  {
    "id": "city-248699",
    "name": "Alwar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5698,
    "lng": 73.3839
  },
  {
    "id": "city-300344",
    "name": "Bahadurpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2958,
    "lng": 75.1139
  },
  {
    "id": "city-300347",
    "name": "Baroda Meo",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0878,
    "lng": 74.8499
  },
  {
    "id": "city-299536",
    "name": "Govindgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.8338,
    "lng": 72.4639
  },
  {
    "id": "city-301415",
    "name": "Kathumar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4298,
    "lng": 73.3079
  },
  {
    "id": "city-248702",
    "name": "Kherli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.245800000000003,
    "lng": 73.2199
  },
  {
    "id": "city-296915",
    "name": "Laxmangarh (Alwar)",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4538,
    "lng": 71.6439
  },
  {
    "id": "city-301407",
    "name": "Malakheda",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.879800000000003,
    "lng": 75.1779
  },
  {
    "id": "city-301446",
    "name": "Nauganwa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.719800000000003,
    "lng": 74.15390000000001
  },
  {
    "id": "city-248671",
    "name": "Rajgarh (Alwar)",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.477800000000002,
    "lng": 74.0199
  },
  {
    "id": "city-296916",
    "name": "Ramgarh (Alwar)",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4358,
    "lng": 72.2699
  },
  {
    "id": "city-290432",
    "name": "Thanagaji",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.913800000000002,
    "lng": 74.5599
  },
  {
    "id": "city-248765",
    "name": "Balotra",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2738,
    "lng": 72.2879
  },
  {
    "id": "city-302204",
    "name": "Gudhamalani",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.669800000000002,
    "lng": 74.4439
  },
  {
    "id": "city-302984",
    "name": "Jasol",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.713800000000003,
    "lng": 72.2559
  },
  {
    "id": "city-302863",
    "name": "Samadari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.6838,
    "lng": 72.03790000000001
  },
  {
    "id": "city-303111",
    "name": "Sindhari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1518,
    "lng": 74.0579
  },
  {
    "id": "city-299757",
    "name": "Siwana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.6138,
    "lng": 72.4439
  },
  {
    "id": "city-248835",
    "name": "Banswara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.945800000000002,
    "lng": 73.7359
  },
  {
    "id": "city-248836",
    "name": "Kushalgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.643800000000002,
    "lng": 72.7179
  },
  {
    "id": "city-277602",
    "name": "Partapur -Garhi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.2418,
    "lng": 71.3199
  },
  {
    "id": "city-248857",
    "name": "Anta",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.6598,
    "lng": 74.1739
  },
  {
    "id": "city-296934",
    "name": "Atru",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1078,
    "lng": 75.0619
  },
  {
    "id": "city-248858",
    "name": "Baran",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.591800000000003,
    "lng": 74.0659
  },
  {
    "id": "city-248860",
    "name": "Chhabra",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.245800000000003,
    "lng": 73.6279
  },
  {
    "id": "city-248856",
    "name": "Mangrol",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.899800000000003,
    "lng": 73.3099
  },
  {
    "id": "city-301460",
    "name": "Seeswali",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.565800000000003,
    "lng": 71.5239
  },
  {
    "id": "city-248766",
    "name": "Barmer",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.3658,
    "lng": 74.7719
  },
  {
    "id": "city-302181",
    "name": "Chohtan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.181800000000003,
    "lng": 73.6439
  },
  {
    "id": "city-302257",
    "name": "Dhorimanna",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.829800000000002,
    "lng": 72.1559
  },
  {
    "id": "city-248790",
    "name": "Beawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.611800000000002,
    "lng": 74.3979
  },
  {
    "id": "city-248775",
    "name": "Jaitaran",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9038,
    "lng": 72.2899
  },
  {
    "id": "city-302261",
    "name": "Masuda",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.957800000000002,
    "lng": 72.6999
  },
  {
    "id": "city-302860",
    "name": "Raipur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.1258,
    "lng": 72.3159
  },
  {
    "id": "city-248791",
    "name": "Vijainagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.5878,
    "lng": 74.4539
  },
  {
    "id": "city-248711",
    "name": "Bayana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.899800000000003,
    "lng": 73.3259
  },
  {
    "id": "city-248708",
    "name": "Bharatpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7418,
    "lng": 71.9799
  },
  {
    "id": "city-248709",
    "name": "Bhusawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4618,
    "lng": 73.8519
  },
  {
    "id": "city-248706",
    "name": "Nadbai",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.841800000000003,
    "lng": 73.1039
  },
  {
    "id": "city-263008",
    "name": "Roopbas",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0198,
    "lng": 72.6619
  },
  {
    "id": "city-298994",
    "name": "Uchchain",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9178,
    "lng": 73.0919
  },
  {
    "id": "city-248710",
    "name": "Weir",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.5178,
    "lng": 74.7719
  },
  {
    "id": "city-248808",
    "name": "Asind",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.5138,
    "lng": 74.6479
  },
  {
    "id": "city-302924",
    "name": "Banera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4338,
    "lng": 73.8799
  },
  {
    "id": "city-248812",
    "name": "Bhilwara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.0838,
    "lng": 72.3179
  },
  {
    "id": "city-302998",
    "name": "Bigod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9538,
    "lng": 73.2879
  },
  {
    "id": "city-301915",
    "name": "Bijoliya",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.2818,
    "lng": 73.90390000000001
  },
  {
    "id": "city-248811",
    "name": "Gangapur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.8538,
    "lng": 72.2919
  },
  {
    "id": "city-248809",
    "name": "Gulabpura",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.2218,
    "lng": 73.2919
  },
  {
    "id": "city-299936",
    "name": "Hameergarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.995800000000003,
    "lng": 73.5099
  },
  {
    "id": "city-248813",
    "name": "Jahazpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.757800000000003,
    "lng": 73.3559
  },
  {
    "id": "city-248814",
    "name": "Mandalgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.7938,
    "lng": 73.4319
  },
  {
    "id": "city-277235",
    "name": "Shahpura..(Bhilwara)",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.2218,
    "lng": 74.7399
  },
  {
    "id": "city-248667",
    "name": "Bikaner",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.195800000000002,
    "lng": 74.2779
  },
  {
    "id": "city-248668",
    "name": "Deshnoke",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4338,
    "lng": 72.4319
  },
  {
    "id": "city-299753",
    "name": "Khajuwala",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5238,
    "lng": 72.2619
  },
  {
    "id": "city-302182",
    "name": "Lunkaransar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.271800000000002,
    "lng": 71.6979
  },
  {
    "id": "city-302180",
    "name": "Napasar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.919800000000002,
    "lng": 73.3779
  },
  {
    "id": "city-248669",
    "name": "Nokha",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1978,
    "lng": 71.2599
  },
  {
    "id": "city-248675",
    "name": "Sri Dungargarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.681800000000003,
    "lng": 73.5679
  },
  {
    "id": "city-248806",
    "name": "Bundi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.719800000000003,
    "lng": 74.0339
  },
  {
    "id": "city-301414",
    "name": "Dei",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1918,
    "lng": 73.6659
  },
  {
    "id": "city-303112",
    "name": "Hindoli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.393800000000002,
    "lng": 73.03190000000001
  },
  {
    "id": "city-248802",
    "name": "Indragarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7638,
    "lng": 74.8859
  },
  {
    "id": "city-248804",
    "name": "Kaprain",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.2118,
    "lng": 74.3259
  },
  {
    "id": "city-248805",
    "name": "Keshoraipatan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0838,
    "lng": 72.8059
  },
  {
    "id": "city-248803",
    "name": "Lakheri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.7798,
    "lng": 71.7899
  },
  {
    "id": "city-248801",
    "name": "Nainwa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.163800000000002,
    "lng": 73.0859
  },
  {
    "id": "city-301433",
    "name": "Akola",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.259800000000002,
    "lng": 73.7739
  },
  {
    "id": "city-248843",
    "name": "Bari Sadri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.8058,
    "lng": 72.1879
  },
  {
    "id": "city-248837",
    "name": "Begun",
    "state": "Rajasthan",
    "type": "City",
    "lat": 28.0178,
    "lng": 73.2719
  },
  {
    "id": "city-248839",
    "name": "Chittorgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.285800000000002,
    "lng": 71.5399
  },
  {
    "id": "city-248840",
    "name": "Kapasan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4178,
    "lng": 73.7119
  },
  {
    "id": "city-248841",
    "name": "Nimbahera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.649800000000003,
    "lng": 74.4559
  },
  {
    "id": "city-248838",
    "name": "Rawatbhata",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.9218,
    "lng": 74.5839
  },
  {
    "id": "city-248678",
    "name": "Bidasar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.2638,
    "lng": 74.3859
  },
  {
    "id": "city-248679",
    "name": "Chhapar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.1338,
    "lng": 74.1559
  },
  {
    "id": "city-248673",
    "name": "Churu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.541800000000002,
    "lng": 73.5159
  },
  {
    "id": "city-248677",
    "name": "Rajaldesar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.137800000000002,
    "lng": 73.8479
  },
  {
    "id": "city-248700",
    "name": "Rajgarh(Churu)",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7418,
    "lng": 74.7959
  },
  {
    "id": "city-248676",
    "name": "Ratangarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4758,
    "lng": 74.5899
  },
  {
    "id": "city-248674",
    "name": "Ratannagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1018,
    "lng": 73.5479
  },
  {
    "id": "city-302861",
    "name": "Sahwa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4238,
    "lng": 72.2659
  },
  {
    "id": "city-248672",
    "name": "Sardarshahar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9558,
    "lng": 71.4299
  },
  {
    "id": "city-248680",
    "name": "Sujangarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.777800000000003,
    "lng": 71.4639
  },
  {
    "id": "city-248670",
    "name": "Taranagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4978,
    "lng": 75.0079
  },
  {
    "id": "city-248722",
    "name": "Bandikui",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.5898,
    "lng": 74.6999
  },
  {
    "id": "city-301411",
    "name": "Baswa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.8518,
    "lng": 75.1259
  },
  {
    "id": "city-301435",
    "name": "Bhandarej",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.437800000000003,
    "lng": 72.14789999999999
  },
  {
    "id": "city-248725",
    "name": "Dausa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.5318,
    "lng": 75.2059
  },
  {
    "id": "city-248726",
    "name": "Lalsot",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.457800000000002,
    "lng": 73.7919
  },
  {
    "id": "city-301406",
    "name": "Lawan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.6218,
    "lng": 72.4039
  },
  {
    "id": "city-275691",
    "name": "Mahwa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1718,
    "lng": 72.4539
  },
  {
    "id": "city-299765",
    "name": "Mandawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.777800000000003,
    "lng": 74.2399
  },
  {
    "id": "city-296926",
    "name": "Mandawari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.015800000000002,
    "lng": 73.1059
  },
  {
    "id": "city-301410",
    "name": "Ramgarh Pachwara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.105800000000002,
    "lng": 75.1039
  },
  {
    "id": "city-301451",
    "name": "Sikaray",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4358,
    "lng": 74.5979
  },
  {
    "id": "city-248705",
    "name": "Deeg",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1898,
    "lng": 74.6039
  },
  {
    "id": "city-248703",
    "name": "Kaman",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.3598,
    "lng": 72.28190000000001
  },
  {
    "id": "city-248707",
    "name": "Kumher",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.8118,
    "lng": 74.7659
  },
  {
    "id": "city-248704",
    "name": "Nagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.9618,
    "lng": 71.9439
  },
  {
    "id": "city-302206",
    "name": "Pahari ",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7178,
    "lng": 74.4199
  },
  {
    "id": "city-298995",
    "name": "Sikri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5518,
    "lng": 72.2339
  },
  {
    "id": "city-248712",
    "name": "Bari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1478,
    "lng": 73.3019
  },
  {
    "id": "city-296931",
    "name": "Baseri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.3598,
    "lng": 73.5859
  },
  {
    "id": "city-248713",
    "name": "Dhaulpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4418,
    "lng": 75.1519
  },
  {
    "id": "city-302896",
    "name": "Maniyan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.6538,
    "lng": 73.6839
  },
  {
    "id": "city-248714",
    "name": "Rajakhera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.169800000000002,
    "lng": 74.2879
  },
  {
    "id": "city-302862",
    "name": "Saipau",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.193800000000003,
    "lng": 71.4239
  },
  {
    "id": "city-296930",
    "name": "Sarmathura",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.239800000000002,
    "lng": 72.1139
  },
  {
    "id": "city-299534",
    "name": "Borawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.3518,
    "lng": 74.5219
  },
  {
    "id": "city-248748",
    "name": "Didwana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.3758,
    "lng": 71.5139
  },
  {
    "id": "city-302919",
    "name": "Khatu Khurd",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.829800000000002,
    "lng": 74.3239
  },
  {
    "id": "city-248757",
    "name": "Kuchaman City",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4298,
    "lng": 72.3479
  },
  {
    "id": "city-248747",
    "name": "Ladnu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9238,
    "lng": 71.7659
  },
  {
    "id": "city-248756",
    "name": "Makrana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.4178,
    "lng": 74.3679
  },
  {
    "id": "city-248758",
    "name": "Nawa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.425800000000002,
    "lng": 74.9199
  },
  {
    "id": "city-248755",
    "name": "Parbatsar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.8958,
    "lng": 72.6739
  },
  {
    "id": "city-248831",
    "name": "Dungarpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.675800000000002,
    "lng": 73.3419
  },
  {
    "id": "city-248832",
    "name": "Sagwara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9878,
    "lng": 74.8939
  },
  {
    "id": "city-248656",
    "name": "Anupgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4878,
    "lng": 73.6179
  },
  {
    "id": "city-248654",
    "name": "Gajsinghpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.719800000000003,
    "lng": 74.5219
  },
  {
    "id": "city-302263",
    "name": "Gharsana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.509800000000002,
    "lng": 75.1159
  },
  {
    "id": "city-248649",
    "name": "Kesrisinghpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9118,
    "lng": 71.8659
  },
  {
    "id": "city-248653",
    "name": "Padampur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.8198,
    "lng": 74.5819
  },
  {
    "id": "city-248655",
    "name": "Raisinghnagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4358,
    "lng": 71.9259
  },
  {
    "id": "city-248652",
    "name": "Sadulshahar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.5398,
    "lng": 73.5339
  },
  {
    "id": "city-248651",
    "name": "Sri Ganganagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.681800000000003,
    "lng": 71.5919
  },
  {
    "id": "city-248650",
    "name": "Srikaranpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9718,
    "lng": 71.4779
  },
  {
    "id": "city-248658",
    "name": "Srivijainagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.0638,
    "lng": 73.1059
  },
  {
    "id": "city-248660",
    "name": "Suratgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.7418,
    "lng": 74.8599
  },
  {
    "id": "city-248666",
    "name": "Bhadra",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.239800000000002,
    "lng": 74.8659
  },
  {
    "id": "city-301442",
    "name": "Goluwala",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1038,
    "lng": 75.0579
  },
  {
    "id": "city-248662",
    "name": "Hanumangarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.835800000000003,
    "lng": 75.1819
  },
  {
    "id": "city-248665",
    "name": "Nohar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.0318,
    "lng": 72.1139
  },
  {
    "id": "city-248663",
    "name": "Pilibanga",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.7258,
    "lng": 74.8119
  },
  {
    "id": "city-248664",
    "name": "Rawatsar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.905800000000003,
    "lng": 74.4319
  },
  {
    "id": "city-248661",
    "name": "Sangaria",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.591800000000003,
    "lng": 73.1859
  },
  {
    "id": "city-299937",
    "name": "Tibbi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.303800000000003,
    "lng": 71.5459
  },
  {
    "id": "city-248735",
    "name": "Bagru",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5178,
    "lng": 73.7719
  },
  {
    "id": "city-296925",
    "name": "Bassi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.6198,
    "lng": 73.9339
  },
  {
    "id": "city-248737",
    "name": "Chaksu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.097800000000003,
    "lng": 71.8719
  },
  {
    "id": "city-248730",
    "name": "Chomu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.6998,
    "lng": 74.4139
  },
  {
    "id": "city-301438",
    "name": "Dudu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.9078,
    "lng": 74.8619
  },
  {
    "id": "city-301440",
    "name": "Fhagi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.521800000000002,
    "lng": 74.8959
  },
  {
    "id": "city-303088",
    "name": "Jaipur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.7098,
    "lng": 72.6039
  },
  {
    "id": "city-301911",
    "name": "Jamwa Ramgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.1478,
    "lng": 74.9979
  },
  {
    "id": "city-248732",
    "name": "Jobner",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.387800000000002,
    "lng": 73.6219
  },
  {
    "id": "city-302800",
    "name": "Kaladera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.469800000000003,
    "lng": 72.1399
  },
  {
    "id": "city-302921",
    "name": "Kanota",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.9038,
    "lng": 74.6179
  },
  {
    "id": "city-302813",
    "name": "Khejroli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.0958,
    "lng": 74.7939
  },
  {
    "id": "city-248731",
    "name": "Kishangarh Renwal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9658,
    "lng": 71.6199
  },
  {
    "id": "city-300350",
    "name": "Manoharpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.681800000000003,
    "lng": 75.0399
  },
  {
    "id": "city-300321",
    "name": "Narayana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9858,
    "lng": 71.3999
  },
  {
    "id": "city-248734",
    "name": "Phulera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.4818,
    "lng": 72.9199
  },
  {
    "id": "city-248733",
    "name": "Sambhar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.451800000000002,
    "lng": 74.2779
  },
  {
    "id": "city-248729",
    "name": "Shahpura",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.111800000000002,
    "lng": 74.1459
  },
  {
    "id": "city-301455",
    "name": "Vatika",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.6278,
    "lng": 73.8779
  },
  {
    "id": "city-248763",
    "name": "Jaisalmer",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.7958,
    "lng": 71.7179
  },
  {
    "id": "city-248764",
    "name": "Pokaran",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.7318,
    "lng": 74.0779
  },
  {
    "id": "city-301405",
    "name": "Ahore",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.893800000000002,
    "lng": 74.4279
  },
  {
    "id": "city-248768",
    "name": "Bhinmal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.193800000000003,
    "lng": 72.2159
  },
  {
    "id": "city-248767",
    "name": "Jalore",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.321800000000003,
    "lng": 71.5759
  },
  {
    "id": "city-248769",
    "name": "Sanchore",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.297800000000002,
    "lng": 72.0719
  },
  {
    "id": "city-302254",
    "name": "Sayla",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4158,
    "lng": 72.0179
  },
  {
    "id": "city-248865",
    "name": "Aklera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.387800000000002,
    "lng": 73.4539
  },
  {
    "id": "city-248867",
    "name": "Bhawani Mandi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9098,
    "lng": 74.0039
  },
  {
    "id": "city-302855",
    "name": "Dag",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.9398,
    "lng": 73.8539
  },
  {
    "id": "city-248862",
    "name": "Jhalawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.7118,
    "lng": 71.2339
  },
  {
    "id": "city-248863",
    "name": "Jhalrapatan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.0318,
    "lng": 71.5859
  },
  {
    "id": "city-302856",
    "name": "Khanpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9498,
    "lng": 73.0199
  },
  {
    "id": "city-302858",
    "name": "Manoharthana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.271800000000002,
    "lng": 72.5539
  },
  {
    "id": "city-248868",
    "name": "Pirawa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.355800000000002,
    "lng": 75.0379
  },
  {
    "id": "city-248684",
    "name": "Baggar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1838,
    "lng": 74.1299
  },
  {
    "id": "city-248681",
    "name": "Bissau",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.573800000000002,
    "lng": 74.2199
  },
  {
    "id": "city-302876",
    "name": "Buhana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.8458,
    "lng": 73.6519
  },
  {
    "id": "city-248687",
    "name": "Chirawa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.5698,
    "lng": 73.6719
  },
  {
    "id": "city-301913",
    "name": "Dundlod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.571800000000003,
    "lng": 72.8139
  },
  {
    "id": "city-301912",
    "name": "Jakhal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.245800000000003,
    "lng": 71.2199
  },
  {
    "id": "city-248683",
    "name": "Jhunjhunun",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.349800000000002,
    "lng": 74.7079
  },
  {
    "id": "city-248690",
    "name": "Khetri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4618,
    "lng": 73.9159
  },
  {
    "id": "city-302612",
    "name": "Malsisar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.771800000000002,
    "lng": 74.0539
  },
  {
    "id": "city-248682",
    "name": "Mandawa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9538,
    "lng": 73.9839
  },
  {
    "id": "city-302801",
    "name": "Mandrela",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7238,
    "lng": 73.5659
  },
  {
    "id": "city-248691",
    "name": "Mukandgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2798,
    "lng": 74.1059
  },
  {
    "id": "city-248692",
    "name": "Nawalgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4058,
    "lng": 72.8519
  },
  {
    "id": "city-248685",
    "name": "Pilani",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.321800000000003,
    "lng": 73.9839
  },
  {
    "id": "city-301409",
    "name": "Singhana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 28.0138,
    "lng": 74.7799
  },
  {
    "id": "city-302258",
    "name": "Sultana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.2438,
    "lng": 71.8699
  },
  {
    "id": "city-248688",
    "name": "Surajgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.321800000000003,
    "lng": 71.8399
  },
  {
    "id": "city-248693",
    "name": "Udaipurwati",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.5698,
    "lng": 72.4879
  },
  {
    "id": "city-248686",
    "name": "Vidyavihar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5698,
    "lng": 75.0159
  },
  {
    "id": "city-299784",
    "name": "Balesar Satta",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.6458,
    "lng": 72.2279
  },
  {
    "id": "city-296924",
    "name": "Bhopalgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4358,
    "lng": 74.0459
  },
  {
    "id": "city-248762",
    "name": "Bilara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9178,
    "lng": 73.8839
  },
  {
    "id": "city-303089",
    "name": "Jodhpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.335800000000003,
    "lng": 71.9459
  },
  {
    "id": "city-302802",
    "name": "Mathaniya",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.7678,
    "lng": 73.0339
  },
  {
    "id": "city-248761",
    "name": "Pipar City",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.501800000000003,
    "lng": 71.5799
  },
  {
    "id": "city-302253",
    "name": "Tinwari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0758,
    "lng": 71.2939
  },
  {
    "id": "city-248716",
    "name": "Hindaun City",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4158,
    "lng": 73.5059
  },
  {
    "id": "city-248717",
    "name": "Karauli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 28.0178,
    "lng": 74.3119
  },
  {
    "id": "city-301413",
    "name": "Mandrayal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.0058,
    "lng": 72.7959
  },
  {
    "id": "city-296932",
    "name": "Sapotra",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.227800000000002,
    "lng": 73.3339
  },
  {
    "id": "city-302962",
    "name": "Suroth",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.501800000000003,
    "lng": 72.9719
  },
  {
    "id": "city-248715",
    "name": "Todabhim",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.0758,
    "lng": 74.3979
  },
  {
    "id": "city-248695",
    "name": "Bhiwadi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.547800000000002,
    "lng": 72.1899
  },
  {
    "id": "city-248698",
    "name": "Khairthal-Tijara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1998,
    "lng": 71.3219
  },
  {
    "id": "city-277233",
    "name": "Kishangarhbas",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.8958,
    "lng": 71.6739
  },
  {
    "id": "city-299535",
    "name": "Kotkasim",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2258,
    "lng": 73.7599
  },
  {
    "id": "city-301461",
    "name": "Mundawar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.649800000000003,
    "lng": 74.9039
  },
  {
    "id": "city-299934",
    "name": "Tapukara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.565800000000003,
    "lng": 72.0359
  },
  {
    "id": "city-248696",
    "name": "Tijara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.597800000000003,
    "lng": 73.9479
  },
  {
    "id": "city-263007",
    "name": "Itawa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.6078,
    "lng": 71.9699
  },
  {
    "id": "city-303090",
    "name": "Kota",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4018,
    "lng": 74.1759
  },
  {
    "id": "city-248851",
    "name": "Ramganj Mandi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.4858,
    "lng": 73.9639
  },
  {
    "id": "city-248855",
    "name": "Sangod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.6398,
    "lng": 72.2499
  },
  {
    "id": "city-301453",
    "name": "Suket",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.751800000000003,
    "lng": 72.4339
  },
  {
    "id": "city-296933",
    "name": "Sultanpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.2118,
    "lng": 73.7979
  },
  {
    "id": "city-296923",
    "name": "Bansur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5618,
    "lng": 74.8479
  },
  {
    "id": "city-299974",
    "name": "Bardod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.6598,
    "lng": 74.8859
  },
  {
    "id": "city-248694",
    "name": "Behror",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.943800000000003,
    "lng": 74.6899
  },
  {
    "id": "city-248727",
    "name": "Kotputli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.175800000000002,
    "lng": 75.2099
  },
  {
    "id": "city-302222",
    "name": "Mandhan",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.0698,
    "lng": 73.5799
  },
  {
    "id": "city-301905",
    "name": "Narayanpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.681800000000003,
    "lng": 72.5919
  },
  {
    "id": "city-299935",
    "name": "Neemrana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.3458,
    "lng": 71.2959
  },
  {
    "id": "city-296922",
    "name": "Paota-Pragpura",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.739800000000002,
    "lng": 74.4699
  },
  {
    "id": "city-248728",
    "name": "Viratnagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.4938,
    "lng": 74.6199
  },
  {
    "id": "city-299976",
    "name": "Basni",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.309800000000003,
    "lng": 74.3239
  },
  {
    "id": "city-277231",
    "name": "Degana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.195800000000002,
    "lng": 71.9099
  },
  {
    "id": "city-299764",
    "name": "Jayal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.3778,
    "lng": 72.8399
  },
  {
    "id": "city-248752",
    "name": "Kuchera",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.105800000000002,
    "lng": 73.6719
  },
  {
    "id": "city-248753",
    "name": "Merta City",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.175800000000002,
    "lng": 72.5379
  },
  {
    "id": "city-301906",
    "name": "Mertaroad",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.1338,
    "lng": 72.0519
  },
  {
    "id": "city-248751",
    "name": "Mundwa",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.391800000000003,
    "lng": 73.1539
  },
  {
    "id": "city-248749",
    "name": "Nagaur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9238,
    "lng": 71.6459
  },
  {
    "id": "city-302942",
    "name": "Riyan Bari",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.821800000000003,
    "lng": 73.3799
  },
  {
    "id": "city-248785",
    "name": "Bali",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.7758,
    "lng": 73.7699
  },
  {
    "id": "city-248784",
    "name": "Falna",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.007800000000003,
    "lng": 73.9619
  },
  {
    "id": "city-300322",
    "name": "Marwar Junction",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.059800000000003,
    "lng": 72.7979
  },
  {
    "id": "city-248778",
    "name": "Pali",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9238,
    "lng": 74.3579
  },
  {
    "id": "city-248780",
    "name": "Rani",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2118,
    "lng": 74.2859
  },
  {
    "id": "city-248781",
    "name": "Sadri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.4418,
    "lng": 72.8239
  },
  {
    "id": "city-248776",
    "name": "Sojat",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0898,
    "lng": 72.9119
  },
  {
    "id": "city-302249",
    "name": "Sojat Road",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.501800000000003,
    "lng": 74.3559
  },
  {
    "id": "city-248783",
    "name": "Sumerpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.3138,
    "lng": 72.5519
  },
  {
    "id": "city-248782",
    "name": "Takhatgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.0898,
    "lng": 74.2799
  },
  {
    "id": "city-301412",
    "name": "Bap",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1138,
    "lng": 73.2479
  },
  {
    "id": "city-248759",
    "name": "Phalodi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 28.009800000000002,
    "lng": 72.2879
  },
  {
    "id": "city-302889",
    "name": "Arnod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.6038,
    "lng": 73.4379
  },
  {
    "id": "city-248842",
    "name": "Chhoti Sadri",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.8918,
    "lng": 72.7739
  },
  {
    "id": "city-299942",
    "name": "Dhariawad",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.945800000000002,
    "lng": 72.3439
  },
  {
    "id": "city-248844",
    "name": "Pratapgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1918,
    "lng": 74.15390000000001
  },
  {
    "id": "city-248817",
    "name": "Amet",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.8458,
    "lng": 74.9399
  },
  {
    "id": "city-301436",
    "name": "Bhim",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.0518,
    "lng": 73.3259
  },
  {
    "id": "city-248816",
    "name": "Deogarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.579800000000002,
    "lng": 73.4299
  },
  {
    "id": "city-248820",
    "name": "Nathdwara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.9878,
    "lng": 72.1979
  },
  {
    "id": "city-248818",
    "name": "Rajsamand",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.573800000000002,
    "lng": 72.7959
  },
  {
    "id": "city-248826",
    "name": "Salumbar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.3458,
    "lng": 71.5599
  },
  {
    "id": "city-296936",
    "name": "Bamanwas",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9158,
    "lng": 72.8059
  },
  {
    "id": "city-299825",
    "name": "Bonli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.7238,
    "lng": 75.1579
  },
  {
    "id": "city-248718",
    "name": "Gangapur City",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.7038,
    "lng": 72.3139
  },
  {
    "id": "city-302262",
    "name": "Khandar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.6458,
    "lng": 71.5959
  },
  {
    "id": "city-248720",
    "name": "Sawai Madhopur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.169800000000002,
    "lng": 73.6559
  },
  {
    "id": "city-301454",
    "name": "Vajirpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.1218,
    "lng": 71.4159
  },
  {
    "id": "city-299977",
    "name": "Ajeetgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.541800000000002,
    "lng": 73.3719
  },
  {
    "id": "city-299941",
    "name": "Danta",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1398,
    "lng": 74.0539
  },
  {
    "id": "city-302255",
    "name": "Dhod",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.5698,
    "lng": 74.3839
  },
  {
    "id": "city-248739",
    "name": "Fatehpur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5778,
    "lng": 72.8959
  },
  {
    "id": "city-248743",
    "name": "Khandela",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.6718,
    "lng": 74.2419
  },
  {
    "id": "city-277601",
    "name": "Khatushyamji",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.675800000000002,
    "lng": 72.3819
  },
  {
    "id": "city-248740",
    "name": "Lachhmangarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.5118,
    "lng": 72.1379
  },
  {
    "id": "city-248742",
    "name": "Losal",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.0778,
    "lng": 72.5399
  },
  {
    "id": "city-248746",
    "name": "Neem-Ka-Thana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 28.0058,
    "lng": 72.9799
  },
  {
    "id": "city-302948",
    "name": "Palsana",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1278,
    "lng": 75.1299
  },
  {
    "id": "city-248738",
    "name": "Ramgarh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.579800000000002,
    "lng": 73.7979
  },
  {
    "id": "city-248745",
    "name": "Reengus",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.265800000000002,
    "lng": 71.4719
  },
  {
    "id": "city-248741",
    "name": "Sikar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.515800000000002,
    "lng": 72.1179
  },
  {
    "id": "city-248744",
    "name": "Sri Madhopur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.9758,
    "lng": 71.8499
  },
  {
    "id": "city-248774",
    "name": "Abu Road",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.1838,
    "lng": 71.7219
  },
  {
    "id": "city-302890",
    "name": "Mandar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.2218,
    "lng": 71.8839
  },
  {
    "id": "city-248773",
    "name": "Mount Abu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.905800000000003,
    "lng": 71.4959
  },
  {
    "id": "city-277234",
    "name": "Pindwara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.4478,
    "lng": 73.3779
  },
  {
    "id": "city-248770",
    "name": "Sheoganj",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.7058,
    "lng": 72.9679
  },
  {
    "id": "city-248771",
    "name": "Sirohi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.2558,
    "lng": 72.3459
  },
  {
    "id": "city-248799",
    "name": "Deoli",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.9098,
    "lng": 74.9239
  },
  {
    "id": "city-301914",
    "name": "Diggi",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.5518,
    "lng": 74.8259
  },
  {
    "id": "city-301439",
    "name": "Dooni",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.8538,
    "lng": 75.1879
  },
  {
    "id": "city-301909",
    "name": "Lambaharising",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.5398,
    "lng": 73.4139
  },
  {
    "id": "city-248794",
    "name": "Malpura",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.983800000000002,
    "lng": 73.9139
  },
  {
    "id": "city-248796",
    "name": "Niwai",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.3518,
    "lng": 73.0339
  },
  {
    "id": "city-302259",
    "name": "Peeplu",
    "state": "Rajasthan",
    "type": "City",
    "lat": 24.809800000000003,
    "lng": 74.1119
  },
  {
    "id": "city-248798",
    "name": "Todaraisingh",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.477800000000002,
    "lng": 73.8599
  },
  {
    "id": "city-248797",
    "name": "Tonk",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2878,
    "lng": 74.6419
  },
  {
    "id": "city-248800",
    "name": "Uniara",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.527800000000003,
    "lng": 73.7779
  },
  {
    "id": "city-248823",
    "name": "Bhinder",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.155800000000003,
    "lng": 72.03790000000001
  },
  {
    "id": "city-248821",
    "name": "Fatehnagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.6738,
    "lng": 73.1199
  },
  {
    "id": "city-248824",
    "name": "Kanor",
    "state": "Rajasthan",
    "type": "City",
    "lat": 26.1578,
    "lng": 73.0199
  },
  {
    "id": "city-301445",
    "name": "Mawali",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.3578,
    "lng": 73.0999
  },
  {
    "id": "city-248822",
    "name": "Udaipur",
    "state": "Rajasthan",
    "type": "City",
    "lat": 27.2678,
    "lng": 71.2859
  },
  {
    "id": "city-301408",
    "name": "Vallabhnagar",
    "state": "Rajasthan",
    "type": "City",
    "lat": 25.6898,
    "lng": 74.2879
  },
  {
    "id": "city-249694",
    "name": "Gangtok (M Corp.)",
    "state": "Sikkim",
    "type": "City",
    "lat": 27.087,
    "lng": 88.92620000000001
  },
  {
    "id": "city-249695",
    "name": "Singtam (Np)",
    "state": "Sikkim",
    "type": "City",
    "lat": 27.361,
    "lng": 88.82820000000001
  },
  {
    "id": "city-249690",
    "name": "Gyalshing Nagar Panchayat",
    "state": "Sikkim",
    "type": "City",
    "lat": 26.137,
    "lng": 87.9882
  },
  {
    "id": "city-249689",
    "name": "Mangan Nagar Panchayat",
    "state": "Sikkim",
    "type": "City",
    "lat": 24.541,
    "lng": 86.5122
  },
  {
    "id": "city-249692",
    "name": "Namchi Municipal Council",
    "state": "Sikkim",
    "type": "City",
    "lat": 26.511000000000003,
    "lng": 88.84620000000001
  },
  {
    "id": "city-249693",
    "name": "Nayabazar Jorethang Nagar Panchayat",
    "state": "Sikkim",
    "type": "City",
    "lat": 25.335,
    "lng": 86.7582
  },
  {
    "id": "city-306273",
    "name": "Pakyong",
    "state": "Sikkim",
    "type": "City",
    "lat": 28.007,
    "lng": 87.89420000000001
  },
  {
    "id": "city-290460",
    "name": "Rangpo (Np)",
    "state": "Sikkim",
    "type": "City",
    "lat": 25.717000000000002,
    "lng": 88.96820000000001
  },
  {
    "id": "city-306274",
    "name": "Soreng",
    "state": "Sikkim",
    "type": "City",
    "lat": 26.165000000000003,
    "lng": 86.04020000000001
  },
  {
    "id": "city-252767",
    "name": "Ariyalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0571,
    "lng": 79.23889999999999
  },
  {
    "id": "city-252765",
    "name": "Jayankondam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8331,
    "lng": 75.6629
  },
  {
    "id": "city-252766",
    "name": "Udayarpalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9011,
    "lng": 78.9709
  },
  {
    "id": "city-252764",
    "name": "Varadarajanpettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9951,
    "lng": 79.29289999999999
  },
  {
    "id": "city-252348",
    "name": "Acharapakkam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8611,
    "lng": 76.0589
  },
  {
    "id": "city-252333",
    "name": "Chengalpattu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9671,
    "lng": 77.97689999999999
  },
  {
    "id": "city-252349",
    "name": "Edaikazhinadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0271,
    "lng": 78.8369
  },
  {
    "id": "city-252346",
    "name": "Karunguzhi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0871,
    "lng": 78.84089999999999
  },
  {
    "id": "city-252347",
    "name": "Madurantakam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5911,
    "lng": 78.87289999999999
  },
  {
    "id": "city-252344",
    "name": "Mamallapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2471,
    "lng": 77.35289999999999
  },
  {
    "id": "city-252330",
    "name": "Maraimalainagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8051,
    "lng": 78.61089999999999
  },
  {
    "id": "city-252329",
    "name": "Nandivaram - Guduvancheri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9331,
    "lng": 76.88289999999999
  },
  {
    "id": "city-252319",
    "name": "Tambaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.789100000000001,
    "lng": 77.78689999999999
  },
  {
    "id": "city-252332",
    "name": "Thiruporur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5831,
    "lng": 78.5209
  },
  {
    "id": "city-252343",
    "name": "Tirukalukundram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7651,
    "lng": 79.37089999999999
  },
  {
    "id": "city-252294",
    "name": "Greater Chennai Corporation",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0671,
    "lng": 78.26089999999999
  },
  {
    "id": "city-252658",
    "name": "Alanthurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8171,
    "lng": 78.99889999999999
  },
  {
    "id": "city-252678",
    "name": "Anaimalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7971,
    "lng": 76.48289999999999
  },
  {
    "id": "city-252614",
    "name": "Annur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7791,
    "lng": 78.10889999999999
  },
  {
    "id": "city-252617",
    "name": "Chettipalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9711,
    "lng": 77.75689999999999
  },
  {
    "id": "city-252653",
    "name": "Coimbatore",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8011,
    "lng": 77.1989
  },
  {
    "id": "city-252656",
    "name": "Dhaliyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.719100000000001,
    "lng": 77.9849
  },
  {
    "id": "city-252666",
    "name": "Ettimadai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.655100000000001,
    "lng": 76.00089999999999
  },
  {
    "id": "city-252920",
    "name": "Gudalur-Cbe",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.709100000000001,
    "lng": 76.42689999999999
  },
  {
    "id": "city-252641",
    "name": "Idikarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0351,
    "lng": 78.0449
  },
  {
    "id": "city-252629",
    "name": "Irugur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.911100000000001,
    "lng": 77.0809
  },
  {
    "id": "city-252634",
    "name": "Kannampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7051,
    "lng": 77.4069
  },
  {
    "id": "city-252613",
    "name": "Karamadai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.741100000000001,
    "lng": 76.3389
  },
  {
    "id": "city-252628",
    "name": "Karumathampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2531,
    "lng": 76.9469
  },
  {
    "id": "city-252670",
    "name": "Kinathukadavu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4351,
    "lng": 75.8129
  },
  {
    "id": "city-252681",
    "name": "Kottur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7931,
    "lng": 78.4229
  },
  {
    "id": "city-252665",
    "name": "Madukkarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0511,
    "lng": 77.5809
  },
  {
    "id": "city-252612",
    "name": "Mettupalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3871,
    "lng": 75.8129
  },
  {
    "id": "city-252627",
    "name": "Mopperipalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5931,
    "lng": 79.26289999999999
  },
  {
    "id": "city-260290",
    "name": "Narasimhanaickenpalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5631,
    "lng": 78.86089999999999
  },
  {
    "id": "city-260291",
    "name": "No. 4 Veerapandi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6311,
    "lng": 78.9289
  },
  {
    "id": "city-252679",
    "name": "Odaiyakulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3451,
    "lng": 76.61489999999999
  },
  {
    "id": "city-252668",
    "name": "Othakalmandapam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5291,
    "lng": 78.62289999999999
  },
  {
    "id": "city-252633",
    "name": "Pallapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8451,
    "lng": 77.2589
  },
  {
    "id": "city-252671",
    "name": "Periya Negamam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1271,
    "lng": 78.00089999999999
  },
  {
    "id": "city-252638",
    "name": "Periyanaickenpalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4551,
    "lng": 77.4729
  },
  {
    "id": "city-252661",
    "name": "Perur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8591,
    "lng": 76.9969
  },
  {
    "id": "city-252674",
    "name": "Pollachi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.299100000000001,
    "lng": 77.86089999999999
  },
  {
    "id": "city-252659",
    "name": "Pooluvapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2871,
    "lng": 76.4489
  },
  {
    "id": "city-252677",
    "name": "Samathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.757100000000001,
    "lng": 76.5469
  },
  {
    "id": "city-252642",
    "name": "Sarcarsamakulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0471,
    "lng": 77.6809
  },
  {
    "id": "city-252611",
    "name": "Sirumugai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.139100000000001,
    "lng": 77.67689999999999
  },
  {
    "id": "city-252676",
    "name": "Suleeswaranpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2151,
    "lng": 79.2969
  },
  {
    "id": "city-252632",
    "name": "Sulur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7651,
    "lng": 77.0829
  },
  {
    "id": "city-252660",
    "name": "Thenkarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5091,
    "lng": 76.85889999999999
  },
  {
    "id": "city-252667",
    "name": "Thirumalayampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2451,
    "lng": 76.5149
  },
  {
    "id": "city-252657",
    "name": "Thondamuthur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4571,
    "lng": 76.5349
  },
  {
    "id": "city-252689",
    "name": "Valparai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.815100000000001,
    "lng": 79.14489999999999
  },
  {
    "id": "city-252655",
    "name": "Vedapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7751,
    "lng": 77.61689999999999
  },
  {
    "id": "city-252664",
    "name": "Vellalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2291,
    "lng": 76.93889999999999
  },
  {
    "id": "city-252680",
    "name": "Vettaikaranpudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.347100000000001,
    "lng": 78.3089
  },
  {
    "id": "city-252673",
    "name": "Zamin Uthukuli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2711,
    "lng": 75.9129
  },
  {
    "id": "city-252782",
    "name": "Annamalai Nagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2731,
    "lng": 78.23889999999999
  },
  {
    "id": "city-252779",
    "name": "Bhuvanagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5551,
    "lng": 77.98089999999999
  },
  {
    "id": "city-252781",
    "name": "Chidambaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1651,
    "lng": 77.9709
  },
  {
    "id": "city-252773",
    "name": "Cuddalore",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.145100000000001,
    "lng": 75.9669
  },
  {
    "id": "city-252788",
    "name": "Gangaikondan",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.331100000000001,
    "lng": 75.8129
  },
  {
    "id": "city-252785",
    "name": "Kattumannarkoil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9091,
    "lng": 77.8749
  },
  {
    "id": "city-252780",
    "name": "Killai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.251100000000001,
    "lng": 78.62089999999999
  },
  {
    "id": "city-252775",
    "name": "Kurinjipadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.411100000000001,
    "lng": 79.18889999999999
  },
  {
    "id": "city-252784",
    "name": "Lalpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1751,
    "lng": 78.2649
  },
  {
    "id": "city-252786",
    "name": "Mangalampet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8611,
    "lng": 76.1629
  },
  {
    "id": "city-252768",
    "name": "Melpattampakkam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7231,
    "lng": 78.18889999999999
  },
  {
    "id": "city-252769",
    "name": "Nellikuppam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8551,
    "lng": 77.7529
  },
  {
    "id": "city-252770",
    "name": "Panruti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5611,
    "lng": 78.79889999999999
  },
  {
    "id": "city-252777",
    "name": "Parangipettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4891,
    "lng": 75.7909
  },
  {
    "id": "city-252790",
    "name": "Pennadam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0471,
    "lng": 76.64089999999999
  },
  {
    "id": "city-252778",
    "name": "Sethiathoppu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2071,
    "lng": 77.48089999999999
  },
  {
    "id": "city-252783",
    "name": "Srimushnam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.597100000000001,
    "lng": 79.50689999999999
  },
  {
    "id": "city-252771",
    "name": "Thorapadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3831,
    "lng": 77.5289
  },
  {
    "id": "city-252789",
    "name": "Tittakudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.405100000000001,
    "lng": 75.9229
  },
  {
    "id": "city-252776",
    "name": "Vadalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6091,
    "lng": 76.5509
  },
  {
    "id": "city-252787",
    "name": "Virudhachalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3331,
    "lng": 78.09889999999999
  },
  {
    "id": "city-252415",
    "name": "B.Mallapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3431,
    "lng": 78.0409
  },
  {
    "id": "city-252417",
    "name": "Dharmapuri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6651,
    "lng": 78.71889999999999
  },
  {
    "id": "city-252413",
    "name": "Harur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1951,
    "lng": 76.4129
  },
  {
    "id": "city-252414",
    "name": "Kadathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4551,
    "lng": 79.10489999999999
  },
  {
    "id": "city-252412",
    "name": "Kambainallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3171,
    "lng": 76.0509
  },
  {
    "id": "city-252408",
    "name": "Karimangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5291,
    "lng": 79.03089999999999
  },
  {
    "id": "city-252407",
    "name": "Marandahalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3991,
    "lng": 76.24889999999999
  },
  {
    "id": "city-252409",
    "name": "Palakkodu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8031,
    "lng": 78.77289999999999
  },
  {
    "id": "city-252484",
    "name": "Papparapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7371,
    "lng": 75.84689999999999
  },
  {
    "id": "city-252416",
    "name": "Pappireddipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.235100000000001,
    "lng": 77.57289999999999
  },
  {
    "id": "city-252419",
    "name": "Pennagaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7111,
    "lng": 79.3689
  },
  {
    "id": "city-252702",
    "name": "Agaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8771,
    "lng": 77.85889999999999
  },
  {
    "id": "city-252714",
    "name": "Ammainaickanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1491,
    "lng": 79.4349
  },
  {
    "id": "city-252691",
    "name": "Ayakudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5431,
    "lng": 78.0569
  },
  {
    "id": "city-252699",
    "name": "Ayyalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5051,
    "lng": 77.87889999999999
  },
  {
    "id": "city-252711",
    "name": "Ayyampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3231,
    "lng": 77.9729
  },
  {
    "id": "city-252694",
    "name": "Balasamudram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0871,
    "lng": 78.8809
  },
  {
    "id": "city-252718",
    "name": "Batlagundu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6371,
    "lng": 77.5629
  },
  {
    "id": "city-252709",
    "name": "Chinnalapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.411100000000001,
    "lng": 77.21289999999999
  },
  {
    "id": "city-252707",
    "name": "Dindigul",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0631,
    "lng": 79.3209
  },
  {
    "id": "city-252698",
    "name": "Eriodu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.639100000000001,
    "lng": 77.88889999999999
  },
  {
    "id": "city-252589",
    "name": "Kannivadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2851,
    "lng": 76.4669
  },
  {
    "id": "city-252845",
    "name": "Keeranur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8011,
    "lng": 78.7909
  },
  {
    "id": "city-252713",
    "name": "Kodaikanal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.501100000000001,
    "lng": 77.93889999999999
  },
  {
    "id": "city-252701",
    "name": "Natham",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7971,
    "lng": 75.9549
  },
  {
    "id": "city-252693",
    "name": "Neikkarapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.331100000000001,
    "lng": 76.93289999999999
  },
  {
    "id": "city-252715",
    "name": "Nilakkottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.885100000000001,
    "lng": 76.47489999999999
  },
  {
    "id": "city-252695",
    "name": "Oddanchatram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2271,
    "lng": 78.1809
  },
  {
    "id": "city-252692",
    "name": "Palani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0891,
    "lng": 78.00689999999999
  },
  {
    "id": "city-252696",
    "name": "Palayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1011,
    "lng": 78.5389
  },
  {
    "id": "city-252712",
    "name": "Pannaikadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6631,
    "lng": 77.8009
  },
  {
    "id": "city-252717",
    "name": "Pattiveeranpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7011,
    "lng": 79.61089999999999
  },
  {
    "id": "city-252716",
    "name": "Sevugampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9391,
    "lng": 77.51689999999999
  },
  {
    "id": "city-252710",
    "name": "Sithayankottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5091,
    "lng": 77.6189
  },
  {
    "id": "city-252704",
    "name": "Sriramapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6151,
    "lng": 76.7209
  },
  {
    "id": "city-252703",
    "name": "Thadikombu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0911,
    "lng": 79.4129
  },
  {
    "id": "city-252700",
    "name": "Vadamadurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.017100000000001,
    "lng": 76.3029
  },
  {
    "id": "city-252697",
    "name": "Vedasandur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.481100000000001,
    "lng": 78.46289999999999
  },
  {
    "id": "city-252829",
    "name": "Ammapettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.969100000000001,
    "lng": 78.4469
  },
  {
    "id": "city-252535",
    "name": "Anthiyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4511,
    "lng": 76.7169
  },
  {
    "id": "city-252537",
    "name": "Appakudal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.969100000000001,
    "lng": 77.77489999999999
  },
  {
    "id": "city-252575",
    "name": "Arachalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5291,
    "lng": 75.87089999999999
  },
  {
    "id": "city-252529",
    "name": "Ariyappampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3251,
    "lng": 79.5869
  },
  {
    "id": "city-252536",
    "name": "Athani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6211,
    "lng": 78.9229
  },
  {
    "id": "city-252572",
    "name": "Avalpoondurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.661100000000001,
    "lng": 76.8989
  },
  {
    "id": "city-252539",
    "name": "Bhavani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.353100000000001,
    "lng": 76.39089999999999
  },
  {
    "id": "city-252530",
    "name": "Bhavanisagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6731,
    "lng": 77.2709
  },
  {
    "id": "city-252584",
    "name": "Chennasamudram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1051,
    "lng": 76.72689999999999
  },
  {
    "id": "city-252562",
    "name": "Chennimalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.661100000000001,
    "lng": 77.0029
  },
  {
    "id": "city-252564",
    "name": "Chithode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5111,
    "lng": 78.6969
  },
  {
    "id": "city-252548",
    "name": "Elathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7971,
    "lng": 75.6669
  },
  {
    "id": "city-252568",
    "name": "Erode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.1171,
    "lng": 79.5869
  },
  {
    "id": "city-252547",
    "name": "Gobichettipalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3491,
    "lng": 77.88289999999999
  },
  {
    "id": "city-252538",
    "name": "Jambai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.975100000000001,
    "lng": 76.0649
  },
  {
    "id": "city-252553",
    "name": "Kanjikovil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3391,
    "lng": 79.46889999999999
  },
  {
    "id": "city-252554",
    "name": "Karumandi Chellipalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4071,
    "lng": 76.8809
  },
  {
    "id": "city-252546",
    "name": "Kasipalayam (G)",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.889100000000001,
    "lng": 78.63889999999999
  },
  {
    "id": "city-252527",
    "name": "Kembainaickenpalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9571,
    "lng": 77.2589
  },
  {
    "id": "city-252577",
    "name": "Kilambadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7471,
    "lng": 76.52489999999999
  },
  {
    "id": "city-252583",
    "name": "Kodumudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.427100000000001,
    "lng": 77.01289999999999
  },
  {
    "id": "city-252549",
    "name": "Kolappalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8171,
    "lng": 78.4069
  },
  {
    "id": "city-252580",
    "name": "Kollankoil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2391,
    "lng": 77.2889
  },
  {
    "id": "city-252544",
    "name": "Kugalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9771,
    "lng": 77.9189
  },
  {
    "id": "city-252545",
    "name": "Lakkampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8051,
    "lng": 79.09889999999999
  },
  {
    "id": "city-252573",
    "name": "Modakkurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5411,
    "lng": 78.2829
  },
  {
    "id": "city-252555",
    "name": "Nallampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7051,
    "lng": 78.0389
  },
  {
    "id": "city-252550",
    "name": "Nambiyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.905100000000001,
    "lng": 75.7269
  },
  {
    "id": "city-252565",
    "name": "Nasiyanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.315100000000001,
    "lng": 76.13289999999999
  },
  {
    "id": "city-252532",
    "name": "Nerinjipettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6071,
    "lng": 78.6729
  },
  {
    "id": "city-252534",
    "name": "Olagadam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0991,
    "lng": 78.4369
  },
  {
    "id": "city-252543",
    "name": "P.Mettupalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.847100000000001,
    "lng": 76.1369
  },
  {
    "id": "city-252552",
    "name": "Pallapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8451,
    "lng": 77.2589
  },
  {
    "id": "city-252574",
    "name": "Pasur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.453100000000001,
    "lng": 76.4109
  },
  {
    "id": "city-252541",
    "name": "Periyakodiveri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0931,
    "lng": 76.2109
  },
  {
    "id": "city-252558",
    "name": "Perundurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.581100000000001,
    "lng": 77.37889999999999
  },
  {
    "id": "city-252551",
    "name": "Pethampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3231,
    "lng": 76.85289999999999
  },
  {
    "id": "city-252531",
    "name": "Punjaipuliampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.641100000000002,
    "lng": 77.15889999999999
  },
  {
    "id": "city-252540",
    "name": "Salangapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8991,
    "lng": 76.64489999999999
  },
  {
    "id": "city-252528",
    "name": "Sathyamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.571100000000001,
    "lng": 76.9249
  },
  {
    "id": "city-252579",
    "name": "Sivagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3391,
    "lng": 76.9169
  },
  {
    "id": "city-252581",
    "name": "Unjalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4251,
    "lng": 76.2149
  },
  {
    "id": "city-252904",
    "name": "Vadugapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9871,
    "lng": 76.7409
  },
  {
    "id": "city-252542",
    "name": "Vaniputhur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.751100000000001,
    "lng": 75.7289
  },
  {
    "id": "city-252578",
    "name": "Vellottamparappu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1451,
    "lng": 76.82289999999999
  },
  {
    "id": "city-252582",
    "name": "Vengambur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8611,
    "lng": 79.50689999999999
  },
  {
    "id": "city-252452",
    "name": "Chinnasalem",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2331,
    "lng": 76.99889999999999
  },
  {
    "id": "city-252451",
    "name": "Kallakurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5271,
    "lng": 78.58489999999999
  },
  {
    "id": "city-252444",
    "name": "Manalurpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5531,
    "lng": 77.3269
  },
  {
    "id": "city-252448",
    "name": "Sankarapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1431,
    "lng": 77.10489999999999
  },
  {
    "id": "city-252450",
    "name": "Thiagadurgam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3671,
    "lng": 76.5209
  },
  {
    "id": "city-252446",
    "name": "Tirukkoyilur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0031,
    "lng": 75.7649
  },
  {
    "id": "city-252453",
    "name": "Ulundurpettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9311,
    "lng": 78.86089999999999
  },
  {
    "id": "city-252449",
    "name": "Vadakkanandal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8651,
    "lng": 76.36689999999999
  },
  {
    "id": "city-252336",
    "name": "Kancheepuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8711,
    "lng": 77.6969
  },
  {
    "id": "city-252298",
    "name": "Kundrathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6231,
    "lng": 77.5769
  },
  {
    "id": "city-252295",
    "name": "Mangadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6651,
    "lng": 78.2709
  },
  {
    "id": "city-252299",
    "name": "Sriperumbudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0211,
    "lng": 77.50689999999999
  },
  {
    "id": "city-252342",
    "name": "Uthiramerur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1511,
    "lng": 78.0889
  },
  {
    "id": "city-252341",
    "name": "Walajabad",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0291,
    "lng": 77.5949
  },
  {
    "id": "city-253090",
    "name": "Agastheeswaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8731,
    "lng": 78.9429
  },
  {
    "id": "city-253089",
    "name": "Anjugrammam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6911,
    "lng": 76.7089
  },
  {
    "id": "city-253076",
    "name": "Aralvaimozhi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9571,
    "lng": 77.0349
  },
  {
    "id": "city-253033",
    "name": "Arumanai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.763100000000001,
    "lng": 76.34889999999999
  },
  {
    "id": "city-253055",
    "name": "Athur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7391,
    "lng": 78.8689
  },
  {
    "id": "city-260288",
    "name": "Azhagappapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9991,
    "lng": 77.6009
  },
  {
    "id": "city-253073",
    "name": "Azhagiapandipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.135100000000001,
    "lng": 78.0649
  },
  {
    "id": "city-253074",
    "name": "Boothapandi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4131,
    "lng": 75.7229
  },
  {
    "id": "city-253068",
    "name": "Colachel",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6811,
    "lng": 77.43889999999999
  },
  {
    "id": "city-253034",
    "name": "Edaicode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6151,
    "lng": 79.10489999999999
  },
  {
    "id": "city-253064",
    "name": "Eraniel",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0351,
    "lng": 79.4529
  },
  {
    "id": "city-253081",
    "name": "Ganapathipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9951,
    "lng": 79.62089999999999
  },
  {
    "id": "city-253032",
    "name": "Kadayal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5451,
    "lng": 77.89489999999999
  },
  {
    "id": "city-253036",
    "name": "Kaliyakkavilai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7971,
    "lng": 76.99489999999999
  },
  {
    "id": "city-253065",
    "name": "Kallukuttam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6331,
    "lng": 76.7029
  },
  {
    "id": "city-253091",
    "name": "Kanniyakumari",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3911,
    "lng": 79.38489999999999
  },
  {
    "id": "city-253058",
    "name": "Kappiyarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.917100000000001,
    "lng": 78.2029
  },
  {
    "id": "city-253046",
    "name": "Karungal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8571,
    "lng": 77.7909
  },
  {
    "id": "city-253044",
    "name": "Keezhkulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0571,
    "lng": 78.3189
  },
  {
    "id": "city-253045",
    "name": "Killiyoor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.895100000000001,
    "lng": 78.9289
  },
  {
    "id": "city-253042",
    "name": "Kollancode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2591,
    "lng": 76.90889999999999
  },
  {
    "id": "city-253053",
    "name": "Kothanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7771,
    "lng": 75.7829
  },
  {
    "id": "city-253088",
    "name": "Kottaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.289100000000001,
    "lng": 77.9589
  },
  {
    "id": "city-253050",
    "name": "Kulasekaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1651,
    "lng": 76.58689999999999
  },
  {
    "id": "city-253052",
    "name": "Kumarapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1111,
    "lng": 76.4009
  },
  {
    "id": "city-253038",
    "name": "Kuzhithurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.267100000000001,
    "lng": 78.34089999999999
  },
  {
    "id": "city-253069",
    "name": "Manavalakurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.991100000000001,
    "lng": 77.0889
  },
  {
    "id": "city-253070",
    "name": "Mandaikadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.257100000000001,
    "lng": 79.03089999999999
  },
  {
    "id": "city-253078",
    "name": "Marungur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8571,
    "lng": 79.34289999999999
  },
  {
    "id": "city-253057",
    "name": "Mulagumudu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1511,
    "lng": 78.1929
  },
  {
    "id": "city-253083",
    "name": "Mylaudy",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7851,
    "lng": 77.03089999999999
  },
  {
    "id": "city-253079",
    "name": "Nagercoil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9831,
    "lng": 78.3129
  },
  {
    "id": "city-260663",
    "name": "Nalloor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.437100000000001,
    "lng": 78.6509
  },
  {
    "id": "city-253066",
    "name": "Neyyoor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.757100000000001,
    "lng": 78.9789
  },
  {
    "id": "city-253037",
    "name": "Pacode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1311,
    "lng": 79.3089
  },
  {
    "id": "city-253061",
    "name": "Padmanabhapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3431,
    "lng": 76.6969
  },
  {
    "id": "city-260292",
    "name": "Palappallam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.645100000000001,
    "lng": 78.73089999999999
  },
  {
    "id": "city-253035",
    "name": "Palugal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1431,
    "lng": 78.84089999999999
  },
  {
    "id": "city-253051",
    "name": "Ponmanai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6531,
    "lng": 76.24289999999999
  },
  {
    "id": "city-253085",
    "name": "Puthalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9991,
    "lng": 78.23289999999999
  },
  {
    "id": "city-253041",
    "name": "Puthukkadai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2531,
    "lng": 76.9229
  },
  {
    "id": "city-253067",
    "name": "Reethapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6191,
    "lng": 76.70089999999999
  },
  {
    "id": "city-253082",
    "name": "Suchindrum",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7151,
    "lng": 76.6129
  },
  {
    "id": "city-253075",
    "name": "Thazhakudy",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5531,
    "lng": 77.02289999999999
  },
  {
    "id": "city-253087",
    "name": "Thenthamaraikulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1911,
    "lng": 77.59289999999999
  },
  {
    "id": "city-253077",
    "name": "Therur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6431,
    "lng": 78.5889
  },
  {
    "id": "city-253071",
    "name": "Thingalnagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5271,
    "lng": 76.17689999999999
  },
  {
    "id": "city-253048",
    "name": "Thirparappu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.735100000000001,
    "lng": 76.74489999999999
  },
  {
    "id": "city-253049",
    "name": "Thiruvattar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3911,
    "lng": 77.12089999999999
  },
  {
    "id": "city-253059",
    "name": "Thiruvithancode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2011,
    "lng": 77.63889999999999
  },
  {
    "id": "city-253039",
    "name": "Unnamalaikadai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8271,
    "lng": 76.59689999999999
  },
  {
    "id": "city-253056",
    "name": "Valvaithankoshtam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9771,
    "lng": 77.12689999999999
  },
  {
    "id": "city-253072",
    "name": "Vellimalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8991,
    "lng": 79.13289999999999
  },
  {
    "id": "city-253054",
    "name": "Verkilambi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7231,
    "lng": 77.88489999999999
  },
  {
    "id": "city-253060",
    "name": "Vilavur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.581100000000001,
    "lng": 79.09089999999999
  },
  {
    "id": "city-253062",
    "name": "Villukuri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.725100000000001,
    "lng": 77.55489999999999
  },
  {
    "id": "city-252719",
    "name": "Aravakurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.895100000000001,
    "lng": 77.4169
  },
  {
    "id": "city-252725",
    "name": "Karur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.321100000000001,
    "lng": 77.3189
  },
  {
    "id": "city-252729",
    "name": "Krishnarayapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6791,
    "lng": 77.1129
  },
  {
    "id": "city-252731",
    "name": "Kulithalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7711,
    "lng": 79.37289999999999
  },
  {
    "id": "city-252732",
    "name": "Marudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7951,
    "lng": 79.3009
  },
  {
    "id": "city-252733",
    "name": "Nangavaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5311,
    "lng": 77.8689
  },
  {
    "id": "city-252730",
    "name": "P.J. Cholapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1431,
    "lng": 75.94489999999999
  },
  {
    "id": "city-252720",
    "name": "Pallapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7431,
    "lng": 78.07289999999999
  },
  {
    "id": "city-300381",
    "name": "Pugalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1951,
    "lng": 78.08489999999999
  },
  {
    "id": "city-252726",
    "name": "Puliyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0471,
    "lng": 78.4969
  },
  {
    "id": "city-252723",
    "name": "Punjai Thottakurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.827100000000002,
    "lng": 77.37289999999999
  },
  {
    "id": "city-252727",
    "name": "Uppidamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.193100000000001,
    "lng": 77.2469
  },
  {
    "id": "city-252401",
    "name": "Bargur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9291,
    "lng": 78.47089999999999
  },
  {
    "id": "city-252406",
    "name": "Denkanikottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3071,
    "lng": 78.80489999999999
  },
  {
    "id": "city-252399",
    "name": "Hosur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2651,
    "lng": 76.5829
  },
  {
    "id": "city-252404",
    "name": "Kaveripattinam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.539100000000001,
    "lng": 77.9969
  },
  {
    "id": "city-252405",
    "name": "Kelamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9411,
    "lng": 79.39489999999999
  },
  {
    "id": "city-252402",
    "name": "Krishnagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0371,
    "lng": 76.73889999999999
  },
  {
    "id": "city-252410",
    "name": "Nagojanahalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6531,
    "lng": 76.8989
  },
  {
    "id": "city-252411",
    "name": "Uthangarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0671,
    "lng": 78.7089
  },
  {
    "id": "city-252870",
    "name": "A.Vellalapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2751,
    "lng": 78.60489999999999
  },
  {
    "id": "city-252883",
    "name": "Alanganallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9071,
    "lng": 77.5889
  },
  {
    "id": "city-252885",
    "name": "Elumalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.427100000000001,
    "lng": 75.82889999999999
  },
  {
    "id": "city-252889",
    "name": "Madurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8571,
    "lng": 76.2229
  },
  {
    "id": "city-252871",
    "name": "Melur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2011,
    "lng": 76.59889999999999
  },
  {
    "id": "city-252880",
    "name": "Palamedu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1491,
    "lng": 76.84289999999999
  },
  {
    "id": "city-252872",
    "name": "Paravai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5791,
    "lng": 79.3569
  },
  {
    "id": "city-252886",
    "name": "Peraiyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9771,
    "lng": 75.87889999999999
  },
  {
    "id": "city-252882",
    "name": "Sholavandan",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3691,
    "lng": 77.51889999999999
  },
  {
    "id": "city-252887",
    "name": "T.Kallupatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0691,
    "lng": 78.6909
  },
  {
    "id": "city-252888",
    "name": "Tirumangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3511,
    "lng": 78.8809
  },
  {
    "id": "city-252884",
    "name": "Usilampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4611,
    "lng": 76.35489999999999
  },
  {
    "id": "city-252881",
    "name": "Vadipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.103100000000001,
    "lng": 78.4409
  },
  {
    "id": "city-252795",
    "name": "Kuthalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8331,
    "lng": 77.0869
  },
  {
    "id": "city-252793",
    "name": "Manalmedu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6991,
    "lng": 79.11689999999999
  },
  {
    "id": "city-252794",
    "name": "Mayiladuthurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7171,
    "lng": 76.73889999999999
  },
  {
    "id": "city-252791",
    "name": "Sirkali",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.629100000000001,
    "lng": 78.8269
  },
  {
    "id": "city-252796",
    "name": "Tharangambadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2491,
    "lng": 79.1669
  },
  {
    "id": "city-252792",
    "name": "Vaitheeswarankoil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.405100000000001,
    "lng": 78.4349
  },
  {
    "id": "city-252799",
    "name": "Kilvelur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.423100000000002,
    "lng": 79.4409
  },
  {
    "id": "city-299500",
    "name": "Nagapattinam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.677100000000001,
    "lng": 78.8269
  },
  {
    "id": "city-252801",
    "name": "Thalainayar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4871,
    "lng": 76.4249
  },
  {
    "id": "city-252797",
    "name": "Thittachery",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7731,
    "lng": 79.0269
  },
  {
    "id": "city-252802",
    "name": "Vedaranyam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2911,
    "lng": 77.57289999999999
  },
  {
    "id": "city-252800",
    "name": "Velankanni",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.177100000000001,
    "lng": 75.89489999999999
  },
  {
    "id": "city-252505",
    "name": "Alampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.167100000000001,
    "lng": 76.36089999999999
  },
  {
    "id": "city-252509",
    "name": "Athanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.1251,
    "lng": 77.6909
  },
  {
    "id": "city-252520",
    "name": "Erumaipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1251,
    "lng": 76.75489999999999
  },
  {
    "id": "city-252516",
    "name": "Kalappanaickenpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1491,
    "lng": 78.98689999999999
  },
  {
    "id": "city-252499",
    "name": "Komarapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4151,
    "lng": 78.3129
  },
  {
    "id": "city-252501",
    "name": "Mallasamudram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.017100000000001,
    "lng": 78.5269
  },
  {
    "id": "city-252521",
    "name": "Mohanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1831,
    "lng": 76.5529
  },
  {
    "id": "city-252514",
    "name": "Namagiripettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7851,
    "lng": 78.62289999999999
  },
  {
    "id": "city-252518",
    "name": "Namakkal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8671,
    "lng": 76.54889999999999
  },
  {
    "id": "city-252500",
    "name": "Padaiveedu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5591,
    "lng": 76.6569
  },
  {
    "id": "city-252506",
    "name": "Pallipalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4291,
    "lng": 78.21889999999999
  },
  {
    "id": "city-252525",
    "name": "Pandamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8111,
    "lng": 75.9169
  },
  {
    "id": "city-252522",
    "name": "Paramathi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.481100000000001,
    "lng": 76.05489999999999
  },
  {
    "id": "city-252511",
    "name": "Pattanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.475100000000001,
    "lng": 78.3569
  },
  {
    "id": "city-252515",
    "name": "Pillanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5591,
    "lng": 77.0649
  },
  {
    "id": "city-252524",
    "name": "Pothanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5131,
    "lng": 79.31089999999999
  },
  {
    "id": "city-252510",
    "name": "R.Pudupatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7391,
    "lng": 76.23689999999999
  },
  {
    "id": "city-252512",
    "name": "Rasipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4951,
    "lng": 75.79289999999999
  },
  {
    "id": "city-252513",
    "name": "Seerapalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3951,
    "lng": 77.98089999999999
  },
  {
    "id": "city-252517",
    "name": "Senthamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8091,
    "lng": 79.3269
  },
  {
    "id": "city-252502",
    "name": "Tiruchengode",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3731,
    "lng": 77.40289999999999
  },
  {
    "id": "city-252523",
    "name": "Velur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5791,
    "lng": 77.31689999999999
  },
  {
    "id": "city-252526",
    "name": "Venkarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.065100000000001,
    "lng": 77.85489999999999
  },
  {
    "id": "city-252508",
    "name": "Vennanthur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.033100000000001,
    "lng": 77.0869
  },
  {
    "id": "city-252760",
    "name": "Arumbavur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.389100000000001,
    "lng": 76.9789
  },
  {
    "id": "city-252761",
    "name": "Kurumbalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0671,
    "lng": 76.9169
  },
  {
    "id": "city-252763",
    "name": "Labbaikudikadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0531,
    "lng": 77.01089999999999
  },
  {
    "id": "city-252762",
    "name": "Perambalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4091,
    "lng": 78.00689999999999
  },
  {
    "id": "city-252759",
    "name": "Poolambadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.103100000000001,
    "lng": 77.66489999999999
  },
  {
    "id": "city-252852",
    "name": "Alangudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9091,
    "lng": 78.62689999999999
  },
  {
    "id": "city-252844",
    "name": "Annavasal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1491,
    "lng": 78.49889999999999
  },
  {
    "id": "city-252854",
    "name": "Aranthangi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4891,
    "lng": 79.3029
  },
  {
    "id": "city-252850",
    "name": "Arimalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3031,
    "lng": 78.86489999999999
  },
  {
    "id": "city-306237",
    "name": "Gandarvakottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6071,
    "lng": 77.51289999999999
  },
  {
    "id": "city-252843",
    "name": "Iluppur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5411,
    "lng": 75.6909
  },
  {
    "id": "city-252851",
    "name": "Karambakkudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.469100000000001,
    "lng": 78.6429
  },
  {
    "id": "city-252853",
    "name": "Keeramangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5871,
    "lng": 78.6689
  },
  {
    "id": "city-252690",
    "name": "Keeranur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8011,
    "lng": 78.7909
  },
  {
    "id": "city-252849",
    "name": "Ponnamaravathi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6731,
    "lng": 77.51889999999999
  },
  {
    "id": "city-252848",
    "name": "Pudukkottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2171,
    "lng": 75.9909
  },
  {
    "id": "city-252954",
    "name": "Abiramam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0111,
    "lng": 76.7889
  },
  {
    "id": "city-252955",
    "name": "Kamuthi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3811,
    "lng": 78.81089999999999
  },
  {
    "id": "city-252958",
    "name": "Keelakarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5351,
    "lng": 77.9529
  },
  {
    "id": "city-252959",
    "name": "Mandapam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.417100000000001,
    "lng": 79.2949
  },
  {
    "id": "city-252953",
    "name": "Mudukulathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.065100000000001,
    "lng": 75.75089999999999
  },
  {
    "id": "city-252952",
    "name": "Paramakudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9331,
    "lng": 76.57889999999999
  },
  {
    "id": "city-252951",
    "name": "R.S.Mangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9971,
    "lng": 79.09089999999999
  },
  {
    "id": "city-252957",
    "name": "Ramanathapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0031,
    "lng": 77.60489999999999
  },
  {
    "id": "city-290447",
    "name": "Rameswaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.167100000000001,
    "lng": 76.2169
  },
  {
    "id": "city-252956",
    "name": "Sayalgudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3611,
    "lng": 78.3749
  },
  {
    "id": "city-252950",
    "name": "Thondi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.703100000000001,
    "lng": 79.4489
  },
  {
    "id": "city-252361",
    "name": "Ammoor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.225100000000001,
    "lng": 78.64689999999999
  },
  {
    "id": "city-252367",
    "name": "Arakkonam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8131,
    "lng": 78.0829
  },
  {
    "id": "city-252373",
    "name": "Arcot",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.597100000000001,
    "lng": 79.4669
  },
  {
    "id": "city-252376",
    "name": "Kalavai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1091,
    "lng": 79.37889999999999
  },
  {
    "id": "city-252371",
    "name": "Kaveripakkam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7291,
    "lng": 78.6789
  },
  {
    "id": "city-252366",
    "name": "Melvisharam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.889100000000001,
    "lng": 76.74289999999999
  },
  {
    "id": "city-252369",
    "name": "Nemili",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4871,
    "lng": 76.3449
  },
  {
    "id": "city-252372",
    "name": "Panapakkam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9451,
    "lng": 75.84689999999999
  },
  {
    "id": "city-252364",
    "name": "Ranipet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.937100000000001,
    "lng": 78.11089999999999
  },
  {
    "id": "city-252360",
    "name": "Sholingur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2731,
    "lng": 76.0149
  },
  {
    "id": "city-252370",
    "name": "Thakkolam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7791,
    "lng": 76.62089999999999
  },
  {
    "id": "city-252375",
    "name": "Timiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8391,
    "lng": 78.66489999999999
  },
  {
    "id": "city-252374",
    "name": "Vilapakkam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5051,
    "lng": 76.49489999999999
  },
  {
    "id": "city-252365",
    "name": "Walajapet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2171,
    "lng": 76.4229
  },
  {
    "id": "city-252471",
    "name": "Arasiramani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.327100000000002,
    "lng": 77.87289999999999
  },
  {
    "id": "city-252483",
    "name": "Attayampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5571,
    "lng": 76.6749
  },
  {
    "id": "city-252491",
    "name": "Attur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8031,
    "lng": 77.85289999999999
  },
  {
    "id": "city-252486",
    "name": "Ayothiapattinam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2331,
    "lng": 75.69489999999999
  },
  {
    "id": "city-252487",
    "name": "Belur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7391,
    "lng": 77.8689
  },
  {
    "id": "city-252470",
    "name": "Edanganasalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6011,
    "lng": 76.8149
  },
  {
    "id": "city-252468",
    "name": "Edappadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5751,
    "lng": 78.86489999999999
  },
  {
    "id": "city-260289",
    "name": "Elampillai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4791,
    "lng": 79.2169
  },
  {
    "id": "city-252489",
    "name": "Ethapur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8251,
    "lng": 76.3509
  },
  {
    "id": "city-252496",
    "name": "Gangavalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1511,
    "lng": 78.5209
  },
  {
    "id": "city-252462",
    "name": "Jalakandapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3111,
    "lng": 76.2969
  },
  {
    "id": "city-252463",
    "name": "Kadayampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.411100000000001,
    "lng": 77.7409
  },
  {
    "id": "city-252475",
    "name": "Kannankurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2471,
    "lng": 78.32889999999999
  },
  {
    "id": "city-252465",
    "name": "Karuppur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.571100000000001,
    "lng": 78.9249
  },
  {
    "id": "city-252493",
    "name": "Keeripatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7631,
    "lng": 77.6929
  },
  {
    "id": "city-252455",
    "name": "Kolathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1631,
    "lng": 79.23689999999999
  },
  {
    "id": "city-252469",
    "name": "Konganapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8031,
    "lng": 79.3009
  },
  {
    "id": "city-252485",
    "name": "Mallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7771,
    "lng": 77.33489999999999
  },
  {
    "id": "city-252454",
    "name": "Mecheri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5251,
    "lng": 77.3389
  },
  {
    "id": "city-252457",
    "name": "Mettur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9771,
    "lng": 77.5349
  },
  {
    "id": "city-252459",
    "name": "Nangavalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6731,
    "lng": 79.2709
  },
  {
    "id": "city-252363",
    "name": "Narasingapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.905100000000001,
    "lng": 78.05489999999999
  },
  {
    "id": "city-252464",
    "name": "Omalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4831,
    "lng": 78.22089999999999
  },
  {
    "id": "city-252458",
    "name": "P.N.Patti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.571100000000001,
    "lng": 76.37289999999999
  },
  {
    "id": "city-252481",
    "name": "Panaimarathupatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0771,
    "lng": 77.6749
  },
  {
    "id": "city-252490",
    "name": "Pethanaickenpalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7271,
    "lng": 78.76089999999999
  },
  {
    "id": "city-252467",
    "name": "Poolampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1271,
    "lng": 79.38489999999999
  },
  {
    "id": "city-252474",
    "name": "Salem",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.1231,
    "lng": 77.1809
  },
  {
    "id": "city-252473",
    "name": "Sankari",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.417100000000001,
    "lng": 79.43889999999999
  },
  {
    "id": "city-252498",
    "name": "Sentharapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9511,
    "lng": 76.8089
  },
  {
    "id": "city-252497",
    "name": "Thammampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3091,
    "lng": 77.27489999999999
  },
  {
    "id": "city-252466",
    "name": "Tharamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0551,
    "lng": 76.2169
  },
  {
    "id": "city-252495",
    "name": "Thedavur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3371,
    "lng": 78.67089999999999
  },
  {
    "id": "city-252472",
    "name": "Thevur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.331100000000001,
    "lng": 78.9169
  },
  {
    "id": "city-252460",
    "name": "Vanavasi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.453100000000001,
    "lng": 76.3309
  },
  {
    "id": "city-252488",
    "name": "Vazhapadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9871,
    "lng": 76.78089999999999
  },
  {
    "id": "city-252494",
    "name": "Veeraganur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4071,
    "lng": 76.7209
  },
  {
    "id": "city-252456",
    "name": "Veerakkalpudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2711,
    "lng": 76.17689999999999
  },
  {
    "id": "city-252864",
    "name": "Devakottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1431,
    "lng": 77.2089
  },
  {
    "id": "city-252869",
    "name": "Ilayangudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.853100000000001,
    "lng": 75.6669
  },
  {
    "id": "city-252858",
    "name": "Kanadukathan",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.033100000000001,
    "lng": 77.0629
  },
  {
    "id": "city-252861",
    "name": "Kandanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0751,
    "lng": 78.14089999999999
  },
  {
    "id": "city-252863",
    "name": "Karaikudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2531,
    "lng": 76.2109
  },
  {
    "id": "city-252860",
    "name": "Kottaiyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8031,
    "lng": 76.11689999999999
  },
  {
    "id": "city-252868",
    "name": "Manamadurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.219100000000001,
    "lng": 75.85289999999999
  },
  {
    "id": "city-252865",
    "name": "Nattarasankottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4291,
    "lng": 77.5629
  },
  {
    "id": "city-252855",
    "name": "Nerkuppai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7931,
    "lng": 78.25489999999999
  },
  {
    "id": "city-252859",
    "name": "Pallathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5371,
    "lng": 78.3429
  },
  {
    "id": "city-252862",
    "name": "Puduvayal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.453100000000001,
    "lng": 76.6749
  },
  {
    "id": "city-252856",
    "name": "Singampuneri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.203100000000001,
    "lng": 79.21289999999999
  },
  {
    "id": "city-252866",
    "name": "Sivagangai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.199100000000001,
    "lng": 78.64089999999999
  },
  {
    "id": "city-252867",
    "name": "Thirupuvanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9871,
    "lng": 78.0689
  },
  {
    "id": "city-252857",
    "name": "Tirupathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9551,
    "lng": 79.60489999999999
  },
  {
    "id": "city-253002",
    "name": "Achampudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3391,
    "lng": 77.95689999999999
  },
  {
    "id": "city-253008",
    "name": "Alangulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9551,
    "lng": 77.82889999999999
  },
  {
    "id": "city-253012",
    "name": "Alwarkurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1631,
    "lng": 75.93289999999999
  },
  {
    "id": "city-252996",
    "name": "Aygudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0691,
    "lng": 77.81089999999999
  },
  {
    "id": "city-253001",
    "name": "Courtalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.507100000000001,
    "lng": 78.2289
  },
  {
    "id": "city-252999",
    "name": "Ilanji",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7731,
    "lng": 75.8029
  },
  {
    "id": "city-252994",
    "name": "Kadayanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1891,
    "lng": 77.85889999999999
  },
  {
    "id": "city-253007",
    "name": "Kilapavoor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5831,
    "lng": 76.4409
  },
  {
    "id": "city-253000",
    "name": "Melagaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0611,
    "lng": 77.5469
  },
  {
    "id": "city-253004",
    "name": "Panpoli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3691,
    "lng": 77.84689999999999
  },
  {
    "id": "city-253005",
    "name": "Pudur (S)",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7711,
    "lng": 76.5329
  },
  {
    "id": "city-252990",
    "name": "Puliangudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8031,
    "lng": 79.52489999999999
  },
  {
    "id": "city-252988",
    "name": "Rayagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.863100000000001,
    "lng": 75.7529
  },
  {
    "id": "city-252995",
    "name": "Sambavar Vadagarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8331,
    "lng": 78.6629
  },
  {
    "id": "city-252992",
    "name": "Sankarankovil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.895100000000001,
    "lng": 76.4009
  },
  {
    "id": "city-253006",
    "name": "Sengottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0471,
    "lng": 79.53689999999999
  },
  {
    "id": "city-252987",
    "name": "Sivagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3391,
    "lng": 76.9169
  },
  {
    "id": "city-252998",
    "name": "Sundarapandiapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8351,
    "lng": 77.7649
  },
  {
    "id": "city-252993",
    "name": "Surandai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1091,
    "lng": 75.8509
  },
  {
    "id": "city-252997",
    "name": "Tenkasi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.049100000000001,
    "lng": 76.2949
  },
  {
    "id": "city-252991",
    "name": "Thiruvengadam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0371,
    "lng": 76.98689999999999
  },
  {
    "id": "city-253003",
    "name": "Vadakarai Keezhpadugai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6231,
    "lng": 77.4969
  },
  {
    "id": "city-252989",
    "name": "Vasudevanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7611,
    "lng": 78.0389
  },
  {
    "id": "city-252840",
    "name": "Adiramapattinam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7171,
    "lng": 79.63489999999999
  },
  {
    "id": "city-252818",
    "name": "Aduthurai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6211,
    "lng": 78.65889999999999
  },
  {
    "id": "city-252533",
    "name": "Ammapettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.969100000000001,
    "lng": 78.4469
  },
  {
    "id": "city-252340",
    "name": "Ayyampettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8351,
    "lng": 77.8449
  },
  {
    "id": "city-252819",
    "name": "Cholapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6191,
    "lng": 78.59689999999999
  },
  {
    "id": "city-252823",
    "name": "Kumbakonam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4791,
    "lng": 76.9289
  },
  {
    "id": "city-252838",
    "name": "Madukkur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.571100000000001,
    "lng": 79.2529
  },
  {
    "id": "city-252832",
    "name": "Melathiruppanthuruthi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0251,
    "lng": 78.18289999999999
  },
  {
    "id": "city-252828",
    "name": "Melattur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.539100000000001,
    "lng": 76.03689999999999
  },
  {
    "id": "city-252837",
    "name": "Orathanadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0211,
    "lng": 78.32289999999999
  },
  {
    "id": "city-252826",
    "name": "Papanasam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4511,
    "lng": 76.8209
  },
  {
    "id": "city-252839",
    "name": "Pattukkottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.757100000000001,
    "lng": 76.83489999999999
  },
  {
    "id": "city-252841",
    "name": "Peravurani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.225100000000001,
    "lng": 79.1189
  },
  {
    "id": "city-252842",
    "name": "Perumagalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9731,
    "lng": 76.2269
  },
  {
    "id": "city-252822",
    "name": "Swamimalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7651,
    "lng": 76.4109
  },
  {
    "id": "city-252833",
    "name": "Thanjavur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9651,
    "lng": 78.3869
  },
  {
    "id": "city-252831",
    "name": "Thirukkattupalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3591,
    "lng": 76.35289999999999
  },
  {
    "id": "city-252824",
    "name": "Thirunageswaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3231,
    "lng": 77.01289999999999
  },
  {
    "id": "city-252814",
    "name": "Thiruppanandal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.241100000000001,
    "lng": 78.28689999999999
  },
  {
    "id": "city-252816",
    "name": "Thirupuvanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9871,
    "lng": 78.0689
  },
  {
    "id": "city-252830",
    "name": "Thiruvaiyaru",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.033100000000001,
    "lng": 77.12689999999999
  },
  {
    "id": "city-252817",
    "name": "Thiruvidaimarudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3771,
    "lng": 76.34289999999999
  },
  {
    "id": "city-252836",
    "name": "Vallam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2451,
    "lng": 78.25089999999999
  },
  {
    "id": "city-252815",
    "name": "Veppathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3171,
    "lng": 76.11489999999999
  },
  {
    "id": "city-252607",
    "name": "Adikaratti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0111,
    "lng": 78.3809
  },
  {
    "id": "city-252609",
    "name": "Bikkatty",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9971,
    "lng": 75.7229
  },
  {
    "id": "city-252605",
    "name": "Coonoor",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1571,
    "lng": 75.9309
  },
  {
    "id": "city-252595",
    "name": "Devarshola",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4971,
    "lng": 77.59089999999999
  },
  {
    "id": "city-252639",
    "name": "Gudalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9951,
    "lng": 76.9249
  },
  {
    "id": "city-252608",
    "name": "Huligal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8951,
    "lng": 79.6249
  },
  {
    "id": "city-252602",
    "name": "Jagathala",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1371,
    "lng": 78.2469
  },
  {
    "id": "city-252603",
    "name": "Kethi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6691,
    "lng": 77.1069
  },
  {
    "id": "city-252610",
    "name": "Kilkunda",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0291,
    "lng": 78.22689999999999
  },
  {
    "id": "city-252601",
    "name": "Kotagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.731100000000001,
    "lng": 78.6609
  },
  {
    "id": "city-252599",
    "name": "Naduvattam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.853100000000001,
    "lng": 79.4429
  },
  {
    "id": "city-252594",
    "name": "Nelliyalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8991,
    "lng": 76.3809
  },
  {
    "id": "city-252597",
    "name": "O Valley",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5351,
    "lng": 78.8089
  },
  {
    "id": "city-252598",
    "name": "Sholur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.629100000000001,
    "lng": 76.1549
  },
  {
    "id": "city-252600",
    "name": "Udhagamandalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0771,
    "lng": 77.7949
  },
  {
    "id": "city-252922",
    "name": "Aundipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.969100000000001,
    "lng": 78.5509
  },
  {
    "id": "city-252896",
    "name": "B. Meenakshipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4071,
    "lng": 75.9849
  },
  {
    "id": "city-252897",
    "name": "Bodinayakanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2151,
    "lng": 76.8089
  },
  {
    "id": "city-252895",
    "name": "Boothipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9791,
    "lng": 77.67689999999999
  },
  {
    "id": "city-252913",
    "name": "Chinnamanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8271,
    "lng": 77.4129
  },
  {
    "id": "city-252918",
    "name": "Cumbum",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5411,
    "lng": 75.8509
  },
  {
    "id": "city-252899",
    "name": "Devadanapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4551,
    "lng": 79.32889999999999
  },
  {
    "id": "city-252900",
    "name": "Ganguvarpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.917100000000001,
    "lng": 75.93889999999999
  },
  {
    "id": "city-252596",
    "name": "Gudalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9951,
    "lng": 76.9249
  },
  {
    "id": "city-252916",
    "name": "Hanumanthampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.459100000000001,
    "lng": 79.08489999999999
  },
  {
    "id": "city-252921",
    "name": "Highways",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4911,
    "lng": 78.2849
  },
  {
    "id": "city-252919",
    "name": "Kamayagoundanpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.219100000000001,
    "lng": 75.8929
  },
  {
    "id": "city-252912",
    "name": "Kombai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8651,
    "lng": 79.6549
  },
  {
    "id": "city-252909",
    "name": "Kuchanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7931,
    "lng": 78.2149
  },
  {
    "id": "city-252910",
    "name": "Markayankottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6831,
    "lng": 76.8449
  },
  {
    "id": "city-252898",
    "name": "Melachokkanathapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9331,
    "lng": 76.8029
  },
  {
    "id": "city-252914",
    "name": "Odaipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7331,
    "lng": 77.9069
  },
  {
    "id": "city-252906",
    "name": "Palani Chettipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3751,
    "lng": 77.4649
  },
  {
    "id": "city-252911",
    "name": "Pannaipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.767100000000001,
    "lng": 78.1849
  },
  {
    "id": "city-252902",
    "name": "Periyakulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6111,
    "lng": 76.75689999999999
  },
  {
    "id": "city-252917",
    "name": "Pudupatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7631,
    "lng": 77.2849
  },
  {
    "id": "city-252901",
    "name": "Thamaraikulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5691,
    "lng": 77.00689999999999
  },
  {
    "id": "city-252905",
    "name": "Theni-Allinagaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1431,
    "lng": 78.84089999999999
  },
  {
    "id": "city-252903",
    "name": "Thenkarai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5091,
    "lng": 76.85889999999999
  },
  {
    "id": "city-252908",
    "name": "Thevaram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.155100000000001,
    "lng": 76.4369
  },
  {
    "id": "city-252915",
    "name": "Uthamapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3171,
    "lng": 78.19489999999999
  },
  {
    "id": "city-252576",
    "name": "Vadugapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9871,
    "lng": 76.7409
  },
  {
    "id": "city-252626",
    "name": "Veerapandi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7131,
    "lng": 76.20689999999999
  },
  {
    "id": "city-252263",
    "name": "Arani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6691,
    "lng": 77.6989
  },
  {
    "id": "city-252276",
    "name": "Avadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3771,
    "lng": 78.64689999999999
  },
  {
    "id": "city-252262",
    "name": "Gummidipoondi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2611,
    "lng": 77.2349
  },
  {
    "id": "city-252265",
    "name": "Minjur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4331,
    "lng": 76.67089999999999
  },
  {
    "id": "city-252283",
    "name": "Naravarikuppam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6111,
    "lng": 75.78089999999999
  },
  {
    "id": "city-252270",
    "name": "Pallipattu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1831,
    "lng": 76.5289
  },
  {
    "id": "city-252264",
    "name": "Ponneri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5851,
    "lng": 78.76689999999999
  },
  {
    "id": "city-252278",
    "name": "Poonamallee",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3331,
    "lng": 79.32289999999999
  },
  {
    "id": "city-252271",
    "name": "Pothatturpettai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6311,
    "lng": 76.6009
  },
  {
    "id": "city-252279",
    "name": "Thirumazhisai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6631,
    "lng": 76.14489999999999
  },
  {
    "id": "city-252275",
    "name": "Thirunindravur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4931,
    "lng": 79.2029
  },
  {
    "id": "city-252277",
    "name": "Thiruverkadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.603100000000001,
    "lng": 77.2049
  },
  {
    "id": "city-252269",
    "name": "Tiruttani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.199100000000001,
    "lng": 79.23289999999999
  },
  {
    "id": "city-252273",
    "name": "Tiruvallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.799100000000001,
    "lng": 76.58489999999999
  },
  {
    "id": "city-252268",
    "name": "Uthukkottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7091,
    "lng": 77.85889999999999
  },
  {
    "id": "city-252804",
    "name": "Kodavasal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.4911,
    "lng": 77.73289999999999
  },
  {
    "id": "city-252810",
    "name": "Koothanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.475100000000001,
    "lng": 79.4609
  },
  {
    "id": "city-252805",
    "name": "Koradacheri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3811,
    "lng": 79.0349
  },
  {
    "id": "city-252811",
    "name": "Mannargudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.1591,
    "lng": 76.2169
  },
  {
    "id": "city-252813",
    "name": "Muthupet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.171100000000001,
    "lng": 77.11689999999999
  },
  {
    "id": "city-252807",
    "name": "Nannilam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.475100000000001,
    "lng": 79.39689999999999
  },
  {
    "id": "city-252809",
    "name": "Needamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6851,
    "lng": 77.4189
  },
  {
    "id": "city-252806",
    "name": "Peralam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5751,
    "lng": 78.64089999999999
  },
  {
    "id": "city-252812",
    "name": "Thiruthuraipoondi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6631,
    "lng": 75.92089999999999
  },
  {
    "id": "city-252808",
    "name": "Tiruvarur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3511,
    "lng": 78.94489999999999
  },
  {
    "id": "city-252803",
    "name": "Valangaiman",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8491,
    "lng": 77.46289999999999
  },
  {
    "id": "city-252977",
    "name": "Alwarthirunagiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.885100000000001,
    "lng": 78.3149
  },
  {
    "id": "city-252981",
    "name": "Arumuganeri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.655100000000001,
    "lng": 78.97689999999999
  },
  {
    "id": "city-252979",
    "name": "Athur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7391,
    "lng": 78.8689
  },
  {
    "id": "city-252975",
    "name": "Eral",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.6231,
    "lng": 79.27289999999999
  },
  {
    "id": "city-252966",
    "name": "Ettayapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.889100000000001,
    "lng": 78.92689999999999
  },
  {
    "id": "city-252964",
    "name": "Kadambur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8491,
    "lng": 78.3189
  },
  {
    "id": "city-252961",
    "name": "Kalugumalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2451,
    "lng": 78.22689999999999
  },
  {
    "id": "city-252982",
    "name": "Kanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3831,
    "lng": 76.2409
  },
  {
    "id": "city-252980",
    "name": "Kayalpattinam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8391,
    "lng": 76.66489999999999
  },
  {
    "id": "city-252965",
    "name": "Kayatharu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.363100000000001,
    "lng": 77.3329
  },
  {
    "id": "city-252962",
    "name": "Kovilpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9491,
    "lng": 75.8269
  },
  {
    "id": "city-252983",
    "name": "Nazerath",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3931,
    "lng": 78.02289999999999
  },
  {
    "id": "city-252974",
    "name": "Perungulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1831,
    "lng": 77.0409
  },
  {
    "id": "city-252986",
    "name": "Sathankulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3571,
    "lng": 77.4349
  },
  {
    "id": "city-252973",
    "name": "Sayapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7331,
    "lng": 77.9069
  },
  {
    "id": "city-252976",
    "name": "Srivaikuntam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2391,
    "lng": 79.00089999999999
  },
  {
    "id": "city-252978",
    "name": "Thenthiruperai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0991,
    "lng": 78.80489999999999
  },
  {
    "id": "city-252970",
    "name": "Thoothukudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2951,
    "lng": 76.73689999999999
  },
  {
    "id": "city-252984",
    "name": "Tiruchendur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0291,
    "lng": 76.5949
  },
  {
    "id": "city-252985",
    "name": "Udangudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2691,
    "lng": 77.2589
  },
  {
    "id": "city-252967",
    "name": "V. Pudur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5591,
    "lng": 76.8009
  },
  {
    "id": "city-252968",
    "name": "Vilathikulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6331,
    "lng": 79.62289999999999
  },
  {
    "id": "city-252740",
    "name": "Balakrishnampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7531,
    "lng": 76.7909
  },
  {
    "id": "city-252744",
    "name": "Kallakudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6591,
    "lng": 76.75689999999999
  },
  {
    "id": "city-252735",
    "name": "Kattuputhur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2811,
    "lng": 77.56689999999999
  },
  {
    "id": "city-252752",
    "name": "Koothappar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2851,
    "lng": 79.4909
  },
  {
    "id": "city-252747",
    "name": "Lalgudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2271,
    "lng": 75.8929
  },
  {
    "id": "city-252743",
    "name": "Manachanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2651,
    "lng": 79.05489999999999
  },
  {
    "id": "city-252757",
    "name": "Manapparai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.231100000000001,
    "lng": 78.3449
  },
  {
    "id": "city-252736",
    "name": "Mettupalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.3871,
    "lng": 75.8129
  },
  {
    "id": "city-252738",
    "name": "Musiri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7211,
    "lng": 77.59889999999999
  },
  {
    "id": "city-252758",
    "name": "Ponnampatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2091,
    "lng": 79.13489999999999
  },
  {
    "id": "city-260293",
    "name": "Poovalur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7471,
    "lng": 78.1569
  },
  {
    "id": "city-252745",
    "name": "Pullampadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0531,
    "lng": 78.37889999999999
  },
  {
    "id": "city-252742",
    "name": "S. Kannanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4091,
    "lng": 77.82289999999999
  },
  {
    "id": "city-252748",
    "name": "Sirugamani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.267100000000001,
    "lng": 76.2769
  },
  {
    "id": "city-252737",
    "name": "Thathaiyangarpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3111,
    "lng": 77.15289999999999
  },
  {
    "id": "city-252734",
    "name": "Thottiyam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.661100000000001,
    "lng": 79.14689999999999
  },
  {
    "id": "city-252741",
    "name": "Thuraiyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.0891,
    "lng": 78.2709
  },
  {
    "id": "city-252754",
    "name": "Thuvakudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7011,
    "lng": 77.6509
  },
  {
    "id": "city-252749",
    "name": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9651,
    "lng": 78.1629
  },
  {
    "id": "city-252739",
    "name": "Uppiliapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3771,
    "lng": 76.34289999999999
  },
  {
    "id": "city-253014",
    "name": "Ambasamudram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.501100000000001,
    "lng": 76.37089999999999
  },
  {
    "id": "city-253019",
    "name": "Cheranmahadevi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5911,
    "lng": 77.38489999999999
  },
  {
    "id": "city-253028",
    "name": "Eruvadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.0871,
    "lng": 79.0649
  },
  {
    "id": "city-253022",
    "name": "Gopalasamudram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.219100000000001,
    "lng": 77.03689999999999
  },
  {
    "id": "city-300593",
    "name": "Kalakadu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1311,
    "lng": 75.87689999999999
  },
  {
    "id": "city-253017",
    "name": "Kallidaikurichi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7551,
    "lng": 77.95689999999999
  },
  {
    "id": "city-253023",
    "name": "Manimutharu",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.353100000000001,
    "lng": 76.90289999999999
  },
  {
    "id": "city-253021",
    "name": "Melaseval",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.5791,
    "lng": 77.60489999999999
  },
  {
    "id": "city-253024",
    "name": "Moolaikaraipatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.045100000000001,
    "lng": 78.86689999999999
  },
  {
    "id": "city-253013",
    "name": "Mukkudal",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.251100000000001,
    "lng": 75.78089999999999
  },
  {
    "id": "city-253026",
    "name": "Nanguneri",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.389100000000001,
    "lng": 79.61089999999999
  },
  {
    "id": "city-253010",
    "name": "Naranammalpuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.8251,
    "lng": 78.6789
  },
  {
    "id": "city-253031",
    "name": "Panagudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9891,
    "lng": 77.88289999999999
  },
  {
    "id": "city-253020",
    "name": "Pathamadai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8231,
    "lng": 78.2089
  },
  {
    "id": "city-253009",
    "name": "Sankarnagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6491,
    "lng": 76.6309
  },
  {
    "id": "city-253027",
    "name": "Thirukarungudi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4151,
    "lng": 78.37689999999999
  },
  {
    "id": "city-253030",
    "name": "Thisayanvilai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0271,
    "lng": 77.46889999999999
  },
  {
    "id": "city-253011",
    "name": "Tirunelveli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2171,
    "lng": 78.2789
  },
  {
    "id": "city-253029",
    "name": "Vadakkuvalliyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.2331,
    "lng": 78.28689999999999
  },
  {
    "id": "city-253018",
    "name": "Veeravanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0871,
    "lng": 75.94489999999999
  },
  {
    "id": "city-253015",
    "name": "Vikramasingapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.139100000000001,
    "lng": 75.86089999999999
  },
  {
    "id": "city-252395",
    "name": "Alangayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.3011,
    "lng": 79.55489999999999
  },
  {
    "id": "city-252391",
    "name": "Ambur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1331,
    "lng": 78.0829
  },
  {
    "id": "city-252397",
    "name": "Jolarpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7171,
    "lng": 77.5149
  },
  {
    "id": "city-252396",
    "name": "Natrampalli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0371,
    "lng": 78.14689999999999
  },
  {
    "id": "city-252398",
    "name": "Thirupathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7551,
    "lng": 76.9969
  },
  {
    "id": "city-252392",
    "name": "Uthayendram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.927100000000001,
    "lng": 78.00089999999999
  },
  {
    "id": "city-252394",
    "name": "Vaniyambadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.109100000000002,
    "lng": 76.0349
  },
  {
    "id": "city-252615",
    "name": "Avinashi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6731,
    "lng": 76.9429
  },
  {
    "id": "city-252593",
    "name": "Chinnakkampalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.4271,
    "lng": 78.3009
  },
  {
    "id": "city-252688",
    "name": "Dhali",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8511,
    "lng": 78.34089999999999
  },
  {
    "id": "city-252592",
    "name": "Dharapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7691,
    "lng": 78.12689999999999
  },
  {
    "id": "city-290455",
    "name": "Kangeyam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.421100000000001,
    "lng": 77.86689999999999
  },
  {
    "id": "city-252682",
    "name": "Kaniyur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8731,
    "lng": 78.0629
  },
  {
    "id": "city-252705",
    "name": "Kannivadi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2851,
    "lng": 76.4669
  },
  {
    "id": "city-252591",
    "name": "Kolathupalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.9731,
    "lng": 77.24289999999999
  },
  {
    "id": "city-252687",
    "name": "Komaralingam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7211,
    "lng": 77.12689999999999
  },
  {
    "id": "city-252556",
    "name": "Kunnathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.975100000000001,
    "lng": 79.0809
  },
  {
    "id": "city-252685",
    "name": "Madathukulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7711,
    "lng": 76.18889999999999
  },
  {
    "id": "city-252590",
    "name": "Mulanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1631,
    "lng": 79.34089999999999
  },
  {
    "id": "city-252585",
    "name": "Muthur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5851,
    "lng": 77.38289999999999
  },
  {
    "id": "city-252636",
    "name": "Palladam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5031,
    "lng": 75.81689999999999
  },
  {
    "id": "city-252588",
    "name": "Rudravathi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.443100000000001,
    "lng": 78.24489999999999
  },
  {
    "id": "city-252630",
    "name": "Samalapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7631,
    "lng": 76.6929
  },
  {
    "id": "city-252686",
    "name": "Sankaramanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.9771,
    "lng": 77.20689999999999
  },
  {
    "id": "city-252616",
    "name": "Thirumuruganpoondi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.799100000000001,
    "lng": 77.4249
  },
  {
    "id": "city-252621",
    "name": "Tiruppur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.9451,
    "lng": 75.95089999999999
  },
  {
    "id": "city-252683",
    "name": "Udumalpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6171,
    "lng": 75.82289999999999
  },
  {
    "id": "city-252560",
    "name": "Uthukuli",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.517100000000001,
    "lng": 76.4349
  },
  {
    "id": "city-252587",
    "name": "Vellakoil",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7131,
    "lng": 78.02289999999999
  },
  {
    "id": "city-252422",
    "name": "Arani",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.6691,
    "lng": 77.6989
  },
  {
    "id": "city-252432",
    "name": "Chengam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3691,
    "lng": 78.6869
  },
  {
    "id": "city-252430",
    "name": "Chetpet",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.421100000000001,
    "lng": 79.29889999999999
  },
  {
    "id": "city-252427",
    "name": "Desur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.2771,
    "lng": 79.5469
  },
  {
    "id": "city-252428",
    "name": "Kalambur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.2651,
    "lng": 76.03089999999999
  },
  {
    "id": "city-252420",
    "name": "Kannamangalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7811,
    "lng": 79.35489999999999
  },
  {
    "id": "city-252433",
    "name": "Kilpennathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.629100000000001,
    "lng": 77.78689999999999
  },
  {
    "id": "city-252425",
    "name": "Peranamallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.2471,
    "lng": 76.9049
  },
  {
    "id": "city-252429",
    "name": "Polur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1471,
    "lng": 75.9249
  },
  {
    "id": "city-252431",
    "name": "Pudupalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.8491,
    "lng": 77.1749
  },
  {
    "id": "city-252434",
    "name": "Thiruvannamalai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.427100000000001,
    "lng": 77.6849
  },
  {
    "id": "city-252424",
    "name": "Thiruvathipuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.8131,
    "lng": 76.26689999999999
  },
  {
    "id": "city-252426",
    "name": "Vandavasi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0411,
    "lng": 77.92689999999999
  },
  {
    "id": "city-252435",
    "name": "Vettavalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.1651,
    "lng": 75.7469
  },
  {
    "id": "city-252351",
    "name": "Gudiyatham",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.821100000000001,
    "lng": 78.5149
  },
  {
    "id": "city-252389",
    "name": "Odugathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4451,
    "lng": 76.61089999999999
  },
  {
    "id": "city-252377",
    "name": "Pallikonda",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.5571,
    "lng": 76.12289999999999
  },
  {
    "id": "city-252388",
    "name": "Pennathur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.3611,
    "lng": 76.7029
  },
  {
    "id": "city-252350",
    "name": "Pernambut",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6151,
    "lng": 78.12889999999999
  },
  {
    "id": "city-252359",
    "name": "Thiruvalam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.905100000000001,
    "lng": 79.5029
  },
  {
    "id": "city-252381",
    "name": "Vellore",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.1091,
    "lng": 77.4589
  },
  {
    "id": "city-252437",
    "name": "Ananthapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.9791,
    "lng": 79.6129
  },
  {
    "id": "city-252445",
    "name": "Arakandanallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.257100000000001,
    "lng": 78.41489999999999
  },
  {
    "id": "city-252436",
    "name": "Gingee",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.4291,
    "lng": 79.37889999999999
  },
  {
    "id": "city-252440",
    "name": "Kottakuppam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.5571,
    "lng": 75.9229
  },
  {
    "id": "city-252439",
    "name": "Marakkanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.327100000000002,
    "lng": 77.4249
  },
  {
    "id": "city-252447",
    "name": "Thiruvennainallur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.981100000000001,
    "lng": 79.45089999999999
  },
  {
    "id": "city-252438",
    "name": "Tindivanam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.0731,
    "lng": 77.2229
  },
  {
    "id": "city-252443",
    "name": "Valavanur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7911,
    "lng": 76.5209
  },
  {
    "id": "city-252441",
    "name": "Vikravandi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.6891,
    "lng": 78.1989
  },
  {
    "id": "city-252442",
    "name": "Villupuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.7171,
    "lng": 77.14689999999999
  },
  {
    "id": "city-252947",
    "name": "Aruppukkottai",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 12.0431,
    "lng": 79.51689999999999
  },
  {
    "id": "city-252926",
    "name": "Chettiarpatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.1791,
    "lng": 77.6129
  },
  {
    "id": "city-252945",
    "name": "Kariapatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.5431,
    "lng": 76.68889999999999
  },
  {
    "id": "city-252946",
    "name": "Mallankinaru",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.8011,
    "lng": 78.8309
  },
  {
    "id": "city-252931",
    "name": "Mamsapuram",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4191,
    "lng": 77.0289
  },
  {
    "id": "city-252923",
    "name": "Rajapalayam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 8.577100000000002,
    "lng": 79.3989
  },
  {
    "id": "city-252928",
    "name": "S.Kodikulam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.4831,
    "lng": 78.34089999999999
  },
  {
    "id": "city-252948",
    "name": "Sattur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.6211,
    "lng": 75.9069
  },
  {
    "id": "city-252924",
    "name": "Seithur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.3111,
    "lng": 79.56089999999999
  },
  {
    "id": "city-252938",
    "name": "Sivakasi",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.353100000000001,
    "lng": 76.3509
  },
  {
    "id": "city-252932",
    "name": "Srivilliputhur",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.395100000000001,
    "lng": 78.46889999999999
  },
  {
    "id": "city-252930",
    "name": "Sundarapandiam",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.507100000000001,
    "lng": 79.38889999999999
  },
  {
    "id": "city-252943",
    "name": "Virudhunagar",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 10.7231,
    "lng": 79.18889999999999
  },
  {
    "id": "city-260678",
    "name": "W.Pudhupatti",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 11.7011,
    "lng": 76.1789
  },
  {
    "id": "city-260677",
    "name": "Watrap",
    "state": "Tamil Nadu",
    "type": "City",
    "lat": 9.7411,
    "lng": 77.0349
  },
  {
    "id": "city-248083",
    "name": "Adilabad",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7164,
    "lng": 76.1273
  },
  {
    "id": "city-302289",
    "name": "Aswaraopeta",
    "state": "Telangana",
    "type": "City",
    "lat": 17.2524,
    "lng": 77.4153
  },
  {
    "id": "city-248109",
    "name": "Kothagudem",
    "state": "Telangana",
    "type": "City",
    "lat": 19.090400000000002,
    "lng": 77.8013
  },
  {
    "id": "city-248107",
    "name": "Manugur",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3784,
    "lng": 79.2013
  },
  {
    "id": "city-248110",
    "name": "Palwancha",
    "state": "Telangana",
    "type": "City",
    "lat": 15.9024,
    "lng": 77.7093
  },
  {
    "id": "city-248106",
    "name": "Yellandu",
    "state": "Telangana",
    "type": "City",
    "lat": 16.4284,
    "lng": 77.7913
  },
  {
    "id": "city-257970",
    "name": "Parkal",
    "state": "Telangana",
    "type": "City",
    "lat": 15.986400000000001,
    "lng": 79.6413
  },
  {
    "id": "city-251691",
    "name": "Warangal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0824,
    "lng": 77.9613
  },
  {
    "id": "city-305330",
    "name": "Cyberabad Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 15.2864,
    "lng": 78.1653
  },
  {
    "id": "city-251664",
    "name": "Hyderabad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.3444,
    "lng": 78.4913
  },
  {
    "id": "city-305331",
    "name": "Malkajgiri Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7264,
    "lng": 76.43730000000001
  },
  {
    "id": "city-290061",
    "name": "Dharmapuri",
    "state": "Telangana",
    "type": "City",
    "lat": 15.650400000000001,
    "lng": 79.0813
  },
  {
    "id": "city-251651",
    "name": "Jagtial",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6004,
    "lng": 76.9793
  },
  {
    "id": "city-251652",
    "name": "Korutla",
    "state": "Telangana",
    "type": "City",
    "lat": 19.0364,
    "lng": 79.1673
  },
  {
    "id": "city-253104",
    "name": "Metpalli",
    "state": "Telangana",
    "type": "City",
    "lat": 16.5604,
    "lng": 78.9233
  },
  {
    "id": "city-289549",
    "name": "Raikal",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3524,
    "lng": 76.3953
  },
  {
    "id": "city-251690",
    "name": "Jangaon",
    "state": "Telangana",
    "type": "City",
    "lat": 16.8244,
    "lng": 77.9233
  },
  {
    "id": "city-302292",
    "name": "Station Ghanpur",
    "state": "Telangana",
    "type": "City",
    "lat": 18.4464,
    "lng": 77.9173
  },
  {
    "id": "city-253291",
    "name": "Bhupalpalle",
    "state": "Telangana",
    "type": "City",
    "lat": 15.624400000000001,
    "lng": 79.2353
  },
  {
    "id": "city-290062",
    "name": "Alampur",
    "state": "Telangana",
    "type": "City",
    "lat": 18.2284,
    "lng": 79.8953
  },
  {
    "id": "city-248103",
    "name": "Gadwal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.776400000000002,
    "lng": 78.9633
  },
  {
    "id": "city-257993",
    "name": "Ieeja",
    "state": "Telangana",
    "type": "City",
    "lat": 17.8484,
    "lng": 76.4833
  },
  {
    "id": "city-290060",
    "name": "Waddepalle",
    "state": "Telangana",
    "type": "City",
    "lat": 17.6904,
    "lng": 79.80930000000001
  },
  {
    "id": "city-290201",
    "name": "Banswada",
    "state": "Telangana",
    "type": "City",
    "lat": 15.166400000000001,
    "lng": 79.6293
  },
  {
    "id": "city-302728",
    "name": "Bichkunda",
    "state": "Telangana",
    "type": "City",
    "lat": 17.6824,
    "lng": 79.9293
  },
  {
    "id": "city-248093",
    "name": "Kamareddy",
    "state": "Telangana",
    "type": "City",
    "lat": 15.264400000000002,
    "lng": 76.9713
  },
  {
    "id": "city-290067",
    "name": "Yellareddy",
    "state": "Telangana",
    "type": "City",
    "lat": 17.8184,
    "lng": 80.0013
  },
  {
    "id": "city-290063",
    "name": "Choppandandi",
    "state": "Telangana",
    "type": "City",
    "lat": 16.8064,
    "lng": 77.0613
  },
  {
    "id": "city-253265",
    "name": "Huzurabad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.6844,
    "lng": 76.4393
  },
  {
    "id": "city-253266",
    "name": "Jammikunta",
    "state": "Telangana",
    "type": "City",
    "lat": 17.526400000000002,
    "lng": 78.3573
  },
  {
    "id": "city-251653",
    "name": "Karimnagar",
    "state": "Telangana",
    "type": "City",
    "lat": 17.9224,
    "lng": 79.0813
  },
  {
    "id": "city-290064",
    "name": "Kothapally",
    "state": "Telangana",
    "type": "City",
    "lat": 18.6624,
    "lng": 76.5333
  },
  {
    "id": "city-302293",
    "name": "Edulapuram",
    "state": "Telangana",
    "type": "City",
    "lat": 17.9404,
    "lng": 77.7833
  },
  {
    "id": "city-302727",
    "name": "Kalluru",
    "state": "Telangana",
    "type": "City",
    "lat": 18.6524,
    "lng": 79.0393
  },
  {
    "id": "city-248105",
    "name": "Khammam",
    "state": "Telangana",
    "type": "City",
    "lat": 18.4404,
    "lng": 77.2833
  },
  {
    "id": "city-257876",
    "name": "Madhira",
    "state": "Telangana",
    "type": "City",
    "lat": 17.0164,
    "lng": 76.9793
  },
  {
    "id": "city-248108",
    "name": "Sathupally",
    "state": "Telangana",
    "type": "City",
    "lat": 16.0344,
    "lng": 79.57730000000001
  },
  {
    "id": "city-290068",
    "name": "Wyra",
    "state": "Telangana",
    "type": "City",
    "lat": 18.5704,
    "lng": 79.4573
  },
  {
    "id": "city-301596",
    "name": "Asifabad",
    "state": "Telangana",
    "type": "City",
    "lat": 15.118400000000001,
    "lng": 76.8133
  },
  {
    "id": "city-248086",
    "name": "Kagaz Nagar",
    "state": "Telangana",
    "type": "City",
    "lat": 15.958400000000001,
    "lng": 76.9973
  },
  {
    "id": "city-290069",
    "name": "Dornakal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0484,
    "lng": 77.3553
  },
  {
    "id": "city-302303",
    "name": "Kesamudram",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3484,
    "lng": 79.4553
  },
  {
    "id": "city-257971",
    "name": "Mahabubabad",
    "state": "Telangana",
    "type": "City",
    "lat": 15.3324,
    "lng": 77.0793
  },
  {
    "id": "city-290070",
    "name": "Maripeda",
    "state": "Telangana",
    "type": "City",
    "lat": 17.5704,
    "lng": 79.2733
  },
  {
    "id": "city-290071",
    "name": "Thorrur",
    "state": "Telangana",
    "type": "City",
    "lat": 18.872400000000003,
    "lng": 79.6353
  },
  {
    "id": "city-290073",
    "name": "Bhootpur",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4144,
    "lng": 79.0293
  },
  {
    "id": "city-302291",
    "name": "Devarakadara",
    "state": "Telangana",
    "type": "City",
    "lat": 16.4024,
    "lng": 77.3533
  },
  {
    "id": "city-263216",
    "name": "Jadcherla",
    "state": "Telangana",
    "type": "City",
    "lat": 16.0644,
    "lng": 77.4673
  },
  {
    "id": "city-248101",
    "name": "Mahabubnagar",
    "state": "Telangana",
    "type": "City",
    "lat": 15.470400000000001,
    "lng": 77.5013
  },
  {
    "id": "city-248084",
    "name": "Bellampalli",
    "state": "Telangana",
    "type": "City",
    "lat": 15.4344,
    "lng": 77.42530000000001
  },
  {
    "id": "city-290075",
    "name": "Chennur",
    "state": "Telangana",
    "type": "City",
    "lat": 17.058400000000002,
    "lng": 78.8733
  },
  {
    "id": "city-290076",
    "name": "Kyathanpally",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4724,
    "lng": 76.31530000000001
  },
  {
    "id": "city-290077",
    "name": "Luxettipet",
    "state": "Telangana",
    "type": "City",
    "lat": 17.0884,
    "lng": 78.0273
  },
  {
    "id": "city-248087",
    "name": "Mancherial",
    "state": "Telangana",
    "type": "City",
    "lat": 18.6644,
    "lng": 78.08330000000001
  },
  {
    "id": "city-248088",
    "name": "Mandamarri",
    "state": "Telangana",
    "type": "City",
    "lat": 17.1084,
    "lng": 79.2393
  },
  {
    "id": "city-290147",
    "name": "Naspur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.826400000000001,
    "lng": 76.68130000000001
  },
  {
    "id": "city-248095",
    "name": "Medak",
    "state": "Telangana",
    "type": "City",
    "lat": 17.5564,
    "lng": 77.43130000000001
  },
  {
    "id": "city-290080",
    "name": "Narsapur",
    "state": "Telangana",
    "type": "City",
    "lat": 17.160400000000003,
    "lng": 76.8673
  },
  {
    "id": "city-290078",
    "name": "Ramayampet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.994400000000002,
    "lng": 79.4813
  },
  {
    "id": "city-290079",
    "name": "Toopran",
    "state": "Telangana",
    "type": "City",
    "lat": 18.5744,
    "lng": 77.2133
  },
  {
    "id": "city-302811",
    "name": "Aliyadbad",
    "state": "Telangana",
    "type": "City",
    "lat": 15.5904,
    "lng": 77.07730000000001
  },
  {
    "id": "city-305330",
    "name": "Cyberabad Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 15.2864,
    "lng": 78.1653
  },
  {
    "id": "city-290081",
    "name": "Dammaiguda",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4004,
    "lng": 78.3073
  },
  {
    "id": "city-290154",
    "name": "Dundigal",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3764,
    "lng": 78.3233
  },
  {
    "id": "city-290084",
    "name": "Ghatkesar",
    "state": "Telangana",
    "type": "City",
    "lat": 17.2044,
    "lng": 78.1513
  },
  {
    "id": "city-290085",
    "name": "Gundlapochampally",
    "state": "Telangana",
    "type": "City",
    "lat": 18.8064,
    "lng": 78.6293
  },
  {
    "id": "city-251664",
    "name": "Hyderabad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.3444,
    "lng": 78.4913
  },
  {
    "id": "city-290088",
    "name": "Kompally",
    "state": "Telangana",
    "type": "City",
    "lat": 18.1664,
    "lng": 76.56530000000001
  },
  {
    "id": "city-305331",
    "name": "Malkajgiri Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7264,
    "lng": 76.43730000000001
  },
  {
    "id": "city-263222",
    "name": "Medchal",
    "state": "Telangana",
    "type": "City",
    "lat": 15.360400000000002,
    "lng": 77.0513
  },
  {
    "id": "city-302710",
    "name": "Muduchinthalapally",
    "state": "Telangana",
    "type": "City",
    "lat": 15.1464,
    "lng": 78.8653
  },
  {
    "id": "city-290082",
    "name": "Nagaram",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6984,
    "lng": 79.5693
  },
  {
    "id": "city-290083",
    "name": "Pocharam",
    "state": "Telangana",
    "type": "City",
    "lat": 17.802400000000002,
    "lng": 77.8733
  },
  {
    "id": "city-290086",
    "name": "Thumkunta",
    "state": "Telangana",
    "type": "City",
    "lat": 15.730400000000001,
    "lng": 79.5613
  },
  {
    "id": "city-302809",
    "name": "Yellapet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3324,
    "lng": 76.81530000000001
  },
  {
    "id": "city-302731",
    "name": "Mulugu",
    "state": "Telangana",
    "type": "City",
    "lat": 16.038400000000003,
    "lng": 77.2533
  },
  {
    "id": "city-263214",
    "name": "Achampet",
    "state": "Telangana",
    "type": "City",
    "lat": 15.762400000000001,
    "lng": 76.6973
  },
  {
    "id": "city-258029",
    "name": "Kalwakurthy",
    "state": "Telangana",
    "type": "City",
    "lat": 16.450400000000002,
    "lng": 77.2893
  },
  {
    "id": "city-257989",
    "name": "Kollapur",
    "state": "Telangana",
    "type": "City",
    "lat": 17.9284,
    "lng": 77.18730000000001
  },
  {
    "id": "city-251680",
    "name": "Nagarkurnool",
    "state": "Telangana",
    "type": "City",
    "lat": 17.354400000000002,
    "lng": 78.6573
  },
  {
    "id": "city-290091",
    "name": "Chandur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.6704,
    "lng": 79.8453
  },
  {
    "id": "city-290089",
    "name": "Chityal",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6084,
    "lng": 78.9233
  },
  {
    "id": "city-251686",
    "name": "Devarakonda",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7204,
    "lng": 76.4753
  },
  {
    "id": "city-290090",
    "name": "Haliya",
    "state": "Telangana",
    "type": "City",
    "lat": 15.700400000000002,
    "lng": 77.3673
  },
  {
    "id": "city-251689",
    "name": "Miryalaguda",
    "state": "Telangana",
    "type": "City",
    "lat": 16.180400000000002,
    "lng": 77.1433
  },
  {
    "id": "city-297095",
    "name": "Nakrekal",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4704,
    "lng": 79.6613
  },
  {
    "id": "city-251685",
    "name": "Nalgonda",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0604,
    "lng": 77.3593
  },
  {
    "id": "city-290074",
    "name": "Kosgi",
    "state": "Telangana",
    "type": "City",
    "lat": 18.4904,
    "lng": 76.3853
  },
  {
    "id": "city-302301",
    "name": "Maddur",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7304,
    "lng": 76.7053
  },
  {
    "id": "city-290072",
    "name": "Makthal",
    "state": "Telangana",
    "type": "City",
    "lat": 16.340400000000002,
    "lng": 78.0233
  },
  {
    "id": "city-248102",
    "name": "Narayanpet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.782400000000003,
    "lng": 76.7653
  },
  {
    "id": "city-248085",
    "name": "Bhainsa",
    "state": "Telangana",
    "type": "City",
    "lat": 18.052400000000002,
    "lng": 76.8873
  },
  {
    "id": "city-290092",
    "name": "Khanapur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.7484,
    "lng": 79.6713
  },
  {
    "id": "city-248089",
    "name": "Nirmal",
    "state": "Telangana",
    "type": "City",
    "lat": 15.5624,
    "lng": 76.4973
  },
  {
    "id": "city-248090",
    "name": "Armoor",
    "state": "Telangana",
    "type": "City",
    "lat": 18.4204,
    "lng": 78.5193
  },
  {
    "id": "city-290093",
    "name": "Bheemgal",
    "state": "Telangana",
    "type": "City",
    "lat": 16.3504,
    "lng": 77.2293
  },
  {
    "id": "city-248092",
    "name": "Bodhan",
    "state": "Telangana",
    "type": "City",
    "lat": 19.0284,
    "lng": 79.3673
  },
  {
    "id": "city-248091",
    "name": "Nizamabad",
    "state": "Telangana",
    "type": "City",
    "lat": 16.982400000000002,
    "lng": 76.1493
  },
  {
    "id": "city-290094",
    "name": "Manthani",
    "state": "Telangana",
    "type": "City",
    "lat": 18.116400000000002,
    "lng": 78.7913
  },
  {
    "id": "city-253268",
    "name": "Peddapalli",
    "state": "Telangana",
    "type": "City",
    "lat": 16.4484,
    "lng": 78.4113
  },
  {
    "id": "city-251648",
    "name": "Ramagundam",
    "state": "Telangana",
    "type": "City",
    "lat": 17.2464,
    "lng": 76.7173
  },
  {
    "id": "city-290095",
    "name": "Sulthanabad",
    "state": "Telangana",
    "type": "City",
    "lat": 16.1184,
    "lng": 76.7733
  },
  {
    "id": "city-251654",
    "name": "Sircilla",
    "state": "Telangana",
    "type": "City",
    "lat": 18.7424,
    "lng": 77.8293
  },
  {
    "id": "city-253269",
    "name": "Vemulawada",
    "state": "Telangana",
    "type": "City",
    "lat": 16.270400000000002,
    "lng": 77.4853
  },
  {
    "id": "city-290099",
    "name": "Adibatla",
    "state": "Telangana",
    "type": "City",
    "lat": 15.5684,
    "lng": 76.5393
  },
  {
    "id": "city-290104",
    "name": "Amangal",
    "state": "Telangana",
    "type": "City",
    "lat": 17.5624,
    "lng": 76.6573
  },
  {
    "id": "city-257865",
    "name": "Badangpet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.2684,
    "lng": 77.2793
  },
  {
    "id": "city-290098",
    "name": "Bandlaguda Jagir",
    "state": "Telangana",
    "type": "City",
    "lat": 15.3324,
    "lng": 77.0793
  },
  {
    "id": "city-302290",
    "name": "Chevella",
    "state": "Telangana",
    "type": "City",
    "lat": 18.3484,
    "lng": 77.4713
  },
  {
    "id": "city-305330",
    "name": "Cyberabad Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 15.2864,
    "lng": 78.1653
  },
  {
    "id": "city-251664",
    "name": "Hyderabad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.3444,
    "lng": 78.4913
  },
  {
    "id": "city-258044",
    "name": "Ibrahimpatnam",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7024,
    "lng": 76.1413
  },
  {
    "id": "city-276409",
    "name": "Jalapally",
    "state": "Telangana",
    "type": "City",
    "lat": 18.2884,
    "lng": 79.1633
  },
  {
    "id": "city-297017",
    "name": "Kothur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.714400000000001,
    "lng": 79.8013
  },
  {
    "id": "city-305331",
    "name": "Malkajgiri Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7264,
    "lng": 76.43730000000001
  },
  {
    "id": "city-290096",
    "name": "Manikonda",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4804,
    "lng": 77.9713
  },
  {
    "id": "city-276410",
    "name": "Meerpet",
    "state": "Telangana",
    "type": "City",
    "lat": 15.772400000000001,
    "lng": 77.8233
  },
  {
    "id": "city-302299",
    "name": "Moinabad",
    "state": "Telangana",
    "type": "City",
    "lat": 15.6784,
    "lng": 79.5813
  },
  {
    "id": "city-290097",
    "name": "Narsingi",
    "state": "Telangana",
    "type": "City",
    "lat": 19.0864,
    "lng": 76.5733
  },
  {
    "id": "city-257864",
    "name": "Pedda Amberpet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6644,
    "lng": 79.2513
  },
  {
    "id": "city-254925",
    "name": "Shadnagar",
    "state": "Telangana",
    "type": "City",
    "lat": 17.9544,
    "lng": 78.3613
  },
  {
    "id": "city-290149",
    "name": "Shamshabad",
    "state": "Telangana",
    "type": "City",
    "lat": 18.668400000000002,
    "lng": 78.7193
  },
  {
    "id": "city-290100",
    "name": "Shankarpally",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4444,
    "lng": 79.6713
  },
  {
    "id": "city-290102",
    "name": "Thukkuguda",
    "state": "Telangana",
    "type": "City",
    "lat": 16.918400000000002,
    "lng": 79.5733
  },
  {
    "id": "city-290150",
    "name": "Turkayamjal",
    "state": "Telangana",
    "type": "City",
    "lat": 17.0944,
    "lng": 79.2533
  },
  {
    "id": "city-290153",
    "name": "Ameenpur",
    "state": "Telangana",
    "type": "City",
    "lat": 16.0304,
    "lng": 78.4133
  },
  {
    "id": "city-260558",
    "name": "Andole Jogipet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.346400000000003,
    "lng": 76.5133
  },
  {
    "id": "city-290151",
    "name": "Bollaram",
    "state": "Telangana",
    "type": "City",
    "lat": 18.860400000000002,
    "lng": 78.1593
  },
  {
    "id": "city-305330",
    "name": "Cyberabad Municipal Corporation",
    "state": "Telangana",
    "type": "City",
    "lat": 15.2864,
    "lng": 78.1653
  },
  {
    "id": "city-302294",
    "name": "Gaddapotharam",
    "state": "Telangana",
    "type": "City",
    "lat": 17.238400000000002,
    "lng": 78.1653
  },
  {
    "id": "city-302324",
    "name": "Gummadidala",
    "state": "Telangana",
    "type": "City",
    "lat": 18.7804,
    "lng": 79.3753
  },
  {
    "id": "city-251664",
    "name": "Hyderabad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.3444,
    "lng": 78.4913
  },
  {
    "id": "city-302732",
    "name": "Indresham ",
    "state": "Telangana",
    "type": "City",
    "lat": 19.026400000000002,
    "lng": 78.0413
  },
  {
    "id": "city-302304",
    "name": "Isnapur",
    "state": "Telangana",
    "type": "City",
    "lat": 16.616400000000002,
    "lng": 79.2513
  },
  {
    "id": "city-302736",
    "name": "Jinnaram",
    "state": "Telangana",
    "type": "City",
    "lat": 17.552400000000002,
    "lng": 77.0193
  },
  {
    "id": "city-302302",
    "name": "Kohir",
    "state": "Telangana",
    "type": "City",
    "lat": 17.4904,
    "lng": 77.3853
  },
  {
    "id": "city-290131",
    "name": "Narayankhed",
    "state": "Telangana",
    "type": "City",
    "lat": 16.744400000000002,
    "lng": 76.8513
  },
  {
    "id": "city-248098",
    "name": "Sadasivpet",
    "state": "Telangana",
    "type": "City",
    "lat": 17.084400000000002,
    "lng": 76.94330000000001
  },
  {
    "id": "city-248094",
    "name": "Sangareddy",
    "state": "Telangana",
    "type": "City",
    "lat": 16.9284,
    "lng": 79.1473
  },
  {
    "id": "city-290152",
    "name": "Tellapur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.1544,
    "lng": 76.8893
  },
  {
    "id": "city-248097",
    "name": "Zaheerabad",
    "state": "Telangana",
    "type": "City",
    "lat": 15.698400000000001,
    "lng": 77.3853
  },
  {
    "id": "city-290132",
    "name": "Cherial",
    "state": "Telangana",
    "type": "City",
    "lat": 16.5244,
    "lng": 78.3193
  },
  {
    "id": "city-260709",
    "name": "Dubbak",
    "state": "Telangana",
    "type": "City",
    "lat": 17.1824,
    "lng": 77.5493
  },
  {
    "id": "city-254930",
    "name": "Gajwel",
    "state": "Telangana",
    "type": "City",
    "lat": 18.5164,
    "lng": 78.9033
  },
  {
    "id": "city-253267",
    "name": "Husnabad",
    "state": "Telangana",
    "type": "City",
    "lat": 18.1124,
    "lng": 77.7073
  },
  {
    "id": "city-248096",
    "name": "Siddipet",
    "state": "Telangana",
    "type": "City",
    "lat": 18.8484,
    "lng": 78.8913
  },
  {
    "id": "city-253257",
    "name": "Huzurnagar",
    "state": "Telangana",
    "type": "City",
    "lat": 16.8304,
    "lng": 76.7013
  },
  {
    "id": "city-253255",
    "name": "Kodad",
    "state": "Telangana",
    "type": "City",
    "lat": 17.2784,
    "lng": 76.8133
  },
  {
    "id": "city-290133",
    "name": "Nereducharla",
    "state": "Telangana",
    "type": "City",
    "lat": 15.188400000000001,
    "lng": 76.1673
  },
  {
    "id": "city-251684",
    "name": "Suryapet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.8704,
    "lng": 77.2693
  },
  {
    "id": "city-290134",
    "name": "Thirumalagiri",
    "state": "Telangana",
    "type": "City",
    "lat": 18.796400000000002,
    "lng": 77.8713
  },
  {
    "id": "city-290136",
    "name": "Kodangal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0664,
    "lng": 76.6493
  },
  {
    "id": "city-290135",
    "name": "Parigi",
    "state": "Telangana",
    "type": "City",
    "lat": 16.5084,
    "lng": 79.8233
  },
  {
    "id": "city-248099",
    "name": "Tandur",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6644,
    "lng": 78.0673
  },
  {
    "id": "city-248100",
    "name": "Vikarabad",
    "state": "Telangana",
    "type": "City",
    "lat": 18.4984,
    "lng": 79.6733
  },
  {
    "id": "city-290142",
    "name": "Amarchinta",
    "state": "Telangana",
    "type": "City",
    "lat": 17.0884,
    "lng": 78.2513
  },
  {
    "id": "city-290140",
    "name": "Atmakur",
    "state": "Telangana",
    "type": "City",
    "lat": 18.5544,
    "lng": 78.8173
  },
  {
    "id": "city-290138",
    "name": "Kothakota",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0124,
    "lng": 79.19930000000001
  },
  {
    "id": "city-290139",
    "name": "Pebbair",
    "state": "Telangana",
    "type": "City",
    "lat": 18.834400000000002,
    "lng": 79.4973
  },
  {
    "id": "city-248104",
    "name": "Wanaparthy",
    "state": "Telangana",
    "type": "City",
    "lat": 15.6904,
    "lng": 78.6893
  },
  {
    "id": "city-253275",
    "name": "Narsampet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7904,
    "lng": 78.6453
  },
  {
    "id": "city-251691",
    "name": "Warangal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.0824,
    "lng": 77.9613
  },
  {
    "id": "city-290137",
    "name": "Wardhannapet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.7024,
    "lng": 76.2853
  },
  {
    "id": "city-290144",
    "name": "Alair",
    "state": "Telangana",
    "type": "City",
    "lat": 18.8704,
    "lng": 78.7573
  },
  {
    "id": "city-251682",
    "name": "Bhongir",
    "state": "Telangana",
    "type": "City",
    "lat": 18.5104,
    "lng": 79.0853
  },
  {
    "id": "city-290143",
    "name": "Choutuppal",
    "state": "Telangana",
    "type": "City",
    "lat": 18.8704,
    "lng": 77.2053
  },
  {
    "id": "city-290141",
    "name": "Mothkur",
    "state": "Telangana",
    "type": "City",
    "lat": 15.980400000000001,
    "lng": 77.0873
  },
  {
    "id": "city-257864",
    "name": "Pedda Amberpet",
    "state": "Telangana",
    "type": "City",
    "lat": 16.6644,
    "lng": 79.2513
  },
  {
    "id": "city-290145",
    "name": "Pochamapally",
    "state": "Telangana",
    "type": "City",
    "lat": 17.334400000000002,
    "lng": 76.9973
  },
  {
    "id": "city-290146",
    "name": "Yadagirigutta",
    "state": "Telangana",
    "type": "City",
    "lat": 17.6824,
    "lng": 78.1533
  },
  {
    "id": "city-294879",
    "name": "Nandikonda",
    "state": "Telangana",
    "type": "City",
    "lat": 16.0064,
    "lng": 76.4853
  },
  {
    "id": "city-251273",
    "name": "Silvassa",
    "state": "The Dadra And Nagar Haveli And Daman And Diu",
    "type": "City",
    "lat": 20.441699999999997,
    "lng": 76.1229
  },
  {
    "id": "city-251272",
    "name": "Daman",
    "state": "The Dadra And Nagar Haveli And Daman And Diu",
    "type": "City",
    "lat": 19.6357,
    "lng": 79.5049
  },
  {
    "id": "city-251271",
    "name": "Diu",
    "state": "The Dadra And Nagar Haveli And Daman And Diu",
    "type": "City",
    "lat": 21.0337,
    "lng": 78.8429
  },
  {
    "id": "city-249802",
    "name": "Ambassa Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 24.5428,
    "lng": 91.5622
  },
  {
    "id": "city-249800",
    "name": "Kamalpur Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 23.9428,
    "lng": 92.5942
  },
  {
    "id": "city-249797",
    "name": "Amarpur Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 22.1448,
    "lng": 90.6962
  },
  {
    "id": "city-249796",
    "name": "Udaipur Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.8628,
    "lng": 90.81020000000001
  },
  {
    "id": "city-249783",
    "name": "Khowai Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.9088,
    "lng": 89.5642
  },
  {
    "id": "city-249784",
    "name": "Teliamura Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 23.2868,
    "lng": 90.03420000000001
  },
  {
    "id": "city-249803",
    "name": "Dharmanagar Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.5388,
    "lng": 92.3182
  },
  {
    "id": "city-261688",
    "name": "Panisagar Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 23.1648,
    "lng": 90.4762
  },
  {
    "id": "city-261690",
    "name": "Bishalgarh Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.6408,
    "lng": 89.1122
  },
  {
    "id": "city-261691",
    "name": "Melaghar Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 24.6248,
    "lng": 90.4722
  },
  {
    "id": "city-249787",
    "name": "Sonamura Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 23.2288,
    "lng": 89.1962
  },
  {
    "id": "city-249798",
    "name": "Belonia Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.5788,
    "lng": 89.7822
  },
  {
    "id": "city-249799",
    "name": "Sabroom Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 22.718799999999998,
    "lng": 89.0822
  },
  {
    "id": "city-261689",
    "name": "Santirbazar Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.0808,
    "lng": 89.89620000000001
  },
  {
    "id": "city-249804",
    "name": "Kailashahar Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 21.5488,
    "lng": 89.26020000000001
  },
  {
    "id": "city-249805",
    "name": "Kumarghat Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 23.026799999999998,
    "lng": 92.7102
  },
  {
    "id": "city-249785",
    "name": "Agartala Municipal Corporation",
    "state": "Tripura",
    "type": "City",
    "lat": 21.5228,
    "lng": 91.7822
  },
  {
    "id": "city-261687",
    "name": "Jirania Nagar Panchayat",
    "state": "Tripura",
    "type": "City",
    "lat": 21.104799999999997,
    "lng": 90.6002
  },
  {
    "id": "city-261692",
    "name": "Mohanpur Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 22.6788,
    "lng": 89.39420000000001
  },
  {
    "id": "city-249786",
    "name": "Ranirbazar Municipal Council",
    "state": "Tripura",
    "type": "City",
    "lat": 24.0748,
    "lng": 92.2382
  },
  {
    "id": "city-249794",
    "name": "Badharghat",
    "state": "Tripura",
    "type": "City",
    "lat": 21.0208,
    "lng": 89.4842
  },
  {
    "id": "city-249789",
    "name": "Gandhigram",
    "state": "Tripura",
    "type": "City",
    "lat": 21.3888,
    "lng": 92.3002
  },
  {
    "id": "city-249791",
    "name": "Indranagar",
    "state": "Tripura",
    "type": "City",
    "lat": 24.314799999999998,
    "lng": 92.8622
  },
  {
    "id": "city-249792",
    "name": "Jogendranagar",
    "state": "Tripura",
    "type": "City",
    "lat": 23.8948,
    "lng": 91.6182
  },
  {
    "id": "city-249790",
    "name": "Kunjaban",
    "state": "Tripura",
    "type": "City",
    "lat": 23.7008,
    "lng": 92.2762
  },
  {
    "id": "city-249788",
    "name": "Narsingarh",
    "state": "Tripura",
    "type": "City",
    "lat": 22.9428,
    "lng": 92.77820000000001
  },
  {
    "id": "city-249793",
    "name": "Pratapgarh",
    "state": "Tripura",
    "type": "City",
    "lat": 23.1088,
    "lng": 91.92420000000001
  },
  {
    "id": "city-249066",
    "name": "Achhnera",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9987,
    "lng": 80.1862
  },
  {
    "id": "city-249062",
    "name": "Agra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9047,
    "lng": 79.9842
  },
  {
    "id": "city-249074",
    "name": "Bah",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9207,
    "lng": 81.48020000000001
  },
  {
    "id": "city-249060",
    "name": "Dayalbagh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.252699999999997,
    "lng": 78.0762
  },
  {
    "id": "city-249059",
    "name": "Etmadpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.630699999999997,
    "lng": 80.8182
  },
  {
    "id": "city-249072",
    "name": "Fatehabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.182699999999997,
    "lng": 78.29820000000001
  },
  {
    "id": "city-249068",
    "name": "Fatehpur Sikri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5047,
    "lng": 78.3202
  },
  {
    "id": "city-249069",
    "name": "Jagner",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5327,
    "lng": 79.3322
  },
  {
    "id": "city-249070",
    "name": "Khairragarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8307,
    "lng": 78.6902
  },
  {
    "id": "city-249067",
    "name": "Kiraoli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7247,
    "lng": 79.2602
  },
  {
    "id": "city-249073",
    "name": "Pinahat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6607,
    "lng": 78.6842
  },
  {
    "id": "city-249071",
    "name": "Shamsabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9787,
    "lng": 80.0942
  },
  {
    "id": "city-249061",
    "name": "Swamibagh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0967,
    "lng": 77.9762
  },
  {
    "id": "city-249025",
    "name": "Aligarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.770699999999998,
    "lng": 81.87020000000001
  },
  {
    "id": "city-249022",
    "name": "Atrauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.142699999999998,
    "lng": 80.21820000000001
  },
  {
    "id": "city-299018",
    "name": "Barauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7667,
    "lng": 78.78620000000001
  },
  {
    "id": "city-249031",
    "name": "Beswan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9027,
    "lng": 81.6342
  },
  {
    "id": "city-297076",
    "name": "Chandaus",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4087,
    "lng": 78.09620000000001
  },
  {
    "id": "city-249023",
    "name": "Chharra Rafatpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.526699999999998,
    "lng": 81.14620000000001
  },
  {
    "id": "city-298115",
    "name": "Gabhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.054699999999997,
    "lng": 79.1222
  },
  {
    "id": "city-249024",
    "name": "Harduaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.496699999999997,
    "lng": 79.4402
  },
  {
    "id": "city-249030",
    "name": "Iglas",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6787,
    "lng": 79.3862
  },
  {
    "id": "city-249026",
    "name": "Jalali",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8727,
    "lng": 78.8722
  },
  {
    "id": "city-249019",
    "name": "Jatari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9007,
    "lng": 78.7402
  },
  {
    "id": "city-299023",
    "name": "Jawan Sikandpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6707,
    "lng": 78.81020000000001
  },
  {
    "id": "city-249027",
    "name": "Kauriaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.552699999999998,
    "lng": 78.9522
  },
  {
    "id": "city-249020",
    "name": "Khair",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6967,
    "lng": 78.94420000000001
  },
  {
    "id": "city-297033",
    "name": "Madrak",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.118699999999997,
    "lng": 79.9062
  },
  {
    "id": "city-249028",
    "name": "Pilkhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.982699999999998,
    "lng": 78.1782
  },
  {
    "id": "city-297045",
    "name": "Pisawa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7607,
    "lng": 80.8082
  },
  {
    "id": "city-249029",
    "name": "Vijaigarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.124699999999997,
    "lng": 79.80420000000001
  },
  {
    "id": "city-249400",
    "name": "Akbarpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.886699999999998,
    "lng": 78.4662
  },
  {
    "id": "city-249398",
    "name": "Ashrafpur Kichhauchha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.092699999999997,
    "lng": 81.8122
  },
  {
    "id": "city-249394",
    "name": "Iltifatganj Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.276699999999998,
    "lng": 81.5562
  },
  {
    "id": "city-298935",
    "name": "Jahagirganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2827,
    "lng": 81.1502
  },
  {
    "id": "city-249399",
    "name": "Jalalpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6407,
    "lng": 80.35220000000001
  },
  {
    "id": "city-300509",
    "name": "Rajesultanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1027,
    "lng": 79.4102
  },
  {
    "id": "city-249396",
    "name": "Tanda (Ambedkar Nagar)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.020699999999998,
    "lng": 81.72420000000001
  },
  {
    "id": "city-249402",
    "name": "Amethi(Amethi)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0007,
    "lng": 80.32820000000001
  },
  {
    "id": "city-276425",
    "name": "Gauriganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.566699999999997,
    "lng": 78.21820000000001
  },
  {
    "id": "city-249240",
    "name": "Jais",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0887,
    "lng": 81.68820000000001
  },
  {
    "id": "city-249401",
    "name": "Musafirkhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0107,
    "lng": 79.31020000000001
  },
  {
    "id": "city-248950",
    "name": "Amroha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.386699999999998,
    "lng": 81.6382
  },
  {
    "id": "city-248947",
    "name": "Bachhraon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.682699999999997,
    "lng": 78.2462
  },
  {
    "id": "city-248946",
    "name": "Dhanaura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9587,
    "lng": 81.3942
  },
  {
    "id": "city-297027",
    "name": "Gajralua",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.2087,
    "lng": 80.1042
  },
  {
    "id": "city-248952",
    "name": "Hasanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1707,
    "lng": 80.6382
  },
  {
    "id": "city-248951",
    "name": "Joya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9527,
    "lng": 81.4722
  },
  {
    "id": "city-248949",
    "name": "Naugawan Sadat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.392699999999998,
    "lng": 81.4162
  },
  {
    "id": "city-297714",
    "name": "Said Nagli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7627,
    "lng": 80.95020000000001
  },
  {
    "id": "city-248953",
    "name": "Ujhari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.616699999999998,
    "lng": 80.7522
  },
  {
    "id": "city-249268",
    "name": "Achhalda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0187,
    "lng": 80.8062
  },
  {
    "id": "city-249270",
    "name": "Atasu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.886699999999998,
    "lng": 80.42620000000001
  },
  {
    "id": "city-249273",
    "name": "Auraiya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1707,
    "lng": 81.0862
  },
  {
    "id": "city-249269",
    "name": "Babarpur Ajitmal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.688699999999997,
    "lng": 80.5922
  },
  {
    "id": "city-249267",
    "name": "Bidhuna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.776699999999998,
    "lng": 81.50420000000001
  },
  {
    "id": "city-249272",
    "name": "Dibiyapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.976699999999997,
    "lng": 78.8082
  },
  {
    "id": "city-249271",
    "name": "Phaphund",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9547,
    "lng": 81.6382
  },
  {
    "id": "city-249391",
    "name": "Ayodhya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0767,
    "lng": 80.5802
  },
  {
    "id": "city-249389",
    "name": "Bhadarsa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0867,
    "lng": 80.81020000000001
  },
  {
    "id": "city-249393",
    "name": "Bikapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.854699999999998,
    "lng": 80.9222
  },
  {
    "id": "city-249392",
    "name": "Gosainganj (Lucknow)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8967,
    "lng": 78.1442
  },
  {
    "id": "city-297756",
    "name": "Khirauni(Suchittaganj)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3207,
    "lng": 78.6162
  },
  {
    "id": "city-297758",
    "name": "Kumarganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.650699999999997,
    "lng": 81.33420000000001
  },
  {
    "id": "city-300865",
    "name": "Maa Kamakhya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4987,
    "lng": 78.2142
  },
  {
    "id": "city-249388",
    "name": "Rudauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.642699999999998,
    "lng": 80.5982
  },
  {
    "id": "city-249468",
    "name": "Atraulia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.072699999999998,
    "lng": 78.8242
  },
  {
    "id": "city-249477",
    "name": "Azamgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.304699999999997,
    "lng": 79.6482
  },
  {
    "id": "city-249472",
    "name": "Azmatgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0367,
    "lng": 79.5642
  },
  {
    "id": "city-249470",
    "name": "Bilariaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.142699999999998,
    "lng": 79.5062
  },
  {
    "id": "city-297075",
    "name": "Boodhanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1547,
    "lng": 81.6542
  },
  {
    "id": "city-301253",
    "name": "Jahanaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5367,
    "lng": 79.1282
  },
  {
    "id": "city-249471",
    "name": "Jiyanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4427,
    "lng": 79.95020000000001
  },
  {
    "id": "city-249481",
    "name": "Katghar Lalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5767,
    "lng": 79.6962
  },
  {
    "id": "city-249239",
    "name": "Maharajganj(Azamgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.758699999999997,
    "lng": 79.3382
  },
  {
    "id": "city-263356",
    "name": "Mahul",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.892699999999998,
    "lng": 78.0202
  },
  {
    "id": "city-300510",
    "name": "Martinganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3847,
    "lng": 78.96820000000001
  },
  {
    "id": "city-249482",
    "name": "Mehnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3127,
    "lng": 78.5922
  },
  {
    "id": "city-249474",
    "name": "Mubarakpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2947,
    "lng": 79.0342
  },
  {
    "id": "city-249478",
    "name": "Nizamabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7167,
    "lng": 78.0762
  },
  {
    "id": "city-249480",
    "name": "Phoolpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3207,
    "lng": 81.2082
  },
  {
    "id": "city-249479",
    "name": "Sarai Mir",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1387,
    "lng": 81.7502
  },
  {
    "id": "city-248974",
    "name": "Agarwal Mandi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.058699999999998,
    "lng": 80.6782
  },
  {
    "id": "city-248975",
    "name": "Aminagar Sarai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.3827,
    "lng": 81.6982
  },
  {
    "id": "city-248973",
    "name": "Baghpat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1087,
    "lng": 78.38820000000001
  },
  {
    "id": "city-248972",
    "name": "Baraut",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1207,
    "lng": 81.3922
  },
  {
    "id": "city-248969",
    "name": "Chhaprauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.040699999999998,
    "lng": 78.6482
  },
  {
    "id": "city-248971",
    "name": "Doghat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.124699999999997,
    "lng": 78.9242
  },
  {
    "id": "city-297023",
    "name": "Khekada",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.276699999999998,
    "lng": 78.3722
  },
  {
    "id": "city-297820",
    "name": "Rataul",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.508699999999997,
    "lng": 78.4042
  },
  {
    "id": "city-248970",
    "name": "Tikri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4167,
    "lng": 79.2642
  },
  {
    "id": "city-249410",
    "name": "Bahraich",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5707,
    "lng": 79.9182
  },
  {
    "id": "city-249411",
    "name": "Jarwal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9727,
    "lng": 78.9722
  },
  {
    "id": "city-299017",
    "name": "Kaisharganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5007,
    "lng": 80.0122
  },
  {
    "id": "city-300930",
    "name": "Mihinpurwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.170699999999997,
    "lng": 80.41420000000001
  },
  {
    "id": "city-249408",
    "name": "Nanpara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8127,
    "lng": 80.2762
  },
  {
    "id": "city-297070",
    "name": "Payagpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4927,
    "lng": 81.29220000000001
  },
  {
    "id": "city-249409",
    "name": "Risia Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.310699999999997,
    "lng": 79.4662
  },
  {
    "id": "city-300511",
    "name": "Rupaideeha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.598699999999997,
    "lng": 79.3542
  },
  {
    "id": "city-277185",
    "name": "Bairia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7747,
    "lng": 80.6662
  },
  {
    "id": "city-249497",
    "name": "Ballia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.988699999999998,
    "lng": 80.3002
  },
  {
    "id": "city-249498",
    "name": "Bansdih",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.212699999999998,
    "lng": 79.6122
  },
  {
    "id": "city-249492",
    "name": "Belthara Road",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2727,
    "lng": 80.35220000000001
  },
  {
    "id": "city-249496",
    "name": "Chitbara Gaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.4927,
    "lng": 78.72420000000001
  },
  {
    "id": "city-249494",
    "name": "Maniyar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.484699999999997,
    "lng": 80.6602
  },
  {
    "id": "city-297083",
    "name": "Nagra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.804699999999997,
    "lng": 78.29220000000001
  },
  {
    "id": "city-249495",
    "name": "Rasra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0367,
    "lng": 78.4842
  },
  {
    "id": "city-297861",
    "name": "Ratsar Kala",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.334699999999998,
    "lng": 81.09020000000001
  },
  {
    "id": "city-249500",
    "name": "Reoti",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.816699999999997,
    "lng": 78.66420000000001
  },
  {
    "id": "city-249499",
    "name": "Sahatwar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5567,
    "lng": 79.90820000000001
  },
  {
    "id": "city-249493",
    "name": "Sikanderpur (Ballia)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8067,
    "lng": 78.49820000000001
  },
  {
    "id": "city-249414",
    "name": "Balrampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7827,
    "lng": 81.1222
  },
  {
    "id": "city-300512",
    "name": "Gaisari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.014699999999998,
    "lng": 78.88220000000001
  },
  {
    "id": "city-249416",
    "name": "Pachperwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1847,
    "lng": 79.0322
  },
  {
    "id": "city-249415",
    "name": "Tulsipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.854699999999998,
    "lng": 80.4342
  },
  {
    "id": "city-249417",
    "name": "Utraula",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9987,
    "lng": 80.3862
  },
  {
    "id": "city-249339",
    "name": "Atarra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1727,
    "lng": 80.00420000000001
  },
  {
    "id": "city-249336",
    "name": "Baberu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3127,
    "lng": 81.3442
  },
  {
    "id": "city-249334",
    "name": "Banda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.886699999999998,
    "lng": 81.42620000000001
  },
  {
    "id": "city-249338",
    "name": "Bisanda Buzurg",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.848699999999997,
    "lng": 78.5122
  },
  {
    "id": "city-249333",
    "name": "Mataundh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7947,
    "lng": 78.79820000000001
  },
  {
    "id": "city-249340",
    "name": "Naraini",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3947,
    "lng": 81.3182
  },
  {
    "id": "city-249337",
    "name": "Oran",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1667,
    "lng": 80.1062
  },
  {
    "id": "city-249335",
    "name": "Tindwari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7827,
    "lng": 79.4902
  },
  {
    "id": "city-249380",
    "name": "Banki",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.336699999999997,
    "lng": 81.37620000000001
  },
  {
    "id": "city-277186",
    "name": "Belhara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.712699999999998,
    "lng": 81.1122
  },
  {
    "id": "city-249385",
    "name": "Dariyabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.232699999999998,
    "lng": 79.56020000000001
  },
  {
    "id": "city-249378",
    "name": "Dewa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.116699999999998,
    "lng": 81.5562
  },
  {
    "id": "city-249376",
    "name": "Fatehpur(Barabanki)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4727,
    "lng": 81.89620000000001
  },
  {
    "id": "city-249387",
    "name": "Haidergarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9607,
    "lng": 80.6802
  },
  {
    "id": "city-301389",
    "name": "Nawabganj (Bara Banki)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1087,
    "lng": 78.5322
  },
  {
    "id": "city-299081",
    "name": "Ram Sanehi Ghat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6787,
    "lng": 78.0822
  },
  {
    "id": "city-249377",
    "name": "Ramnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1327,
    "lng": 81.8682
  },
  {
    "id": "city-249381",
    "name": "Satrikh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4027,
    "lng": 79.38220000000001
  },
  {
    "id": "city-249386",
    "name": "Siddhaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1587,
    "lng": 80.6742
  },
  {
    "id": "city-253131",
    "name": "Subeha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.034699999999997,
    "lng": 79.7102
  },
  {
    "id": "city-249384",
    "name": "Tikait Nagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1407,
    "lng": 81.2202
  },
  {
    "id": "city-249382",
    "name": "Zaidpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.828699999999998,
    "lng": 81.8922
  },
  {
    "id": "city-249145",
    "name": "Aonla",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.488699999999998,
    "lng": 81.0882
  },
  {
    "id": "city-249135",
    "name": "Bahedi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.912699999999997,
    "lng": 81.94420000000001
  },
  {
    "id": "city-249149",
    "name": "Bareilly",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.058699999999998,
    "lng": 79.8622
  },
  {
    "id": "city-249144",
    "name": "Bisharatganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7307,
    "lng": 81.69420000000001
  },
  {
    "id": "city-249138",
    "name": "Deoranian",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9847,
    "lng": 78.68820000000001
  },
  {
    "id": "city-249147",
    "name": "Dhaura Tanda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7687,
    "lng": 81.66420000000001
  },
  {
    "id": "city-249156",
    "name": "Faridpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.636699999999998,
    "lng": 80.5322
  },
  {
    "id": "city-249136",
    "name": "Faridpur(Bareilly)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.938699999999997,
    "lng": 79.4462
  },
  {
    "id": "city-249142",
    "name": "Fatehganj Pashchimi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2547,
    "lng": 80.75420000000001
  },
  {
    "id": "city-249155",
    "name": "Fatehganj Purvi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.058699999999998,
    "lng": 78.7582
  },
  {
    "id": "city-249141",
    "name": "Mirganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.566699999999997,
    "lng": 78.01820000000001
  },
  {
    "id": "city-249154",
    "name": "Nawabganj(Bareilly)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0107,
    "lng": 80.5982
  },
  {
    "id": "city-249137",
    "name": "Richha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5767,
    "lng": 78.5122
  },
  {
    "id": "city-249152",
    "name": "Rithora",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5887,
    "lng": 79.10820000000001
  },
  {
    "id": "city-249153",
    "name": "Sainthal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5627,
    "lng": 79.0942
  },
  {
    "id": "city-249143",
    "name": "Shahi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9527,
    "lng": 78.8802
  },
  {
    "id": "city-249139",
    "name": "Shergarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.898699999999998,
    "lng": 78.1662
  },
  {
    "id": "city-249140",
    "name": "Shishgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6727,
    "lng": 78.9362
  },
  {
    "id": "city-249146",
    "name": "Sirauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9687,
    "lng": 80.3362
  },
  {
    "id": "city-249151",
    "name": "Thiriya Nizamat Khan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2147,
    "lng": 81.88220000000001
  },
  {
    "id": "city-297073",
    "name": "Babhnan Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9227,
    "lng": 79.46220000000001
  },
  {
    "id": "city-289237",
    "name": "Bankti",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9287,
    "lng": 80.4402
  },
  {
    "id": "city-249430",
    "name": "Basti",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5047,
    "lng": 80.58420000000001
  },
  {
    "id": "city-297060",
    "name": "Bhanpur Kaswa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1607,
    "lng": 80.5522
  },
  {
    "id": "city-297066",
    "name": "Gaayghat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.386699999999998,
    "lng": 81.8062
  },
  {
    "id": "city-297031",
    "name": "Ganeshpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9807,
    "lng": 81.1162
  },
  {
    "id": "city-249429",
    "name": "Harraiya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.776699999999998,
    "lng": 80.4242
  },
  {
    "id": "city-298096",
    "name": "Kaptanganj Basti",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.322699999999998,
    "lng": 77.9822
  },
  {
    "id": "city-298093",
    "name": "Munderwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.520699999999998,
    "lng": 81.12020000000001
  },
  {
    "id": "city-298095",
    "name": "Nagar Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.432699999999997,
    "lng": 78.0882
  },
  {
    "id": "city-263359",
    "name": "Rudhauli Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7427,
    "lng": 78.14620000000001
  },
  {
    "id": "city-249535",
    "name": "Bhadohi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1327,
    "lng": 78.5402
  },
  {
    "id": "city-249539",
    "name": "Ghosia Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6967,
    "lng": 79.94420000000001
  },
  {
    "id": "city-249537",
    "name": "Gopi Ganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7687,
    "lng": 80.76820000000001
  },
  {
    "id": "city-249536",
    "name": "Gyanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0507,
    "lng": 81.6302
  },
  {
    "id": "city-249538",
    "name": "Khamaria",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5067,
    "lng": 80.3422
  },
  {
    "id": "city-249534",
    "name": "Nai Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6587,
    "lng": 80.0702
  },
  {
    "id": "city-249533",
    "name": "Suriyawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9407,
    "lng": 79.06020000000001
  },
  {
    "id": "city-248917",
    "name": "Afzalgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9667,
    "lng": 80.68220000000001
  },
  {
    "id": "city-248910",
    "name": "Bijnor",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4107,
    "lng": 80.38220000000001
  },
  {
    "id": "city-248924",
    "name": "Chandpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2367,
    "lng": 79.7642
  },
  {
    "id": "city-248919",
    "name": "Dhampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.2487,
    "lng": 79.79220000000001
  },
  {
    "id": "city-248914",
    "name": "Haldaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3847,
    "lng": 81.15220000000001
  },
  {
    "id": "city-248892",
    "name": "Jalalabad(Bijnor)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.180699999999998,
    "lng": 80.90820000000001
  },
  {
    "id": "city-248907",
    "name": "Jalalabad(Shamli)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9727,
    "lng": 80.9882
  },
  {
    "id": "city-248913",
    "name": "Jhalu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8467,
    "lng": 78.5942
  },
  {
    "id": "city-248908",
    "name": "Kiratpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.490699999999997,
    "lng": 80.92620000000001
  },
  {
    "id": "city-248909",
    "name": "Mandawar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6007,
    "lng": 80.96820000000001
  },
  {
    "id": "city-248915",
    "name": "Nagina",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6547,
    "lng": 78.5222
  },
  {
    "id": "city-248905",
    "name": "Najibabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.662699999999997,
    "lng": 79.5222
  },
  {
    "id": "city-248920",
    "name": "Nehtaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.316699999999997,
    "lng": 80.3082
  },
  {
    "id": "city-248923",
    "name": "Noorpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.296699999999998,
    "lng": 80.50420000000001
  },
  {
    "id": "city-248904",
    "name": "Sahanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8507,
    "lng": 79.0222
  },
  {
    "id": "city-248922",
    "name": "Sahaspur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7607,
    "lng": 78.2322
  },
  {
    "id": "city-248921",
    "name": "Seohara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.624699999999997,
    "lng": 81.2642
  },
  {
    "id": "city-248918",
    "name": "Sherkot",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.002699999999997,
    "lng": 79.39020000000001
  },
  {
    "id": "city-248916",
    "name": "Warhapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0947,
    "lng": 81.5062
  },
  {
    "id": "city-249131",
    "name": "Allapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4407,
    "lng": 80.64020000000001
  },
  {
    "id": "city-249122",
    "name": "Bilsi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6447,
    "lng": 81.9242
  },
  {
    "id": "city-249118",
    "name": "Bisauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2247,
    "lng": 81.3922
  },
  {
    "id": "city-249126",
    "name": "Budaun",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.8007,
    "lng": 80.4722
  },
  {
    "id": "city-297063",
    "name": "Dahagwan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.484699999999997,
    "lng": 78.4522
  },
  {
    "id": "city-297026",
    "name": "Dataganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6227,
    "lng": 81.5462
  },
  {
    "id": "city-249116",
    "name": "Faizganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.098699999999997,
    "lng": 80.0382
  },
  {
    "id": "city-249128",
    "name": "Gulariya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3467,
    "lng": 78.4222
  },
  {
    "id": "city-249115",
    "name": "Islamnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.604699999999998,
    "lng": 81.0522
  },
  {
    "id": "city-249124",
    "name": "Kachhla",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2827,
    "lng": 80.74220000000001
  },
  {
    "id": "city-249130",
    "name": "Kakrala",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.984699999999997,
    "lng": 80.50420000000001
  },
  {
    "id": "city-249127",
    "name": "Kunwargaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0327,
    "lng": 81.8082
  },
  {
    "id": "city-249117",
    "name": "Mundia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3467,
    "lng": 78.97420000000001
  },
  {
    "id": "city-249121",
    "name": "Rudayan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6587,
    "lng": 80.0942
  },
  {
    "id": "city-249123",
    "name": "Sahaswan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9667,
    "lng": 78.6182
  },
  {
    "id": "city-249119",
    "name": "Saidpur(Badaun)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6387,
    "lng": 79.5142
  },
  {
    "id": "city-249129",
    "name": "Sakhanu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.040699999999998,
    "lng": 80.7522
  },
  {
    "id": "city-249125",
    "name": "Ujhani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.368699999999997,
    "lng": 81.0642
  },
  {
    "id": "city-249133",
    "name": "Usawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1607,
    "lng": 80.6162
  },
  {
    "id": "city-249134",
    "name": "Usehat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.670699999999997,
    "lng": 81.42620000000001
  },
  {
    "id": "city-249120",
    "name": "Wazirganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.180699999999998,
    "lng": 80.4602
  },
  {
    "id": "city-249011",
    "name": "Anupshahr",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1387,
    "lng": 80.0942
  },
  {
    "id": "city-249004",
    "name": "Aurangabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0387,
    "lng": 81.0982
  },
  {
    "id": "city-249007",
    "name": "Bhawan Bahadur Nagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.932699999999997,
    "lng": 80.3002
  },
  {
    "id": "city-249009",
    "name": "Bugrasi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.232699999999998,
    "lng": 79.86420000000001
  },
  {
    "id": "city-249005",
    "name": "Bulandshahr",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2307,
    "lng": 81.57820000000001
  },
  {
    "id": "city-249017",
    "name": "Chhatari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0827,
    "lng": 81.3982
  },
  {
    "id": "city-249013",
    "name": "Debai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0647,
    "lng": 81.94420000000001
  },
  {
    "id": "city-249006",
    "name": "Gulaothi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7047,
    "lng": 78.5202
  },
  {
    "id": "city-249012",
    "name": "Jahangirabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.322699999999998,
    "lng": 78.2702
  },
  {
    "id": "city-248999",
    "name": "Kakod",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1867,
    "lng": 78.1342
  },
  {
    "id": "city-249010",
    "name": "Khanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.772699999999997,
    "lng": 79.74820000000001
  },
  {
    "id": "city-249018",
    "name": "Khurja",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.240699999999997,
    "lng": 80.28020000000001
  },
  {
    "id": "city-249014",
    "name": "Naraura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6907,
    "lng": 81.4942
  },
  {
    "id": "city-249016",
    "name": "Pahasu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8147,
    "lng": 80.4822
  },
  {
    "id": "city-249015",
    "name": "Shikarpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.4007,
    "lng": 78.68820000000001
  },
  {
    "id": "city-249008",
    "name": "Siana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8907,
    "lng": 78.9582
  },
  {
    "id": "city-249003",
    "name": "Sikandrabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9667,
    "lng": 79.7622
  },
  {
    "id": "city-274822",
    "name": "Yeida",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5707,
    "lng": 78.0382
  },
  {
    "id": "city-249522",
    "name": "Chakia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2607,
    "lng": 78.14020000000001
  },
  {
    "id": "city-249520",
    "name": "Chandauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5327,
    "lng": 78.0042
  },
  {
    "id": "city-249518",
    "name": "Pt Deen Dayal Nagar(Mughalsarai)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.116699999999998,
    "lng": 80.6362
  },
  {
    "id": "city-301243",
    "name": "Pt. Deen Dayal Upadhyaya Nagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1227,
    "lng": 79.0702
  },
  {
    "id": "city-249521",
    "name": "Saiyad Raja",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9927,
    "lng": 81.4242
  },
  {
    "id": "city-249342",
    "name": "Chitrakoot Dham - Karwi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.316699999999997,
    "lng": 79.26820000000001
  },
  {
    "id": "city-249341",
    "name": "Manikpur Sarhat (Chitrakoot)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8767,
    "lng": 79.82820000000001
  },
  {
    "id": "city-299010",
    "name": "Mau Mustkil",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.770699999999998,
    "lng": 80.38220000000001
  },
  {
    "id": "city-249343",
    "name": "Rajapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8207,
    "lng": 81.4842
  },
  {
    "id": "city-249463",
    "name": "Badhani Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0967,
    "lng": 80.22420000000001
  },
  {
    "id": "city-300768",
    "name": "Baitalpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.310699999999997,
    "lng": 81.3862
  },
  {
    "id": "city-281989",
    "name": "Bariyarpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6647,
    "lng": 80.7282
  },
  {
    "id": "city-300729",
    "name": "Bhaluani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0947,
    "lng": 80.0582
  },
  {
    "id": "city-249467",
    "name": "Bhatpar Rani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9787,
    "lng": 79.3982
  },
  {
    "id": "city-249460",
    "name": "Deoria",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0387,
    "lng": 78.2582
  },
  {
    "id": "city-249462",
    "name": "Gaura Barhaj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.246699999999997,
    "lng": 80.0982
  },
  {
    "id": "city-249458",
    "name": "Gauri Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4427,
    "lng": 79.2142
  },
  {
    "id": "city-300779",
    "name": "Hetimpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0827,
    "lng": 80.87020000000001
  },
  {
    "id": "city-249466",
    "name": "Lar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1607,
    "lng": 81.92020000000001
  },
  {
    "id": "city-300789",
    "name": "Madanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8067,
    "lng": 80.5382
  },
  {
    "id": "city-249464",
    "name": "Majhauliraj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1987,
    "lng": 81.24220000000001
  },
  {
    "id": "city-300782",
    "name": "Pathardewa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7687,
    "lng": 80.50420000000001
  },
  {
    "id": "city-249459",
    "name": "Rampur Karkhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0627,
    "lng": 80.65820000000001
  },
  {
    "id": "city-249461",
    "name": "Rudrapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9927,
    "lng": 81.3442
  },
  {
    "id": "city-249465",
    "name": "Salempur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6447,
    "lng": 80.6362
  },
  {
    "id": "city-300807",
    "name": "Tarkulwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8447,
    "lng": 81.9002
  },
  {
    "id": "city-249095",
    "name": "Aliganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.526699999999998,
    "lng": 80.3062
  },
  {
    "id": "city-249102",
    "name": "Awagarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7567,
    "lng": 78.6602
  },
  {
    "id": "city-249098",
    "name": "Etah",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1787,
    "lng": 80.4782
  },
  {
    "id": "city-249096",
    "name": "Jaithara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1547,
    "lng": 79.28620000000001
  },
  {
    "id": "city-249101",
    "name": "Jalesar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.046699999999998,
    "lng": 78.9782
  },
  {
    "id": "city-249099",
    "name": "Marehra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6707,
    "lng": 80.42620000000001
  },
  {
    "id": "city-300713",
    "name": "Mirhachi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6647,
    "lng": 81.8722
  },
  {
    "id": "city-249100",
    "name": "Nidhauli Kalan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7807,
    "lng": 78.9962
  },
  {
    "id": "city-249094",
    "name": "Raja Ka Rampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.276699999999998,
    "lng": 78.4762
  },
  {
    "id": "city-249097",
    "name": "Sakit",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.182699999999997,
    "lng": 78.0102
  },
  {
    "id": "city-249265",
    "name": "Bakewar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9807,
    "lng": 79.42020000000001
  },
  {
    "id": "city-249264",
    "name": "Bharthana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0807,
    "lng": 79.7042
  },
  {
    "id": "city-249263",
    "name": "Ekdil",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.944699999999997,
    "lng": 81.22420000000001
  },
  {
    "id": "city-249262",
    "name": "Etawah",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.950699999999998,
    "lng": 80.53020000000001
  },
  {
    "id": "city-249261",
    "name": "Jaswantnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.744699999999998,
    "lng": 78.4722
  },
  {
    "id": "city-249266",
    "name": "Lakhna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.456699999999998,
    "lng": 80.9762
  },
  {
    "id": "city-249250",
    "name": "Farrukhabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0047,
    "lng": 79.2042
  },
  {
    "id": "city-249248",
    "name": "Kaimganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7187,
    "lng": 80.6662
  },
  {
    "id": "city-249252",
    "name": "Kamalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.734699999999997,
    "lng": 78.7142
  },
  {
    "id": "city-249247",
    "name": "Kampil",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.406699999999997,
    "lng": 81.42620000000001
  },
  {
    "id": "city-300652",
    "name": "Khimsepur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8267,
    "lng": 78.7902
  },
  {
    "id": "city-249490",
    "name": "Mohammadabad (Farrukhabad)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.566699999999997,
    "lng": 81.5462
  },
  {
    "id": "city-297735",
    "name": "Nawabganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5647,
    "lng": 78.9962
  },
  {
    "id": "city-300651",
    "name": "Sankisa Basantpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6987,
    "lng": 79.3742
  },
  {
    "id": "city-297032",
    "name": "Shamshabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4027,
    "lng": 80.64620000000001
  },
  {
    "id": "city-297623",
    "name": "Asothar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1227,
    "lng": 78.5982
  },
  {
    "id": "city-249346",
    "name": "Bahuwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.8267,
    "lng": 81.2782
  },
  {
    "id": "city-249345",
    "name": "Bindki",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.252699999999997,
    "lng": 80.4842
  },
  {
    "id": "city-249347",
    "name": "Fatehpur(Fatehpur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7047,
    "lng": 78.2962
  },
  {
    "id": "city-253113",
    "name": "Hathgam",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3307,
    "lng": 80.4782
  },
  {
    "id": "city-300833",
    "name": "Karikan Dhata",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.880699999999997,
    "lng": 81.9362
  },
  {
    "id": "city-249348",
    "name": "Khaga",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5387,
    "lng": 78.0462
  },
  {
    "id": "city-300839",
    "name": "Khakhareru",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.8907,
    "lng": 79.5502
  },
  {
    "id": "city-249349",
    "name": "Kishunpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1527,
    "lng": 80.5522
  },
  {
    "id": "city-249344",
    "name": "Kora Jahanabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.360699999999998,
    "lng": 78.60820000000001
  },
  {
    "id": "city-277188",
    "name": "Eka",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2927,
    "lng": 81.0122
  },
  {
    "id": "city-249080",
    "name": "Fariha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.860699999999998,
    "lng": 80.7402
  },
  {
    "id": "city-249079",
    "name": "Firozabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4107,
    "lng": 79.7902
  },
  {
    "id": "city-249081",
    "name": "Jasrana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0827,
    "lng": 78.0942
  },
  {
    "id": "city-297081",
    "name": "Makkhanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9027,
    "lng": 79.6982
  },
  {
    "id": "city-249082",
    "name": "Shikohabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.054699999999997,
    "lng": 81.4102
  },
  {
    "id": "city-249083",
    "name": "Sirsaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8787,
    "lng": 78.5862
  },
  {
    "id": "city-249075",
    "name": "Tundla",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6467,
    "lng": 81.68220000000001
  },
  {
    "id": "city-248997",
    "name": "Bilaspur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4347,
    "lng": 78.2702
  },
  {
    "id": "city-248996",
    "name": "Dadri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6347,
    "lng": 81.61420000000001
  },
  {
    "id": "city-248998",
    "name": "Dankaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6867,
    "lng": 81.55420000000001
  },
  {
    "id": "city-274823",
    "name": "Gnida",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.052699999999998,
    "lng": 80.57220000000001
  },
  {
    "id": "city-249001",
    "name": "Jahangirpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3327,
    "lng": 79.7642
  },
  {
    "id": "city-249002",
    "name": "Jewar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6967,
    "lng": 78.94420000000001
  },
  {
    "id": "city-301210",
    "name": "Noida",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9287,
    "lng": 79.1362
  },
  {
    "id": "city-249000",
    "name": "Rabupura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7627,
    "lng": 79.5822
  },
  {
    "id": "city-274822",
    "name": "Yeida",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5707,
    "lng": 78.0382
  },
  {
    "id": "city-248989",
    "name": "Dasna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.200699999999998,
    "lng": 81.1602
  },
  {
    "id": "city-248982",
    "name": "Faridnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3967,
    "lng": 80.34020000000001
  },
  {
    "id": "city-248988",
    "name": "Ghaziabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.636699999999998,
    "lng": 81.1242
  },
  {
    "id": "city-274820",
    "name": "Khoda Makanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.554699999999997,
    "lng": 80.05420000000001
  },
  {
    "id": "city-248985",
    "name": "Loni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.450699999999998,
    "lng": 80.9102
  },
  {
    "id": "city-248981",
    "name": "Modinagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9787,
    "lng": 78.6862
  },
  {
    "id": "city-248983",
    "name": "Muradnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4227,
    "lng": 81.8982
  },
  {
    "id": "city-248978",
    "name": "Niwari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1907,
    "lng": 79.1382
  },
  {
    "id": "city-248977",
    "name": "Patla",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.502699999999997,
    "lng": 79.9302
  },
  {
    "id": "city-249513",
    "name": "Bahadurganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7887,
    "lng": 81.3882
  },
  {
    "id": "city-249515",
    "name": "Dildarnagar Fatehpur Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4347,
    "lng": 80.6382
  },
  {
    "id": "city-249512",
    "name": "Ghazipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1467,
    "lng": 80.07820000000001
  },
  {
    "id": "city-249511",
    "name": "Jangipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7507,
    "lng": 79.17020000000001
  },
  {
    "id": "city-249514",
    "name": "Mohammadabad(Gazipur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2047,
    "lng": 80.46820000000001
  },
  {
    "id": "city-249509",
    "name": "Sadat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.232699999999998,
    "lng": 79.56020000000001
  },
  {
    "id": "city-249510",
    "name": "Saidpur(Gazipur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4727,
    "lng": 81.0002
  },
  {
    "id": "city-249516",
    "name": "Zamania",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6287,
    "lng": 80.6922
  },
  {
    "id": "city-301014",
    "name": "Belsar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.148699999999998,
    "lng": 80.2602
  },
  {
    "id": "city-249421",
    "name": "Colonelganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.182699999999997,
    "lng": 81.3782
  },
  {
    "id": "city-301016",
    "name": "Dhanepur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.8967,
    "lng": 80.4722
  },
  {
    "id": "city-249419",
    "name": "Gonda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.244699999999998,
    "lng": 81.52420000000001
  },
  {
    "id": "city-249420",
    "name": "Katra Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3767,
    "lng": 78.3922
  },
  {
    "id": "city-249418",
    "name": "Khargupur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.432699999999997,
    "lng": 81.0642
  },
  {
    "id": "city-249423",
    "name": "Mankapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.680699999999998,
    "lng": 80.4482
  },
  {
    "id": "city-249422",
    "name": "Nawabganj(Gonda)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8527,
    "lng": 81.78020000000001
  },
  {
    "id": "city-301245",
    "name": "Paraspur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.362699999999997,
    "lng": 78.8542
  },
  {
    "id": "city-301012",
    "name": "Tarabganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.566699999999997,
    "lng": 81.3622
  },
  {
    "id": "city-249448",
    "name": "Bansgaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.296699999999998,
    "lng": 80.8322
  },
  {
    "id": "city-249450",
    "name": "Barhalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.834699999999998,
    "lng": 78.5102
  },
  {
    "id": "city-297029",
    "name": "Campierganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.508699999999997,
    "lng": 79.5882
  },
  {
    "id": "city-300750",
    "name": "Ghaghsarabazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.130699999999997,
    "lng": 78.54220000000001
  },
  {
    "id": "city-249449",
    "name": "Gola Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1527,
    "lng": 81.30420000000001
  },
  {
    "id": "city-249444",
    "name": "Gorakhpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.712699999999998,
    "lng": 81.9282
  },
  {
    "id": "city-297495",
    "name": "Kasba Sangrampur Urf Unwal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0627,
    "lng": 78.65820000000001
  },
  {
    "id": "city-249447",
    "name": "Mundera Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.194699999999997,
    "lng": 81.8942
  },
  {
    "id": "city-249442",
    "name": "Pipiganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5427,
    "lng": 79.9462
  },
  {
    "id": "city-249446",
    "name": "Pipraich",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.118699999999997,
    "lng": 79.8022
  },
  {
    "id": "city-249443",
    "name": "Sahjanwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9087,
    "lng": 79.8202
  },
  {
    "id": "city-300721",
    "name": "Uruwa Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.226699999999997,
    "lng": 78.2542
  },
  {
    "id": "city-249325",
    "name": "Gohand",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.932699999999997,
    "lng": 80.9722
  },
  {
    "id": "city-249322",
    "name": "Hamirpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.022699999999997,
    "lng": 81.6422
  },
  {
    "id": "city-249321",
    "name": "Kurara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.862699999999997,
    "lng": 81.5622
  },
  {
    "id": "city-249327",
    "name": "Maudaha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1407,
    "lng": 79.9962
  },
  {
    "id": "city-249326",
    "name": "Rath",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4047,
    "lng": 80.4842
  },
  {
    "id": "city-249324",
    "name": "Sarila",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.4427,
    "lng": 78.35820000000001
  },
  {
    "id": "city-249323",
    "name": "Sumerpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.136699999999998,
    "lng": 79.28020000000001
  },
  {
    "id": "city-248992",
    "name": "Babugarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.930699999999998,
    "lng": 79.67020000000001
  },
  {
    "id": "city-248993",
    "name": "Garhmukteshwar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3407,
    "lng": 79.0522
  },
  {
    "id": "city-248991",
    "name": "Hapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0707,
    "lng": 79.5382
  },
  {
    "id": "city-248990",
    "name": "Pilkhuwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9807,
    "lng": 79.1162
  },
  {
    "id": "city-249208",
    "name": "Beniganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2547,
    "lng": 79.1382
  },
  {
    "id": "city-249203",
    "name": "Bilgram",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.982699999999998,
    "lng": 81.89020000000001
  },
  {
    "id": "city-249200",
    "name": "Gopamau",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0947,
    "lng": 78.5862
  },
  {
    "id": "city-249201",
    "name": "Hardoi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.712699999999998,
    "lng": 78.9122
  },
  {
    "id": "city-249207",
    "name": "Kachhauna Patseni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.118699999999997,
    "lng": 79.17020000000001
  },
  {
    "id": "city-249206",
    "name": "Kursath (Unnao)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.758699999999997,
    "lng": 78.7622
  },
  {
    "id": "city-249204",
    "name": "Madhoganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6407,
    "lng": 80.8802
  },
  {
    "id": "city-249205",
    "name": "Mallawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.3247,
    "lng": 80.4122
  },
  {
    "id": "city-249199",
    "name": "Pali (Hardoi)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.194699999999997,
    "lng": 81.1182
  },
  {
    "id": "city-249198",
    "name": "Pihani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.816699999999997,
    "lng": 80.5442
  },
  {
    "id": "city-249202",
    "name": "Sandi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.616699999999998,
    "lng": 78.4642
  },
  {
    "id": "city-249209",
    "name": "Sandila",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0507,
    "lng": 81.0622
  },
  {
    "id": "city-249197",
    "name": "Shahabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6387,
    "lng": 80.6982
  },
  {
    "id": "city-249035",
    "name": "Hasayan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8127,
    "lng": 81.42020000000001
  },
  {
    "id": "city-249037",
    "name": "Hathras",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.484699999999997,
    "lng": 80.2522
  },
  {
    "id": "city-249036",
    "name": "Mendu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7167,
    "lng": 79.5642
  },
  {
    "id": "city-249038",
    "name": "Mursan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.034699999999997,
    "lng": 78.3022
  },
  {
    "id": "city-249034",
    "name": "Purdilnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7887,
    "lng": 78.2442
  },
  {
    "id": "city-249039",
    "name": "Sadabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7547,
    "lng": 80.8862
  },
  {
    "id": "city-249040",
    "name": "Sahpau",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4347,
    "lng": 79.1102
  },
  {
    "id": "city-249032",
    "name": "Sasni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8467,
    "lng": 79.5942
  },
  {
    "id": "city-249033",
    "name": "Sikandra Rao",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2167,
    "lng": 78.84020000000001
  },
  {
    "id": "city-297055",
    "name": "Ait",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5187,
    "lng": 80.01820000000001
  },
  {
    "id": "city-249294",
    "name": "Jalaun",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4407,
    "lng": 78.48020000000001
  },
  {
    "id": "city-249296",
    "name": "Kadaura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6087,
    "lng": 81.8482
  },
  {
    "id": "city-249295",
    "name": "Kalpi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.180699999999998,
    "lng": 77.9482
  },
  {
    "id": "city-249299",
    "name": "Konch",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3647,
    "lng": 78.65220000000001
  },
  {
    "id": "city-249298",
    "name": "Kotra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.8127,
    "lng": 78.5402
  },
  {
    "id": "city-249293",
    "name": "Madhogarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8847,
    "lng": 80.44420000000001
  },
  {
    "id": "city-249300",
    "name": "Nadigaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.528699999999997,
    "lng": 79.22420000000001
  },
  {
    "id": "city-249297",
    "name": "Orai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.156699999999997,
    "lng": 81.7962
  },
  {
    "id": "city-249291",
    "name": "Rampura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.066699999999997,
    "lng": 81.1102
  },
  {
    "id": "city-249292",
    "name": "Umri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.092699999999997,
    "lng": 80.8122
  },
  {
    "id": "city-263358",
    "name": "Badlapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.700699999999998,
    "lng": 79.5402
  },
  {
    "id": "city-297034",
    "name": "Gaurabadshahpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.810699999999997,
    "lng": 81.2942
  },
  {
    "id": "city-249505",
    "name": "Jaunpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.136699999999998,
    "lng": 78.76820000000001
  },
  {
    "id": "city-297068",
    "name": "Kachgaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7667,
    "lng": 79.7462
  },
  {
    "id": "city-249508",
    "name": "Kerakat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.168699999999998,
    "lng": 81.6162
  },
  {
    "id": "city-249502",
    "name": "Kheta Sarai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.712699999999998,
    "lng": 78.3602
  },
  {
    "id": "city-249504",
    "name": "Machhlishahr",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0187,
    "lng": 80.43820000000001
  },
  {
    "id": "city-249507",
    "name": "Mariahu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9647,
    "lng": 81.5402
  },
  {
    "id": "city-249503",
    "name": "Mungra Badshahpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1347,
    "lng": 79.6662
  },
  {
    "id": "city-297088",
    "name": "Rampur (Jaunpur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.572699999999998,
    "lng": 78.54820000000001
  },
  {
    "id": "city-249501",
    "name": "Shahganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.026699999999998,
    "lng": 80.7262
  },
  {
    "id": "city-297091",
    "name": "Zafrabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1327,
    "lng": 80.31620000000001
  },
  {
    "id": "city-249313",
    "name": "Bada Gaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.880699999999997,
    "lng": 80.0162
  },
  {
    "id": "city-249311",
    "name": "Barua Sagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3447,
    "lng": 80.9522
  },
  {
    "id": "city-249303",
    "name": "Chirgaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.3567,
    "lng": 80.8922
  },
  {
    "id": "city-249304",
    "name": "Erich",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2487,
    "lng": 80.6482
  },
  {
    "id": "city-249306",
    "name": "Garautha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1207,
    "lng": 79.1922
  },
  {
    "id": "city-249305",
    "name": "Gursarai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8467,
    "lng": 78.3302
  },
  {
    "id": "city-249314",
    "name": "Jhansi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1847,
    "lng": 81.5442
  },
  {
    "id": "city-301241",
    "name": "Jhansi Railway Settlement",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.508699999999997,
    "lng": 79.8922
  },
  {
    "id": "city-249310",
    "name": "Kathera",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6027,
    "lng": 80.6622
  },
  {
    "id": "city-249308",
    "name": "Mauranipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6987,
    "lng": 80.0862
  },
  {
    "id": "city-249302",
    "name": "Moth",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4027,
    "lng": 81.4222
  },
  {
    "id": "city-249309",
    "name": "Ranipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6447,
    "lng": 81.0282
  },
  {
    "id": "city-249301",
    "name": "Samthar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7507,
    "lng": 81.7622
  },
  {
    "id": "city-249307",
    "name": "Tondi Fatehpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3527,
    "lng": 81.4642
  },
  {
    "id": "city-249256",
    "name": "Chhibramau",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.490699999999997,
    "lng": 81.8862
  },
  {
    "id": "city-249254",
    "name": "Gursahaiganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.150699999999997,
    "lng": 78.83420000000001
  },
  {
    "id": "city-249259",
    "name": "Kannauj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.3587,
    "lng": 81.0982
  },
  {
    "id": "city-249253",
    "name": "Samdhan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.430699999999998,
    "lng": 80.8422
  },
  {
    "id": "city-249257",
    "name": "Saurikh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.444699999999997,
    "lng": 79.6842
  },
  {
    "id": "city-249255",
    "name": "Sikanderpur (Kannauj)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.996699999999997,
    "lng": 79.54820000000001
  },
  {
    "id": "city-249258",
    "name": "Talgram",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.714699999999997,
    "lng": 79.5022
  },
  {
    "id": "city-249260",
    "name": "Tirwaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1607,
    "lng": 81.02420000000001
  },
  {
    "id": "city-249277",
    "name": "Akbarpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.886699999999998,
    "lng": 78.4662
  },
  {
    "id": "city-263353",
    "name": "Amraudhaa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1867,
    "lng": 79.95020000000001
  },
  {
    "id": "city-263348",
    "name": "Derapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.072699999999998,
    "lng": 80.9282
  },
  {
    "id": "city-263354",
    "name": "Jhinjhak",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4287,
    "lng": 79.49220000000001
  },
  {
    "id": "city-297864",
    "name": "Kanchausi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7887,
    "lng": 79.2442
  },
  {
    "id": "city-297651",
    "name": "Musanagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4607,
    "lng": 79.1002
  },
  {
    "id": "city-249279",
    "name": "Pukhrayan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.432699999999997,
    "lng": 78.86420000000001
  },
  {
    "id": "city-297037",
    "name": "Rajpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5307,
    "lng": 78.0862
  },
  {
    "id": "city-297089",
    "name": "Raniya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.618699999999997,
    "lng": 79.8142
  },
  {
    "id": "city-263352",
    "name": "Rasulabaad(Kanpur Dehat)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5387,
    "lng": 81.8622
  },
  {
    "id": "city-249276",
    "name": "Rura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.706699999999998,
    "lng": 81.84620000000001
  },
  {
    "id": "city-249275",
    "name": "Shivli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5007,
    "lng": 78.1562
  },
  {
    "id": "city-263355",
    "name": "Sikandara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1227,
    "lng": 81.4542
  },
  {
    "id": "city-249282",
    "name": "Bilhaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1407,
    "lng": 80.7882
  },
  {
    "id": "city-249285",
    "name": "Bithoor",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0127,
    "lng": 81.8202
  },
  {
    "id": "city-249290",
    "name": "Ghatampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.648699999999998,
    "lng": 79.0882
  },
  {
    "id": "city-249286",
    "name": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.744699999999998,
    "lng": 81.9042
  },
  {
    "id": "city-249283",
    "name": "Shivrajpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8787,
    "lng": 80.62620000000001
  },
  {
    "id": "city-249088",
    "name": "Amanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8467,
    "lng": 79.6342
  },
  {
    "id": "city-249093",
    "name": "Bhargain",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.898699999999998,
    "lng": 79.9822
  },
  {
    "id": "city-249085",
    "name": "Bilram",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3847,
    "lng": 81.5762
  },
  {
    "id": "city-249090",
    "name": "Ganj Dundwara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2427,
    "lng": 78.7262
  },
  {
    "id": "city-249086",
    "name": "Kaasganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.554699999999997,
    "lng": 78.1742
  },
  {
    "id": "city-249089",
    "name": "Mohanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3067,
    "lng": 79.2222
  },
  {
    "id": "city-249091",
    "name": "Patiyali",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3887,
    "lng": 80.6602
  },
  {
    "id": "city-249087",
    "name": "Sahawar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3127,
    "lng": 80.1842
  },
  {
    "id": "city-249092",
    "name": "Sidhpura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2027,
    "lng": 81.0382
  },
  {
    "id": "city-249084",
    "name": "Soron",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1447,
    "lng": 78.8322
  },
  {
    "id": "city-249357",
    "name": "Ajhuwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9027,
    "lng": 80.6342
  },
  {
    "id": "city-249361",
    "name": "Bharwari(Kaushambi)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5307,
    "lng": 78.0862
  },
  {
    "id": "city-249362",
    "name": "Chail",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.348699999999997,
    "lng": 80.74820000000001
  },
  {
    "id": "city-299009",
    "name": "Charwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5827,
    "lng": 78.1222
  },
  {
    "id": "city-297064",
    "name": "Daranagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9927,
    "lng": 81.30420000000001
  },
  {
    "id": "city-249360",
    "name": "Karari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0387,
    "lng": 80.01820000000001
  },
  {
    "id": "city-249359",
    "name": "Manjhanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9587,
    "lng": 81.4342
  },
  {
    "id": "city-297086",
    "name": "Poorav Pashchim Shareera",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3767,
    "lng": 80.7202
  },
  {
    "id": "city-249363",
    "name": "Sarai Aquil",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8707,
    "lng": 77.9702
  },
  {
    "id": "city-249358",
    "name": "Sirathu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.822699999999998,
    "lng": 81.81020000000001
  },
  {
    "id": "city-249181",
    "name": "Barbar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.798699999999997,
    "lng": 80.4102
  },
  {
    "id": "city-300719",
    "name": "Bhira",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2187,
    "lng": 81.71820000000001
  },
  {
    "id": "city-249185",
    "name": "Dhaurahara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.868699999999997,
    "lng": 79.5802
  },
  {
    "id": "city-249179",
    "name": "Gola Gokarannath",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1927,
    "lng": 78.09620000000001
  },
  {
    "id": "city-249183",
    "name": "Kheri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.924699999999998,
    "lng": 78.0122
  },
  {
    "id": "city-249182",
    "name": "Lakhimpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4367,
    "lng": 80.9242
  },
  {
    "id": "city-249178",
    "name": "Mailani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.680699999999998,
    "lng": 80.73620000000001
  },
  {
    "id": "city-249180",
    "name": "Mohammadi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.996699999999997,
    "lng": 78.38820000000001
  },
  {
    "id": "city-297085",
    "name": "Nighasan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3407,
    "lng": 79.31620000000001
  },
  {
    "id": "city-249184",
    "name": "Oel Dhakwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.098699999999997,
    "lng": 78.5502
  },
  {
    "id": "city-249176",
    "name": "Palia Kalan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.810699999999997,
    "lng": 79.95020000000001
  },
  {
    "id": "city-249177",
    "name": "Singahi Bhiraura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.276699999999998,
    "lng": 81.1482
  },
  {
    "id": "city-297077",
    "name": "Chhitauni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7607,
    "lng": 79.37620000000001
  },
  {
    "id": "city-297078",
    "name": "Duddhi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.354699999999998,
    "lng": 78.05420000000001
  },
  {
    "id": "city-297065",
    "name": "Fazilnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3967,
    "lng": 78.42020000000001
  },
  {
    "id": "city-297020",
    "name": "Hata",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5707,
    "lng": 81.6302
  },
  {
    "id": "city-249454",
    "name": "Kaptanganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.240699999999997,
    "lng": 79.3602
  },
  {
    "id": "city-249451",
    "name": "Khadda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3207,
    "lng": 81.7602
  },
  {
    "id": "city-297024",
    "name": "Kushinagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9727,
    "lng": 78.9482
  },
  {
    "id": "city-300705",
    "name": "Mathauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.400699999999997,
    "lng": 78.58420000000001
  },
  {
    "id": "city-249452",
    "name": "Padrauna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.514699999999998,
    "lng": 81.3422
  },
  {
    "id": "city-249453",
    "name": "Ramkola",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.252699999999997,
    "lng": 80.87620000000001
  },
  {
    "id": "city-249457",
    "name": "Sewarhi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.956699999999998,
    "lng": 80.5562
  },
  {
    "id": "city-249412",
    "name": "Sukrauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2187,
    "lng": 81.41420000000001
  },
  {
    "id": "city-297036",
    "name": "Tamkuhi Raj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0107,
    "lng": 78.63820000000001
  },
  {
    "id": "city-249318",
    "name": "Lalitpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.380699999999997,
    "lng": 81.8442
  },
  {
    "id": "city-249320",
    "name": "Mahroni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0387,
    "lng": 80.83420000000001
  },
  {
    "id": "city-249319",
    "name": "Pali (Lalitpur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0627,
    "lng": 78.3942
  },
  {
    "id": "city-249317",
    "name": "Talbehat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.328699999999998,
    "lng": 81.4962
  },
  {
    "id": "city-249236",
    "name": "Amethi(Lucknow)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.662699999999997,
    "lng": 79.11420000000001
  },
  {
    "id": "city-297048",
    "name": "Banthra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.026699999999998,
    "lng": 79.84620000000001
  },
  {
    "id": "city-263351",
    "name": "Bkt",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5647,
    "lng": 81.44420000000001
  },
  {
    "id": "city-249235",
    "name": "Gosainganj (Ayodhya)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0367,
    "lng": 81.7882
  },
  {
    "id": "city-249232",
    "name": "Itaunja",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1867,
    "lng": 80.0942
  },
  {
    "id": "city-249233",
    "name": "Kakori",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8727,
    "lng": 80.8722
  },
  {
    "id": "city-249234",
    "name": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6007,
    "lng": 79.4402
  },
  {
    "id": "city-249231",
    "name": "Mahona",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.4667,
    "lng": 79.69420000000001
  },
  {
    "id": "city-249230",
    "name": "Malihabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9727,
    "lng": 79.0922
  },
  {
    "id": "city-297039",
    "name": "Mohanlalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0747,
    "lng": 81.03020000000001
  },
  {
    "id": "city-249237",
    "name": "Nagram",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.170699999999997,
    "lng": 78.51820000000001
  },
  {
    "id": "city-249330",
    "name": "Charkhari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.040699999999998,
    "lng": 78.1602
  },
  {
    "id": "city-249332",
    "name": "Kabrai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3467,
    "lng": 81.56620000000001
  },
  {
    "id": "city-249329",
    "name": "Kharela",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.366699999999998,
    "lng": 78.1622
  },
  {
    "id": "city-249328",
    "name": "Kulpahar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7947,
    "lng": 78.0622
  },
  {
    "id": "city-249331",
    "name": "Mahoba",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7227,
    "lng": 78.6302
  },
  {
    "id": "city-249439",
    "name": "Anandnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3407,
    "lng": 81.3802
  },
  {
    "id": "city-297062",
    "name": "Brijmanganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4047,
    "lng": 79.93220000000001
  },
  {
    "id": "city-298915",
    "name": "Chauk",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0907,
    "lng": 81.7502
  },
  {
    "id": "city-249440",
    "name": "Ghughuli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.8407,
    "lng": 80.22420000000001
  },
  {
    "id": "city-249441",
    "name": "Maharajganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7667,
    "lng": 81.7462
  },
  {
    "id": "city-249436",
    "name": "Nautanwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.496699999999997,
    "lng": 78.2162
  },
  {
    "id": "city-249437",
    "name": "Nichlaul",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.174699999999998,
    "lng": 79.7622
  },
  {
    "id": "city-297041",
    "name": "Paniyara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.932699999999997,
    "lng": 80.1162
  },
  {
    "id": "city-297040",
    "name": "Partawal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.886699999999998,
    "lng": 80.0982
  },
  {
    "id": "city-249438",
    "name": "Siswa Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4207,
    "lng": 79.49220000000001
  },
  {
    "id": "city-277139",
    "name": "Sonauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.612699999999997,
    "lng": 80.7082
  },
  {
    "id": "city-297058",
    "name": "Barnahal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3847,
    "lng": 77.96820000000001
  },
  {
    "id": "city-249109",
    "name": "Bewar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.360699999999998,
    "lng": 81.12020000000001
  },
  {
    "id": "city-249108",
    "name": "Bhogaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.002699999999997,
    "lng": 81.5102
  },
  {
    "id": "city-249105",
    "name": "Ghiraur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7507,
    "lng": 81.1062
  },
  {
    "id": "city-249104",
    "name": "Jyoti Khuria",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0887,
    "lng": 78.4002
  },
  {
    "id": "city-249107",
    "name": "Karhal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.444699999999997,
    "lng": 80.6042
  },
  {
    "id": "city-249111",
    "name": "Kishni",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.162699999999997,
    "lng": 80.8622
  },
  {
    "id": "city-249103",
    "name": "Kuraoli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.348699999999997,
    "lng": 80.42020000000001
  },
  {
    "id": "city-249110",
    "name": "Kusmara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.822699999999998,
    "lng": 80.11420000000001
  },
  {
    "id": "city-249106",
    "name": "Mainpuri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.432699999999997,
    "lng": 80.35220000000001
  },
  {
    "id": "city-249046",
    "name": "Bajna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8187,
    "lng": 80.3182
  },
  {
    "id": "city-249057",
    "name": "Baldeo",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.392699999999998,
    "lng": 80.8242
  },
  {
    "id": "city-249043",
    "name": "Barsana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9107,
    "lng": 79.2502
  },
  {
    "id": "city-249045",
    "name": "Chaumuha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5387,
    "lng": 79.12620000000001
  },
  {
    "id": "city-249044",
    "name": "Chhata",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.796699999999998,
    "lng": 78.7562
  },
  {
    "id": "city-249058",
    "name": "Farah",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5707,
    "lng": 81.6302
  },
  {
    "id": "city-249055",
    "name": "Gokul",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.554699999999997,
    "lng": 80.1342
  },
  {
    "id": "city-249050",
    "name": "Govardhan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9107,
    "lng": 78.0262
  },
  {
    "id": "city-249041",
    "name": "Kosi Kalan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7927,
    "lng": 78.22420000000001
  },
  {
    "id": "city-249056",
    "name": "Mahaban",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.362699999999997,
    "lng": 81.8782
  },
  {
    "id": "city-249052",
    "name": "Mathura-Vrindavan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.406699999999997,
    "lng": 81.42620000000001
  },
  {
    "id": "city-249042",
    "name": "Nandgaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3387,
    "lng": 78.1502
  },
  {
    "id": "city-249049",
    "name": "Radhakund",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.362699999999997,
    "lng": 81.0382
  },
  {
    "id": "city-249047",
    "name": "Raya",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.700699999999998,
    "lng": 81.6602
  },
  {
    "id": "city-249051",
    "name": "Saunkh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7507,
    "lng": 79.9062
  },
  {
    "id": "city-249487",
    "name": "Adari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.488699999999998,
    "lng": 81.0882
  },
  {
    "id": "city-249484",
    "name": "Amila",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.714699999999997,
    "lng": 81.0942
  },
  {
    "id": "city-277189",
    "name": "Chirayakot",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2487,
    "lng": 81.6482
  },
  {
    "id": "city-249483",
    "name": "Dohrighat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.726699999999997,
    "lng": 78.7942
  },
  {
    "id": "city-249485",
    "name": "Ghosi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0387,
    "lng": 81.1382
  },
  {
    "id": "city-249486",
    "name": "Kopaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6207,
    "lng": 81.8122
  },
  {
    "id": "city-299071",
    "name": "Kurthijafarpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7627,
    "lng": 80.95020000000001
  },
  {
    "id": "city-301254",
    "name": "Madhuban",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0187,
    "lng": 81.1102
  },
  {
    "id": "city-249488",
    "name": "Maunath Bhanjan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.606699999999996,
    "lng": 78.8502
  },
  {
    "id": "city-249251",
    "name": "Mohammadabad Gohna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.432699999999997,
    "lng": 79.3922
  },
  {
    "id": "city-270654",
    "name": "Walidpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0707,
    "lng": 79.3542
  },
  {
    "id": "city-248959",
    "name": "Bahsuma",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.868699999999997,
    "lng": 77.9482
  },
  {
    "id": "city-248956",
    "name": "Daurala",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.462699999999998,
    "lng": 80.6102
  },
  {
    "id": "city-301364",
    "name": "Harra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.694699999999997,
    "lng": 79.88220000000001
  },
  {
    "id": "city-248960",
    "name": "Hastinapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.892699999999998,
    "lng": 79.87620000000001
  },
  {
    "id": "city-248954",
    "name": "Karnawal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4687,
    "lng": 81.7322
  },
  {
    "id": "city-248968",
    "name": "Kharkhoda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0247,
    "lng": 81.4162
  },
  {
    "id": "city-297079",
    "name": "Khiwai",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.3247,
    "lng": 80.8842
  },
  {
    "id": "city-248963",
    "name": "Kithaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5507,
    "lng": 78.8662
  },
  {
    "id": "city-248957",
    "name": "Lawar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4527,
    "lng": 79.3802
  },
  {
    "id": "city-248961",
    "name": "Mawana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.2887,
    "lng": 79.17620000000001
  },
  {
    "id": "city-248964",
    "name": "Meerut",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1267,
    "lng": 79.1542
  },
  {
    "id": "city-248962",
    "name": "Parikshitgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5167,
    "lng": 79.5082
  },
  {
    "id": "city-248958",
    "name": "Phalauda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.086699999999997,
    "lng": 81.73020000000001
  },
  {
    "id": "city-248955",
    "name": "Sardhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6147,
    "lng": 79.8742
  },
  {
    "id": "city-248967",
    "name": "Sewalkhas",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6207,
    "lng": 79.2602
  },
  {
    "id": "city-301349",
    "name": "Shahjaganpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1347,
    "lng": 78.40220000000001
  },
  {
    "id": "city-249545",
    "name": "Ahraura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.874699999999997,
    "lng": 78.0942
  },
  {
    "id": "city-249543",
    "name": "Chunar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2047,
    "lng": 79.4042
  },
  {
    "id": "city-249542",
    "name": "Kachhwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.964699999999997,
    "lng": 81.8842
  },
  {
    "id": "city-249540",
    "name": "Mirzapur-Cum-Vindhyachal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7507,
    "lng": 79.3542
  },
  {
    "id": "city-297071",
    "name": "Agawanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.8387,
    "lng": 80.6102
  },
  {
    "id": "city-248928",
    "name": "Bhojpur Dharampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6787,
    "lng": 81.3862
  },
  {
    "id": "city-248931",
    "name": "Bilari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7567,
    "lng": 81.10820000000001
  },
  {
    "id": "city-290251",
    "name": "Dhakia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5627,
    "lng": 79.5022
  },
  {
    "id": "city-248926",
    "name": "Kanth(Moradabad)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.770699999999998,
    "lng": 79.1342
  },
  {
    "id": "city-248930",
    "name": "Kundarki",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7167,
    "lng": 81.6442
  },
  {
    "id": "city-299027",
    "name": "Mahmoodpur Mafi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.520699999999998,
    "lng": 79.7762
  },
  {
    "id": "city-248929",
    "name": "Moradabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.796699999999998,
    "lng": 79.00420000000001
  },
  {
    "id": "city-290250",
    "name": "Pakbara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2627,
    "lng": 81.53020000000001
  },
  {
    "id": "city-248925",
    "name": "Thakurdwara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4027,
    "lng": 80.9342
  },
  {
    "id": "city-248927",
    "name": "Umri Kalan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.874699999999997,
    "lng": 80.35820000000001
  },
  {
    "id": "city-248902",
    "name": "Bhokarhedi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6967,
    "lng": 80.94420000000001
  },
  {
    "id": "city-248897",
    "name": "Budhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9607,
    "lng": 78.43220000000001
  },
  {
    "id": "city-248894",
    "name": "Charthaval",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9467,
    "lng": 81.6542
  },
  {
    "id": "city-248901",
    "name": "Jansath",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.8407,
    "lng": 79.5922
  },
  {
    "id": "city-248899",
    "name": "Khatauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7687,
    "lng": 81.4642
  },
  {
    "id": "city-248903",
    "name": "Meerapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.112699999999997,
    "lng": 80.9842
  },
  {
    "id": "city-248895",
    "name": "Muzaffarnagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.656699999999997,
    "lng": 80.1122
  },
  {
    "id": "city-248893",
    "name": "Purquazi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5327,
    "lng": 81.7562
  },
  {
    "id": "city-248898",
    "name": "Shahpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9927,
    "lng": 79.0802
  },
  {
    "id": "city-248896",
    "name": "Sisauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0107,
    "lng": 80.6382
  },
  {
    "id": "city-249161",
    "name": "Barkhera",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.598699999999997,
    "lng": 79.60220000000001
  },
  {
    "id": "city-249163",
    "name": "Bilsanda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7827,
    "lng": 78.0582
  },
  {
    "id": "city-249162",
    "name": "Bisalpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4747,
    "lng": 81.9182
  },
  {
    "id": "city-249157",
    "name": "Gularia Bhindara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3267,
    "lng": 81.4342
  },
  {
    "id": "city-249159",
    "name": "Jahanabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1387,
    "lng": 78.1342
  },
  {
    "id": "city-249164",
    "name": "Kalinagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.1227,
    "lng": 81.7022
  },
  {
    "id": "city-249158",
    "name": "Nyoria Husainpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6287,
    "lng": 78.2442
  },
  {
    "id": "city-297046",
    "name": "Pakadia Naugawa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.828699999999998,
    "lng": 78.3242
  },
  {
    "id": "city-249160",
    "name": "Pilibhit",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5887,
    "lng": 77.9642
  },
  {
    "id": "city-249165",
    "name": "Puranpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.3247,
    "lng": 80.3082
  },
  {
    "id": "city-249352",
    "name": "Antu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.522699999999997,
    "lng": 80.1422
  },
  {
    "id": "city-249353",
    "name": "Belha",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.618699999999997,
    "lng": 80.1182
  },
  {
    "id": "city-300772",
    "name": "Derva(Pratapgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0167,
    "lng": 81.5762
  },
  {
    "id": "city-299013",
    "name": "Dhakwa (Pratapgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.528699999999997,
    "lng": 80.1442
  },
  {
    "id": "city-300693",
    "name": "Garwara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7047,
    "lng": 79.2722
  },
  {
    "id": "city-300707",
    "name": "Heeraganj Bazaar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0507,
    "lng": 80.4062
  },
  {
    "id": "city-300776",
    "name": "Katra Gulab Singh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7927,
    "lng": 81.32820000000001
  },
  {
    "id": "city-249355",
    "name": "Katra Medniganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0827,
    "lng": 79.9902
  },
  {
    "id": "city-297042",
    "name": "Kohdaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5307,
    "lng": 80.6542
  },
  {
    "id": "city-249351",
    "name": "Kunda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9047,
    "lng": 78.3922
  },
  {
    "id": "city-249242",
    "name": "Lalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1287,
    "lng": 79.8242
  },
  {
    "id": "city-300774",
    "name": "Mandhata(Pratapgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0967,
    "lng": 80.22420000000001
  },
  {
    "id": "city-249350",
    "name": "Manikpur(Pratapgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8267,
    "lng": 79.7102
  },
  {
    "id": "city-249356",
    "name": "Patti",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.014699999999998,
    "lng": 79.8022
  },
  {
    "id": "city-249354",
    "name": "Pratapgarh City",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6287,
    "lng": 78.65220000000001
  },
  {
    "id": "city-297087",
    "name": "Prithviganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.150699999999997,
    "lng": 81.73020000000001
  },
  {
    "id": "city-299012",
    "name": "Ramganj (Pratapgarh)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1447,
    "lng": 81.68820000000001
  },
  {
    "id": "city-277192",
    "name": "Raniganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9747,
    "lng": 80.9702
  },
  {
    "id": "city-297054",
    "name": "Suwansa Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7507,
    "lng": 81.47420000000001
  },
  {
    "id": "city-249374",
    "name": "Bharatganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6547,
    "lng": 79.78620000000001
  },
  {
    "id": "city-249372",
    "name": "Handia",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.996699999999997,
    "lng": 78.7162
  },
  {
    "id": "city-249375",
    "name": "Koraon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.450699999999998,
    "lng": 80.7902
  },
  {
    "id": "city-249365",
    "name": "Lal Gopal Ganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5507,
    "lng": 79.29820000000001
  },
  {
    "id": "city-249364",
    "name": "Mau Aima",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0367,
    "lng": 81.8922
  },
  {
    "id": "city-249368",
    "name": "Phulpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6667,
    "lng": 79.87020000000001
  },
  {
    "id": "city-249369",
    "name": "Prayagraj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6207,
    "lng": 81.8922
  },
  {
    "id": "city-249370",
    "name": "Shankargarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.258699999999997,
    "lng": 80.18220000000001
  },
  {
    "id": "city-249373",
    "name": "Sirsa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.874699999999997,
    "lng": 79.46220000000001
  },
  {
    "id": "city-249238",
    "name": "Bachhrawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6967,
    "lng": 78.8242
  },
  {
    "id": "city-249243",
    "name": "Dalmau",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.058699999999998,
    "lng": 79.8782
  },
  {
    "id": "city-277531",
    "name": "Laalganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3387,
    "lng": 81.7262
  },
  {
    "id": "city-249469",
    "name": "Maharajganj(Raibareilly)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.336699999999997,
    "lng": 78.07220000000001
  },
  {
    "id": "city-297084",
    "name": "Nasirabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4087,
    "lng": 78.0162
  },
  {
    "id": "city-249245",
    "name": "Parsadepur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8647,
    "lng": 79.6002
  },
  {
    "id": "city-249241",
    "name": "Rae Bareli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0647,
    "lng": 81.0642
  },
  {
    "id": "city-249246",
    "name": "Salon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.464699999999997,
    "lng": 78.7522
  },
  {
    "id": "city-300739",
    "name": "Shivgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.2747,
    "lng": 78.23020000000001
  },
  {
    "id": "city-249244",
    "name": "Unchahar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.130699999999997,
    "lng": 80.7662
  },
  {
    "id": "city-248941",
    "name": "Bilaspur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4347,
    "lng": 78.2702
  },
  {
    "id": "city-299069",
    "name": "Dadiyal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.978699999999996,
    "lng": 81.6062
  },
  {
    "id": "city-248942",
    "name": "Kemri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.554699999999997,
    "lng": 79.54220000000001
  },
  {
    "id": "city-248938",
    "name": "Maswasi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8127,
    "lng": 80.82820000000001
  },
  {
    "id": "city-248945",
    "name": "Milak",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.994699999999998,
    "lng": 78.18220000000001
  },
  {
    "id": "city-297047",
    "name": "Narpat Nagar Doondawala",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.680699999999998,
    "lng": 79.12020000000001
  },
  {
    "id": "city-248943",
    "name": "Rampur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.276699999999998,
    "lng": 79.21220000000001
  },
  {
    "id": "city-297090",
    "name": "Saifani",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7687,
    "lng": 81.3202
  },
  {
    "id": "city-248944",
    "name": "Shahbad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.816699999999997,
    "lng": 79.6242
  },
  {
    "id": "city-248939",
    "name": "Suar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2687,
    "lng": 81.26820000000001
  },
  {
    "id": "city-248940",
    "name": "Tanda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.642699999999998,
    "lng": 78.2702
  },
  {
    "id": "city-248877",
    "name": "Ambehta",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.1787,
    "lng": 78.92620000000001
  },
  {
    "id": "city-248870",
    "name": "Behat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.534699999999997,
    "lng": 81.5142
  },
  {
    "id": "city-296986",
    "name": "Chhutmalpura",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2667,
    "lng": 79.3502
  },
  {
    "id": "city-248882",
    "name": "Deoband",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2367,
    "lng": 81.0122
  },
  {
    "id": "city-248878",
    "name": "Gangoh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.438699999999997,
    "lng": 80.65820000000001
  },
  {
    "id": "city-248876",
    "name": "Nakur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.712699999999998,
    "lng": 79.4402
  },
  {
    "id": "city-248880",
    "name": "Nanauta",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6467,
    "lng": 80.1302
  },
  {
    "id": "city-248881",
    "name": "Rampur Maniharan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.9147,
    "lng": 80.9902
  },
  {
    "id": "city-248873",
    "name": "Saharanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6007,
    "lng": 78.86420000000001
  },
  {
    "id": "city-248875",
    "name": "Sarsawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.674699999999998,
    "lng": 79.7342
  },
  {
    "id": "city-248874",
    "name": "Sultanpur Chilkana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6927,
    "lng": 81.3322
  },
  {
    "id": "city-248879",
    "name": "Titron",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7547,
    "lng": 81.03020000000001
  },
  {
    "id": "city-263350",
    "name": "Babralaa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.386699999999998,
    "lng": 78.8062
  },
  {
    "id": "city-248935",
    "name": "Bahjoi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2047,
    "lng": 80.9962
  },
  {
    "id": "city-248937",
    "name": "Chandausi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.9667,
    "lng": 79.4582
  },
  {
    "id": "city-249112",
    "name": "Gawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2347,
    "lng": 80.2142
  },
  {
    "id": "city-249114",
    "name": "Gunnaur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.558699999999998,
    "lng": 78.3782
  },
  {
    "id": "city-248936",
    "name": "Narauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.334699999999998,
    "lng": 80.4582
  },
  {
    "id": "city-248934",
    "name": "Sambhal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2627,
    "lng": 80.6342
  },
  {
    "id": "city-248933",
    "name": "Sirsi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8907,
    "lng": 77.9582
  },
  {
    "id": "city-297053",
    "name": "Baghnagar Urf Bakhira",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.8587,
    "lng": 78.82220000000001
  },
  {
    "id": "city-297059",
    "name": "Belhar Kala",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.860699999999998,
    "lng": 81.70020000000001
  },
  {
    "id": "city-301363",
    "name": "Dharamsinghwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.482699999999998,
    "lng": 78.5982
  },
  {
    "id": "city-300532",
    "name": "Hainsar Bazar Dhanghata",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6987,
    "lng": 80.41420000000001
  },
  {
    "id": "city-249435",
    "name": "Hariharpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.470699999999997,
    "lng": 80.8182
  },
  {
    "id": "city-249433",
    "name": "Khalilabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2687,
    "lng": 80.7162
  },
  {
    "id": "city-249434",
    "name": "Maghar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6587,
    "lng": 79.64620000000001
  },
  {
    "id": "city-249431",
    "name": "Mehdawal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6327,
    "lng": 78.5122
  },
  {
    "id": "city-249175",
    "name": "Allahganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.098699999999997,
    "lng": 81.7102
  },
  {
    "id": "city-297057",
    "name": "Banda",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.886699999999998,
    "lng": 81.42620000000001
  },
  {
    "id": "city-249174",
    "name": "Jalalabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9107,
    "lng": 81.6182
  },
  {
    "id": "city-297807",
    "name": "Kalan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2607,
    "lng": 79.4282
  },
  {
    "id": "city-249173",
    "name": "Kanth(Shahjhanpur)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.316699999999997,
    "lng": 79.9002
  },
  {
    "id": "city-249169",
    "name": "Katra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.6647,
    "lng": 77.9522
  },
  {
    "id": "city-249168",
    "name": "Khudaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.804699999999997,
    "lng": 79.7642
  },
  {
    "id": "city-249166",
    "name": "Khutar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.560699999999997,
    "lng": 81.20020000000001
  },
  {
    "id": "city-297049",
    "name": "Nigohi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1667,
    "lng": 79.3942
  },
  {
    "id": "city-249167",
    "name": "Powayan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5127,
    "lng": 81.50420000000001
  },
  {
    "id": "city-297802",
    "name": "Shahjahanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4367,
    "lng": 81.7642
  },
  {
    "id": "city-249170",
    "name": "Tilhar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0187,
    "lng": 80.2142
  },
  {
    "id": "city-248887",
    "name": "Ailum",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.7347,
    "lng": 81.7142
  },
  {
    "id": "city-248889",
    "name": "Banat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.738699999999998,
    "lng": 80.8382
  },
  {
    "id": "city-248890",
    "name": "Garhi Pukhta",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.906699999999997,
    "lng": 79.5342
  },
  {
    "id": "city-248884",
    "name": "Jhinjhana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5327,
    "lng": 79.3322
  },
  {
    "id": "city-248885",
    "name": "Kairana",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0247,
    "lng": 81.7442
  },
  {
    "id": "city-248886",
    "name": "Kandhla",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4167,
    "lng": 81.89620000000001
  },
  {
    "id": "city-248888",
    "name": "Shamli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.546699999999998,
    "lng": 79.5822
  },
  {
    "id": "city-248891",
    "name": "Thana Bhawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.0567,
    "lng": 80.02420000000001
  },
  {
    "id": "city-248883",
    "name": "Unn",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2567,
    "lng": 80.89620000000001
  },
  {
    "id": "city-297025",
    "name": "Bhinga",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.2567,
    "lng": 80.60820000000001
  },
  {
    "id": "city-249413",
    "name": "Ikauna",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.136699999999998,
    "lng": 78.0562
  },
  {
    "id": "city-249428",
    "name": "Baansi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.066699999999997,
    "lng": 81.71820000000001
  },
  {
    "id": "city-297056",
    "name": "Badhani Chafa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.438699999999997,
    "lng": 80.8262
  },
  {
    "id": "city-301390",
    "name": "Barhni Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.4227,
    "lng": 81.6342
  },
  {
    "id": "city-297061",
    "name": "Bharatbhari",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0307,
    "lng": 80.6662
  },
  {
    "id": "city-297050",
    "name": "Biskohar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0247,
    "lng": 80.96820000000001
  },
  {
    "id": "city-248145",
    "name": "Domariyaganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.8707,
    "lng": 78.62620000000001
  },
  {
    "id": "city-297067",
    "name": "Itwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8567,
    "lng": 80.4962
  },
  {
    "id": "city-297051",
    "name": "Kapilavastu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 23.984699999999997,
    "lng": 80.9762
  },
  {
    "id": "city-249426",
    "name": "Shohratgarh",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0367,
    "lng": 81.93220000000001
  },
  {
    "id": "city-249427",
    "name": "Siddharth Nagar (Tetri Bazar)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.7087,
    "lng": 81.0522
  },
  {
    "id": "city-257826",
    "name": "Uska Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4147,
    "lng": 79.0982
  },
  {
    "id": "city-249193",
    "name": "Biswan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.0707,
    "lng": 80.8422
  },
  {
    "id": "city-249190",
    "name": "Hargaon",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.002699999999997,
    "lng": 80.31020000000001
  },
  {
    "id": "city-249188",
    "name": "Khairabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.360699999999998,
    "lng": 78.4242
  },
  {
    "id": "city-249191",
    "name": "Laharpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6727,
    "lng": 79.89620000000001
  },
  {
    "id": "city-249194",
    "name": "Mahmudabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.5187,
    "lng": 78.4662
  },
  {
    "id": "city-249186",
    "name": "Maholi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.3587,
    "lng": 78.34620000000001
  },
  {
    "id": "city-249187",
    "name": "Misrikh Cum Neemsar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.572699999999998,
    "lng": 79.65220000000001
  },
  {
    "id": "city-249195",
    "name": "Paintepur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.810699999999997,
    "lng": 78.1102
  },
  {
    "id": "city-249196",
    "name": "Sidhauli",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.116699999999998,
    "lng": 80.3722
  },
  {
    "id": "city-249189",
    "name": "Sitapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.0187,
    "lng": 80.8862
  },
  {
    "id": "city-249192",
    "name": "Tambaur Cum Ahmadabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5107,
    "lng": 79.0582
  },
  {
    "id": "city-299053",
    "name": "Anpara",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.976699999999997,
    "lng": 80.9282
  },
  {
    "id": "city-249549",
    "name": "Chopan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.548699999999997,
    "lng": 78.0682
  },
  {
    "id": "city-249548",
    "name": "Chukradhumra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.9847,
    "lng": 80.68820000000001
  },
  {
    "id": "city-297044",
    "name": "Dala Bazar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.5947,
    "lng": 80.41420000000001
  },
  {
    "id": "city-249551",
    "name": "Dudhi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.6547,
    "lng": 81.2342
  },
  {
    "id": "city-249546",
    "name": "Ghorawal",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.584699999999998,
    "lng": 80.8802
  },
  {
    "id": "city-301249",
    "name": "Grasim Industries Ltd",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.6847,
    "lng": 81.9002
  },
  {
    "id": "city-301244",
    "name": "Hindalco Industries Ltd. Renukoot",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.2607,
    "lng": 81.9002
  },
  {
    "id": "city-249550",
    "name": "Obra",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.4427,
    "lng": 80.6622
  },
  {
    "id": "city-249553",
    "name": "Pipri",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.8587,
    "lng": 77.9662
  },
  {
    "id": "city-249552",
    "name": "Renukoot",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6527,
    "lng": 80.9482
  },
  {
    "id": "city-249547",
    "name": "Robertsganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.2047,
    "lng": 81.6122
  },
  {
    "id": "city-249406",
    "name": "Dostpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.1927,
    "lng": 81.4642
  },
  {
    "id": "city-249407",
    "name": "Kadipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.874699999999997,
    "lng": 81.0942
  },
  {
    "id": "city-249405",
    "name": "Koeripur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.456699999999998,
    "lng": 80.9122
  },
  {
    "id": "city-297038",
    "name": "Lambhua",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.130699999999997,
    "lng": 78.8862
  },
  {
    "id": "city-249404",
    "name": "Sultanpur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.034699999999997,
    "lng": 80.5262
  },
  {
    "id": "city-297922",
    "name": "Achal Ganj",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.4087,
    "lng": 80.68820000000001
  },
  {
    "id": "city-249217",
    "name": "Auras",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.022699999999997,
    "lng": 81.6422
  },
  {
    "id": "city-249212",
    "name": "Bangarmau",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.0947,
    "lng": 78.2822
  },
  {
    "id": "city-249229",
    "name": "Bhagwant Nagar",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.648699999999998,
    "lng": 81.9282
  },
  {
    "id": "city-249228",
    "name": "Bighapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.7427,
    "lng": 79.4102
  },
  {
    "id": "city-249213",
    "name": "Fatehpur Chaurasi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.1527,
    "lng": 80.7522
  },
  {
    "id": "city-297022",
    "name": "Gangaghat",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.6347,
    "lng": 79.79820000000001
  },
  {
    "id": "city-249211",
    "name": "Ganj Muradabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.020699999999998,
    "lng": 81.13220000000001
  },
  {
    "id": "city-249218",
    "name": "Hyderabad",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.078699999999998,
    "lng": 80.4182
  },
  {
    "id": "city-249216",
    "name": "Kursath (Hardoi)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.5307,
    "lng": 81.9422
  },
  {
    "id": "city-249227",
    "name": "Maurawan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.2947,
    "lng": 79.29820000000001
  },
  {
    "id": "city-249220",
    "name": "Mohan",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.804699999999997,
    "lng": 78.29220000000001
  },
  {
    "id": "city-249222",
    "name": "Nawabganj (Unnao)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.168699999999998,
    "lng": 78.4722
  },
  {
    "id": "city-249221",
    "name": "Nyotini",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.5747,
    "lng": 81.93820000000001
  },
  {
    "id": "city-249226",
    "name": "Purwa",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.9807,
    "lng": 78.74820000000001
  },
  {
    "id": "city-249219",
    "name": "Rasulabaad(Unnao)",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.642699999999998,
    "lng": 77.9662
  },
  {
    "id": "city-249215",
    "name": "Safipur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.670699999999997,
    "lng": 81.2822
  },
  {
    "id": "city-249214",
    "name": "Ugu",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 27.836699999999997,
    "lng": 81.87620000000001
  },
  {
    "id": "city-249223",
    "name": "Unnao",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.092699999999997,
    "lng": 79.2202
  },
  {
    "id": "city-301242",
    "name": "Banaras Locomotive Works",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 26.368699999999997,
    "lng": 80.0002
  },
  {
    "id": "city-249524",
    "name": "Gangapur",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 24.676699999999997,
    "lng": 79.0202
  },
  {
    "id": "city-249531",
    "name": "Varanasi",
    "state": "Uttar Pradesh",
    "type": "City",
    "lat": 25.7247,
    "lng": 81.7322
  },
  {
    "id": "city-248449",
    "name": "Almora",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.2748,
    "lng": 79.4193
  },
  {
    "id": "city-274457",
    "name": "Bhikiyasain",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.3308,
    "lng": 77.3393
  },
  {
    "id": "city-277163",
    "name": "Chamiyala",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.172800000000002,
    "lng": 77.0973
  },
  {
    "id": "city-297128",
    "name": "Chaukhutiya",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.3388,
    "lng": 77.0193
  },
  {
    "id": "city-248448",
    "name": "Dwarahat",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.9988,
    "lng": 79.1113
  },
  {
    "id": "city-277190",
    "name": "Ranikhet Chiliyanaula",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.7388,
    "lng": 79.7633
  },
  {
    "id": "city-248447",
    "name": "Bageshwar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.9188,
    "lng": 77.3673
  },
  {
    "id": "city-299525",
    "name": "Garud",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 31.0648,
    "lng": 78.1973
  },
  {
    "id": "city-248485",
    "name": "Haridwar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.8188,
    "lng": 79.9793
  },
  {
    "id": "city-259921",
    "name": "Kapkot",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.1508,
    "lng": 78.7433
  },
  {
    "id": "city-248412",
    "name": "Badrinathpuri",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.992800000000003,
    "lng": 77.4773
  },
  {
    "id": "city-248414",
    "name": "Chamoli Gopeshwar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.1248,
    "lng": 78.9133
  },
  {
    "id": "city-260112",
    "name": "Gairsain",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.7428,
    "lng": 77.9113
  },
  {
    "id": "city-248416",
    "name": "Gochar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.9188,
    "lng": 78.7913
  },
  {
    "id": "city-248413",
    "name": "Joshimath",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.1368,
    "lng": 76.3253
  },
  {
    "id": "city-248417",
    "name": "Karnaprayag",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.0008,
    "lng": 78.7253
  },
  {
    "id": "city-301882",
    "name": "Nandanagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.916800000000002,
    "lng": 79.3053
  },
  {
    "id": "city-248415",
    "name": "Nandprayag",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.1888,
    "lng": 78.9613
  },
  {
    "id": "city-276459",
    "name": "Pipalkoti",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.192800000000002,
    "lng": 79.9013
  },
  {
    "id": "city-259820",
    "name": "Pokhari",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.2188,
    "lng": 79.6433
  },
  {
    "id": "city-262922",
    "name": "Banbasa",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.378800000000002,
    "lng": 78.0113
  },
  {
    "id": "city-248451",
    "name": "Champawat",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.1388,
    "lng": 77.0433
  },
  {
    "id": "city-248450",
    "name": "Lohaghat",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.762800000000002,
    "lng": 79.9553
  },
  {
    "id": "city-301877",
    "name": "Pati",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.4628,
    "lng": 78.5353
  },
  {
    "id": "city-248452",
    "name": "Tanakpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.2148,
    "lng": 79.2153
  },
  {
    "id": "city-248430",
    "name": "Dehradun",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.5048,
    "lng": 77.2853
  },
  {
    "id": "city-248433",
    "name": "Doiwala",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.3168,
    "lng": 79.5613
  },
  {
    "id": "city-248428",
    "name": "Herbertpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.7928,
    "lng": 77.0693
  },
  {
    "id": "city-248458",
    "name": "Kaladhungi",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.8068,
    "lng": 79.8713
  },
  {
    "id": "city-248477",
    "name": "Khatima",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.5008,
    "lng": 76.5693
  },
  {
    "id": "city-248429",
    "name": "Mussoorie",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.9188,
    "lng": 78.7753
  },
  {
    "id": "city-248457",
    "name": "Ramnagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.352800000000002,
    "lng": 79.9413
  },
  {
    "id": "city-248434",
    "name": "Rishikesh",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.1308,
    "lng": 76.9393
  },
  {
    "id": "city-275633",
    "name": "Selaqui(Central Hope Town)",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.7708,
    "lng": 79.4113
  },
  {
    "id": "city-248427",
    "name": "Vikasnagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.320800000000002,
    "lng": 78.7653
  },
  {
    "id": "city-262847",
    "name": "Bhagwanpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.2768,
    "lng": 77.6893
  },
  {
    "id": "city-299524",
    "name": "Dhandera",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.172800000000002,
    "lng": 79.2813
  },
  {
    "id": "city-248485",
    "name": "Haridwar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.8188,
    "lng": 79.9793
  },
  {
    "id": "city-300431",
    "name": "Imlikhera",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.8068,
    "lng": 78.4873
  },
  {
    "id": "city-248481",
    "name": "Jhabrera",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.6528,
    "lng": 77.8733
  },
  {
    "id": "city-248486",
    "name": "Laksar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.0468,
    "lng": 78.5193
  },
  {
    "id": "city-248483",
    "name": "Landhaura",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.306800000000003,
    "lng": 77.2513
  },
  {
    "id": "city-248482",
    "name": "Manglaur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.3048,
    "lng": 79.0453
  },
  {
    "id": "city-299749",
    "name": "Padali Gurjar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.9068,
    "lng": 78.0113
  },
  {
    "id": "city-275670",
    "name": "Piran Kaliyar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.2128,
    "lng": 76.08930000000001
  },
  {
    "id": "city-299529",
    "name": "Rampur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.4968,
    "lng": 77.2853
  },
  {
    "id": "city-248478",
    "name": "Roorkee",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.7448,
    "lng": 76.6053
  },
  {
    "id": "city-262858",
    "name": "Shivalik Nagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.2508,
    "lng": 78.5553
  },
  {
    "id": "city-300592",
    "name": "Sultanpur-Adampur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.6248,
    "lng": 76.4533
  },
  {
    "id": "city-248456",
    "name": "Bhimtal",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.108800000000002,
    "lng": 77.0493
  },
  {
    "id": "city-248455",
    "name": "Bhowali",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.3388,
    "lng": 78.1793
  },
  {
    "id": "city-248459",
    "name": "Haldwani-Cumkathgodam",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.8468,
    "lng": 77.6633
  },
  {
    "id": "city-248458",
    "name": "Kaladhungi",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.8068,
    "lng": 79.8713
  },
  {
    "id": "city-248460",
    "name": "Lalkuan",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.3188,
    "lng": 76.9673
  },
  {
    "id": "city-248457",
    "name": "Ramnagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.352800000000002,
    "lng": 79.9413
  },
  {
    "id": "city-248440",
    "name": "Dogadda",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.6988,
    "lng": 79.4033
  },
  {
    "id": "city-248441",
    "name": "Kanvnagri Kotdwar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.8768,
    "lng": 78.9613
  },
  {
    "id": "city-248438",
    "name": "Pauri",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.0328,
    "lng": 77.6133
  },
  {
    "id": "city-262882",
    "name": "Satpuli",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.5868,
    "lng": 76.33930000000001
  },
  {
    "id": "city-248437",
    "name": "Srinagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.6008,
    "lng": 77.4053
  },
  {
    "id": "city-262843",
    "name": "Swargashram Jonk",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.7388,
    "lng": 76.9473
  },
  {
    "id": "city-299532",
    "name": "Thalisain",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.620800000000003,
    "lng": 77.9453
  },
  {
    "id": "city-259826",
    "name": "Berinag",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.7108,
    "lng": 78.30330000000001
  },
  {
    "id": "city-248444",
    "name": "Dharchula",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.6428,
    "lng": 76.4193
  },
  {
    "id": "city-248445",
    "name": "Didihat",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.9568,
    "lng": 76.9933
  },
  {
    "id": "city-262883",
    "name": "Gangolihat",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.2068,
    "lng": 78.7033
  },
  {
    "id": "city-301879",
    "name": "Munsyari",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 31.0428,
    "lng": 77.9633
  },
  {
    "id": "city-248446",
    "name": "Pithoragarh",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.6128,
    "lng": 76.1453
  },
  {
    "id": "city-262902",
    "name": "Augustmuni",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.5028,
    "lng": 79.0633
  },
  {
    "id": "city-301881",
    "name": "Guptkashi",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.0588,
    "lng": 76.2993
  },
  {
    "id": "city-248418",
    "name": "Kedarnath",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.070800000000002,
    "lng": 79.1193
  },
  {
    "id": "city-248419",
    "name": "Rudraprayag",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.6428,
    "lng": 78.1953
  },
  {
    "id": "city-276616",
    "name": "Tilwara",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 31.0188,
    "lng": 76.9953
  },
  {
    "id": "city-248423",
    "name": "Chamba",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.890800000000002,
    "lng": 77.9233
  },
  {
    "id": "city-277163",
    "name": "Chamiyala",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.172800000000002,
    "lng": 77.0973
  },
  {
    "id": "city-248421",
    "name": "Devprayag",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.8368,
    "lng": 80.0093
  },
  {
    "id": "city-277164",
    "name": "Gaja",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.5888,
    "lng": 79.4413
  },
  {
    "id": "city-262832",
    "name": "Ghansali",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.2768,
    "lng": 79.3613
  },
  {
    "id": "city-248420",
    "name": "Kirtinagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.8348,
    "lng": 79.1473
  },
  {
    "id": "city-248426",
    "name": "Munikireti-Dhalwala",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.6548,
    "lng": 77.0393
  },
  {
    "id": "city-248424",
    "name": "Narendranagar",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.8948,
    "lng": 79.07130000000001
  },
  {
    "id": "city-299531",
    "name": "Tapovan",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.448800000000002,
    "lng": 77.5093
  },
  {
    "id": "city-248422",
    "name": "Tehri",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.5428,
    "lng": 76.4233
  },
  {
    "id": "city-248467",
    "name": "Bajpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.5108,
    "lng": 78.7353
  },
  {
    "id": "city-248469",
    "name": "Gadarpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.5188,
    "lng": 76.55930000000001
  },
  {
    "id": "city-301880",
    "name": "Garhinegi",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.006800000000002,
    "lng": 79.1353
  },
  {
    "id": "city-277162",
    "name": "Gularbhoj",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.634800000000002,
    "lng": 78.5633
  },
  {
    "id": "city-248462",
    "name": "Jaspur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.5728,
    "lng": 77.8253
  },
  {
    "id": "city-248463",
    "name": "Kashipur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.192800000000002,
    "lng": 79.4293
  },
  {
    "id": "city-248468",
    "name": "Kela Khera",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.3348,
    "lng": 79.6073
  },
  {
    "id": "city-248477",
    "name": "Khatima",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.5008,
    "lng": 76.5693
  },
  {
    "id": "city-248474",
    "name": "Kichha",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.6828,
    "lng": 78.2353
  },
  {
    "id": "city-299527",
    "name": "Lalpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.102800000000002,
    "lng": 79.2553
  },
  {
    "id": "city-248461",
    "name": "Mahua Dabra Haripura",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.4508,
    "lng": 78.3073
  },
  {
    "id": "city-248465",
    "name": "Mahua Kheraganj",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.7488,
    "lng": 78.6653
  },
  {
    "id": "city-299528",
    "name": "Nagla",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.6528,
    "lng": 76.83330000000001
  },
  {
    "id": "city-275661",
    "name": "Nanakmatta",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.5308,
    "lng": 76.0513
  },
  {
    "id": "city-248471",
    "name": "Rudrapur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.2128,
    "lng": 79.4173
  },
  {
    "id": "city-248475",
    "name": "Shaktigarh",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.8748,
    "lng": 76.6353
  },
  {
    "id": "city-305322",
    "name": "Sirauli Kalan",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.6748,
    "lng": 77.4753
  },
  {
    "id": "city-248476",
    "name": "Sitarganj",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.1008,
    "lng": 76.3933
  },
  {
    "id": "city-248410",
    "name": "Barahat-Uttarkashi",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.986800000000002,
    "lng": 79.1073
  },
  {
    "id": "city-248409",
    "name": "Barkot",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.1888,
    "lng": 79.7533
  },
  {
    "id": "city-262842",
    "name": "Chiniyalisaur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.8168,
    "lng": 76.18130000000001
  },
  {
    "id": "city-248411",
    "name": "Gangotri",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.5288,
    "lng": 77.6853
  },
  {
    "id": "city-274461",
    "name": "Naugaon",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.928800000000003,
    "lng": 78.1253
  },
  {
    "id": "city-262841",
    "name": "Purola",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.128800000000002,
    "lng": 78.4693
  },
  {
    "id": "city-248470",
    "name": "Dineshpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.9708,
    "lng": 76.5873
  },
  {
    "id": "city-277183",
    "name": "Lambgaon",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 28.8328,
    "lng": 77.5173
  },
  {
    "id": "city-248466",
    "name": "Sultanpur",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 27.2548,
    "lng": 78.5993
  },
  {
    "id": "city-275665",
    "name": "Tharali",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 30.9888,
    "lng": 78.6573
  },
  {
    "id": "city-262901",
    "name": "Ukhimath",
    "state": "Uttarakhand",
    "type": "City",
    "lat": 29.0968,
    "lng": 77.2693
  },
  {
    "id": "city-249958",
    "name": "Alipurduar",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.0048,
    "lng": 87.28500000000001
  },
  {
    "id": "city-299774",
    "name": "Falakata",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.776799999999998,
    "lng": 86.033
  },
  {
    "id": "city-250209",
    "name": "Bankura",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.9148,
    "lng": 85.943
  },
  {
    "id": "city-250210",
    "name": "Bishnupur",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.630799999999997,
    "lng": 85.13900000000001
  },
  {
    "id": "city-250208",
    "name": "Sonamukhi",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.468799999999998,
    "lng": 85.917
  },
  {
    "id": "city-250028",
    "name": "Bolpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.1828,
    "lng": 87.88300000000001
  },
  {
    "id": "city-250027",
    "name": "Dubrajpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.1448,
    "lng": 86.769
  },
  {
    "id": "city-253250",
    "name": "Nalhati",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.3528,
    "lng": 88.58500000000001
  },
  {
    "id": "city-250024",
    "name": "Rampurhat",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.1468,
    "lng": 86.095
  },
  {
    "id": "city-250025",
    "name": "Sainthia",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.1768,
    "lng": 86.697
  },
  {
    "id": "city-250026",
    "name": "Suri",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.444799999999997,
    "lng": 88.293
  },
  {
    "id": "city-249975",
    "name": "Cooch Behar",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.9668,
    "lng": 87.291
  },
  {
    "id": "city-249977",
    "name": "Dinhata",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.400799999999997,
    "lng": 88.07300000000001
  },
  {
    "id": "city-249972",
    "name": "Haldibari",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.814799999999998,
    "lng": 87.57900000000001
  },
  {
    "id": "city-249974",
    "name": "Mathabhanga",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.142799999999998,
    "lng": 85.643
  },
  {
    "id": "city-249973",
    "name": "Mekliganj",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.174799999999998,
    "lng": 87.227
  },
  {
    "id": "city-249976",
    "name": "Tufanganj",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.7148,
    "lng": 87.031
  },
  {
    "id": "city-249989",
    "name": "Balurghat",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.4388,
    "lng": 85.435
  },
  {
    "id": "city-289244",
    "name": "Buniadpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.354799999999997,
    "lng": 86.543
  },
  {
    "id": "city-249988",
    "name": "Gangarampore",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.5028,
    "lng": 85.235
  },
  {
    "id": "city-249946",
    "name": "Darjeeling",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.872799999999998,
    "lng": 85.745
  },
  {
    "id": "city-249949",
    "name": "Kurseong",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.4388,
    "lng": 87.003
  },
  {
    "id": "city-249948",
    "name": "Mirik",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.162799999999997,
    "lng": 85.959
  },
  {
    "id": "city-249957",
    "name": "Siliguri",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.578799999999998,
    "lng": 85.07900000000001
  },
  {
    "id": "city-250168",
    "name": "Arambag",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.744799999999998,
    "lng": 86.449
  },
  {
    "id": "city-250175",
    "name": "Baidyabati",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.7028,
    "lng": 88.555
  },
  {
    "id": "city-250170",
    "name": "Bansberia",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.4008,
    "lng": 87.153
  },
  {
    "id": "city-250173",
    "name": "Bhadreswar",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.4848,
    "lng": 85.941
  },
  {
    "id": "city-250174",
    "name": "Champdany",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.3368,
    "lng": 85.497
  },
  {
    "id": "city-250172",
    "name": "Chandannagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.7988,
    "lng": 85.307
  },
  {
    "id": "city-298972",
    "name": "Dankuni",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.814799999999998,
    "lng": 88.09100000000001
  },
  {
    "id": "city-250171",
    "name": "Hooghly Chinsurah",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.616799999999998,
    "lng": 87.58500000000001
  },
  {
    "id": "city-250178",
    "name": "Konnagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.9528,
    "lng": 86.673
  },
  {
    "id": "city-250177",
    "name": "Rishra",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.648799999999998,
    "lng": 85.313
  },
  {
    "id": "city-250176",
    "name": "Serampore",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.9748,
    "lng": 86.39500000000001
  },
  {
    "id": "city-250169",
    "name": "Tarakeswar",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.2408,
    "lng": 84.86500000000001
  },
  {
    "id": "city-250179",
    "name": "Uttarpara Kotrung",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.7748,
    "lng": 88.643
  },
  {
    "id": "city-250246",
    "name": "Bally",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.726799999999997,
    "lng": 88.03500000000001
  },
  {
    "id": "city-250247",
    "name": "Howrah",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.3888,
    "lng": 86.437
  },
  {
    "id": "city-250248",
    "name": "Uluberia",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.7408,
    "lng": 85.57300000000001
  },
  {
    "id": "city-249970",
    "name": "Dhupguri",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.7308,
    "lng": 85.935
  },
  {
    "id": "city-249956",
    "name": "Jalpaiguri",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.514799999999997,
    "lng": 87.76700000000001
  },
  {
    "id": "city-249955",
    "name": "Mal",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.2108,
    "lng": 88.039
  },
  {
    "id": "city-301103",
    "name": "Maynaguri",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.3328,
    "lng": 87.149
  },
  {
    "id": "city-249957",
    "name": "Siliguri",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.578799999999998,
    "lng": 85.07900000000001
  },
  {
    "id": "dist-703",
    "name": "Jhargram",
    "state": "West Bengal",
    "type": "District",
    "lat": 22.7988,
    "lng": 86.715
  },
  {
    "id": "city-249947",
    "name": "Kalimpong",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.110799999999998,
    "lng": 86.899
  },
  {
    "id": "city-250299",
    "name": "Kolkata",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.8168,
    "lng": 87.089
  },
  {
    "id": "city-249991",
    "name": "English Bazar",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.0508,
    "lng": 88.815
  },
  {
    "id": "city-249990",
    "name": "Old Malda",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.3628,
    "lng": 85.87100000000001
  },
  {
    "id": "city-250001",
    "name": "Beldanga",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.622799999999998,
    "lng": 88.70700000000001
  },
  {
    "id": "city-249999",
    "name": "Berhampore",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.8808,
    "lng": 86.58500000000001
  },
  {
    "id": "city-249995",
    "name": "Dhulian",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.944799999999997,
    "lng": 85.937
  },
  {
    "id": "city-273007",
    "name": "Domkal",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.5068,
    "lng": 86.33500000000001
  },
  {
    "id": "city-249996",
    "name": "Jangipur",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.8908,
    "lng": 86.07900000000001
  },
  {
    "id": "city-249997",
    "name": "Jiaganj Azimganj",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.2168,
    "lng": 87.345
  },
  {
    "id": "city-250000",
    "name": "Kandi",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.4208,
    "lng": 84.95700000000001
  },
  {
    "id": "city-249998",
    "name": "Murshidabad",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.662799999999997,
    "lng": 87.131
  },
  {
    "id": "city-250100",
    "name": "Birnagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.918799999999997,
    "lng": 87.251
  },
  {
    "id": "city-250103",
    "name": "Chakdaha",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.5808,
    "lng": 85.997
  },
  {
    "id": "city-250102",
    "name": "Cooper S Camp",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.970799999999997,
    "lng": 85.23100000000001
  },
  {
    "id": "city-250105",
    "name": "Gayeshpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.918799999999997,
    "lng": 86.435
  },
  {
    "id": "city-273006",
    "name": "Haringhata",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.9288,
    "lng": 85.40100000000001
  },
  {
    "id": "city-250104",
    "name": "Kalyani",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.380799999999997,
    "lng": 87.349
  },
  {
    "id": "city-250096",
    "name": "Krishnanagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.0568,
    "lng": 85.857
  },
  {
    "id": "city-250097",
    "name": "Nabadwip",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.898799999999998,
    "lng": 87.855
  },
  {
    "id": "city-250101",
    "name": "Ranaghat",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.4468,
    "lng": 88.171
  },
  {
    "id": "city-250099",
    "name": "Santipur",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.6908,
    "lng": 86.039
  },
  {
    "id": "city-250098",
    "name": "Taherpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.564799999999998,
    "lng": 86.973
  },
  {
    "id": "city-250128",
    "name": "Ashokenagar Kalyangarh",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.4548,
    "lng": 88.299
  },
  {
    "id": "city-250134",
    "name": "Baduria",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.9908,
    "lng": 85.299
  },
  {
    "id": "city-250141",
    "name": "Baranagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.392799999999998,
    "lng": 88.233
  },
  {
    "id": "city-250135",
    "name": "Barasat",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.4028,
    "lng": 86.071
  },
  {
    "id": "city-250132",
    "name": "Barrackpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.6408,
    "lng": 84.881
  },
  {
    "id": "city-250147",
    "name": "Basirhat",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.526799999999998,
    "lng": 86.93900000000001
  },
  {
    "id": "city-250125",
    "name": "Bhatpara",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.892799999999998,
    "lng": 87.36500000000001
  },
  {
    "id": "city-250145",
    "name": "Bidhannagar",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.7568,
    "lng": 86.845
  },
  {
    "id": "city-250121",
    "name": "Bongaon",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.2148,
    "lng": 87.059
  },
  {
    "id": "city-250143",
    "name": "Dum Dum",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.4268,
    "lng": 86.10300000000001
  },
  {
    "id": "city-250129",
    "name": "Garulia",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.264799999999997,
    "lng": 86.20100000000001
  },
  {
    "id": "city-250126",
    "name": "Gobardanga",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.834799999999998,
    "lng": 85.89500000000001
  },
  {
    "id": "city-250127",
    "name": "Habra",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.0828,
    "lng": 85.479
  },
  {
    "id": "city-250123",
    "name": "Halisahar",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.5808,
    "lng": 88.733
  },
  {
    "id": "city-250140",
    "name": "Kamarhati",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.078799999999998,
    "lng": 85.947
  },
  {
    "id": "city-250122",
    "name": "Kanchrapara",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.5068,
    "lng": 87.295
  },
  {
    "id": "city-250137",
    "name": "Khardah",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.9168,
    "lng": 86.781
  },
  {
    "id": "city-250136",
    "name": "Madhyamgram",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.282799999999998,
    "lng": 87.903
  },
  {
    "id": "city-250124",
    "name": "Naihati",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.226799999999997,
    "lng": 87.679
  },
  {
    "id": "city-250139",
    "name": "New Barrackpore",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.0108,
    "lng": 86.51100000000001
  },
  {
    "id": "city-250131",
    "name": "North Barrackpore",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.9488,
    "lng": 87.205
  },
  {
    "id": "city-250142",
    "name": "North Dum Dum",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.988799999999998,
    "lng": 86.973
  },
  {
    "id": "city-250138",
    "name": "Panihati",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.3188,
    "lng": 87.65100000000001
  },
  {
    "id": "city-250144",
    "name": "South Dum Dum",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.9488,
    "lng": 85.037
  },
  {
    "id": "city-250148",
    "name": "Taki",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.1528,
    "lng": 88.241
  },
  {
    "id": "city-250133",
    "name": "Titagarh",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.2948,
    "lng": 86.339
  },
  {
    "id": "city-250032",
    "name": "Asansol",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.180799999999998,
    "lng": 84.965
  },
  {
    "id": "city-250034",
    "name": "Durgapur",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.4788,
    "lng": 87.635
  },
  {
    "id": "city-250226",
    "name": "Chandrakona",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.7868,
    "lng": 85.015
  },
  {
    "id": "city-250229",
    "name": "Ghatal",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.4328,
    "lng": 88.041
  },
  {
    "id": "city-250231",
    "name": "Jhargram",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.7988,
    "lng": 86.715
  },
  {
    "id": "city-250232",
    "name": "Kharagpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.1728,
    "lng": 87.57300000000001
  },
  {
    "id": "city-250228",
    "name": "Kharar",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.2168,
    "lng": 88.105
  },
  {
    "id": "city-250227",
    "name": "Khirpai",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.3188,
    "lng": 86.24300000000001
  },
  {
    "id": "city-250230",
    "name": "Midnapore",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.3808,
    "lng": 88.41300000000001
  },
  {
    "id": "city-250225",
    "name": "Ramjibanpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.9208,
    "lng": 86.193
  },
  {
    "id": "city-250038",
    "name": "Burdwan",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.8648,
    "lng": 86.025
  },
  {
    "id": "city-250036",
    "name": "Dainhat",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.5808,
    "lng": 88.837
  },
  {
    "id": "city-250037",
    "name": "Guskara",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.9428,
    "lng": 86.851
  },
  {
    "id": "city-250040",
    "name": "Kalna",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.180799999999998,
    "lng": 86.51700000000001
  },
  {
    "id": "city-250035",
    "name": "Katwa",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.1148,
    "lng": 86.471
  },
  {
    "id": "city-250039",
    "name": "Memari",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.040799999999997,
    "lng": 85.057
  },
  {
    "id": "city-250236",
    "name": "Contai",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.078799999999998,
    "lng": 86.06700000000001
  },
  {
    "id": "city-250235",
    "name": "Egra",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.372799999999998,
    "lng": 87.061
  },
  {
    "id": "city-250234",
    "name": "Haldia",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.9728,
    "lng": 85.541
  },
  {
    "id": "city-253229",
    "name": "Panskura",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.784799999999997,
    "lng": 87.09700000000001
  },
  {
    "id": "city-250233",
    "name": "Tamralipta",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.0048,
    "lng": 85.205
  },
  {
    "id": "city-250214",
    "name": "Jhalda",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.534799999999997,
    "lng": 87.96300000000001
  },
  {
    "id": "city-250215",
    "name": "Purulia",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.3788,
    "lng": 87.327
  },
  {
    "id": "city-250213",
    "name": "Raghunathpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.0448,
    "lng": 86.565
  },
  {
    "id": "city-250304",
    "name": "Baruipur",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.1028,
    "lng": 86.795
  },
  {
    "id": "city-250301",
    "name": "Budge Budge",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.822799999999997,
    "lng": 86.971
  },
  {
    "id": "city-250305",
    "name": "Diamond Harbour",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.936799999999998,
    "lng": 87.177
  },
  {
    "id": "city-250306",
    "name": "Jaynagar Mazilpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.6288,
    "lng": 85.509
  },
  {
    "id": "city-250299",
    "name": "Kolkata",
    "state": "West Bengal",
    "type": "City",
    "lat": 23.8168,
    "lng": 87.089
  },
  {
    "id": "city-250300",
    "name": "Maheshtala",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.7308,
    "lng": 88.039
  },
  {
    "id": "city-250302",
    "name": "Pujali",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.500799999999998,
    "lng": 87.31700000000001
  },
  {
    "id": "city-250303",
    "name": "Rajpur Sonarpur",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.610799999999998,
    "lng": 88.295
  },
  {
    "id": "city-249985",
    "name": "Dalkhola",
    "state": "West Bengal",
    "type": "City",
    "lat": 22.1148,
    "lng": 85.959
  },
  {
    "id": "city-249982",
    "name": "Islampore",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.1148,
    "lng": 86.247
  },
  {
    "id": "city-249984",
    "name": "Kaliaganj",
    "state": "West Bengal",
    "type": "City",
    "lat": 21.4668,
    "lng": 85.935
  },
  {
    "id": "city-249983",
    "name": "Raiganj",
    "state": "West Bengal",
    "type": "City",
    "lat": 20.1308,
    "lng": 88.66300000000001
  }
];
