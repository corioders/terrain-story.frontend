import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.png';
import img2 from './2.png';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1,
	differentPhotoSrc: img2,
	strokeStyle: 'red',
	differences: [
		{ x: 25, y: 194, radius: 40 },
		{ x: 155, y: 532, radius: 45 },
		{ x: 700, y: 430, radius: 40 },
	],
	photoAlt: 'Druga różnica',
};

export default differenceDescriptor;
