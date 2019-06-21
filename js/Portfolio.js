import React from "react";
import "../css/styles.scss";

export class Portfolio extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { showShapes: false, showMeme: false, showKitty: false };
	// 	this.dropdownShow = this.dropdownShow.bind(this);
	// 	this.dropdownHide = this.dropdownHide.bind(this);
	// }

	// dropdownShow(dropdownId) {
	// 	if (dropdownId === "Shapes") {
	// 		this.setState({
	// 			showShapes: true
	// 		});
	// 	} else if (dropdownId === "Meme") {
	// 		this.setState({
	// 			showMeme: true
	// 		});
	// 	} else if (dropdownId === "Kitty") {
	// 		this.setState({
	// 			showKitty: true
	// 		});
	// 	}
	// }

	// dropdownHide(dropdownId) {
	// 	if (dropdownId === "Shapes") {
	// 		this.setState({
	// 			showShapes: false
	// 		});
	// 	} else if (dropdownId === "Meme") {
	// 		this.setState({
	// 			showMeme: false
	// 		});
	// 	} else if (dropdownId === "Kitty") {
	// 		this.setState({
	// 			showKitty: false
	// 		});
	// 	}
	// }

	render() {
		return (
			<div className='portfolioContainer'>
				<div className='imageContainer'>
					<a href='http://localhost:1234'>
						<img src='portfolio/shapes.png' alt='Shapes Game' />
					</a>
					<div className='links'>
						<a href='http://localhost:1234' target='_blank'>
							Shapes Game
						</a>
						<a href='https://github.com/KattAttack/shapesGame' target='_blank'>
							GitHub Repository
						</a>
					</div>
				</div>

				<div className='imageContainer'>
					<a href='http://localhost:3000/'>
						<img src='portfolio/kitties.png' alt='Kitty Cards' />
					</a>
					<div className='links'>
						<a href='http://localhost:3000/' target='_blank'>
							Kitty Cards
						</a>
						<a href='https://github.com/KattAttack/kittyCards' target='_blank'>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
		);
	}
}
