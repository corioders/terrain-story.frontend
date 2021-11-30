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

export const gaps: Question[] = [
	{
		question:
			'In Greece, terrible creatures called ... are believed to play tricks on people at Christmas. In order to get rid of them, an old shoe or salt must be burnt as the creatures hate the stench.',
		options: ['Kallikantzaroi', 'Three Wise Men', 'a wafer', 'stocking'],
		answer: 'Kallikantzaroi',
	},
	{
		question:
			'Christian children in Syria believe that their gifts are brought by a camel which belonged to one of the ... who visited the baby Jesus in Bethlehem. In the evening Syrian children leave water and hay outside of their house for the camel. In the morning those offerings are replaced by gifts.',
		options: ['Kallikantzaroi', 'Three Wise Men', 'a wafer', 'stocking'],
		answer: 'Three Wise Men',
	},
	{
		question:
			'In Poland, Ukraine and Lithuania, there are twelve meatless dishes in the Christmas Eve supper. According to the Christian tradition, they represent the twelve Apostles. Guests must try each dish. Before the meal ... is broken and shared among the guests. During the evening Christmas carols are sung. After the supper many people go to church for Midnight Mass.',
		options: ['Kallikantzaroi', 'Three Wise Men', 'a wafer', 'stocking'],
		answer: 'a wafer',
	},
	{
		question:
			'On Christmas Eve evening. British children hang Christmas stockings on their beds or in front the fireplace At night each ... is filled with small gifts. Larger gifts are placed under the Christmas tree Children believe that the gifts are brought by Father Christmas. Everybody open their gifts on Christmas morning.',
		options: ['Kallikantzaroi', 'Three Wise Men', 'a wafer', 'stocking'],
		answer: 'stocking',
	},
];

export const questionTag: Question = {
	question: 'They don’t like giving presentes, ... they?',
	options: ['do', "don't", 'have', 'would', 'will', "didn't"],
	answer: 'do',
};
