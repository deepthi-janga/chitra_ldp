package SolidPrinciples;

public class WashingMachineBasic implements PrincipleInterfaceSegregation {

    @Override
    public void washCloths() {

    }

    @Override
    public void rinseCloths() {

    }
//This method is not needed to implement for basic washing machine
    //solution is to segregate the interface so that class can implement respectively
    @Override
    public void spinCloths() {

    }
}
