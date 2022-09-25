import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { SkillsContainer, Grid, Logo, ScaledLogo } from './style';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SkillsContainer id="skills" theme={theme}>
      <Grid>
        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/html_wrecgz.png"
          alt="HTML Logo"
          aria-label="HTML Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/css_ggrq5d.png"
          alt="CSS Logo"
          aria-label="CSS Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075359/js_jecjpz.png"
          alt="JavaScript Logo"
          aria-label="JavaScript Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/rjs_h2l79p.png"
          alt="React Logo"
          aria-label="React Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1684109189/styled-components_pbfgrj.png"
          alt="Styled Components Logo"
          aria-label="Styled Components Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632080285/gb_tzlwo0.png"
          alt="Gatsby Logo"
          aria-label="Gatsby Logo"
        />

      {/* 
        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/linux_pyqt33.svg"
          alt="Linux Logo"
          aria-label="Linux Logo"
        />

        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/git_cskckl.svg"
          alt="Git Logo"
          aria-label="Git Logo"
        />

        <Logo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632075358/bootstrap_bhw6mi.png"
          alt="Bootstrap Logo"
          aria-label="Bootstrap Logo"
        />
        
        <ScaledLogo
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631672260/npm_c7fgg7.svg"
          alt="npm Logo"
          aria-label="npm Logo"
        /> 
      */}
      </Grid>
    </SkillsContainer>
  );
};
