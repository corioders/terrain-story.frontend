import { Puzzles } from '@/store/ProgressStore';

export type HandleProgressReturn = { value: number; max: number };
export default function <PuzzleID extends string>(puzzles: Puzzles<PuzzleID>): HandleProgressReturn {
	return {
		value: Object.values(puzzles).filter((puzzle) => puzzle === true).length,
		max: Object.keys(puzzles).length,
	};
}
