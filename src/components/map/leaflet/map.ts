type Latitude = number;
type Longitude = number;

type Localization = [Latitude, Longitude];

export interface Location {
	localization: Localization;
	name: string;
	mysteryName: string;
}

export interface MapData {
	center: Localization;
	zoom: number;
	pins: Location[];
}
