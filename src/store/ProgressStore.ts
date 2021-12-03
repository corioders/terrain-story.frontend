import { defineStore, DefineStoreOptions, StateTree, Store, StoreDefinition, _GettersTree } from 'pinia';

export type IsPuzzleID<PuzzleID extends string> = (id: string) => id is PuzzleID;
export type Puzzles<PuzzleID extends string> = Record<PuzzleID, boolean>;

// Disallow vue from ref-Unwrapping Puzzles type
declare module '@vue/reactivity' {
	export interface RefUnwrapBailTypes {
		// eslint-disable-next-line
		// @ts-ignore
		progressStoreBailTypes: Puzzles<unknown>;
	}
}

export function defineProgressStore<
	PuzzleID extends string,
	Id extends string,
	S extends ProgressState<PuzzleID>,
	G extends ProgressGetters<S>,
	A extends ProgressActions<PuzzleID>,
>(options: DefineStoreOptions<Id, S, G, A>): StoreDefinition<Id, S, G, A> {
	return defineStore<Id, S, G, A>(options);
}

// eslint-disable-next-line
export type ProgressStore<PuzzleID extends string = string, S = ProgressState<PuzzleID>, G = ProgressGetters<S>, A = ProgressActions<PuzzleID>> = Store<string, S, G, A>;

interface ProgressState<PuzzleID extends string> {
	started: boolean;
	ended: boolean;
	puzzles: Puzzles<PuzzleID>;
}

interface ProgressGetters<S extends StateTree> extends _GettersTree<S> {}

interface ProgressActions<PuzzleID extends string> {
	start(): void;
	resetProgress(): void;
	finishPuzzle(puzzleId: PuzzleID): void;
}
