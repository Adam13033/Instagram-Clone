import "./Sidebar.css";
import Avatar from "../../images/Avatar.png";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="user">
				<div className="user-info">
					<div className="user-img">
						<img src={Avatar} alt="" />
					</div>
					<div>
						<h4>username</h4>
						<p>Display name</p>
					</div>
				</div>
				<p className="user-switch">Switch</p>
			</div>

			<div>
				<h4 className="suggestions">Suggestions For You</h4>

				{[...Array(5)].map((i) => (
					<div className="account" key={i}>
						<div className="account-info">
							<div className="account-img">
								<img src={Avatar} alt="" />
							</div>
							<div>
								<h4>username</h4>
								<p>Followed by username</p>
							</div>
						</div>
						<p className="user-switch">Follow</p>
					</div>
				))}
			</div>

			<ul className="footer">
                <a href="#"><li>About</li></a>
                <a href="#"><li>Help</li></a>
                <a href="#"><li>Press</li></a>
                <a href="#"><li>API</li></a>
                <a href="#"><li>Jobs</li></a>
                <a href="#"><li>Privacy</li></a>
                <a href="#"><li>Terms</li></a>
                <a href="#"><li>Locations</li></a>
                <a href="#"><li>Top Accounts</li></a>
                <a href="#"><li>Hashtags</li></a>
                <a href="#"><li>Language</li></a>
            </ul>
			<p className="copyright">&copy; 2022 INSTAGRAM FROM META</p>
		</div>
	);
};
