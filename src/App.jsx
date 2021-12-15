import React from "react";
import axios from "axios";
import Fab from "./components/Fab";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import History from "./pages/History";
import Savings from "./pages/Savings";
import Expenses from "./pages/Expenses";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
require("dotenv").config();

const App = () => {
	const axiosInstance = axios.create({
		baseURL: `http://localhost:5000/`,
	});
	return (
		<Router>
			<SideBar />
			<main className="main">
				<div className="main-container">
					<Header />
					<Routes>
						<Route
							path="/"
							element={<Home axiosInstance={axiosInstance} />}
						/>
						<Route
							path="/add"
							element={<Add axiosInstance={axiosInstance} />}
						/>
						<Route
							path="/history"
							element={<History axiosInstance={axiosInstance} />}
						/>
						<Route
							path="/savings"
							element={<Savings axiosInstance={axiosInstance} />}
						/>
						<Route
							path="/expenses"
							element={<Expenses axiosInstance={axiosInstance} />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</main>
			<Link to="/add">
				<Fab icon="add" />
			</Link>
		</Router>
	);
};

export default App;
