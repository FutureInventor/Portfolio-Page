import type { ReactElement } from 'react';
import styles from './toolstech.module.scss';
import VIcon from '@components/Icon';
import { toolsTechItems } from './utils';

const VToolsTech = (): ReactElement => (
	<div className={styles.technologiesIcons}>
		<div className={styles.technologiesIconsRow}>
			{toolsTechItems
				.slice(0, 8)
				?.map(
					({
						id,
						defaultIcon,
						onHoverIcon,
						name,
						tooltipID,
						height,
						width,
					}) => (
						<VIcon
							key={id}
							defaultIcon={defaultIcon}
							onHoverIcon={onHoverIcon}
							height={height}
							width={width}
							name={name}
							tooltipID={tooltipID}
						/>
					)
				)}
		</div>
	</div>
);

export default VToolsTech;
