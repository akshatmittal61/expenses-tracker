import React, { useState } from 'react'

const Expenses = ({ finance }) => {
    const [details, setDetails] = useState(finance);
    return (
        <section className="expenses">
            <div className="expenses-container">
                <div className="expenses-head">
                    <h1 className="expenses-head__text">Expenses</h1>
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
