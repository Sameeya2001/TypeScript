//TYPESCRIPT BASICS
//functions

// function greetPerson(name : any){
//     if (name === "sanjay"){
//         var greet = "Hello" + name;
//     }else {
//         var greet = "Hi there";
//     }
// }
// greetPerson("sanjay")
// greetPerson(25)
// greetPerson(true)

//print values
// for(let i=1; i<=5; i++){
//     //special inbuit function setTimeOut
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

//operators in TS
// let a=10;
// let b=10;
// console.log(a==b); //it checks only the values of teh operands
// console.log(a==10); //it checks the type as well as the values

// let Bike ={
//     make: 'Honda',
//     model: 'CBR',
//     year: '2021',
//     price: '21 lakhs'
// }
// console.log(typeof(Bike))
// console.log('make' in Bike) //to get the value use 'in' operator

/*ARRAY*/
// let fruits :string[] = ['apple','orange','banana']
// console.log(fruits);

/*MULTI-TYPE ARRAY*/
 /*let values: (string|number|boolean)[] = ['apple',2,'oranges',67.5,true]
 for(var value in values){
     console.log(values[value])  //array[index]
 }

 let fruit :string[] = ['apple','orange','banana','grape']
 //sort by ascending
 var sortedArray:string[] = fruit.sort((n1,n2)=>{
    if(n1>n2){
       return 1;
   }
   if(n1<n2){
       return -1;
   }
    return 0;
})
console.log(sortedArray);*/

//Array methods
/*concat()
 let alpha = ["a","b","c"];
 let numerics = [1,3,4]
 let alphanumeric = alpha.concat(numerics)
 console.log(alphanumeric)

 //map() method creates a new array with the results of calling a provided function on every element
 //syntax:
    Array.map(function)
var numbers = [1,4,9]
 var roots = numbers.map(Math.sqrt)  //return an array after operation
 console.log(roots)
 console.log("roots is:" + roots)*/

/*TASK
Write a function that takes an array of numbers and returns sum of all the elements 
*/

 /*function sumOfElements(arr:number[]){  //specify the datatype of array
     let sum = 0;
     for(let i=0;i<arr.length;i++){
         sum = sum + arr[i];
     }
     return sum
 }
 const numbers: number[] = [2,5,6,7,8];
 const result:number = sumOfElements(numbers);
console.log("Sum of array elements :", result);


 function sumOfElements(arr:number[]){  //specify the datatype of array
     let sum = 0;
     for(let i=0;i<arr.length;i++){
         sum = sum + arr[i];
     }
     return sum
 }
 function calculateSum(){
     const numbersinputstring = document.getElementById('num').value;
     const numbersArray = numbersinputstring.split(' ').map(Number);
     const numbers: number[] = [2,5,6,7,8];
     const result:number = sumOfElements(numbersArray);
    const resultElement = document.getElementById('result');
     if(resultElement){
       resultElement.innerHTML = 'SUM of array elements' + result;
     }
     //console.log("Sum of array elements :", result);
 }*/

/*enum in javascript
enum PrintMedia{
    newsPaper = "Hindu",
    NewsLetter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
console.log(PrintMedia.newsPaper)*/
   
/*ANONYMOUS FUNCTIONS*/
/*syntax
var varName = function(arguments){
    //body
}*/
//var result = function(a:number,b:number){
  //  return a+b;
//}
//var c = result(5,5);

/*ARROW FUNCTION*/
/*SYNTAX:
    (parameters)=>expression
*/
//let sum = (x:number, y:number)=>{
  //  return x+y;
//}
//console.log(sum(4,5));
//without parameters
//let Print = ()=>console.log("Hello we are learning!")

/*TASK--USE ARROW FUNCTION
Write a function that takes an array of strings and returns a new array with all the elements converted to UPPERCASE
 a=["hello","world"]
 OUTPUT
 a=["HELLO","WORLD"]
*/

//const convertToUpperCase = (a:string[])=>{
//    return a.map(item=>item.toUpperCase());
//}
//const a:string[] = ["apple","orange","banana"]
//const upperCaseArray:string[] = convertToUpperCase(a);
//console.log(upperCaseArray)

// TASK
/* Write an arrow function that takes an array of numbers as a parameter and returns a new array with each element multiplied by 2*/



/* 
   variable Name - Camel case    --> arrayInput
   method Name - camel case
   class Name - Pascal case      --> EmployeeInfo

*/


/*const multiplyByTwo = (arr:number[]):number[] => arr.map((num) => num*2)

const arrayInput: number[] = [1, 2, 3, 4, 5, 6]
const multipliedArray :number[] = multiplyByTwo(arrayInput);
console.log(multipliedArray);*/

/* Optional Parameter in TS  - The parameter that may or may not recieve a value can be appended with a '?' to mark them as optional */

/*function greet(greetings:string,name?:string):string{
    return greetings+ ' '+name + '!';
}

console.log(greet('Hello','steeeve'))
console.log(greet('Hi'))
console.log(greet('Hi','Bill', 'Gates'))*///error expected 2, But got 3


//CLASS

