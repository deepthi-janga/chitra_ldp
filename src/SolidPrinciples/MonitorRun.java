package SolidPrinciples;

public class MonitorRun {
    public static void main(String[] args){
        //create an object to latestMonitor
        LatestModelMonitor latest = new LatestModelMonitor();
        PrincipleDependencyInversion p = new PrincipleDependencyInversion(latest);


    }
}
