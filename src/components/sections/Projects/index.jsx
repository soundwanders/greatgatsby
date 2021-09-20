import React, { useState } from 'react';
import {
  ProjectContainer,
  Wrapper,
  Grid,
  Card,
  Item,
  ModalContainer,
  ModalButton,
} from './style';
import './style.css';
import { Modal } from './Modal';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      <ProjectContainer id="projects">
        <Grid>
          <Card>
            <ModalContainer>
              <Item>
                <img
                  src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100132/2shelter_dy1pwr.png"
                  alt="Project Showcase - Helter Shelter"
                />
                <ModalButton onClick={openModal}>Open Modal</ModalButton>
                {showModal ? <Modal setShowModal={setShowModal} /> : null}
              </Item>
            </ModalContainer>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101037/2nebula_p6uq1n.png"
                alt="Project Showcase - Nebula "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2bravebear_gnod6e.png"
                alt="Project Showcase - BraveBear "
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2timbuktu_xthppi.png"
                alt="Project Showcase - Timbuktu"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101036/2scraper_ce8h56.png"
                alt="Project Showcase - Node Web Scraper"
              />
            </Item>
          </Card>

          <Card>
            <Item>
              <img
                src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2budget_smu70d.png"
                alt="Project Showcase - Budget App"
              />
            </Item>
          </Card>
        </Grid>
      </ProjectContainer>
    </Wrapper>
  );
};
