import type { VehicleDataEvent, VehicleDataService, VehicleErrorEvent } from "@capacitor-community/aaos-data-utils";
export declare enum VehicleUxRestrictionTypes {
    UX_RESTRICTIONS_BASELINE = 0,
    UX_RESTRICTIONS_FULLY_RESTRICTED = 287,
    UX_RESTRICTIONS_LIMIT_CONTENT = 32,
    UX_RESTRICTIONS_LIMIT_STRING_LENGTH = 4,
    UX_RESTRICTIONS_NO_DIALPAD = 1,
    UX_RESTRICTIONS_NO_FILTERING = 2,
    UX_RESTRICTIONS_NO_KEYBOARD = 8,
    UX_RESTRICTIONS_NO_SETUP = 64,
    UX_RESTRICTIONS_NO_TEXT_MESSAGE = 128,
    UX_RESTRICTIONS_NO_VIDEO = 16,
    UX_RESTRICTIONS_NO_VOICE_TRANSCRIPTION = 256
}
export interface VehicleUxRestrictionsEvent extends VehicleDataEvent {
    data: {
        restrictions: number;
        maxContentDepth: number;
        maxCumulativeContentItems: number;
        maxRestrictedStringLength: number;
        distractionOptimizationRequired: boolean;
    };
}
export interface VehicleUxRestrictionsPluginInterface extends VehicleDataService<VehicleUxRestrictionsEvent, VehicleErrorEvent> {
    /**
     * Take direct access to the currently active restrictions instead of using the DataView mechanism
     */
    quickView(): Promise<VehicleUxRestrictionsEvent>;
}
