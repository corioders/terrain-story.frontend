import { defineStore } from 'pinia';

import { QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';

export const useQuestionsStore = defineStore({
	id: 'recap.question',
	state: () => {
		return {};
	},
	actions: {
		reset() {},
		async getQuestionsDescriptor(_puzzleIndex: number): Promise<QuestionsDescriptor> {
      console.log('get!')
			// for the same puzzleIndex we provide the same QuestionsDescriptor if and only if
      // there was no reset, after reset we fetch fresh data from firestore, but before
      // we provide the same QuestionsDescriptor for the same puzzleIndex.

			// This will eventually fetch data from firestore and do bookkeeping so that
			//  questions won't repeat themselves...
			return [
				{
					subject: 'Polski',
					question: '<p>aaaaaaa</p>',
					options: ['<p>a</p>', '<p>aa</p>', '<p>aaa</p>'],
					answer: '<p>a</p>',
				},
				{
					subject: 'Matematyka',
					question: '<p>bbbbbbb</p>',
					options: ['<p>b</p>', '<p>bb</p>', '<p>bbb</p>'],
					answer: '<p>b</p>',
				},
				{
					subject: 'Angielski',
					question: '<p>ccccccc</p>',
					options: ['<p>c</p>', '<p>cc</p>', '<p>ccc</p>'],
					answer: '<p>c</p>',
				},
			];
		},
	},
});
