import React from "react";
import "../css/styles.scss";

var board = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

export class Tictactoe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			row1: [0, 0, 0],
			row2: [0, 0, 0],
			row3: [0, 0, 0],
			player1: null,
			winMessage: null,
			player: 1
		};
		this.winLogic = this.winLogic.bind(this);
		this.boxSelect = this.boxSelect.bind(this);
		this.newGame = this.newGame.bind(this);
	}

	winLogic(num) {
		console.log("Win logic running");
		let winMessage;

		//vertical win
		if (
			this.state.row1[0] === num &&
			this.state.row2[0] === num &&
			this.state.row3[0] === num
		) {
			console.log(this.state.player1Win);
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		if (
			this.state.row1[1] === num &&
			this.state.row2[1] === num &&
			this.state.row3[1] === num
		) {
			console.log(this.state.player1Win);
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		if (
			this.state.row1[2] === num &&
			this.state.row2[2] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		//horizontal win
		if (
			this.state.row1[0] === num &&
			this.state.row1[1] === num &&
			this.state.row1[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		if (
			this.state.row2[0] === num &&
			this.state.row2[1] === num &&
			this.state.row2[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		if (
			this.state.row3[0] === num &&
			this.state.row3[1] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		//diagonal win
		if (
			this.state.row1[0] === num &&
			this.state.row2[1] === num &&
			this.state.row3[2] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}

		if (
			this.state.row1[2] === num &&
			this.state.row2[1] === num &&
			this.state.row3[0] === num
		) {
			console.log(this.state.player1Win);
			// winMessage = `Player ${num} wins!`;
			this.setState({
				player1: true,
				winMessage: `Player ${num} wins!`
			});
		}
	}

	newGame() {
		this.setState({
			row1: [0, 0, 0],
			row2: [0, 0, 0],
			row3: [0, 0, 0],
			player1: null,
			winMessage: null,
			player: 1
		});
	}

	boxSelect(index, row) {
		console.log("id", index);
		if (row === 3) {
			if (this.state.player === 1) {
				this.state.row3.splice(index, 1, 1);
				console.log(this.state.row3);
				this.setState(
					{
						player: 2
					},
					this.winLogic(1)
				);
			} else {
				this.state.row3.splice(index, 1, 2);
				console.log(this.state.row3);
				this.setState(
					{
						player: 1
					},
					this.winLogic(2)
				);
			}
		}
		if (row === 2) {
			if (this.state.player === 1) {
				this.state.row2.splice(index, 1, 1);
				console.log(this.state.row2);
				this.setState(
					{
						player: 2
					},
					this.winLogic(1)
				);
			} else {
				this.state.row2.splice(index, 1, 2);
				console.log(this.state.row2);
				this.setState(
					{
						player: 1
					},
					this.winLogic(2)
				);
			}
		}
		if (row === 1) {
			if (this.state.player === 1) {
				this.state.row1.splice(index, 1, 1);
				console.log(this.state.row1);
				this.setState(
					{
						player: 2
					},
					this.winLogic(1)
				);
			} else {
				this.state.row1.splice(index, 1, 2);
				console.log(this.state.row1);
				this.setState(
					{
						player: 1
					},
					this.winLogic(2)
				);
			}
		}
	}

	render() {
		const whiteFill = {
			background: "DEEPSKYBLUE"
		};

		const blackFill = {
			background: "DODGERBLUE"
		};
		return (
			<div className='tictactoeGame'>
				<div className='tictactoeTitle'> Pick a Square!</div>
				<div className='gridContainer'>
					<div className='row1'>
						{board[0].map((index, row) => {
							var style = null;
							if (this.state.row1[index] === 1) {
								style = whiteFill;
							}
							if (this.state.row1[index] === 2) {
								style = blackFill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row1[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row1[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 1)
											: null
									}
								/>
							);
						})}
					</div>

					<div className='row2'>
						{board[1].map((index, row) => {
							var style = null;
							if (this.state.row2[index] === 1) {
								style = whiteFill;
							}
							if (this.state.row2[index] === 2) {
								style = blackFill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row2[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row2[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 2)
											: null
									}
								/>
							);
						})}
					</div>

					<div className='row3'>
						{board[2].map((index, row) => {
							var style = null;
							if (this.state.row3[index] === 1) {
								style = whiteFill;
							}
							if (this.state.row3[index] === 2) {
								style = blackFill;
							}
							return (
								<div
									key={index}
									id={index}
									style={style}
									className={this.state.row3[index] === 0 ? "empty" : "filled"}
									onClick={
										this.state.row3[index] === 0 &&
										this.state.winMessage === null
											? e => this.boxSelect(index, 3)
											: null
									}
								/>
							);
						})}
					</div>
				</div>
				<div className='gameMessageContainer'>
					<div className='newGame' onClick={e => this.newGame()}>
						New Game
					</div>
					<div className='gameMessage'>{this.state.winMessage}</div>
				</div>
			</div>
		);
	}
}
