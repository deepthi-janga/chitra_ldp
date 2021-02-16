package JavaAssignments;
//Question : Write a program for 5! (5 factorial)- 5x4x3x2x1
public class Print5Factorial {
    public static void main(String[] args) {
        for (int i = 5; i > 0; i--) {
            if(i!=1) {
                System.out.print(i + " * ");
            }
            else {
                System.out.print(i);
            }
        }
    }
}
