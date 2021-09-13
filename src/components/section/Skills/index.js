import React from "react";
import { Seo } from "components/common";
import { SkillsContainer, Title, Grid, Logo } from "./style";

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Seo title="Skills" />
      <Title>Skills</Title>

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

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/bootstrap_enizh3.png"
          alt="Bootstrap Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/rjs_r5on17.png"
          alt="React Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631493152/gb_hya3og.png"
          alt="Gatsby Logo"
        />
      </Grid>
    </SkillsContainer>
  );
};
