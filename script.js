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
////////////////////////////////////////////////////////////////////////////////

//////Start Bankist App/////////////////////////////////////////////////////////////////////////////////
// Display Movements Function
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>`;
    //containerMovements.innerHTML += html;
    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};
////////////////////////////////

//Display Balance Function
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => cur + acc);
  labelBalance.textContent = `${balance}???`;
};
///////////////////////////////

//Display Summary Function
const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}???`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, inc) => acc + inc, 0);

  labelSumInterest.textContent = `${interest}???`;
};
///////////////////////////////

//Create UseNames Function
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
///////////////////////////////

let currentAccount;
//Login////////////////////////
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    console.log('logged In');
    //Display UI and welcome message
    labelWelcome.textContent = `Hello ${currentAccount.owner.split(' ')[0]}`;
  }

  //Show Homepage
  containerApp.style.opacity = 100;

  //Clear Input Fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  //Display Movements
  displayMovements(currentAccount.movements);

  //Display Balance
  calcDisplayBalance(currentAccount.movements);

  //Display Summary
  calcDisplaySummary(currentAccount);
});

//Transfer Operat??on

//////////////////////////////
//////End Bankist App/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
// //Maximum Value
// const movements = account1.movements;
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);

// console.log(max);
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ????")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far ????

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK ????
*/

///////////////////////////////////////////////////////////////////////////////////////
//Solution
// const checkDogs = function (dogsJulia, dogsKate) {
//   //step1
//   const juliaDogsCorrected = dogsJulia.slice(1, 3);
//   // juliaDogsCorrected.splice(0, 1);
//   // juliaDogsCorrected.splice(-2);
//   //step2
//   const allDogs = juliaDogsCorrected.concat(dogsKate);
//   console.log(allDogs);
//   //step3
//   allDogs.forEach((dog, num) => {
//     if (dog >= 3) {
//       console.log(
//         `Dog Number ${num + 1} is an adult and it is ${dog} years old`
//       );
//     } else {
//       console.log(
//         `Dog Number ${num + 1} is a puppy and it is ${dog} years old`
//       );
//     }
//   });
// };

// const julias = [3, 5, 2, 12, 7];
// const kates = [4, 1, 15, 8, 3];
// checkDogs(julias, kates);
/////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //Lets suppose these movements in 'EURO' So we want to convert them to 'DOLLAR'
// const eurToUsd = 1.1;
// const convertedMov = movements.map(mov => mov * eurToUsd);
// console.log(convertedMov);

// // same result as above but by Loop
// const convertedOnes = [];
// for (const mov of movements) {
//   convertedOnes.push(mov * 1.1);
// }
// console.log(convertedOnes);

// console.log(movements);
// const operations = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdraw '} ${Math.abs(
//       mov
//     )}`
// );

// console.log(operations);

//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }

//const user = 'Hesham Naser Elsobky'; // output: hns
// const createUserNames = function (accs) {
//   accs.forEach(acc => {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUserNames(accounts);
// console.log(accounts);
//
//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log('///////////////////////////');
// // Another Way for filtering
// const newArray = [];
// for (const move of movements) {
//   if (move > 0) newArray.push(move);
// }

// console.log(newArray);
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration: ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2); //output = 3840

// const balance = movements.reduce((acc, cur) => acc + cur, 10);
// console.log(balance); //output = 3850
///////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
//Challenge 2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages ????)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK ????
*/

//Solution
// const calcAverageHumanAge = ages => {
//   //step1
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   //step2
//   const filtered = humanAge.filter(dog => dog >= 18);
//   //step3
//   const avg = filtered.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   return avg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK ????
*/

//Solution
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(dog => dog >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
//Find Method
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Sarah Smith');
// console.log(account);
/////////////////////////////////////////////////////////////////////////////////////////////
