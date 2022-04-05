import { defineStore } from 'pinia';

export const useMainStore = defineStore({
	id: 'quiz.main',
	state: () => ({
		gameName: 'quiz-lekturowy',
	}),
});
