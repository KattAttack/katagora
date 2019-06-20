import React from "react";
import { Welcome } from "./Welcome";
import { About } from "./About";

export default function Router(props) {
	switch (props.page) {
		case "about":
			return <About />;

		case "welcome":
			return <Welcome />;

		default:
			return <Welcome />;
	}
}
