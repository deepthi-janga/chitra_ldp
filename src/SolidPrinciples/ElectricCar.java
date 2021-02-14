package SolidPrinciples;

public class ElectricCar implements PrincipleliskovSubstitute {

//deprecated method for Electric car which violates the principle liskov substitution principle
    //This method of interface is not valid for the implements class
    //solution is to rework on the interface with modified  functionality

    @Override
    public void turnOnEngine() throws Exception {
        throw new Exception("There is no engine present to start");
    }

    @Override
    public void accelerate() {

    }
}
