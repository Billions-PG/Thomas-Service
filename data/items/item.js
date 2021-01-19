const faker = require('faker');

const idNumber = [
  '899', '900', '901', '902', '903', '904', '905', '906',
  '907', '908', '909', '910', '911', '912', '913', '914',
  '915', '916', '917', '918', '919', '920', '921', '922',
  '923', '924', '925', '926', '927', '928', '929', '930',
  '931', '932', '933', '934', '935', '936', '937', '938',
  '939', '940', '941', '942', '943', '944', '945', '946',
  '947', '948', '949', '950', '951', '952', '953', '954',
  '955', '956', '957', '958', '959', '960', '961', '962',
  '963', '964', '965', '966', '967', '968', '969', '970',
  '971', '972', '973', '974', '975', '976', '977', '978',
  '979', '980', '981', '982', '983', '984', '985', '986',
  '987', '988', '989', '990', '991', '992', '993', '994',
  '995', '996', '997', '998',
];

const productName = [
  'monitor needs-based enable hat',
  'Zealand shoes',
  'Guinea sweater',
  'encryption hat',
  'Grass-roots sweater',
  'Squares shirt',
  'Home sweater',
  'user-facing deliverables shorts',
  '24/7 Table pants',
  'wireless Clothing grey long-sleeve',
  'deposit shorts',
  'Mouse CSS t-shirt',
  'Keyboard solutions array pants',
  'Fresh Fresh invoice pull-over',
  'infomediaries zero shorts',
  'payment long-sleeve',
  'Emirates Global sweater',
  'throughput functionalities Soap t-shirt',
  'protocol Identity Plastic shoes',
  'framework shoes',
  'backing Baby long-sleeve',
  'e-services Lead grey sweater',
  'Senior Configuration blazer',
  'framework hat',
  'invoice Oregon shoes',
  'niches shoes',
  'synthesize fresh-thinking Implementation pull-over',
  'overriding t-shirt',
  'Metal Regional shirt',
  'panel calculate tee',
  'Buckinghamshire Car Samoa pull-over',
  'Kina hat',
  'Regional supply-chains Fresh pull-over',
  'back-end t-shirt',
  'solid tee',
  'maroon optimize t-shirt',
  'mesh wireless sweater',
  'Technician navigating Applications hat',
  'Intelligent sweater',
  'invoice California t-shirt',
  'empower blazer',
  'Shoes shoes',
  'Handcrafted Rhode Research pants',
  'forecast Enhanced hat',
  'Plastic Handcrafted sweater',
  'Baby Hampshire America pull-over',
  'port Manager sweater',
  'Bermuda suit',
  'indigo responsive hat',
  'Bacon architecture Games blazer',
  'revolutionary suit',
  'Uganda payment orchestrate hat',
  'AI shoes',
  'turquoise suit',
  'Bedfordshire shoes',
  'bus Salad pants',
  'Texas pants',
  'New dynamic t-shirt',
  'Bfaker.helpers.randomize shirt',
  'Decentralized Future THX shorts',
  'Drives shirt',
  'International Customer Guernsey shorts',
  "Indonesia Pa'anga action-items shoes",
  'Health Salad hat',
  'Minnesota primary sweater',
  'Chips digital pull-over',
  'Iceland tee',
  'intangible shorts',
  'Chicken tee',
  'bypass tee',
  'Hills shirt',
  'Gorgeous Delaware tee',
  'deliver Djibouti pull-over',
  'Iranian Auto Arkansas hat',
  'silver driver Anguilla sweater',
  'connecting Creative pants',
  'Kansas t-shirt',
  'Cambridgeshire program Borders shorts',
  'SMS tee',
  'U.S. Cameroon Security pull-over',
  'salmon teal hat',
  'Table XML needs-based sweater',
  'Terrace pants',
  'Burundi blazer',
  'Sleek long-sleeve',
  'Dollar Configurable Dollar shorts',
  'RAM auxiliary t-shirt',
  'Steel shirt',
  'portal Marketing shirt',
  'Poland Customer monitoring pull-over',
  'withdrawal lime reinvent t-shirt',
  'Rubber repurpose Ball suit',
  'Intelligent Bike Shoes shoes',
  'Wooden Pataca pull-over',
  'Concrete Chad sweater',
  'Croatian navigating long-sleeve',
  'Ergonomic Manager payment sweater',
  'York incentivize tee',
  'transmit Dynamic Pants pants',
  'invoice navigate pants',
];

