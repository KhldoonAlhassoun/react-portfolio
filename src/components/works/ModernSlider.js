// ModernSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	sliderContainer: {
		width: "70%", // Adjust as needed
		margin: "0 auto",
	},
	sliderImage: {
		width: "100%",
		maxHeight: "100%", // Adjust as needed
		objectFit: "contain",
		borderRadius: "8px", // Optional: Add rounded corners
	},
}));

const ModernSlider = ({ images }) => {
	const classes = useStyles();

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={classes.sliderContainer}>
			<Slider {...sliderSettings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className={classes.sliderImage}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ModernSlider;
