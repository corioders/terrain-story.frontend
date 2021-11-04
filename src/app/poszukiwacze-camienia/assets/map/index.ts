import { MapData } from '@/components/map/leaflet/map';

import { puzzleID } from '@rock/routes/codes/puzzle';

export const mapData: MapData<puzzleID> = {
	center: [50.25667900327114, 19.017880926181164],
	zoom: 13,
	pins: [
		{
			localization: [50.255344152043556, 19.01866081183837],
			name: 'Plac Miarki',
			puzzleID: 'Treasurer',
			photo: require<string>('@rock/assets/map/placMiarki.webp'),
		},
		{
			localization: [50.25980242091079, 19.022769820429417],
			name: 'Teatr Śląski',
			puzzleID: 'Hacker',
			photo: require<string>('@rock/assets/map/teatrSlaski.webp'),
		},
		{
			localization: [50.259494856483954, 19.013097140674947],
			name: 'Plac Wolności',
			puzzleID: 'Dancer',
			photo: require<string>('@rock/assets/map/placWolnosci.webp'),
		},
		{
			localization: [50.254570216438964, 19.01467819649279],
			name: 'Kościół Garnizonowy',
			puzzleID: 'Archaeologist',
			photo: require<string>('@rock/assets/map/kosciolGarnizonowy.webp'),
		},
		{
			localization: [50.256722846104275, 19.02100523601609],
			name: 'Kinoteatr Rialto',
			puzzleID: 'Mage',
			photo: require<string>('@rock/assets/map/rialto.webp'),
		},
		{
			localization: [50.255995151918356, 19.014963356014082],
			name: 'Plac Andrzeja',
			puzzleID: 'Inspector',
			photo: require<string>('@rock/assets/map/placAndrzeja.webp'),
		},
		{
			localization: [50.25876354879924, 19.021294856020486],
			name: 'Centrum Informacji Turystycznej',
			puzzleID: 'Tourist',
			photo: require<string>('@rock/assets/map/centrumInformacjiTurystycznej.webp'),
		},
		{
			localization: [50.25726038923438, 19.030276456018868],
			name: 'Kościół Mariacki',
			puzzleID: 'Princess',
			photo: require<string>('@rock/assets/map/kosciolMariacki.webp'),
		},
	],
};
Object.freeze(mapData);
