import React, { Component } from 'react';
import { ProjectContainer, Wrapper, Grid, Card, Item, ModalButton } from './style';
import { Modal } from 'components/common';

export class Projects extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Wrapper>
        <ProjectContainer id="projects">
          <Grid>
            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalButton type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100132/2shelter_dy1pwr.png"
                    alt="Project Showcase - Helter Shelter"
                  />
                </ModalButton>
              </Item>
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
  }
}