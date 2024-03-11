// DATA TYPES:

//1. string:
let userName: string = "Fatima";

//2. number:
let age: number = 18;

//3. boolean:
let statement: boolean = true;

//4. null:
let x: null = null;

//5. undefined:
let y: undefined = undefined;

console.log(userName , age , statement , x , y);


// VARIABLE TYPES:

//1. camel case:
let myName : string = "Talia";

//2. pascal case:
let MyNmae : string = "Alia";

//3. snake case:
let my_name : string = "Faria";

console.log(myName,MyNmae,my_name);


// ARRAYS:

let friendNames: string [] =["Armeen","Tayyaba","Uzma","Hiader","Jane"];

let theirMarks: number []=[28,29,30,28,25];

let anything: any [] =["Ships","Chips",20,"June",6000];

console.log(friendNames,theirMarks,anything);


// USE OF INDEX No.

let groceryItems: string [] = ["Sugar","Flour","Butter","Dish soap","Mustard"];
let itemsFrom= groceryItems[1]
console.log(itemsFrom[2]);


let marks: number []= [23,34,20,25,30,29,8];
console.log(marks[3]);


let statements: boolean []=[true,false,true,true,false,false,true,false];
let statementfrom = statements[2]
console.log(statementfrom[3]);
