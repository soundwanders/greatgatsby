import React from "react";
import { ProjectContainer, Wrapper, Grid, Card, Item } from "./style";

export const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Grid>
          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928934/timbuktu_tsceqf.png" alt="Project Showcase - Timbuktu" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928934/shelter_v7fjfq.png" alt="Project Showcase - Helter Shelter" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928936/nebula1_yyonh0.png" alt="Project Showcase - Nebula " />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928933/bravebear_vzmfpk.png" alt="Project Showcase - BraveBear " />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928933/budget_uqi6fj.png" alt="Project Showcase - Budget App" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631931920/scraper_emfzyq.png" alt="Project Showcase - Node Web Scraper" />
            </Item>
          </Card>
        </Grid>
      </Wrapper>
    </ProjectContainer>
  );
};
