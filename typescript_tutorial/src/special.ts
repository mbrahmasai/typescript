// special : voil , null , undefined , never
// void means nothing

function username(){
    // this function is not return anything as default implicitly it is void
}

function username0(){
    return "brahmasai"  //this function is implicitly string 
}

function username1():void{
    // in this function u declare void explicitly
    return "brahmasai";
    // u can't return any value if function is declare void
}

function studentName(name:string){
    console.log("student name is:",name)
    // here name parameter is  explicitly string and function is implicitly void
    // then parameter get string only and function return nothing
    
    // return "brahmasai"
//based on the returned value function become string.
}
studentName("sai")

// console.log(studentName)

function add(a:number, b:number){
    return a+b  // after return the number type parameter this function will become number
}
const h=add(1,2)

console.log(h)
console.log(add(12,3))
//============================================
// null is used to explicitly assifgn as empty value to variable or function
//=========================================
let a:null
a= "apple"
a =55
//===========================================
// undefined will accept only undefined as value not( string, number or boolean)
//========================================
let stadium ;
console.log(stadium)
let stadium1 : undefined
stadium1 = "happy"
stadium1 = 9

console.log(stadium1)
// =============================================================
// never is used when a function never completes or never return
// =============================================================
function failedToConnect():never{
    throw new Error("connection  failed")
}

function DBConnection = () => {
    try{
        console.log("db is connected")
    }catch(error){
        failedToConnect()
    }
}
