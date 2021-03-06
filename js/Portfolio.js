import React from "react";
import "../css/styles.scss";
import { CoverLetter } from "./CoverLetter";

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.openInNewTab = this.openInNewTab.bind(this);
		this.scrollToMyRef = this.scrollToMyRef.bind(this);
		this.scrollFunction = this.scrollFunction.bind(this);
		this.topFunction = this.topFunction.bind(this);
		this.myRefs = [];
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollFunction);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollFunction);
	}

	scrollToMyRef = (numb) => this.myRefs[numb].scrollIntoView({ behavior: "smooth" });

	scrollFunction() {
		console.log("scrolling");
		var mybutton = document.getElementById("myBtn");
		console.log("scrollTop", document.body.scrollTop);
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	topFunction() {
		window.scrollTo({ top: 0, behavior: "smooth" });
		// document.body.scrollTop = 0;
		// document.documentElement.scrollTop = 0;
	}

	openInNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	render() {
		// window.onscroll = function () { this.scrollFunction() };
		return (
			<>
				<img
					src='venusShell.png'
					onClick={this.topFunction}
					id='myBtn'
					className='scrollTopVenus'
					title='Go to top'
				></img>

				<div className='portfolioContainer' onScroll={this.scrollFunction}>
					<div className='fancyHeader' id='welcomeTitle'>
						ﾟ･:*✧.･ WELCOME to my PORTFOLIO ･.✧*:･ﾟ
					</div>

					<div className='workContentContainer'>
						<div className='scrollMenu'>
							<div
								className='menu'
								onClick={() => {
									this.scrollToMyRef(0);
									// this.myDivToFocus.current.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								Resume
							</div>
							<div
								className='menu'
								onClick={() => {
									this.scrollToMyRef(1);
									// this.myDivToFocus.current.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								Apps
							</div>
							<div
								className='menu'
								onClick={() => {
									this.scrollToMyRef(2);
									// this.myDivToFocus.current.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								Tutorials
							</div>
						</div>
						<div className='coverLetterContainer'>
							<CoverLetter />
						</div>

						<div
							className='resumeContainer'
							ref={(ref) => {
								this.myRefs[0] = ref;
							}}
						>
							<div className='fancyHeader'>RESUME</div>
							<iframe src='portfolio/Resume.pdf' width='96%' height='500px'></iframe>
						</div>

						<div
							className='appsContainer'
							ref={(ref) => {
								this.myRefs[1] = ref;
							}}
						>
							<div className='fancyHeader'>APPS</div>
							<div className='appsImages'>
								<div className='imageContainer'>
									<div className='links'>
										<div
											className='gameTitle'
											onClick={() => {
												this.openInNewTab("http://www.voterankchoice.com");
											}}
										>
											Ranked Choice
										</div>
									</div>

									<img
										src='portfolio/rankedChoice.png'
										alt='Ranked Choice'
										onClick={() => {
											this.openInNewTab("http://www.voterankchoice.com");
										}}
									/>
									<div className='techUsed'>
										(JavaScript, React, React Move, Styled Components, Node,
										Git)
									</div>
									<div className='links'>
										<a style={{ color: "#cc5500" }} target='_blank'>
											Under Development
										</a>
									</div>
								</div>

								<div className='imageContainer'>
									<div className='links'>
										<div
											className='gameTitle'
											onClick={() => {
												this.openInNewTab(`${HOST}kittyCards`);
											}}
										>
											Kitty Cards
										</div>
									</div>
									<img
										src='portfolio/kitties.png'
										alt='Kitty Cards'
										onClick={() => {
											this.openInNewTab(`${HOST}kittyCards`);
										}}
									/>
									<div className='techUsed'>
										(JavaScript, React, ReactMove, SCSS, AWS, Git)
									</div>
									<div className='links'>
										<a
											href='https://github.com/KattAttack/kittyCards'
											target='_blank'
										>
											GitHub Repository
										</a>
									</div>
								</div>

								<div className='imageContainer'>
									<div className='links'>
										<div
											className='gameTitle'
											onClick={() => {
												this.openInNewTab(`${HOST}shapes`);
											}}
										>
											Shapes Game
										</div>
									</div>

									<img
										src='portfolio/shapes.png'
										alt='Shapes Game'
										onClick={() => {
											this.openInNewTab(`${HOST}shapes`);
										}}
									/>
									<div className='techUsed'>
										(JavaScript, React, SCSS, AWS, Git)
									</div>
									<div className='links'>
										<a
											href='https://github.com/KattAttack/shapesGame'
											target='_blank'
										>
											GitHub Repository
										</a>
									</div>
								</div>

								<div className='imageContainer'>
									<div className='links'>
										<div
											className='gameTitle'
											onClick={() => {
												this.openInNewTab(`${HOST}tictactoe`);
											}}
										>
											Tictactoe Game
										</div>
									</div>
									<img
										src='portfolio/tictactoe.png'
										alt='Tictactoe Game'
										onClick={() => {
											this.openInNewTab(`${HOST}tictactoe`);
										}}
									/>
									<div className='techUsed'>
										(JavaScript, React, SCSS, AWS, Git)
									</div>
									<div className='links'>
										<a href='' target='_blank'>
											GitHub Repository
										</a>
									</div>
								</div>

								<div className='imageContainer'>
									<div className='links'>
										<div
											className='gameTitle'
											onClick={() => {
												this.openInNewTab(`${HOST}mazeGame`);
											}}
										>
											Maze Game
										</div>
									</div>
									<img
										src='portfolio/maze.png'
										alt='Maze Game'
										onClick={() => {
											this.openInNewTab(`${HOST}mazeGame`);
										}}
									/>
									<div className='techUsed'>(JavaScript, React, Matter)</div>
									<div className='links'>
										<a style={{ color: "#cc5500" }} target='_blank'>
											Under Development
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className='tutorialsContainer'
							ref={(ref) => {
								this.myRefs[2] = ref;
							}}
						>
							<div className='fancyHeader'>TUTORIALS</div>
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/MLv1We_iPeg?start=1'
								frameBorder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
							<p>
								{" "}
								MORE TO COME!! For now, here's a cute picture of my cuddly kitties
								c:
							</p>
							<img src='portfolio/lovelyKitties.jpg'></img>
						</div>
					</div>
				</div>
			</>
		);
	}
}
