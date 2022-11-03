import { registerPlugin } from '@capacitor/core';

import type { AAOSUxRestrictionsPlugin } from './definitions';

const AAOSUxRestrictions = registerPlugin<AAOSUxRestrictionsPlugin>('AAOSUxRestrictions', {
  web: () => import('./web').then(m => new m.AAOSUxRestrictionsWeb()),
});

export * from './definitions';
export { AAOSUxRestrictions };
