import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.jpg';
import img2 from './2.jpg';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1 as string,
	differentPhotoSrc: img2 as string,
	strokeStyle: 'green',
	differences: [
		{ x: 415, y: 555, radius: 35 },
		{ x: 595, y: 103, radius: 35 },
		{ x: 308, y: 785, radius: 35 },
	],
};

export default differenceDescriptor;
