/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.jpeg";

const useStyles = makeStyles((theme) => ({
	main: {
		maxWidth: "100vw",
		marginTop: "3em",
		marginBottom: "auto",
	},
}));

export const About = () => {
	const classes = useStyles();
	const greetings = "Hello there!";
	const aboutme1 = `As a current student in the MSc program for Interaction Technology and Design at Umeå University, I have spent the past four years honing my knowledge of software engineering and interaction technology through various courses and challenging projects. My passion lies in designing and developing innovative, user-friendly technology that can make a meaningful impact in our community and enhance our daily lives.`;
	const aboutme2 =
		"My dedication to this field extends beyond the classroom, as I constantly seek out opportunities to learn and grow. With a keen eye for detail and a strong work ethic, I am committed to delivering exceptional results in every project I undertake.";
	const aboutme3 =
		"Whether you are seeking a skilled software engineer or a talented interaction designer, I am confident that I possess the skills and knowledge necessary to meet your needs. Please do not hesitate to contact me through your preferred channel for further information. I look forward to hearing from you.";
	return (
		<section id="about">
			<Container component="main" className={classes.main} maxWidth="md">
				<div className="about">
					<div
						className="_img"
						style={{
							background: "url(" + profile + ")",
							backgroundSize: "contain",
							backgroundPosition: "contain",
							backgroundRepeat: "no-repeat",
						}}
					></div>
					<div className="_content_wrapper">
						<Typography component="h2" variant="h5">
							<TextDecrypt text={`${greetings}`} />
						</Typography>
						<p className="aboutme">{aboutme1}</p>
						<p className="aboutme">{aboutme2}</p>
						<p className="aboutme3">{aboutme3}</p>
						<a href="#contact" className="contact-btn">
							<i className="fas fa-terminal"></i>
							<Typography component="span">
								{" "}
								Send me a message
							</Typography>
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
};
