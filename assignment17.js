function palindrome(input) {
    let splitinput = input.split("")
    splitinput = splitinput.reverse()
    splitinput = splitinput.join("")
    if(input.toLowerCase().replace(/\s/g,"")== splitinput.toLowerCase().replace(/\s/g,"")) {
        return true
    }

}

console.log(palindrome("1221"))//true
console.log(palindrome("12 21"))//true
console.log(palindrome("1 221"))//true
console.log(palindrome("aabbaa"))//true