export interface Question {
	question?: string;
	options: string[];
}

export const inspector: Question = {
	options: [
		'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg',
		'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
		'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg',
		'https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg',
		'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg',
	],
};

export const treasurer: Question[] = [
	{
		question: 'Gdzie czwartek jest przed środą?',
		options: ['w słowniku', 'w życiu', 'w tygodniu', 'w kalendarzu'],
	},
	{
		question: 'Parys rozdzielił po trzy jabłka dla każdej z Bogiń a mimo to jedno jabłko zostało w koszyku. Jak to możliwe?',
		options: ['jednej dał jabłko z koszykiem', 'jedno jabłko było zepsute i zostało w koszyku', 'jedna z bogiń nie przyjęła podarunku', 'koszyk zawierał 10 jabłek'],
	},
	{
		question: 'Kości tego świata sięgają objęć nieba, skąpane w bieli niczym Panna Młoda witająca swojego wybrańca',
		options: ['góry', 'wieże', 'wieżowce', 'drapacze chmur'],
	},
];
