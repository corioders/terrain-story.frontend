import { ref, Ref } from 'vue';

export default interface Question {
	question?: string;
	options: string[];
	answer: string;
}

export interface QuestionExecutorReturn {
	isCorrect: Ref<boolean>;
	displayFeedback: Ref<boolean>;
	handleAnswer: (isAnswerCorrect: boolean) => void;
	handleCheck: () => void;
}

export function questionExecutor(finishPuzzle: () => void): QuestionExecutorReturn {
	const isCorrect = ref<boolean>(false);
	const displayFeedback = ref<boolean>(false);

	const handleAnswer = (isAnswerCorrect: boolean): void => {
		isCorrect.value = isAnswerCorrect;
		displayFeedback.value = false;
	};

	const handleCheck = (): void => {
		if (isCorrect.value === true) finishPuzzle();
		displayFeedback.value = true;
	};

	return { isCorrect, displayFeedback, handleAnswer, handleCheck };
}
