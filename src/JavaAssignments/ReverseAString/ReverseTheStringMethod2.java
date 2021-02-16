package ReverseAString;

public class ReverseTheStringMethod2 {
    public static void main(String[] args) {
        //without using charAt
        String s = "You can reverse this string";
        char[] c = s.toCharArray();
        for (int i = c.length - 1; i >= 0; i--) {
            System.out.print(c[i]);

        }

    }
}
