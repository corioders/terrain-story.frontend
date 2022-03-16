import { LatLngTuple } from 'leaflet';

export interface Pin {
	localization: LatLngTuple;
	name: string;
	photo: string;
}
export interface MapData {
	center: LatLngTuple;
	zoom: number;
	pins: Pin[];
}
