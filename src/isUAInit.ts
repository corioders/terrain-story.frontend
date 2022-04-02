import { ref, App } from 'vue';

const isUARef = ref<boolean>(false);

declare global {
	interface Window {
		isUA: typeof isUARef;
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		isUA: typeof isUARef;
	}
}

window.isUA = isUARef;

export function initApp(app: App): void {
	app.config.globalProperties.isUA = isUARef;
}
