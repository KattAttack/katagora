const client = require("contentful").createClient({
	space: "b11ppbhcz1pg",
	accessToken: "8oeOkFOqmH4ED0AMyclxvmcIQSdRWqKg4FybKBEnggE",
});

const getBlogPosts = () => client.getEntries().then((response) => response.items);

const getSinglePost = (slug) =>
	client
		.getEntries({
			"fields.slug": slug,
			content_type: "blogPost",
		})
		.then((response) => response.items);

const getFilteredPosts = (tag) =>
	client
		.getEntries({
			"fields.tag": tag,
			content_type: "blogPost",
		})
		.then((response) => response.items);

export { getBlogPosts, getSinglePost, getFilteredPosts };
