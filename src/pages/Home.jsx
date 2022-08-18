import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import receipt from "../images/receipt.svg";

const Home = ({ axiosInstance }) => {
	const [balance, setBalance] = useState(0);
	useEffect(() => {
		getTransactions();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	async function getTransactions() {
		await axiosInstance
			.get("/api/transactions")
			.then((res) => {
				let f = 0;
				res.data.forEach((item) => {
					f += item.amount;
					setBalance(f);
				});
			})
			.catch((err) => console.log(err));
	}
	return (
		<section className="home">
			<div className="home-container">
				<div className="home-image">
					<img
						src={receipt}
						alt="receipt"
						className="home-image__img"
					/>
				</div>
				<div className="home-content">
					<span className="home-content__head">Your Balance</span>
					<span
						className="home-content__balance"
						style={{
							color: balance >= 0 ? "var(--green)" : "var(--red)",
						}}
					>
						{balance >= 0 ? `₹${balance}` : `- ₹${-balance}`}
					</span>
					<Link to="/contact">
						<Button
							className="contact-us-btn"
							variant="outline"
							color="blue"
							text="Contact Us"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
