// import './array_type'
// import './special'
// import "./function"
import "./interface"


// // Datatypes = string , number , boolean , any , object, array , tuple 
// 
// // special types = void , null & undefined , never
// 
// js 
// // let user = "sai"
// // console.log(user)
// 
// //----------------------------------------------
// // explicit vs implicit
// //-----------------------------------------------
// // implicit = TypeScript infers the type automatically based on the assigned value.
// 
// let captain = "brahmasai"
// captain = 06
// captain= true
// 
// // here first time captain get the string data type so . it can't be accept the other data types
// 
// captain = " sunil"
// captain= " ram prasad "
// 
// let score = 24
// let winner = true
// 
// // so , this is implicit types .
// 
// // explicit = You manually declare the type of a variable.
// let name : string = "brahmasai"  // explicitly defining name as a string
// let age : number = 27 //explicitly defining age as a number
// let male : boolean = true // explicitly defining male as a boolean
// 
// let user : string
// user = "Brahmasai"
// user = 27  // it trows the error , user is declare a string type.
// 
//--------------------------------------------
// // any
//----------------------------------------------
// let username : any
// username = "brahmasai"
// username = 27
// username = true

// let a   // a is implicitly any
// a = "apple"
// a = 33

// // ✅ Accepts any type
// // ❌ Loses all type safety
// // ⚠️ Use only when necessary (e.g., working with 3rd-party libraries or migrating legacy code)
// //------------------------------
// // union ==  (|): Safe and specific
// // ----------------------------------
// // u want to declare the more datatypes to variable use union 
// 
// let value : string | number
// 
//  value = "brahmasai"
//  value = 27
//  value = true  // i am declared boolean type here
// 
// let city : string | number | boolean 
// city = "nellore"
// city = 27
// city = true
// 
// // ✅ Only allows a specific set of types
// // ✅ Keeps type checking
// // ✅ Supports type narrowing (TypeScript can infer the exact type later)
// 
// 
// // ==================================================
