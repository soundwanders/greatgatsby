import * as React from "react";
import { StyledLink } from "../components/common/styledLinks";;
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo/seo";

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects</h1>
    <p></p>

    <StyledLink to="/">Return Home</StyledLink>
  </Layout>
);

export default Projects