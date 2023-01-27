// 1. map() it will give you  new array of computiontional logic on the basis of old array

// let array = [1,2,3,4,5];
// let newArray =[];

// for(let i=0;i<array.length;i++){
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);

// in js , a function is also a js object

// let array=[5,10,15,20];
// let functionForMap =(element) => element*element;

// let newArray= array.map(functionForMap);
// console.log(newArray)

// let addTwoNumbers =(a,b)=> a+b;
// let num1=4;
// let num2=5;
// addTwoNumbers(num1,num2)

// let array=[5,10,15,20];

// let newArray= array.map((element,index)=> {
//     console.log(index);
//     return element * element;
// });
// console.log(newArray)

//forEach ()  it does not  modify the array  but operations will be operated ..(its return type is void)

// let array =[1,2,3,4,5];
// array.forEach((element,index)=>{
//     console.log(element);
// });

//.filter()

// let array =[10,20,30,40,50];
//  let newArray =array.filter((element) =>{
//     return element >=30;

// });
// console.log(newArray)

//.find()

// let array=[10,20,30,40,50,60]
//  let temp =array.find((value) =>{
//     return value >20
// });
// console.log(temp);

//.short()

// let array=[10,80,30,70,50];
//  let newArray=array.sort()
//  console.log(newArray);

//object Desstructing

//  let  details={
//     name:"Alex",
//     age:24,
//     address:{
//         street:"Brooklyn",
//         city:"New York",
//         statre:"NY",
//         country:"USA",
//         passportDetails:{
//             passportNumber:"ABCD1234",
//         },
//     },
//  };
