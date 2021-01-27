//creating an object
let restaurantMenu = {
    restuarantName : "abc",
    items : [
        {
            itemName : "orange juice",
            price    : 150

        },
        {
            itemName : "lime juice",
            price    : 100

        },
        {
            itemName : "watermelon juice",
            price    : 90

        },
        {
            itemName : "pineapple juice",
            price    : 200

        },
        {
            itemName : "orange juice",
            price    : 150

        },
    ],
    listMenuItems : function() {
        var menuList = '';
        for (let i=0 ;i<=4; i++) {
            menuList = menuList + this.items[i].itemName + " " +this.items[i].price + "rs" + "\n"
        }
        alert(menuList)
    },
    selectItem : function(number) {
        alert(this.items[number].itemName)
    }
}


restaurantMenu.listMenuItems()
restaurantMenu.selectItem(2)