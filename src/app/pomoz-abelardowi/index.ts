import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueGtagPlugin from 'vue-gtag-next';

import { initApp } from '@/isUAinit';
import { createLocalStoragePlugin } from '@/store/plugin/localStorage';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(createLocalStoragePlugin());

initApp(app);

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
