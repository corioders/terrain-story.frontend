import { defineStore } from 'pinia';

export const useRockSkipNavStore = defineStore({
	id: 'rockSkipNav',
	state: () => ({ routes: ['/start', '/hacker', '/mage', '/inspector', '/treasurer', '/dancer', '/princess', '/archaeologist', '/tourist', '/end'], active: 0 }),
	getters: {},
	actions: {},
});
