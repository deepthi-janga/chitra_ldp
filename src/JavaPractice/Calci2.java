package JavaPractice;

public class Calci2 extends Calci1 {

    public Calci2() {
        System.out.println("This is constructor method parent class");
    }

    public Calci2(String x) {
        System.out.println("This is constructor with params of parent class");
    }

    public int add(int num1, int num2) {
        return num1+num2;
    }
    void printMsg(){
        //This  calls Overridden method (parent class)
        super.printData();
    }
    public int substract(int input1, int input2) {
        System.out.println("method of Calci2");
        return (input1+1)-input2;
    }

    public void printData() {
        System.out.println("executed child class");
    }

}
