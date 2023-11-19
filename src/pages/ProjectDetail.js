// ProjectDetail.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LogoLink } from "../components/logo/LogoLink";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { SocialIcons } from "../components/content/SocialIcons";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Ledigajobb from "../assets/recentprojects/leddigajobb.png";
import connectFour from "../assets/recentprojects/connectFour.png";
import beatStar from "../assets/recentprojects/beatStar.png";
import meetUp from "../assets/recentprojects/meetUp.png";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		minHeight: "300vh",
	},
	slider: {
		display: "flex",
		width: "80%",
		alignItems: "center",
	},
	sliderImage: {
		maxWidth: "100%",
		objectFit: "contain",
	},
	content: { width: "80%" },
	backButton: {
		position: "fixed",
		width: "50px",
		height: "50px",
		top: theme.spacing(15),
		left: theme.spacing(6),
		boxShadow:
			"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
		borderRadius: "50%",
	},
}));

const ProjectDetail = () => {
	const classes = useStyles();
	const { projectId } = useParams();

	const project = fetchProjectById(projectId);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={classes.root}>
			<DisplacementSphere />
			<LogoLink />
			<Link to="/react-portfolio" className={classes.backButton}>
				<IconButton>
					<ArrowBack />
				</IconButton>
			</Link>
			<Hidden smDown>
				<SocialIcons />
			</Hidden>
			<div className={classes.slider}>
				<Slider {...sliderSettings}>
					<div>
						<img
							src={project.image}
							alt="Project Slide 1"
							className={classes.sliderImage}
						/>
					</div>
				</Slider>
			</div>
			<Container className={classes.content}>
				<Typography variant="h2" gutterBottom>
					{project.title}
				</Typography>
				<Typography variant="body1">
					{project.description.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</Typography>
			</Container>
		</div>
	);
};

// Replace this function with your actual data fetching logic
const fetchProjectById = (projectId) => {
	// Example: Fetch project data from the projects array
	const projects = [
		{
			id: 1,
			title: "BeatStar",
			description: [
				"One of the projects that I am proud to have worked on...",
			],
			alter: "BeatStar",
			image: `${beatStar}`,
		},
		{
			id: 2,
			title: "MeetUp",
			description: [
				"MeetUp stands as a tablet application crafted to address the social needs of elderly individuals. The primary aim is to provide a platform for connection through events and chat rooms, designed with simplicity and usability in mind. The interface prioritizes larger text and buttons to cater to the visual preferences of the older demographic.",
				"In conceptualizing MeetUp, I embarked on a journey of user research and usability testing, collaborating closely with elderly individuals to ensure the intuitive nature of the interface. This process was instrumental in shaping a design that resonates with the target audience.",
				"The application offers a spectrum of events, including social gatherings, educational seminars, and physical activities, curated to align with the interests of the elderly population. Users have the flexibility to join existing events or take the initiative to create new ones, fostering a sense of agency in shaping their social experiences.",
				"Beyond its functionalities, MeetUp emerges as a tool to combat social isolation among the elderly, aiming to stimulate social interaction. The design choices and features encapsulate the intention to provide a genuine and engaging avenue for seniors to connect and stay involved in their communities.",
			],
			alter: "MeetUp",
			image: `${meetUp}`,
		},
		{
			id: 3,
			title: "Connect Four",
			description: [
				"Connect Four, a multiplayer gaming project developed during the Applications for the Internet course, showcases my proficiency in utilizing technology to create engaging experiences. Leveraging the Microsoft ASP.NET framework, the game comprises a server and client application, providing a solid foundation for seamless multiplayer functionality.",

				"The dynamic user interface enhances player immersion, offering a captivating gaming environment. The implementation incorporates the SignalR library, creating a game hub that facilitates real-time connections, allowing players to engage in thrilling competitions with friends or family.",
				"Connect Four is not just a game; it's a strategic challenge demanding quick reflexes. Players aim to connect four pieces of the same color either horizontally, vertically, or diagonally before their opponents. The blend of strategic depth and accessibility makes it a compelling choice for players of all skill levels.",
				"In this project, I delved into the intricacies of ASP.NET, honed my skills in implementing real-time connectivity through SignalR, and crafted an immersive user interface, demonstrating my commitment to merging technology and enjoyable user experiences.",
			],
			alter: "Connect Four",
			image: `${connectFour}`,
		},
		{
			id: 4,
			title: "Cv-creator for Ledigajobb.se",
			description: [
				"The Cv-creator for Ledigajobb.se project serves as a testament to advanced design thinking and prototyping capabilities. The overarching objective was to revolutionize the CV creation and job application experience on Ledigajobb.se by generating fresh and innovative ideas. Leveraging the design tool Figma, we meticulously crafted a fully functional prototype that seamlessly incorporates the diverse needs and requirements of job seekers, employers, and recruiters.",

				"Our focus was on enhancing the efficiency of the job application process, and the prototype is designed to achieve this by presenting users with an intuitive and user-friendly interface for crafting their CVs and submitting job applications.",

				"Throughout the project, a comprehensive design thinking process was employed to identify and address user needs and pain points. The solutions developed prioritize elements of intuitiveness, engagement, and functionality. The final prototype stands as a culmination of this meticulous process, boasting a user-centered design that precisely aligns with the needs of all stakeholders involved in the job application process.",

				"This project not only showcases adept design thinking but also highlights proficiency in utilizing Figma as a design tool, ensuring the creation of a sophisticated and functional prototype that addresses the complex requirements of the job-seeking ecosystem on Ledigajobb.se.",
			],
			image: `${Ledigajobb}`,
		},
	];

	return projects.find((project) => project.id.toString() === projectId);
};

export default ProjectDetail;
