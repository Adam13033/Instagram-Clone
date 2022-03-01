import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { fetchLogin, fetchSignUp } from "./utils";
import { Navbar } from "./components/Navbar/Navbar";
import { Feed } from "./components/Feed/Feed";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";

const App = () => {
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignUp = async (e) => {
		e.preventDefault();
		fetchSignUp(setUser, email, username, password);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		fetchLogin(setUser, username, password);
	};

	return (
		<div>
			{user ? (
				<Router>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<div className="app-home">
									<Feed user={user} />
								</div>
							}
						/>
					</Routes>
				</Router>
			) : (
				<div className="login-signup">
					<Login
						props={{
							handleLogin,
							setUsername,
							setPassword,
						}}
					/>

					<SignUp
						props={{
							handleSignUp,
							setEmail,
							setUsername,
							setPassword,
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
