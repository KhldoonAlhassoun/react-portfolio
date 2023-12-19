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
import genAiInterviewsMockUp from "../../assets/recentprojects/genAiInterviewsMockUp.png";
import konsttorget from "../../assets/recentprojects/Konsttorget.png";

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
			id: 5,
			title: "GenAI interviews",
			subtitle: "Umeå University, Daresay",
			date: "2023-09-01-2024-01-09",
			description:
				"AI assistant for qualitative interviews as a research method. The project was developed in collaboration with Daresay. ",
			alter: "GenAI interviews",
			image: `${genAiInterviewsMockUp}`,
		},
		{
			id: 1,
			title: "BeatStar",
			subtitle: "Umeå University",
			date: "2023-09-01-2024-01-09",
			description:
				"One of the projects that I am proud to have worked on...",
			alter: "BeatStar",
			image: `${beatStar}`,
		},
		{
			id: 2,
			title: "MeetUp",
			subtitle: "Umeå University",
			date: "2023-09-01-2024-01-09",
			description:
				"MeetUp, a tablet application thoughtfully designed to connect elderly individuals through tailored events and chat rooms, promoting social interaction and combatting isolation. The design journey involved extensive user research, resulting in an intuitive interface that prioritizes user needs.",
			alter: "MeetUp",
			image: `${meetUp}`,
		},
		{
			id: 3,
			title: "Connect Four",
			subtitle: "Umeå University",
			date: "2022-09-01-2023-01-09",
			description: `Connect Four, a multiplayer game using Microsoft ASP.NET and SignalR for real-time challenges. Dynamic interface, strategic gameplay for all skill levels. `,
			alter: "Connect Four",
			image: `${connectFour}`,
		},
		{
			id: 4,
			title: "Cv-creator for Ledigajobb.se",
			subtitle: "Umeå University",
			date: "2023-09-01-2024-01-09",
			description: `Cv-creator for Ledigajobb.se, a demonstration of advanced design thinking and prototyping skills. Using Figma, a fully functional prototype was crafted to optimize the job application process for users, employers, and recruiters. This project showcases a user-centered design approach, addressing diverse stakeholder needs and streamlining CV creation and job submissions on Ledigajobb.se.`,
			alter: "Cv-creator for Ledigajobb.se",
			image: `${Ledigajobb}`,
		},
		{
			id: 5,
			title: "Konsttorget ",
			subtitle: "Umeå University",
			date: "2021-09-01-2021-09-20",
			description: `Konsttorget is a groundbreaking online platform designed to transform the art market landscape. Born out of a deep understanding of the challenges faced by artists in selling their work and the evolving needs of art enthusiasts, Konsttorget serves as a dynamic marketplace connecting talented artists with potential buyers. The project aims to bridge the gap in the art industry, providing a seamless platform for the sale and purchase of artworks.`,
			alter: "Cv-creator for Ledigajobb.se",
			image: `${konsttorget}`,
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
							<h4>
								<TextDecrypt text={project.subtitle} />
								<TextDecrypt text={project.date} />
							</h4>

							<p className="description">{project.description}</p>
							<Link
								to={`/project/${project.id}`}
								className="viewMore-btn"
							>
								<Typography component="span">
									View project
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
