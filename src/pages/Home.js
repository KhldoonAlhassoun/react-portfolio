import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { SocialIcons } from "../components/content/SocialIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Works } from "../components/works/Works";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Element } from "react-scroll";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
}));

export const Home = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root} id="home">
				<DisplacementSphere />
				<LogoLink />
				<Content />
				<Hidden smDown>
					<SocialIcons />
				</Hidden>
				<Hidden mdUp>
					<SpeedDials />
				</Hidden>
			</div>
			<SideNavbar />
			<Element name="works">
				<Works />
			</Element>
			<Element name="about">
				<About />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
		</>
	);
};
