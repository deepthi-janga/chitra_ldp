package JavaPractice;

public class Calci3 extends Calci2 {

    public Calci3() {
    super("abc");
        System.out.println("This is constructor method of child");
    }
    public int multiply(int num1, int num2) {
        return num1*num2;
    }

}

