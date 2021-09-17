import React from "react";
import { SkillsContainer, Grid, Logo, ScaledLogo } from "./style";

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Grid>
        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/html_firld2.png"
          alt="HTML Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631495732/css_qxcsvd.png"
          alt="CSS Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493153/js_poxgqr.png"
          alt="JavaScript Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/rjs_r5on17.png"
          alt="React Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/bootstrap_enizh3.png"
          alt="Bootstrap Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/gb_hya3og.png"
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
