import React from "react";
import { Link, useParams } from "react-router-dom";
import MD from "react-markdown";

import { useSinglePost } from "./useSinglePost";
import { readableDate } from "./helpers";

export default function SinglePost() {
	const { id } = useParams();
	const [post, isLoading] = useSinglePost(id);

	const renderPost = () => {
		if (isLoading) return null;

		function featuredMedia(post) {
			const featuredFile = post.featuredMedia.fields.file;
			if (featuredFile.contentType === "image/jpeg") {
				return (
					<img
						className='featuredMedia'
						src={featuredFile.url}
						alt={post.featuredMedia.fields.title}
					/>
				);
			} else {
				return (
					<video autoPlay muted loop className='featuredMedia'>
						<source src={featuredFile.url} type='video/mp4' />
						<p>Your browser doesnt support HTML5 video.</p>
					</video>
				);
			}
		}

		return (
			<>
				<div className='singlePost__intro'>
					<h2 className='singlePost__intro__title'>{post.title}</h2>
					<div className='singlePost__intro__date'>
						<small>{readableDate(post.date)}</small>
					</div>
					{featuredMedia(post)}
					<p className='singlePost__intro__desc'>{post.description}</p>
				</div>

				<div className='postBody'>
					<MD source={post.body} />
				</div>
			</>
		);
	};

	return (
		<div className={isLoading ? "singlePost hide" : "singlePost"}>
			<Link className='backButton' to='/journal'>
				{"< Back"}
			</Link>

			{renderPost()}
		</div>
	);
}
