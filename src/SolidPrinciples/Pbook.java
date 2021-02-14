package SolidPrinciples;

public class Pbook {
    //S single responsibility - Class shall have only one job

        private String name;
        private String author;
        private String text;
        public String x;

    //constructor, getters and setters
        public String setText(String text) {
            this.text = text;
            return this.text;
        }

     // methods that directly relate to the book properties
        public String replaceWordInText(String word){
             x = text.replaceAll(word, "content");
            return x;
        }
        public String returnBook(){
            return x;
        }



////method which is concerned to print the book, violates the first principle
//    public void printThebook(String word){
//        //our code for formatting and printing the text
//
//
//    }

    }

