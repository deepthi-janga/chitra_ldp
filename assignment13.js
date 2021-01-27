/*For 1 & 2, use the correct JavaScript Event.
1. When Button 1 is clicked:
    a. Paragraph 1 should be replaced with "Button 1 was clicked"
    b. An alert should appear with text "Button 1 was clicked" */

    document.getElementById("b1").addEventListener("click", buttonClicked)
    function buttonClicked() {
        document.getElementById("p1").innerText = "Button 1 was clicked"
        alert("Button 1 was clicked")   
    }

/*2. When Text is typed into the first text field (and the cursor moved away):
    a. Paragraph 2 should display "Characters typed" + the number of characters.
*/
 document.getElementById("i1").addEventListener("change", textTyped)
document.getElementById("i1").value.length
function textTyped() {
    document.getElementById("p2").innerText = "Characters typed " + document.getElementById("i1").value.length
}
/*
For 3 & 4, use Event Listeners.
3. When Button 2 is clicked:
    a. Paragraph 3 should be removed
*/
document.getElementById("b2").addEventListener("click", btn2Clicked)
function btn2Clicked() {
    document.getElementById("p3").remove()
}


/*4. When Text is typed into the second text field:
    a. Paragraph 4 should change font size for each character entered
*/
document.getElementById("i2").addEventListener("change", textEntered)
function textEntered() {

    document.getElementById("p4").style.fontSize - 5 + "em"
}