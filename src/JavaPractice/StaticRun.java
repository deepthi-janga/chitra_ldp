package JavaPractice;

public class StaticRun {
    public static void main(String[] args) {
        StaticKeyword emp1 = new StaticKeyword(111, "Chitra", 2);//common property for both the objects
        StaticKeyword emp2 = new StaticKeyword(222, "gona", 2);//common property for both the objects
        System.out.println(StaticKeyword.companyName);//calling static property without creating instance
        StaticKeyword.methodStatic();//calling static method
    }
}
