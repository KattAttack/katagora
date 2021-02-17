import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../css/styles.scss";

import Journal from "./Journal";
import SinglePost from "./singlePost";
import Shop from "./Shop";
import BlogHome from "./BlogHome";

export function Blog() {
	const [selectedMenu, setSelectedMenu] = useState("");
	const [displayMenu, setDisplayMenu] = useState("");

	// const getHostUrl = () => {
	// 	let url;
	// 	if (HOST === "https://www.katagora.com/") {
	// 		if (!window.location.href.includes("www")) {
	// 			history.replaceState(null, "", "https://katagora.com/");
	// 			url = "https://katagora.com/";
	// 		} else {
	// 			history.replaceState(null, "", "http://localhost:4567/gram");
	// 			url = HOST;
	// 		}
	// 	}
	// 	return url;
	// };

	// const setJournalPath = () => {
	// 	const url = `${getHostUrl()}journal`;
	// 	console.log("URL", url);
	// 	console.log("history", history.state);
	// 	history.pushState(null, "", url);
	// };

	// const setShopPath = () => {
	// 	const url = `${getHostUrl()}shop`;
	// 	console.log("URL", url);
	// 	console.log("history", history);
	// 	history.pushState(null, "", url);
	// };

	// const setContactPath = () => {
	// 	const url = `${getHostUrl()}contact`;
	// 	console.log("URL", url);
	// 	console.log("history", history);
	// 	history.pushState(null, "", url);
	// };

	useEffect(() => {
		const password = document.getElementById("passwordContainer");

		password.addEventListener("animationend", () => {
			password.remove();
		});
	}, []);

	return (
		<div id='blog' className='blog'>
			<BrowserRouter history={createBrowserHistory()}>
				<Link
					to='/gram'
					id='blogTitle'
					className='blogTitle'
					onClick={() => {
						setSelectedMenu("");
					}}
				>
					KATAGORA
				</Link>
				<div id='menu' className='blogMenu'>
					<Link
						to='/journal'
						className={selectedMenu === "journal" ? "aSelected" : null}
						onClick={() => {
							setSelectedMenu("journal");
						}}
					>
						Journal
					</Link>
					<Link
						to='/shop'
						className={selectedMenu === "shop" ? "aSelected" : null}
						onClick={() => {
							setSelectedMenu("shop");
						}}
					>
						Shop
					</Link>
					<Link
						to='/journal'
						className={selectedMenu === "contact" ? "aSelected" : null}
						onClick={() => {
							setSelectedMenu("contact");
						}}
					>
						Contact
					</Link>

					<div
						className={selectedMenu === "" ? null : "animation start-" + selectedMenu}
					></div>
				</div>

				<Switch>
					<Route exact path='/gram' component={BlogHome} />
					<Route exact path='/journal' component={Journal} />
					<Route path='/shop' component={Shop} />
					<Route path='/journal/:id' component={SinglePost} />
				</Switch>
			</BrowserRouter>
			{/* {displayMenu === "Journal" ? (
				<Journal />
			) : displayMenu === "Shop" ? (
				<Shop />
			) : (
				<BlogHome />
			)} */}
		</div>
	);
}
