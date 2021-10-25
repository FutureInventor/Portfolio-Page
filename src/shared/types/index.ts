import type { ReactElement } from 'react';
import type { AppProps as NextAppProps } from 'next/app';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = Record<never, never>> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactElement;
};
export type AppProps = NextAppProps & {
	Component: NextPageWithLayout;
};
