import "./FeedPost.css";
import Avatar from "../../images/Avatar.png";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend, FiSmile } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";

export const FeedPost = (props) => {
	return (
		<div className="post">
			<div className="post-top">
				<div className="post-user">
					<div className="post-user-img">
						<img src={Avatar} alt="" />
					</div>
					<h4>username</h4>
				</div>

				<IconContext.Provider value={{ size: "1.2em" }}>
					<BsThreeDots />
				</IconContext.Provider>
			</div>

			<div className="post-image">
				<img src={props.image} alt="" />
			</div>

			<div className="post-info">
				<div className="post-icons">
					<div className="post-icons-act">
						<IconContext.Provider value={{ size: "1.4em" }}>
							<FaRegHeart />
							<FaRegComment />
							<FiSend />
						</IconContext.Provider>
					</div>

					<IconContext.Provider value={{ size: "1.4em" }}>
						<FaRegBookmark />
					</IconContext.Provider>
				</div>

				<h4>100 likes</h4>
				<p>
					<span>username</span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi vestibulum ut magna sed egestas. In imperdiet felis
					non risus volutpat elementum.
				</p>
				<p className="post-text-grey">2 days ago</p>
			</div>

			<div className="post-comment">
				<div className="post-comment-act">
					<IconContext.Provider value={{ size: "1.4em" }}>
						<FiSmile />
					</IconContext.Provider>
					<form>
						<textarea type="text" placeholder="Add a comment..." />
						<button>Post</button>
					</form>
				</div>
			</div>
		</div>
	);
};
