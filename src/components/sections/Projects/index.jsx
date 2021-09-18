import React from "react";
import { ProjectContainer, Wrapper, Grid, Card, Item } from "./style";

export const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Grid>
          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981116/shelter_ivalyk.png" alt="Project Showcase - Helter Shelter" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981115/bravebear_qbgu0s.png" alt="Project Showcase - BraveBear " />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981115/timbuktu_yxicpf.png" alt="Project Showcase - Timbuktu" />
            </Item>
          </Card>
          
          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981119/nebula1_prk6ux.png" alt="Project Showcase - Nebula " />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981116/budget_rlsxfs.png" alt="Project Showcase - Budget App" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631981118/scraper_wfl74j.png" alt="Project Showcase - Node Web Scraper" />
            </Item>
          </Card>
        </Grid>
      </Wrapper>
    </ProjectContainer>
  );
};
