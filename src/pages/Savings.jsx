import React, { useState, useEffect } from "react";

const Savings = ({ axiosInstance }) => {
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		getTransactions();
	}, []);
	async function getTransactions() {
		await axiosInstance
			.get("/api/transactions")
			.then((res) => {
				let f = 0;
				setTransactions([...res.data]);
				res.data.forEach((item) => {
					if (item.amount >= 0) f += item.amount;
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
	return (
		<section className="savings">
			<div className="savings-container">
				<div className="savings-head">
					<h1 className="savings-head__h1">Savings</h1>
					<h3
						className="savings-head__h3"
						style={{
							color: balance >= 0 ? "var(--green)" : "var(--red)",
						}}
					>{`Total Savings: ${balance}`}</h3>
				</div>
				<div className="savings-details">
					<table>
						<tr>
							<th>Title</th>
							<th>Amount</th>
						</tr>
						{transactions.map(
							(item, index) =>
								item.amount > 0 && (
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
											<span
												className="material-icons"
												onClick={() =>
													deleteTransaction(index)
												}
											>
												delete
											</span>
										</td>
									</tr>
								)
						)}
					</table>
				</div>
			</div>
		</section>
	);
};

export default Savings;
