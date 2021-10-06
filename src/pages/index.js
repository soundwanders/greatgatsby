import React from 'react';
import { Layout, Seo } from 'components/common';
import {
  HomePage,
  Projects,
  About,
  Contact,
  Skills,
} from 'components/sections';

const Home = () => (
  <Layout>
    <Seo />
    <HomePage />
    <About />
    <Projects />
    <Contact />
    <Skills />
  </Layout>
);

export default Home;
