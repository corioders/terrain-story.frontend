export interface PhotoDifference {
	x: number;
	y: number;
	radius: number;
}

export interface DifferenceDescriptor {
	differences: PhotoDifference[];
	originalPhotoSrc: string;
	differentPhotoSrc: string;
	strokeStyle: string;
}
