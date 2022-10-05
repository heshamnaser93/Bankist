'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 3));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// // this method 'splice' mutate the original array
// console.log(arr.splice(1, 3));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// // this method 'reverse' mutate the original array
// console.log(arr2.reverse());

// //let allLetters = arr.concat(arr2);
// let allLetters = [...arr, ...arr2];
// console.log(allLetters);
// console.log(allLetters.join('/'));

// The New 'at' method
// const arr = [23, 24, 25];
// console.log(arr[0]);
// console.log(arr.at(2));

// //Getting last Array Element
// //first way
// console.log(arr[arr.length - 1]);

// //second way
// console.log(arr.slice(-1)[0]);

// //third way
// console.log(arr.at(-1));

// // 'at method' works also for strings
// const string = 'Hesham';
// console.log(string.at(0));
// console.log(string.at(-1));

//
//
//
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// }

// console.log(`//`);

// // Using foreach
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// });

//
//
//
//
// Using forEach with 'Map' and 'sets'
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// });

// const currencies = new Set(['USD', 'EUR', 'GBP', 'USD', 'USD', 'GBP']);
// console.log(currencies);
// currencies.forEach(function (value, _, set) {
//   console.log(` ${value} from ${set}`);
// });
