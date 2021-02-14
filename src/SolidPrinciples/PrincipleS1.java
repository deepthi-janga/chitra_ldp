package SolidPrinciples;

public class PrincipleS1 {
    public static void main(String[] args) {
        Pbook book1 = new Pbook();
        book1.setText("This is the text of the book1, you can replace anything here ");
        book1.replaceWordInText("text");
        //For printing the book am calling other class
        PrintBook pb = new PrintBook();
        pb.printTheBook(book1.returnBook());

    }
}
