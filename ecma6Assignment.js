class WithObject {
   object = {
    //created a array of name fruits
    fruits :
    [ {
        name : "straberry",
        quantity : 15,
        priceperunit : undefined
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
     counttotal : function(quantity, priceperunit = 1) //default parameter value
     {
        return quantity*priceperunit;
    }
}
}

withObject = new WithObject()//creating object to class to access objects of the class

//returns true when fruits cost is greater than 250
//using let instead of const so that i can redefine
let fuiltsCostGreaterThan250 = withObject.object.fruits.map((fruits) => withObject.object.counttotal(fruits.quantity, fruits.priceperunit) >= 250);
console.log(fuiltsCostGreaterThan250);

//filter the fruits object, gives only fruits greater than 250 rs
fuiltsCostGreaterThan250 = withObject.object.fruits.filter((fruits) => withObject.object.counttotal(fruits.quantity, fruits.priceperunit) >= 250);
console.log(fuiltsCostGreaterThan250);//prints all the objects whose cost is greater than 250