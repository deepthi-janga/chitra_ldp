// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "blue", "green", "yellow", "pink", "black", "white"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Jake",
        lastName: "Peralta"
    },
    {
        firstName: "Adolf",
        lastName: "Hitler"
    },
    {
        firstName: "Donald",
        lastName: "Trump"
    }
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementsByTagName("button")[0].addEventListener("click", getRandomNumber)
function getRandomNumber(){
    document.getElementsByTagName("p")[0].innerText= getRandomInt(1, 100);
}

document.getElementsByTagName("button")[1].addEventListener("click", getRandomNumberInARange)
function getRandomNumberInARange(){
    document.getElementsByTagName("p")[1].innerText= getRandomInt(document.getElementsByTagName("input")[0].value, 
    document.getElementsByTagName("input")[1].value);
}

document.getElementsByTagName("button")[2].addEventListener("click", getLoremString)
function getLoremString(){
    document.getElementsByTagName("p")[2].innerText= lorem
}

document.getElementsByTagName("button")[3].addEventListener("click", displayOnlySpecifiedNumberOfSentences)
function displayOnlySpecifiedNumberOfSentences() {
    var no_of_sentences = document.getElementsByTagName("input")[2].value
    document.getElementsByTagName("p")[3].innerText = lorem.split(".").slice(0,no_of_sentences);
    if(isNaN(no_of_sentences)) {
        document.getElementsByTagName("p")[3].innerText = "Please enter only numbers"
    }
}

document.getElementsByTagName("button")[4].addEventListener("click", displayOnlySpecifiedNoOfChars)
function displayOnlySpecifiedNoOfChars() {
    var no_of_chars = document.getElementsByTagName("input")[3].value
    document.getElementsByTagName("p")[4].innerText = lorem.slice(0, no_of_chars)
    if(isNaN(no_of_chars)) {
        document.getElementsByTagName("p")[4].innerText = "Please enter only numbers"
    }
}

document.getElementsByTagName("button")[5].addEventListener("click", getCurrentFormattedDate)
function getCurrentFormattedDate(){
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 
    const currentYear = date.getFullYear();
    document.getElementsByTagName("p")[5].innerText = today + "/" + currentMonth + "/" + currentYear
}

document.getElementsByTagName("button")[6].addEventListener("click", getCurrentFormattedTime)
function getCurrentFormattedTime(){
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes(); 
    const secs = date.getSeconds();
    document.getElementsByTagName("p")[6].innerText = hrs + ":" + mins + ":" + secs
}

document.getElementsByTagName("button")[7].addEventListener("click", convertInchesToFeet)
function convertInchesToFeet(){
    document.getElementsByTagName("p")[7].innerText = document.getElementsByTagName("input")[4].value / 12
}


document.getElementsByTagName("button")[8].addEventListener("click", convertFeetsToInches)
function convertFeetsToInches(){
    document.getElementsByTagName("p")[8].innerText = document.getElementsByTagName("input")[5].value * 12
}

document.getElementsByTagName("button")[9].addEventListener("click", checkForSameLengthOfWords)
function checkForSameLengthOfWords(){
    if(document.getElementsByTagName("input")[6].value.length == document.getElementsByTagName("input")[7].value.length){
    document.getElementsByTagName("p")[9].innerText = "Both words are of same length"
    }
    else{
    document.getElementsByTagName("p")[9].innerText = "Both words are of different length"
    }
}

document.getElementsByTagName("button")[10].addEventListener("click", getRandomPwd)
function getRandomPwd(){
    document.getElementsByTagName("p")[10].innerText= Math.random().toString(36).slice(-8);//converts a number to string with base radix 36(!6+10), slice(-8) returns last 8 characters
}

document.getElementsByTagName("button")[11].addEventListener("click", checkForEvenOdd)
function checkForEvenOdd(){
    if(isNaN(document.getElementsByTagName("input")[8].value)) {
        document.getElementsByTagName("p")[11].innerText = "Only integer values are allowed"
    }
    else {
        if(document.getElementsByTagName("input")[8].value %2 == 0){
         document.getElementsByTagName("p")[11].innerText = "Number is even"
        }
        else {
        document.getElementsByTagName("p")[11].innerText = "Number is odd"
    }
}
}

document.getElementsByTagName("button")[12].addEventListener("click", getRandomColor)
function getRandomColor(){
    document.getElementsByTagName("p")[12].innerText= getRandomElementFromArray(colors)
}

 function getRandomElementFromArray(arr){
     return arr[getRandomInt(0, arr.length-1)];
 }

document.getElementsByTagName("button")[13].addEventListener("click", getRandomFirstnameLastname)
function getRandomFirstnameLastname(){
    var randomName = getRandomElementFromArray(names);
    document.getElementsByTagName("p")[13].innerText= randomName.firstName + " " + randomName.lastName
}