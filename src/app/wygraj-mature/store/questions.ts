import { defineStore } from 'pinia';

import { QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';

import { getQuestionsDescriptor as getQuestionsDescriptorFirebase } from './questionsFirebase';
import { PuzzleID } from '@recap/store/progress';

export const useQuestionsStore = defineStore({
	id: 'recap.question',
	state: () => {
		return {
			questionsDescriptors: {} as Record<string, QuestionsDescriptor>,
			usedQuestionsIDs: {} as Record<string, string[] | undefined>,
		};
	},
	actions: {
		reset() {
			this.questionsDescriptors = {};
			this.usedQuestionsIDs = {};
		},
		async getQuestionsDescriptor(puzzleID: PuzzleID): Promise<QuestionsDescriptor> {
			// For the same puzzleIndex we provide the same QuestionsDescriptor if and only if
			// there was no reset, after reset we fetch fresh data from firestore, but before
			// we provide the same QuestionsDescriptor for the same puzzleIndex.

			let questionsDescriptor = this.questionsDescriptors[puzzleID];
			if (questionsDescriptor !== undefined) return questionsDescriptor;

			questionsDescriptor = await getQuestionsDescriptorFirebase(this.usedQuestionsIDs);
			this.questionsDescriptors[puzzleID] = questionsDescriptor;
			return questionsDescriptor;
		},
	},
});
