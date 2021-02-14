package JavaPractice;

public interface AbstractClass1 {
    //member of the interface class are static final by default
     static final String a  = "Welcome!";

    void greetTheGuest();
    void sendOfTheGuest();
    private void p() {
        System.out.print("This is private method, can be access only with in the implements class");
    }

    static void greet1() {
        System.out.print("This is static method in interface class");
    }

    default void print() {
        System.out.println("defined a method in interface class using default ");//1.8
    }

}
