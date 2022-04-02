import { getFirestore, collection, query, orderBy } from 'firebase/firestore';
import { doc, getDocs, getDoc } from 'firebase/firestore';
import { DocumentData, DocumentReference } from 'firebase/firestore';

import '@/firebaseInit';

export async function getIndoorMapDescriptor<PuzzleID extends string>(locationID: string, gameName: string): Promise<IndoorMapDescriptor<PuzzleID>> {
	return {
		floors: await getFloors<PuzzleID>(locationID, gameName),
	};
}

// Below code must be keep in sync with https://github.com/corioders/terrain-story.map-cms/blob/master/src/firebase.ts
export interface IndoorMapDescriptor<PuzzleID extends string> {
	floors: FloorDescriptor<PuzzleID>[];
}

export interface FloorDescriptor<PuzzleID extends string> {
	name: string;
	puzzleIDs: PuzzleID[];
}

async function getFloors<PuzzleID extends string>(locationID: string, gameName: string): Promise<FloorDescriptor<PuzzleID>[]> {
	const gameReference = await getGameReference(locationID, gameName);
	const gameSnapshot = await getDoc(gameReference);
	if (!gameSnapshot.exists()) {
		return [];
	}

	const floorsSnapshot = await getDocs(query(collection(gameSnapshot.ref, 'floors'), orderBy('index')));
	const floors: FloorDescriptor<PuzzleID>[] = await Promise.all(
		floorsSnapshot.docs.map(async (floorDoc) => {
			return floorDoc.data() as FloorDescriptor<PuzzleID>;
		}),
	);

	return floors;
}

async function getGameReference(locationID: string, gameName: string): Promise<DocumentReference<DocumentData>> {
	const db = getFirestore();
	const mapCms = collection(db, 'map-cms');

	const locationSnapshot = await getDoc(doc(mapCms, locationID));
	if (!locationSnapshot.exists()) {
		// alert('Nieznany błąd :<');
		throw 'LocationSnapshot does not exist.';
	}

	return doc(collection(locationSnapshot.ref, 'games'), gameName);
}
