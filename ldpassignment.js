let i;
let totalpriceofeachfruit = [];

let quantity;
let priceperunit;
let object = {
    //created a array of name fruits
    fruits :
    [ {
        name : "straberry",
        quantity : 15,
        priceperunit : 10
    },
    {
        name : "pineapple",
        quantity : 10,
        priceperunit : 40
    },
    {
        name : "apple",
        quantity : 6,
        priceperunit : 20
    },
    {
        name : "mango",
        quantity : 12,
        priceperunit : 50
    },
    {
        name : "pear",
        quantity : 10,
        priceperunit : 80
    },
    ],
    //created a function
    counttotal : function(quantity, priceperunit) {
        return quantity*priceperunit;
    }
}


for(i=0;i<object.fruits.length;i++) {
    //calling the function to get total cost of each fruit
    totalpriceofeachfruit[i] = object.counttotal(object.fruits[i].quantity,object.fruits[i].priceperunit);
    if(totalpriceofeachfruit[i] > 240) {
        console.log(object.fruits[i].name);
    }    
}