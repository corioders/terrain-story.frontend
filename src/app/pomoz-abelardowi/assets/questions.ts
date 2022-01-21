import Question from '@/components/closedQuestion/question';

export const emotions1: Question[] = [
	{
		question: 'Zacznij dzień od',
		options: ['szklanki wody', 'wczoraj minęło, jutro dopiero nadejdzie, życie jest dziś', 'spaceruj, biegaj, ćwicz'],
		answer: 'szklanki wody',
	},
	{
		question: 'Nie spiesz się',
		options: ['pośpiech generuje stres', 'spaceruj, biegaj, ćwicz', 'dzieląc się uczuciami budujesz więzi'],
		answer: 'pośpiech generuje stres',
	},
	{
		question: 'Ruszaj się',
		options: ['spaceruj, biegaj, ćwicz', 'dzieląc się uczuciami budujesz więzi', 'szklanki wody'],
		answer: 'spaceruj, biegaj, ćwicz',
	},
	{
		question: 'Rozmawiaj',
		options: ['dzieląc się uczuciami budujesz więzi', 'wczoraj minęło, jutro dopiero nadejdzie, życie jest dziś', 'pośpiech generuje stres'],
		answer: 'dzieląc się uczuciami budujesz więzi',
	},
	{
		question: 'Żyj tu i teraz',
		options: ['wczoraj minęło, jutro dopiero nadejdzie, życie jest dziś', 'pośpiech generuje stres', 'spaceruj, biegaj, ćwicz'],
		answer: 'wczoraj minęło, jutro dopiero nadejdzie, życie jest dziś',
	},
];
Object.freeze(emotions1);
