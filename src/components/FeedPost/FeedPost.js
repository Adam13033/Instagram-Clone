import "./FeedPost.css";

export const FeedPost = (props) => {
	return (
		<div>
			<div className="post-image">
				<img src={props.image} />
			</div>
		</div>
	);
};
