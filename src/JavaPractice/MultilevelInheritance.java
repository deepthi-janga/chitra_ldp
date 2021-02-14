package JavaPractice;

public class MultilevelInheritance extends Calci3 {
    public static void main(String[] args) {
        Calci3 c = new Calci3();
        System.out.println(c.add(3,2));
        System.out.println(c.substract(3,2));
        System.out.println(c.multiply(3,5));
    }
}
