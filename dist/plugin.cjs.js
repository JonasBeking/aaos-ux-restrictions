'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class VehicleDataProxy {
    constructor(dataService) {
        this.dataService = dataService;
    }
    generateActiveView(dataId, callback, addressableName) {
        return this.dataService.generateActiveView({
            dataId: dataId,
            addressableName: addressableName
        }, ((dataEvent, err) => {
            if (err) {
                const errorEvent = JSON.parse(err);
                console.error(`Failed getting value for propertyId: ${dataId} - ${addressableName} due to ${err}`);
                callback(dataEvent, errorEvent);
            }
            else {
                console.debug(`Received value: ${JSON.stringify(dataEvent)} for propertyId: ${dataId} - ${addressableName}`);
                callback(dataEvent);
            }
        })).then(() => {
            console.debug(`Requested Active Property View for propertyId: ${dataId} - ${addressableName}`);
        }).catch(errorEvent => {
            console.error(`Failed registering Active Property View for propertyId: ${dataId} - ${addressableName}. Reason: ${errorEvent}`);
            let throwable;
            try {
                throwable = JSON.parse(errorEvent);
            }
            catch (e) {
                throwable = errorEvent;
            }
            throw throwable;
        });
    }
    generatePassiveView(dataId, addressableName) {
        return this.dataService.generatePassiveView({
            dataId: dataId,
            addressableName: addressableName
        }).then(() => {
            console.debug(`Successfully registered Passive Property View for propertyId: ${dataId} - ${addressableName}`);
        }).catch(errorEvent => {
            console.error(`Failed registering Passive Property View for propertyId: ${dataId} - ${addressableName}. Reason: ${errorEvent}`);
            let throwable;
            try {
                throwable = JSON.parse(errorEvent);
            }
            catch (e) {
                throwable = errorEvent;
            }
            throw throwable;
        });
    }
    removeView(addressableName) {
        return this.dataService.removeView({
            addressableName: addressableName
        }).then(() => {
            console.debug(`Removed View for ${addressableName}`);
        }).catch(errorEvent => {
            console.error(`Failed removing View for ${addressableName}. Reason: ${errorEvent}`);
            let throwable;
            try {
                throwable = JSON.parse(errorEvent);
            }
            catch (e) {
                throwable = errorEvent;
            }
            throw throwable;
        });
    }
    view(addressableName) {
        return this.dataService.view({ addressableName: addressableName }).then((event) => {
            console.debug(`Received value: ${JSON.stringify(event)} for ${addressableName}`);
            if (event.event === -1) {
                return event;
            }
            else {
                return event;
            }
        }).catch(errorEvent => {
            console.error(`Failed receiving value for ${addressableName}. Reason ${errorEvent}`);
            let throwable;
            try {
                throwable = JSON.parse(errorEvent);
            }
            catch (e) {
                throwable = errorEvent;
            }
            throw throwable;
        });
    }
    viewAll(addressableName) {
        return this.dataService.viewAll({ addressableName: addressableName }).then(({ events }) => {
            console.debug(`Received value: ${JSON.stringify(events)} for ${addressableName}`);
            return events;
        }).catch(errorEvent => {
            console.error(`Failed receiving value for ${addressableName}. Reason ${errorEvent}`);
            let throwable;
            try {
                throwable = JSON.parse(errorEvent);
            }
            catch (e) {
                throwable = errorEvent;
            }
            throw throwable;
        });
    }
}

exports.VehicleUxRestrictionTypes = void 0;
(function (VehicleUxRestrictionTypes) {
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_BASELINE"] = 0] = "UX_RESTRICTIONS_BASELINE";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_FULLY_RESTRICTED"] = 287] = "UX_RESTRICTIONS_FULLY_RESTRICTED";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_LIMIT_CONTENT"] = 32] = "UX_RESTRICTIONS_LIMIT_CONTENT";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_LIMIT_STRING_LENGTH"] = 4] = "UX_RESTRICTIONS_LIMIT_STRING_LENGTH";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_DIALPAD"] = 1] = "UX_RESTRICTIONS_NO_DIALPAD";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_FILTERING"] = 2] = "UX_RESTRICTIONS_NO_FILTERING";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_KEYBOARD"] = 8] = "UX_RESTRICTIONS_NO_KEYBOARD";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_SETUP"] = 64] = "UX_RESTRICTIONS_NO_SETUP";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_TEXT_MESSAGE"] = 128] = "UX_RESTRICTIONS_NO_TEXT_MESSAGE";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_VIDEO"] = 16] = "UX_RESTRICTIONS_NO_VIDEO";
    VehicleUxRestrictionTypes[VehicleUxRestrictionTypes["UX_RESTRICTIONS_NO_VOICE_TRANSCRIPTION"] = 256] = "UX_RESTRICTIONS_NO_VOICE_TRANSCRIPTION";
})(exports.VehicleUxRestrictionTypes || (exports.VehicleUxRestrictionTypes = {}));

const VehicleUxRestrictionsPluginInterface = core.registerPlugin('VehicleUxRestrictionsPlugin');
class VehicleUxRestrictionsPlugin extends VehicleDataProxy {
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

exports.VehicleUxRestrictionsPlugin = VehicleUxRestrictionsPlugin;
//# sourceMappingURL=plugin.cjs.js.map
