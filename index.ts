// let sport = 'football';

// let id = 5;

// let id: number = 5;
// let firstname: string = 'danny';
// let hasDog: boolean = true;

// let unit: number; // Declare variable without assigning a value
// unit = 5;

let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}

// arrays in typescript

let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; // can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
//ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

// Objects in TypeScript

// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

//person.isProgrammer = 'Yes'; // ERROR: should be a boolean

// person = {
//   name: 'John',
//   location: 'US',
// };
// ERROR: missing the isProgrammer property
