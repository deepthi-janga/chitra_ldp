package JavaAssignments;

public class AccessMethodsDifferentClass {
    public static void main(String[] args) {
        DifferentClass d = new DifferentClass();
        d.otherClassNonStatic();
        DifferentClass.otherClass();
    }
}
