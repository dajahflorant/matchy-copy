/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function search
function search(animals, name) {
    // create  loop
for (let i = 0; i < animals.length; i++) {
    // if statement
if (animals[i].name === name) {
    // return
    return animals[i];
}
}
// return not found
return null;
}




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function replace with 3 params, 'animals', 'name','replacements'
function replace(animals, name, replacement) {
//const index = animals.findIndex(animal => annimal.name === name);
for (let i = 0; i < animals.length; i++) {
    // if statement
if (animals[i].name === name) {
    // repalce it so i can exit
    animals[i] = replacement
    // break to exit loop
    break;
}

}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare function remove with 2 params

function remove(animals, name {
    // for loop to remove animal from array
for (let i = animals.length - 1; i >= 0; i--) {
    // if statement
if (animals[i].name === name) {
    // splice animal
   animals.splice(i, 1);
   //animals [i] = replacement;
  // break;
}

}
// return animals
return animals;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
   }