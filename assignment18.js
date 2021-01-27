function compareArrayElements(arr) {
    for(let i=0;i<arr.length-1;i++) {
        console.log("i" +"("+i+")" )
        for(let j=i+1;j<arr.length;j++) {
            console.log("j" +"("+j+")" )
 
         if(arr[i] == arr[j]) {
             console.log("same")
        }
        else {
            console.log("different")
        }
        console.log("value 1,"+ arr[i]+" value 2, "+ arr[j])
        }
    }
 }
 
 const arr1 = [1,1,2,3]
 console.log(compareArrayElements(arr1))