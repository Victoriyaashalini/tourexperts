const fs = require('fs');

// Define locations as an object with countries and cities
const locations = {
  'India': {
    'North India': ['Delhi', 'Agra', 'Jaipur', 'Shimla', 'Dehradun'],
    'South India': ['Bangalore', 'Chennai', 'Hyderabad', 'Kerala', 'Coimbatore'],
    'East India': ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Darjeeling', 'Shillong'],
    'West India': ['Mumbai', 'Goa', 'Pune', 'Udaipur', 'Jaisalmer']
  },
  'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  'Switzerland': ['Zurich', 'Geneva', 'Lucerne', 'Lausanne', 'Interlaken'],
  'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Malindi'],
  'Morocco': ['Marrakech', 'Casablanca', 'Fes', 'Rabat', 'Chefchaouen'],
  'Seychelles': ['Victoria', 'Beau Vallon', 'Anse Royale', 'Praslin', 'La Digue'],
  'South Africa': ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'Port Elizabeth'],
  'Zimbabwe': ['Harare', 'Bulawayo', 'Victoria Falls', 'Gweru', 'Mutare'],
  'Alaska': ['Anchorage', 'Juneau', 'Fairbanks', 'Sitka', 'Ketchikan'],
  'South America': ['Buenos Aires', 'Rio de Janeiro', 'Santiago', 'Lima', 'Bogotá'],
  'Central America': ['San José', 'Panama City', 'Guatemala City', 'Belize City', 'Tegucigalpa'],
  'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
  'Asia': ['Tokyo', 'Bangkok', 'Singapore', 'Hong Kong', 'Seoul'],
  'Bali': ['Denpasar', 'Ubud', 'Kuta', 'Seminyak', 'Nusa Dua'],
  'China': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Xi\'an'],
  'Dubai': ['Dubai City', 'Bur Dubai', 'Jumeirah', 'Deira', 'Dubai Marina'],
  'Hong Kong': ['Hong Kong Island', 'Kowloon', 'New Territories', 'Lantau Island', 'Mong Kok'],
  'Japan': ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Fukuoka'],
  'Indonesia': ['Jakarta', 'Bali', 'Yogyakarta', 'Surabaya', 'Bandung'],
  'Kazakhstan': ['Almaty', 'Nur-Sultan', 'Shymkent', 'Aktobe', 'Pavlodar'],
  'Korea': ['Seoul', 'Busan', 'Incheon', 'Gyeongju', 'Jeju'],
  'Malaysia': ['Kuala Lumpur', 'Penang', 'Langkawi', 'Kota Kinabalu', 'Malacca'],
  'Singapore': ['Marina Bay', 'Orchard Road', 'Sentosa', 'Chinatown', 'Little India'],
  'Philippines': ['Manila', 'Cebu City', 'Davao City', 'Boracay', 'Palawan'],
  'Taiwan': ['Taipei', 'Kaohsiung', 'Tainan', 'Taichung', 'Hualien'],
  'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi'],
  'Vietnam': ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hue', 'Nha Trang'],
  'Uzbekistan': ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva', 'Andijan'],
  'Cambodia': ['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang', 'Kampot'],
  'Austria': ['Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Linz'],
  'Belgium': ['Brussels', 'Antwerp', 'Ghent', 'Bruges', 'Leuven'],
  'Bulgaria': ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse'],
  'Croatia': ['Zagreb', 'Dubrovnik', 'Split', 'Rijeka', 'Poreč'],
  'Czech Republic': ['Prague', 'Brno', 'Plzeň', 'Olomouc', 'Karlovy Vary'],
  'Denmark': ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'],
  'Finland': ['Helsinki', 'Espoo', 'Tampere', 'Oulu', 'Rovaniemi'],
  'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
  'Germany': ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt'],
  'Greece': ['Athens', 'Thessaloniki', 'Santorini', 'Mykonos', 'Crete'],
  'Greenland': ['Nuuk', 'Ilulissat', 'Qaqortoq', 'Sisimiut', 'Aasiaat'],
  'Hungary': ['Budapest', 'Debrecen', 'Szeged', 'Pécs', 'Miskolc'],
  'Iceland': ['Reykjavík', 'Akureyri', 'Vik', 'Hofn', 'Egilsstaðir'],
  'Ireland': ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford'],
  'Italy': ['Rome', 'Venice', 'Florence', 'Milan', 'Naples'],
  'Netherlands': ['Amsterdam', 'Rotterdam', 'Utrecht', 'The Hague', 'Eindhoven'],
  'Norway': ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Tromsø'],
  'Portugal': ['Lisbon', 'Porto', 'Funchal', 'Coimbra', 'Braga'],
  'Romania': ['Bucharest', 'Cluj-Napoca', 'Brașov', 'Sibiu', 'Timișoara'],
  'Slovakia': ['Bratislava', 'Košice', 'Nitra', 'Žilina', 'Prešov'],
  'Spain': ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Bilbao'],
  'Sweden': ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås'],
  'Turkey': ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bodrum'],
  'United Kingdom': ['London', 'Edinburgh', 'Manchester', 'Birmingham', 'Liverpool'],
  'Madagascar': ['Antananarivo', 'Nosy Be', 'Toamasina', 'Mahajanga', 'Toliara'],
  'Maldives': ['Malé', 'Sun Siyam Iru Fushi', 'Adaaran Prestige Water Villas', 'Conrad Maldives Rangali Island', 'Anantara Veli Maldives'],
  'Mauritius': ['Port Louis', 'Grand Baie', 'Flic-en-Flac', 'Belle Mare', 'Le Morne'],
  'Reunion': ['Saint-Denis', 'Saint-Pierre', 'Saint-Gilles-les-Bains', 'Salazie', 'Cilaos'],
  'Sri Lanka': ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Nuwara Eliya'],
  'Middle East': ['Dubai', 'Doha', 'Abu Dhabi', 'Manama', 'Muscat'],
  'Israel': ['Tel Aviv', 'Jerusalem', 'Haifa', 'Eilat', 'Nazareth'],
  'Jordan': ['Amman', 'Petra', 'Aqaba', 'Wadi Rum', 'Jerash'],
  'Oman': ['Muscat', 'Salalah', 'Nizwa', 'Sohar', 'Sur'],
  'Qatar': ['Doha', 'Al Wakrah', 'Al Khor', 'Umm Salal', 'Madinat ash Shamal'],
  'UAE': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras al Khaimah'],
  'Egypt': ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Sharm El Sheikh'],
  'Pacific': ['Fiji', 'Samoa', 'Tonga', 'Vanuatu', 'Papua New Guinea'],
  'Fiji': ['Suva', 'Nadi', 'Lautoka', 'Sigatoka', 'Savusavu'],
  'New Zealand': ['Auckland', 'Wellington', 'Christchurch', 'Queenstown', 'Rotorua'],
  'Argentina': ['Buenos Aires', 'Cordoba', 'Mendoza', 'Rosario', 'Ushuaia'],
  'Brazil': ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador', 'Fortaleza'],
  'Chile': ['Santiago', 'Valparaíso', 'Viña del Mar', 'Puerto Varas', 'Punta Arenas'],
  'Colombia': ['Bogotá', 'Medellín', 'Cartagena', 'Cali', 'Santa Marta'],
  'Peru': ['Lima', 'Cusco', 'Arequipa', 'Trujillo', 'Iquitos'],
  'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dhahran'],
  'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras al Khaimah'],
  'Lebanon': ['Beirut', 'Tripoli', 'Byblos', 'Sidon', 'Baalbek'],
  // Add more countries and cities here
};

