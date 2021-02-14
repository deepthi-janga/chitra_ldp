package JavaPractice;

public class StringReverse {
    public static void main(String[] args) {
        String s= "chitra";
        String input1 = s.toString();
        String newInput = "";
        for (int i = (input1.length() - 1); i >= 0; i--) {
            newInput = newInput+input1.charAt(i);
        }
        System.out.print("reverse of a string is "+newInput);

    }
    }

