import { Icon } from 'leaflet';

import iconRetinaVisitedUrl from './assets/marker-icon-2x-visited.png';
import iconRetinaUrl from './assets/marker-icon-2x.png';
import iconVisitedUrl from './assets/marker-icon-visited.png';
import iconUrl from './assets/marker-icon.png';
import shadowUrl from './assets/marker-shadow.png';

const defaultIconOptions = Icon.Default.prototype.options;

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
