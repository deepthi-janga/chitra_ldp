package JavaPractice;

public class SmallestNumberInMatrix {

    public static void main(String[] args) {
        int abc[][] = {{20, 47, 55}, {35, 25, 105}, {41, 42, 99}};
        int min = abc[0][0];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (abc[i][j] < min) {
                    min = abc[i][j];
                }
            }
        }
        System.out.println("smallest number is : " +min);
    }
}
