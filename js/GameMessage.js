import React from "react";
import "../css/styles.scss";

export class GameMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: null,
			player1Win: " Player 1 Wins!"
		};
		this.winVertical = this.winVertical.bind(this);
	}

	winVertical() {
		console.log("vertical win running");

		if (this.props.row1[0] === 1) {
			console.log(this.state.player1Win);
			this.setState({
				player1: true
			});
		}
	}

	render() {
		// this.winVertical();
		return <div>{this.state.player1 ? this.state.player1Win : null}</div>;
	}

	// winHorizontal() {}

	// winDiagonal() {}
}
