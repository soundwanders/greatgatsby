import React from "react";
import { SkillsContainer, Grid, Logo, ScaledLogo } from "./style";

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Grid>
        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/html_wrecgz.png"
          alt="HTML Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/css_ggrq5d.png"
          alt="CSS Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075359/js_jecjpz.png"
          alt="JavaScript Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/rjs_h2l79p.png"
          alt="React Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/bootstrap_bhw6mi.png"
          alt="Bootstrap Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632074664/gb_lmhmjm.svg"
          alt="Gatsby Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/linux_pyqt33.svg"
          alt="Linux Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/git_cskckl.svg"
          alt="Git Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/npm_c7fgg7.svg"
          alt="Npm Logo"
        />
      </Grid>
    </SkillsContainer>
  );
};
