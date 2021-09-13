import React from "react";
import { Layout, Seo } from "components/common";
import { HomePage, Projects, About, Contact, Skills } from "components/section";

const Home = () => (
  <Layout>
    <Seo />
    <HomePage />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);

export default Home;
