import React, { useState } from 'react'
import Fab from './components/Fab';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import History from './pages/History';
import Savings from './pages/Savings';
import Expenses from './pages/Expenses';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Add from './pages/Add';
import Contact from './pages/Contact';

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
        <Router>
            <SideBar />
            <main className="main">
                <div className="main-container">
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home finance={finance} />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/history' element={<History finance={finance} />} />
                        <Route path='/savings' element={<Savings finance={finance} />} />
                        <Route path='/expenses' element={<Expenses finance={finance} />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>
            </main>
            <Link to='/add'>
                <Fab icon="add" />
            </Link>
        </Router>
    )
}

export default App
