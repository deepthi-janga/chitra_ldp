package JavaPractice;

public class SuperKeyWord extends Calci3 {
    public static void main(String[] args) {
        Calci3 c = new Calci3();
        c.printData();//from child class
        c.printMsg();// from parent class
        //By default parent constructor runs first and then child constructor runs
        //Parameterising the constructor of parent



    }
}
