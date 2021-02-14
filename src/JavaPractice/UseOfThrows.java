package JavaPractice;

public class UseOfThrows {

    public void m() {
        int x =7/0;
        System.out.println("passed");
    }
    public static void main(String[] args) throws InterruptedException, ArithmeticException {//throws suppresses the exception, it can be handled with try catch block
            Thread.sleep(10000);

              UseOfThrows th = new UseOfThrows();

              th.m();


            System.out.println("Hello Geeks");
        }
    }

