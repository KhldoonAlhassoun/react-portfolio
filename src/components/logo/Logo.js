import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	svgHover: {
		fill: theme.palette.foreground.default,
		"&:hover": {
			fill: theme.palette.primary.main,
		},
		transition: "all 0.5s ease",
	},
}));

export const Logo = () => {
	const classes = useStyles();

	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-30 -30 130 200"
			className={classes.svgHover}
		>
			<path
				className="cls-1"
				d="M125.83,119.51q.12,27.63.13,55.27c0,5.23,0,10.48-.09,15.72a3.66,3.66,0,0,0,0,.74s0,.08,0,.1c-.25-.4.81-1.16.91-1.18-1.58.3-.91,2.71.67,2.41.87-.17.91-1,.94-1.67,0-1.21,0-2.41,0-3.62.09-9.91.06-19.82,0-29.73q0-19-.12-38a1.25,1.25,0,0,0-2.5,0Z"
				transform="translate(-125.8 -118.02)"
			/>
			<path
				className="cls-1"
				d="M128.18,156.24l27.92-27.93,7.77-7.77.39-.38a1.25,1.25,0,0,0-1.77-1.77l-2.16,2.16-15,15-19,18.95a1.25,1.25,0,0,0,1.77,1.77Z"
				transform="translate(-125.8 -118.02)"
			/>
			<path
				className="cls-1"
				d="M131.42,151.22c12.24,12.22,25.68,23.66,40.87,32.05,7.15,3.95,14.91,7.48,23,8.9a22.41,22.41,0,0,0,3.92.44,1.27,1.27,0,0,0,1.25-1.25v-72a1.26,1.26,0,0,0-2.33-.63l-5.37,7.17-12.91,17.22-15.54,20.73-13.5,18-4.43,5.92a30.91,30.91,0,0,0-2.13,2.84l-.09.12c-1,1.29,1.2,2.54,2.15,1.26l5.38-7.17,12.91-17.22,15.53-20.72,13.5-18,4.44-5.92a23.37,23.37,0,0,0,2.13-2.84.6.6,0,0,1,.09-.13l-2.33-.63v72l1.25-1.25c-.24,0-.47,0-.71,0l-.88-.08-.53-.06c-.17,0,.28,0,0,0l-.4-.06a50.47,50.47,0,0,1-8.22-2.07c-11-3.68-21.22-9.93-30.55-16.81a220.81,220.81,0,0,1-24.71-21.53,1.25,1.25,0,0,0-1.77,1.76Z"
				transform="translate(-125.8 -118.02)"
			/>
		</svg>
	);
};
