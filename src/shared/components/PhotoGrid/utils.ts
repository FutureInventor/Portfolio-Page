import {
	barcelonaSagradaPhoto,
	bowlingPhoto,
	climbingTopPhoto,
	franceLaSalttePhoto,
	londonArsenalPhoto,
	londonCanaryPhoto,
	londonChelsea,
	londonTowerBridgePhoto,
	londonVictoryPhoto,
	manchesterUnitedPhoto,
	mazuryDawnPhoto,
	mclarenPhoto,
	notreDamePhoto,
	parisEiffelPhoto,
	playingIEMPhoto,
	skiSwissPhoto,
	swissMurrenPhoto,
	walesPhoto,
	giewontPhoto,
	icelandWaterfallPhoto,
	rysiankaPhoto,
	sushiPhoto,
} from '@shared/assets/index';

interface Types {
	id: number;
	styleName: string;
	date: string;
	caption: string;
	imageSrc: StaticImageData;
	imageAlt: string;
}

export const photos: Types[] = [
	{
		id: 1,
		styleName: 'barca',
		date: 'Date: 08.2018',
		caption: 'Place: Sagrada Familia, Barcelona',
		imageSrc: barcelonaSagradaPhoto,
		imageAlt: 'Photo of Sagrada Familia',
	},
	{
		id: 2,
		styleName: 'bridge',
		date: 'Date: 09.2019',
		caption: 'Place: Tower Bridge, London',
		imageSrc: londonTowerBridgePhoto,
		imageAlt: 'Photo of Tower Bridge',
	},
	{
		id: 3,
		styleName: 'climb',
		date: 'Date: 10.2018',
		caption: 'Place: Comic Con, Warsaw',
		imageSrc: climbingTopPhoto,
		imageAlt: 'Photo of climbing Karolina',
	},
	{
		id: 4,
		styleName: 'eiffel',
		date: 'Date: 08.2018',
		caption: 'Place: Eiffel Tower, Paris',
		imageSrc: parisEiffelPhoto,
		imageAlt: 'Photo of Eiffel Tower',
	},
	{
		id: 5,
		styleName: 'murren',
		date: 'Date: 02.2021',
		caption: 'Place: Mürren, Switzerland',
		imageSrc: swissMurrenPhoto,
		imageAlt: 'Photo of Mürren',
	},
	{
		id: 6,
		styleName: 'church',
		date: 'Date: 08.2018',
		caption: 'Place: Notre-Dame, Paris',
		imageSrc: notreDamePhoto,
		imageAlt: 'Photo of Notre-Dame',
	},
	{
		id: 7,
		styleName: 'alps',
		date: 'Date: 08.2018',
		caption: 'Place: La Salette-Fallavaux, France',
		imageSrc: franceLaSalttePhoto,
		imageAlt: 'Photo of Alps in La Salette-Fallavaux',
	},
	{
		id: 8,
		styleName: 'wales',
		date: 'Date: 02.2020',
		caption: 'Place: Cardiff, Wales',
		imageSrc: walesPhoto,
		imageAlt: 'Photo of Cardiff',
	},
	{
		id: 9,
		styleName: 'chelsea',
		date: 'Date: 01.2020',
		caption: 'Place: Stamford Bridge, London',
		imageSrc: londonChelsea,
		imageAlt: 'Photo of Stamford Bridge',
	},
	{
		id: 10,
		styleName: 'arsenal',
		date: 'Date: 01.2020',
		caption: 'Place: Emirates Stadium, London',
		imageSrc: londonArsenalPhoto,
		imageAlt: 'Photo of Emirates Stadium',
	},
	{
		id: 11,
		styleName: 'manchester',
		date: 'Date: 01.2020',
		caption: 'Place: Old Trafford, Manchester',
		imageSrc: manchesterUnitedPhoto,
		imageAlt: 'Photo of Old Trafford',
	},
	{
		id: 12,
		styleName: 'bowling',
		date: 'Date: 07.2018',
		caption: 'Place: Bowling Club, Żywiec',
		imageSrc: bowlingPhoto,
		imageAlt: 'Photo of Karolina bowling',
	},
	{
		id: 13,
		styleName: 'cross',
		date: 'Date: 04.2021',
		caption: 'Place: Giewont 1895 m MSL, Zakopane',
		imageSrc: giewontPhoto,
		imageAlt: 'Photo of climbing on Giewont in winter',
	},
	{
		id: 14,
		styleName: 'waterfall',
		date: 'Date: 08.2017',
		caption: 'Place: Selijalandsfoss, Iceland',
		imageSrc: icelandWaterfallPhoto,
		imageAlt: 'Photo of Canary Wharf',
	},
	{
		id: 19,
		styleName: 'boots',
		date: 'Date: 06.2019',
		caption: 'Place: Rysianka 1290 m MSL, Beskid Żywiecki',
		imageSrc: rysiankaPhoto,
		imageAlt: 'Photo of mountains seen from Rysianka',
	},
	{
		id: 20,
		styleName: 'sushi',
		date: 'Date: 10.2019',
		caption: 'Place: Momo Cafe, London',
		imageSrc: sushiPhoto,
		imageAlt: 'Photo of sushi',
	},
	{
		id: 21,
		styleName: 'monument',
		date: 'Date: 07.2019',
		caption: 'Place: Victoria Memorial, London',
		imageSrc: londonVictoryPhoto,
		imageAlt: 'Photo of Victoria Memorial',
	},
	{
		id: 22,
		styleName: 'lake',
		date: 'Date: 05.2021',
		caption: 'Place: Tajty Lake, Wilkasy',
		imageSrc: mazuryDawnPhoto,
		imageAlt: 'Photo of lake',
	},
	{
		id: 15,
		styleName: 'skyscrapper',
		date: 'Date: 01.2020',
		caption: 'Place: Canary Wharf, London',
		imageSrc: londonCanaryPhoto,
		imageAlt: 'Photo of Canary Wharf',
	},
	{
		id: 16,
		styleName: 'car',
		date: 'Date: 06.2019',
		caption: 'Place: McLaren, London',
		imageSrc: mclarenPhoto,
		imageAlt: 'Photo of Formula One car',
	},
	{
		id: 17,
		styleName: 'ski',
		date: 'Date: 02.2021',
		caption: 'Place: Eiger, Switzerland',
		imageSrc: skiSwissPhoto,
		imageAlt: 'Photo of Karolina skiing',
	},
	{
		id: 18,
		styleName: 'game',
		date: 'Date: 03.2019',
		caption: 'Place: Intel Extreme Masters, Katowice',
		imageSrc: playingIEMPhoto,
		imageAlt: 'Photo of Karolina plaing game',
	},
];
