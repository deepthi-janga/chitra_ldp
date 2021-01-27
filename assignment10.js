let text = "Cheeseburgers make your knees weak and your soul tingle. A great cheeseburger is a gastronomical event with so many varieties you couldn’t get tired of it if you tried. There’s cheesy incarnation waiting for you no matter what your palate preferences are.Unless you’re vegan, in which case we’re sorry for your loss."
let text2 = text.replace(/cheeseburger/g, "hamburgers")// /g represents global search, till the string ends from regular expressions
console.log(text2)
let text3 = text.replace(/your/g, "your".toUpperCase())
console.log(text3)
//how many words are in the story
let text4 = text.split(" ");
console.log(text4.length + " are the total words present")
//How many charecters are present
textWithOutSpaces = text.replace(/\s/g,'')
let text5 = [];
text5 = textWithOutSpaces//converting string to array to get length
console.log(text5.length)