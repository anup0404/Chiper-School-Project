// class ListNode{
//     val;
//     next;

//     constructor(val,next=null){
//         this.val = val;
//         this.next = next;

//     }
// }

// // class TestClass{
// //     head;

// //     constructor(head = null){
// //         this.head = head;
// //     }

// //     hasLast(){
// //         return this.head!==null;
// //     }

// //     getLast(){
// //         if(!this.hasLast()){
// //             return null;
// //         }
// //         let current = this.head;
// //         while(current.next !==null){
// //             current = current.next;
// //         }
// //         let finalValue = current.val;

// //         current = this.head;
// //         while(current.next.next !== null){
// //             current =current.next;
// //         }

// //         return current.val;
// //         getLast() {
// //             let lastNode = this.head;
// //             if (lastNode) {
// //                 while (lastNode.next) {
// //                     lastNode = lastNode.next
// //                 }
// //             }
// //             return lastNode
// //     }
// //     getFirst() {
// //         return this.head;
// //     }
// // }

// //promise is a class in js
// //constructor(function)

// let myPromise = new Promise((fullfilled, notfullfilled)=>{
//   let num1=10;
//   let num2=20;
//   let sum = num1+ num2;
//   if(sum>24){
//     fullfilled(sum);
//   }else{
//     notfullfilled(newError ("promise not fulfilled"));
//   }
// });
// myPromise.then(()=>{
//     console.log("Promise was fulfilled");
// })
// .catch(()=>{
//     console.log("Promise was not fullfiled");
// }).finally();


//IT will occur during API calls and database calls 
//ccreating /Reading a file
// it  is beacuse of aschycnorous behavoiur of javascript 
//eg=>
 
// function addTwoNumbers(num1,num2){
//     let sum = 0;
//     setTimeout(()=>{
//         console.log(num1+ num2);
//         sum = num1+ num2;
//     },5000);
   
//     console.log("Inside addTwonumbers")
//     return sum;
// }
// console.log(addTwoNumbers(2,3));



//Importance of  promise 

// function addTwoNumbers(num1, num2){
//     return new Promise((fullfilled,notfullfiled)=>{
//         setTimeout(()=>{
//             console.log("Inside setTimeout");fullfilled(num1+num2);
//         },5000);
//     });
// }

// addTwoNumbers(10,5)
// .then(() =>{
//     consolelog("Promise  is fullfilled");

// })
// .catch(()=>{
//     console.log("Promise was not fulfilled");
// });