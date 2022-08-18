import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Add = ({ axiosInstance }) => {
	const [transactions, setTransactions] = useState([]);
	const currentDate = `${new Date().getFullYear()}-${
		new Date().getMonth() < 9
			? "0" + (new Date().getMonth() + 1)
			: new Date().getMonth() + 1
	}-${
		new Date().getDate() < 10
			? "0" + new Date().getDate()
			: new Date().getDate()
	}`;
	useEffect(() => {
		getTransactions();
	});
	async function getTransactions() {
		await axiosInstance
			.get("/api/transactions")
			.then((res) => {
				setTransactions([...res.data]);
			})
			.catch((err) => console.log(err));
	}
	const navigate = useNavigate();
	const [item, setItem] = useState({
		title: "",
		amount: 0,
		date: currentDate,
	});
	const [isSaving, setIsSaving] = useState(true);
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name !== "amount")
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
		const { value } = e.target;
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
		navigate("/history");
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
						<label htmlFor="date">Enter Date: </label>
						<input
							className="add-form__input"
							placeholder="Enter date"
							name="date"
							required
							value={item.date}
							onChange={handleChange}
							type="date"
						/>
					</div>
					<div className="add-form__group add-form__group__radio">
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
