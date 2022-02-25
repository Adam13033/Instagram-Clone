import { Link } from "react-router-dom";
import "./SignUp.css";

export const SignUp = ({ props }) => {
	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={props.handleSignUp}>
				<input
					onChange={(e) => props.setEmail(e.target.value)}
					placeholder="email"
				/>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="password"
				/>
				<button type="submit">Sign Up</button>
			</form>
			<div>
				<p>Have an account?</p>
				<Link to="/">
					<p>Log in</p>
				</Link>
			</div>
		</div>
	);
};
