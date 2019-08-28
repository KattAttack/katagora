import React from "react";
import "../css/styles.scss";

export class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showMe: false, showRel: false, showGoals: false, showInfo: false };
		this.dropdownShow = this.dropdownShow.bind(this);
		this.dropdownHide = this.dropdownHide.bind(this);
	}

	dropdownShow(dropdownId) {
		if (dropdownId === "Me") {
			this.setState({
				showMe: true
			});
		} else if (dropdownId === "Rel") {
			this.setState({
				showRel: true
			});
		} else if (dropdownId === "Goals") {
			this.setState({
				showGoals: true
			});
		} else if (dropdownId === "Info") {
			this.setState({
				showInfo: true
			});
		}
	}

	dropdownHide(dropdownId) {
		if (dropdownId === "Me") {
			this.setState({
				showMe: false
			});
		} else if (dropdownId === "Rel") {
			this.setState({
				showRel: false
			});
		} else if (dropdownId === "Goals") {
			this.setState({
				showGoals: false
			});
		} else if (dropdownId === "Info") {
			this.setState({
				showInfo: false
			});
		}
	}

	render() {
		return (
			<div className='aboutContainer'>
				<div className='dropdownMe'>
					<span
						onMouseEnter={() => {
							this.dropdownShow("Me");
						}}
						onMouseLeave={() => {
							this.dropdownHide("Me");
						}}
					>
						Katrina Kozorezov
					</span>

					<div className='boxMe' style={{ maxHeight: this.state.showMe ? 500 : 0 }}>
						<div
							id='Me'
							onMouseEnter={() => {
								this.dropdownShow("Me");
							}}
							onMouseLeave={() => {
								this.dropdownHide("Me");
							}}
							className='aboutMeText'
						>
							<div className='A1'>My relationship with identity is complicated</div>

							<div className='A2'>
								Will expand on this once released to the public.
								{/* and an Instagram or LinkedIn bio just won't cut it. Filtered,
								selective, and character restricted, these entries are good for what
								they're used for. But what I choose to share here goes beyond a
								quick post and is more intimate than job placement. I was born in
								America but I am Russian. Though that's my ethnicity, I don't
								particularly care for it. Though I'm not Greek I am intrigued.
								Though I'm 23 there are days I feel 40 and days I feel 5. I will
								tell you my dreams, I will share my doubts and worries. I will open
								a window and you will see the world as I do. This will be fluid,
								it'll change it'll grow. I will ramble, quote, spout prose, fuck up.
								And hopefully by the end we'll have gotten so far that the beginning
								and our questions of identity go to rest in the folds of our smiles.
								Some day you'll know more, but for now, this is it. */}
							</div>
						</div>
					</div>
				</div>

				<div className='dropdownRel'>
					<span
						onMouseEnter={() => {
							this.dropdownShow("Rel");
						}}
						onMouseLeave={() => {
							this.dropdownHide("Rel");
						}}
					>
						Religion
					</span>
					<div className='boxRel' style={{ maxHeight: this.state.showRel ? 500 : 0 }}>
						<div
							id='Rel'
							onMouseEnter={() => {
								this.dropdownShow("Rel");
							}}
							onMouseLeave={() => {
								this.dropdownHide("Rel");
							}}
							className='aboutRelText'
						>
							<div className='A1'>More on this coming soon</div>
							<div className='A2'>Nothing here yet but keep your eyes peeled!</div>
						</div>
					</div>
				</div>

				<div className='dropdownGoals'>
					<span
						onMouseEnter={() => {
							this.dropdownShow("Goals");
						}}
						onMouseLeave={() => {
							this.dropdownHide("Goals");
						}}
					>
						Goals
					</span>
					<div className='boxGoals' style={{ maxHeight: this.state.showGoals ? 500 : 0 }}>
						<div
							id='Goals'
							onMouseEnter={() => {
								this.dropdownShow("Goals");
							}}
							onMouseLeave={() => {
								this.dropdownHide("Goals");
							}}
							className='aboutGoalsText'
						>
							<div className='A1'>I hope to achieve many things</div>
							<div className='A2'>
								Get a job, visit Athens, repaint my car, create a coffee table book,
								design my own fashion line/accessories, write a collection of
								nonfiction shorts...
							</div>
						</div>
					</div>
				</div>

				<div className='dropdownInfo'>
					<span
						onMouseEnter={() => {
							this.dropdownShow("Info");
						}}
						onMouseLeave={() => {
							this.dropdownHide("Info");
						}}
					>
						Info
					</span>
					<div className='boxInfo' style={{ maxHeight: this.state.showInfo ? 500 : 0 }}>
						<div
							id='Info'
							onMouseEnter={() => {
								this.dropdownShow("Info");
							}}
							onMouseLeave={() => {
								this.dropdownHide("Info");
							}}
							className='aboutInfoText'
						>
							<div className='A1'>Where you can see more of me</div>
							<div className='A2'>
								Email: katrinakozorezov@gmail.com <br></br>
								linkedIn: https://www.linkedin.com/in/katxagora/<br></br>
								GitHub: https://github.com/KattAttack
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
