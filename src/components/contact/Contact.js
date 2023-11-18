import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
	main: {
		maxWidth: "100vw",
		marginTop: "3em",
		marginBottom: "5em",
	},
	form: {
		width: "100%",
	},
	formfield: {
		width: "100%",
		marginBottom: "2rem",
	},
}));

export const Contact = () => {
	const classes = useStyles();
	const greetings = "Let's get in touch";

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_dwuu9uo",
				"template_za26d7r",
				form.current,
				"_Pmx30yLwGS52CJPN"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Your message has been sent",
			showConfirmButton: true,
		});
		e.target.reset();
	};

	return (
		<section id="contact">
			<Container component="main" className={classes.main} maxWidth="md">
				<div className="contact">
					<div className="_form_wrapper">
						<form
							ref={form}
							onSubmit={sendEmail}
							className={classes.form}
						>
							<TextField
								id="name"
								label="Name"
								type="text"
								size="small"
								variant="filled"
								name="name"
								className={classes.formfield}
							/>
							<TextField
								id="email_id"
								label="Email"
								type="email"
								size="small"
								variant="filled"
								name="email"
								className={classes.formfield}
							/>
							<TextField
								id="message"
								label="Message"
								type="textarea"
								size="small"
								multiline
								minRows={5}
								variant="filled"
								name="message"
								className={classes.formfield}
							/>
							<button
								type="submit"
								value="Send"
								className="submit-btn"
							>
								<i className="fas fa-terminal"></i>
								<Typography component="span">
									{" "}
									Send Message
								</Typography>
							</button>
						</form>
					</div>
					<h1 className="contact_msg">
						<TextDecrypt className="greetings" text={greetings} />
					</h1>
				</div>
			</Container>
		</section>
	);
};
