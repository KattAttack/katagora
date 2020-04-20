import React from "react";
import ReactDOM from "react-dom";
import "../../css/styles.scss";
import { Portfolio } from "../Portfolio"

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
		this.showVenus = this.showVenus.bind(this);
	}

	componentDidMount() {
		let welcomeTitle = document.getElementById("welcomeTitle");
		welcomeTitle.innerHTML = "ﾟ･:*✧.･WELCOME to my PORTFOLIO･.✧*:･ﾟ";

	}

	showVenus() {
		let mybutton = document.getElementById("myBtn");
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";

		} else {
			mybutton.style.display = "none";
		}
	}


	render() {


		return (
			<div className="mobileContainer">
				<div className="titleBackground" >
					<div className="titleShadow">
						<div id='mobileTitle' className='title'>
							k a t a g o r a
						</div>
					</div>
					<img className='leafLine' src='columns/method-draw-image.svg' />
				</div>

				<div className='quote'>
					<p>
						The word 'Agora' (pronounced 'ah-go-RAH’) was a central public
						space in ancient Greek city-states. The literal meaning of the
						word is "gathering place" or "assembly". The agora was the
						center of the athletic, artistic, spiritual and political life
							in the city.{ " " }
					</p>
				</div>
				<div className='blogContainer' style={ { width: "100vw" } }>
					<Portfolio />
				</div>

			</div>
		)

	}
}

const rootElement = document.getElementById("Mobile");
ReactDOM.render(<App />, rootElement);
