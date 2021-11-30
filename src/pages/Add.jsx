import React, { useState } from 'react'
import Button from '../components/Button';

const Add = () => {
    const [item, setItem] = useState({
        title: '',
        amount: 0
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        setItem({
            title: '',
            amount: 0
        })
    }
    return (
        <section className="add">
            <div className="add-container">
                <div className="add-head">
                    <h1 className="add-head__h1">Enter a new transaction</h1>
                </div>
                <form className="add-form" onSubmit={handleSubmit}>
                    <div className="add-form__group">
                        <label htmlFor="title">Enter Title: </label>
                        <input
                            className="add-form__input"
                            placeholder="Enter title"
                            name="title"
                            required
                            value={item.title}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>
                    <div className="add-form__group">
                        <label htmlFor="title">Enter Amount: </label>
                        <input
                            className="add-form__input"
                            placeholder="Enter amount"
                            name="amount"
                            required
                            value={item.amount}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <Button
                        text="Add Expense"
                        color="blue"
                        type="submit"
                    />
                </form>
            </div>
        </section>
    )
}

export default Add
