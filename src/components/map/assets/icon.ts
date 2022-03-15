import { Icon } from 'leaflet';

import iconRetinaUrl from './marker-icon-2x.png';
import iconUrl from './marker-icon.png';
import shadowUrl from './marker-shadow.png';

export const defaultIconOptions = Icon.Default.prototype.options;

export const defaultIcon = new Icon({
	...defaultIconOptions,
	iconUrl: iconUrl,
	iconRetinaUrl: iconRetinaUrl,
	shadowUrl: shadowUrl,
});
