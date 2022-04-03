import { DifferenceDescriptor } from '@/components/photoDifferences/difference';

import different from './different.webp';
import original from './original.webp';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: original,
	differentPhotoSrc: different,
	strokeStyle: 'red',
	lineWidth: 10,
	differences: [
		{ x: 200, y: 12, radius: 65 },
		{ x: 90, y: 60, radius: 40 },
		{ x: 95, y: 200, radius: 65 },
		{ x: 535, y: 1240, radius: 65 },
		{ x: 366, y: 165, radius: 30 },
	],
};
Object.freeze(differenceDescriptor);

export default differenceDescriptor;
