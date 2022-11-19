package io.ionic.plugins.aaosuxrestrictions;

import android.car.drivingstate.CarUxRestrictions;
import io.ionic.plugins.aaosdatautils.dataevent.DataValueEvent;

public class VehicleUxRestrictionsDataEvent extends DataValueEvent {

    enum Name{
        CHANGE,
        VIEW
    }

    /**
     * Leave extraction of parameters to event as code would be unreadable otherwise
     */
    VehicleUxRestrictionsDataEvent(VehicleUxRestrictionsDataEvent.Name eventName, CarUxRestrictions carUxRestrictions) {
        super(eventName.ordinal());

        putData("restrictions",carUxRestrictions.getActiveRestrictions());
        putData("maxContentDepth",carUxRestrictions.getMaxContentDepth());
        putData("maxCumulativeContentItems",carUxRestrictions.getMaxCumulativeContentItems());
        putData("maxRestrictedStringLength",carUxRestrictions.getMaxRestrictedStringLength());
        putData("distractionOptimizationRequired",carUxRestrictions.isRequiresDistractionOptimization());
    }
}
