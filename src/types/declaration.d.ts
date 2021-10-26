// =========================================================================
// webpack env variables
declare const __IS_PRODUCTION__: boolean;

// =========================================================================
// module declarations, so typescript will allow import them
declare module '*.vue' {
	import { Component } from 'vue';
	const component: Component;
	export default component;
}

// declare assets modules
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.scss';
