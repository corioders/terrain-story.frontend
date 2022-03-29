import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'help.main',
	state: () => ({
		gameName: 'pomoz-abelardowi',
		isUA: false,
	}),
});
