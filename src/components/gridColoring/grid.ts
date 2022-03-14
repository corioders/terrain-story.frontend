import { alphabetUpper } from '@rock/assets/alphabet';

import shuffleOptions from '../closedQuestion/shuffleOptions';

export interface Coordinates {
	x: number;
	y: number;
}

export interface GridDescriptor {
	dimensions: {
		width: number;
		height: number;
	};
	correctSelections: Coordinates[];
}

export function correctSelectionsForHuman(correctSelections: Coordinates[]): string {
	const correct = [];
	for (const correctSelection of correctSelections) {
		correct.push(`${alphabetUpper[correctSelection.x]}${correctSelection.y + 1}`);
	}

	shuffleOptions(correct);
	return correct.join(', ');
}