/*class Employee {
    //instance variables
    empCode: number=0;
    empName: string='';

    constructor(code:number, name:string){
        this.empName= name;
        this.empCode= code;
    }
    //custom methods
    //normal way to create a function
    /*function display(){
        console.log(this.empName + this.empCode)
    }*/
    //using arrow function
    /*display = ()=>console.log(this.empName+ " " + this.empCode);
}

//create an object
let emp = new Employee(1001,"Sanjay")
emp.display(); */

/* create a class student with fields name, roll no, mark 
if mark less than 60 then C and so on... assign grade
display method to  display all records
pass only name, rollno, mark in constructor*/
//use arrow function to compute the task
/*gradeTracker=(input parameters ie mark)=>{
    if (mark>=50 && mark<=60){
        return 'C'
    }else if (mark>=61 && mark<=70){
        return 'B'
    }.......
}*/
/*class Student{
    studentName: string='';
    studentRollno:number=0;
    studentMark: number=0;
    studentGrade: string='';

    constructor(name:string,rollno:number,mark:number){
        this.studentName=name;
        this.studentRollno=rollno;
        this.studentMark=mark;
        this.studentGrade=this.gradeTracker(mark);
    }
gradeTracker = (mark:number)=>{
    if(mark>=50 && mark<=60){
        return 'C'
    }else if (mark>=61 && mark<=70){
        return 'B'
    }else if (mark>=71 && mark<=100){
        return 'A'
    }else{
        return 'D'
    }
}
display =()=>console.log(this.studentName+ " "+ "got"+" " + this.studentGrade+" " + "grade");
}
let stud=new Student("Akalya",2,71)
stud.display(); */

// INHERITANCE
//create a parent class Person
/*class Person{
    name :string='';
    constructor(name:string){
        this.name= name;
    }
}
class Employee extends Person{
    empCode: number=0;
    constructor(empCode:number, name:string){
        super(name);
        this.empCode=empCode
    }
    displayName=():void=>{
        console.log("Name="+this.name+" "+"EmployeeCode="+this.empCode)
    }
}
//create an object
let emp=new Employee(100,"Bill")
emp.displayName();*/

//INTERFACE

/*interface IEmployee{
    //variables
    empCode:number;
    name:string;
    //abstract method or methods without implementation
    getSalary:(empCode:number)=>number
}
class Employee implements IEmployee{
    empCode:number=0;
    name:string='';
    constructor(code:number, name:string){
        this.empCode=code;
        this.name=name;
    }
    //implement the abstract method in employee class
    getSalary(empCode: number): number{
        return 40000;
    }
}
//create an object
let emp=new Employee(1,"Steve")
console.log(emp.getSalary(1))*/

/*task
CREATE a shape interface with name property and area() method
create circle and square classes implements the shape inteface
implement the area method in these classes.
create object of these classes with values and pass the object
to a function which receives shape object and display
their shpaes and area.
*/

/*interface IShapes {
    name: string;
    area(): number;
}

class Circle implements IShapes {
    radius: number = 0;
    name: string = '';

    constructor(name: string, radius: number) {
        this.radius = radius;
        this.name = name;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square implements IShapes {
    sides: number = 0;
    name: string = '';

    constructor(name: string, sides: number) {
        this.sides = sides;
        this.name = name;
    }

    area(): number {
        return this.sides * this.sides;
    }
}

// Function which receives an object and prints its name and area
function displayShapeArea(shape: IShapes) {
    console.log(`Area of ${shape.name} is ${shape.area()}`);
}

// Create objects
const circle = new Circle('Circle', 5);
const square = new Square('Square', 4);

// Display area for both circle and square
displayShapeArea(circle);
displayShapeArea(square);
*/
//synchrous Example
/*console.log("START");

function synchrousFunction(){
    for(let i=0;i<3;i++){
        console.log("Synchronous code" + i)
    }
}
synchrousFunction();
console.log("END")*/

//asynchronous EXAMPLE
/*function ShowLoadingScreen(){
    console.log("1.Loading Screen Appeared")
}
function hideLoadingScreen(){
    console.log("4.Loading Screen Hidden")
}
function getDataFromApi(callback){
    console.log("2.Start Pulling Data")
    setTimeout(()=>{
        console.log("3.Finished Pulling Data")
        callback();
    },2000)
}

ShowLoadingScreen();
getDataFromApi(hideLoadingScreen);*/
//inorder to handle asynchronous code
/*
1.to use call back
SYNTAX:
function myFunction(callback){
    //code
    callback();
}
*/
//TASK
/*console.log("Hi")
setTimeout(function cb(){
    console.log("Hi There")
},5000);
const getDate = ()=>{
    setTimeout(()=>{
        return {data:['faith','infotech']}
    },1000)
}
const data=getDate();
console.log(data);*/

/*Here the issue in the code is due to asynchronous*/
/*console.log("Hi")

setTimeout(function cb(){

    console.log('Hi there')

},5000)

const getData = (callback:any)=>{

    setTimeout(()=>{

        const result = {data:['faith','infotech']}

        callback(result)

    },1000)

}

getData((data:any)=>{

    console.log(data);

})*/

/*console.log("Hi")

setTimeout(function cb(){

    console.log('Hi there')

},5000)

const getData = (callback:any)=>{

    setTimeout(()=>{

        const result = {data:['faith','infotech']}

        callback(result)

    },1000)

}

getData(function(data:any){

    console.log(data);

});*/


