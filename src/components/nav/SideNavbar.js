/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./SideNavbar.css";

export const SideNavbar = () => {
	const [activeNav, setActiveNav] = useState("#");

	return (
		<nav>
			<ScrollLink
				to="home"
				smooth={false}
				onClick={() => setActiveNav("/")}
				className={activeNav === "/" ? "active nav-link" : "nav-link"}
			>
				<Typography>Home</Typography>
			</ScrollLink>
			<ScrollLink
				to="works"
				smooth={false}
				onClick={() => setActiveNav("/works")}
				className={
					activeNav === "/works" ? "active nav-link" : "nav-link"
				}
			>
				<Typography>Projects</Typography>
			</ScrollLink>
			<ScrollLink
				to="about"
				smooth={false}
				onClick={() => setActiveNav("/about")}
				className={
					activeNav === "/about" ? "active nav-link" : "nav-link"
				}
			>
				<Typography>About</Typography>
			</ScrollLink>
			<ScrollLink
				to="contact"
				smooth={false}
				onClick={() => setActiveNav("/contact")}
				className={
					activeNav === "/about" ? "active nav-link" : "nav-link"
				}
			>
				<Typography>Connect</Typography>
			</ScrollLink>
			{/* For navigation to other pages, use the Link component from react-router-dom */}

			{/* ... other links */}
		</nav>
	);
};
