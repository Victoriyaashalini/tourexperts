import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DestinationserviceService {
  private tourPackages = [
    {
      "id": 1,
      "name": "Tour Package 1",
      "days": 4,
      "type": "East India",
      "keywords": [
        "beach",
        "fun"
      ],
      "description": "Description for Tour Package 1.",
      "imageUrl": "../../assets/images/majkl-velner-nKY59_d9FlA-unsplash.jpg",
      "location": "Istanbul",
      "country": "Turkey"
    },
    {
      "id": 2,
      "name": "Tour Package 2",
      "days": 7,
      "type": "Adventure",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 2.",
      "imageUrl": "assets/images/tour-package-2.jpg",
      "location": "Kuta",
      "country": "Bali"
    },
    {
      "id": 3,
      "name": "Tour Package 3",
      "days": 8,
      "type": "Wedding",
      "keywords": [
        "fun",
        "paradise"
      ],
      "description": "Description for Tour Package 3.",
      "imageUrl": "assets/images/tour-package-3.jpg",
      "location": "Cluj-Napoca",
      "country": "Romania"
    },
    {
      "id": 4,
      "name": "Tour Package 4",
      "days": 3,
      "type": "Asia",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 4.",
      "imageUrl": "assets/images/tour-package-4.jpg",
      "location": "Casablanca",
      "country": "Morocco"
    },
    {
      "id": 5,
      "name": "Tour Package 5",
      "days": 2,
      "type": "International",
      "keywords": [
        "mountain",
        "romantic"
      ],
      "description": "Description for Tour Package 5.",
      "imageUrl": "assets/images/tour-package-5.jpg",
      "location": "Dubrovnik",
      "country": "Croatia"
    },
    {
      "id": 6,
      "name": "Tour Package 6",
      "days": 7,
      "type": "Adventure",
      "keywords": [
        "city",
        "paradise"
      ],
      "description": "Description for Tour Package 6.",
      "imageUrl": "assets/images/tour-package-6.jpg",
      "location": "Nazareth",
      "country": "Israel"
    },
    {
      "id": 7,
      "name": "Tour Package 7",
      "days": 10,
      "type": "Group Tour",
      "keywords": [
        "sea",
        "beach"
      ],
      "description": "Description for Tour Package 7.",
      "imageUrl": "assets/images/tour-package-7.jpg",
      "location": "Rabat",
      "country": "Morocco"
    },
    {
      "id": 8,
      "name": "Tour Package 8",
      "days": 6,
      "type": "International",
      "keywords": [
        "adventure",
        "beach"
      ],
      "description": "Description for Tour Package 8.",
      "imageUrl": "assets/images/tour-package-8.jpg",
      "location": "Florence",
      "country": "Italy"
    },
    {
      "id": 9,
      "name": "Tour Package 9",
      "days": 5,
      "type": "East India",
      "keywords": [
        "mountain",
        "paradise"
      ],
      "description": "Description for Tour Package 9.",
      "imageUrl": "assets/images/tour-package-9.jpg",
      "location": "Dubai Marina",
      "country": "Dubai"
    },
    {
      "id": 10,
      "name": "Tour Package 10",
      "days": 10,
      "type": "South India",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 10.",
      "imageUrl": "assets/images/tour-package-10.jpg",
      "location": "Santorini",
      "country": "Greece"
    },
    {
      "id": 11,
      "name": "Tour Package 11",
      "days": 5,
      "type": "Adventure",
      "keywords": [
        "paradise",
        "adventure"
      ],
      "description": "Description for Tour Package 11.",
      "imageUrl": "assets/images/tour-package-11.jpg",
      "location": "Brasília",
      "country": "Brazil"
    },
    {
      "id": 12,
      "name": "Tour Package 12",
      "days": 7,
      "type": "Solo",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 12.",
      "imageUrl": "assets/images/tour-package-12.jpg",
      "location": "Debrecen",
      "country": "Hungary"
    },
    {
      "id": 13,
      "name": "Tour Package 13",
      "days": 6,
      "type": "India",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 13.",
      "imageUrl": "assets/images/tour-package-13.jpg",
      "location": "Frankfurt",
      "country": "Germany"
    },
    {
      "id": 14,
      "name": "Tour Package 14",
      "days": 6,
      "type": "Solo",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 14.",
      "imageUrl": "assets/images/tour-package-14.jpg",
      "location": "Malé",
      "country": "Maldives"
    },
    {
      "id": 15,
      "name": "Tour Package 15",
      "days": 4,
      "type": "Wedding",
      "keywords": [
        "beach",
        "city"
      ],
      "description": "Description for Tour Package 15.",
      "imageUrl": "assets/images/tour-package-15.jpg",
      "location": "Tokyo",
      "country": "Asia"
    },
    {
      "id": 16,
      "name": "Tour Package 16",
      "days": 6,
      "type": "Honeymoon",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 16.",
      "imageUrl": "assets/images/tour-package-16.jpg",
      "location": "Braga",
      "country": "Portugal"
    },
    {
      "id": 17,
      "name": "Tour Package 17",
      "days": 3,
      "type": "Wedding",
      "keywords": [
        "adventure",
        "romantic"
      ],
      "description": "Description for Tour Package 17.",
      "imageUrl": "assets/images/tour-package-17.jpg",
      "location": "Aswan",
      "country": "Egypt"
    },
    {
      "id": 18,
      "name": "Tour Package 18",
      "days": 9,
      "type": "International",
      "keywords": [
        "adventure",
        "romantic"
      ],
      "description": "Description for Tour Package 18.",
      "imageUrl": "assets/images/tour-package-18.jpg",
      "location": "Lucerne",
      "country": "Switzerland"
    },
    {
      "id": 19,
      "name": "Tour Package 19",
      "days": 7,
      "type": "Friends trip",
      "keywords": [
        "romantic",
        "paradise"
      ],
      "description": "Description for Tour Package 19.",
      "imageUrl": "assets/images/tour-package-19.jpg",
      "location": "Houston",
      "country": "USA"
    },
    {
      "id": 20,
      "name": "Tour Package 20",
      "days": 6,
      "type": "India",
      "keywords": [
        "beach",
        "adventure"
      ],
      "description": "Description for Tour Package 20.",
      "imageUrl": "assets/images/tour-package-20.jpg",
      "location": "Burgas",
      "country": "Bulgaria"
    },
    {
      "id": 21,
      "name": "Tour Package 21",
      "days": 1,
      "type": "Asia",
      "keywords": [
        "paradise",
        "city"
      ],
      "description": "Description for Tour Package 21.",
      "imageUrl": "assets/images/tour-package-21.jpg",
      "location": "Olomouc",
      "country": "Czech Republic"
    },
    {
      "id": 22,
      "name": "Tour Package 22",
      "days": 8,
      "type": "Friends trip",
      "keywords": [
        "paradise",
        "city"
      ],
      "description": "Description for Tour Package 22.",
      "imageUrl": "assets/images/tour-package-22.jpg",
      "location": "Santiago",
      "country": "Chile"
    },
    {
      "id": 23,
      "name": "Tour Package 23",
      "days": 8,
      "type": "Asia",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 23.",
      "imageUrl": "assets/images/tour-package-23.jpg",
      "location": "Osaka",
      "country": "Japan"
    },
    {
      "id": 24,
      "name": "Tour Package 24",
      "days": 10,
      "type": "Friends trip",
      "keywords": [
        "sea",
        "city"
      ],
      "description": "Description for Tour Package 24.",
      "imageUrl": "assets/images/tour-package-24.jpg",
      "location": "Abu Dhabi",
      "country": "UAE"
    },
    {
      "id": 25,
      "name": "Tour Package 25",
      "days": 9,
      "type": "India",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 25.",
      "imageUrl": "assets/images/tour-package-25.jpg",
      "location": "Nuwara Eliya",
      "country": "Sri Lanka"
    },
    {
      "id": 26,
      "name": "Tour Package 26",
      "days": 8,
      "type": "West India",
      "keywords": [
        "fun",
        "paradise"
      ],
      "description": "Description for Tour Package 26.",
      "imageUrl": "assets/images/tour-package-26.jpg",
      "location": "Lausanne",
      "country": "Switzerland"
    },
    {
      "id": 27,
      "name": "Tour Package 27",
      "days": 10,
      "type": "West India",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 27.",
      "imageUrl": "assets/images/tour-package-27.jpg",
      "location": "Punta Arenas",
      "country": "Chile"
    },
    {
      "id": 28,
      "name": "Tour Package 28",
      "days": 9,
      "type": "Luxury Resort",
      "keywords": [
        "adventure",
        "paradise"
      ],
      "description": "Description for Tour Package 28.",
      "imageUrl": "assets/images/tour-package-28.jpg",
      "location": "Durban",
      "country": "South Africa"
    },
    {
      "id": 29,
      "name": "Tour Package 29",
      "days": 10,
      "type": "Friends trip",
      "keywords": [
        "beach",
        "adventure"
      ],
      "description": "Description for Tour Package 29.",
      "imageUrl": "assets/images/tour-package-29.jpg",
      "location": "Buenos Aires",
      "country": "Argentina"
    },
    {
      "id": 30,
      "name": "Tour Package 30",
      "days": 1,
      "type": "Adventure",
      "keywords": [
        "beach",
        "mountain"
      ],
      "description": "Description for Tour Package 30.",
      "imageUrl": "assets/images/tour-package-30.jpg",
      "location": "Qaqortoq",
      "country": "Greenland"
    },
    {
      "id": 31,
      "name": "Tour Package 31",
      "days": 6,
      "type": "Friends trip",
      "keywords": [
        "beach",
        "city"
      ],
      "description": "Description for Tour Package 31.",
      "imageUrl": "assets/images/tour-package-31.jpg",
      "location": "Leuven",
      "country": "Belgium"
    },
    {
      "id": 32,
      "name": "Tour Package 32",
      "days": 6,
      "type": "Group Tour",
      "keywords": [
        "mountain",
        "city"
      ],
      "description": "Description for Tour Package 32.",
      "imageUrl": "assets/images/tour-package-32.jpg",
      "location": "Almaty",
      "country": "Kazakhstan"
    },
    {
      "id": 33,
      "name": "Tour Package 33",
      "days": 1,
      "type": "Luxury Resort",
      "keywords": [
        "fun",
        "sea"
      ],
      "description": "Description for Tour Package 33.",
      "imageUrl": "assets/images/tour-package-33.jpg",
      "location": "Hanoi",
      "country": "Vietnam"
    },
    {
      "id": 34,
      "name": "Tour Package 34",
      "days": 1,
      "type": "Solo",
      "keywords": [
        "fun",
        "adventure"
      ],
      "description": "Description for Tour Package 34.",
      "imageUrl": "assets/images/tour-package-34.jpg",
      "location": "Galway",
      "country": "Ireland"
    },
    {
      "id": 35,
      "name": "Tour Package 35",
      "days": 1,
      "type": "North India",
      "keywords": [
        "romantic",
        "adventure"
      ],
      "description": "Description for Tour Package 35.",
      "imageUrl": "assets/images/tour-package-35.jpg",
      "location": "Haifa",
      "country": "Israel"
    },
    {
      "id": 36,
      "name": "Tour Package 36",
      "days": 4,
      "type": "North India",
      "keywords": [
        "romantic",
        "adventure"
      ],
      "description": "Description for Tour Package 36.",
      "imageUrl": "assets/images/tour-package-36.jpg",
      "location": "Oslo",
      "country": "Norway"
    },
    {
      "id": 37,
      "name": "Tour Package 37",
      "days": 4,
      "type": "North India",
      "keywords": [
        "sea",
        "romantic"
      ],
      "description": "Description for Tour Package 37.",
      "imageUrl": "assets/images/tour-package-37.jpg",
      "location": "Jerash",
      "country": "Jordan"
    },
    {
      "id": 38,
      "name": "Tour Package 38",
      "days": 2,
      "type": "India",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 38.",
      "imageUrl": "assets/images/tour-package-38.jpg",
      "location": "Tainan",
      "country": "Taiwan"
    },
    {
      "id": 39,
      "name": "Tour Package 39",
      "days": 5,
      "type": "Wedding",
      "keywords": [
        "sea",
        "fun"
      ],
      "description": "Description for Tour Package 39.",
      "imageUrl": "assets/images/tour-package-39.jpg",
      "location": "Innsbruck",
      "country": "Austria"
    },
    {
      "id": 40,
      "name": "Tour Package 40",
      "days": 4,
      "type": "North India",
      "keywords": [
        "fun",
        "romantic"
      ],
      "description": "Description for Tour Package 40.",
      "imageUrl": "assets/images/tour-package-40.jpg",
      "location": "Chiang Mai",
      "country": "Thailand"
    },
    {
      "id": 41,
      "name": "Tour Package 41",
      "days": 9,
      "type": "International",
      "keywords": [
        "city",
        "fun"
      ],
      "description": "Description for Tour Package 41.",
      "imageUrl": "assets/images/tour-package-41.jpg",
      "location": "Stavanger",
      "country": "Norway"
    },
    {
      "id": 42,
      "name": "Tour Package 42",
      "days": 5,
      "type": "Solo",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 42.",
      "imageUrl": "assets/images/tour-package-42.jpg",
      "location": "Waterford",
      "country": "Ireland"
    },
    {
      "id": 43,
      "name": "Tour Package 43",
      "days": 1,
      "type": "North India",
      "keywords": [
        "fun",
        "sea"
      ],
      "description": "Description for Tour Package 43.",
      "imageUrl": "assets/images/tour-package-43.jpg",
      "location": "Little India",
      "country": "Singapore"
    },
    {
      "id": 44,
      "name": "Tour Package 44",
      "days": 10,
      "type": "West India",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 44.",
      "imageUrl": "assets/images/tour-package-44.jpg",
      "location": "Bilbao",
      "country": "Spain"
    },
    {
      "id": 45,
      "name": "Tour Package 45",
      "days": 4,
      "type": "Friends trip",
      "keywords": [
        "fun",
        "adventure"
      ],
      "description": "Description for Tour Package 45.",
      "imageUrl": "assets/images/tour-package-45.jpg",
      "location": "Mutare",
      "country": "Zimbabwe"
    },
    {
      "id": 46,
      "name": "Tour Package 46",
      "days": 1,
      "type": "International",
      "keywords": [
        "paradise",
        "city"
      ],
      "description": "Description for Tour Package 46.",
      "imageUrl": "assets/images/tour-package-46.jpg",
      "location": "Amsterdam",
      "country": "Netherlands"
    },
    {
      "id": 47,
      "name": "Tour Package 47",
      "days": 9,
      "type": "North India",
      "keywords": [
        "sea",
        "adventure"
      ],
      "description": "Description for Tour Package 47.",
      "imageUrl": "assets/images/tour-package-47.jpg",
      "location": "Queenstown",
      "country": "New Zealand"
    },
    {
      "id": 48,
      "name": "Tour Package 48",
      "days": 5,
      "type": "North India",
      "keywords": [
        "mountain",
        "beach"
      ],
      "description": "Description for Tour Package 48.",
      "imageUrl": "assets/images/tour-package-48.jpg",
      "location": "Lausanne",
      "country": "Switzerland"
    },
    {
      "id": 49,
      "name": "Tour Package 49",
      "days": 7,
      "type": "Luxury Resort",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 49.",
      "imageUrl": "assets/images/tour-package-49.jpg",
      "location": "Malmö",
      "country": "Sweden"
    },
    {
      "id": 50,
      "name": "Tour Package 50",
      "days": 2,
      "type": "Family tour",
      "keywords": [
        "adventure",
        "romantic"
      ],
      "description": "Description for Tour Package 50.",
      "imageUrl": "assets/images/tour-package-50.jpg",
      "location": "Dubai",
      "country": "Middle East"
    },
    {
      "id": 51,
      "name": "Tour Package 51",
      "days": 8,
      "type": "Adventure",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 51.",
      "imageUrl": "assets/images/tour-package-51.jpg",
      "location": "Graz",
      "country": "Austria"
    },
    {
      "id": 52,
      "name": "Tour Package 52",
      "days": 6,
      "type": "Friends trip",
      "keywords": [
        "sea",
        "city"
      ],
      "description": "Description for Tour Package 52.",
      "imageUrl": "assets/images/tour-package-52.jpg",
      "location": "Denpasar",
      "country": "Bali"
    },
    {
      "id": 53,
      "name": "Tour Package 53",
      "days": 4,
      "type": "Adventure",
      "keywords": [
        "sea",
        "city"
      ],
      "description": "Description for Tour Package 53.",
      "imageUrl": "assets/images/tour-package-53.jpg",
      "location": "Houston",
      "country": "USA"
    },
    {
      "id": 54,
      "name": "Tour Package 54",
      "days": 5,
      "type": "Group Tour",
      "keywords": [
        "fun",
        "city"
      ],
      "description": "Description for Tour Package 54.",
      "imageUrl": "assets/images/tour-package-54.jpg",
      "location": "Santiago",
      "country": "Chile"
    },
    {
      "id": 55,
      "name": "Tour Package 55",
      "days": 1,
      "type": "Friends trip",
      "keywords": [
        "sea",
        "fun"
      ],
      "description": "Description for Tour Package 55.",
      "imageUrl": "assets/images/tour-package-55.jpg",
      "location": "Bukhara",
      "country": "Uzbekistan"
    },
    {
      "id": 56,
      "name": "Tour Package 56",
      "days": 1,
      "type": "Adventure",
      "keywords": [
        "sea",
        "romantic"
      ],
      "description": "Description for Tour Package 56.",
      "imageUrl": "assets/images/tour-package-56.jpg",
      "location": "Singapore",
      "country": "Asia"
    },
    {
      "id": 57,
      "name": "Tour Package 57",
      "days": 3,
      "type": "North India",
      "keywords": [
        "mountain",
        "beach"
      ],
      "description": "Description for Tour Package 57.",
      "imageUrl": "assets/images/tour-package-57.jpg",
      "location": "Antalya",
      "country": "Turkey"
    },
    {
      "id": 58,
      "name": "Tour Package 58",
      "days": 8,
      "type": "Solo",
      "keywords": [
        "mountain",
        "beach"
      ],
      "description": "Description for Tour Package 58.",
      "imageUrl": "assets/images/tour-package-58.jpg",
      "location": "Seville",
      "country": "Spain"
    },
    {
      "id": 59,
      "name": "Tour Package 59",
      "days": 8,
      "type": "Solo",
      "keywords": [
        "adventure",
        "paradise"
      ],
      "description": "Description for Tour Package 59.",
      "imageUrl": "assets/images/tour-package-59.jpg",
      "location": "Graz",
      "country": "Austria"
    },
    {
      "id": 60,
      "name": "Tour Package 60",
      "days": 3,
      "type": "Asia",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 60.",
      "imageUrl": "assets/images/tour-package-60.jpg",
      "location": "Auckland",
      "country": "New Zealand"
    },
    {
      "id": 61,
      "name": "Tour Package 61",
      "days": 4,
      "type": "North India",
      "keywords": [
        "sea",
        "adventure"
      ],
      "description": "Description for Tour Package 61.",
      "imageUrl": "assets/images/tour-package-61.jpg",
      "location": "Malindi",
      "country": "Kenya"
    },
    {
      "id": 62,
      "name": "Tour Package 62",
      "days": 2,
      "type": "Adventure",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 62.",
      "imageUrl": "assets/images/tour-package-62.jpg",
      "location": "Salzburg",
      "country": "Austria"
    },
    {
      "id": 63,
      "name": "Tour Package 63",
      "days": 3,
      "type": "East India",
      "keywords": [
        "paradise",
        "beach"
      ],
      "description": "Description for Tour Package 63.",
      "imageUrl": "assets/images/tour-package-63.jpg",
      "location": "Brno",
      "country": "Czech Republic"
    },
    {
      "id": 64,
      "name": "Tour Package 64",
      "days": 3,
      "type": "International",
      "keywords": [
        "paradise",
        "beach"
      ],
      "description": "Description for Tour Package 64.",
      "imageUrl": "assets/images/tour-package-64.jpg",
      "location": "Belize City",
      "country": "Central America"
    },
    {
      "id": 65,
      "name": "Tour Package 65",
      "days": 4,
      "type": "Asia",
      "keywords": [
        "beach",
        "city"
      ],
      "description": "Description for Tour Package 65.",
      "imageUrl": "assets/images/tour-package-65.jpg",
      "location": "Mutare",
      "country": "Zimbabwe"
    },
    {
      "id": 66,
      "name": "Tour Package 66",
      "days": 8,
      "type": "Wedding",
      "keywords": [
        "adventure",
        "romantic"
      ],
      "description": "Description for Tour Package 66.",
      "imageUrl": "assets/images/tour-package-66.jpg",
      "location": "Aarhus",
      "country": "Denmark"
    },
    {
      "id": 67,
      "name": "Tour Package 67",
      "days": 1,
      "type": "Group Tour",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 67.",
      "imageUrl": "assets/images/tour-package-67.jpg",
      "location": "Guangzhou",
      "country": "China"
    },
    {
      "id": 68,
      "name": "Tour Package 68",
      "days": 4,
      "type": "Family tour",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 68.",
      "imageUrl": "assets/images/tour-package-68.jpg",
      "location": "Lautoka",
      "country": "Fiji"
    },
    {
      "id": 69,
      "name": "Tour Package 69",
      "days": 2,
      "type": "West India",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 69.",
      "imageUrl": "assets/images/tour-package-69.jpg",
      "location": "Vik",
      "country": "Iceland"
    },
    {
      "id": 70,
      "name": "Tour Package 70",
      "days": 8,
      "type": "Group Tour",
      "keywords": [
        "sea",
        "city"
      ],
      "description": "Description for Tour Package 70.",
      "imageUrl": "assets/images/tour-package-70.jpg",
      "location": "Abu Dhabi",
      "country": "UAE"
    },
    {
      "id": 71,
      "name": "Tour Package 71",
      "days": 5,
      "type": "Friends trip",
      "keywords": [
        "city",
        "paradise"
      ],
      "description": "Description for Tour Package 71.",
      "imageUrl": "assets/images/tour-package-71.jpg",
      "location": "Tromsø",
      "country": "Norway"
    },
    {
      "id": 72,
      "name": "Tour Package 72",
      "days": 1,
      "type": "Honeymoon",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 72.",
      "imageUrl": "assets/images/tour-package-72.jpg",
      "location": "Manama",
      "country": "Middle East"
    },
    {
      "id": 73,
      "name": "Tour Package 73",
      "days": 9,
      "type": "Wedding",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 73.",
      "imageUrl": "assets/images/tour-package-73.jpg",
      "location": "Akureyri",
      "country": "Iceland"
    },
    {
      "id": 74,
      "name": "Tour Package 74",
      "days": 3,
      "type": "South India",
      "keywords": [
        "city",
        "fun"
      ],
      "description": "Description for Tour Package 74.",
      "imageUrl": "assets/images/tour-package-74.jpg",
      "location": "Phnom Penh",
      "country": "Cambodia"
    },
    {
      "id": 75,
      "name": "Tour Package 75",
      "days": 3,
      "type": "Family tour",
      "keywords": [
        "paradise",
        "fun"
      ],
      "description": "Description for Tour Package 75.",
      "imageUrl": "assets/images/tour-package-75.jpg",
      "location": "Umm Salal",
      "country": "Qatar"
    },
    {
      "id": 76,
      "name": "Tour Package 76",
      "days": 2,
      "type": "Luxury Resort",
      "keywords": [
        "beach",
        "city"
      ],
      "description": "Description for Tour Package 76.",
      "imageUrl": "assets/images/tour-package-76.jpg",
      "location": "Hualien",
      "country": "Taiwan"
    },
    {
      "id": 77,
      "name": "Tour Package 77",
      "days": 9,
      "type": "Family tour",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 77.",
      "imageUrl": "assets/images/tour-package-77.jpg",
      "location": "Savusavu",
      "country": "Fiji"
    },
    {
      "id": 78,
      "name": "Tour Package 78",
      "days": 3,
      "type": "Group Tour",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 78.",
      "imageUrl": "assets/images/tour-package-78.jpg",
      "location": "Flic-en-Flac",
      "country": "Mauritius"
    },
    {
      "id": 79,
      "name": "Tour Package 79",
      "days": 7,
      "type": "Asia",
      "keywords": [
        "mountain",
        "romantic"
      ],
      "description": "Description for Tour Package 79.",
      "imageUrl": "assets/images/tour-package-79.jpg",
      "location": "Deira",
      "country": "Dubai"
    },
    {
      "id": 80,
      "name": "Tour Package 80",
      "days": 9,
      "type": "Solo",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 80.",
      "imageUrl": "assets/images/tour-package-80.jpg",
      "location": "Istanbul",
      "country": "Turkey"
    },
    {
      "id": 81,
      "name": "Tour Package 81",
      "days": 4,
      "type": "Family tour",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 81.",
      "imageUrl": "assets/images/tour-package-81.jpg",
      "location": "Chiang Mai",
      "country": "Thailand"
    },
    {
      "id": 82,
      "name": "Tour Package 82",
      "days": 9,
      "type": "Friends trip",
      "keywords": [
        "mountain",
        "city"
      ],
      "description": "Description for Tour Package 82.",
      "imageUrl": "assets/images/tour-package-82.jpg",
      "location": "Abu Dhabi",
      "country": "Middle East"
    },
    {
      "id": 83,
      "name": "Tour Package 83",
      "days": 10,
      "type": "Wedding",
      "keywords": [
        "fun",
        "mountain"
      ],
      "description": "Description for Tour Package 83.",
      "imageUrl": "assets/images/tour-package-83.jpg",
      "location": "Perth",
      "country": "Australia"
    },
    {
      "id": 84,
      "name": "Tour Package 84",
      "days": 4,
      "type": "North India",
      "keywords": [
        "adventure",
        "paradise"
      ],
      "description": "Description for Tour Package 84.",
      "imageUrl": "assets/images/tour-package-84.jpg",
      "location": "Brussels",
      "country": "Belgium"
    },
    {
      "id": 85,
      "name": "Tour Package 85",
      "days": 1,
      "type": "Wedding",
      "keywords": [
        "romantic",
        "adventure"
      ],
      "description": "Description for Tour Package 85.",
      "imageUrl": "assets/images/tour-package-85.jpg",
      "location": "Calgary",
      "country": "Canada"
    },
    {
      "id": 86,
      "name": "Tour Package 86",
      "days": 10,
      "type": "Adventure",
      "keywords": [
        "romantic",
        "beach"
      ],
      "description": "Description for Tour Package 86.",
      "imageUrl": "assets/images/tour-package-86.jpg",
      "location": "San José",
      "country": "Central America"
    },
    {
      "id": 87,
      "name": "Tour Package 87",
      "days": 10,
      "type": "Friends trip",
      "keywords": [
        "city",
        "sea"
      ],
      "description": "Description for Tour Package 87.",
      "imageUrl": "assets/images/tour-package-87.jpg",
      "location": "Hong Kong Island",
      "country": "Hong Kong"
    },
    {
      "id": 88,
      "name": "Tour Package 88",
      "days": 8,
      "type": "Asia",
      "keywords": [
        "city",
        "sea"
      ],
      "description": "Description for Tour Package 88.",
      "imageUrl": "assets/images/tour-package-88.jpg",
      "location": "Aqaba",
      "country": "Jordan"
    },
    {
      "id": 89,
      "name": "Tour Package 89",
      "days": 9,
      "type": "West India",
      "keywords": [
        "paradise",
        "sea"
      ],
      "description": "Description for Tour Package 89.",
      "imageUrl": "assets/images/tour-package-89.jpg",
      "location": "Johannesburg",
      "country": "South Africa"
    },
    {
      "id": 90,
      "name": "Tour Package 90",
      "days": 9,
      "type": "International",
      "keywords": [
        "mountain",
        "city"
      ],
      "description": "Description for Tour Package 90.",
      "imageUrl": "assets/images/tour-package-90.jpg",
      "location": "Rome",
      "country": "Italy"
    },
    {
      "id": 91,
      "name": "Tour Package 91",
      "days": 10,
      "type": "Wedding",
      "keywords": [
        "city",
        "fun"
      ],
      "description": "Description for Tour Package 91.",
      "imageUrl": "assets/images/tour-package-91.jpg",
      "location": "Hue",
      "country": "Vietnam"
    },
    {
      "id": 92,
      "name": "Tour Package 92",
      "days": 1,
      "type": "Adventure",
      "keywords": [
        "fun",
        "paradise"
      ],
      "description": "Description for Tour Package 92.",
      "imageUrl": "assets/images/tour-package-92.jpg",
      "location": "Bratislava",
      "country": "Slovakia"
    },
    {
      "id": 93,
      "name": "Tour Package 93",
      "days": 6,
      "type": "Asia",
      "keywords": [
        "mountain",
        "romantic"
      ],
      "description": "Description for Tour Package 93.",
      "imageUrl": "assets/images/tour-package-93.jpg",
      "location": "Kowloon",
      "country": "Hong Kong"
    },
    {
      "id": 94,
      "name": "Tour Package 94",
      "days": 2,
      "type": "Adventure",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 94.",
      "imageUrl": "assets/images/tour-package-94.jpg",
      "location": "Rio de Janeiro",
      "country": "South America"
    },
    {
      "id": 95,
      "name": "Tour Package 95",
      "days": 9,
      "type": "Friends trip",
      "keywords": [
        "paradise",
        "city"
      ],
      "description": "Description for Tour Package 95.",
      "imageUrl": "assets/images/tour-package-95.jpg",
      "location": "Nuwara Eliya",
      "country": "Sri Lanka"
    },
    {
      "id": 96,
      "name": "Tour Package 96",
      "days": 1,
      "type": "North India",
      "keywords": [
        "adventure",
        "paradise"
      ],
      "description": "Description for Tour Package 96.",
      "imageUrl": "assets/images/tour-package-96.jpg",
      "location": "Bilbao",
      "country": "Spain"
    },
    {
      "id": 97,
      "name": "Tour Package 97",
      "days": 1,
      "type": "North India",
      "keywords": [
        "fun",
        "adventure"
      ],
      "description": "Description for Tour Package 97.",
      "imageUrl": "assets/images/tour-package-97.jpg",
      "location": "Bur Dubai",
      "country": "Dubai"
    },
    {
      "id": 98,
      "name": "Tour Package 98",
      "days": 10,
      "type": "Family tour",
      "keywords": [
        "city",
        "fun"
      ],
      "description": "Description for Tour Package 98.",
      "imageUrl": "assets/images/tour-package-98.jpg",
      "location": "Antalya",
      "country": "Turkey"
    },
    {
      "id": 99,
      "name": "Tour Package 99",
      "days": 1,
      "type": "Honeymoon",
      "keywords": [
        "paradise",
        "mountain"
      ],
      "description": "Description for Tour Package 99.",
      "imageUrl": "assets/images/tour-package-99.jpg",
      "location": "Penang",
      "country": "Malaysia"
    },
    {
      "id": 100,
      "name": "Tour Package 100",
      "days": 5,
      "type": "International",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 100.",
      "imageUrl": "assets/images/tour-package-100.jpg",
      "location": "Marseille",
      "country": "France"
    },
    {
      "id": 101,
      "name": "Tour Package 101",
      "days": 6,
      "type": "Family tour",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 101.",
      "imageUrl": "assets/images/tour-package-101.jpg",
      "location": "Bukhara",
      "country": "Uzbekistan"
    },
    {
      "id": 102,
      "name": "Tour Package 102",
      "days": 8,
      "type": "Family tour",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 102.",
      "imageUrl": "assets/images/tour-package-102.jpg",
      "location": "Incheon",
      "country": "Korea"
    },
    {
      "id": 103,
      "name": "Tour Package 103",
      "days": 3,
      "type": "West India",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 103.",
      "imageUrl": "assets/images/tour-package-103.jpg",
      "location": "Almaty",
      "country": "Kazakhstan"
    },
    {
      "id": 104,
      "name": "Tour Package 104",
      "days": 2,
      "type": "West India",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 104.",
      "imageUrl": "assets/images/tour-package-104.jpg",
      "location": "Valencia",
      "country": "Spain"
    },
    {
      "id": 105,
      "name": "Tour Package 105",
      "days": 6,
      "type": "Solo",
      "keywords": [
        "fun",
        "sea"
      ],
      "description": "Description for Tour Package 105.",
      "imageUrl": "assets/images/tour-package-105.jpg",
      "location": "Iquitos",
      "country": "Peru"
    },
    {
      "id": 106,
      "name": "Tour Package 106",
      "days": 1,
      "type": "West India",
      "keywords": [
        "fun",
        "mountain"
      ],
      "description": "Description for Tour Package 106.",
      "imageUrl": "assets/images/tour-package-106.jpg",
      "location": "Timișoara",
      "country": "Romania"
    },
    {
      "id": 107,
      "name": "Tour Package 107",
      "days": 7,
      "type": "Adventure",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 107.",
      "imageUrl": "assets/images/tour-package-107.jpg",
      "location": "Gothenburg",
      "country": "Sweden"
    },
    {
      "id": 108,
      "name": "Tour Package 108",
      "days": 2,
      "type": "Group Tour",
      "keywords": [
        "romantic",
        "fun"
      ],
      "description": "Description for Tour Package 108.",
      "imageUrl": "assets/images/tour-package-108.jpg",
      "location": "Ubud",
      "country": "Bali"
    },
    {
      "id": 109,
      "name": "Tour Package 109",
      "days": 6,
      "type": "International",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 109.",
      "imageUrl": "assets/images/tour-package-109.jpg",
      "location": "Medellín",
      "country": "Colombia"
    },
    {
      "id": 110,
      "name": "Tour Package 110",
      "days": 2,
      "type": "South India",
      "keywords": [
        "fun",
        "paradise"
      ],
      "description": "Description for Tour Package 110.",
      "imageUrl": "assets/images/tour-package-110.jpg",
      "location": "Chefchaouen",
      "country": "Morocco"
    },
    {
      "id": 111,
      "name": "Tour Package 111",
      "days": 9,
      "type": "Solo",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 111.",
      "imageUrl": "assets/images/tour-package-111.jpg",
      "location": "Boracay",
      "country": "Philippines"
    },
    {
      "id": 112,
      "name": "Tour Package 112",
      "days": 6,
      "type": "North India",
      "keywords": [
        "fun",
        "city"
      ],
      "description": "Description for Tour Package 112.",
      "imageUrl": "assets/images/tour-package-112.jpg",
      "location": "The Hague",
      "country": "Netherlands"
    },
    {
      "id": 113,
      "name": "Tour Package 113",
      "days": 4,
      "type": "Asia",
      "keywords": [
        "mountain",
        "sea"
      ],
      "description": "Description for Tour Package 113.",
      "imageUrl": "assets/images/tour-package-113.jpg",
      "location": "Marrakech",
      "country": "Morocco"
    },
    {
      "id": 114,
      "name": "Tour Package 114",
      "days": 9,
      "type": "Adventure",
      "keywords": [
        "mountain",
        "adventure"
      ],
      "description": "Description for Tour Package 114.",
      "imageUrl": "assets/images/tour-package-114.jpg",
      "location": "Thessaloniki",
      "country": "Greece"
    },
    {
      "id": 115,
      "name": "Tour Package 115",
      "days": 8,
      "type": "Asia",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 115.",
      "imageUrl": "assets/images/tour-package-115.jpg",
      "location": "Gyeongju",
      "country": "Korea"
    },
    {
      "id": 116,
      "name": "Tour Package 116",
      "days": 3,
      "type": "Friends trip",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 116.",
      "imageUrl": "assets/images/tour-package-116.jpg",
      "location": "Ushuaia",
      "country": "Argentina"
    },
    {
      "id": 117,
      "name": "Tour Package 117",
      "days": 1,
      "type": "Group Tour",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 117.",
      "imageUrl": "assets/images/tour-package-117.jpg",
      "location": "Mykonos",
      "country": "Greece"
    },
    {
      "id": 118,
      "name": "Tour Package 118",
      "days": 5,
      "type": "Adventure",
      "keywords": [
        "city",
        "adventure"
      ],
      "description": "Description for Tour Package 118.",
      "imageUrl": "assets/images/tour-package-118.jpg",
      "location": "Mendoza",
      "country": "Argentina"
    },
    {
      "id": 119,
      "name": "Tour Package 119",
      "days": 2,
      "type": "Adventure",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 119.",
      "imageUrl": "assets/images/tour-package-119.jpg",
      "location": "Manama",
      "country": "Middle East"
    },
    {
      "id": 120,
      "name": "Tour Package 120",
      "days": 7,
      "type": "India",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 120.",
      "imageUrl": "assets/images/tour-package-120.jpg",
      "location": "Innsbruck",
      "country": "Austria"
    },
    {
      "id": 121,
      "name": "Tour Package 121",
      "days": 2,
      "type": "Family tour",
      "keywords": [
        "paradise",
        "adventure"
      ],
      "description": "Description for Tour Package 121.",
      "imageUrl": "assets/images/tour-package-121.jpg",
      "location": "Hamburg",
      "country": "Germany"
    },
    {
      "id": 122,
      "name": "Tour Package 122",
      "days": 2,
      "type": "Friends trip",
      "keywords": [
        "romantic",
        "sea"
      ],
      "description": "Description for Tour Package 122.",
      "imageUrl": "assets/images/tour-package-122.jpg",
      "location": "Mombasa",
      "country": "Kenya"
    },
    {
      "id": 123,
      "name": "Tour Package 123",
      "days": 1,
      "type": "Luxury Resort",
      "keywords": [
        "adventure",
        "city"
      ],
      "description": "Description for Tour Package 123.",
      "imageUrl": "assets/images/tour-package-123.jpg",
      "location": "Abu Dhabi",
      "country": "Middle East"
    },
    {
      "id": 124,
      "name": "Tour Package 124",
      "days": 8,
      "type": "Solo",
      "keywords": [
        "fun",
        "beach"
      ],
      "description": "Description for Tour Package 124.",
      "imageUrl": "assets/images/tour-package-124.jpg",
      "location": "Egilsstaðir",
      "country": "Iceland"
    },
    {
      "id": 125,
      "name": "Tour Package 125",
      "days": 6,
      "type": "Family tour",
      "keywords": [
        "fun",
        "city"
      ],
      "description": "Description for Tour Package 125.",
      "imageUrl": "assets/images/tour-package-125.jpg",
      "location": "Denpasar",
      "country": "Bali"
    },
    {
      "id": 126,
      "name": "Tour Package 126",
      "days": 6,
      "type": "North India",
      "keywords": [
        "mountain",
        "sea"
      ],
      "description": "Description for Tour Package 126.",
      "imageUrl": "assets/images/tour-package-126.jpg",
      "location": "Adaaran Prestige Water Villas",
      "country": "Maldives"
    },
    {
      "id": 127,
      "name": "Tour Package 127",
      "days": 6,
      "type": "South India",
      "keywords": [
        "mountain",
        "city"
      ],
      "description": "Description for Tour Package 127.",
      "imageUrl": "assets/images/tour-package-127.jpg",
      "location": "Belize City",
      "country": "Central America"
    },
    {
      "id": 128,
      "name": "Tour Package 128",
      "days": 7,
      "type": "Adventure",
      "keywords": [
        "paradise",
        "adventure"
      ],
      "description": "Description for Tour Package 128.",
      "imageUrl": "assets/images/tour-package-128.jpg",
      "location": "Galway",
      "country": "Ireland"
    },
    {
      "id": 129,
      "name": "Tour Package 129",
      "days": 10,
      "type": "India",
      "keywords": [
        "sea",
        "paradise"
      ],
      "description": "Description for Tour Package 129.",
      "imageUrl": "assets/images/tour-package-129.jpg",
      "location": "Abu Dhabi",
      "country": "UAE"
    },
    {
      "id": 130,
      "name": "Tour Package 130",
      "days": 9,
      "type": "Adventure",
      "keywords": [
        "romantic",
        "beach"
      ],
      "description": "Description for Tour Package 130.",
      "imageUrl": "assets/images/tour-package-130.jpg",
      "location": "Mykonos",
      "country": "Greece"
    },
    {
      "id": 131,
      "name": "Tour Package 131",
      "days": 8,
      "type": "East India",
      "keywords": [
        "beach",
        "paradise"
      ],
      "description": "Description for Tour Package 131.",
      "imageUrl": "assets/images/tour-package-131.jpg",
      "location": "Byblos",
      "country": "Lebanon"
    },
    {
      "id": 132,
      "name": "Tour Package 132",
      "days": 9,
      "type": "Asia",
      "keywords": [
        "sea",
        "fun"
      ],
      "description": "Description for Tour Package 132.",
      "imageUrl": "assets/images/tour-package-132.jpg",
      "location": "Milan",
      "country": "Italy"
    },
    {
      "id": 133,
      "name": "Tour Package 133",
      "days": 4,
      "type": "India",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 133.",
      "imageUrl": "assets/images/tour-package-133.jpg",
      "location": "Bali",
      "country": "Indonesia"
    },
    {
      "id": 134,
      "name": "Tour Package 134",
      "days": 2,
      "type": "Solo",
      "keywords": [
        "romantic",
        "mountain"
      ],
      "description": "Description for Tour Package 134.",
      "imageUrl": "assets/images/tour-package-134.jpg",
      "location": "Mombasa",
      "country": "Kenya"
    },
    {
      "id": 135,
      "name": "Tour Package 135",
      "days": 2,
      "type": "Asia",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 135.",
      "imageUrl": "assets/images/tour-package-135.jpg",
      "location": "Jakarta",
      "country": "Indonesia"
    },
    {
      "id": 136,
      "name": "Tour Package 136",
      "days": 6,
      "type": "Adventure",
      "keywords": [
        "sea",
        "paradise"
      ],
      "description": "Description for Tour Package 136.",
      "imageUrl": "assets/images/tour-package-136.jpg",
      "location": "San José",
      "country": "Central America"
    },
    {
      "id": 137,
      "name": "Tour Package 137",
      "days": 7,
      "type": "Family tour",
      "keywords": [
        "romantic",
        "mountain"
      ],
      "description": "Description for Tour Package 137.",
      "imageUrl": "assets/images/tour-package-137.jpg",
      "location": "Belize City",
      "country": "Central America"
    },
    {
      "id": 138,
      "name": "Tour Package 138",
      "days": 7,
      "type": "Friends trip",
      "keywords": [
        "romantic",
        "mountain"
      ],
      "description": "Description for Tour Package 138.",
      "imageUrl": "assets/images/tour-package-138.jpg",
      "location": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "id": 139,
      "name": "Tour Package 139",
      "days": 7,
      "type": "International",
      "keywords": [
        "romantic",
        "adventure"
      ],
      "description": "Description for Tour Package 139.",
      "imageUrl": "assets/images/tour-package-139.jpg",
      "location": "Wellington",
      "country": "New Zealand"
    },
    {
      "id": 140,
      "name": "Tour Package 140",
      "days": 3,
      "type": "Adventure",
      "keywords": [
        "romantic",
        "beach"
      ],
      "description": "Description for Tour Package 140.",
      "imageUrl": "assets/images/tour-package-140.jpg",
      "location": "Leuven",
      "country": "Belgium"
    },
    {
      "id": 141,
      "name": "Tour Package 141",
      "days": 6,
      "type": "India",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 141.",
      "imageUrl": "assets/images/tour-package-141.jpg",
      "location": "Ras al Khaimah",
      "country": "United Arab Emirates"
    },
    {
      "id": 142,
      "name": "Tour Package 142",
      "days": 1,
      "type": "India",
      "keywords": [
        "adventure",
        "sea"
      ],
      "description": "Description for Tour Package 142.",
      "imageUrl": "assets/images/tour-package-142.jpg",
      "location": "Waterford",
      "country": "Ireland"
    },
    {
      "id": 143,
      "name": "Tour Package 143",
      "days": 2,
      "type": "Friends trip",
      "keywords": [
        "romantic",
        "paradise"
      ],
      "description": "Description for Tour Package 143.",
      "imageUrl": "assets/images/tour-package-143.jpg",
      "location": "Split",
      "country": "Croatia"
    },
    {
      "id": 144,
      "name": "Tour Package 144",
      "days": 6,
      "type": "Family tour",
      "keywords": [
        "sea",
        "beach"
      ],
      "description": "Description for Tour Package 144.",
      "imageUrl": "assets/images/tour-package-144.jpg",
      "location": "Orchard Road",
      "country": "Singapore"
    },
    {
      "id": 145,
      "name": "Tour Package 145",
      "days": 10,
      "type": "International",
      "keywords": [
        "adventure",
        "fun"
      ],
      "description": "Description for Tour Package 145.",
      "imageUrl": "assets/images/tour-package-145.jpg",
      "location": "Chicago",
      "country": "USA"
    },
    {
      "id": 146,
      "name": "Tour Package 146",
      "days": 4,
      "type": "Family tour",
      "keywords": [
        "paradise",
        "adventure"
      ],
      "description": "Description for Tour Package 146.",
      "imageUrl": "assets/images/tour-package-146.jpg",
      "location": "Kota Kinabalu",
      "country": "Malaysia"
    },
    {
      "id": 147,
      "name": "Tour Package 147",
      "days": 2,
      "type": "East India",
      "keywords": [
        "romantic",
        "adventure"
      ],
      "description": "Description for Tour Package 147.",
      "imageUrl": "assets/images/tour-package-147.jpg",
      "location": "Miskolc",
      "country": "Hungary"
    },
    {
      "id": 148,
      "name": "Tour Package 148",
      "days": 2,
      "type": "West India",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 148.",
      "imageUrl": "assets/images/tour-package-148.jpg",
      "location": "Lucerne",
      "country": "Switzerland"
    },
    {
      "id": 149,
      "name": "Tour Package 149",
      "days": 4,
      "type": "Solo",
      "keywords": [
        "sea",
        "romantic"
      ],
      "description": "Description for Tour Package 149.",
      "imageUrl": "assets/images/tour-package-149.jpg",
      "location": "Al Wakrah",
      "country": "Qatar"
    },
    {
      "id": 150,
      "name": "Tour Package 150",
      "days": 9,
      "type": "Family tour",
      "keywords": [
        "sea",
        "romantic"
      ],
      "description": "Description for Tour Package 150.",
      "imageUrl": "assets/images/tour-package-150.jpg",
      "location": "Lima",
      "country": "South America"
    },
    {
      "id": 151,
      "name": "Tour Package 151",
      "days": 1,
      "type": "Group Tour",
      "keywords": [
        "city",
        "paradise"
      ],
      "description": "Description for Tour Package 151.",
      "imageUrl": "assets/images/tour-package-151.jpg",
      "location": "Umm Salal",
      "country": "Qatar"
    },
    {
      "id": 152,
      "name": "Tour Package 152",
      "days": 2,
      "type": "Luxury Resort",
      "keywords": [
        "mountain",
        "fun"
      ],
      "description": "Description for Tour Package 152.",
      "imageUrl": "assets/images/tour-package-152.jpg",
      "location": "Lisbon",
      "country": "Portugal"
    },
    {
      "id": 153,
      "name": "Tour Package 153",
      "days": 1,
      "type": "Honeymoon",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 153.",
      "imageUrl": "assets/images/tour-package-153.jpg",
      "location": "Rio de Janeiro",
      "country": "South America"
    },
    {
      "id": 154,
      "name": "Tour Package 154",
      "days": 1,
      "type": "South India",
      "keywords": [
        "city",
        "mountain"
      ],
      "description": "Description for Tour Package 154.",
      "imageUrl": "assets/images/tour-package-154.jpg",
      "location": "Espoo",
      "country": "Finland"
    },
    {
      "id": 155,
      "name": "Tour Package 155",
      "days": 7,
      "type": "International",
      "keywords": [
        "mountain",
        "adventure"
      ],
      "description": "Description for Tour Package 155.",
      "imageUrl": "assets/images/tour-package-155.jpg",
      "location": "Guwahati",
      "country": "India"
    },
    {
      "id": 156,
      "name": "Tour Package 156",
      "days": 2,
      "type": "Adventure",
      "keywords": [
        "sea",
        "fun"
      ],
      "description": "Description for Tour Package 156.",
      "imageUrl": "assets/images/tour-package-156.jpg",
      "location": "Panama City",
      "country": "Central America"
    },
    {
      "id": 157,
      "name": "Tour Package 157",
      "days": 1,
      "type": "Solo",
      "keywords": [
        "paradise",
        "sea"
      ],
      "description": "Description for Tour Package 157.",
      "imageUrl": "assets/images/tour-package-157.jpg",
      "location": "Denpasar",
      "country": "Bali"
    },
    {
      "id": 158,
      "name": "Tour Package 158",
      "days": 3,
      "type": "Asia",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 158.",
      "imageUrl": "assets/images/tour-package-158.jpg",
      "location": "Ottawa",
      "country": "Canada"
    },
    {
      "id": 159,
      "name": "Tour Package 159",
      "days": 3,
      "type": "West India",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 159.",
      "imageUrl": "assets/images/tour-package-159.jpg",
      "location": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "id": 160,
      "name": "Tour Package 160",
      "days": 9,
      "type": "West India",
      "keywords": [
        "paradise",
        "city"
      ],
      "description": "Description for Tour Package 160.",
      "imageUrl": "assets/images/tour-package-160.jpg",
      "location": "Ilulissat",
      "country": "Greenland"
    },
    {
      "id": 161,
      "name": "Tour Package 161",
      "days": 2,
      "type": "Wedding",
      "keywords": [
        "mountain",
        "paradise"
      ],
      "description": "Description for Tour Package 161.",
      "imageUrl": "assets/images/tour-package-161.jpg",
      "location": "Sohar",
      "country": "Oman"
    },
    {
      "id": 162,
      "name": "Tour Package 162",
      "days": 4,
      "type": "Friends trip",
      "keywords": [
        "romantic",
        "city"
      ],
      "description": "Description for Tour Package 162.",
      "imageUrl": "assets/images/tour-package-162.jpg",
      "location": "Durban",
      "country": "South Africa"
    },
    {
      "id": 163,
      "name": "Tour Package 163",
      "days": 6,
      "type": "Family tour",
      "keywords": [
        "city",
        "sea"
      ],
      "description": "Description for Tour Package 163.",
      "imageUrl": "assets/images/tour-package-163.jpg",
      "location": "Ajman",
      "country": "United Arab Emirates"
    },
    {
      "id": 164,
      "name": "Tour Package 164",
      "days": 1,
      "type": "North India",
      "keywords": [
        "mountain",
        "romantic"
      ],
      "description": "Description for Tour Package 164.",
      "imageUrl": "assets/images/tour-package-164.jpg",
      "location": "Petra",
      "country": "Jordan"
    },
    {
      "id": 165,
      "name": "Tour Package 165",
      "days": 2,
      "type": "Solo",
      "keywords": [
        "sea",
        "adventure"
      ],
      "description": "Description for Tour Package 165.",
      "imageUrl": "assets/images/tour-package-165.jpg",
      "location": "Taichung",
      "country": "Taiwan"
    },
    {
      "id": 166,
      "name": "Tour Package 166",
      "days": 4,
      "type": "Friends trip",
      "keywords": [
        "sea",
        "adventure"
      ],
      "description": "Description for Tour Package 166.",
      "imageUrl": "assets/images/tour-package-166.jpg",
      "location": "Muscat",
      "country": "Middle East"
    },
    {
      "id": 167,
      "name": "Tour Package 167",
      "days": 5,
      "type": "Adventure",
      "keywords": [
        "adventure",
        "mountain"
      ],
      "description": "Description for Tour Package 167.",
      "imageUrl": "assets/images/tour-package-167.jpg",
      "location": "Manchester",
      "country": "United Kingdom"
    },
    {
      "id": 168,
      "name": "Tour Package 168",
      "days": 3,
      "type": "Group Tour",
      "keywords": [
        "fun",
        "sea"
      ],
      "description": "Description for Tour Package 168.",
      "imageUrl": "assets/images/tour-package-168.jpg",
      "location": "Nizwa",
      "country": "Oman"
    },
    {
      "id": 169,
      "name": "Tour Package 169",
      "days": 4,
      "type": "East India",
      "keywords": [
        "romantic",
        "beach"
      ],
      "description": "Description for Tour Package 169.",
      "imageUrl": "assets/images/tour-package-169.jpg",
      "location": "Žilina",
      "country": "Slovakia"
    },
    {
      "id": 170,
      "name": "Tour Package 170",
      "days": 1,
      "type": "Asia",
      "keywords": [
        "romantic",
        "beach"
      ],
      "description": "Description for Tour Package 170.",
      "imageUrl": "assets/images/tour-package-170.jpg",
      "location": "Luxor",
      "country": "Egypt"
    },
    {
      "id": 171,
      "name": "Tour Package 171",
      "days": 8,
      "type": "South India",
      "keywords": [
        "city",
        "fun"
      ],
      "description": "Description for Tour Package 171.",
      "imageUrl": "assets/images/tour-package-171.jpg",
      "location": "Plzeň",
      "country": "Czech Republic"
    },
    {
      "id": 172,
      "name": "Tour Package 172",
      "days": 4,
      "type": "Adventure",
      "keywords": [
        "sea",
        "romantic"
      ],
      "description": "Description for Tour Package 172.",
      "imageUrl": "assets/images/tour-package-172.jpg",
      "location": "Mykonos",
      "country": "Greece"
    },
    {
      "id": 173,
      "name": "Tour Package 173",
      "days": 8,
      "type": "Asia",
      "keywords": [
        "city",
        "mountain"
      ],
      "description": "Description for Tour Package 173.",
      "imageUrl": "assets/images/tour-package-173.jpg",
      "location": "London",
      "country": "United Kingdom"
    },
    {
      "id": 174,
      "name": "Tour Package 174",
      "days": 5,
      "type": "West India",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 174.",
      "imageUrl": "assets/images/tour-package-174.jpg",
      "location": "Timișoara",
      "country": "Romania"
    },
    {
      "id": 175,
      "name": "Tour Package 175",
      "days": 2,
      "type": "Adventure",
      "keywords": [
        "romantic",
        "fun"
      ],
      "description": "Description for Tour Package 175.",
      "imageUrl": "assets/images/tour-package-175.jpg",
      "location": "Malacca",
      "country": "Malaysia"
    },
    {
      "id": 176,
      "name": "Tour Package 176",
      "days": 2,
      "type": "Honeymoon",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 176.",
      "imageUrl": "assets/images/tour-package-176.jpg",
      "location": "Copenhagen",
      "country": "Denmark"
    },
    {
      "id": 177,
      "name": "Tour Package 177",
      "days": 10,
      "type": "Asia",
      "keywords": [
        "romantic",
        "sea"
      ],
      "description": "Description for Tour Package 177.",
      "imageUrl": "assets/images/tour-package-177.jpg",
      "location": "New York",
      "country": "USA"
    },
    {
      "id": 178,
      "name": "Tour Package 178",
      "days": 10,
      "type": "Group Tour",
      "keywords": [
        "romantic",
        "sea"
      ],
      "description": "Description for Tour Package 178.",
      "imageUrl": "assets/images/tour-package-178.jpg",
      "location": "Cordoba",
      "country": "Argentina"
    },
    {
      "id": 179,
      "name": "Tour Package 179",
      "days": 7,
      "type": "India",
      "keywords": [
        "paradise",
        "fun"
      ],
      "description": "Description for Tour Package 179.",
      "imageUrl": "assets/images/tour-package-179.jpg",
      "location": "Varna",
      "country": "Bulgaria"
    },
    {
      "id": 180,
      "name": "Tour Package 180",
      "days": 6,
      "type": "South India",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 180.",
      "imageUrl": "assets/images/tour-package-180.jpg",
      "location": "Salzburg",
      "country": "Austria"
    },
    {
      "id": 181,
      "name": "Tour Package 181",
      "days": 10,
      "type": "South India",
      "keywords": [
        "sea",
        "adventure"
      ],
      "description": "Description for Tour Package 181.",
      "imageUrl": "assets/images/tour-package-181.jpg",
      "location": "Munich",
      "country": "Germany"
    },
    {
      "id": 182,
      "name": "Tour Package 182",
      "days": 2,
      "type": "International",
      "keywords": [
        "city",
        "beach"
      ],
      "description": "Description for Tour Package 182.",
      "imageUrl": "assets/images/tour-package-182.jpg",
      "location": "Bukhara",
      "country": "Uzbekistan"
    },
    {
      "id": 183,
      "name": "Tour Package 183",
      "days": 7,
      "type": "Friends trip",
      "keywords": [
        "fun",
        "romantic"
      ],
      "description": "Description for Tour Package 183.",
      "imageUrl": "assets/images/tour-package-183.jpg",
      "location": "Malindi",
      "country": "Kenya"
    },
    {
      "id": 184,
      "name": "Tour Package 184",
      "days": 9,
      "type": "West India",
      "keywords": [
        "mountain",
        "beach"
      ],
      "description": "Description for Tour Package 184.",
      "imageUrl": "assets/images/tour-package-184.jpg",
      "location": "Singapore",
      "country": "Asia"
    },
    {
      "id": 185,
      "name": "Tour Package 185",
      "days": 10,
      "type": "West India",
      "keywords": [
        "adventure",
        "city"
      ],
      "description": "Description for Tour Package 185.",
      "imageUrl": "assets/images/tour-package-185.jpg",
      "location": "Bukhara",
      "country": "Uzbekistan"
    },
    {
      "id": 186,
      "name": "Tour Package 186",
      "days": 3,
      "type": "Solo",
      "keywords": [
        "beach",
        "sea"
      ],
      "description": "Description for Tour Package 186.",
      "imageUrl": "assets/images/tour-package-186.jpg",
      "location": "Davao City",
      "country": "Philippines"
    },
    {
      "id": 187,
      "name": "Tour Package 187",
      "days": 1,
      "type": "Family tour",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 187.",
      "imageUrl": "assets/images/tour-package-187.jpg",
      "location": "Vienna",
      "country": "Austria"
    },
    {
      "id": 188,
      "name": "Tour Package 188",
      "days": 9,
      "type": "Wedding",
      "keywords": [
        "paradise",
        "romantic"
      ],
      "description": "Description for Tour Package 188.",
      "imageUrl": "assets/images/tour-package-188.jpg",
      "location": "Gothenburg",
      "country": "Sweden"
    },
    {
      "id": 189,
      "name": "Tour Package 189",
      "days": 7,
      "type": "East India",
      "keywords": [
        "sea",
        "paradise"
      ],
      "description": "Description for Tour Package 189.",
      "imageUrl": "assets/images/tour-package-189.jpg",
      "location": "Hanoi",
      "country": "Vietnam"
    },
    {
      "id": 190,
      "name": "Tour Package 190",
      "days": 7,
      "type": "East India",
      "keywords": [
        "sea",
        "mountain"
      ],
      "description": "Description for Tour Package 190.",
      "imageUrl": "assets/images/tour-package-190.jpg",
      "location": "Hong Kong Island",
      "country": "Hong Kong"
    },
    {
      "id": 191,
      "name": "Tour Package 191",
      "days": 10,
      "type": "Friends trip",
      "keywords": [
        "fun",
        "beach"
      ],
      "description": "Description for Tour Package 191.",
      "imageUrl": "assets/images/tour-package-191.jpg",
      "location": "Rosario",
      "country": "Argentina"
    },
    {
      "id": 192,
      "name": "Tour Package 192",
      "days": 9,
      "type": "North India",
      "keywords": [
        "romantic",
        "fun"
      ],
      "description": "Description for Tour Package 192.",
      "imageUrl": "assets/images/tour-package-192.jpg",
      "location": "Negombo",
      "country": "Sri Lanka"
    },
    {
      "id": 193,
      "name": "Tour Package 193",
      "days": 7,
      "type": "Wedding",
      "keywords": [
        "romantic",
        "fun"
      ],
      "description": "Description for Tour Package 193.",
      "imageUrl": "assets/images/tour-package-193.jpg",
      "location": "Cordoba",
      "country": "Argentina"
    },
    {
      "id": 194,
      "name": "Tour Package 194",
      "days": 5,
      "type": "Family tour",
      "keywords": [
        "paradise",
        "mountain"
      ],
      "description": "Description for Tour Package 194.",
      "imageUrl": "assets/images/tour-package-194.jpg",
      "location": "Olomouc",
      "country": "Czech Republic"
    },
    {
      "id": 195,
      "name": "Tour Package 195",
      "days": 5,
      "type": "North India",
      "keywords": [
        "beach",
        "paradise"
      ],
      "description": "Description for Tour Package 195.",
      "imageUrl": "assets/images/tour-package-195.jpg",
      "location": "Fairbanks",
      "country": "Alaska"
    },
    {
      "id": 196,
      "name": "Tour Package 196",
      "days": "6days and 3 nights",
      "type": "Honeymoon",
      "keywords": [
        "fun",
        "sea"
      ],
      "description": "Description for Tour Package 196.",
      "imageUrl": "../../assets/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg",
      "location": "Cluj-Napoca",
      "country": "Romania"
    },
    {
      "id": 197,
      "name": "Tour Package 197",
      "days": 5,
      "type": "Friends trip",
      "keywords": [
        "beach",
        "mountain"
      ],
      "description": "Description for Tour Package 197.",
      "imageUrl": "assets/images/tour-package-197.jpg",
      "location": "Tromsø",
      "country": "Norway"
    },
    {
      "id": 198,
      "name": "Tour Package 198",
      "days": 6,
      "type": "India",
      "keywords": [
        "mountain",
        "romantic"
      ],
      "description": "Description for Tour Package 198.",
      "imageUrl": "assets/images/tour-package-198.jpg",
      "location": "Nice",
      "country": "France"
    },
    {
      "id": 199,
      "name": "Tour Package 199",
      "days": 10,
      "type": "West India",
      "keywords": [
        "fun",
        "romantic"
      ],
      "description": "Description for Tour Package 199.",
      "imageUrl": "assets/images/tour-package-199.jpg",
      "location": "Gothenburg",
      "country": "Sweden"
    },
    {
      "id": 200,
      "name": "vic",
      "days": 8,
      "type": "Wedding",
      "keywords": [
        "sea",
        "vic"
      ],
      "description": "Description for Tour Package 200.",
      "imageUrl": "assets/images/tour-package-200.jpg",
      "location": "Bangkok",
      "country": "Asia"
    }
  ];

  constructor() { }
  getTourPackages(): Observable<any[]> {
    return of(this.tourPackages);
  }

  filterTourPackages(country: string): Observable<any[]> {
    const filteredPackages = this.tourPackages.filter(pkg => 
      pkg.country.toLowerCase() === country.toLowerCase()
    );
    return of(filteredPackages);
  }
}
