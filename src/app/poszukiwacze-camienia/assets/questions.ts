import Question from '@/components/closedQuestion/question';

export const dancer: Question[] = [
	{
		question: 'Rozpoznaj pierwszy taniec',
		options: ['belgijka', 'polonez', 'jive', 'macarena'],
		answer: 'belgijka',
	},
	{
		question: 'Rozpoznaj drugi taniec',
		options: ['macarena', 'quickstep', 'tango', 'fokstrot'],
		answer: 'macarena',
	},
	{
		question: 'Rozpoznaj trzeci taniec',
		options: ['tango', 'macarena', 'belgijka', 'quickstep'],
		answer: 'tango',
	},
];
Object.freeze(dancer)

export const inspector: Question = {
	options: [
		require<string>('@rock/assets/suspects/1.png'),
		require<string>('@rock/assets/suspects/2.png'),
		require<string>('@rock/assets/suspects/3.png'),
		require<string>('@rock/assets/suspects/4.png'),
		require<string>('@rock/assets/suspects/5.png'),
	],
	answer: require<string>('@rock/assets/suspects/5.png'),
};
Object.freeze(inspector)

export const tourist: Question[] = [
	{
		question: 'Rozpoznaj pierwsze miejsce',
		options: ['Pomnik Józefa Piłsudskiego', 'Stary Dworzec', 'Pomnik Żołnierza Polskiego'],
		answer: 'Pomnik Józefa Piłsudskiego',
	},
	{
		question: 'Rozpoznaj drugie miejsce',
		options: ['Teatr Śląski', 'Kościół Mariacki', 'Kino Rialto'],
		answer: 'Teatr Śląski',
	},
	{
		question: 'Rozpoznaj trzecie miejsce',
		options: ['Plac Wolności', 'Plac Andrzeja', 'Rynek'],
		answer: 'Plac Andrzeja',
	},
	{
		question: 'Rozpoznaj czwarte miejsce',
		options: ['Pomnik Beboków', 'Pomnik Żołnierza Polskiego', 'Spodek'],
		answer: 'Pomnik Beboków',
	},
];
Object.freeze(tourist)

export const treasurer: Question[] = [
	{
		question: 'Gdzie czwartek jest przed środą?',
		options: ['w słowniku', 'w życiu', 'w tygodniu', 'w kalendarzu'],
		answer: 'w słowniku',
	},
	{
		question: 'Parys miał 3 jabłka w koszyku. Każdej z bogiń dał po jednym jabłku. Mimo to jedno zostało w koszyku. Jak to jest możliwe?',
		options: ['jednej dał jabłko z koszykiem', 'jedno jabłko było zepsute i zostało w koszyku', 'jedna z bogiń nie przyjęła podarunku', 'koszyk zawierał 2 jabłka'],
		answer: 'jednej dał jabłko z koszykiem',
	},
	{
		question: 'Kości tego świata sięgają objęć nieba, skąpane w bieli niczym Panna Młoda witająca swojego wybrańca',
		options: ['góry', 'wieże', 'wieżowce', 'drapacze chmur'],
		answer: 'góry',
	},
];
Object.freeze(treasurer)