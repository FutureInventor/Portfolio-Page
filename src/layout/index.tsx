import { childrenProps } from '@shared/interfaces';
import type { ReactElement } from 'react';
import VMenuBar from './MenuBar';
import VFooter from './Footer';

const Layout = ({ children }: childrenProps): ReactElement => (
	<div>
		<VMenuBar />
		{children}
		<VFooter />
	</div>
);

export default Layout;
