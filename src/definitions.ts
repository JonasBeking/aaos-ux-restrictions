export interface AAOSUxRestrictionsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
