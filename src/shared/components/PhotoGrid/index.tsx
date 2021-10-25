import Image from 'next/image';
import styles from './styles.module.scss';
import { photos } from './utils';
import { TypingEffect } from '@shared/utils';

const VPhotoGrid = () => {
	return (
		<div className={styles.photoGrid}>
			{photos?.map(({ id, styleName, date, caption, imageSrc, imageAlt }) => (
				<div key={id} className={styles[styleName]}>
					<h2 className={styles.photoInfo}>
						{TypingEffect(caption, 50)}
						<br />
						{TypingEffect(date, 50)}
					</h2>
					<Image alt={imageAlt} src={imageSrc} layout="fill" />
				</div>
			))}
		</div>
	);
};
export default VPhotoGrid;
