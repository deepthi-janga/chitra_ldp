package JavaPractice;

public class MethodOverriding extends Calci2{

    public static void main(String[] args) {


        Calci3 c = new Calci3();
        c.substract(10,19);// calls the child class method (method overriding)

    }
}
