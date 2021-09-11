import React from "react";
import { Layout, Seo } from "components/common";
import { HomePage, AboutPage, Projects } from "components/content";

const Home = () => (
	<Layout>
		<Seo />
		<HomePage />
	</Layout>
);

export default Home;