// functions 
// 
// function apple(){
// // function which doesnot return anything is implicitly declare void     
// }
// 
// let a = 99
// let b = "brahmasai"
// 
// function username(){
//     return "brahmasai"
// }
// 
// 
// function user():number{
//     return a 
//     // return b  //here this function is explicitly declare number , but b variable is  string , so it shown error
// }


// function expression 
const add = (a:number,b:number)=>{
    return a+b
}
//explicitly declare the type to parameter
console.log(add(1,2))

const add1 = (c:number,d:number):number =>{
    return c+d 
}
//explicitly declare type to function , without return  parematers dont declare the type to function 
console.log(add1(2,3))

const add2 = (e:number,f:number) =>{
    console.log(e+f)
}
//u didnot return value in this function so, no need to declare type to function explicitly
add2(1,2)

//optional parameter

const product = (title:string , price: number , discount?:boolean) =>{
    return `this product name is ${title} and price is ${price}`
}
// optional paramter gives option ,that not mandatory provide the aurgument to parameter 


console.log (product("samsung",11000,true))

// question : if i provide aurgument to optional paramter , then i want default paramter , because i already return the some data for optional parameter.
