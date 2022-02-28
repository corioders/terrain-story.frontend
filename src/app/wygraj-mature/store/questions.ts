import { defineStore } from 'pinia';

import { QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';

import { getQuestionsDescriptor as getQuestionsDescriptorFirebase } from './questionsFirebase';

export const useQuestionsStore = defineStore({
	id: 'recap.question',
	state: () => {
		return {
			questionsDescriptors: {} as Record<number, QuestionsDescriptor>,
			usedQuestionsIDs: {} as Record<string, string[] | undefined>,
		};
	},
	actions: {
		reset() {
			this.questionsDescriptors = {};
			this.usedQuestionsIDs = {};
		},
		async getQuestionsDescriptor(puzzleIndex: number): Promise<QuestionsDescriptor> {
			// For the same puzzleIndex we provide the same QuestionsDescriptor if and only if
			// there was no reset, after reset we fetch fresh data from firestore, but before
			// we provide the same QuestionsDescriptor for the same puzzleIndex.
			let questionsDescriptor = this.questionsDescriptors[puzzleIndex];
			// if (questionsDescriptor !== undefined) return questionsDescriptor;

			questionsDescriptor = await getQuestionsDescriptorFirebase(this.usedQuestionsIDs);
			this.questionsDescriptors[puzzleIndex] = questionsDescriptor;
			return questionsDescriptor;
		},
	},
});
