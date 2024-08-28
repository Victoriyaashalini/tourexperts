const fs = require('fs');

// Define locations as an object with countries and cities
const locations = {
  'India': {
    'North India': ['Delhi', 'Agra', 'Jaipur', 'Shimla', 'Dehradun'],
    'South India': ['Bangalore', 'Chennai', 'Hyderabad', 'Kerala', 'Coimbatore','ooty','Kodaikanal','valparai','varkala','Kanyakumari'],
    'East India': ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Darjeeling', 'Shillong'],
    'West India': ['Mumbai', 'Goa', 'Pune', 'Udaipur', 'Jaisalmer']
  },
  'Africa':['Cape town','	Marrakech','	Cairo','Nairobi','Zanzibar','victoriya falls'],
  'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  'Switzerland': ['Zurich', 'Geneva', 'Lucerne', 'Lausanne', 'Interlaken'],
  'America': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix','Miami','Rio de Janeiro','	Buenos Aires','	Machu Picchu',],
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
  'China': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen','Hongkong' ],
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
  'Nepal':['Kathmandu'],
  'Austria':['Vienna']
  // Add more countries and cities here
};
const descriptors = {
  'USA': ['Vibrant', 'Classic', 'Urban', 'Dynamic'],
  'France': ['Elegant', 'Charming', 'Historic', 'Romantic'],
  'Japan': ['Serene', 'Traditional', 'Modern', 'Cultural'],
  'Australia': ['Sun-kissed', 'Outback', 'Coastal', 'Unique'],
  'Italy': ['Scenic', 'Artistic', 'Historic', 'Gourmet'],
  'Spain': ['Festive', 'Sunny', 'Cultural', 'Exotic'],
  'Germany': ['Historic', 'Modern', 'Festive', 'Scenic'],
  'Brazil': ['Lively', 'Tropical', 'Cultural', 'Adventurous'],
  'South Africa': ['Wild', 'Scenic', 'Diverse', 'Vibrant'],
  'India': ['Exotic', 'Colorful', 'Historic', 'Spiritual'],
  'China': ['Ancient', 'Modern', 'Vibrant', 'Cultural'],
  'Mexico': ['Colorful', 'Cultural', 'Historic', 'Relaxing'],
  'Canada': ['Majestic', 'Scenic', 'Vibrant', 'Adventurous'],
  'Turkey': ['Historic', 'Cultural', 'Scenic', 'Unique'],
  'Greece': ['Ancient', 'Sunny', 'Cultural', 'Relaxing'],
  'Thailand': ['Tropical', 'Cultural', 'Relaxing', 'Adventure'],
  'Portugal': ['Sunny', 'Historic', 'Cultural', 'Charming'],
  'Netherlands': ['Historic', 'Modern', 'Unique', 'Scenic'],
  'Switzerland': ['Scenic', 'Mountainous', 'Peaceful', 'Charming'],
  'Belgium': ['Historic', 'Charming', 'Cultural', 'Delicious'],
  'Egypt': ['Ancient', 'Mystical', 'Historic', 'Relaxing'],
  'United Arab Emirates': ['Luxurious', 'Modern', 'Vibrant', 'Unique']
};
const continentMapping = {
  "USA": "North America",
  "Canada": "North America",
  "Mexico": "North America",
  "Brazil": "South America",
  "Argentina": "South America",
  "Chile": "South America",
  "Colombia": "South America",
  "Peru": "South America",
  "France": "Europe",
  "Germany": "Europe",
  "Italy": "Europe",
  "Spain": "Europe",
  "United Kingdom": "Europe",
  "Netherlands": "Europe",
  "Sweden": "Europe",
  "Norway": "Europe",
  "Switzerland": "Europe",
  "Russia": "Europe",
  "Japan": "Asia",
  "China": "Asia",
  "India": "Asia",
  "South Korea": "Asia",
  "Thailand": "Asia",
  "Vietnam": "Asia",
  "Indonesia": "Asia",
  "Malaysia": "Asia",
  "Philippines": "Asia",
  "Singapore": "Asia",
  "Saudi Arabia": "Middle East",
  "United Arab Emirates": "Middle East",
  "Israel": "Middle East",
  "Turkey": "Middle East",
  "Egypt": "Africa",
  "South Africa": "Africa",
  "Morocco": "Africa",
  "Kenya": "Africa",
  "Tanzania": "Africa",
  "Nigeria": "Africa",
  "Ghana": "Africa",
  "Australia": "Australia",
  "New Zealand": "Australia",
  "Fiji": "Pacific Islands",
  "Papua New Guinea": "Pacific Islands",
  "Samoa": "Pacific Islands",
  "Tonga": "Pacific Islands",
  "Cook Islands": "Pacific Islands",
  "India": "Asia",
  "Sri Lanka": "Asia",
  "Nepal": "Asia",
  "Bhutan": "Asia",
  "Bangladesh": "Asia",
  "Pakistan": "Asia",
  "Maldives": "Asia"
};



