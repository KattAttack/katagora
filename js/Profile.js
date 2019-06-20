import React from "react";
import "../css/styles.scss";

export class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showShapes: false, showMeme: false, show: false, show: false };
		this.dropdownShow = this.dropdownShow.bind(this);
		this.dropdownHide = this.dropdownHide.bind(this);
	}
}
