import { VehicleDataProxy } from "@capacitor-community/aaos-data-utils";
import { registerPlugin } from "@capacitor/core";
const VehicleUxRestrictionsPluginInterface = registerPlugin('VehicleUxRestrictionsPlugin');
export class VehicleUxRestrictionsPlugin extends VehicleDataProxy {
    constructor() {
        super(VehicleUxRestrictionsPluginInterface);
    }
    quickView() {
        return this.dataService.quickView().then(vehicleUxRestrictionsEvent => {
            console.log(`Received value: ${vehicleUxRestrictionsEvent} for CarUxRestrictions`);
            return vehicleUxRestrictionsEvent;
        }).catch(reason => {
            console.error(`Failed receiving value for CarUxRestrictions. Reason ${reason}`);
            throw JSON.parse(reason);
        });
    }
}
export * from './definitions';
//# sourceMappingURL=index.js.map