package io.ionic.plugins.aaosuxrestrictions;

import android.car.drivingstate.CarUxRestrictions;
import android.car.drivingstate.CarUxRestrictionsManager;
import android.util.Log;

import io.ionic.plugins.aaosdatautils.datacallback.DataCallback;
import io.ionic.plugins.aaosdatautils.datacallback.DataCallbackBuilder;
import io.ionic.plugins.aaosdatautils.dataview.DataView;


public class VehicleUxEventCallback implements DataCallback<VehicleUxEventCallback>, CarUxRestrictionsManager.OnUxRestrictionsChangedListener {

    private final String TAG = "CarUXEventCallback";
    DataView<VehicleUxEventCallback> dataView;

    public VehicleUxEventCallback(DataView<VehicleUxEventCallback> dataView) {
        this.dataView = dataView;
    }

    @Override
    public DataView<VehicleUxEventCallback> getDataView() {
        return this.dataView;
    }

    @Override
    public void onUxRestrictionsChanged(CarUxRestrictions carUxRestrictions) {
        VehicleUxRestrictionsDataEvent vehicleUxRestrictionsDataEvent = new VehicleUxRestrictionsDataEvent(VehicleUxRestrictionsDataEvent.Name.CHANGE,carUxRestrictions);
        Log.d(TAG,"Received changed active UX Restrictions: " + carUxRestrictions.toString());
        this.passDataToView(vehicleUxRestrictionsDataEvent);
    }

    public static class Builder implements DataCallbackBuilder<VehicleUxEventCallback> {

        @Override
        public VehicleUxEventCallback build(DataView<VehicleUxEventCallback> dataView) {
            return new VehicleUxEventCallback(dataView);
        }
    }
}
