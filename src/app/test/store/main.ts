import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'test.main',
	state: () => ({
		gameName: 'santa-in-trouble',
	}),
});