const shopNames = [
  'rusticRepublic',
  'sleekGlobal',
  'tastyShirtsRus',
  'refinedFashion',
  'intelligentFashion',
  'practicalGlobal',
  'fantasticFashion',
  'practicalGlobal',
  'awesomeDesign',
  'practicalFashion',
];

const priceValues = [
  95.75, 55.99, 33.75, 24.25, 21.75, 8.99, 0.25, 86.75, 72.99,
  52.25, 31.99, 2.25, 66, 38.75, 48, 10.25, 87.99, 8.99,
  62.99, 33.99, 31, 10.25, 75, 72.99, 94, 44.75, 32.75,
  27.99, 25.75, 86.25, 25.99, 11.25, 78.99, 21, 1.25, 39.99,
  80.75, 42, 26.99, 26.25, 27.75, 79.75, 53, 16.25, 39.25,
  50.99, 57.25, 78.25, 61.99, 54, 81.75, 21.99, 80.99, 5.75,
  31.25, 45.75, 93.99, 27, 61, 71, 56.75, 68.25, 47.75,
  3, 1.25, 90, 73.25, 84, 29, 17, 42.25, 44.25,
  3.99, 68.25, 2, 68.75, 38, 3, 77.75, 80.25, 11.25,
  26.75, 55.75, 46.99, 52, 31.75, 79.75, 38.75, 29.99, 25.75,
  97.99, 98.25, 93.75, 16.75, 91, 64.99, 83.25, 35.75, 86.25,
  54,
];

const shipping = ['', 'Free shipping elgible'];

