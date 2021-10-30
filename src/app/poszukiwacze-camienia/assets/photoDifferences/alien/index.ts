import { DifferenceDescriptor } from '@rock/components/photoDifferences/difference';

import img1 from './1.png';
import img2 from './2.png';

const differenceDescriptor: DifferenceDescriptor = {
	originalPhotoSrc: img1 as string,
	differentPhotoSrc: img2 as string,
	strokeStyle: 'red',
	differences: [
		{ x: 595, y: 12, radius: 40 },
		{ x: 413, y: 462, radius: 57 },
		{ x: 305, y: 688, radius: 45 },
	],
	photoAlt: 'Pierwsza różnica',
};

export default differenceDescriptor;
