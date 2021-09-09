import React from "react";
import { Seo, StyledLink } from "components/common";
import { Grid } from "./style";

const Projects = () => (
  <Grid>
    <Seo title="Projects" />
    <h1>Projects</h1>
    <p> These are my proyjectoooooooos</p>

    <StyledLink to="/">Return Home</StyledLink>
  </Grid>
);

export default Projects;