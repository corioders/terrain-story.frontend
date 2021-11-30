import Question from '@/components/closedQuestion/question';

export const quiz: Question[] = [
	{
		question: "You shouldn't kiss your beloved one under the mistletoe.",
		options: ['true', 'false'],
		answer: 'false',
	},
	{
		question: 'Crackers usually contain small gifts.',
		options: ['true', 'false'],
		answer: 'true',
	},
	{
		question: 'Children often perform nativity plays which describe the birth of Jesus Christ.',
		options: ['true', 'false'],
		answer: 'true',
	},
	{
		question: 'The 25th of December is called Boxing Day.',
		options: ['true', 'false'],
		answer: 'false',
	},
	{
		question: 'Carols are sung by groups of people to their neighbours on Christmas Eve.',
		options: ['true', 'false'],
		answer: 'true',
	},
];

export const questionTag: Question = {
	question: 'They don’t like giving presentes, ... they?',
	options: ['do', "don't", 'have', 'would', 'will', "didn't"],
	answer: 'do',
};

export const festivalsMatching: Question[] = [
	{
		question:
			'Mexicains start Christmas celebrations on 16 December with a ninc-day festival called .... It commemorates the journey of Mary and Joseph to Bethlehem and their search for lodging. During the festival. people for a procession and visit homes asking for shelter. Each night the procession is invitedinto a different house for a Posadas party.',
		options: ['Las Posadas', 'Hanukkah', 'Kwanzaa'],
		answer: 'Las Posadas',
	},
	{
		question:
			"In December, Jewish people celebrate ...,also known as the Festival of Lights. This holiday lasts 1 eight days and nights. Each day a candle is lit on a special candlestick called a menorah and then gifts are exchanged. Children's favourite snack eaten during Hanukkah are latkes, pancakes made of potatoes and  onions, served with applesauce.",
		options: ['Las Posadas', 'Hanukkah', 'Kwanzaa'],
		answer: 'Hanukkah',
	},
	{
		question:
			'Another December festival is ..., which is celebrated by African-American families in the USA. The festival is secular. It honours African-American heritage and culture. It lasts one week. Traditions include lighting a candle on cach day of the festival, exchanging gifts and having a special meal.',
		options: ['Las Posadas', 'Hanukkah', 'Kwanzaa'],
		answer: 'Kwanzaa',
	},
];
