import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.scss";
import Router from "./Router";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: "", showMenu: false };
		this.loadWelcome = this.loadWelcome.bind(this);
		this.loadAbout = this.loadAbout.bind(this);
		this.loadPortfolio = this.loadPortfolio.bind(this);
		this.menuShow = this.menuShow.bind(this);
		this.menuHide = this.menuHide.bind(this);
	}

	loadWelcome() {
		// console.log("PRODUCTION", PRODUCTION);
		let url = "http://localhost:4567/";
		if (PRODUCTION) {
			url = "http://www.katagora.com/";
		}
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "welcome"
		});
	}

	loadAbout() {
		let url = "http://localhost:4567/about";
		if (PRODUCTION) {
			url = "http://www.katagora.com/about";
		}
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "about"
		});
	}

	loadPortfolio() {
		let url = "http://localhost:4567/portfolio";
		if (PRODUCTION) {
			url = "http://www.katagora.com/portfolio";
		}
		history.pushState(null, "", url);
		this.setState({
			url,
			page: "portfolio"
		});
	}

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
		});

		girl.addEventListener("mouseout", e => {
			girlText.className = "hidden";
		});

		const gram = document.getElementById("gram");
		var gramText = document.getElementById("gramText");
		gram.addEventListener("mouseover", e => {
			gramText.className = "typewriter";
		});

		gram.addEventListener("mouseout", e => {
			gramText.className = "hidden";
		});

		const house = document.getElementById("house");
		var houseText = document.getElementById("houseText");
		house.addEventListener("mouseover", e => {
			houseText.className = "typewriter";
		});

		house.addEventListener("mouseout", e => {
			houseText.className = "hidden";
		});
	}

	render() {
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.{" "}
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
					<ul
						style={{ listStyle: "none" }}
						onMouseEnter={() => {
							this.menuShow();
						}}
						onMouseLeave={() => {
							this.menuHide();
						}}
					>
						<li>
							<div className='container'>
								<img
									className='resize'
									id='girl'
									src='girl.png'
									alt='Girl'
									onClick={this.loadAbout}
								/>

								<div id='girlText' className='hidden'>
									<h1 style={{ paddingTop: "6.5px", marginLeft: "0px" }}>
										&nbsp;> Who is She
									</h1>
								</div>
							</div>
						</li>

						<li>
							<div className='container'>
								<img
									className='navImage'
									id='gram'
									src='instagram.png'
									alt='Instagram'
									width='50'
									height='50'
								/>

								<div id='gramText' className='hidden'>
									<h1 style={{ paddingTop: "5px", marginLeft: "36px" }}>
										&nbsp;Off the Gram
									</h1>
								</div>
							</div>
						</li>

						<li>
							<div className='container'>
								<img
									className='navImage'
									id='house'
									src='https://image.flaticon.com/icons/png/512/86/86329.png'
									alt='House'
									width='50'
									height='50'
									onClick={this.loadPortfolio}
								/>

								<div id='houseText' className='hidden'>
									<h1 style={{ paddingTop: "6px", marginLeft: "36px" }}>
										&nbsp;Portfolio
									</h1>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div className={this.state.showMenu ? "sunHide" : "sunShow"} />

				<div className={this.state.showMoon ? "moonShow" : "moonHide"} />

				<img className='columnRight' src='columns/pinkcolumn2.png' />
			</div>
		);
	}
}

const rootElement = document.getElementById("Root");
ReactDOM.render(<App />, rootElement);
