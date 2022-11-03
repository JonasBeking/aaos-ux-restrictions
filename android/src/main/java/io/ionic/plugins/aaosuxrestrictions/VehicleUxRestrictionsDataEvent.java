package io.ionic.plugins.aaosuxrestrictions;


import android.car.drivingstate.CarUxRestrictions;

import io.ionic.plugins.aaosdatautils.dataevent.DataEvent;

public class VehicleUxRestrictionsDataEvent extends DataEvent {
    /**
     * Leave extraction of parameters to event as code would be unreadable otherwise
     */
    VehicleUxRestrictionsDataEvent(String eventName, CarUxRestrictions carUxRestrictions) {
        super(eventName);

        putData("restrictions",carUxRestrictions.getActiveRestrictions());
        putData("maxContentDepth",carUxRestrictions.getMaxContentDepth());
        putData("maxCumulativeContentItems",carUxRestrictions.getMaxCumulativeContentItems());
        putData("maxRestrictedStringLength",carUxRestrictions.getMaxRestrictedStringLength());
        putData("distractionOptimizationRequired",carUxRestrictions.isRequiresDistractionOptimization());
    }
}
