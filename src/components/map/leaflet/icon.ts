import { Icon, IconOptions } from 'leaflet';

import iconRetinaVisitedUrl from './assets/marker-icon-2x-visited.png';
import iconRetinaUrl from './assets/marker-icon-2x.png';
import iconVisitedUrl from './assets/marker-icon-visited.png';
import iconUrl from './assets/marker-icon.png';
import shadowUrl from './assets/marker-shadow.png';

export function useDefaultIcon(options: IconOptions = Icon.Default.prototype.options as IconOptions): IconOptions {
	const defaultIcon = { ...options };
	defaultIcon.iconUrl = iconUrl as string;
	defaultIcon.iconRetinaUrl = iconRetinaUrl as string;
	defaultIcon.shadowUrl = shadowUrl as string;
	return defaultIcon;
}

export function useVisitedIcon(options: IconOptions = Icon.Default.prototype.options as IconOptions): IconOptions {
	const visitedIcon = { ...options };
	visitedIcon.iconUrl = iconVisitedUrl as string;
	visitedIcon.iconRetinaUrl = iconRetinaVisitedUrl as string;
	visitedIcon.shadowUrl = shadowUrl as string;
	return visitedIcon;
}
