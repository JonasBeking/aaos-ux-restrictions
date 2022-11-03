package io.ionic.plugins.aaosuxrestrictions;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import io.ionic.plugins.aaosdatautils.DataPlugin;
import io.ionic.plugins.aaosdatautils.dataerror.DataErrorHandler;
import io.ionic.plugins.aaosdatautils.dataerror.MissingPluginCallArgumentException;


@CapacitorPlugin(name = "VehicleUxRestrictionsPlugin")
public class VehicleUxRestrictionPlugin extends DataPlugin<VehicleUxEventCallback> {

    @Override
    public void load() {
        super.load();
        this.dataViewManager = new VehicleUxRestrictionViewManager(super.getContext());
        this.dataErrorHandler = new DataErrorHandler();
    }

    @PluginMethod()
    public void quickView(PluginCall call) {
        this.processingChain.executeWithFinal(call,pluginCall -> {
            JSObject value = ((VehicleUxRestrictionViewManager)this.dataViewManager).quickView();
            pluginCall.resolve(value);
        });
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    void generateActiveView(PluginCall call) {
        this.processingChain.executeWithFinal(call, pluginCall -> {
            String addressableName = pluginCall.getString("addressableName");
            if(addressableName == null) {
                throw new MissingPluginCallArgumentException("addressableName");
            }
            this.dataViewManager.generate(pluginCall,addressableName,true,true);
        });
    }

    @PluginMethod()
    void generatePassiveView(PluginCall call) {
        this.processingChain.executeWithFinal(call, pluginCall -> {
            String addressableName = pluginCall.getString("addressableName");
            Boolean overwriteOldEvents = pluginCall.getBoolean("overwriteOldEvents");
            if(addressableName == null) {
                throw new MissingPluginCallArgumentException("addressableName");
            }
            if(overwriteOldEvents == null) {
                throw new MissingPluginCallArgumentException("overwriteOldEvents");
            }
            this.dataViewManager.generate(pluginCall,addressableName,false,overwriteOldEvents);
            pluginCall.resolve();
        });
    }
}
