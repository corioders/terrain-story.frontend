interface DisplaceAlphabet {
	alphabet: string[];
	displacedAlphabet: string[];
}

export function displaceAlphabet(displacement: number): DisplaceAlphabet {
	const alphabet = [
		'a',
		'ą',
		'b',
		'c',
		'ć',
		'd',
		'e',
		'ę',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'ł',
		'm',
		'n',
		'ń',
		'o',
		'ó',
		'p',
		'q',
		'r',
		's',
		'ś',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'ź',
		'ż',
	];

	const [...a] = alphabet;
	return { alphabet, displacedAlphabet: a.concat(a.splice(0, displacement)) };
}
