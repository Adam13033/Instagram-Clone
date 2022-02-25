import "./Sidebar.css";
import Avatar from "../../images/Avatar.png";

export const Sidebar = ({ user }) => {
	return (
		<div className="sidebar">
			<div className="user">
				<div className="user-info">
					<div className="user-img">
						<img src={Avatar} alt="" />
					</div>
					<div>
						<h4>{user ? user.user.username : "username"}</h4>
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
                <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer"><li>About</li></a>
                <a href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer"><li>Help</li></a>
                <a href="https://about.instagram.com/en_US/blog" target="_blank" rel="noopener noreferrer"><li>Press</li></a>
                <a href="https://developers.facebook.com/docs/instagram" target="_blank" rel="noopener noreferrer"><li>API</li></a>
                <a href="https://about.instagram.com/about-us/careers" target="_blank" rel="noopener noreferrer"><li>Jobs</li></a>
                <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0" target="_blank" rel="noopener noreferrer"><li>Privacy</li></a>
                <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer"><li>Terms</li></a>
                <a href="https://www.instagram.com/explore/locations/" target="_blank" rel="noopener noreferrer"><li>Locations</li></a>
                <a href="https://www.instagram.com/directory/profiles/" target="_blank" rel="noopener noreferrer"><li>Top Accounts</li></a>
                <a href="https://www.instagram.com/directory/hashtags/" target="_blank" rel="noopener noreferrer"><li>Hashtags</li></a>
                <li>Language</li>
            </ul>
			<p className="copyright">&copy; 2022 INSTAGRAM FROM META</p>
		</div>
	);
};
