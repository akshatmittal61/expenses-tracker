import React, { useEffect } from "react";
import "./contact.css";
import people from "./people.json";
import Card from "./Card";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="contact">
			<section className="contact-section">
				{people.map((person, index) => (
					<Card
						key={index}
						name={person.name}
						about={person.about}
						image={person.image}
						socials={person.socials}
					/>
				))}
			</section>
		</main>
	);
};

export default Contact;
