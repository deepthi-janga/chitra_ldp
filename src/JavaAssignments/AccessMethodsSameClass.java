package JavaAssignments;


public class AccessMethodsSameClass {
    private void thisClassMethod() {
        System.out.println("same class method");
    }
    private static void thisClassStaticMethod() {
        System.out.println("same class static method");
    }

    public static void main(String[] args) {
        AccessMethodsSameClass.thisClassStaticMethod();
        AccessMethodsSameClass ams = new AccessMethodsSameClass();
        ams.thisClassMethod();

    }
}
