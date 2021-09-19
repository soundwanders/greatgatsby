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
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014306/shelter_wmcvcn.png"
                alt="Project Showcase - Helter Shelter"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014306/bravebear_zulfbt.png"
                alt="Project Showcase - BraveBear "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014308/timbuktu_bibr7m.png"
                alt="Project Showcase - Timbuktu"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014307/nebula_ph44fd.png"
                alt="Project Showcase - Nebula "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014306/budget_jgus3s.png"
                alt="Project Showcase - Budget App"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632014309/scraper_fxvs0w.png"
                alt="Project Showcase - Node Web Scraper"
              />
            </Item>
          </Card>
        </Grid>
      </Wrapper>
    </ProjectContainer>
  );
};
