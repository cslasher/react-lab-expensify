// Object Destructuring
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const person = {
//   age: 45,
//   location: {
//     city: 'LBC',
//     temp: 73
//   }
// };

// const { name: firstName = 'Snoop', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.\nIt's ${temperature} in ${city}.`);

// Array Destructuring

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, s_price, m_price, l_price] = item;

console.log(`A medium ${itemName} costs ${m_price}`);
