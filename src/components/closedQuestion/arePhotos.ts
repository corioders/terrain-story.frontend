export default function arePhotos(paths: string[]): boolean {
	return paths.every((path) => /[/.](gif|jpg|jpeg|tiff|png|webp)$/i.test(path));
}
