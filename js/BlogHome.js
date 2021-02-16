import React, { useEffect, useState } from "react";
import "../css/styles.scss";

export default function BlogHome() {
	const [latestPostMenu, setLatestPostMenu] = useState("Recent");

	useEffect(() => {
		const newVideo = document.getElementById("videoElementId");
		newVideo.play();
	}, []);

	return (
		<div id='blogLayout' className='blogLayout'>
			<img className='palmImg' src='blog/beachPalms.jpeg' />
			<div className='level1'>
				<div className='introBox'>
					<img className='leafSvg' src='blog/linedLeaf.svg' />
					<img className='meImg' src='blog/itsMe.jpg' />
					<div className='introBackground' />
					<div className='introText'>
						<h1>
							My name's Kat and <br /> I'm pleased to meet you c:
						</h1>
						<p>
							Welcome to my Agora! <br /> Here you may find all manner of things–{" "}
							<br /> outfit repeating, art, and musings. Feel free to <br /> peruse my
							passions and inspire your own. Speak soon?
						</p>
					</div>
					<img className='flowerSvg' src='blog/greenFlowers.svg' />
				</div>

				<div className='featuredPost'>
					<img className='featuredImg' src='blog/featuredPost.png' />
				</div>
			</div>
			<img className='latestEntries' src='blog/latestEntries.svg' />
			<img className='stickyLeft' src='blog/stickyLeft.svg' />
			<ul className='journalEntries'>
				<li className={latestPostMenu === "Recent" ? "entriesSelected" : "entries"}>
					<span
						onClick={() => {
							setLatestPostMenu("Recent");
						}}
					>
						Recent
					</span>
				</li>
				<li className={latestPostMenu === "Fashion" ? "entriesSelected-F" : "entries"}>
					<span
						onClick={() => {
							setLatestPostMenu("Fashion");
						}}
					>
						Fashion
					</span>
				</li>
				<li className={latestPostMenu === "Living" ? "entriesSelected-L" : "entries"}>
					<span
						onClick={() => {
							setLatestPostMenu("Living");
						}}
					>
						Living
					</span>
				</li>
				<li className={latestPostMenu === "Products" ? "entriesSelected-P" : "entries"}>
					{" "}
					<span
						onClick={() => {
							setLatestPostMenu("Products");
						}}
					>
						Products
					</span>
				</li>
			</ul>

			<img className='blankNote' src='blog/blankNote.svg' />
			<img className='stickyRight' src='blog/stickyRight.svg' />
			<img className='purpleBlob' src='purpleBlob0.svg' />
			<img className='purpleBlob1' src='purpleBlob1.svg' />

			<div className='latestBox'>
				<div
					className={
						latestPostMenu === "Recent"
							? "latestPostFashion"
							: "latestPost" + latestPostMenu
					}
				>
					<div className='postDescription'>
						<p>{latestPostMenu === "Recent" ? "Fashion" : latestPostMenu}</p>
						<p>11/05/20</p>
					</div>
					<img className='latestImg' src='blog/latestPost.jpg' />
					<h1> 5 Short Titles For Your Next Post </h1>
				</div>
				<div
					className={
						latestPostMenu === "Recent"
							? "latestPostLiving"
							: "latestPost" + latestPostMenu
					}
				>
					<div className='postDescription'>
						<p>{latestPostMenu === "Recent" ? "Living" : latestPostMenu}</p>
						<p>11/05/20</p>
					</div>
					<video
						id='videoElementId'
						className='latestImg'
						autoPlay
						muted
						loop
						src='./featuredPost1.mp4'
					></video>

					<h1> How To Write An Engaging Description </h1>
				</div>
				<div
					className={
						latestPostMenu === "Recent"
							? "lastFeaturedPost"
							: "latestPost" + latestPostMenu
					}
				>
					<div className='postDescription'>
						<p>{latestPostMenu === "Recent" ? "Featured" : latestPostMenu}</p>
						<p>11/05/20</p>
					</div>
					<img className='latestImg' src='blog/fashion.jpg' />
					<h1> A Title For A Blog Post I Haven't Written</h1>
				</div>
				<div
					className={
						latestPostMenu === "Recent"
							? "latestPostProducts"
							: "latestPost" + latestPostMenu
					}
				>
					<div className='postDescription'>
						<p>{latestPostMenu === "Recent" ? "Products" : latestPostMenu}</p>
						<p>11/05/20</p>
					</div>
					<img className='latestImg' src='blog/product.jpg' />
					<h1> 3 Things You Should Consider When Making A Site </h1>
				</div>
			</div>

			<div className='instaAbout'>
				<div className='instaBox'>
					<iframe
						src='https://www.powr.io/instagram-feed/u/93ee723c_1605233334#platform=iframe'
						style={{ width: 100 + "%" }}
						height='650px'
						frameborder='0'
					></iframe>
				</div>
				<div className='aboutBox'></div>
			</div>

			{/* <img className='whisperingArt' src='blog/whisperingsOfLove.jpg' /> */}
		</div>
	);
}
