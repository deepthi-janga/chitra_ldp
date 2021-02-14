package SolidPrinciples;

public class PrincipleDependencyInversion {

    // decoupling of software modules.
    //This way, instead of high-level modules depending on low-level modules, both will depend on abstractions.
//lost the ability to switch out Monitor class with a different one
        Monitor monitor;
        MonitorInterface m;

//        public PrincipleDependencyInversion() {
//            monitor = new Monitor();
//        }
// This we we get ability to switch the monitor
    public PrincipleDependencyInversion(LatestModelMonitor monitor) {
        this.m = monitor;
    }


}
