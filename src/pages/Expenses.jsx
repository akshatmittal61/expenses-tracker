import React, { useState, useEffect } from 'react'

const Expenses = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getBalance();
    }, [])
    function getBalance() {
        let f = 0;
        details.map(item => {
            if (item.amount < 0) f += item.amount;
            setBalance(f);
        })
    }
    return (
        <section className="expenses">
            <div className="expenses-container">
                <div className="expenses-head">
                    <h1 className="expenses-head__h1">Expenses</h1>
                    <h3 className="expenses-head__h3" style={{ color: balance > 0 ? "var(--green)" : "var(--red)" }}>{`Total Expenses: ${balance}`}</h3>
                </div>
                <div className="expenses-details">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        {
                            details.map((item, index) => (
                                item.amount < 0 && (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td style={{ color: item.amount > 0 ? "var(--green)" : "var(--red)" }}>{item.amount}</td>
                                    </tr>
                                )
                            ))
                        }
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Expenses
