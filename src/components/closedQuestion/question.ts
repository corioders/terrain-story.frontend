export interface Option {
	text: string;
	photo?: string;
}
export default interface Question {
	question?: string;
	options: Option[];
	answer: string;
}
