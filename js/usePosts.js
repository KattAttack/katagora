import { useEffect, useState } from "react";

import { getBlogPosts, getFilteredPosts } from "./contentful";

let promise;

export function usePosts(tag) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (tag) {
			promise = getFilteredPosts(tag);
		} else promise = getBlogPosts();
		promise.then((blogPosts) => {
			setPosts(blogPosts);
			setLoading(false);
		});
	}, [tag]);

	return [posts, isLoading];
}
