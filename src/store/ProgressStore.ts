export default interface ProgressStore {
	resetProgress: () => void;
	started: boolean;
	ended: boolean;
	puzzles: Record<string, boolean>;
}
