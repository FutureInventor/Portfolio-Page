import type { ReactChildren, ReactChild } from 'react';

export interface childrenProps {
	children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export interface utilsTypes {
	id: number;
	imageAlt: string;
	imageSrc: StaticImageData;
	link?: string;
}
