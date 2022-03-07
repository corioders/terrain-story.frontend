export interface QuestionDescriptor<Subject> {
	subject: Subject;
	question: string;
	options: string[];
	answer: string;
	isHtml: boolean;
}

export type QuestionsDescriptor = [QuestionDescriptor<'Polski'>, QuestionDescriptor<'Matematyka'>, QuestionDescriptor<'Angielski'>];
