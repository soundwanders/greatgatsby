import React from "react";
import { Seo, StyledLink } from "components/common";
import { Grid } from "./style";

export const Projects = () => {
  return (
    <Grid>
      <Seo title="Projects" />
      <h1>Projects</h1>
      <p> These are my proyjectoooos</p>

      <StyledLink to="/">Return Home</StyledLink>
    </Grid>
  )
};
