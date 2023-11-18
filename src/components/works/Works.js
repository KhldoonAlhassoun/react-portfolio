import React from "react";
import { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from "react-router-dom";

import "./Works.css";

import Ledigajobb from "../../assets/recentprojects/leddigajobb.png";
import connectFour from "../../assets/recentprojects/connectFour.png";
import beatStar from "../../assets/recentprojects/beatStar.png";
import meetUp from "../../assets/recentprojects/meetUp.png";

const useStyles = makeStyles((theme) => ({
	main: {
		maxWidth: "100vw",
		marginTop: "3em",
		marginBottom: "auto",
	},
}));

export const Works = () => {
	const classes = useStyles();
	const [projects, setProjects] = useState([
		{
			id: 1,
			title: "BeatStar",
			description:
				"One of the projects that I am proud to have worked on...",
			alter: "BeatStar",
			image: `${beatStar}`,
		},
		{
			id: 2,
			title: "MeetUp",
			description:
				"MeetUp, a tablet application thoughtfully designed to connect elderly individuals through tailored events and chat rooms, promoting social interaction and combatting isolation. The design journey involved extensive user research, resulting in an intuitive interface that prioritizes user needs.",
			alter: "MeetUp",
			image: `${meetUp}`,
		},
		{
			id: 3,
			title: "Connect Four",
			description: `
			Connect Four, a multiplayer game using Microsoft ASP.NET and SignalR for real-time challenges. Dynamic interface, strategic gameplay for all skill levels. `,
			alter: "Connect Four",
			image: `${connectFour}`,
		},
		{
			id: 4,
			title: "Cv-creator for Ledigajobb.se",
			description: `Cv-creator for Ledigajobb.se, a demonstration of advanced design thinking and prototyping skills. Using Figma, a fully functional prototype was crafted to optimize the job application process for users, employers, and recruiters. This project showcases a user-centered design approach, addressing diverse stakeholder needs and streamlining CV creation and job submissions on Ledigajobb.se.`,
			alter: "Cv-creator for Ledigajobb.se",
			image: `${Ledigajobb}`,
		},
	]);

	return (
		<section id="works">
			<Container component="main" className={classes.main} maxWidth="md">
				{projects.map((project) => (
					<div className="project" key={project.id}>
						<div className="__img_wrapper">
							<img src={project.image} alt={project.alter} />
						</div>
						<div className="__content_wrapper">
							<h3 className="title">
								<TextDecrypt text={project.title} />
							</h3>
							<p className="description">{project.description}</p>
							<Link
								to={`/project/${project.id}`}
								className="viewMore-btn"
							>
								<Typography component="span">
									View more
								</Typography>
								<i className="fas fa-arrow-right"></i>
							</Link>
						</div>
					</div>
				))}
			</Container>
		</section>
	);
};