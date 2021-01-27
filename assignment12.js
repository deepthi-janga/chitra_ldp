//question : 1. Change the text of "Heading 1" to "Welcome to my site!".
document.getElementById("heading").innerText = "Welcome to my site!"

//question : 2. Change the text of "Paragraph 1" to "My name is " and add your name.
document.getElementsByClassName("para2").innerText = "My name is Chitra"

//question : 3. Remove the second H1 element
var elementToBeRemoved = document.getElementsByClassName("heading1")[0]
elementToBeRemoved.remove()

//question : 4. Change the font color of "Paragraph 2" to blue
 document.getElementById("para").style.color= "blue"

//question :  Change the text of "Paragraph 2" to "I love JavaScript"
var set = document.getElementsByTagName("p")[1]
set.innerText = "I love JavaScript";