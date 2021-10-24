import {
	gmailLogo,
	gmailLogoHover,
	linkedInLogo,
	linkedInLogoHover,
	gitHubLogo,
	gitHubLogoHover,
} from '@shared/assets/index';

interface FooterProps {
	id: number;
	name: string;
	defaultIcon: StaticImageData;
	onHoverIcon: StaticImageData;
	link: string;
}

type linksType = FooterProps[];

export const footerLinks: linksType = [
	{
		id: 1,
		name: 'LinkedIn',
		defaultIcon: linkedInLogo,
		onHoverIcon: linkedInLogoHover,
		link: 'https://www.linkedin.com/in/karolina-hudziec-0b2ba815a',
	},
	{
		id: 2,
		name: 'Gmail',
		defaultIcon: gmailLogo,
		onHoverIcon: gmailLogoHover,
		link: 'mailto:khudziec@gmail.com',
	},
	{
		id: 3,
		name: 'GitHub',
		defaultIcon: gitHubLogo,
		onHoverIcon: gitHubLogoHover,
		link: 'https://github.com/FutureInventor',
	},
];
