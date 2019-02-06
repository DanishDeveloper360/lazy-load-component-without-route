import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  bigSettings: string;
};

export const lazyMap: LAZY_MODULES = {
  bigSettings: 'src/app/big-component/big-component.module#BigComponentModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
