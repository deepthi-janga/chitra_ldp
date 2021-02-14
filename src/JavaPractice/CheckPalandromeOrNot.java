package JavaPractice;

public class CheckPalandromeOrNot {
    public static void main(String[] args) {

        String s= "123";
        String input1 = s.toString();
        String newInput = "";
        for (int i = (input1.length() - 1); i >= 0; i--) {
            newInput = newInput+input1.charAt(i);
        }
        if(input1.equalsIgnoreCase(newInput)) {
            System.out.print("Entered input is a palandrome "+input1+ " "+newInput);
        }
        else {
            System.out.print("Entered input is not a palandrome "+input1+" "+newInput);
        }
    }
}
