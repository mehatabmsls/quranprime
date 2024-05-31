const surahs = [
  {
    chapter: 1,
    surah: "Al-Fatihah",
    englishName: "The Opener",
  },
  {
    chapter: 2,
    surah: "Al-Baqarah",
    englishName: "The Cow",
  },
  {
    chapter: 3,
    surah: "Ali 'Imran",
    englishName: "Family of Imran",
  },
  {
    chapter: 4,
    surah: "An-Nisa",
    englishName: "The Women",
  },
  {
    chapter: 5,
    surah: "Al-Ma'idah",
    englishName: "The Table Spread",
  },
  {
    chapter: 6,
    surah: "Al-An'am",
    englishName: "The Cattle",
  },
  {
    chapter: 7,
    surah: "Al-A'raf",
    englishName: "The Heights",
  },
  {
    chapter: 8,
    surah: "Al-Anfal",
    englishName: "The Spoils of War",
  },
  {
    chapter: 9,
    surah: "At-Tawbah",
    englishName: "The Repentance",
  },
  {
    chapter: 10,
    surah: "Yunus",
    englishName: "Jonah",
  },
  {
    chapter: 11,
    surah: "Hud",
    englishName: "Hud",
  },
  {
    chapter: 12,
    surah: "Yusuf",
    englishName: "Joseph",
  },
  {
    chapter: 13,
    surah: "Ar-Ra'd",
    englishName: "The Thunder",
  },
  {
    chapter: 14,
    surah: "Ibrahim",
    englishName: "Abraham",
  },
  {
    chapter: 15,
    surah: "Al-Hijr",
    englishName: "The Rocky Tract",
  },
  {
    chapter: 16,
    surah: "An-Nahl",
    englishName: "The Bee",
  },
  {
    chapter: 17,
    surah: "Al-Isra",
    englishName: "The Night Journey",
  },
  {
    chapter: 18,
    surah: "Al-Kahf",
    englishName: "The Cave",
  },
  {
    chapter: 19,
    surah: "Maryam",
    englishName: "Mary",
  },
  {
    chapter: 20,
    surah: "Taha",
    englishName: "Ta-Ha",
  },
  {
    chapter: 21,
    surah: "Al-Anbya",
    englishName: "The Prophets",
  },
  {
    chapter: 22,
    surah: "Al-Hajj",
    englishName: "The Pilgrimage",
  },
  {
    chapter: 23,
    surah: "Al-Mu'minun",
    englishName: "The Believers",
  },
  {
    chapter: 24,
    surah: "An-Nur",
    englishName: "The Light",
  },
  {
    chapter: 25,
    surah: "Al-Furqan",
    englishName: "The Criterion",
  },
  {
    chapter: 26,
    surah: "Ash-Shu'ara",
    englishName: "The Poets",
  },
  {
    chapter: 27,
    surah: "An-Naml",
    englishName: "The Ant",
  },
  {
    chapter: 28,
    surah: "Al-Qasas",
    englishName: "The Stories",
  },
  {
    chapter: 29,
    surah: "Al-'Ankabut",
    englishName: "The Spider",
  },
  {
    chapter: 30,
    surah: "Ar-Rum",
    englishName: "The Romans",
  },
  {
    chapter: 31,
    surah: "Luqman",
    englishName: "Luqman",
  },
  {
    chapter: 32,
    surah: "As-Sajdah",
    englishName: "The Prostration",
  },
  {
    chapter: 33,
    surah: "Al-Ahzab",
    englishName: "The Combined Forces",
  },
  {
    chapter: 34,
    surah: "Saba",
    englishName: "Sheba",
  },
  {
    chapter: 35,
    surah: "Fatir",
    englishName: "Originator",
  },
  {
    chapter: 36,
    surah: "Ya-Sin",
    englishName: "Ya Sin",
  },
  {
    chapter: 37,
    surah: "As-Saffat",
    englishName: "Those who set the Ranks",
  },
  {
    chapter: 38,
    surah: "Sad",
    englishName: 'The Letter "Saad"',
  },
  {
    chapter: 39,
    surah: "Az-Zumar",
    englishName: "The Troops",
  },
  {
    chapter: 40,
    surah: "Ghafir",
    englishName: "The Forgiver",
  },
  {
    chapter: 41,
    surah: "Fussilat",
    englishName: "Explained in Detail",
  },
  {
    chapter: 42,
    surah: "Ash-Shuraa",
    englishName: "The Consultation",
  },
  {
    chapter: 43,
    surah: "Az-Zukhruf",
    englishName: "The Ornaments of Gold",
  },
  {
    chapter: 44,
    surah: "Ad-Dukhan",
    englishName: "The Smoke",
  },
  {
    chapter: 45,
    surah: "Al-Jathiyah",
    englishName: "The Crouching",
  },
  {
    chapter: 46,
    surah: "Al-Ahqaf",
    englishName: "The Wind-Curved Sandhills",
  },
  {
    chapter: 47,
    surah: "Muhammad",
    englishName: "Muhammad",
  },
  {
    chapter: 48,
    surah: "Al-Fath",
    englishName: "The Victory",
  },
  {
    chapter: 49,
    surah: "Al-Hujurat",
    englishName: "The Rooms",
  },
  {
    chapter: 50,
    surah: "Qaf",
    englishName: 'The Letter "Qaf"',
  },
  {
    chapter: 51,
    surah: "Adh-Dhariyat",
    englishName: "The Winnowing Winds",
  },
  {
    chapter: 52,
    surah: "At-Tur",
    englishName: "The Mount",
  },
  {
    chapter: 53,
    surah: "An-Najm",
    englishName: "The Star",
  },
  {
    chapter: 54,
    surah: "Al-Qamar",
    englishName: "The Moon",
  },
  {
    chapter: 55,
    surah: "Ar-Rahman",
    englishName: "The Beneficent",
  },
  {
    chapter: 56,
    surah: "Al-Waqi'ah",
    englishName: "The Inevitable",
  },
  {
    chapter: 57,
    surah: "Al-Hadid",
    englishName: "The Iron",
  },
  {
    chapter: 58,
    surah: "Al-Mujadila",
    englishName: "The Pleading Woman",
  },
  {
    chapter: 59,
    surah: "Al-Hashr",
    englishName: "The Exile",
  },
  {
    chapter: 60,
    surah: "Al-Mumtahanah",
    englishName: "She that is to be examined",
  },
  {
    chapter: 61,
    surah: "As-Saf",
    englishName: "The Ranks",
  },
  {
    chapter: 62,
    surah: "Al-Jumu'ah",
    englishName: "The Congregation, Friday",
  },
  {
    chapter: 63,
    surah: "Al-Munafiqun",
    englishName: "The Hypocrites",
  },
  {
    chapter: 64,
    surah: "At-Taghabun",
    englishName: "The Mutual Disillusion",
  },
  {
    chapter: 65,
    surah: "At-Talaq",
    englishName: "The Divorce",
  },
  {
    chapter: 66,
    surah: "At-Tahrim",
    englishName: "The Prohibition",
  },
  {
    chapter: 67,
    surah: "Al-Mulk",
    englishName: "The Sovereignty",
  },
  {
    chapter: 68,
    surah: "Al-Qalam",
    englishName: "The Pen",
  },
  {
    chapter: 69,
    surah: "Al-Haqqah",
    englishName: "The Reality",
  },
  {
    chapter: 70,
    surah: "Al-Ma'arij",
    englishName: "The Ascending Stairways",
  },
  {
    chapter: 71,
    surah: "Nuh",
    englishName: "Noah",
  },
  {
    chapter: 72,
    surah: "Al-Jinn",
    englishName: "The Jinn",
  },
  {
    chapter: 73,
    surah: "Al-Muzzammil",
    englishName: "The Enshrouded One",
  },
  {
    chapter: 74,
    surah: "Al-Muddaththir",
    englishName: "The Cloaked One",
  },
  {
    chapter: 75,
    surah: "Al-Qiyamah",
    englishName: "The Resurrection",
  },
  {
    chapter: 76,
    surah: "Al-Insan",
    englishName: "The Man",
  },
  {
    chapter: 77,
    surah: "Al-Mursalat",
    englishName: "The Emissaries",
  },
  {
    chapter: 78,
    surah: "An-Naba",
    englishName: "The Tidings",
  },
  {
    chapter: 79,
    surah: "An-Nazi'at",
    englishName: "Those who drag forth",
  },
  {
    chapter: 80,
    surah: "'Abasa",
    englishName: "He Frowned",
  },
  {
    chapter: 81,
    surah: "At-Takwir",
    englishName: "The Overthrowing",
  },
  {
    chapter: 82,
    surah: "Al-Infitar",
    englishName: "The Cleaving",
  },
  {
    chapter: 83,
    surah: "Al-Mutaffifin",
    englishName: "The Defrauding",
  },
  {
    chapter: 84,
    surah: "Al-Inshiqaq",
    englishName: "The Sundering",
  },
  {
    chapter: 85,
    surah: "Al-Buruj",
    englishName: "The Mansions of the Stars",
  },
  {
    chapter: 86,
    surah: "At-Tariq",
    englishName: "The Nightcommer",
  },
  {
    chapter: 87,
    surah: "Al-A'la",
    englishName: "The Most High",
  },
  {
    chapter: 88,
    surah: "Al-Ghashiyah",
    englishName: "The Overwhelming",
  },
  {
    chapter: 89,
    surah: "Al-Fajr",
    englishName: "The Dawn",
  },
  {
    chapter: 90,
    surah: "Al-Balad",
    englishName: "The City",
  },
  {
    chapter: 91,
    surah: "Ash-Shams",
    englishName: "The Sun",
  },
  {
    chapter: 92,
    surah: "Al-Layl",
    englishName: "The Night",
  },
  {
    chapter: 93,
    surah: "Ad-Duhaa",
    englishName: "The Morning Hours",
  },
  {
    chapter: 94,
    surah: "Ash-Sharh",
    englishName: "The Relief",
  },
  {
    chapter: 95,
    surah: "At-Tin",
    englishName: "The Fig",
  },
  {
    chapter: 96,
    surah: "Al-'Alaq",
    englishName: "The Clot",
  },
  {
    chapter: 97,
    surah: "Al-Qadr",
    englishName: "The Power",
  },
  {
    chapter: 98,
    surah: "Al-Bayyinah",
    englishName: "The Clear Proof",
  },
  {
    chapter: 99,
    surah: "Az-Zalzalah",
    englishName: "The Earthquake",
  },
  {
    chapter: 100,
    surah: "Al-'Adiyat",
    englishName: "The Courser",
  },
  {
    chapter: 101,
    surah: "Al-Qari'ah",
    englishName: "The Calamity",
  },
  {
    chapter: 102,
    surah: "At-Takathur",
    englishName: "The Rivalry in world increase",
  },
  {
    chapter: 103,
    surah: "Al-'Asr",
    englishName: "The Declining Day",
  },
  {
    chapter: 104,
    surah: "Al-Humazah",
    englishName: "The Traducer",
  },
  {
    chapter: 105,
    surah: "Al-Fil",
    englishName: "The Elephant",
  },
  {
    chapter: 106,
    surah: "Quraysh",
    englishName: "Quraysh",
  },
  {
    chapter: 107,
    surah: "Al-Ma'un",
    englishName: "The Small kindnesses",
  },
  {
    chapter: 108,
    surah: "Al-Kawthar",
    englishName: "The Abundance",
  },
  {
    chapter: 109,
    surah: "Al-Kafirun",
    englishName: "The Disbelievers",
  },
  {
    chapter: 110,
    surah: "An-Nasr",
    englishName: "The Divine Support",
  },
  {
    chapter: 111,
    surah: "Al-Masad",
    englishName: "The Palm Fiber",
  },
  {
    chapter: 112,
    surah: "Al-Ikhlas",
    englishName: "The Sincerity",
  },
  {
    chapter: 113,
    surah: "Al-Falaq",
    englishName: "The Daybreak",
  },
  {
    chapter: 114,
    surah: "An-Nas",
    englishName: "Mankind",
  },
];

export default surahs;
