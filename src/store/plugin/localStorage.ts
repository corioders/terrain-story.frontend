import { PiniaStorePlugin } from 'pinia';

export function createLocalStoragePlugin(): PiniaStorePlugin {
	const plugin: PiniaStorePlugin = (context) => {
		context.store.$subscribe((mutation, state) => {
			window.localStorage.setItem(getKey(mutation.storeId), JSON.stringify(state));
		});

		const stateJson = window.localStorage.getItem(getKey(context.store.$id));
		if (stateJson === null) {
			return;
		}

		return JSON.parse(stateJson) as Record<string, unknown>;
	};
	return plugin;
}

function getKey(storeId: string): string {
	return `store.${storeId}`;
}
