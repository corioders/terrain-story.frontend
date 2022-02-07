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

export function questionExecutor(finishPuzzle: () => void, displayFeedback?: boolean): QuestionExecutorReturn {
	const isCorrect = ref<boolean>(false);
	const displayFeedbackRef = ref<boolean>(false);

	const handleAnswer = (isAnswerCorrect: boolean): void => {
		isCorrect.value = isAnswerCorrect;
		displayFeedbackRef.value = false;
	};

	const handleCheck = (): void => {
		if (isCorrect.value === true) {
			finishPuzzle();
			return;
		}
		if (displayFeedback === true) displayFeedbackRef.value = true;
	};

	return { isCorrect, displayFeedback: displayFeedbackRef, handleAnswer, handleCheck };
}
