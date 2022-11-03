# aaos-ux-restrictions

Providing Access to Androi Automotive OS UXRestrictions

## Install

```bash
npm install aaos-ux-restrictions
npx cap sync
```

## API

<docgen-index>

* [`quickView()`](#quickview)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### quickView()

```typescript
quickView() => Promise<VehicleUxRestrictionsEvent>
```

Take direct access to the currently active restrictions instead of using the DataView mechanism

**Returns:** <code>Promise&lt;<a href="#vehicleuxrestrictionsevent">VehicleUxRestrictionsEvent</a>&gt;</code>

--------------------


### Interfaces


#### VehicleUxRestrictionsEvent

| Prop       | Type                                                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`data`** | <code>{ restrictions: number; maxContentDepth: number; maxCumulativeContentItems: number; maxRestrictedStringLength: number; distractionOptimizationRequired: boolean; }</code> |

</docgen-api>
