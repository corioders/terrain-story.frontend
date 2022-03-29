import { createPinia } from 'pinia';
import { createApp, ref } from 'vue';
import VueGtagPlugin from 'vue-gtag-next';

import { createLocalStoragePlugin } from '@/store/plugin/localStorage';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(createLocalStoragePlugin());

const isUARef = ref<boolean>(true);
// const isUARef = ref<boolean>(false);

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
app.config.globalProperties.isUA = isUARef;

app.use(VueGtagPlugin, {
	disableScriptLoader: true,
	property: { id: GTAG_ID },
});

app.use(pinia).use(router);

app.mount('#root');

if (module.hot) {
	module.hot.dispose(() => {
		app.unmount();
		console.clear();
	});
	module.hot.accept();
}
