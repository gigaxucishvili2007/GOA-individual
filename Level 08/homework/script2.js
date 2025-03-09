/* 2) ტემპერატურის სტანდარტის შემოწმება
მომხმარებელი შეჰყავს ტემპერატურა ცელსიუსში და უნდა განსაზღვროს, თუ როგორი ტემპერატურაა, ცივი, ზომიერი თუ ცხელი. */
let temperature = Number(prompt("enter temperature :"))
if (temperature >= 20){
    console.log("temperature is cold")
} else if(temperature >= 35){
    console.log("temperature is moderate")
}else if(temperature >= 55){
    console.log("temperature is hot")
}