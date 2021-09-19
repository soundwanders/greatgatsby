import React from "react";
import { ProjectContainer, Wrapper, Grid, Card, Item } from "./style";

export const Projects = () => {
  return (
    <Wrapper>
      <ProjectContainer id="projects">
        <Grid>
          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632076451/shelter_tl9sz0.png"
                alt="Project Showcase - Helter Shelter"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632076450/bravebear_nb8z7d.png"
                alt="Project Showcase - BraveBear "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632077634/timbuktu_voqcel.png"
                alt="Project Showcase - Timbuktu"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632076452/nebula_eni8nd.png"
                alt="Project Showcase - Nebula "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1632076452/scraper_k5mu7q.png"
                alt="Project Showcase - Node Web Scraper"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632078290/budget_jtfcxa.png"
                alt="Project Showcase - Budget App"
              />
            </Item>
          </Card>
        </Grid>
      </ProjectContainer>
    </Wrapper>
  );
};
