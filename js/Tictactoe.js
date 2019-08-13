import React from "react";
import "../../css/styles.scss";

var row1 = [
	{ name: "box1", filled: false },
	{ name: "box2", filled: false },
	{ name: "box3", filled: false }
];

export class Tictactoe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			row1: {
				box1: { name: "box1", filled: false },
				box2: { name: "box2", filled: false },
				box3: { name: "box3", filled: false }
			}
		};
		this.boxSelect = this.boxSelect.bind(this);
	}

	boxSelect(index, event) {
		console.log("id", index);
	}

	render() {
		return (
			<div className='tictactoeGame'>
				<div className='gridContainer'>
					<div className='row1'>
						{row1.map((obj, index) => {
							return (
								<div
									key={index}
									id={index}
									className={obj.name}
									onClick={e => this.boxSelect(index, e)}
								/>
							);
						})}
					</div>

					<div className='row2'>
						{/* <div id={index} className='box1' />
						<div id={index} className='box2' />
						<div id={index} className='box3' /> */}
					</div>

					<div className='row3'>
						{/* <div id={index} className='box1' />
						<div id={index} className='box2' />
						<div id={index} className='box3' /> */}
					</div>
				</div>
			</div>
		);
	}
}
