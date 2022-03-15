import { Icon } from 'leaflet';

import { defaultIcon as defIcon, defaultIconOptions } from '../assets/icon';
import iconRetinaVisitedUrl from '../assets/marker-icon-2x-visited.png';
import iconVisitedUrl from '../assets/marker-icon-visited.png';
import shadowUrl from '../assets/marker-shadow.png';

export const defaultIcon = defIcon;
export const visitedIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconVisitedUrl,
	iconRetinaUrl: iconRetinaVisitedUrl,
	shadowUrl: shadowUrl,
});
