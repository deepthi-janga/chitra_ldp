package JavaPractice;

public class MagicSquare {
    public static void main(String[] args) {
        int n = 3;
        int[][] array = new int[n][n];
        //int x = n * ((n * n) + 1) / 2;
        //getting the position to place 1
        int i = n / 2;
        int j = n - 1;
        array[i][j] = 1;
        System.out.println(array[i][j]);

        for (int z = 2; z <= (n * n); z++) {
            i = i - 1;
            j = j + 1;
            System.out.println(i +" "+j+" inside the loop");//i=0, j=3
            if (i == -1 && j!=n) {
                i = n - 1;
                System.out.println(i +" i changes to 2 from -1");
            } else if (j == n && i!= -1) {
                j = 0;
                System.out.println(i +" "+j+" inside the 2nd loop");//i=0, j=0

            } else if (i == -1 && j == n) {
                i = 0;
                j = n - 2;
                System.out.println(i +" "+j+ " i changes to 0 from -1, j changes to 1 from 3");
            }
           //checks if position is already filled
            for (int k = 1; k <=(n * n); k++) {
                if (array[i][j] == k) {
                    System.out.println(i +" "+j+ " value present in position is" + k);
                    i = i + 1;
                    j = j - 2;
                    System.out.println(i +" "+j+ " values change as position is not available");
                    break;
                }
            }
            System.out.print(i +" i value"+j +"j value");
            array[i][j] = z;
            System.out.println("final value is "+array[i][j]+" with i and j values "+ i +" "+j);


        }
        //To print the array in 3x3 matrix
        for (int l = 0; l < n; l++) {
            for (int m = 0; m < n; m++) {
                System.out.print(array[l][m] +" ");
            }
            System.out.println();
        }
    }

}


