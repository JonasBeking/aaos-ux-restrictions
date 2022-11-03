import { WebPlugin } from '@capacitor/core';

import type { AAOSUxRestrictionsPlugin } from './definitions';

export class AAOSUxRestrictionsWeb extends WebPlugin implements AAOSUxRestrictionsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
