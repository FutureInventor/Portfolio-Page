import Image from 'next/image';
import { sites } from './utils';

const VNewsletters = (): JSX.Element => {
	return (
		<>
			{sites?.map(({ id, link, imageAlt, imageSrc }) => (
				<a key={id} href={link}>
					<Image alt={imageAlt} src={imageSrc} />
				</a>
			))}
		</>
	);
};
export default VNewsletters;
