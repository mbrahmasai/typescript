// // object in js 
// //----------------------
// // const apple = {
// //     color : "red",
// //     price : 29,
// //     discount : true
// // }
// 
//  //------------------------------------------
// // const apple : object = {
// //     color : "red",
// //     price : 29,
// //     discount : true
// // }
// 
// // apple.color  // in typescript getting data not like that
// //---------------------------------------------
// // const apple : {color : string , price : number , discount : boolean} = {
// //     color : "red",
// //     price : 27,
// //     discount : true
// // }
// 
// // apple.color    // string
// // apple.price    // number
// // apple.discount // boolean
// // 
// // apple.color = "green"   // string
// // apple.price = 29   // number
// // apple.discount = false// boolean
// // 
// // console.log(apple.color)
// // console.log(apple.price)
// // console.log(apple.discount)
// 
// //--------------------------------------------
// // const apple : {color : string | number , price : number , discount: boolean | number} = {
// //     color : 'red',
// //     price : 20,
// //     discount : true
// // }
// // 
// // apple.color = 3
// // apple.price = thirty
// // apple.discount = 90
// // 
// // console.log(apple.color)
// // console.log(apple.price)
// // console.log(apple.discount)
// 
// //---------------------------------------
// // if u have the same data types to many variables 
// // ------------------------------------------------
// // type fruitType = {
// //     color : string,
// //     price : number, 
// //     discount : boolean | number,
// // }
// // 
// // let apple : fruitType = {
// //     color : "red",
// //     price : 20 ,
// //     discount : true
// }
// 
// // let mango : fruitType = {
// //     color : "yellow",
// //     price : 50 ,
// //     discount : 10
// // }
// // 
// // console.log(apple.color)
// // console.log(apple.price)
// // console.log(apple.discount)
// // 
// // console.log(mango.color)
// // console.log(mango.price)
// // console.log(mango.discount)
// 
// //--------------------------------
// // let grape : { color : string, price : number, discount : boolean} ={
// //     color : "violet",
// //     price : 20,
// //     discount : true
// // }
// // console.log(grape.color)
// // console.log(grape.price)
// //---------------------------------
// 
// // type student = {
// //     student_name : string,
// //     age : number | string,
// //     place : string
// // }
// // let student1 : student ={
// //     student_name : "brahmasai",
// //     age : 27 ,
// //     place : "nellore"
// // }
// // let student2 : student = {
// //     student_name : "ramprasad",
// //     age : 29 ,
// //     place : "gudur"
// // }
// // 
// // console.log(student1.student_name)
// // console.log(student2.student_name)
// 
// //------------------------------------
// // inference & annotations
// //---------------------------------
// // interface =implicity
// // TypeScript automatically determines the type based on the assigned value.
// 
// // let bannana ={
// //     color : "yellow",
// //     price : 2,
// //     discount : false
// // }
// // 
// // bannana.color = 2
// // bannana.price = three
// // bannana.discount = 20
// 
// // automatically it assign  the data type to variable
// 
// // -------------------------------
// // 🔹 Type Annotation
// // You explicitly tell TypeScript what the type is
// 
// // let user : {name : string, age : number | string, male: boolean} = {
// //     name : "brahmasai",
// //     age : 27,
// //     male : true
// // }
// // 
// // type data = {
// //     userName : string,
// //     age : number
// //}
// 
// // let userData  : data ,{place : string } ={
// //     userName : " brahmasai",
// //     age : 27,
// //     place : "nellore"
// // }  // syntax error
// 
// 
// // note :If place isn’t part of the data type ,, try this
// //===================================================
