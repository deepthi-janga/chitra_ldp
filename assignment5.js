//create a function to create a pyramid, which takes number of lines as argument
function createPyramidWithStars(n) {
    //shifts to next line when iternation completes
    for(var i =0;i<n;i++) {
      var s='';
      //for printing spaces
      for(var j=1;j<n-i;j++) {
        s=s+' ';
      }
      //for printing starts
      for(var k=1;k<=(2*i+1);k++) {
      s=s+"*"
      }
      console.log(s)
    }
  }
  
  //calling the function , 5 represents number of lines.
  createPyramidWithStars(5);