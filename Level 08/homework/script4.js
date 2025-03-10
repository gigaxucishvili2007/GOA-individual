/* 4) სიყვარულის კალკულატორი
შექმენით ფუნქცია, რომელიც შემოიტანს ორი ადამიანის სახელს და შემდეგ alert ის 
სახით გამოიტანს მათ სიყვარულის პროცენტს - ტექსტი უნდა გამოვიდეს შემდეგნაირად - '
{პირველი სახელი} და {მეორე სახელი}, თქვენი სიყვარულის პროცენტია 
{პროცენტული მაჩვენებელი}'(გამოიყენეთ Math.random ოღონდ floor-იც) */
let first_name = String(prompt("enter first name :"))
let second_name = String(prompt("enter second name :"))
alert("თქვენი სიყვარულის პროცენტია"(first_name (second_name)))
let num1 = 10
let num2 = 20
let randomNum = Math.floor(Math.random(num1 + num2))
console.log(randomNum)