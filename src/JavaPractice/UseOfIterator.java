package JavaPractice;

import java.util.ArrayList;
import java.util.Iterator;

public class UseOfIterator {
    public static void main(String[] args) {
        //iterator with ArrayList(can store duplicate values and in maintains order)
        ArrayList<String> ls = new ArrayList<String>();
        ls.add("a");
        ls.add("b");
        ls.add("c");

        //ArrayList<String> lss = new ArrayList<String>();

        Iterator<String> it=ls.iterator();
        //Iterator<String> itt=lss.iterator();
        //itt.next();
        System.out.println(it.next());
        //loop through the elements of the list
            while(it.hasNext()) {
                ls.remove(0);
        }
            System.out.println(ls);
    }
}
