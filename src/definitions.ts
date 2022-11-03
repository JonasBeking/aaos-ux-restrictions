import {VehicleDataEvent, VehicleDataService} from "@capacitor-community/aaos-data-utils";

export interface VehicleUxRestrictionsEvent extends VehicleDataEvent{
  data : {
    restrictions : number,
    maxContentDepth : number,
    maxCumulativeContentItems : number,
    maxRestrictedStringLength : number,
    distractionOptimizationRequired : boolean
  }
}

export interface VehicleUxRestrictionsPluginInterface extends VehicleDataService<VehicleUxRestrictionsEvent>{
  /**
   * Take direct access to the currently active restrictions instead of using the DataView mechanism
   */
  quickView() : Promise<VehicleUxRestrictionsEvent>
}
