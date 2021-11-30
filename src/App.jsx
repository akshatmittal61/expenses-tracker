import React, { useState } from 'react'
import Fab from './components/Fab';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Expenses from './pages/Expenses';
import History from './pages/History';
import Home from './pages/Home';
import Savings from './pages/Savings';

const App = () => {
    const [finance, setFinance] = useState([
        {
            title: "tution",
            amount: 3000
        },
        {
            title: "donation",
            amount: -90
        },
        {
            title: "travel",
            amount: 100
        },
        {
            title: "party",
            amount: -50
        },
        {
            title: "dress",
            amount: -750
        },
        {
            title: "hackathon",
            amount: 5000
        },
        {
            title: "fees",
            amount: -50000
        },
        {
            title: "lottery",
            amount: 40000
        },
        {
            title: "intern",
            amount: 7500
        }
    ])
    return (
        <>
            <SideBar />
            <main className="main">
                <div className="main-container">
                    <Header />
                    <Home finance={finance} />
                    {/* <History finance={finance} /> */}
                    {/* <Savings finance={finance} /> */}
                    {/* <Expenses finance={finance} /> */}
                </div>
            </main>
            <Fab icon="add" />
        </>
    )
}

export default App
