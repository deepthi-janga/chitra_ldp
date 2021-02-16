package JavaAssignments;

public class CallTheWordCheckClass {
    public static void main(String[] args) {
        StringContainsSpecifiedWord check = new StringContainsSpecifiedWord();
       Boolean b = check.checkIfWordIsPresent("Cypress can be written in Javascript and Typescript.","CN");
       System.out.print(b);
    }
}
