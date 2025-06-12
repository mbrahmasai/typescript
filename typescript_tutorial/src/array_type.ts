// normal array in js 
//implicity or inferance
// let cities = ['hyderabad' , " vizag", "vijayawada", " tirupathi"];
// 
// 
// console.log(cities[0])
// 
// cities[0]= "cyberabad"
// console.log(cities[0])
// cities[1] = 23 

//explicitly or type annotation
// --------------------------------------
// short hand notation 

let states : string[] = ["andhra pradesh", "tamilnadu", "karnataka", "kerala", "telangana"]
console.log(states[1])

states[1] = "goa"
// states[1] = 24  


let state : string[] | number[] = ["andhra pradesh", "tamilnadu", "karnataka", "kerala", "telangana"]

console.log(state[0])
//state[0] = 1   // in short hand , all arrays of elements are must be in string or number 

state = [1,2,4,5,7,8,9]
console.log(state)
state[1] = 2

// generic type notation

//in this , u take mutliple types in single array
let countries : Array<string>=["india", "pakistan","bangladesh"]
console.log(countries)
countries[1]= "us"
// countries[2] = 3

let provinces : Array<string | number | boolean> = ['punjab', "balochistan", 23,3 ,true , false]
console.log(provinces)


//-----------------------------------------
// tuple
//---------------------------------------
// In TypeScript, a tuple is a special type of array where:
// 
// The number of elements is fixed.
// The types of elements are known and ordered.
//-------------------------------------------------
// 🔹 Tuple vs Array

// string[] means an array of strings of any length.
// [string, number] is a tuple with exactly two elements: first a string, then a number.
//----------------------------------------------------

// Array
let name : string[] =["brahmasai", "sunil", "ramprasad"]

console.log(name)

//tuple
let names : [string ] = ["brahmasai"]
console.log(names)

let namess : [string] = ["brahmasai", 'ramprasad']
console.log(namess)  // result and error also show 

let user : [string,number] = ['brahmasai',23 , 'ramprasad']
console.log(user) // result and error also show 
//===================================================