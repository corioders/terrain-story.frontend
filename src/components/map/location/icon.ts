import { Icon } from 'leaflet';

import { defaultIcon as defIcon, defaultIconOptions } from '../assets/icon';
import iconRetinaIndoorUrl from '../assets/marker-icon-2x-visited.png';
import iconIndoorUrl from '../assets/marker-icon-indoor.png';
import shadowUrl from '../assets/marker-shadow.png';

export const defaultIcon = defIcon;
export const indoorIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconIndoorUrl,
	iconRetinaUrl: iconRetinaIndoorUrl,
	shadowUrl: shadowUrl,
});
