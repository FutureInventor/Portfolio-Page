import styles from './styles.module.scss';
import useTypedText from '@hooks/useTypedText';

const VMainHeader = () => {
	const welcomeMessage = useTypedText('Hello everyone!', 50);
	const subMessage = useTypedText("I'm Karolina.", 50, 200);
	const message = useTypedText(
		"Welcome on my portfolio page! I'm a Software Developer & Content Creator, currently working as TypeScript React Web Developer. Living in Cracow, Poland.",
		30,
		350
	);
	return (
		<div className={styles.aboutInfo}>
			<h1 className={styles.header}>
				{welcomeMessage}
				<br />
				{subMessage}
			</h1>
			<h2>{message}</h2>
		</div>
	);
};

export default VMainHeader;
