import Question from '@/components/closedQuestion/question';

export const example: Question[] = [
	{
		question: 'a',
		options: ['a', 'aa', 'aaa'],
		answer: 'a',
	},
	{
		question: 'b',
		options: ['b', 'bb', 'bbb'],
		answer: 'b',
	},
];
Object.freeze(example);
