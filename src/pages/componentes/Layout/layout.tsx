import * as React from 'react';

export const Layout: React.FunctionComponent = (children) => {
	return (
		<>
			<head></head>
			<main>(children)</main>
			<footer></footer>
		</>
	);
};

export default Layout;