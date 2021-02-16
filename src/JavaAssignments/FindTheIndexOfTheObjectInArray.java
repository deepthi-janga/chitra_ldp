package JavaAssignments;
//Question : Declare an array with 10 names. Find the index of a given name.
public class FindTheIndexOfTheObjectInArray {
    public static void main(String[] args) {
        String[] array = {"Chitra","Gona", "John", "Ron","Justin", "Brian"};

        for(int ar =0;ar<=array.length;ar++) {
            if(array[ar].contentEquals("Ron")) {
                System.out.print("Index is:" + ar);
                break;
            }
        }

    }
}
