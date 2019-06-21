import React from "react";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Portfolio } from "./Portfolio";

export default function Router(props) {
	switch (props.page) {
		case "about":
			return <About />;

		case "portfolio":
			return <Portfolio />;

		case "welcome":
			return <Welcome />;

		default:
			return <Welcome />;
	}
}
