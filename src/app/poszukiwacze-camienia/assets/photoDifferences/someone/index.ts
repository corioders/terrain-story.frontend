import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.png';
import img2 from './2.png';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1,
	differentPhotoSrc: img2,
	strokeStyle: 'red',
	differences: [
		{ x: 24, y: 545, radius: 40 },
		{ x: 109, y: 577, radius: 40 },
		{ x: 555, y: 365, radius: 60 },
	],
	photoAlt: 'Trzecia różnica',
};

export default differenceDescriptor;
