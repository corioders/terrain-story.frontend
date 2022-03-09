import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'economic.main',
	state: () => ({
		gameName: 'finansowe-zaskoczenie',
	}),
});
