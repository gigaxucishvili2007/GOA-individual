// 1) დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს ასაკის შეყვანას. თუ შემოტანილი ასაკი მეტია 5 ზე, მაშინ უნდა გამოიტანოს 'შენ ხარ ბავშვი', თუ ასაკი მეტია 12 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ თინეიჯერი/მოზარდი', თუ ასაკი მეტია 18 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ სრულწოვანი', თუ ასაკი მეტია 80 - ზე, მაშინ უნდა გამოიტანოს, 'შენხარ მოხუცი'
let age = Number(prompt("enter your age :"))
if (age >= 5){
    console.log("შენ ხარ ბავშვი")
} else if(age >= 12){
    console.log("შენ ხარ თინეიჯერი/მოზარდი")
} else if(age >= 18){
    console.log("შენ ხარ სრულწოვანი")
} else if(age >= 80){
    console.log("შენხარ მოხუცი")
}