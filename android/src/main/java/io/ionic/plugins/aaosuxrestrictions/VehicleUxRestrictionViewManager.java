package io.ionic.plugins.aaosuxrestrictions;

import android.car.Car;
import android.car.drivingstate.CarUxRestrictionsManager;
import android.content.Context;

import com.getcapacitor.Bridge;
import com.getcapacitor.PluginCall;

import io.ionic.plugins.aaosdatautils.dataview.DataView;
import io.ionic.plugins.aaosdatautils.dataview.DataViewManager;


public class VehicleUxRestrictionViewManager extends DataViewManager<VehicleUxEventCallback> {
    private final CarUxRestrictionsManager carUxRestrictionsManager;

    VehicleUxRestrictionViewManager(Context context) {
        Car car = Car.createCar(context);
        this.carUxRestrictionsManager = (CarUxRestrictionsManager) car.getCarManager(Car.CAR_UX_RESTRICTION_SERVICE);
        this.dataCallbackBuilder = new VehicleUxEventCallback.Builder();
    }

    public VehicleUxRestrictionsDataEvent quickView() {
        return new VehicleUxRestrictionsDataEvent(VehicleUxRestrictionsDataEvent.Name.VIEW,this.carUxRestrictionsManager.getCurrentCarUxRestrictions());
    }

    @Override
    public DataView<VehicleUxEventCallback> generate(PluginCall pluginCall, String addressableName, Boolean isActive) {
        DataView<VehicleUxEventCallback> uxRestrictionDataView = super.generate(pluginCall,addressableName,isActive);
        carUxRestrictionsManager.registerListener(uxRestrictionDataView.getCallback());
        return uxRestrictionDataView;
    }

    @Override
    public DataView<VehicleUxEventCallback> remove(String addressableName, Bridge bridge) {
        carUxRestrictionsManager.unregisterListener();
        return super.remove(addressableName, bridge);
    }
}
