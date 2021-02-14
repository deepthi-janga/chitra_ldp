package package2;

import package1.Class1;

public class Class2 extends Class1{
    public static void main(String[] args) {
        Class1 c = new Class1();
        int s = c.a;
        Class2 c2 = new Class2();
        c2.protectedMethod();

    }
    }



