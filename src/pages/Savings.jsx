import React, { useState } from 'react'

const Savings = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    return (
        <section className="savings">
            <div className="savings-container">
                <div className="savings-head">
                    <h1 className="savings-head__text">Savings</h1>
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
