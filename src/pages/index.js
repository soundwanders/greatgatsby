import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-color: #ebeaed;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg 
  fill-rule='evenodd'%3E%3Cg fill='%2300557e' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 
  0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  overflow-x: hidden;
`

const User = styled.h2`
  display: inherit;
  margin: 0 0 0.5em 0;
  padding: 0;
  font-size: 5vmax;
`

const Subtitle = styled.p`
  display: inherit;
  max-width: 100;
  justify-content: center;
  font-size: 2em;
`

const Pages = styled.p`
  display: inherit;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
`

const StyledLink = styled(props => <Link {...props}/>)`
  color: #deepslateblue;
  text-decoration: none;
  padding: 0 2rem;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <User>Jared Coletta</User>
      <Subtitle>Web Developer</Subtitle>

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <Pages>
        <StyledLink to="/projects/">Projects</StyledLink> <br />
        <StyledLink to="/using-typescript/">Go to "Using TypeScript"</StyledLink>
      </Pages>
    </Container>
  </Layout>
)

export default IndexPage
