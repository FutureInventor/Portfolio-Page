import '../styles/globals.scss';
import type { ReactElement } from 'react';
import { AppProps } from '@shared/types';
import Head from 'next/head';
const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
	const getLayout = Component.getLayout || ((page: ReactElement) => page);

	return (
		<>
			<Head>
				<meta
					name="description"
					content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills."
				/>
				<meta name="author" content="Karolina Hudziec" />
				<meta
					name="keywords"
					content="Karolina, Hudziec, Portfolio, Frontend"
				/>
				<meta
					property="og:image"
					content="https://www.khudziec.com/portfolioPage.png"
					key="ogimage"
				/>
				<link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
};

export default MyApp;
