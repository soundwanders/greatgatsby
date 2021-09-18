import React from "react";
import { ProjectContainer, Wrapper, Grid, Card, Item } from "./style";

export const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Grid>
          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928934/timbuktu_tsceqf.png" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928934/shelter_v7fjfq.png" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928936/nebula1_yyonh0.png" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928933/bravebear_vzmfpk.png" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631928933/budget_uqi6fj.png" />
            </Item>
          </Card>

          <Card>
            <Item>
              <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631931920/scraper_emfzyq.png" />
            </Item>
          </Card>
        </Grid>
      </Wrapper>
    </ProjectContainer>
  );
};
