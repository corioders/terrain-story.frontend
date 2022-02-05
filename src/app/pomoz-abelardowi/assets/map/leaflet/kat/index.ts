import { MapData } from '@/components/map/leaflet/map';

import { PuzzleID } from '@help/store/progress';

//TODO: UPDATE puzzleID
export const mapData: MapData<PuzzleID> = {
	center: [50.25876354879924, 19.021294856020486],
	zoom: 14,
	pins: [
		{
			localization: [50.254729752425945, 19.01861264899349],
			name: 'Plac Miarki',
			puzzleID: 'Bingo',
			photo: require<string>('./placMiarki.webp'),
		},
		{
			localization: [50.25972846105917, 19.02250058578311],
			name: 'Teatr Śląski',
			puzzleID: 'Bingo',
			photo: require<string>('./teatrSlaski.webp'),
		},
		{
			localization: [50.25972891670551, 19.013331369366664],
			name: 'Plac Wolności',
			puzzleID: 'Bingo',
			photo: require<string>('./placWolnosci.webp'),
		},
		{
			localization: [50.25466308086385, 19.01492298980046],
			name: 'Kościół Garnizonowy',
			puzzleID: 'Bingo',
			photo: require<string>('./kosciolGarnizonowy.webp'),
		},
		{
			localization: [50.255481545175385, 19.018445075626712],
			name: 'Faza Charity Shop',
			puzzleID: 'Bingo',
			photo: require<string>('./fazaCharityShop.webp'),
		},
		{
			localization: [50.25556372937672, 19.014722451529728],
			name: 'Plac Andrzeja',
			puzzleID: 'Bingo',
			photo: require<string>('./placAndrzeja.webp'),
		},
		{
			localization: [50.25861903580001, 19.021386861479904],
			name: 'Centrum Informacji Turystycznej',
			puzzleID: 'Bingo',
			photo: require<string>('./centrumInformacjiTurystycznej.webp'),
		},
		{
			localization: [50.2571646958035, 19.0299658008134],
			name: 'Kościół Mariacki',
			puzzleID: 'Bingo',
			photo: require<string>('./kosciolMariacki.webp'),
		},
	],
};
Object.freeze(mapData);
