package SolidPrinciples;

public interface PrincipleliskovSubstitute {
    //The child Class should be able to do everything the parent Class can do.
    //May not deliver exactly same but should deliver same type to avoid errors
    //This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any errors.
    //old engine cars
        void turnOnEngine() throws Exception;
        void accelerate();

}
