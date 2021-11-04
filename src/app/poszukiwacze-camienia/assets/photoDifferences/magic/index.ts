import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.webp';
import img2 from './2.webp';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1,
	differentPhotoSrc: img2,
	strokeStyle: 'red',
  lineWidth: 20,
	differences: [
		{ x: 1201, y: 737, radius: 240 },
		{ x: 504, y: 1420, radius: 90 },
		{ x: 1535, y: 1348, radius: 340 },
	],
};
Object.freeze(differenceDescriptor);

export default differenceDescriptor;