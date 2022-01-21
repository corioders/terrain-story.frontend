import Question from '@/components/closedQuestion/question';

export const matching1: Question[] = [
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
Object.freeze(matching1);

export const matching2: Question[] = [
	{
		question: 'Skupiaj się na miłych drobiazgach',
		options: ['dostrzegaj ile dobra dzieje się w ciągu każdego dnia', 'każdy ma swoją niepowtarzalną drogę', 'miej marzenia i walcz o nie'],
		answer: 'dostrzegaj ile dobra dzieje się w ciągu każdego dnia',
	},
	{
		question: 'Nie jesteś doskonały',
		options: ['i nie musisz takim być', 'każdy ma swoją niepowtarzalną drogę', 'dostrzegaj ile dobra dzieje się w ciągu każdego dnia'],
		answer: 'i nie musisz takim być',
	},
	{
		question: 'Nie porównuj się do innych',
		options: ['każdy ma swoją niepowtarzalną drogę', 'miej marzenia i walcz o nie', 'odpoczynek, to nie strata czasu'],
		answer: 'każdy ma swoją niepowtarzalną drogę',
	},
	{
		question: 'Wytycz sobie cel',
		options: ['miej marzenia i walcz o nie', 'odpoczynek, to nie strata czasu', 'i nie musisz takim być'],
		answer: 'miej marzenia i walcz o nie',
	},
	{
		question: 'Odpoczywaj',
		options: ['odpoczynek, to nie strata czasu', 'dostrzegaj ile dobra dzieje się w ciągu każdego dnia', 'każdy ma swoją niepowtarzalną drogę'],
		answer: 'odpoczynek, to nie strata czasu',
	},
];
Object.freeze(matching2);

export const emotions1: Question[] = [
	{
		options: ['Jestem przygnębiony', 'To obrzydliwe', 'Jak to działa?'],
		answer: 'Jestem przygnębiony',
	},
	{
		options: ['To obrzydliwe', 'O rany! No way!', 'No…nie wiem'],
		answer: 'To obrzydliwe',
	},
	{
		options: ['O rany! No way!', 'Jestem z siebie dumny', 'Jestem wściekły na Ciebie, gadasz bzdury!'],
		answer: 'O rany! No way!',
	},
	{
		options: ['Jak to działa?', 'Jestem przygnębiony', 'Jestem z siebie dumny'],
		answer: 'Jak to działa?',
	},
	{
		options: ['Jestem z siebie dumny', 'To obrzydliwe', 'O rany! No way!'],
		answer: 'Jestem z siebie dumny',
	},
	{
		options: ['Jestem zszokowany', 'To obrzydliwe', 'Jak to działa?'],
		answer: 'Jestem zszokowany',
	},
	{
		options: ['No...nie wiem', 'Jestem wściekły na Ciebie, gadasz bzdury!', 'To obrzydliwe'],
		answer: 'No...nie wiem',
	},
	{
		options: ['Jestem wściekły na Ciebie, gadasz bzdury!', 'O rany! No way!', 'Jak to działa?'],
		answer: 'Jestem wściekły na Ciebie, gadasz bzdury!',
	},
];
Object.freeze(emotions1);
