import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const History = ({ axiosInstance }) => {
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		getTransactions();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	async function getTransactions() {
		await axiosInstance
			.get("/api/transactions")
			.then((res) => {
				let f = 0;
				setTransactions([...res.data]);
				res.data.forEach((item) => {
					f += item.amount;
					setBalance(f);
				});
			})
			.catch((err) => console.log(err));
	}
	const deleteTransaction = (id) => {
		axiosInstance
			.delete(`/delete/${id}`)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		getTransactions();
	};
	const currentDate = `${new Date().getFullYear()}-${
		new Date().getMonth() < 9
			? "0" + (new Date().getMonth() + 1)
			: new Date().getMonth() + 1
	}-${
		new Date().getDate() < 10
			? "0" + new Date().getDate()
			: new Date().getDate()
	}`;
	const [filterDate, setFilterDate] = useState(currentDate);
	const handleChange = (e) => {
		const { value } = e.target;
		setFilterDate(value);
	};
	const filterByDate = (e) => {
		e.preventDefault();
		let toShow = [];
		axiosInstance
			.get("/api/transactions")
			.then((res) => {
				let f = 0;
				res.data.forEach((a) => {
					if (a.date === filterDate) {
						toShow = [...toShow, a];
						f += a.amount;
					}
				});
				setBalance(f);
				setTransactions(toShow);
			})
			.catch((err) => console.log(err));
	};
	return (
		<section className="history">
			<div className="history-container">
				<div className="history-head">
					<h1 className="history-head__h1">
						History
						<span
							className="material-icons"
							onClick={() => {
								getTransactions();
							}}
							title="Sync"
						>
							sync
						</span>
					</h1>
					<h3
						className="history-head__h3"
						style={{
							color: balance >= 0 ? "var(--green)" : "var(--red)",
						}}
					>{`Total Balance: ${balance}`}</h3>
					<div className="history-head__filter">
						<span>Filter by date: </span>
						<form onSubmit={filterByDate}>
							<input
								style={{
									padding: "0.25rem",
									fontSize: "0.75rem",
								}}
								type="date"
								name="filterDate"
								value={filterDate}
								onChange={handleChange}
							/>
							<Button
								style={{
									fontSize: "0.75rem",
									padding: "0.25rem 0.8rem",
								}}
								size="small"
								text="Filter"
								color="blue"
								type="submit"
							/>
						</form>
					</div>
				</div>
				<div className="history-details">
					<table>
						<tr>
							<th>Title</th>
							<th>Amount</th>
							<th>Date</th>
						</tr>
						{transactions.map((item, index) => (
							<tr key={index}>
								<td>{item.title}</td>
								<td
									style={{
										color:
											item.amount >= 0
												? "var(--green)"
												: "var(--red)",
									}}
								>
									{item.amount}
								</td>
								<td style={{ fontSize: "1rem" }}>
									{item.date}
									<span
										className="material-icons"
										onClick={() => deleteTransaction(index)}
									>
										delete
									</span>
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</section>
	);
};

export default History;
