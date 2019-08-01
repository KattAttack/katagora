import React from "react";
import "../css/styles.scss";

export class Tictactoe extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showMe: false, showRel: false, showGoals: false, showInfo: false };
		this.dropdownShow = this.dropdownShow.bind(this);
		this.dropdownHide = this.dropdownHide.bind(this);
	}

	render() {
		return <p>HEY</p>;
	}
}
