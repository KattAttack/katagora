import React from "react";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { ShapesGame } from "./shapes/src/components/ShapesGame";
import { Tictactoe } from "./Tictactoe";
import { KittyCards } from "./kittyCards/index";

export default function Router(props) {
	switch (props.page) {
		case "welcome":
			return <Welcome />;

		case "about":
			return <About />;

		case "portfolio":
			return <Portfolio />;

		case "shapes":
			return <ShapesGame />;

		case "tictactoe":
			return <Tictactoe />;

		case "kittyCards":
			return <KittyCards />;

		default:
			return <Welcome />;
	}
}
