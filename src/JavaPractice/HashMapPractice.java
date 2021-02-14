package JavaPractice;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class HashMapPractice {
    public static void main(String[] args) {
        //Hash map is used to store  key value pair
        //Hapmap does not store duplicate keys, no assurance on maintaining order
        HashMap<Integer,String> hsMap = new HashMap<Integer, String>();
        hsMap.put(1, "one");
        hsMap.put(2, "two");
        hsMap.put(2, "ONE");
        hsMap.put(3, "three");
        hsMap.put(4, "four");
        hsMap.put(5, "");
        hsMap.put(6, null);//possible to give value as null
        System.out.println(hsMap);

        //Iterator with hashmap
        //BEFORE USING ITERATOR, each key and value shall be stored in a set index
        Set st = hsMap.entrySet();
        Iterator it = st.iterator();
        while(it.hasNext()) {
            System.out.println(it.next());
            //to separate key , value we use Map.entry
            Map.Entry mp = (Map.Entry) it.next();
            System.out.println(mp.getKey());
            System.out.println(mp.getValue());
        }

       hsMap.forEach((k,v)->System.out.println("test"+k));

        //prints the value of key 1
        System.out.println(hsMap.get(1));

        //print all the keys present
        System.out.println(hsMap.keySet());

        //print all the values present
        System.out.println(hsMap.values());

        System.out.println(hsMap.size());//4
        System.out.println(hsMap.containsKey(3));//true
        System.out.println(hsMap.containsValue(3));//false











    }
}
