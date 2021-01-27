const cost = 10;
function cashier(collectedAmount) {
    if(collectedAmount < 10) {
        console.log("you gave too little, you still owe $"+ (cost-collectedAmount));
    }
    else if(collectedAmount > 10) {
        console.log("You gave too much. Your change due is $" + (collectedAmount-cost));
    }
    else {
        console.log("you gave exact amount")
    } 
}

cashier(8.7);
cashier(50);
cashier(10)