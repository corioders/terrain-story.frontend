import { collection, CollectionReference, doc, DocumentData, getDocs, getFirestore, limit, query, QueryDocumentSnapshot, where, WhereFilterOp } from 'firebase/firestore';

import '@/firebaseInit';
import { QuestionDescriptor, QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';

export async function getQuestionsDescriptor(usedQuestionsIDs: Record<string, string[] | undefined>): Promise<QuestionsDescriptor> {
	const db = getFirestore();

	const preexamRecap = collection(db, 'preexam-recap');

	const getSubjectCollection = (subject: string): CollectionReference => {
		return collection(doc(preexamRecap, subject), 'questions');
	};

	return Promise.all([
		getQuestionDescriptor<'Polski'>('Polski', getSubjectCollection('polish'), usedQuestionsIDs),
		getQuestionDescriptor<'Matematyka'>('Matematyka', getSubjectCollection('math'), usedQuestionsIDs),
		await getQuestionDescriptor<'Angielski'>('Angielski', getSubjectCollection('english'), usedQuestionsIDs),
	]);
}

async function getQuestionDescriptor<T extends string>(
	subject: T,
	questionsCollection: CollectionReference,
	usedQuestionsIDs: Record<string, string[] | undefined>,
): Promise<QuestionDescriptor<T>> {
	// The following code is responsible for receiving a random document from firestore,
	// to fully understand this code pleas read https://stackoverflow.com/a/46801925/10934996.

	let subjectUsedQuestionsIDs = usedQuestionsIDs[subject];
	if (subjectUsedQuestionsIDs === undefined) {
		subjectUsedQuestionsIDs = [];
		usedQuestionsIDs[subject] = subjectUsedQuestionsIDs;
	}

	let doc: QueryDocumentSnapshot<DocumentData> | null = null;
	for (let fetchTry = 0; fetchTry < 5; fetchTry++) {
		for (let questionTry = 0; questionTry < 5; questionTry++) {
			const randomId = AutoId.newId();

			let randomOperator: WhereFilterOp;
			if (questionTry % 2 === 0) randomOperator = '>=';
			else randomOperator = '<=';

			const qConstrains = [where('__name__', randomOperator, randomId), limit(1)];

			if (subjectUsedQuestionsIDs.length > 0) qConstrains.push(where('__name__', 'not-in', subjectUsedQuestionsIDs));
			const q = query(questionsCollection, ...qConstrains);
			const snapshot = await getDocs(q);
			if (snapshot.empty) continue;
			doc = snapshot.docs[0];
			break;
		}

		// If we can't fetch doc after 30 tries then we try resetting usedQuestionsIDs so that we can select all questions.
		if (doc !== null) break;

		usedQuestionsIDs[subject] = [];
		subjectUsedQuestionsIDs = usedQuestionsIDs[subject] as string[];
	}

	if (doc === null) throw new Error('questionsFirebase: I cannot fetch question, dont know why');
	subjectUsedQuestionsIDs.push(doc.id);

	// TODO: Convert doc.data() to QuestionDescriptor and return it 🥳

	return {
		subject,
		question: '<p>Lorem ipsum dolor sit amet</p>',
		options: ['<p>magna</p>', '<p>tortor</p>', '<p>commodo</p>'],
		answer: '<p>commodo</p>',
		isHtml: true,
	};
}

// Code from firebase-js sdk (https://github.com/firebase/firebase-js-sdk/blob/master/packages/firestore/src/util/misc.ts)

export class AutoId {
	static newId(): string {
		// Alphanumeric characters
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		// The largest byte value that is a multiple of `char.length`.
		const maxMultiple = Math.floor(256 / chars.length) * chars.length;

		let autoId = '';
		const targetLength = 20;
		while (autoId.length < targetLength) {
			const bytes = randomBytes(40);
			for (let i = 0; i < bytes.length; ++i) {
				// Only accept values that are [0, maxMultiple), this ensures they can
				// be evenly mapped to indices of `chars` via a modulo operation.
				if (autoId.length < targetLength && bytes[i] < maxMultiple) {
					autoId += chars.charAt(bytes[i] % chars.length);
				}
			}
		}

		return autoId;
	}
}

// Code from firebase-js sdk (https://github.com/firebase/firebase-js-sdk/blob/master/packages/firestore/src/platform/browser/random_bytes.ts)

export function randomBytes(nBytes: number): Uint8Array {
	const bytes = new Uint8Array(nBytes);
	// Falls back to Math.random
	for (let i = 0; i < nBytes; i++) {
		bytes[i] = Math.floor(Math.random() * 256);
	}

	return bytes;
}
