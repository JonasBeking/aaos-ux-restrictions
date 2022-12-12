import { VehicleDataProxy } from "@capacitor-community/aaos-data-utils";
import { registerPlugin } from "@capacitor/core";
const VehicleUxRestrictionsPluginInterface = registerPlugin('VehicleUxRestrictionsPlugin');
export class VehicleUxRestrictionsPlugin extends VehicleDataProxy {
    constructor() {
        super(VehicleUxRestrictionsPluginInterface);
    }
    quickView() {
        return this.dataService.quickView().then(vehicleUxRestrictionsEvent => {
            console.debug(`Received value: ${JSON.stringify(vehicleUxRestrictionsEvent, null, 3)} for CarUxRestrictions`);
            return vehicleUxRestrictionsEvent;
        }).catch(errorEvent => {
            let throwable;
            let log = errorEvent;
            try {
                throwable = JSON.parse(errorEvent);
                log = JSON.stringify(throwable, null, 3);
            }
            catch (e) {
                throwable = errorEvent;
            }
            console.error(`Failed receiving value for CarUxRestrictions. Reason ${log}`);
            throw throwable;
        });
    }
}
export * from './definitions';
//# sourceMappingURL=index.js.map