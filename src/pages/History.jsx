import React, { useState, useEffect } from 'react'

const History = ({ axiosInstance }) => {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        getTransactions();
    }, [])
    async function getTransactions() {
        await axiosInstance.get('/')
            .then((res) => {
                let f = 0;
                setTransactions([...res.data]);
                console.log(res.data);
                res.data.map(item => {
                    f += item.amount;
                    setBalance(f);
                })
            })
            .catch(err => console.log(err))
    }
    const deleteTransaction = (id) => {
        axiosInstance.delete(`/delete/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        getTransactions();
    }
    return (
        <section className="history">
            <div className="history-container">
                <div className="history-head">
                    <h1 className="history-head__h1">History</h1>
                    <h3 className="history-head__h3" style={{ color: balance >= 0 ? "var(--green)" : "var(--red)" }}>{`Total Balance: ${balance}`}</h3>
                </div>
                <div className="history-details">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        {
                            transactions.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td style={{ color: item.amount >= 0 ? "var(--green)" : "var(--red)" }}>
                                        {item.amount}
                                        <span className="material-icons" onClick={() => deleteTransaction(index)}>delete</span>
                                    </td>
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
