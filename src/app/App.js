import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";

import { PageNotFound } from "../pages/PageNotFound";

// const Resume = lazy(() => import("../pages/Resume"));
// const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
	logCredits();

	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<HelmetMeta />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/project/:projectId"
						component={ProjectDetail}
					/>
					{/* <Route path="/resume" component={Resume} /> */}
					<Route path="*" component={PageNotFound} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};
