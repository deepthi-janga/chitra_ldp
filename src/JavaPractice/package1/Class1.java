package package1;

public class Class1 {
    public int a =10;
    //private variable i, can be accessed only within the class, cannot be accessed by sub class
    private int i = 11;

    //protected method can be accessed within same package, child class of other package but by only child class object,
    protected void protectedMethod() {
        System.out.print("This is protected method");
    }

    public void m() {
        System.out.println("This is public method");
    }

}
