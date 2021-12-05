import { RouteLocationRaw } from 'vue-router';

export type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean;
