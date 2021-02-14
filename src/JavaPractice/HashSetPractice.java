package JavaPractice;

import java.util.HashSet;
import java.util.Iterator;

public class HashSetPractice {
    public static void main(String[] args) {
        //Hash set does not store the objects in particular order, and does not store duplicate obhects
        HashSet<String> hs = new HashSet<String>();
        //add elements to Hash set
        hs.add("a");
        hs.add("a");
        hs.add("b");
        hs.add("c");
        hs.add("d");
        hs.add(null);
        hs.forEach((v)->System.out.println("test"+v));

        //get objects of hash set
        System.out.println(hs);
        System.out.println(hs.remove("c"));
        //hs.clear();
        System.out.println(hs.isEmpty());
        System.out.println(hs.size());
        //Iterator with hash set
        Iterator it = hs.iterator();
        while(it.hasNext()) {
            System.out.print(it.next());
        }






    }
}
