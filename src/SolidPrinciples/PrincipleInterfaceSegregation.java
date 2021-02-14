package SolidPrinciples;

public interface PrincipleInterfaceSegregation {

    //larger interfaces should be split into smaller ones
    // we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.
    public void washCloths();

    public void rinseCloths();

    public void spinCloths();
}
