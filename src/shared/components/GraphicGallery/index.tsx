import Image from 'next/image';
import { graphicPhotos } from './utils';

const VGraphicGallery = (): JSX.Element => {
	return (
		<>
			{graphicPhotos?.map(({ id, imageAlt, imageSrc }) => (
				<Image key={id} alt={imageAlt} layout="fixed" src={imageSrc} />
			))}
		</>
	);
};
export default VGraphicGallery;
