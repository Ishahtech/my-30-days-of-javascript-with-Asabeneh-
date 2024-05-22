// # Exercises: Level 3
// // Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// // Add Bootstrap with level 8 to the front end skill sets
// // Add Express with level 9 to the back end skill sets
// // Add SQL with level 8 to the data base skill sets
// // Add SQL without level to the data science skill sets
//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
// // The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }


const countries_data = [
	{
			"name": "Afghanistan",
			"capital": "Kabul",
			"languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
			"population": 40218234,
			"flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
			"region": "Asia",
			"area": 652230
	},
	{
			"name": "Antarctica",
			"languages": [
					"English",
					"Russian"
			],
			"population": 1000,
			"flag": "https://flagcdn.com/aq.svg",
			"region": "Polar",
			"area": 14000000
	},
	{
			"name": "Antigua and Barbuda",
			"capital": "Saint John's",
			"languages": [
					"English"
			],
			"population": 97928,
			"flag": "https://flagcdn.com/ag.svg",
			"region": "Americas",
			"area": 442
	},
	{
			"name": "Argentina",
			"capital": "Buenos Aires",
			"languages": [
					"Spanish",
					"Guaraní"
			],
			"population": 45376763,
			"flag": "https://flagcdn.com/ar.svg",
			"region": "Americas",
			"area": 2780400
	},
	{
			"name": "Armenia",
			"capital": "Yerevan",
			"languages": [
					"Armenian"
			],
			"population": 2963234,
			"flag": "https://flagcdn.com/am.svg",
			"region": "Asia",
			"area": 29743
	},
	{
			"name": "Aruba",
			"capital": "Oranjestad",
			"languages": [
					"Dutch",
					"(Eastern) Punjabi"
			],
			"population": 106766,
			"flag": "https://flagcdn.com/aw.svg",
			"region": "Americas",
			"area": 180
	},
	{
			"name": "Australia",
			"capital": "Canberra",
			"languages": [
					"English"
			],
			"population": 25687041,
			"flag": "https://flagcdn.com/au.svg",
			"region": "Oceania",
			"area": 7692024
	},
	{
			"name": "Austria",
			"capital": "Vienna",
			"languages": [
					"German"
			],
			"population": 8917205,
			"flag": "https://flagcdn.com/at.svg",
			"region": "Europe",
			"area": 83871
	},
	{
			"name": "Bahamas",
			"capital": "Nassau",
			"languages": [
					"English"
			],
			"population": 393248,
			"flag": "https://flagcdn.com/bs.svg",
			"region": "Americas",
			"area": 13943
	},
	{
			"name": "Bahrain",
			"capital": "Manama",
			"languages": [
					"Arabic"
			],
			"population": 1701583,
			"flag": "https://flagcdn.com/bh.svg",
			"region": "Asia",
			"area": 765
	},
	{
			"name": "Bangladesh",
			"capital": "Dhaka",
			"languages": [
					"Bengali"
			],
			"population": 164689383,
			"flag": "https://flagcdn.com/bd.svg",
			"region": "Asia",
			"area": 147570
	},
	{
			"name": "Barbados",
			"capital": "Bridgetown",
			"languages": [
					"English"
			],
			"population": 287371,
			"flag": "https://flagcdn.com/bb.svg",
			"region": "Americas",
			"area": 430
	},
	{
			"name": "Belarus",
			"capital": "Minsk",
			"languages": [
					"Belarusian",
					"Russian"
			],
			"population": 9398861,
			"flag": "https://flagcdn.com/by.svg",
			"region": "Europe",
			"area": 207600
	},
	{
			"name": "Belgium",
			"capital": "Brussels",
			"languages": [
					"Dutch",
					"French",
					"German"
			],
			"population": 11555997,
			"flag": "https://flagcdn.com/be.svg",
			"region": "Europe",
			"area": 30528
	},
	{
			"name": "Belize",
			"capital": "Belmopan",
			"languages": [
					"English",
					"Spanish"
			],
			"population": 397621,
			"flag": "https://flagcdn.com/bz.svg",
			"region": "Americas",
			"area": 22966
	},
	{
			"name": "Benin",
			"capital": "Porto-Novo",
			"languages": [
					"French"
			],
			"population": 12123198,
			"flag": "https://flagcdn.com/bj.svg",
			"region": "Africa",
			"area": 112622
	},
	{
			"name": "Bermuda",
			"capital": "Hamilton",
			"languages": [
					"English"
			],
			"population": 63903,
			"flag": "https://flagcdn.com/bm.svg",
			"region": "Americas",
			"area": 54
	},
	{
			"name": "Bhutan",
			"capital": "Thimphu",
			"languages": [
					"Dzongkha"
			],
			"population": 771612,
			"flag": "https://flagcdn.com/bt.svg",
			"region": "Asia",
			"area": 38394
	},
	{
			"name": "Bolivia (Plurinational State of)",
			"capital": "Sucre",
			"languages": [
					"Spanish",
					"Aymara",
					"Quechua"
			],
			"population": 11673029,
			"flag": "https://flagcdn.com/bo.svg",
			"region": "Americas",
			"area": 1098581
	},
	{
			"name": "Bonaire, Sint Eustatius and Saba",
			"capital": "Kralendijk",
			"languages": [
					"Dutch"
			],
			"population": 17408,
			"flag": "https://flagcdn.com/bq.svg",
			"region": "Americas",
			"area": 294
	},
	{
			"name": "Bosnia and Herzegovina",
			"capital": "Sarajevo",
			"languages": [
					"Bosnian",
					"Croatian",
					"Serbian"
			],
			"population": 3280815,
			"flag": "https://flagcdn.com/ba.svg",
			"region": "Europe",
			"area": 51209
	},
	{
			"name": "Botswana",
			"capital": "Gaborone",
			"languages": [
					"English",
					"Tswana"
			],
			"population": 2351625,
			"flag": "https://flagcdn.com/bw.svg",
			"region": "Africa",
			"area": 582000
	},
	{
			"name": "Bouvet Island",
			"languages": [
					"Norwegian",
					"Norwegian Bokmål",
					"Norwegian Nynorsk"
			],
			"population": 0,
			"flag": "https://flagcdn.com/bv.svg",
			"region": "Antarctic Ocean",
			"area": 49
	},
	{
			"name": "Brazil",
			"capital": "Brasília",
			"languages": [
					"Portuguese"
			],
			"population": 212559409,
			"flag": "https://flagcdn.com/br.svg",
			"region": "Americas",
			"area": 8515767
	},
	{
			"name": "British Indian Ocean Territory",
			"capital": "Diego Garcia",
			"languages": [
					"English"
			],
			"population": 3000,
			"flag": "https://flagcdn.com/io.svg",
			"region": "Africa",
			"area": 60
	},
	{
			"name": "United States Minor Outlying Islands",
			"languages": [
					"English"
			],
			"population": 300,
			"flag": "https://flagcdn.com/um.svg",
			"region": "Americas"
	},
	{
			"name": "Virgin Islands (British)",
			"capital": "Road Town",
			"languages": [
					"English"
			],
			"population": 30237,
			"flag": "https://flagcdn.com/vg.svg",
			"region": "Americas",
			"area": 151
	},
	{
			"name": "Virgin Islands (U.S.)",
			"capital": "Charlotte Amalie",
			"languages": [
					"English"
			],
			"population": 106290,
			"flag": "https://flagcdn.com/vi.svg",
			"region": "Americas",
			"area": 346.36
	},
	{
			"name": "Brunei Darussalam",
			"capital": "Bandar Seri Begawan",
			"languages": [
					"Malay"
			],
			"population": 437483,
			"flag": "https://flagcdn.com/bn.svg",
			"region": "Asia",
			"area": 5765
	},
	{
			"name": "Bulgaria",
			"capital": "Sofia",
			"languages": [
					"Bulgarian"
			],
			"population": 6927288,
			"flag": "https://flagcdn.com/bg.svg",
			"region": "Europe",
			"area": 110879
	},
	{
			"name": "Burkina Faso",
			"capital": "Ouagadougou",
			"languages": [
					"French",
					"Fula"
			],
			"population": 20903278,
			"flag": "https://flagcdn.com/bf.svg",
			"region": "Africa",
			"area": 272967
	},
	{
			"name": "Burundi",
			"capital": "Gitega",
			"languages": [
					"French",
					"Kirundi"
			],
			"population": 11890781,
			"flag": "https://flagcdn.com/bi.svg",
			"region": "Africa",
			"area": 27834
	},
	{
			"name": "Cambodia",
			"capital": "Phnom Penh",
			"languages": [
					"Khmer"
			],
			"population": 16718971,
			"flag": "https://flagcdn.com/kh.svg",
			"region": "Asia",
			"area": 181035
	},
	{
			"name": "Cameroon",
			"capital": "Yaoundé",
			"languages": [
					"English",
					"French"
			],
			"population": 26545864,
			"flag": "https://flagcdn.com/cm.svg",
			"region": "Africa",
			"area": 475442
	},
	{
			"name": "Canada",
			"capital": "Ottawa",
			"languages": [
					"English",
					"French"
			],
			"population": 38005238,
			"flag": "https://flagcdn.com/ca.svg",
			"region": "Americas",
			"area": 9984670
	},
	{
			"name": "Cabo Verde",
			"capital": "Praia",
			"languages": [
					"Portuguese"
			],
			"population": 555988,
			"flag": "https://flagcdn.com/cv.svg",
			"region": "Africa",
			"area": 4033
	},
	{
			"name": "Cayman Islands",
			"capital": "George Town",
			"languages": [
					"English"
			],
			"population": 65720,
			"flag": "https://flagcdn.com/ky.svg",
			"region": "Americas",
			"area": 264
	},
	{
			"name": "Central African Republic",
			"capital": "Bangui",
			"languages": [
					"French",
					"Sango"
			],
			"population": 4829764,
			"flag": "https://flagcdn.com/cf.svg",
			"region": "Africa",
			"area": 622984
	},
	{
			"name": "Chad",
			"capital": "N'Djamena",
			"languages": [
					"French",
					"Arabic"
			],
			"population": 16425859,
			"flag": "https://flagcdn.com/td.svg",
			"region": "Africa",
			"area": 1284000
	},
	{
			"name": "Chile",
			"capital": "Santiago",
			"languages": [
					"Spanish"
			],
			"population": 19116209,
			"flag": "https://flagcdn.com/cl.svg",
			"region": "Americas",
			"area": 756102
	},
	{
			"name": "China",
			"capital": "Beijing",
			"languages": [
					"Chinese"
			],
			"population": 1402112000,
			"flag": "https://flagcdn.com/cn.svg",
			"region": "Asia",
			"area": 9640011
	},
	{
			"name": "Christmas Island",
			"capital": "Flying Fish Cove",
			"languages": [
					"English"
			],
			"population": 2072,
			"flag": "https://flagcdn.com/cx.svg",
			"region": "Oceania",
			"area": 135
	},
	{
			"name": "Cocos (Keeling) Islands",
			"capital": "West Island",
			"languages": [
					"English"
			],
			"population": 550,
			"flag": "https://flagcdn.com/cc.svg",
			"region": "Oceania",
			"area": 14
	},
	{
			"name": "Colombia",
			"capital": "Bogotá",
			"languages": [
					"Spanish"
			],
			"population": 50882884,
			"flag": "https://flagcdn.com/co.svg",
			"region": "Americas",
			"area": 1141748
	},
	{
			"name": "Israel",
			"capital": "Jerusalem",
			"languages": [
					"Hebrew (modern)",
					"Arabic"
			],
			"population": 9216900,
			"flag": "https://flagcdn.com/il.svg",
			"region": "Asia",
			"area": 20770
	},
	{
			"name": "Italy",
			"capital": "Rome",
			"languages": [
					"Italian"
			],
			"population": 59554023,
			"flag": "https://flagcdn.com/it.svg",
			"region": "Europe",
			"area": 301336
	},
	{
			"name": "Jamaica",
			"capital": "Kingston",
			"languages": [
					"English"
			],
			"population": 2961161,
			"flag": "https://flagcdn.com/jm.svg",
			"region": "Americas",
			"area": 10991
	},
	{
			"name": "Japan",
			"capital": "Tokyo",
			"languages": [
					"Japanese"
			],
			"population": 125836021,
			"flag": "https://flagcdn.com/jp.svg",
			"region": "Asia",
			"area": 377930
	},
	{
			"name": "Jersey",
			"capital": "Saint Helier",
			"languages": [
					"English",
					"French"
			],
			"population": 100800,
			"flag": "https://flagcdn.com/je.svg",
			"region": "Europe",
			"area": 116
	},
	{
			"name": "Jordan",
			"capital": "Amman",
			"languages": [
					"Arabic"
			],
			"population": 10203140,
			"flag": "https://flagcdn.com/jo.svg",
			"region": "Asia",
			"area": 89342
	},
	{
			"name": "Kazakhstan",
			"capital": "Nur-Sultan",
			"languages": [
					"Kazakh",
					"Russian"
			],
			"population": 18754440,
			"flag": "https://flagcdn.com/kz.svg",
			"region": "Asia",
			"area": 2724900
	},
	{
			"name": "Kenya",
			"capital": "Nairobi",
			"languages": [
					"English",
					"Swahili"
			],
			"population": 53771300,
			"flag": "https://flagcdn.com/ke.svg",
			"region": "Africa",
			"area": 580367
	},
	{
			"name": "Kiribati",
			"capital": "South Tarawa",
			"languages": [
					"English"
			],
			"population": 119446,
			"flag": "https://flagcdn.com/ki.svg",
			"region": "Oceania",
			"area": 811
	},
	{
			"name": "Kuwait",
			"capital": "Kuwait City",
			"languages": [
					"Arabic"
			],
			"population": 4270563,
			"flag": "https://flagcdn.com/kw.svg",
			"region": "Asia",
			"area": 17818
	},
	{
			"name": "Kyrgyzstan",
			"capital": "Bishkek",
			"languages": [
					"Kyrgyz",
					"Russian"
			],
			"population": 6591600,
			"flag": "https://flagcdn.com/kg.svg",
			"region": "Asia",
			"area": 199951
	},
	{
			"name": "Lao People's Democratic Republic",
			"capital": "Vientiane",
			"languages": [
					"Lao"
			],
			"population": 7275556,
			"flag": "https://flagcdn.com/la.svg",
			"region": "Asia",
			"area": 236800
	},
	{
			"name": "Latvia",
			"capital": "Riga",
			"languages": [
					"Latvian"
			],
			"population": 1901548,
			"flag": "https://flagcdn.com/lv.svg",
			"region": "Europe",
			"area": 64559
	},
	{
			"name": "Lebanon",
			"capital": "Beirut",
			"languages": [
					"Arabic",
					"French"
			],
			"population": 6825442,
			"flag": "https://flagcdn.com/lb.svg",
			"region": "Asia",
			"area": 10452
	},
	{
			"name": "Lesotho",
			"capital": "Maseru",
			"languages": [
					"English",
					"Southern Sotho"
			],
			"population": 2142252,
			"flag": "https://flagcdn.com/ls.svg",
			"region": "Africa",
			"area": 30355
	},
	{
			"name": "Liberia",
			"capital": "Monrovia",
			"languages": [
					"English"
			],
			"population": 5057677,
			"flag": "https://flagcdn.com/lr.svg",
			"region": "Africa",
			"area": 111369
	},
	{
			"name": "Libya",
			"capital": "Tripoli",
			"languages": [
					"Arabic"
			],
			"population": 6871287,
			"flag": "https://flagcdn.com/ly.svg",
			"region": "Africa",
			"area": 1759540
	},
	{
			"name": "Liechtenstein",
			"capital": "Vaduz",
			"languages": [
					"German"
			],
			"population": 38137,
			"flag": "https://flagcdn.com/li.svg",
			"region": "Europe",
			"area": 160
	},
	{
			"name": "Lithuania",
			"capital": "Vilnius",
			"languages": [
					"Lithuanian"
			],
			"population": 2794700,
			"flag": "https://flagcdn.com/lt.svg",
			"region": "Europe",
			"area": 65300
	},
	{
			"name": "Luxembourg",
			"capital": "Luxembourg",
			"languages": [
					"French",
					"German",
					"Luxembourgish"
			],
			"population": 632275,
			"flag": "https://flagcdn.com/lu.svg",
			"region": "Europe",
			"area": 2586
	},
	{
			"name": "Macao",
			"languages": [
					"Chinese",
					"Portuguese"
			],
			"population": 649342,
			"flag": "https://flagcdn.com/mo.svg",
			"region": "Asia",
			"area": 30
	},
	{
			"name": "North Macedonia",
			"capital": "Skopje",
			"languages": [
					"Macedonian"
			],
			"population": 2083380,
			"flag": "https://flagcdn.com/mk.svg",
			"region": "Europe",
			"area": 25713
	},
	{
			"name": "Madagascar",
			"capital": "Antananarivo",
			"languages": [
					"French",
					"Malagasy"
			],
			"population": 27691019,
			"flag": "https://flagcdn.com/mg.svg",
			"region": "Africa",
			"area": 587041
	},
	{
			"name": "Malawi",
			"capital": "Lilongwe",
			"languages": [
					"English",
					"Chichewa"
			],
			"population": 19129955,
			"flag": "https://flagcdn.com/mw.svg",
			"region": "Africa",
			"area": 118484
	},
	{
			"name": "Malaysia",
			"capital": "Kuala Lumpur",
			"languages": [
					"Malaysian"
			],
			"population": 32365998,
			"flag": "https://flagcdn.com/my.svg",
			"region": "Asia",
			"area": 330803
	},
	{
			"name": "Maldives",
			"capital": "Malé",
			"languages": [
					"Divehi"
			],
			"population": 540542,
			"flag": "https://flagcdn.com/mv.svg",
			"region": "Asia",
			"area": 300
	},
	{
			"name": "Mali",
			"capital": "Bamako",
			"languages": [
					"French"
			],
			"population": 20250834,
			"flag": "https://flagcdn.com/ml.svg",
			"region": "Africa",
			"area": 1240192
	},
	{
			"name": "Malta",
			"capital": "Valletta",
			"languages": [
					"Maltese",
					"English"
			],
			"population": 525285,
			"flag": "https://flagcdn.com/mt.svg",
			"region": "Europe",
			"area": 316
	},
	{
			"name": "Marshall Islands",
			"capital": "Majuro",
			"languages": [
					"English",
					"Marshallese"
			],
			"population": 59194,
			"flag": "https://flagcdn.com/mh.svg",
			"region": "Oceania",
			"area": 181
	},
	{
			"name": "Martinique",
			"capital": "Fort-de-France",
			"languages": [
					"French"
			],
			"population": 378243,
			"flag": "https://flagcdn.com/mq.svg",
			"region": "Americas"
	},
	{
			"name": "Mauritania",
			"capital": "Nouakchott",
			"languages": [
					"Arabic"
			],
			"population": 4649660,
			"flag": "https://flagcdn.com/mr.svg",
			"region": "Africa",
			"area": 1030700
	},
	{
			"name": "Mauritius",
			"capital": "Port Louis",
			"languages": [
					"English"
			],
			"population": 1265740,
			"flag": "https://flagcdn.com/mu.svg",
			"region": "Africa",
			"area": 2040
	},
	{
			"name": "Mayotte",
			"capital": "Mamoudzou",
			"languages": [
					"French"
			],
			"population": 226915,
			"flag": "https://flagcdn.com/yt.svg",
			"region": "Africa"
	},
	{
			"name": "Mexico",
			"capital": "Mexico City",
			"languages": [
					"Spanish"
			],
			"population": 128932753,
			"flag": "https://flagcdn.com/mx.svg",
			"region": "Americas",
			"area": 1964375
	},
	{
			"name": "Micronesia (Federated States of)",
			"capital": "Palikir",
			"languages": [
					"English"
			],
			"population": 115021,
			"flag": "https://flagcdn.com/fm.svg",
			"region": "Oceania",
			"area": 702
	},
	{
			"name": "Moldova (Republic of)",
			"capital": "Chișinău",
			"languages": [
					"Romanian"
			],
			"population": 2617820,
			"flag": "https://flagcdn.com/md.svg",
			"region": "Europe",
			"area": 33846
	},
	{
			"name": "Monaco",
			"capital": "Monaco",
			"languages": [
					"French"
			],
			"population": 39244,
			"flag": "https://flagcdn.com/mc.svg",
			"region": "Europe",
			"area": 2.02
	},
	{
			"name": "Mongolia",
			"capital": "Ulan Bator",
			"languages": [
					"Mongolian"
			],
			"population": 3278292,
			"flag": "https://flagcdn.com/mn.svg",
			"region": "Asia",
			"area": 1564110
	},
	{
			"name": "Montenegro",
			"capital": "Podgorica",
			"languages": [
					"Serbian",
					"Bosnian",
					"Albanian",
					"Croatian"
			],
			"population": 621718,
			"flag": "https://flagcdn.com/me.svg",
			"region": "Europe",
			"area": 13812
	},
	{
			"name": "Montserrat",
			"capital": "Plymouth",
			"languages": [
					"English"
			],
			"population": 4922,
			"flag": "https://flagcdn.com/ms.svg",
			"region": "Americas",
			"area": 102
	},
	{
			"name": "Morocco",
			"capital": "Rabat",
			"languages": [
					"Arabic"
			],
			"population": 36910558,
			"flag": "https://flagcdn.com/ma.svg",
			"region": "Africa",
			"area": 446550
	},
	{
			"name": "Mozambique",
			"capital": "Maputo",
			"languages": [
					"Portuguese"
			],
			"population": 31255435,
			"flag": "https://flagcdn.com/mz.svg",
			"region": "Africa",
			"area": 801590
	},
	{
			"name": "Myanmar",
			"capital": "Naypyidaw",
			"languages": [
					"Burmese"
			],
			"population": 54409794,
			"flag": "https://flagcdn.com/mm.svg",
			"region": "Asia",
			"area": 676578
	},
	{
			"name": "Namibia",
			"capital": "Windhoek",
			"languages": [
					"English",
					"Afrikaans"
			],
			"population": 2540916,
			"flag": "https://flagcdn.com/na.svg",
			"region": "Africa",
			"area": 825615
	},
	{
			"name": "Nauru",
			"capital": "Yaren",
			"languages": [
					"English",
					"Nauruan"
			],
			"population": 10834,
			"flag": "https://flagcdn.com/nr.svg",
			"region": "Oceania",
			"area": 21
	},
	{
			"name": "Nepal",
			"capital": "Kathmandu",
			"languages": [
					"Nepali"
			],
			"population": 29136808,
			"flag": "https://flagcdn.com/np.svg",
			"region": "Asia",
			"area": 147181
	},
	{
			"name": "Netherlands",
			"capital": "Amsterdam",
			"languages": [
					"Dutch"
			],
			"population": 17441139,
			"flag": "https://flagcdn.com/nl.svg",
			"region": "Europe",
			"area": 41850
	},
	{
			"name": "New Caledonia",
			"capital": "Nouméa",
			"languages": [
					"French"
			],
			"population": 271960,
			"flag": "https://flagcdn.com/nc.svg",
			"region": "Oceania",
			"area": 18575
	},
	{
			"name": "New Zealand",
			"capital": "Wellington",
			"languages": [
					"English",
					"Māori"
			],
			"population": 5084300,
			"flag": "https://flagcdn.com/nz.svg",
			"region": "Oceania",
			"area": 270467
	},
	{
			"name": "Nicaragua",
			"capital": "Managua",
			"languages": [
					"Spanish"
			],
			"population": 6624554,
			"flag": "https://flagcdn.com/ni.svg",
			"region": "Americas",
			"area": 130373
	},
	{
			"name": "Niger",
			"capital": "Niamey",
			"languages": [
					"French"
			],
			"population": 24206636,
			"flag": "https://flagcdn.com/ne.svg",
			"region": "Africa",
			"area": 1267000
	},
	{
			"name": "Nigeria",
			"capital": "Abuja",
			"languages": [
					"English"
			],
			"population": 206139587,
			"flag": "https://flagcdn.com/ng.svg",
			"region": "Africa",
			"area": 923768
	}
]
//1
// Destructure the countries object print name, capital, population and languages of all countries
for (const {name, capital, population, languages} of countries_data ){
    console.log(name, capital, population, languages)
}
//2
// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
// Destructure the following array name to name, skills array to skills, scores array to scores, 
//JavaScript score to jsScore and React score to reactScore variable in one line.

  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  const [name, skills, scores] = student
  if ( jsScore = scores[2], reactScore = scores[3]){
    console.log(name, (skills.length), skills, jsScore, reactScore)
  }
       
