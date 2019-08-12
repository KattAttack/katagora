import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import Router from "./Router";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: "", showGirl: false, showGram: false, showHouse: false };
		this.loadWelcome = this.loadWelcome.bind(this);
		this.loadAbout = this.loadAbout.bind(this);
		this.loadPortfolio = this.loadPortfolio.bind(this);
		// this.loadTictactoe = this.loadTictactoe.bind(this);
		this.menuShow = this.menuShow.bind(this);
		this.menuHide = this.menuHide.bind(this);
	}

	loadWelcome() {
		if (HOST === "http://www.katagora.com/") {
			history.replaceState(null, "", HOST);
		}
		const url = HOST;
		console.log("URL", url);
		console.log("history", history);
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "welcome"
		});
	}

	loadAbout() {
		const url = `${HOST}about`;
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "about"
		});
	}

	loadPortfolio() {
		const url = `${HOST}portfolio`;
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "portfolio"
		});
	}

	// loadTictactoe() {
	// 	const url = `${HOST}tictactoe`;
	// 	history.pushState(null, "", url);
	// 	this.setState({
	// 		url,
	// 		page: "tictactoe"
	// 	});
	// }

	menuShow() {
		this.setState({
			showMenu: true,
			showMoon: true
		});
	}

	menuHide() {
		this.setState({
			showMenu: false,
			showMoon: false
		});
	}

	componentDidMount() {
		// this.setState({ blogTextContainer: this.loadWelcome });

		//Path funcs & switches

		var pathName = window.location.pathname;

		switch (pathName) {
			case "/about":
				this.loadAbout();
				break;

			case "/portfolio":
				this.loadPortfolio();
				break;

			// case "/tictactoe":
			// 	this.loadTictactoe();
			// 	break;

			case "/":
				this.loadWelcome();
				break;

			default:
				this.loadWelcome();
		}

		//Title hover & click effects
		const title = document.getElementById("title");
		console.log("title", title);
		title.addEventListener("mouseover", e => {
			title.className = "titleOver";
		});

		title.addEventListener("webkitAnimationEnd", e => {
			title.className = "title";
		});

		//Nav hover & click effects

		const girl = document.getElementById("girl");
		var girlText = document.getElementById("girlText");

		girl.addEventListener("mouseover", e => {
			girlText.className = "typewriter";
			this.setState({
				showGirl: true
			});
		});

		girl.addEventListener("mouseout", e => {
			girlText.className = "hidden";
			this.setState({
				showGirl: false
			});
		});

		const gramContainer = document.getElementById("gramContainer");
		const gram = document.getElementById("gram");
		var gramText = document.getElementById("gramText");
		gram.addEventListener("mouseover", e => {
			gramText.className = "typewriter";
			this.setState({
				showGram: true
			});
		});

		gram.addEventListener("mouseout", e => {
			gramText.className = "hidden";
			this.setState({
				showGram: false
			});
		});

		const houseContainer = document.getElementById("houseContainer");
		const house = document.getElementById("house");
		var houseText = document.getElementById("houseText");
		house.addEventListener("mouseover", e => {
			houseText.className = "typewriter";
			this.setState({
				showHouse: true
			});
		});

		house.addEventListener("mouseout", e => {
			houseText.className = "hidden";
			this.setState({
				showHouse: false
			});
		});
	}

	render() {
		// if (HOST === "http://www.katagora.com/") {
		// 	history.replaceState(null, "", HOST);
		// }
		// if (this.state.page === "tictactoe") {
		// 	return <Router page={this.state.page} />;
		// }
		return (
			<div className='App'>
				<img className='backgroundImage' src='background/redbackground.jpg' />

				<img className='columnLeft' src='columns/pinkcolumn1.png' />

				<div className='mainContent'>
					<div className='banner'>
						<div id='title' className='title' onClick={this.loadWelcome}>
							k a t a g o r a
						</div>
						<img className='leafLine' src='columns/method-draw-image.svg' />
						<div className='quote'>
							<p>
								The word 'Agora' (pronounced 'ah-go-RAH’) was a central public space
								in ancient Greek city-states. The literal meaning of the word is
								"gathering place" or "assembly". The agora was the center of the
								athletic, artistic, spiritual and political life in the city.{" "}
							</p>
						</div>
					</div>

					<div className='blogContent'>
						<div className='blogYellowBox' />

						<div className='blogContainer'>
							<Router page={this.state.page} />
						</div>
					</div>
				</div>

				<div className='nav'>
					<ul style={{ listStyle: "none" }}>
						<li>
							<div className='container'>
								<div className='menuBackground'>
									<div
										className={this.state.showGirl ? "girlShow" : "girlHide"}
									/>
								</div>
								<img
									className='resize'
									id='girl'
									src='girl.png'
									alt='Girl'
									onClick={this.loadAbout}
									onMouseEnter={() => {
										this.setState({
											showGirl: true
										});
									}}
									onMouseLeave={() => {
										this.setState({
											showGirl: false
										});
									}}
								/>

								<div id='girlText' className='hidden'>
									<h1 style={{ paddingTop: "6.5px", marginLeft: "0px" }}>
										&nbsp; Who is She
									</h1>
								</div>
							</div>
						</li>

						<li>
							<div className='container'>
								<div className='menuBackground'>
									<div
										className={this.state.showGram ? "gramShow" : "gramHide"}
									/>
								</div>

								<img
									className='navImage'
									id='gram'
									src='instagram.png'
									alt='Instagram'
									width='50'
									height='50'
									// onClick={this.loadTictactoe}
									// onMouseEnter={() => {
									// 	this.setState({
									// 		showGram: true
									// 	});
									// }}
									// onMouseLeave={() => {
									// 	this.setState({
									// 		showGram: false
									// 	});
									// }}
								/>

								<div id='gramText' className='hidden'>
									<h1 style={{ paddingTop: "5px", marginLeft: "10px" }}>
										&nbsp; Off the Gram
									</h1>
								</div>
							</div>
						</li>

						<li>
							<div className='container'>
								<div className='menuBackground'>
									<div
										className={this.state.showHouse ? "houseShow" : "houseHide"}
									/>
								</div>

								<img
									className='navImage'
									id='house'
									src='https://image.flaticon.com/icons/png/512/86/86329.png'
									alt='House'
									width='50'
									height='50'
									onClick={this.loadPortfolio}
									onMouseEnter={() => {
										this.setState({
											showHouse: true
										});
									}}
									onMouseLeave={() => {
										this.setState({
											showHouse: false
										});
									}}
								/>

								<div id='houseText' className='hidden'>
									<h1 style={{ paddingTop: "6px", marginLeft: "10px" }}>
										&nbsp; Portfolio
									</h1>
								</div>
							</div>
						</li>
					</ul>
				</div>

				{/* <div className={this.state.showMenu ? "sunHide" : "sunShow"} /> */}

				{/* <div className={this.state.showMoon ? "moonShow" : "moonHide"} /> */}

				<img className='columnRight' src='columns/pinkcolumn2.png' />
			</div>
		);
	}
}

const rootElement = document.getElementById("Root");
ReactDOM.render(<App />, rootElement);
