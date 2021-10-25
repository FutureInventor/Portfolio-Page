import { ReactElement } from 'react';
import NextHead from 'next/head';

interface Props {
	title?: string;
}

const Head = ({ title }: Props): ReactElement => (
	<NextHead>
		<title>{title}</title>
	</NextHead>
);

Head.defaultProps = {
	title: 'Karolina Hudziec',
};

export default Head;
