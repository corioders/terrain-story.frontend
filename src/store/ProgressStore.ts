import { defineStore, DefineStoreOptions, StateTree, Store, StoreDefinition, _GettersTree } from 'pinia';
import { Router } from 'vue-router';

import { navigateToRedirectedFrom } from '@/router';

import { removeLocalStorage } from './plugin/localStorage';

type GetElementType<T extends unknown[]> = T extends (infer U)[] ? U : never;

export type Puzzles<PuzzleID extends string> = Record<PuzzleID, boolean>;
export type IsPuzzleID<PuzzleID extends string> = (id: string) => id is PuzzleID;
export function isPuzzleIDFactory<PuzzleID extends GetElementType<PuzzleIDs>,PuzzleIDs extends string[]>(puzzleIDs: PuzzleIDs): IsPuzzleID<PuzzleID> {
	return (id: string): id is PuzzleID => puzzleIDs.includes(id as PuzzleID);
}

// Disallow vue from ref-Unwrapping Puzzles type.
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

export namespace defaultAction {
	export function start(store: ProgressStore, router: Router): void {
		store.started = true;
		navigateToRedirectedFrom(router);
	}

	export function resetProgress(store: ProgressStore, router: Router): void {
		store.$reset();
		removeLocalStorage(store);
		navigateToRedirectedFrom(router);
	}

	export function finishPuzzle<PuzzleID extends string>(store: ProgressStore<PuzzleID>, router: Router, puzzleID: PuzzleID): void {
		store.puzzles[puzzleID] = true;

		// Check if all puzzles are solved.
		if (!Object.values(store.puzzles).includes(false)) {
			store.ended = true;
			router.replace({ name: 'End' });
		} else {
			router.replace({ name: 'Done' });
		}
	}
}
