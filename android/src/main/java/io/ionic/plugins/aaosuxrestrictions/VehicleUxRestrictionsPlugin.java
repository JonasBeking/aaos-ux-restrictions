package io.ionic.plugins.aaosuxrestrictions;


import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import io.ionic.plugins.aaosdatautils.DataPlugin;
import io.ionic.plugins.aaosdatautils.dataerror.DataErrorHandler;
import io.ionic.plugins.aaosdatautils.dataerror.MissingPluginCallArgumentException;
import io.ionic.plugins.aaosdatautils.datapermissions.AutomotiveData;


@AutomotiveData(allowedIds = {-1})
@CapacitorPlugin(name = "VehicleUxRestrictionsPlugin",permissions = {})
public class VehicleUxRestrictionsPlugin extends DataPlugin<VehicleUxEventCallback> {

    @Override
    public void load() {
        this.dataViewManager = new VehicleUxRestrictionViewManager(super.getContext());
        this.dataErrorHandler = new DataErrorHandler();
        super.load();
    }

    @PluginMethod()
    public void quickView(PluginCall call) {
        this.processingChain.executeWithFinal(call,pluginCall -> {
            JSObject value = ((VehicleUxRestrictionViewManager)this.dataViewManager).quickView();
            pluginCall.resolve(value);
        });
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void generateActiveView(PluginCall call) {
        this.processingChain.executeWithFinal(call, pluginCall -> {
            String addressableName = pluginCall.getString("addressableName");
            if(addressableName == null) {
                throw new MissingPluginCallArgumentException("addressableName");
            }
            Log.i(TAG(),"Got addresable Name: " + addressableName);
            this.dataViewManager.generate(pluginCall,addressableName,true);
        });
    }

    @PluginMethod()
    public void generatePassiveView(PluginCall call) {
        this.processingChain.executeWithFinal(call, pluginCall -> {
            String addressableName = pluginCall.getString("addressableName");
            if(addressableName == null) {
                throw new MissingPluginCallArgumentException("addressableName");
            }
            this.dataViewManager.generate(pluginCall,addressableName,false);
            pluginCall.resolve();
        });
    }
}
