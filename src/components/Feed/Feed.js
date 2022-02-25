import { useEffect, useState } from "react";
import { FeedPost } from "../FeedPost/FeedPost";
import { Sidebar } from "../Sidebar/Sidebar";
import { Story } from "../Story/Story";
import "./Feed.css";

export const Feed = ({ user }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPics();
	}, []);

	const getPics = async () => {
		const response = await fetch("https://picsum.photos/v2/list");
		const data = await response.json();
		console.log(data);
		setPosts(data);
	};

	return (
		<div className="feed">
			<div className="feed-posts">
				<Story />
				{posts.map((post) => (
					<FeedPost key={post.id} image={post.download_url} />
				))}
			</div>

			<div className="feed-sidebar">
				<Sidebar user={user} />
			</div>
		</div>
	);
};
