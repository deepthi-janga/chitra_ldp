package JavaPractice;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class UseOfDateCalenderClasses {
    public static void main(String[] args) throws ParseException {
        Date d = new Date();
        //number of milliseconds passed from January 1, 1970
        System.out.println(d.getTime()+" time in milli seconds");
        //format the current date
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        System.out.println(d+" current time");

        //get time after 100000 milli seconds
        Date futureTime = new Date(d.getTime()+100000);
        System.out.println(futureTime+" Time after 100 milli seconds");
        if(d.before(futureTime)) {
            System.out.println("future time is set before");
        }

        //difference between parsing and formatting
        //formatting converts date to string
        String date = formatter.format(d);

        //parsing the date
        Date date2 =  formatter.parse(date);

        System.out.println(date);
        System.out.println(date2);

        //use of Calender class
        Calendar cal=Calendar.getInstance();
        cal.getFirstDayOfWeek();
        System.out.println(cal.getTime()+" calender time");
        System.out.println(cal.getFirstDayOfWeek()+" first day of the week");//sunday
        System.out.println(cal.getWeekYear()+" wek year");//sunday
        System.out.println("Current Calendar's Year: " + cal.get(Calendar.YEAR));
        System.out.println("Current Calendar's Day: " + cal.get(Calendar.DATE));
        System.out.println("Current MINUTE: " + cal.get(Calendar.MINUTE));
        System.out.println("Current SECOND: " + cal.get(Calendar.SECOND));

        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -15);
        System.out.println("15 days ago: " + calendar.getTime());
        calendar.add(Calendar.MONTH, 4);
        System.out.println("4 months later: " + calendar.getTime());
        calendar.add(Calendar.YEAR, 2);
        System.out.println("2 years later: " + calendar.getTime());




    }
}
