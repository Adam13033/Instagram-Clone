import "./StoryPost.css";
import Avatar from "../../images/Avatar.png";

export const StoryPost = () => {
	return (
		<div className="storypost">
			<div className="storypost-img">
				<img src={Avatar} alt="" />
			</div>
			<p>username</p>
		</div>
	);
};
