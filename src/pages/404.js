import React from 'react';
import { StyledLink, Seo } from 'components/common';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Container,
  Title,
  ErrorText,
  GoHome,
} from 'components/sections/style-404';

const PageNotFound = () => (
  <Container>
    <Seo title="404 Not Found" />
    <Title>&#129306; 404: Not Found</Title>

    <ErrorText>
      Sorry, page cannot be found. It may be lost in space...
    </ErrorText>

    <StaticImage
      src="../assets/lost.png"
      width={535}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Lost in Space"
      style={{ marginBottom: `1.45rem`, borderRadius: `1rem` }}
    />

    <GoHome>
      <StyledLink to="/">Let's Go Home</StyledLink>
    </GoHome>
  </Container>
);

export default PageNotFound;
