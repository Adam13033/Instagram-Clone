import "./SignUp.css";
import Logo from "../../images/LogoInstagram.png";

export const SignUp = ({ props }) => {
	return (
		<div className="signup-page">
			<div className="signup-container">
				<div className="signup-logo">
					<img src={Logo} alt="" />
				</div>
				<h3>Sign up to see photos and videos from your friends.</h3>
				<form onSubmit={props.handleSignUp} className="signup-form">
					<input
						onChange={(e) => props.setEmail(e.target.value)}
						placeholder="Email"
					/>
					<input
						onChange={(e) => props.setUsername(e.target.value)}
						placeholder="Username"
					/>
					<input
						onChange={(e) => props.setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button type="submit">Sign Up</button>
				</form>
				<small>
					By signing up, you agree to our Terms. Learn how we collect,
					use and share your data in our Data Policy and how we use
					cookies and similar technology in our Cookies Policy.
				</small>
			</div>

			{/* <div className="login">
				<p>Have an account?</p>
				<Link to="/">
					<h4>Log in</h4>
				</Link>
			</div> */}
		</div>
	);
};
