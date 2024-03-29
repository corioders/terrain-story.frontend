import { PuzzleID } from '@rock/store/progress';

import { OutdoorMapData } from '@/components/map/outdoor/outdoorMap';

export const mapData: OutdoorMapData<PuzzleID> = {
	center: [50.25876354879924, 19.021294856020486],
	zoom: 14,
	pins: [
		{
			localization: [50.254729752425945, 19.01861264899349],
			name: 'Plac Miarki',
			puzzleID: 'Treasurer',
			photo: require<string>('./placMiarki.webp'),
		},
		{
			localization: [50.25972846105917, 19.02250058578311],
			name: 'Teatr Śląski',
			puzzleID: 'Hacker',
			photo: require<string>('./teatrSlaski.webp'),
		},
		{
			localization: [50.25972891670551, 19.013331369366664],
			name: 'Plac Wolności',
			puzzleID: 'Dancer',
			photo: require<string>('./placWolnosci.webp'),
		},
		{
			localization: [50.25466308086385, 19.01492298980046],
			name: 'Kościół Garnizonowy',
			puzzleID: 'Archaeologist',
			photo: require<string>('./kosciolGarnizonowy.webp'),
		},
		{
			localization: [50.255481545175385, 19.018445075626712],
			name: 'Faza Charity Shop',
			puzzleID: 'Mage',
			photo: require<string>('./fazaCharityShop.webp'),
		},
		{
			localization: [50.25556372937672, 19.014722451529728],
			name: 'Plac Andrzeja',
			puzzleID: 'Inspector',
			photo: require<string>('./placAndrzeja.webp'),
		},
		{
			localization: [50.25861903580001, 19.021386861479904],
			name: 'Centrum Informacji Turystycznej',
			puzzleID: 'Tourist',
			photo: require<string>('./centrumInformacjiTurystycznej.webp'),
		},
		{
			localization: [50.2571646958035, 19.0299658008134],
			name: 'Kościół Mariacki',
			puzzleID: 'Princess',
			photo: require<string>('./kosciolMariacki.webp'),
		},
	],
};
Object.freeze(mapData);
