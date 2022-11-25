import type { VehicleErrorEvent } from "@capacitor-community/aaos-data-utils";
import { VehicleDataProxy } from "@capacitor-community/aaos-data-utils";
import type { VehicleUxRestrictionsEvent } from "./definitions";
export declare class VehicleUxRestrictionsPlugin extends VehicleDataProxy<VehicleUxRestrictionsEvent, VehicleErrorEvent> {
    constructor();
    quickView(): Promise<VehicleUxRestrictionsEvent>;
}
export * from './definitions';
