import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.png';
import img2 from './2.png';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1 as string,
	differentPhotoSrc: img2 as string,
	strokeStyle: 'green',
	differences: [
		{ x: 24, y: 537, radius: 35 },
		{ x: 109, y: 577, radius: 30 },
		{ x: 555, y: 383, radius: 35 },
	],
};

export default differenceDescriptor;
