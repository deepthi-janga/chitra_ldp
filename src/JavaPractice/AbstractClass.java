package JavaPractice;

public class AbstractClass extends AbstractClass2 {
    //cannot create a object to abstract class
    @Override
    public void sendOfTheGuest() {
        System.out.println("This is from abstract class");

    }

    @Override
    public void methodInAbstractClass() {
        System.out.println("This is also from abstract class");
    }
}
