import {registerPlugin} from "@capacitor/core";
import {VehicleDataProxy} from "@capacitor-community/aaos-data-utils";
import {VehicleUxRestrictionsEvent, VehicleUxRestrictionsPluginInterface} from "./definitions";

const VehicleUxRestrictionsPluginInterface = registerPlugin<VehicleUxRestrictionsPluginInterface>('VehicleUxRestrictionsPlugin')

export class VehicleUxRestrictionsPlugin extends VehicleDataProxy<VehicleUxRestrictionsEvent>{

  constructor() {
    super(VehicleUxRestrictionsPluginInterface);
  }

  quickView() : Promise<VehicleUxRestrictionsEvent> {
    return (this.dataService as VehicleUxRestrictionsPluginInterface).quickView().then(vehicleUxRestrictionsEvent => {
      console.log(`Received value: ${vehicleUxRestrictionsEvent} for CarUxRestrictions`)
      return vehicleUxRestrictionsEvent
    }).catch(reason => {
      console.error(`Failed receiving value for CarUxRestrictions. Reason ${reason}`)
      throw JSON.parse(reason)
    })
  }
}

export * from './definitions';
