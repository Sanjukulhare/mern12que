//que1
//sum of two integer
// let x = 20;
// let y = 30;
// let sum = x + y;
// console.log(sum);
 

//que 2
// let a = 45;
// let b = 12;
// let total = a + b;
// console.log(`the total of ${a} & ${b} = ${total}`)

//que 3
//   let a = +prompt("enter first number");
//   let b = +prompt("enter second number");
//   let sum = a + b;
//   console.log(`the sum of${a} & ${b} = ${sum}`);

// que4
// let userName = prompt("enter your name");
// let age = prompt("enter your age");
// console.log(`hello ${userName} & age ${age}`);

// que 6
// let a = +prompt("enter first number");
// let b = +prompt("enter second number");
// let temp = a;

// a = b;
// b = temp;
// console.log(a, b);

// without using third variable
// let a = +prompt("enter first number");
// let b = +prompt("enter second number");
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//que 7
// let l = 20;
// let w = 30;
// let area = l * w;
// let perimeter = 2 * (l + w);
// console.log(area);
// console.log(perimeter);
// console.log(`the length of area ${l * w}`);
// console.log(`the perimerter of rectangle ${2 * (l + w)}`);


//que 8
// const p = +prompt("initial principal balance");
// const r = +prompt("interest rate")/100;
// const n = +prompt("number of time interest");
// const t = +prompt("number of time periods");
// const ci = p*Math.pow (1+r/n, n*t);
// const interest = ci - p;
// console.log(interest ,interest.toFixed(2));
// console.log(ci,ci.toFixed(2));

//que 9
// let a = 10;
// let b = 24;
// let c = 26;
// let s = (a + b + c)/2;
// let area = Math.sqrt(s * (s-a)*(s-b)*(s-c));
// console.log(area);
// console.log(s);

//que 10
// let r = 10;
// let surfacearea = 4 * Math.PI * r  * r;
// console.log(surfacearea .toFixed(2));


//que 11
// let r = 20;
// let circumference = Math.floor(2 * Math.PI * r);
// let circlearea = Math.floor(Math.PI * r *r);
// console.log(circlearea);
// console.log(circumference);

//que 12
// let a = 50;
// let b = 50;
// if(a>b){
//     console.log(a);
// }else if(b>a){
//     console.log(b);
// }else {
//     console.log("both are equal");
// }

//que 13
// let gender = prompt("enter your gender")
// if(gender == "m"){
//     console.log("Good morning sir");
// }else if(gender == "f"){
//     console.log("good morning ma'am");
// }else{
//     console.log("Invalid data");
// }

//que 14
// let gender = prompt("enter your gender")
// if(gender == "m" || gender == "M"){
//     console.log("Good morning sir");
// }else if(gender == "f" || gender == "F"){
//     console.log("good morning ma'am");
// }else{
//     console.log("wrong input");
// }