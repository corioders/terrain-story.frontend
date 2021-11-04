type Latitude = number;
type Longitude = number;

type Localization = [Latitude, Longitude];

export interface Pin<puzzleIDT extends string> {
	localization: Localization;
	name: string;
	puzzleID: puzzleIDT;
	photo: string;
}
export interface MapData<puzzleIDT extends string> {
	center: Localization;
	zoom: number;
	pins: Pin<puzzleIDT>[];
}
