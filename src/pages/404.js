import React from "react";
import { Layout, StyledLink, Seo } from "components/common";
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  display: inherit;
  font-size: 3em;
  padding: 1rem 0;
`

export const ErrorText = styled.p`
  font-size: 1.5em;
  display: inherit;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
`

export const GoHome = styled.p`
  font-size: 1.5em;
  text-align: center;
  padding: 1rem 0;
`

const PageNotFound = () => (
  <Layout>
    <Seo title="404 Not Found" />
    <Container>
        <Title>&#129306; 404: Not Found</Title>
    
        <ErrorText>Sorry, page cannot be found. It may be lost in space...</ErrorText>

        <StaticImage
        src="../assets/lost.png"
        width={535}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Lost in Space"
        style={{ marginBottom: `1.45rem`, borderRadius: `1rem`}}
        />

        <GoHome>
        <StyledLink to="/">Lost? Return Home!</StyledLink>
        </GoHome>
    </Container>
  </Layout>
);

export default PageNotFound;
