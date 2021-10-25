import {
	comicCommission1,
	comicCommission2,
	logoCommission,
	posterCommission,
	schemeCommission,
} from '@shared/assets/index';
import { utilsTypes } from '@shared/interfaces';

export const graphicPhotos: utilsTypes[] = [
	{
		id: 1,
		imageAlt: 'Camera logo commission',
		imageSrc: logoCommission,
	},
	{
		id: 2,
		imageAlt: 'Breathing scheme commission',
		imageSrc: schemeCommission,
	},
	{
		id: 3,
		imageAlt: 'Woman poster commissions',
		imageSrc: posterCommission,
	},
	{
		id: 4,
		imageAlt: 'Comic commission 1',
		imageSrc: comicCommission1,
	},
	{
		id: 4,
		imageAlt: 'Comic commission 2',
		imageSrc: comicCommission2,
	},
];
