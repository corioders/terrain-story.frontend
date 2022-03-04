export type Html = string;
export interface QuestionDescriptor<Subject> {
	subject: Subject;
	question: Html;
	options: Html[];
	answer: Html;
	isHtml: boolean;
}

export type QuestionsDescriptor = [QuestionDescriptor<'Polski'>, QuestionDescriptor<'Matematyka'>, QuestionDescriptor<'Angielski'>];
