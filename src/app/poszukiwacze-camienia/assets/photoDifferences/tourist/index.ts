import { DifferenceDescriptor } from '@/components/photoDifferences/difference';

import img1 from './1.webp';
import img2 from './2.webp';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1,
	differentPhotoSrc: img2,
	strokeStyle: 'red',
  lineWidth: 20,
	differences: [
		{ x: 600, y: 489, radius: 250 },
		{ x: 523, y: 1446, radius: 400 },
		{ x: 1122, y: 1430, radius: 250 },
	],
};
Object.freeze(differenceDescriptor);

export default differenceDescriptor;
