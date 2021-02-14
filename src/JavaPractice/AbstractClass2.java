package JavaPractice;

abstract class AbstractClass2 implements AbstractClass1 {
      @Override
      public void greetTheGuest() {
          System.out.print("Welcome guest");
      }

      abstract public void methodInAbstractClass();

      //Making this class as abstract to not define the interface class methods


}
