import { Icon } from 'leaflet';

import iconRetinaIndoorUrl from './marker-icon-2x-indoor.png';
import iconRetinaVisitedUrl from './marker-icon-2x-visited.png';
import iconRetinaUrl from './marker-icon-2x.png';
import iconIndoorUrl from './marker-icon-indoor.png';
import iconVisitedUrl from './marker-icon-visited.png';
import iconUrl from './marker-icon.png';
import shadowUrl from './marker-shadow.png';

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
