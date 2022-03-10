import { DifferenceDescriptor } from '@/components/photoDifferences/difference';

import img1 from './1.webp';
import img2 from './2.webp';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1,
	differentPhotoSrc: img2,
	strokeStyle: 'red',
  lineWidth: 20,
	differences: [
		{ x: 359, y: 373, radius: 350 },
		{ x: 1280, y: 368, radius: 350 },
		{ x: 1289, y: 1560, radius: 440 },
	],
};
Object.freeze(differenceDescriptor);

export default differenceDescriptor;
