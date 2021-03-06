const hospitalData = [
  {
    sl: 21,
    __EMPTY: "Hooghly",
    __EMPTY_1: "Shramajibi Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 26,
  },
  {
    sl: 22,
    __EMPTY: "Hooghly",
    __EMPTY_1: "ESI Hospital, Bandel",
    __EMPTY_2: 250,
    __EMPTY_3: 224,
  },
  {
    sl: 23,
    __EMPTY: "Hooghly",
    __EMPTY_1: "Blue View Nursing Home",
    __EMPTY_2: 30,
    __EMPTY_3: 17,
  },
  {
    sl: 24,
    __EMPTY: "Hooghly",
    __EMPTY_1: "Seven Rangers",
    __EMPTY_2: 90,
    __EMPTY_3: 90,
  },
  {
    sl: 25,
    __EMPTY: "Hooghly",
    __EMPTY_1: "Kamala Roy",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 26,
    __EMPTY: "Hooghly",
    __EMPTY_1: "Arambagh Nursing Home",
    __EMPTY_2: 30,
    __EMPTY_3: 30,
  },
  {
    sl: 27,
    __EMPTY: "Hooghly",
    __EMPTY_1: "ESI Hospital, Gourhati",
    __EMPTY_2: 216,
    __EMPTY_3: 216,
  },
  {
    sl: 28,
    __EMPTY: "Howrah",
    __EMPTY_1: "Sanjiban Hospital",
    __EMPTY_2: 500,
    __EMPTY_3: 279,
  },
  {
    sl: 29,
    __EMPTY: "Howrah",
    __EMPTY_1: "ILS, Golabari",
    __EMPTY_2: 100,
    __EMPTY_3: 14,
  },
  {
    sl: 30,
    __EMPTY: "Howrah",
    __EMPTY_1: "Satyabala IDH",
    __EMPTY_2: 25,
    __EMPTY_3: 9,
  },
  {
    sl: 31,
    __EMPTY: "Howrah",
    __EMPTY_1: "ESI Hospital, Baltikuri",
    __EMPTY_2: 230,
    __EMPTY_3: 164,
  },
  {
    sl: 32,
    __EMPTY: "Howrah",
    __EMPTY_1: "Uluberia ESI Hospital",
    __EMPTY_2: 216,
    __EMPTY_3: 119,
  },
  {
    sl: 33,
    __EMPTY: "Howrah",
    __EMPTY_1: "Narayana Hospital Old Building, West\r\nBank Hospital",
    __EMPTY_2: 130,
    __EMPTY_3: 76,
  },
  {
    sl: 34,
    __EMPTY: "Howrah",
    __EMPTY_1: "TLJ Hospital",
    __EMPTY_2: 250,
    __EMPTY_3: 176,
  },
  {
    sl: 35,
    __EMPTY: "Jalpaiguri",
    __EMPTY_1: "Biswabangla Krirangan",
    __EMPTY_2: 200,
    __EMPTY_3: 74,
  },
  {
    sl: 36,
    __EMPTY: "Jalpaiguri",
    __EMPTY_1: "Agrasen Hospital",
    __EMPTY_2: 41,
    __EMPTY_3: 41,
  },
  {
    sl: 37,
    __EMPTY: "Jhargram",
    __EMPTY_1: "Jhargram Night Shelter",
    __EMPTY_2: 75,
    __EMPTY_3: 75,
  },
  {
    sl: 38,
    __EMPTY: "Kalimpong",
    __EMPTY_1: "Triveni Hospital",
    __EMPTY_2: 150,
    __EMPTY_3: 137,
  },
  {
    sl: 39,
    __EMPTY: "Malda",
    __EMPTY_1: "EHC Glocal Hospital, Malda",
    __EMPTY_2: 100,
    __EMPTY_3: 84,
  },
  {
    sl: 40,
    __EMPTY: "Malda",
    __EMPTY_1: "Dishari Nursing Home, Chanchal",
    __EMPTY_2: 30,
    __EMPTY_3: 30,
  },
  {
    sl: 41,
    __EMPTY: "Malda",
    __EMPTY_1: "Manikchak Model School,Manikchak",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 42,
    __EMPTY: "Malda",
    __EMPTY_1: "Trauma Care Centre",
    __EMPTY_2: 125,
    __EMPTY_3: 97,
  },
  {
    sl: 43,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Old Matri Sadan Hospital",
    __EMPTY_2: 120,
    __EMPTY_3: 42,
  },
  {
    sl: 44,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Monmohini Private Health Care",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 45,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Gitaram Private Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 46,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Lalbagh Rainbow Nursshing Home",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 47,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Basumati Healthcare Private Ltd",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 48,
    __EMPTY: "Murshidabad",
    __EMPTY_1: "Khristio Seba Sadan",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 49,
    __EMPTY: "Nadia",
    __EMPTY_1: "SNR carnival Hospital",
    __EMPTY_2: 120,
    __EMPTY_3: 61,
  },
  {
    sl: 50,
    __EMPTY: "Nadia",
    __EMPTY_1: "Glocal Hospital, Nadia",
    __EMPTY_2: 150,
    __EMPTY_3: 73,
  },
  {
    sl: 51,
    __EMPTY: "Nadia",
    __EMPTY_1: "T B Hospital, Kalyani",
    __EMPTY_2: 300,
    __EMPTY_3: 300,
  },
  {
    sl: 52,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Al Amin Gopalpur Nursing Home",
    __EMPTY_2: 50,
    __EMPTY_3: 37,
  },
  {
    sl: 53,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "GNRC",
    __EMPTY_2: 84,
    __EMPTY_3: 7,
  },
  {
    sl: 54,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Megacity Nursing Home",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 55,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Nehru Memorial Techno Global",
    __EMPTY_2: 134,
    __EMPTY_3: 87,
  },
  {
    sl: 56,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Bibhuti Nursing Home",
    __EMPTY_2: 10,
    __EMPTY_3: 10,
  },
  {
    sl: 57,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Subodh Mitra Cancer Hospital",
    __EMPTY_2: 40,
    __EMPTY_3: 40,
  },
  {
    sl: 58,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "COM & Sagar Datta Hospital",
    __EMPTY_2: 500,
    __EMPTY_3: 297,
  },
  {
    sl: 59,
    __EMPTY: "North 24 Pgs",
    __EMPTY_1: "Charnock Hospital",
    __EMPTY_2: 20,
    __EMPTY_3: 20,
  },
  {
    sl: 60,
    __EMPTY: "Paschim\r\nBardhaman",
    __EMPTY_1: "Sanaka Hospital",
    __EMPTY_2: 400,
    __EMPTY_3: 272,
  },
  {
    sl: 61,
    __EMPTY: "Paschim\r\nBardhaman",
    __EMPTY_1: "HLG Hospitals",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 62,
    __EMPTY: "Paschim Medinipur",
    __EMPTY_1: "St. Joseph Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 63,
    __EMPTY: "Paschim Medinipur",
    __EMPTY_1: "AYUSH Corona Hospital, Paschim\r\nMedinipore",
    __EMPTY_2: 80,
    __EMPTY_3: 14,
  },
  {
    sl: 64,
    __EMPTY: "Paschim Medinipur",
    __EMPTY_1: "Glocal Corona Hospital, Paschim\r\nMedinipore",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 65,
    __EMPTY: "Paschim Medinipur",
    __EMPTY_1: "Salboni SSH",
    __EMPTY_2: 150,
    __EMPTY_3: 45,
  },
  {
    sl: 66,
    __EMPTY: "Paschim Medinipur",
    __EMPTY_1: "Debra RH Covid Hospital",
    __EMPTY_2: 40,
    __EMPTY_3: 23,
  },
  {
    sl: 67,
    __EMPTY: "Purba Burdwan",
    __EMPTY_1: "Camri Hospital",
    __EMPTY_2: 120,
    __EMPTY_3: 38,
  },
  {
    sl: 68,
    __EMPTY: "Purba Burdwan",
    __EMPTY_1: "Bengal Medica Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 69,
    __EMPTY: "Purba Mednipur",
    __EMPTY_1: "Chandipur Multi Speciality Hospital",
    __EMPTY_2: 150,
    __EMPTY_3: 46,
  },
  {
    sl: 70,
    __EMPTY: "Purba Mednipur",
    __EMPTY_1: "R C N Sanjiban Hospital",
    __EMPTY_2: 50,
    __EMPTY_3: 13,
  },
  {
    sl: 71,
    __EMPTY: "Purba Mednipur",
    __EMPTY_1: "Baroma Multi speciality Hospital",
    __EMPTY_2: 150,
    __EMPTY_3: 93,
  },
  {
    sl: 72,
    __EMPTY: "Purulia",
    __EMPTY_1: "Rotary Club of Purulia Service Centre -\r\nNursing home",
    __EMPTY_2: 60,
    __EMPTY_3: 48,
  },
  {
    sl: 73,
    __EMPTY: "Purulia",
    __EMPTY_1: "R Singhania Seva pratishtan Hospital",
    __EMPTY_2: 60,
    __EMPTY_3: 60,
  },
  {
    sl: 74,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "ESIC Medical College and Hospital",
    __EMPTY_2: 470,
    __EMPTY_3: 394,
  },
  {
    sl: 75,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "The Saharahat NH",
    __EMPTY_2: 120,
    __EMPTY_3: 120,
  },
  {
    sl: 76,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "Maa Durga NH",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 77,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "Canning Covid Hospital (Stadium)",
    __EMPTY_2: 55,
    __EMPTY_3: 30,
  },
  {
    sl: 78,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "Bharat Sevashram Sangha",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 79,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "Jagannath Gupta Medical College &\r\nHospital",
    __EMPTY_2: 100,
    __EMPTY_3: 100,
  },
  {
    sl: 80,
    __EMPTY: "South 24 Parganas",
    __EMPTY_1: "Ispat Cooperative Hospital",
    __EMPTY_2: 125,
    __EMPTY_3: 125,
  },
  {
    sl: 81,
    __EMPTY: "Uttar Dinajpur",
    __EMPTY_1: "Mikki Megha Hospital",
    __EMPTY_2: 52,
    __EMPTY_3: 0,
  },
  {
    sl: 82,
    __EMPTY: "Uttar Dinajpur",
    __EMPTY_1: "Jeevan Rekha Nursing Home",
    __EMPTY_2: 45,
    __EMPTY_3: 45,
  },
  {
    sl: 83,
    __EMPTY: "Uttar Dinajpur",
    __EMPTY_1: "Islampur Urdu Academy",
    __EMPTY_2: 100,
    __EMPTY_3: 61,
  },
  {
    sl: "Sr no",
    __EMPTY: "District",
    __EMPTY_1: "Name of CoVid Hospital",
    __EMPTY_2: "Total\r\nBeds",
    __EMPTY_3: "Vacant\r\nBeds",
  },
  {
    sl: 1,
    __EMPTY: "Kolkata",
    __EMPTY_1: "M R Bangur DH & SSH",
    __EMPTY_2: 670,
    __EMPTY_3: 273,
  },
  {
    sl: 2,
    __EMPTY: "Kolkata",
    __EMPTY_1: "CNCI",
    __EMPTY_2: 400,
    __EMPTY_3: 32,
  },
  {
    sl: 3,
    __EMPTY: "Kolkata",
    __EMPTY_1: "AMRI Salt Lake",
    __EMPTY_2: 64,
    __EMPTY_3: 8,
  },
  {
    sl: 4,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Desun Hospital, Kolkata",
    __EMPTY_2: 113,
    __EMPTY_3: 0,
  },
  {
    sl: 5,
    __EMPTY: "Kolkata",
    __EMPTY_1: "ID BG",
    __EMPTY_2: 115,
    __EMPTY_3: 5,
  },
  {
    sl: 6,
    __EMPTY: "Kolkata",
    __EMPTY_1: "KPC Medical College",
    __EMPTY_2: 200,
    __EMPTY_3: 28,
  },
  {
    sl: 7,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Kolkata Medical College",
    __EMPTY_2: 660,
    __EMPTY_3: 137,
  },
  {
    sl: 8,
    __EMPTY: "Alipurduar",
    __EMPTY_1: "Integrated Ayush (COVID 19) Hospital,\r\nTapsikhata",
    __EMPTY_2: 100,
    __EMPTY_3: 43,
  },
  {
    sl: 9,
    __EMPTY: "Bankura",
    __EMPTY_1: "Onda SSH",
    __EMPTY_2: 250,
    __EMPTY_3: 151,
  },
  {
    sl: 10,
    __EMPTY: "Bankura",
    __EMPTY_1: "Medicare General Hospital (NH)",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 11,
    __EMPTY: "Birbhum",
    __EMPTY_1: "Glocal Hospital, Birbhum",
    __EMPTY_2: 50,
    __EMPTY_3: 18,
  },
  {
    sl: 12,
    __EMPTY: "Birbhum",
    __EMPTY_1: "RMYF Royal Nursing Home & Diagnostic\r\nCentre",
    __EMPTY_2: 50,
    __EMPTY_3: 29,
  },
  {
    sl: 13,
    __EMPTY: "Birbhum",
    __EMPTY_1: "Madhumamata Lodge",
    __EMPTY_2: 160,
    __EMPTY_3: 160,
  },
  {
    sl: 14,
    __EMPTY: "Coochbehar",
    __EMPTY_1: "Cooch Behar Mission Hospital",
    __EMPTY_2: 110,
    __EMPTY_3: 61,
  },
  {
    sl: 15,
    __EMPTY: "Dakshin Dinajpur",
    __EMPTY_1: "Prayas Atreyi Eye Hospital",
    __EMPTY_2: 30,
    __EMPTY_3: 9,
  },
  {
    sl: 16,
    __EMPTY: "Darjeeling",
    __EMPTY_1: "Chang Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 10,
  },
  {
    sl: 17,
    __EMPTY: "Darjeeling",
    __EMPTY_1: "Desun CoVid Hospital",
    __EMPTY_2: 160,
    __EMPTY_3: 92,
  },
  {
    sl: 18,
    __EMPTY: "Darjeeling",
    __EMPTY_1: "Medica Hospital",
    __EMPTY_2: 110,
    __EMPTY_3: 110,
  },
  {
    sl: 19,
    __EMPTY: "Darjeeling",
    __EMPTY_1: "Medica Cancer Hospital",
    __EMPTY_2: 50,
    __EMPTY_3: 50,
  },
  {
    sl: 20,
    __EMPTY: "Darjeeling",
    __EMPTY_1: "Nivedita Cancer Hospital",
    __EMPTY_2: 64,
    __EMPTY_3: 64,
  },
  {
    sl: 1,
    __EMPTY: "Kolkata",
    __EMPTY_1: "All Asia Medical Institute",
    __EMPTY_2: 32,
    __EMPTY_3: 4,
  },
  {
    sl: 2,
    __EMPTY: "Kolkata",
    __EMPTY_1: "AMRI Hospital, Dhakuria",
    __EMPTY_2: 78,
    __EMPTY_3: 6,
  },
  {
    sl: 3,
    __EMPTY: "Kolkata",
    __EMPTY_1: "AMRI Hospital, Dhakuria -{Satellite facility}",
    __EMPTY_2: 20,
    __EMPTY_3: 0,
  },
  {
    sl: 4,
    __EMPTY: "Kolkata",
    __EMPTY_1: "AMRI Hospital, Mukundapur",
    __EMPTY_2: 30,
    __EMPTY_3: 20,
  },
  {
    sl: 5,
    __EMPTY: "Kolkata",
    __EMPTY_1: "APEX IMS",
    __EMPTY_2: 8,
    __EMPTY_3: 3,
  },
  {
    sl: 6,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Apollo Gleneagles Hospital",
    __EMPTY_2: 78,
    __EMPTY_3: 1,
  },
  {
    sl: 7,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Apollo Gleneagles Hospital -{Satellite facility}",
    __EMPTY_2: 65,
    __EMPTY_3: 0,
  },
  {
    sl: 8,
    __EMPTY: "Kolkata",
    __EMPTY_1: "B P Poddar",
    __EMPTY_2: 98,
    __EMPTY_3: 0,
  },
  {
    sl: 9,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Belle Vue Clinic",
    __EMPTY_2: 129,
    __EMPTY_3: 43,
  },
  {
    sl: 10,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Belle Vue Clinic -{Satellite facility}",
    __EMPTY_2: 25,
    __EMPTY_3: 15,
  },
  {
    sl: 11,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "Bhagirathi Neotia Hospital, Newtown",
    __EMPTY_2: 2,
    __EMPTY_3: 2,
  },
  {
    sl: 12,
    __EMPTY: "Kolkata",
    __EMPTY_1: "BMRC",
    __EMPTY_2: 12,
    __EMPTY_3: 0,
  },
  {
    sl: 13,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Calcutta Heart Clinic, Salt Lake",
    __EMPTY_2: 30,
    __EMPTY_3: 0,
  },
  {
    sl: 14,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Calcutta Heart Clinic, Salt Lake -{Satellite facility}",
    __EMPTY_2: 25,
    __EMPTY_3: 7,
  },
  {
    sl: 15,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Centenary Hospital, SMP, KoPT",
    __EMPTY_2: 40,
    __EMPTY_3: 0,
  },
  {
    sl: 16,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Centenary Hospital, SMP, KoPT -{Satellite facility}",
    __EMPTY_2: 30,
    __EMPTY_3: 10,
  },

  {
    sl: 18,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "Charnock Hospital  -{Satellite facility}",
    __EMPTY_2: 19,
    __EMPTY_3: 16,
  },
  {
    sl: 19,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Charring Cross",
    __EMPTY_2: 38,
    __EMPTY_3: 3,
  },
  {
    sl: 20,
    __EMPTY: "Kolkata",
    __EMPTY_1: "CMRI",
    __EMPTY_2: 84,
    __EMPTY_3: 11,
  },
  {
    sl: 21,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Columbia Asia Hospital, Salt Lake",
    __EMPTY_2: 12,
    __EMPTY_3: 0,
  },
  {
    sl: 22,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Columbia Asia Hospital, Salt Lake -{Satellite facility}",
    __EMPTY_2: 59,
    __EMPTY_3: 56,
  },
  {
    sl: 23,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "Dafodil Hospital",
    __EMPTY_2: 58,
    __EMPTY_3: 0,
  },
  {
    sl: 24,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Divine Nursing Home",
    __EMPTY_2: 25,
    __EMPTY_3: 6,
  },
  {
    sl: 25,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Dream Land Nursing Home",
    __EMPTY_2: 16,
    __EMPTY_3: 2,
  },
  {
    sl: 26,
    __EMPTY: "Kolkata",
    __EMPTY_1: "EEDF Medicare Centre (Sri Aurobindo)",
    __EMPTY_2: 30,
    __EMPTY_3: 0,
  },
  {
    sl: 27,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Ekbalpur Nursing Home",
    __EMPTY_2: 43,
    __EMPTY_3: 35,
  },
  {
    sl: 28,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Eskag Sanjeevani Hospital, BagBazar",
    __EMPTY_2: 16,
    __EMPTY_3: 3,
  },
  {
    sl: 29,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Fortis Hospital",
    __EMPTY_2: 58,
    __EMPTY_3: 0,
  },
  {
    sl: 30,
    __EMPTY: "Kolkata",
    __EMPTY_1: "GD Hospital & Diabetes Institute",
    __EMPTY_2: 16,
    __EMPTY_3: 2,
  },
  {
    sl: 31,
    __EMPTY: "Kolkata",
    __EMPTY_1: "GD Hospital & Diabetes Institute -{Satellite facility}",
    __EMPTY_2: 18,
    __EMPTY_3: 11,
  },
  {
    sl: 32,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Genesis Hospital [for COVID Suspect patients only]",
    __EMPTY_2: 4,
    __EMPTY_3: 0,
  },
  {
    sl: 33,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Health Point Nursing Home",
    __EMPTY_2: 7,
    __EMPTY_3: 0,
  },
  {
    sl: 34,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "ILS Dumdum",
    __EMPTY_2: 76,
    __EMPTY_3: 0,
  },
  {
    sl: 35,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "ILS Dumdum -{Satellite facility}",
    __EMPTY_2: 72,
    __EMPTY_3: 14,
  },
  {
    sl: 36,
    __EMPTY: "Kolkata",
    __EMPTY_1: "INK Kolkata",
    __EMPTY_2: 4,
    __EMPTY_3: 0,
  },
  {
    sl: 37,
    __EMPTY: "Kolkata",
    __EMPTY_1: "IRIS Hospital",
    __EMPTY_2: 10,
    __EMPTY_3: 10,
  },
  {
    sl: 38,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Khudiram Hospital",
    __EMPTY_2: 13,
    __EMPTY_3: 13,
  },
  {
    sl: 39,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Kothari Medical Centre",
    __EMPTY_2: 137,
    __EMPTY_3: 7,
  },
  {
    sl: 40,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Marwari Relief Society",
    __EMPTY_2: 31,
    __EMPTY_3: 0,
  },
  {
    sl: 41,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Medica Super Specialty Hospital",
    __EMPTY_2: 132,
    __EMPTY_3: 2,
  },
  {
    sl: 42,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Medica Super Specialty Hospital -{Satellite facility}",
    __EMPTY_2: 52,
    __EMPTY_3: 34,
  },
  {
    sl: 43,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Mercy Hospital",
    __EMPTY_2: 40,
    __EMPTY_3: 5,
  },
  {
    sl: 44,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Nabajiban Hospital Pvt. Ltd.",
    __EMPTY_2: 29,
    __EMPTY_3: 23,
  },
  {
    sl: 45,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Nightingale Hospital",
    __EMPTY_2: 3,
    __EMPTY_3: 1,
  },
  {
    sl: 46,
    __EMPTY: "Kolkata",
    __EMPTY_1: "North City Hospital",
    __EMPTY_2: 26,
    __EMPTY_3: 0,
  },
  {
    sl: 47,
    __EMPTY: "Kolkata",
    __EMPTY_1: "OHIO Hospital",
    __EMPTY_2: 22,
    __EMPTY_3: 8,
  },
  {
    sl: 48,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Peerless Hospital",
    __EMPTY_2: 100,
    __EMPTY_3: 0,
  },
  {
    sl: 49,
    __EMPTY: "Kolkata",
    __EMPTY_1: "R N Tagore IICS",
    __EMPTY_2: 93,
    __EMPTY_3: 0,
  },
  {
    sl: 50,
    __EMPTY: "Kolkata",
    __EMPTY_1: "R N Tagore IICS -{Satellite facility}",
    __EMPTY_2: 52,
    __EMPTY_3: 16,
  },
  {
    sl: 51,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Remedy Hospital",
    __EMPTY_2: 37,
    __EMPTY_3: 1,
  },
  {
    sl: 52,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Royd Nursing Home",
    __EMPTY_2: 6,
    __EMPTY_3: 6,
  },
  {
    sl: 53,
    __EMPTY: "Kolkata",
    __EMPTY_1: "RSV Hospital",
    __EMPTY_2: 12,
    __EMPTY_3: 1,
  },
  {
    sl: 54,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Ruby General Hospital",
    __EMPTY_2: 60,
    __EMPTY_3: 0,
  },
  {
    sl: 55,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Shushrusha NH",
    __EMPTY_2: 17,
    __EMPTY_3: 0,
  },
  {
    sl: 56,
    __EMPTY: "N-24 Pgs",
    __EMPTY_1: "Spandan, Teghoria",
    __EMPTY_2: 15,
    __EMPTY_3: 0,
  },
  {
    sl: 57,
    __EMPTY: "Kolkata",
    __EMPTY_1: "SVS Marwari",
    __EMPTY_2: 20,
    __EMPTY_3: 4,
  },
  {
    sl: 58,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Tata Medical Centre, Newtown [Treats only COVID positive Cancer Patients]",
    __EMPTY_2: 15,
    __EMPTY_3: 0,
  },
  {
    sl: 59,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Woodlands Multispecialty Hospital",
    __EMPTY_2: 67,
    __EMPTY_3: 0,
  },
  {
    sl: 60,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Woodlands Multispecialty Hospital -{Satellite facility}",
    __EMPTY_2: 54,
    __EMPTY_3: 20,
  },
  {
    sl: 61,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Zenith super specialist Hospital",
    __EMPTY_2: 15,
    __EMPTY_3: 0,
  },
  {
    sl: 62,
    __EMPTY: "Kolkata",
    __EMPTY_1: "Zodiac Medicare Pvt. Ltd. (Flemming Nursing Home)",
    __EMPTY_2: 50,
    __EMPTY_3: 0,
  },
];

export default hospitalData;
