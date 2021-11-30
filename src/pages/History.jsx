import React, { useState, useEffect } from 'react'

const History = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getBalance();
    }, [])
    function getBalance() {
        let f = 0;
        details.map(item => {
            f += item.amount;
            setBalance(f);
        })
    }
    return (
        <section className="history">
            <div className="history-container">
                <div className="history-head">
                    <h1 className="history-head__h1">History</h1>
                    <h3 className="history-head__h3" style={{ color: balance > 0 ? "var(--green)" : "var(--red)" }}>{`Total Balance: ${balance}`}</h3>
                </div>
                <div className="history-details">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        {
                            details.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td style={{ color: item.amount > 0 ? "var(--green)" : "var(--red)" }}>{item.amount}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </section>
    )
}

export default History
