package JavaAssignments;
//Question : Count the Size of the array without using any inbuilt functions
public class CountTheSizeOfArray {
    public static void main(String[] args) {
        int[] arr = {2,5,6,7,6,78};
        int size = 0;
        int i=0;
        Boolean x = true;
        try {

            while (x) {
                int ar = arr[size];
                size = size + 1;
            }
        }
        catch(Exception e) {
            System.out.print("Size is : "+size);
        }

    }
}
