import styles from './styles.module.scss';
import { TypingEffect } from '@shared/utils';

const VMainHeader = () => {
	return (
		<div className={styles.aboutInfo}>
			<h1 className={styles.header}>
				{TypingEffect('Hello everyone!', 50)}
				<br />
				{TypingEffect("I'm Karolina.", 50, 200)}
			</h1>
			<h2>
				{TypingEffect(
					"Welcome on my portfolio page! I'm a Software Developer & Content Creator, currently working as TypeScript React Web Developer. Living in Cracow, Poland.",
					30,
					350
				)}
			</h2>
		</div>
	);
};

export default VMainHeader;
