import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/styles.scss";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";

import { usePosts } from "./usePosts";
import { readableDate } from "./helpers";

function setWindowSize() {
	console.log("Resize function called");
	if (window.innerWidth < 1021) {
		document.getElementById("blogTitle").className = "blogTitleSmall";
		document.getElementById("blog").className = "blogSmall";
	} else {
		document.getElementById("blogTitle").className = "blogTitle";
		document.getElementById("blog").className = "blog";
	}
}

export default function Journal() {
	const [filterTag, setFilterTag] = useState(null);
	const [posts, isLoading] = usePosts(filterTag);

	useEffect(() => {
		setWindowSize();
		window.addEventListener("resize", setWindowSize);
		return () => {
			document.getElementById("blogTitle").className = "blogTitle";
			document.getElementById("blog").className = "blog";
			window.removeEventListener("resize", setWindowSize);
		};
	}, []);

	const renderPosts = (scrollPosition) => {
		function featuredMedia(post, scrollPosition) {
			const featuredFile = post.fields.featuredMedia.fields.file;

			if (featuredFile.contentType === "image/jpeg") {
				const featuredBlur = post.fields.featuredMediaBlur.fields.file;
				return (
					<ImageLoader
						src={featuredFile.url}
						placeHolder={featuredBlur.url}
						alt={post.fields.title}
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

		return posts.map((post, index) => {
			return (
				<div className='wrapper'>
					<div className='tagDate'>
						<div
							className={filterTag ? null : `fieldTag${post.fields.tag}`}
							onClick={() => {
								setFilterTag(post.fields.tag);
							}}
						>
							{filterTag ? null : post.fields.tag}
						</div>
						<div className={filterTag ? "fieldDateNoTag" : "fieldDate"}>
							{readableDate(post.fields.date)}
						</div>
					</div>
					<Link
						className='posts__post'
						key={post.fields.slug}
						to={"/journal/" + post.fields.slug}
					>
						<LazyLoad
							className='posts__post__img__container'
							debounce={false}
							offsetVertical={50}
						>
							<div>{featuredMedia(post, scrollPosition)}</div>
						</LazyLoad>

						<h3>{post.fields.title}</h3>
						<p>{post.fields.description}</p>
					</Link>
				</div>
			);
		});
	};

	return (
		<div className={isLoading ? "posts__container hide" : "posts__container"}>
			<img className={isLoading ? "blob" : "blob move"} src='whiteBlob.svg' />
			<h2 className='journalHeading'>
				{filterTag ? (
					<div
						className='backArrow'
						onClick={() => {
							setFilterTag(null);
						}}
					>
						←
					</div>
				) : null}
				{filterTag ? filterTag : "Latest"} Entries
			</h2>

			<div className='posts'>{renderPosts()}</div>
		</div>
	);
}
