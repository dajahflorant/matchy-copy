/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
// create species using dot notation
animal.species = 'duck';
// bracket notation
animal['name'] = 'Jennifer';
// give it a value of empty array
animal.noises = [];
// print to the console
console.log(animal);





//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// give noises index using sound my duck makes
noises[0] = 'squeak';
// more noises using push
noises.push('growl');
// add another w/ unshift
noises.unshift('chirp');
// use bracket notation
noises[noises.length] = 'squaddle';
// logging length of noises '4'
console.log(noises.length);
// print last noise 'squaddle'
console.log(noises[noises.length - 1]);
// print whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// bracket animal assigned to noises property
animal['noises'] = noises;
// insert another noise using dot notation & push it
animal.noises.push('Weah');
// print to console
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // you can acces it by using dot notation ex: user.dajah or bracket notation ex: object ['dajah']
 *
 * 2. What are the different ways of accessing elements on arrays?
 * // ue can access elements on arrays by using bracket notation to get to the exact index.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var named animals
var animals = [];
// push animals obj to animal array
animals.push(animal);
// push duck
// print array to console
console.log(animals);
// create var and assign it to data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
// push 
animals.push(duck);
// print to console
console.log(animals);
// add another animal
var dog = { species: 'dog', name: 'Jerryian', noises: ['bark', 'ruff', 'woof']};
// push stat
animals.push(dog);
// new animal
var chicken = { species: 'chicken', name: 'Jerry', noises: ['yodle', 'squeak', 'pluck']};
// push statment
animals.push(chicken);

// print to console
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create empty array
var friends = [];
// function gerRandom
function getRandom(arr) {
  //return statemnt using math.random
return Math.floor(Math.random() * arr.length);
}
// var
var randomIndex = getRandom(animals);
var randomAnimalName = animals [randomIndex].name;
//push meth
friends.push(randomAnimalName);
//print to console
console.log(friends) // prints ['Dog']
// bracket notation arrray
animals[0]['friends'] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}