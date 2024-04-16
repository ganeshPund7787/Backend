// console.log("Hellow");
// we Can Install Packges Using npm cmd
//+++++++++++++ exa:- npm install express   ++++++++++++++++

// console.log(window);// Not Working

// In Node.js Everything is a module Exa:- const a = () => {}

//****** Types Of Module  +++++++++

// 1) File Based Module
// 2) build in modules
// 3) Third Party modules


const Obj = {
    Sum: (a, b) => {
        console.log(a+b);
    }
}
// Obj.Sum(1, 1);
// module.export = n;
// module.exports = Obj;

const xyz = {
    Avarage: (a,b) => {
        console.log((a+b) / 2);
    }
}
// module.export = xyz;

console.log(xyz.Avarage(10,20));

// +++++++  Build in  ++++++++++++++

const fs = require('fs');

// Example using fs option with readFile reading File 
fs.readFile('app.js', { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});


// +++++++++Example using fs option with writeFile Writing Fil+++++++++e 

const fs = require('fs');

const data = 'Hello, I am New Created File';

// Writing data to a file with specified encoding and mode
fs.writeFile('app.js', data, { encoding: 'utf8', mode: 0o555 }, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data written to file successfully.');
});


// Only Readnot write on console
//  By using Syncronues Programming
const a = fs.readFileSync('app.js', "utf-8");

console.log(a);
console.log('After Read a File');


// using shortcut or like reduce code this meythod
const {readFileSync} = require('fs');
const b = readFileSync('app.js', "utf-8");// Does not need to add fs.readfile blablablala


console.log(b);
console.log('After Read a File');










