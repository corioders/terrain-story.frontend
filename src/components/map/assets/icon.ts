import { Icon } from 'leaflet';

import iconRetinaUrl from './marker-icon-2x.png';
import iconUrl from './marker-icon.png';
import shadowUrl from './marker-shadow.png';

import iconRetinaVisitedUrl from '../assets/marker-icon-2x-visited.png';
import iconRetinaIndoorUrl from '../assets/marker-icon-2x-visited.png';
import iconIndoorUrl from '../assets/marker-icon-indoor.png';
import iconVisitedUrl from '../assets/marker-icon-visited.png';

export const defaultIconOptions = Icon.Default.prototype.options;

export const defaultIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconUrl,
	iconRetinaUrl: iconRetinaUrl,
	shadowUrl: shadowUrl,
});

export const visitedIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconVisitedUrl,
	iconRetinaUrl: iconRetinaVisitedUrl,
	shadowUrl: shadowUrl,
});

export const indoorIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconIndoorUrl,
	iconRetinaUrl: iconRetinaIndoorUrl,
	shadowUrl: shadowUrl,
});
