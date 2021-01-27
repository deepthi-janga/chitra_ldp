function fizzbizz(value1, value2) {
    for(let i = value1; i < value2 ;i++) {
     if(i % 3 == 0) {
           if (i% 5 == 0 ) {
         console.log("FIZZ BUZZ")
     }
     console.log(i+" is FIZZ")
    }
     else if (i%5 ==0) {
         console.log(i+" is BUZZ")
     }
     else {
         console.log(i + " is not divisiable by 3 and 5")
     }
     }
    }


fizzbizz(1,210) 