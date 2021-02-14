package JavaPractice;

public class ExceptionsInJava {
    public static void main(String[] args) {

        //java build in exception
        int b = 7;
        int c = 0;

        int k =b/c;
        System.out.print(k);


//        try {
//            int k = b / c;
//            System.out.println(k);
//            System.out.print("printed this line inside try block");
//        } catch (Exception e) { //catches  the run time errors and the code execution continues
//            System.out.println(e);
//        }



        int x= 10;
        int y= 13;
        int add = x+y;
        System.out.print(add);
    }
}
