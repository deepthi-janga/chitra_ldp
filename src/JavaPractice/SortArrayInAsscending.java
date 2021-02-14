package JavaPractice;

public class SortArrayInAsscending {


    public static void main(String[] args) {
        int arr[] = {2, 4, 6, 1, 8};
        for (int i = 0; i < arr.length;i++) {
            for(int j =0;j<arr.length;j++)
                if(arr[i]<arr[j]) {
                   int  temp = arr[j];
                   arr[j]=arr[i];
                   arr[i]=temp;
            }

        }
        System.out.println("printed the array in ascending order");
        for(int i=0;i<arr.length;i++) {
            System.out.println( +arr[i]);
        }
    }
}