const recommend = [
  [
    '970', '997', '949',
    '914', '998', '907',
    '936', '905', '935',
    '970', '906', '922',
    '927', '962', '954',
  ],
  ['919', '986', '978', '956', '919'],
  [
    '988', '923', '968',
    '965', '974', '955',
    '905', '993', '903',
    '950', '916', '946',
    '953',
  ],
  [
    '925', '950', '914',
    '955', '976', '903',
    '971', '995', '972',
    '928', '900', '968',
    '982', '991', '925',
    '954',
  ],
  [
    '952', '922',
    '983', '919',
    '982', '955',
    '948',
  ],
  [
    '969', '958',
    '899', '997',
    '931', '981',
    '997',
  ],
  [
    '951', '991', '899',
    '974', '979', '908',
    '997', '905', '914',
    '926', '904', '913',
  ],
  [
    '946', '912', '970',
    '954', '940', '993',
    '915', '903', '937',
    '933', '958', '997',
    '907', '923', '984',
    '937', '947',
  ],
  [
    '960', '934', '899',
    '918', '944', '925',
    '968', '967', '942',
    '990', '979', '915',
    '993', '959', '918',
  ],
  [
    '908', '938', '971',
    '992', '964', '917',
    '941', '998', '972',
    '964', '942', '971',
    '977',
  ],
  [
    '983', '967', '984',
    '974', '902', '914',
    '959', '924', '996',
    '938',
  ],
  ['978', '966', '939', '971'],
  [
    '954', '971', '967',
    '901', '939', '900',
    '977', '918', '975',
    '913', '971', '925',
    '972', '906', '911',
    '982',
  ],
  ['935', '961', '906', '969'],
  [
    '906', '993', '990',
    '946', '931', '981',
    '901', '910', '938',
    '931', '903', '922',
    '934',
  ],
  [
    '912', '938', '904',
    '995', '927', '992',
    '994', '951', '927',
    '937', '946',
  ],
  [
    '900', '914', '998',
    '994', '938', '979',
    '983', '917', '919',
    '978', '921', '934',
    '978', '901', '987',
  ],
  [
    '992', '911', '974',
    '929', '955', '984',
    '943', '997', '967',
    '927', '937', '947',
    '935', '975', '970',
    '985',
  ],
  [
    '958', '957', '963',
    '989', '964', '969',
    '943', '978', '973',
    '922', '962',
  ],
  [
    '899', '941', '966',
    '911', '904', '936',
    '982', '954', '906',
    '986', '992', '994',
    '984', '944', '900',
    '991', '934',
  ],
  ['976', '939', '947', '961', '918', '955'],
  [
    '952', '947', '924',
    '979', '961', '997',
    '987', '954', '904',
    '990', '902', '913',
    '960', '989', '994',
    '928', '903',
  ],
  ['952', '965', '906', '970', '913'],
  [
    '977', '931', '946',
    '975', '936', '938',
    '907', '935', '933',
    '952',
  ],
  ['969', '952', '972', '904', '901'],
  [
    '993', '923', '996',
    '971', '907', '978',
    '903', '982', '909',
    '911', '976', '919',
    '919',
  ],
  [
    '981', '989',
    '907', '995',
    '899', '961',
    '921', '957',
  ],
  ['963', '973', '993', '918', '960', '986'],
  [
    '911', '943', '929',
    '998', '961', '960',
    '944', '937', '948',
    '916', '973', '936',
    '937', '953', '974',
    '908',
  ],
  [
    '931', '997', '916',
    '937', '949', '904',
    '995', '904', '938',
    '954', '940', '914',
    '937', '927', '972',
  ],
  [
    '984', '991', '900',
    '943', '921', '905',
    '954', '912', '934',
    '954', '910', '903',
    '919', '970', '934',
  ],
  [
    '938', '913',
    '931', '998',
    '901', '916',
    '934',
  ],
  [
    '918', '911', '969',
    '958', '926', '980',
    '974', '947', '909',
    '975', '982', '931',
    '953', '992', '981',
  ],
  ['919', '942', '972', '986', '966'],
  [
    '977', '969', '961',
    '941', '997', '916',
    '970', '997', '991',
    '978', '900', '903',
    '947',
  ],
  ['998', '954', '992', '997', '982'],
  [
    '981', '974', '980',
    '950', '934', '914',
    '949', '983', '938',
    '924', '929', '960',
    '901', '972',
  ],
  [
    '998', '980', '971',
    '916', '989', '944',
    '982', '980', '982',
    '932', '927', '942',
    '900', '916', '909',
  ],
  [
    '942', '962', '971',
    '905', '970', '996',
    '923', '909', '918',
    '945', '925', '986',
    '907', '927',
  ],
  [
    '906', '903', '954',
    '943', '905', '924',
    '914', '926', '926',
    '957',
  ],
  [
    '916', '995',
    '971', '978',
    '982', '988',
    '909', '984',
  ],
  [
    '925', '992', '947',
    '963', '947', '938',
    '906', '982', '954',
    '949', '976', '953',
    '902', '996', '967',
  ],
  [
    '994', '904', '995',
    '953', '965', '909',
    '916', '926', '940',
    '968', '906', '913',
    '946', '935',
  ],
  [
    '942', '975', '997',
    '947', '952', '946',
    '984', '944', '957',
    '996', '964',
  ],
  [
    '951', '983', '915',
    '911', '952', '939',
    '976', '939', '948',
    '962', '921',
  ],
  [
    '966', '965',
    '936', '924',
    '938', '994',
    '906', '961',
  ],
  [
    '994', '922', '975',
    '927', '936', '961',
    '970', '936', '967',
    '912',
  ],
  [
    '899', '912', '993',
    '906', '963', '924',
    '963', '927', '945',
    '919', '990', '903',
    '924', '960', '947',
    '958', '961', '912',
  ],
  [
    '910', '952',
    '950', '966',
    '904', '965',
    '922',
  ],
  [
    '998', '986', '915',
    '991', '922', '901',
    '927', '968', '934',
    '959',
  ],
  [
    '993', '984', '910',
    '956', '995', '974',
    '913', '925', '943',
    '921', '980',
  ],
  [
    '915', '918', '947',
    '971', '988', '958',
    '920', '995', '902',
    '962', '910', '952',
    '955', '987', '985',
    '925', '919',
  ],
  [
    '980', '941', '971',
    '954', '952', '987',
    '921', '919', '921',
    '909',
  ],
  [
    '908', '934', '988',
    '908', '904', '935',
    '926', '956', '954',
    '927', '902',
  ],
  [
    '943', '990', '947',
    '947', '914', '909',
    '940', '992', '917',
    '934', '968', '964',
  ],
  [
    '938', '956', '960',
    '955', '920', '920',
    '927', '924', '965',
    '972', '928', '972',
    '979', '927', '966',
    '990', '991',
  ],
  [
    '949', '907', '951',
    '992', '953', '964',
    '911', '937', '950',
    '954', '911', '945',
    '960', '916', '927',
    '978', '967',
  ],
  [
    '968', '949', '964',
    '971', '997', '954',
    '941', '945', '923',
    '963', '980', '925',
  ],
  [
    '920', '931', '978',
    '941', '912', '949',
    '988', '971', '949',
    '974', '904', '926',
  ],
  [
    '945', '996', '911',
    '900', '927', '969',
    '923', '939', '997',
    '995', '905', '963',
  ],
  [
    '933', '973', '944',
    '976', '918', '949',
    '975', '945', '947',
    '912', '986', '949',
    '935', '905',
  ],
  [
    '960', '899', '962',
    '958', '923', '998',
    '998', '962', '954',
    '947', '997', '907',
  ],
  [
    '900', '962', '992',
    '976', '919', '974',
    '985', '946', '940',
    '919',
  ],
  [
    '991', '919', '977',
    '924', '919', '990',
    '942', '951', '902',
    '902', '991', '967',
    '932', '966', '940',
    '932', '981',
  ],
  [
    '936', '928', '932',
    '940', '963', '953',
    '969', '924', '951',
    '911', '998', '988',
    '963', '915', '918',
    '921', '977',
  ],
  [
    '962', '930', '969',
    '939', '901', '963',
    '921', '964', '971',
    '968', '972', '963',
    '959', '909', '996',
    '934',
  ],
  [
    '945', '914', '966',
    '969', '903', '980',
    '925', '958', '994',
    '975',
  ],
  [
    '978', '932', '919',
    '923', '962', '993',
    '948', '915', '963',
    '910', '989', '901',
    '949', '921',
  ],
  [
    '994', '985', '969',
    '945', '989', '930',
    '901', '900', '911',
    '904', '951', '937',
    '902', '963', '925',
  ],
  [
    '959', '987',
    '978', '983',
    '968', '928',
    '931', '966',
    '976',
  ],
  [
    '923', '944',
    '969', '969',
    '904', '903',
    '929', '912',
  ],
  [
    '940', '966',
    '940', '994',
    '934', '980',
    '927', '953',
  ],
  [
    '918', '924', '922',
    '978', '923', '997',
    '956', '997', '981',
    '947', '952', '953',
    '932', '911',
  ],
  ['978', '952', '978', '970', '996', '966'],
  [
    '932', '941',
    '961', '923',
    '903', '930',
    '946', '997',
    '973',
  ],
  [
    '918', '967', '906',
    '964', '989', '911',
    '971', '943', '969',
    '935', '978', '955',
    '976', '992', '936',
    '990', '973',
  ],
  [
    '997', '960', '975',
    '965', '909', '983',
    '994', '899', '924',
    '920', '923',
  ],
  ['913', '943', '990', '914'],
  ['900', '903', '917', '990'],
  [
    '952', '908',
    '933', '943',
    '908', '994',
    '972', '938',
    '962',
  ],
  [
    '978', '978', '900',
    '919', '974', '951',
    '904', '929', '953',
    '908', '922', '976',
    '990', '936', '975',
    '984', '947',
  ],
  [
    '971', '991', '998',
    '992', '971', '959',
    '957', '929', '923',
    '939', '979', '932',
    '973', '938',
  ],
  [
    '963', '909', '913',
    '984', '953', '929',
    '925', '948', '924',
    '970', '946', '924',
    '915',
  ],
  [
    '980', '945', '942',
    '941', '998', '914',
    '978', '945', '956',
    '971', '979',
  ],
  [
    '958', '934', '916',
    '922', '955', '941',
    '941', '960', '900',
    '907',
  ],
  [
    '916', '923',
    '940', '926',
    '923', '938',
    '997', '914',
    '981',
  ],
  [
    '942', '909', '950',
    '902', '944', '972',
    '960', '913', '968',
    '995', '981', '962',
    '923', '940', '976',
  ],
  [
    '966', '966', '927',
    '968', '973', '899',
    '923', '913', '971',
    '990', '992', '929',
    '947', '921', '968',
    '933',
  ],
  [
    '913', '982', '948',
    '906', '917', '965',
    '977', '965', '905',
    '932',
  ],
  [
    '995', '935', '946',
    '926', '972', '899',
    '988', '946', '957',
    '979', '969', '969',
    '988', '924', '943',
    '991',
  ],
  [
    '936', '952', '901',
    '924', '941', '960',
    '979', '905', '922',
    '936', '989', '903',
    '912', '931', '929',
    '911', '948',
  ],
  [
    '990', '954', '977',
    '931', '997', '941',
    '928', '966', '991',
    '930', '906', '960',
    '918', '965', '997',
    '982', '967', '949',
  ],
  [
    '941', '908',
    '900', '991',
    '945', '972',
    '932', '956',
    '946',
  ],
  ['925', '975', '964', '956', '956'],
  [
    '910', '961', '984',
    '924', '960', '915',
    '996', '919', '998',
    '932', '984', '912',
    '945', '964', '927',
    '959',
  ],
  [
    '917', '907',
    '921', '994',
    '920', '986',
    '958',
  ],
  [
    '948', '988', '951',
    '902', '914', '951',
    '918', '913', '920',
    '924', '923', '938',
    '926', '990', '984',
    '948',
  ],
  [
    '962', '960', '923',
    '931', '971', '968',
    '925', '933', '922',
    '924', '902', '959',
    '990', '919', '922',
    '952', '996', '935',
  ],
  [
    '932', '926', '906',
    '971', '979', '924',
    '900', '915', '995',
    '916', '945', '931',
  ],
  [
    '940', '992', '975',
    '976', '987', '936',
    '907', '997', '985',
    '981', '911', '947',
    '962', '989', '968',
  ],
];

module.exports = idNumber.map((id, i) => ({
  _id: id,
  name: productName[i],
  imageUrl: 'http://placeimg.com/640/480/fashion',
  shopName: faker.helpers.randomize(shopNames),
  price: {
    display: `$${priceValues[i]}`,
    worth: priceValues[i],
    onSale: faker.helpers.randomize([true, false]),
    salePercentage: faker.helpers.randomize([0.10, 0.15, 0.20, 0.25, 0.30, 0.50, 0.75]),
    salePrice: 0,
  },
  shipping: {
    display: faker.helpers.randomize(shipping),
    eligibility: true,
  },
  recommended: {
    fromShop: [],
    similarProduct: recommend[i],
  },
}));
