import VIcon from '@components/Icon';
import styles from './footer.module.scss';
import type { ReactElement } from 'react';
import { footerLinks } from './utils';

const VFooter = (): ReactElement => {
	return (
		<footer className={styles.footer}>
			<div className={styles.goUpSquare} />
			<h4 className={styles.copyrights}>
				© 2021
				<br />
				Build with <span>Next.js/TypeSript</span>
			</h4>
			<div className={styles.icons}>
				{footerLinks?.map(({ id, name, defaultIcon, onHoverIcon, link }) => (
					<VIcon
						key={id}
						defaultIcon={defaultIcon}
						onHoverIcon={onHoverIcon}
						href={link}
						height="30px"
						width="30px"
						name={name}
					/>
				))}
			</div>
		</footer>
	);
};

export default VFooter;
