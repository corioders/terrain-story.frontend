import { Pin, MapData } from '../map';

export interface OutdoorPin<puzzleIDT extends string> extends Pin {
	puzzleID: puzzleIDT;
}
export interface OutdoorMapData<puzzleIDT extends string> extends MapData {
	pins: OutdoorPin<puzzleIDT>[];
}
