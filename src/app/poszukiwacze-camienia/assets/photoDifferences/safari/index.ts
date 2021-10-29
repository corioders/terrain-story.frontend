import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.png';
import img2 from './2.png';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1 as string,
	differentPhotoSrc: img2 as string,
	strokeStyle: 'red',
	differences: [
		{ x: 10, y: 194, radius: 35 },
		{ x: 155, y: 532, radius:45 },
		{ x: 700, y: 430, radius: 40 },
	],
};

export default differenceDescriptor;
