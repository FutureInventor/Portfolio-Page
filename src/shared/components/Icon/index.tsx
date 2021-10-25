import Image from 'next/image';
import styles from './styles.module.scss';
import ReactTooltip from 'react-tooltip';
import type { ReactElement } from 'react';

type IconProps = {
	defaultIcon: StaticImageData;
	onHoverIcon: StaticImageData;
	href?: string;
	height: string;
	name: string;
	tooltipID?: string;
	width: string;
};

const VIcon = (props: IconProps): ReactElement => (
	<a
		data-tip={props.tooltipID ? true : false}
		data-for={props.tooltipID}
		href={props.href}
		className={styles.iconContainer}
		style={{ height: props.height, width: props.width }}
	>
		<div className={styles.iconActive}>
			<Image
				alt={`On hover ${props.name} icon.`}
				src={props.onHoverIcon}
				width={props.width}
				height={props.height}
			/>
		</div>
		{props.tooltipID && (
			<ReactTooltip id={props.tooltipID} type="light" effect="solid">
				<span>{props.name}</span>
			</ReactTooltip>
		)}
		<div className={styles.icon}>
			<Image
				alt={`Default ${props.name} icon.`}
				src={props.defaultIcon}
				width={props.width}
				height={props.height}
			/>
		</div>
	</a>
);

export default VIcon;
