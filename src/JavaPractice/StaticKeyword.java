package JavaPractice;

public class StaticKeyword {
    static String companyName = "zemoso Technologies";

    public StaticKeyword(int empId, String empName, int experience) {
       int rollno = empId;
       String  name = empName;
       int  exp = experience;
    }

    static  void methodStatic() {
        System.out.println("This is static method");

    }

}
