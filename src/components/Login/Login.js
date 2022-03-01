import "./Login.css";
import Logo from "../../images/LogoInstagram.png";

export const Login = ({ props }) => {
	return (
		<div className="form-page">
			<div className="form-container">
				<div className="logo">
					<img src={Logo} alt="" />
				</div>
				<form onSubmit={props.handleLogin} className="form">
					<input
						onChange={(e) => props.setUsername(e.target.value)}
						placeholder="Username"
					/>
					<input
						onChange={(e) => props.setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button type="submit">Log In</button>
				</form>
			</div>

			{/* <div className="signup">
				<p>Don't have an account?</p>
				<Link to="signup">
					<h4>Sign up</h4>
				</Link>
			</div> */}
		</div>
	);
};
