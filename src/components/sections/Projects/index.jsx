import React from "react";
import { ProjectContainer, Wrapper, Grid, Card, Item } from "./style";

export const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Grid>
          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012483/shelter_otzjek.png"
                alt="Project Showcase - Helter Shelter"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012483/bravebear_ydbvd9.png"
                alt="Project Showcase - BraveBear "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012914/timbuktu_xwhqig.png"
                alt="Project Showcase - Timbuktu"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012483/nebula_hnyslu.png"
                alt="Project Showcase - Nebula "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012481/budget_ytthnr.png"
                alt="Project Showcase - Budget App"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632012484/scraper_ubqnj3.png"
                alt="Project Showcase - Node Web Scraper"
              />
            </Item>
          </Card>
        </Grid>
      </Wrapper>
    </ProjectContainer>
  );
};
