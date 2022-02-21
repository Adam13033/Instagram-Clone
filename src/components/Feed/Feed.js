import { useEffect, useState } from "react";
import { FeedPost } from "../FeedPost/FeedPost";
import { Story } from "../Story/Story";
import "./Feed.css";

export const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getCats();
	}, []);

	const getCats = async () => {
		const response = await fetch("https://picsum.photos/v2/list");
		const data = await response.json();
		console.log(data);
		setPosts(data);
	};

	return (
		<div className="feed">
			<Story />
			{posts.map((post) => (
				<FeedPost key={post.id} image={post.download_url} />
			))}
		</div>
	);
};
