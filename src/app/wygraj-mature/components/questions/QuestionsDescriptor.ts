type Html = string;
interface QuestionDescriptor<Subject> {
	subject: Subject;
	question: Html;
	options: Html[];
	answer: Html;
}

type QuestionsDescriptor = [QuestionDescriptor<'Polski'>, QuestionDescriptor<'Matematyka'>, QuestionDescriptor<'Angielski'>];
export default QuestionsDescriptor;
