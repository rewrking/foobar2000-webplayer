import React from "react";

import { Page } from "Components";

type Props = {
	children?: React.ReactNode;
};

const NotFoundLayout = (props: Props) => {
	return (
		<Page title="Page Not Found">
			<p>404: Page Not found</p>
			{props.children}
		</Page>
	);
};

export { NotFoundLayout };
