package JavaAssignments;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class PrintSecondMostOccurredLetter {
    private static void printMaxOccurringChar(String inputString)
    {
        HashMap<Character, Integer> charCountMap = new HashMap<>();

        char[] charArray = inputString.replaceAll(" ", "").toCharArray();
        for(int i =0;i<charArray.length;i++) {
           System.out.print(charArray[i]+" array elements ");

        }
        System.out.print(charArray);

        for (char c : charArray)
        {
            if (charCountMap.containsKey(c))
            {
                charCountMap.put(c, charCountMap.get(c)+1);
            }
            else
            {
                charCountMap.put(c, 1);
            }
        }

        Set<Map.Entry<Character, Integer>> entrySet = charCountMap.entrySet();

        int maxCount = 0;

        char maxChar = 0;

        for (Map.Entry<Character, Integer> entry : entrySet)
        {
            if (entry.getValue() > maxCount)
            {

                maxCount = entry.getValue();


                maxChar = entry.getKey();
            }
        }

        System.out.println("Input String : "+inputString);

        System.out.println("Maximum Occurring char and its count :");

        System.out.println(maxChar+" : "+maxCount);
    }
    public static void main(String[] args) {
        {
            printMaxOccurringChar("apple");


        }

    }
    }
