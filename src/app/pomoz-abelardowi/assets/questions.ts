import Question from '@/components/closedQuestion/question';

let emotionsLocal: Question[] = [];

if (!window.isUA) {
	emotionsLocal = [
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
} else {
	emotionsLocal = [
		{
			options: ['Я в депресії', 'Це огидно', 'Як це працює?'],
			answer: 'Я в депресії',
		},
		{
			options: ['Це огидно', 'я не знаю', 'Хахахаха'],
			answer: 'Це огидно',
		},
		{
			options: ['О мій! У жодному разі!', 'Я пишаюся собою', 'Я сержуся на вас, ви говорите дурниці!'],
			answer: 'О мій! У жодному разі!',
		},
		{
			options: ['Як це працює?', 'Я в депресії', 'Я більше не хочу цього чути'],
			answer: 'Як це працює?',
		},
		{
			options: ['Я пишаюся собою', 'Це огидно', 'О мій! У жодному разі!'],
			answer: 'Я пишаюся собою',
		},
		{
			options: ['Я в шоці', 'Це огидно', 'Як це працює?'],
			answer: 'Я в шоці',
		},
		{
			options: ['я не знаю', 'Я сержуся на вас, ви говорите дурниці!', 'я радий'],
			answer: 'я не знаю',
		},
		{
			options: ['Я сержуся на вас, ви говорите дурниці!', 'Як це працює?', 'прибл'],
			answer: 'Я сержуся на вас, ви говорите дурниці!',
		},
	];
}

export const emotions: Question[] = emotionsLocal;
Object.freeze(emotions);
