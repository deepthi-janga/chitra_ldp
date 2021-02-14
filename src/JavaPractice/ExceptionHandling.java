package JavaPractice;

public class ExceptionHandling {
    public static void main(String[] args) {

        //java build in exception
        int b = 7;
        int c = 0;

        try {
            int k = b / c;
            System.out.println(k);
            System.out.print("printed this line inside try block");
        } catch (Exception e) {
            System.out.println(e);

        } finally {
            System.out.println("execute this block");
        }

//Array index out of bounds exception
        try{
                    int a[] = new int[5];
                    a[6] = 9; // accessing 7th element in an array of
                    // size 5
                }
                catch(ArrayIndexOutOfBoundsException e){
                    System.out.println ("Array Index is Out Of Bounds");
                }
//String index out of bounds exception
        try {
            String a = "This is like chipping "; // length is 22
            char ch = a.charAt(24); // accessing 25th element
            System.out.println(ch);
        }
        catch(StringIndexOutOfBoundsException e) {
            System.out.println("StringIndexOutOfBoundsException");
        }
            }
    }



