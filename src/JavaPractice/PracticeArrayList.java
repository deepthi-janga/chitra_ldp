package JavaPractice;

import java.util.ArrayList;
import java.util.List;

//ArrayList is a class which implements list interface
//ArrayList provides more methods compared with array
public class PracticeArrayList {
    public static void main(String[] args) {
        //declaring the array list
        ArrayList<String> arrList = new ArrayList<String>();
        List<String> arr = new ArrayList<>();

        //adding items to array list
        arrList.add("c");//c
        arrList.add("k");//c,k
        arrList.add(null);
        arrList.add(0, "a");//a,c
        System.out.println(arrList.size() + " array size");
        arrList.add(arrList.size(), "added at last");

        //get the array list without need of for loop
        System.out.println(arrList);

        //remove item from array list
        arrList.remove("k");
        arrList.remove(0);

        //get the object/item present in the index
        System.out.println(arrList.get(0));

        //check if array is empty or not
        System.out.println(arrList.isEmpty()); //returns true if empty

        //get the index of the object
        arrList.add("chitra");
        System.out.println(arrList.indexOf("chitra"));

        //Check if array contains certain object
        System.out.println(arrList.contains("chitra")); //returns true if present


    }
}
