import { makeRoutes, RouteProps } from "@andrew-r-king/react-kitchen";

import {
	HomeLayout,
	NotFoundLayout,
	// ModalsLayout,
} from "Layouts";

const routes: RouteProps[] = [
	/*{
		path: "modals",
		element: <ModalsLayout />,
	},*/
];

const Routes = makeRoutes(routes, HomeLayout, NotFoundLayout, {
	baseName: process.env.PUBLIC_URL,
});

export { Routes };
