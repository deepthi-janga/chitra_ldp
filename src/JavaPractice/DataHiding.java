package JavaPractice;

public class DataHiding {
    private String balance = "20000";
    private String pinActual = "987";
    public String getBalance(String pin) {
        if(pin==pinActual) {
            return balance;
        }
        else {
            return ("please enter correct pin");
        }

    }
}
