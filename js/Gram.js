import React from "react";
import axios from "axios";
import "../css/styles.scss";
import { Blog } from "./Blog";

export class Gram extends React.Component {
	constructor(props) {
		super(props);
		this.state = { password: "", message: "" };
		this.enterPressed = this.enterPressed.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.inputPass = React.createRef();
	}

	enterPressed(e) {
		console.log("Here's the function");
		if (!e) {
			var e = window.event;
		}

		// Enter is pressed
		if (e.keyCode == 13) {
			console.log("Enter Pressed!");
			this.handleSubmit();
		}
	}

	componentDidMount() {
		console.log("Component Mounted");

		this.inputPass.current.addEventListener("keydown", this.enterPressed, false);
	}

	componentWillUnmount() {
		this.inputPass.current.removeEventListener("keydown", this.enterPressed);
	}

	handleChange(event) {
		this.setState({ password: event.target.value, message: "" });
	}

	AnimationListener() {
		createText();
	}

	handleSubmit(event) {
		axios
			.post("/password", { password: this.state.password })
			.then((res) => {
				if (res.data.isValid) {
					this.setState({ message: false });
					this.inputPass.current.removeEventListener("keydown", this.enterPressed);
				} else if (this.state.password === "") {
					this.setState({ message: "Please Provide the Password" });
				} else this.setState({ message: "Nope, That's Not It" });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div id='gram' className='gramContainer'>
				<img
					className={this.state.message === false ? "cupid moveCupid" : "cupid"}
					src='CupidTransparent.png'
				/>
				{this.state.message === false ? <Blog /> : null}

				<div
					id='passwordContainer'
					className={
						this.state.message === false
							? "passwordContainer animateFadeContainer"
							: "passwordContainer"
					}
				>
					<div
						className={
							this.state.message === false ? "whiteBorder fadeForm" : "whiteBorder"
						}
					/>
					<div
						className={
							this.state.message === false ? "tanBorder fadeForm" : "tanBorder"
						}
					/>

					<div
						className={
							this.state.message === false
								? "passwordTitle fadeForm"
								: "passwordTitle"
						}
					>
						PASSWORD
					</div>
					<div
						className={
							this.state.message === false ? "passwordForm fadeForm" : "passwordForm"
						}
					>
						<input
							className='passwordInput'
							type='password'
							placeholder='Who goes there?'
							value={this.state.password}
							onChange={this.handleChange}
							ref={this.inputPass}
						/>
						<div className='passwordButton' onClick={this.handleSubmit}>
							Submit
						</div>
						<div className='passwordMessage'>
							{this.state.message ? this.state.message : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
