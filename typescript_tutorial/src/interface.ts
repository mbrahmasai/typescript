//   interface

interface student{
    name : string,
    age : number,
    height ?: string
}

const student1: student ={
    name : "brahmasai",
    age : 27
}

const student2 : student ={
    name : "ram prasad",
    age : 29,
    height : "5.1 feet"
}

console.log(student2.name ,student2.age,student2.height)

//inheritance

 interface Player extends student {
    gender : string
 }

const student3:Player ={
    name :"phani",
    age : 25,
    height : "5.2 feet",
    gender:"male"
}


//type aliases
type  data= string | number

interface data1{
    name : data,
    age : data,
    price : data,
    discount : data | boolean
}

const sample : data1 ={
    name : "samsung",
    age : 1 ,
    price: "59,999" ,
    discount : false
}
