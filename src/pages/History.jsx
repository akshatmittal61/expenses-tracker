import React, { useState } from 'react'

const History = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    return (
        <section className="history">
            <div className="history-container">
                <div className="history-head">
                    <h1 className="history-head__text">History</h1>
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
