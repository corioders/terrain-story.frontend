import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { doc, getDocs, getDoc } from 'firebase/firestore';
import { DocumentData, DocumentReference } from 'firebase/firestore';

export async function getFloorMapDescriptor<PuzzleID extends string>(locationID: string, gameName: string): Promise<FloorMapDescriptor<PuzzleID>> {
	return {
		floors: await getFloors<PuzzleID>(locationID, gameName),
	};
}

// Below code must be keep in sync with https://github.com/corioders/terrain-story.map-cms/blob/master/src/firebase.ts
export interface FloorMapDescriptor<PuzzleID extends string> {
	floors: FloorDescriptor<PuzzleID>[];
}

export interface FloorDescriptor<PuzzleID extends string> {
	name: string;
	puzzleIDs: PuzzleID[];
}

const app = initializeApp({
	apiKey: 'AIzaSyDOlR963Jp-FjS_upzGyoyrY8X7RB5f5bI',
	projectId: 'core-folio-327613',
});

async function getFloors<PuzzleID extends string>(locationID: string, gameName: string): Promise<FloorDescriptor<PuzzleID>[]> {
	const gameReference = await getGameReference(locationID, gameName);
	const gameSnapshot = await getDoc(gameReference);
	if (!gameSnapshot.exists()) {
		return [];
	}

	const floorsSnapshot = await getDocs(collection(gameSnapshot.ref, 'floors'));
	const floors: FloorDescriptor<PuzzleID>[] = await Promise.all(
		floorsSnapshot.docs.map(async (floorDoc) => {
			return floorDoc.data() as FloorDescriptor<PuzzleID>;
		}),
	);

	return floors;
}

async function getGameReference(locationID: string, gameName: string): Promise<DocumentReference<DocumentData>> {
	const db = getFirestore(app);
	const mapCms = collection(db, 'map-cms');

	const locationSnapshot = await getDoc(doc(mapCms, locationID));
	if (!locationSnapshot.exists()) {
		// alert('Nieznany błąd :<');
		throw 'LocationSnapshot does not exist.';
	}

	return doc(collection(locationSnapshot.ref, 'games'), gameName);
}
