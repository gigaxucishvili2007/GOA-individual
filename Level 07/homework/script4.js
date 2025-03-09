// 4) შექმენი ცვლადები, სადაც შეიტან ინფორმაციას შენს თავზე, მაგ: სახელი, გვარი, ასაკი და ა.შ
// შემდეგ ეს ცვლადები დაუმატე ერთმანეთს და გამოიტანე კონსოლში და ასევე alert - ში.
let name = String(prompt("enter your name :"))
let surname = String(prompt("enter your surname :"))
let age = Number(prompt("enter your age :"))
let email = String(prompt("enter your email"))
console.log(name + surname + age + email)

window.alert(name + surname + age + email)
// ✅