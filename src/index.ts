import type { VehicleErrorEvent} from "@capacitor-community/aaos-data-utils";
import {VehicleDataProxy} from "@capacitor-community/aaos-data-utils";
import {registerPlugin} from "@capacitor/core";

import type {VehicleUxRestrictionsEvent} from "./definitions";
import { VehicleUxRestrictionsPluginInterface} from "./definitions";


const VehicleUxRestrictionsPluginInterface = registerPlugin<VehicleUxRestrictionsPluginInterface>('VehicleUxRestrictionsPlugin')

export class VehicleUxRestrictionsPlugin extends VehicleDataProxy<VehicleUxRestrictionsEvent,VehicleErrorEvent>{

  constructor() {
    super(VehicleUxRestrictionsPluginInterface);
  }

  quickView() : Promise<VehicleUxRestrictionsEvent> {
    return (this.dataService as VehicleUxRestrictionsPluginInterface).quickView().then(vehicleUxRestrictionsEvent => {
      console.debug(`Received value: ${JSON.stringify(vehicleUxRestrictionsEvent,null,3)} for CarUxRestrictions`)
      return vehicleUxRestrictionsEvent
    }).catch(errorEvent => {
      let throwable
      let log = errorEvent
      try {
        throwable = JSON.parse(errorEvent) as VehicleErrorEvent
        log = JSON.stringify(throwable,null,3)
      } catch (e) {
        throwable = errorEvent
      }
      console.error(`Failed receiving value for CarUxRestrictions. Reason ${log}`)
      throw throwable
    })
  }

}

export * from './definitions';
