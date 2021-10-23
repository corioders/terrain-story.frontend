import { DifferenceDescriptor } from '@/app/poszukiwacze-camienia/components/photoDifference/difference';

import img1 from './1.jpg';
import img2 from './2.jpg';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1 as string,
	differentPhotoSrc: img2 as string,
	strokeStyle: 'green',
	differences: [
		{ x: 75, y: 202, radius: 35 },
		{ x: 202, y: 517, radius: 35 },
		{ x: 746, y: 447, radius: 20 },
	],
};

export default differenceDescriptor;
