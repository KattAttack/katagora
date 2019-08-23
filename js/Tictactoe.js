import React from "react";
import "../css/styles.scss";
import { GameMessage } from "./GameMessage";

var board = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

export class Tictactoe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			row1: [0, 0, 0],
			row2: [0, 0, 0],
			row3: [0, 0, 0],

			player: 1
		};
		this.boxSelect = this.boxSelect.bind(this);
	}

	boxSelect(index, row) {
		console.log("id", index);
		if (row === 3) {
			if (this.state.player === 1) {
				this.state.row3.splice(index, 1, 1);
				console.log(this.state.row3);
				this.setState({
					player: 2
				});
			} else {
				this.state.row3.splice(index, 1, 2);
				console.log(this.state.row3);
				this.setState({
					player: 1
				});
			}
		}
		if (row === 2) {
			if (this.state.player === 1) {
				this.state.row2.splice(index, 1, 1);
				console.log(this.state.row2);
				this.setState({
					player: 2
				});
			} else {
				this.state.row2.splice(index, 1, 2);
				console.log(this.state.row2);
				this.setState({
					player: 1
				});
			}
		}
		if (row === 1) {
			if (this.state.player === 1) {
				this.state.row1.splice(index, 1, 1);
				console.log(this.state.row1);
				this.setState({
					player: 2
				});
			} else {
				this.state.row1.splice(index, 1, 2);
				console.log(this.state.row1);
				this.setState({
					player: 1
				});
			}
		}
	}

	render() {
		const whiteFill = {
			background: "white"
		};

		const blackFill = {
			background: "black"
		};
		return (
			<div className='tictactoeGame'>
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
								<div className='gameMessageContainer'>
									<div
										key={index}
										id={index}
										style={style}
										className={
											this.state.row1[index] === 0 ? "empty" : "filled"
										}
										onClick={
											this.state.row1[index] === 0
												? e => this.boxSelect(index, 1)
												: null
										}
									/>
									<GameMessage row1={this.state.row1} />
								</div>
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
								<div className='gameMessageContainer'>
									<div
										key={index}
										id={index}
										style={style}
										className={
											this.state.row2[index] === 0 ? "empty" : "filled"
										}
										onClick={
											this.state.row2[index] === 0
												? e => this.boxSelect(index, 2)
												: null
										}
									/>
									<GameMessage row2={this.state.row2} />
								</div>
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
								<div className='gameMessageContainer'>
									<div
										key={index}
										id={index}
										style={style}
										className={
											this.state.row3[index] === 0 ? "empty" : "filled"
										}
										onClick={
											this.state.row3[index] === 0
												? e => this.boxSelect(index, 3)
												: null
										}
									/>
									<GameMessage row3={this.state.row3} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
