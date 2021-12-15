import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Add = ({ axiosInstance }) => {
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		getTransactions();
	});
	async function getTransactions() {
		await axiosInstance
			.get("/")
			.then((res) => {
				setTransactions([...res.data]);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}
	const [item, setItem] = useState({
		title: "",
		amount: 0,
	});
	const [isSaving, setIsSaving] = useState(true);
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "title")
			setItem({
				...item,
				[name]: value,
			});
		else
			setItem({
				...item,
				[name]: +value,
			});
	};
	const handleType = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		if (value === "S") setIsSaving(true);
		else setIsSaving(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		getTransactions();
		let newTransaction = {
			id: transactions.length,
			...item,
			amount: isSaving ? +item.amount : -item.amount,
		};
		axiosInstance
			.post("/add", newTransaction)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setItem({
			title: "",
			amount: 0,
		});
	};
	return (
		<section className="add">
			<div className="add-container">
				<div className="add-head">
					<h1 className="add-head__h1">Enter a new transaction</h1>
				</div>
				<form className="add-form" onSubmit={handleSubmit}>
					<div className="add-form__group">
						<label htmlFor="title">Enter Title: </label>
						<input
							className="add-form__input"
							placeholder="Enter title"
							name="title"
							required
							value={item.title}
							onChange={handleChange}
							type="text"
						/>
					</div>
					<div className="add-form__group">
						<label htmlFor="title">Enter Amount: </label>
						<input
							className="add-form__input"
							placeholder="Enter amount"
							name="amount"
							required
							value={item.amount}
							onChange={handleChange}
							type="number"
						/>
					</div>
					<div className="add-form__group">
						<label style={{ fontSize: "1rem" }}>
							<input
								className="add-form__radio"
								type="radio"
								name="expense-type"
								placeholder="Saving"
								value={"S"}
								onChange={handleType}
								checked={isSaving}
							/>
							Saving
						</label>
						<label style={{ fontSize: "1rem" }}>
							<input
								className="add-form__radio"
								type="radio"
								name="expense-type"
								placeholder="Expense"
								value={"E"}
								onChange={handleType}
								checked={!isSaving}
							/>
							Expense
						</label>
					</div>
					<Button text="Add Expense" color="blue" type="submit" />
				</form>
			</div>
		</section>
	);
};

export default Add;