// Function to get a random location
const getRandomLocation = () => {
  const countries = Object.keys(locations);
  const country = countries[Math.floor(Math.random() * countries.length)];
  const regionsOrCities = locations[country];

  if (Array.isArray(regionsOrCities)) {
    // Return a random city if it's an array
    return { location: regionsOrCities[Math.floor(Math.random() * regionsOrCities.length)], country };
  } else {
    // Pick a random region and then a city from that region
    const regions = Object.keys(regionsOrCities);
    const region = regions[Math.floor(Math.random() * regions.length)];
    const cities = regionsOrCities[region];
    return { location: cities[Math.floor(Math.random() * cities.length)], country };
  }
};

// Function to generate random tour packages
const generateTourPackages = (num) => {
  const types = ['Adventure', 'India', 'International', 'Asia', 'Family tour', 'Group Tour', 'Honeymoon', 'Solo', 'Friends trip', 'Wedding', 'Luxury Resort', 'North India', 'East India', 'South India', 'West India'];
  const keywords = ['beach', 'mountain', 'city', 'sea', 'paradise', 'adventure', 'romantic', 'fun'];

  const tours = [];
  for (let i = 1; i <= num; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomKeywords = keywords.sort(() => 0.5 - Math.random()).slice(0, 2);
    const locationData = getRandomLocation(); // Get a random location

    tours.push({
      id: i,
      name: `Tour Package ${i}`,
      days: Math.floor(Math.random() * 10) + 1,
      type: randomType,
      keywords: randomKeywords,
      description: `Description for Tour Package ${i}.`,
      imageUrl: `assets/images/tour-package-${i}.jpg`,
      location: locationData.location, // City or location within the country
      country: locationData.country // Country name
    });
  }

  return tours;
};

const numOfPackages = 200; // Number of tour packages to generate
const tours = generateTourPackages(numOfPackages);

fs.writeFileSync('src/assets/tour-packages.json', JSON.stringify(tours, null, 2));
console.log(`Generated ${numOfPackages} tour packages.`);