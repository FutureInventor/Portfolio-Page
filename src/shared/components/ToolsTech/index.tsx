import type { ReactElement } from 'react';
import styles from './styles.module.scss';
import VIcon from '@components/Icon';
import { toolsTechItems } from './utils';

const VToolsTech = (): ReactElement => {
	return (
		<div className={styles.technologiesIcons}>
			{Object.entries(toolsTechItems).map((types) => {
				return (
					<div key={types[0]} className={styles.technologiesIconsRow}>
						{types[1]?.map(
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
				);
			})}
		</div>
	);
};

export default VToolsTech;
