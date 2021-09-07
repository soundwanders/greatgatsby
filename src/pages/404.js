import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { StyledLink } from "../components/common/styledlinks"
import { StaticImage } from "gatsby-plugin-image"

const Container404 = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H404 = styled.h2`
  display: inherit;
  font-size: 3em;
  padding: 1rem 0;
`

const ErrorText = styled.p`
  font-size: 1.5em;
  display: inherit;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
`

const GoHome = styled.p`
  font-size: 1.5em;
  text-align: center;
  padding: 1rem 0;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Not Found" />
    <Container404>
        <H404>&#129306; 404: Not Found</H404>
        <ErrorText>You just hit a route that doesn&#39;t exist </ErrorText>

        <StaticImage
          src="../images/lost404.png"
          width={535}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Lost in Space"
          style={{ marginBottom: `1.45rem`, borderRadius: `1rem`}}
        />

        <GoHome>
          <StyledLink to="/">Lost? Return Home!</StyledLink>
        </GoHome>
    </Container404>
  </Layout>
)

export default NotFoundPage

