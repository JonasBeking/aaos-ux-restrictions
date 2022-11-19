import type {VehicleDataEvent, VehicleDataService, VehicleErrorEvent} from "@capacitor-community/aaos-data-utils";


export enum VehicleUxRestrictionTypes{
  UX_RESTRICTIONS_BASELINE=0x000,
  UX_RESTRICTIONS_FULLY_RESTRICTED=0x11f,
  UX_RESTRICTIONS_LIMIT_CONTENT=0x20,
  UX_RESTRICTIONS_LIMIT_STRING_LENGTH=0x04,
  UX_RESTRICTIONS_NO_DIALPAD=0x01,
  UX_RESTRICTIONS_NO_FILTERING=0x02,
  UX_RESTRICTIONS_NO_KEYBOARD=0x08,
  UX_RESTRICTIONS_NO_SETUP=0x40,
  UX_RESTRICTIONS_NO_TEXT_MESSAGE=0x80,
  UX_RESTRICTIONS_NO_VIDEO=0x10,
  UX_RESTRICTIONS_NO_VOICE_TRANSCRIPTION=0x100,
}

export interface VehicleUxRestrictionsEvent extends VehicleDataEvent{
  data : {
    restrictions : number,
    maxContentDepth : number,
    maxCumulativeContentItems : number,
    maxRestrictedStringLength : number,
    distractionOptimizationRequired : boolean
  }
}

export interface VehicleUxRestrictionsPluginInterface extends VehicleDataService<VehicleUxRestrictionsEvent,VehicleErrorEvent>{
  /**
   * Take direct access to the currently active restrictions instead of using the DataView mechanism
   */
  quickView() : Promise<VehicleUxRestrictionsEvent>
}
