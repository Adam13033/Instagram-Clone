import { useEffect, useState } from "react";
import { FeedPost } from "../FeedPost/FeedPost";
import "./Feed.css"

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
			{posts.map((post) => (
				<FeedPost key={post.id} image={post.download_url} />
			))}
		</div>
	);
};
