package JavaPractice;

public class UseOfThrow {
    public static void main(String[] args) throws Exception {
        //to explicitly throw an exception
         int marks = 20;
        if(marks < 70) {
            throw new Exception("not eligible");//further code does not execute
        }
        else {
            System.out.print("eligible");
        }
        System.out.print("after the block");
    }
}
