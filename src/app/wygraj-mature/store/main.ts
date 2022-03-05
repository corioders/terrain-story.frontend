import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'recap.main',
	state: () => ({
		gameName: 'wygraj-mature',
	}),
});
