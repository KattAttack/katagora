import React from "react";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Tictactoe } from "./Tictactoe";

export default function Router(props) {
	switch (props.page) {
		case "about":
			return <About />;

		case "portfolio":
			return <Portfolio />;

		case "welcome":
			return <Welcome />;

		case "tictactoe":
			return <Tictactoe />;

		default:
			return <Welcome />;
	}
}
