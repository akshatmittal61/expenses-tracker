import React, { useState, useEffect } from 'react';
import receipt from '../images/receipt.svg'

const Home = ({ axiosInstance }) => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getTransactions();
    }, [])
    async function getTransactions() {
        await axiosInstance.get('/')
            .then((res) => {
                let f = 0;
                console.log(res.data);
                res.data.map(item => {
                    f += item.amount;
                    setBalance(f);
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <section className="home">
            <div className="home-container">
                <div className="home-image">
                    <img src={receipt} alt="receipt" className="home-image__img" />
                </div>
                <div className="home-content">
                    <span className="home-content__head">Your Balance</span>
                    <span className="home-content__balance" style={{ color: balance >= 0 ? "var(--green)" : "var(--red)" }}>{balance >= 0 ? `₹${balance}` : `- ₹${-balance}`}</span>
                </div>
            </div>
        </section>
    )
}

export default Home
