import { PuzzleID } from '@quiz/store/progress';

import Question from '@/components/closedQuestion/question';

export const lectureQuiz: Record<PuzzleID, Question[]> = {
	'1': [
		{
			question: 'Która z tych par, to nie rodzeństwo?',
			options: ['Józio i Rózia', 'Alina i Balladyna', 'Tadeusz i Zosia'],
			answer: 'Tadeusz i Zosia',
		},
		{
			question: 'Który tytuł książki nie jest jednocześnie imieniem głównego bohatera/bohaterki?',
			options: ['Balladyna', 'Pan Tadeusz', 'Reduta Ordona'],
			answer: 'Reduta Ordona',
		},
		{
			question: 'Kto jest tytułowym Pułkownikiem?',
			options: ['Emilia Plater', 'Eliza Orzeszkowa', 'Joanna Darc'],
			answer: 'Emilia Plater',
		},
	],
	'2': [
		{
			question: 'Która z tych książek jest częścią Trylogii Sienkiewicza?',
			options: ['Potop', 'W Pustyni i w puszczy', 'Krzyżacy'],
			answer: 'Potop',
		},
		{
			question: 'Kto jest autorem Pana Tadeusza?',
			options: ['Henryk Sienkiewicz', 'Adam Mickiewicz', 'Cyprian Kamil Norwid'],
			answer: 'Adam Mickiewicz',
		},
		{
			question: 'Który z podanych utworów nie jest wierszem?',
			options: ['Śmierć Pułkownika', 'Świtezianka', 'Zemsta'],
			answer: 'Zemsta',
		},
	],
	'3': [
		{
			question: 'Która z podanych pozycji zawiera elementy fantastyczne?',
			options: ['Świtezianka', 'Reduta Ordona ', 'Śmierć Pułkownika'],
			answer: 'Świtezianka',
		},
		{
			question: 'Brzegami jakiego jeziora szli kochankowie? ',
			options: ['Świtezi', 'Świteźki', 'Świtezianki'],
			answer: 'Świtezi',
		},
		{
			question: 'Jakie owoce zbierała Alina z Balladyną?',
			options: ['Borówki', 'Maliny', 'Jeżyny '],
			answer: 'Maliny',
		},
	],
	'4': [
		{
			question: 'Fabuła, którego z tych wierszy nie opiera się na faktach? (podchwytliwe)',
			options: ['Reduta Ordona', 'Śmierć Pułkownika', 'Pan Tadeusz'],
			answer: 'Pan Tadeusz',
		},
		{
			question: 'Kto jest głównym bohaterem "Pani Twardowskiej"?',
			options: ['Pani Twardowska', 'Pan Twardowski'],
			answer: 'Pan Twardowski',
		},
		{
			question: 'Jak nazywała się karczma do której wszedł Pan Twardowski?',
			options: ['Wiedeń', 'Paryż', 'Rzym'],
			answer: 'Rzym',
		},
	],
	'5': [
		{
			question: 'Jaki format sylabiczny występuje w Panu Tadeuszu?',
			options: ['13 zgłoskowiec', '14 zgloskowiec', '12 zgłoskowiec'],
			answer: '13 zgłoskowiec',
		},
		{
			question: 'Jaki jest pełny tytuł poematu Adama Mickiewicza?',
			options: ['Pan Tadeusz ', 'Pan Tadeusz i pierwszy zajazd na Litwie ', 'Pan Tadeusz czyli ostatni zajazd na Litwie'],
			answer: 'Pan Tadeusz czyli ostatni zajazd na Litwie',
		},
		{
			question: 'Kto jest autorem W pamietniku do Zofii Bobrówny?',
			options: ['Zofia Bobrowna', 'Juliusz Słowacki', 'Eliza Orzeszkowa'],
			answer: 'Juliusz Słowacki',
		},
	],
	'6': [
		{
			question: 'Który z tych autorów nie jest poetą romantycznym?',
			options: ['Cyprian Norwid', 'Zygmunt Krasiński', 'Henryk Sienkiewicz'],
			answer: 'Henryk Sienkiewicz',
		},
		{
			question: 'Czyjego autorstwa jest "Powrót taty"?',
			options: ['Autor nieznany', 'Adam Mickiewicz', 'Zygmunt Krasiński'],
			answer: 'Adam Mickiewicz',
		},
		{
			question: 'Epoka romantyzmu w Polsce była:',
			options: ['W tym samym czasie, co na zachodzie Europy', 'Wcześniej niż na zachodzie Europy', 'Później niż na zachodzie Europy'],
			answer: 'Później niż na zachodzie Europy',
		},
	],
};
