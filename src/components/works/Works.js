/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Typography } from "@material-ui/core";
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
	const [showMore, setShowMore] = useState(true);

	function toggleShowMore() {
		setShowMore(!showMore);
	}
	const [projects, setProjects] = useState([
		/* 	{
			id: 1,
			title: "BeatStar",
			description1:
				"One of the projects that I am proud to have worked on is BeatSmart, a smart tool designed specifically for music students. This tool aims to help music students improve their sense of rhythm and ability to adjust their playing style to become better.",
			description2:
				"BeatSmart is equipped with an intelligent agent that is able to analyze the student's playing style and skill level. With this information, the tool is able to provide feedback on how well the student handles different tasks and offers exercises to improve their playing.",
			description3:
				"To create BeatSmart, we used Unity as the main development platform and the programming language C# to code the tool's intelligent agent. The graphical elements of the tool were created using the prototype-tool Figma. By combining these different tools, we were able to create a highly functional and user-friendly tool that is perfect for music students who want to improve their playing.",
			alter: "BeatStar",
			image: `${beatStar}`,
		}, */
		{
			id: 2,
			title: "MeetUp",
			description1:
				"MeetUp, is a tablet application designed for elderly individuals. The main goal of this application is to connect elderly people together through events and chat rooms. MeetUp offers a simple and user-friendly interface, with larger text and buttons to accommodate the visual needs of older users.",
			description2:
				"The application is tailored to the interests of the elderly population and offers a variety of events to choose from, including social gatherings, educational seminars, and physical activities. Users can join events, create new events, and communicate with other users through chat rooms. MeetUp aims to combat social isolation and promote social interaction among elderly individuals.",
			/* description3:
				"To design MeetUp, I conducted user research and usability testing with elderly users to ensure the interface was intuitive and easy to use. The resulting application offers a fun and engaging way for elderly people to connect with others and stay active in their communities.", */
			alter: "MeetUp",
			image: `${meetUp}`,
		},
		{
			id: 3,
			title: "Connect Four",
			description1: `Connect Four is a fun multiplayer game that I implemented during the course "Applications for the Internet". This exciting game is built using the Microsoft ASP.NET framework, which comprises of a server and client application. It features a dynamic user interface that provides players with an immersive gaming experience. The game uses SignalR library, which creates a game hub for players to connect and play in real-time. This enables players to engage in a thrilling competition with their friends or family, and experience the excitement of playing against each other in real-time.`,
			description2:
				"With Connect Four, players can enjoy a game that requires strategic thinking and quick reflexes. The aim of the game is to connect four pieces of the same color in a row, either horizontally, vertically, or diagonally, before their opponent does. It's a game that is easy to learn, but difficult to master, which makes it a great game for players of all skill levels.",
			description3: "",
			alter: "Connect Four",
			image: `${connectFour}`,
		},
		{
			id: 4,
			title: "Cv-creator for Ledigajobb.se",
			description1: `The "Cv-creator for Ledigajobb.se" project is a showcase of my design thinking and prototyping skills. With this project, we aimed to find new and innovative ideas for how users can create their CVs and apply for jobs through Ledigajobb.se.Using Figma, we designed a fully functional prototype that embodies the needs and requirements of job seekers, employers and recruiters. The prototype is aimed at streamlining the job application process by providing users with an intuitive and user-friendly interface for creating their CV and applying for jobs.`,
			description2:
				"With this project, we went through the entire design thinking process to identify user needs and pain points, and come up with solutions that are intuitive, engaging and functional. The final prototype have a user-centered design that meets the needs of all stakeholders in the job application process.",
			alter: "Cv-creator for Ledigajobb.se",
			description3: "",
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
							{showMore ? (
								<>
									<p className="description">
										{project.description1}
									</p>
									<button
										type="viewMore"
										value="View More"
										className="viewMore-btn"
										onClick={toggleShowMore}
									>
										<Typography component="span">
											View more
										</Typography>
										<i className="fas fa-arrow-right"></i>
									</button>
								</>
							) : (
								<>
									<p className="description">
										{project.description1}
									</p>
									<p className="description">
										{project.description2}
									</p>
									<p className="description">
										{project.description3}
									</p>
									<button
										type="viewMore"
										value="View More"
										className="viewMore-btn"
										onClick={toggleShowMore}
									>
										<Typography component="span">
											View less
										</Typography>
										<i className="fas fa-arrow-right"></i>
									</button>
								</>
							)}
						</div>
					</div>
				))}
			</Container>
		</section>
	);
};
