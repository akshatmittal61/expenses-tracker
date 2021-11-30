import React, { useState, useEffect } from 'react'

const Savings = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getBalance();
    }, [])
    function getBalance() {
        let f = 0;
        details.map(item => {
            if (item.amount > 0) f += item.amount;
            setBalance(f);
        })
    }
    return (
        <section className="savings">
            <div className="savings-container">
                <div className="savings-head">
                    <h1 className="savings-head__h1">Savings</h1>
                    <h3 className="savings-head__h3" style={{ color: balance > 0 ? "var(--green)" : "var(--red)" }}>{`Total Savings: ${balance}`}</h3>
                </div>
                <div className="savings-details">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        {
                            details.map((item, index) => (
                                item.amount > 0 && (
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

export default Savings
