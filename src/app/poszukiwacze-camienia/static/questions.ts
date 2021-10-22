import Question from '@/components/closedQuestion/question';

export const dancer: Question[] = [
	{
		question: 'Rozpoznaj pierwszy taniec',
		options: [{ text: 'belgijka' }, { text: 'polonez' }, { text: 'jive' }, { text: 'macarena' }],
		answer: 'belgijka',
	},
	{
		question: 'Rozpoznaj drugi taniec',
		options: [{ text: 'macarena' }, { text: 'quickstep' }, { text: 'tango' }, { text: 'fokstrot' }],
		answer: 'macarena',
	},
	{
		question: 'Rozpoznaj trzeci taniec',
		options: [{ text: 'tango' }, { text: 'macarena' }, { text: 'belgijka' }, { text: 'quickstep' }],
		answer: 'tango',
	},
];

export const inspector: Question = {
	options: [
		{ text: 'a', photo: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg' },
		{ text: 'b', photo: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg' },
		{ text: 'c', photo: 'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg' },
		{ text: 'd', photo: 'https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg' },
		{ text: 'e', photo: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg' },
	],
	answer: 'a',
};

export const tourist: Question[] = [
	{
		question: 'Rozpoznaj pierwsze miejsce',
		options: [{ text: 'plac Sejmu Śląskiego' }, { text: 'Stary Dworzec' }, { text: 'Synagoga Żydowska' }],
		answer: 'plac Sejmu Śląskiego',
	},
	{
		question: 'Rozpoznaj drugie miejsce',
		options: [{ text: 'Teatr Śląski' }, { text: 'Kościół Mariacki' }, { text: 'Kino Rialto' }],
		answer: 'Teatr Śląski',
	},
	{
		question: 'Rozpoznaj trzecie miejsce',
		options: [{ text: 'Plac Wolności' }, { text: 'Park Kościuszki' }, { text: 'Rynek' }],
		answer: 'Plac Wolności',
	},
	{
		question: 'Rozpoznaj czwarte miejsce',
		options: [{ text: 'Pomnik Żołnierza Polskiego' }, { text: 'Pałac Młodzieży' }, { text: 'Spodek' }],
		answer: 'Pomnik Żołnierza Polskiego',
	},
];

export const treasurer: Question[] = [
	{
		question: 'Gdzie czwartek jest przed środą?',
		options: [{ text: 'w słowniku' }, { text: 'w życiu' }, { text: 'w tygodniu' }, { text: 'w kalendarzu' }],
		answer: 'w słowniku',
	},
	{
		question: 'Parys rozdzielił po trzy jabłka dla każdej z Bogiń a mimo to jedno jabłko zostało w koszyku. Jak to możliwe?',
		options: [
			{ text: 'jednej dał jabłko z koszykiem' },
			{ text: 'jedno jabłko było zepsute i zostało w koszyku' },
			{ text: 'jedna z bogiń nie przyjęła podarunku' },
			{ text: 'koszyk zawierał 10 jabłek' },
		],
		answer: 'jednej dał jabłko z koszykiem',
	},
	{
		question: 'Kości tego świata sięgają objęć nieba, skąpane w bieli niczym Panna Młoda witająca swojego wybrańca',
		options: [{ text: 'góry' }, { text: 'wieże' }, { text: 'wieżowce' }, { text: 'drapacze chmur' }],
		answer: 'góry',
	},
];