// Function to get a random location
const getRandomLocation = () => {
  const countries = Object.keys(locations);
  const country = countries[Math.floor(Math.random() * countries.length)];
  const regionsOrCities = locations[country];

  if (Array.isArray(regionsOrCities)) {
    return { location: regionsOrCities[Math.floor(Math.random() * regionsOrCities.length)], country };
  } else {
    const regions = Object.keys(regionsOrCities);
    const region = regions[Math.floor(Math.random() * regions.length)];
    const cities = regionsOrCities[region];
    return { location: cities[Math.floor(Math.random() * cities.length)], country };
  }
};

// Function to generate random tour packages
const generateTourPackages = (num) => {
  const types = ['Adventure', 'Relaxation', 'Family tour', 'Group Tour', 'Honeymoon', 'Solo', 'Luxury Resort', 'North India', 'East India', 'South India', 'West India'];
  const keywords = ['beach', 'mountain', 'city', 'sea', 'paradise', 'adventure', 'romantic', 'fun'];
  const includedItems = ["Flight, Hotel, Meals", "Hotel, Sightseeing, Meals", "Transportation, Hotel, Tour Guide"];
  const excludedItems = ["Personal expenses", "Visa fees", "Travel insurance"];
  const languages = ["English", "Spanish", "French", "German", "Japanese"];
  const currencies = ["Dollar", "Euro", "Pound", "Rupee", "Yen"];

  const tours = [];
  for (let i = 1; i <= num; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomKeywords = keywords.sort(() => 0.5 - Math.random()).slice(0, 2);
    const locationData = getRandomLocation();
    const randomDays = Math.floor(Math.random() * 10) + 1;
    const randomSize = Math.random() > 0.5 ? 'Unlimited' : Math.floor(Math.random() * 50) + 10;
    const randomIncludes = includedItems[Math.floor(Math.random() * includedItems.length)];
    const randomExcludes = excludedItems[Math.floor(Math.random() * excludedItems.length)];
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];

    const descriptorsList = descriptors[locationData.country] || [];
    const randomDescriptor = descriptorsList[Math.floor(Math.random() * descriptorsList.length)] || 'Amazing';

    const description = `Experience a ${randomDescriptor} adventure in the city of ${locationData.location}, ${locationData.country}. This ${randomType} package offers ${randomDays} days of unforgettable experiences, perfect for those seeking ${randomKeywords.join(' and ')}.`;

    const price = Math.floor(Math.random() * 4501) + 500; // Random price between 500 and 5000

    // Determine destination type (Location or Package)
    const destinationType = Math.random() > 0.5 ? 'Location' : 'Package';

    // Get the continent based on the country
    const continent = continentMapping[locationData.country] || 'Unknown';

    tours.push({
      id: i,
      packagename: `${randomDescriptor} Tour Package ${i}`,
      tourtype: randomType,
      keywords: randomKeywords,
      description: description,
      imageUrl: `assets/images/tour-package-${i}.jpg`,
      location: locationData.location,
      country: locationData.country,
      continent: continent,  // Add continent information here
      duration: randomDays,
      GroupSize: randomSize,
      includes: randomIncludes,
      excludes: randomExcludes,
      Languages: randomLanguage,
      currency: randomCurrency,
      citiesCovered: ["Mexico", "Italy", "Japan"].join(', '),
      additionalImages: [
        `assets/images/additional-image-${i}-1.jpg`,
        `assets/images/additional-image-${i}-2.jpg`,
        `assets/images/additional-image-${i}-3.jpg`
      ],
      itinerary: [
        { day: "Day 1", description: "Arrival and check-in at the hotel." },
        { day: "Day 2", description: "City tour and sightseeing." },
        { day: "Day 3", description: "Leisure day or optional activities." }
      ],
      price: `Starts from ${price} ${randomCurrency}`,
      destinationType: destinationType // New field for destination type
    });
  }

  return tours;
};

const numOfPackages = 200; // Number of tour packages to generate
const tours = generateTourPackages(numOfPackages);

fs.writeFileSync('src/assets/tour-packages.json', JSON.stringify(tours, null, 2));
console.log(`Generated ${numOfPackages} tour packages.`);