package JavaAssignments;

public class StringContainsSpecifiedWord {
    public boolean checkIfWordIsPresent(String sentence, String wordToSearch ) {
        if (sentence.toLowerCase().contains(wordToSearch.toLowerCase())) {
            return true;
        }
            return false;
        }
    }


