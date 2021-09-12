import React from "react";
import { Layout, Seo } from "components/common";
import { HomePage, Projects, About, Contact } from "components/section";

const Home = () => (
  <Layout>
    <Seo />
    <HomePage />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default Home;
