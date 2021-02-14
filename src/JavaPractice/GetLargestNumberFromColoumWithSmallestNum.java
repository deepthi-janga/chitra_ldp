package JavaPractice;

public class GetLargestNumberFromColoumWithSmallestNum {
    public static void main(String[] args) {
        //int[][] arr = new int[2][2];
        int abc[][] = {{1, 1, 5}, {5, 9, 3}, {9, 8, 6}};
        int min = abc[0][0];
        int newj=0 ;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (abc[i][j] < min) {
                    min = abc[i][j];
                     newj = j;
                }
            }
        }
        System.out.println("smallest number is : " + min +" in column "+newj);
        int j = newj;
        int max = abc[0][j];
        for (int i = 0; i < 3; i++) {
           if(abc[i][j] > max ) {
               max =abc[i][j];
           }
        }
        System.out.println("largest number in column " +newj +" is "+max);

    }
}

