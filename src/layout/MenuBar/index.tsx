import Link from 'next/link';
import styles from './styles.module.scss';
import type { ReactElement } from 'react';
import { menuBarItems } from './utils';
import { useRouter } from 'next/router';
import { COLORS } from '@shared/utils/constants/colors';

const VMenuBar = (): ReactElement => {
	const { pathname } = useRouter();

	return (
		<nav className={styles.menuBar}>
			<Link href="/">
				<a className={styles.title}>
					<div className={styles.squareInitials}>KH</div>
					<h3 className={styles.name}>Karolina Hudziec</h3>
				</a>
			</Link>
			{menuBarItems?.map(({ path, id, name }) => {
				const color = pathname === path ? COLORS.primary : COLORS.secondary;
				return (
					<Link href={path} key={id} passHref>
						<a className={styles.tab}>
							<h3 style={{ color: color }}>{name}</h3>
						</a>
					</Link>
				);
			})}
		</nav>
	);
};

export default VMenuBar;
