import { GlobalThemeOverrides } from 'naive-ui';

export const primary = '#2A9D8F';
export const primaryDark = '#24897D'; // -5
export const primaryDarker = '#1F756B'; // -10

export const secondary = '#083D77';
export const secondaryDark = '#07325F'; // -5
export const secondaryDarker = '#052548'; // -10

export const accent = '#F4E04D';
export const accentDark = '#F2DC36'; // -5
export const accentDarker = '#F1D81E'; // -10

export const themeOverrides: GlobalThemeOverrides = {
	common: {
		fontWeightStrong: '600',
		primaryColor: primaryDarker,
		primaryColorHover: primaryDark,
		primaryColorPressed: primaryDarker,
		primaryColorSuppl: primaryDark,

		infoColor: secondary,
		infoColorHover: secondaryDark,
		infoColorPressed: secondary,
		infoColorSuppl: secondaryDark,

		successColor: primaryDark,
		successColorHover: primary,
		successColorPressed: primaryDark,
		successColorSuppl: primary,

		warningColor: accentDark,
		warningColorHover: accent,
		warningColorPressed: accentDark,
		warningColorSuppl: accent,
	},
};
