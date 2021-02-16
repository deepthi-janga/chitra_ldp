package AadharCardProgram;

public class ImplementsAadhaarInterface implements AadhaarCardInterface {

    @Override
    public void AddressProof(String gasBill) {
        System.out.println("Address proof is "+ gasBill);
    }

    @Override
    public void IDProof(String panNo) {
        System.out.println("Id proof is "+ panNo);
    }
}
