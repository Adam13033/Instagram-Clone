import { Link } from "react-router-dom";
import "./Login.css";

export const Login = ({ props }) => {
	return (
		<div>
			<h2>Log In</h2>
			<form onSubmit={props.handleLogin}>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="password"
				/>
				<button type="submit">Log in</button>
			</form>
			<div>
				<p>Don't have an account?</p>
				<Link to="signup">
					<p>Sign up</p>
				</Link>
			</div>
		</div>
	);
};
