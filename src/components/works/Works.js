/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
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
			description: `BeatSmart is a smart tool for music students to practice their sense of rhythm and ability to adjust their playing style to become better. The intelligent agent ables students to analyze their playing style and skill, gives feedback on how well they handle different tasks, and provides them with exercises to improve their playing. The tool is implemented using Unity and written in the programming language C#. The graphical elements are created in the prototype-tool Figma. `,
			alter: "BeatStar",
			image: `${beatStar}`,
		},
		{
			id: 2,
			title: "MeetUp",
			description: `MeetUp is a tablet application for elderly. The application aims to connect eldery togather throgh events, and chat rooms. The application has a larger interface with larger text and buttons to suit the eldery eyevision`,
			alter: "MeetUp",
			image: `${meetUp}`,
		},
		{
			id: 3,
			title: "Connect Four",
			description: `A fun multiplayer game that I implemented in the course "Applications for the internet". The game is built in Microsoft ASP.NET framework with a server and client application. The game also uses the SignalR library to create the game hub which connects the players in real-time.`,
			alter: "Connect Four",
			image: `${connectFour}`,
		},
		{
			id: 4,
			title: "Cv-creator, Ledigajobb.se",
			description: `Designed a fully functional prototype on Figma. The idea behind the project is to go through the design thinking process and find new innovative ideas regarding how users create a CV and apply for a job.`,
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
								<TextDecrypt
									text={project.id + ". " + project.title}
								/>
							</h3>
							<p className="description">{project.description}</p>
						</div>
					</div>
				))}
			</Container>
		</section>
	);
};
