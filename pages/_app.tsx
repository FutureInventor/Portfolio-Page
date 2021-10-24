import '../styles/globals.scss';
import type { ReactElement } from 'react';
import { AppProps } from '@shared/types';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
	const getLayout = Component.getLayout || ((page: ReactElement) => page);

	return getLayout(<Component {...pageProps} />);
};

export default MyApp;
