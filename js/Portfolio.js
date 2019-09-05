import React from "react";
import "../css/styles.scss";

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.openInNewTab = this.openInNewTab.bind(this);
	}

	openInNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	render() {
		return (
			<div className='portfolioContainer'>
				<div className='imageContainer'>
					<img
						src='portfolio/shapes.png'
						alt='Shapes Game'
						onClick={() => {
							this.openInNewTab(`${HOST}shapes`);
						}}
					/>
					<div className='links'>
						<div
							className='gameTitle'
							onClick={() => {
								this.openInNewTab(`${HOST}shapes`);
							}}
						>
							Shapes Game
						</div>
						<a href='https://github.com/KattAttack/shapesGame' target='_blank'>
							GitHub Repository
						</a>
					</div>
				</div>

				<div className='imageContainer'>
					<img
						src='portfolio/kitties.png'
						alt='Kitty Cards'
						onClick={() => {
							this.openInNewTab(`${HOST}kittyCards`);
						}}
					/>

					<div className='links'>
						<div
							className='gameTitle'
							onClick={() => {
								this.openInNewTab(`${HOST}kittyCards`);
							}}
						>
							Kitty Cards
						</div>

						<a href='https://github.com/KattAttack/kittyCards' target='_blank'>
							GitHub Repository
						</a>
					</div>
				</div>

				<div className='imageContainer'>
					<img
						src='portfolio/tictactoe.png'
						alt='Tictactoe Game'
						onClick={() => {
							this.openInNewTab(`${HOST}tictactoe`);
						}}
					/>
					<div className='links'>
						<div
							className='gameTitle'
							onClick={() => {
								this.openInNewTab(`${HOST}tictactoe`);
							}}
						>
							Tictactoe Game
						</div>
						<a href='' target='_blank'>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
		);
	}
}
