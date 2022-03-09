import Question from '@/components/closedQuestion/question';

export const emotions: Question[] = [
	{
		options: ['Jestem przygnębiony', 'To obrzydliwe', 'Jak to działa?'],
		answer: 'Jestem przygnębiony',
	},
	{
		options: ['To obrzydliwe', 'No…nie wiem', 'Hahahahaha'],
		answer: 'To obrzydliwe',
	},
	{
		options: ['O rany! No way!', 'Jestem z siebie dumny', 'Jestem wściekły na Ciebie, gadasz bzdury!'],
		answer: 'O rany! No way!',
	},
	{
		options: ['Jak to działa?', 'Jestem przygnębiony', 'Nie chcę już tego słuchać'],
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
		options: ['No...nie wiem', 'Jestem wściekły na Ciebie, gadasz bzdury!', 'Cieszę się'],
		answer: 'No...nie wiem',
	},
	{
		options: ['Jestem wściekły na Ciebie, gadasz bzdury!', 'Jak to działa?', 'Ok'],
		answer: 'Jestem wściekły na Ciebie, gadasz bzdury!',
	},
];
Object.freeze(emotions);
