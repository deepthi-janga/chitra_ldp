package JavaPractice;

public class FibonacciSeries {
    public static void main(String[] args) {
        int i = 1;
        int j = 1;
        int x = 0;
        System.out.print(i + " " + j+" ");
        int n = 7;
        while ( n > 1) {
            x = i + j;
            System.out.print(x +" ");
            i = j;
            j = x;
            n--;

        }
    }
}
