import { collection, getFirestore, addDoc } from 'firebase/firestore';

import '@/firebaseInit';

const bugReportsMail = 'bugs.terrainstory@gmail.com';

export async function submitBug(message: string): Promise<void> {
	const db = getFirestore();
	const bugReports = collection(db, 'bug-reports');
	await addDoc(bugReports, {
		message: {
			subject: `Bug report at ${new Date()}`,
			text: message,
		},
		to: bugReportsMail,
	});
}
