import React from "react";
import { Seo, StyledLink } from "components/common";
import { ProjectContainer, Grid } from "./style";

export const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <Grid>
        <Seo title="Projects" />
        <h1>Projects</h1>
        <p> These are my proyjectoooos</p>

        <StyledLink to="/">Return Home</StyledLink>
      </Grid>
    </ProjectContainer>
  );
};
