import { useState } from "react";
import "./App.css";
import { fetchSignUp } from "./utils";
import { Navbar } from "./components/Navbar/Navbar";
import { Feed } from "./components/Feed/Feed";
import { SignUp } from "./components/SignUp/SignUp";

const App = () => {
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignUp = async (e) => {
		e.preventDefault();
		fetchSignUp(setUser, email, username, password);
	};

	return (
		<div>
			{user ? (
				<div>
					<Navbar />
					<div className="app-home">
						<Feed user={user} />
					</div>
				</div>
			) : (
				<SignUp
					props={{ handleSignUp, setEmail, setUsername, setPassword }}
				/>
			)}
		</div>
	);
};

export default App;
