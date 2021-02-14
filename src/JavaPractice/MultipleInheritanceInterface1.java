package JavaPractice;

//Multiple inheritance using interface (more than one parent), declared but not defined
public interface MultipleInheritanceInterface1 {
     void greetTheGuest();
     //defined the method in interface
     default void print() {
          System.out.println("defined a method in interface class using default ");//1.8
     }

      //no body
}
