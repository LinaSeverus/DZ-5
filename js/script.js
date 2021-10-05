'use strict'

// Task 1

const user = {};

user.name = 'John';
user.surName = 'Smith';
// console.log(user);

user.name = 'Pete';
// console.log(user);

delete user.name;
// console.log(user);


// Task 2   В данном случае нельзя менять константу user, но можно менять содержимое объекта. Поэтому код ниже работать будет)

// const user = {
//   name: 'John'
// };

// user.name = 'Pete';   


// Task 3

const salaries = {

    John: 100,

    Ann: 160,

    Pete: 130

}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
