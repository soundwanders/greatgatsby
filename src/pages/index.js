import React from "react";
import { Layout, Seo } from "components/common";
import { HomePage, About, Projects } from "components/section";

const Home = () => (
	<Layout>
		<Seo />
		<HomePage />
		<About />
		<Projects />
	</Layout>
);

export default Home;