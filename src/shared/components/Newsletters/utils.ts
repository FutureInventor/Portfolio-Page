import {
	belayTheCppLogo,
	bonoboPressLogo,
	cssTricksLogo,
	dribbbleLogo,
	freeCodeCampLogo,
	hashnodeLogo,
	sitePointLogo,
} from '@shared/assets/index';
import { utilsTypes } from '@shared/interfaces';

export const sites: utilsTypes[] = [
	{
		id: 1,
		link: 'https://css-tricks.com/',
		imageAlt: 'CSS-Tricks logo',
		imageSrc: cssTricksLogo,
	},
	{
		id: 2,
		link: 'https://belaycpp.com/',
		imageAlt: 'Belay the CPP logo',
		imageSrc: belayTheCppLogo,
	},
	{
		id: 3,
		link: 'https://dribbble.com/',
		imageAlt: 'Dribbble logo',
		imageSrc: dribbbleLogo,
	},
	{
		id: 4,
		link: 'https://hashnode.com/',
		imageAlt: 'Hashnode logo',
		imageSrc: hashnodeLogo,
	},
	{
		id: 5,
		link: 'https://bonobopress.com/',
		imageAlt: 'Bonobopress logo',
		imageSrc: bonoboPressLogo,
	},
	{
		id: 6,
		link: 'https://www.sitepoint.com/',
		imageAlt: 'Site Point logo',
		imageSrc: sitePointLogo,
	},
	{
		id: 7,
		link: 'https://www.freecodecamp.org/',
		imageAlt: 'FreeCodeCamp logo',
		imageSrc: freeCodeCampLogo,
	},
];
