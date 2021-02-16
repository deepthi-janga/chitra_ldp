package CoffeeVendingMachine;
//Write a Java program for a coffee vending machine which takes
//4 inputs milk, water, coffee,sugar
//Enter the quantities for each type of coffee
//                     milk, water, coffee,sugar
//Expresso              5         5        10        5
//Cappuchino            5          10      10        0
//Frappe                0         10       15       10
public class CoffeeVendingMachine {
    public String getCoffeeVendingMachine(int milk, int water, int coffee, int sugar, String typeOfCoffee) {
        switch (typeOfCoffee) {
            case "Expresso":
                if (milk == 5 && water == 5 && coffee == 10 && sugar == 5)
                    return "Expresso coffee is prepared";
                else
                    return "Ingredients to make Expresso are missing ";

            case "Cappuchino":
                if (milk == 5 && water == 10 && coffee == 10 && sugar == 0)
                    return "Cappuchino coffee is prepared";
                else
                    return "Ingredients to make Cappuchino are missing ";

            case "Frappe":
                if (milk == 0 && water == 10 && coffee == 15 && sugar == 10)
                    return "Frappe coffee is prepared";
                else
                    return "Ingredients to make Frappe are missing ";
            default:
                return "Cannot prepare "+ typeOfCoffee;

        }

    }
}
