import React, { Component } from 'react';
import {
  ProjectContainer,
  Wrapper,
  Grid,
  Card,
  Item,
  ModalWrapper,
} from './style';
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
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100132/2shelter_dy1pwr.png"
                    alt="Project Showcase - Helter Shelter"
                    aria-label="Helter Shelter screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>

            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101037/2nebula_p6uq1n.png"
                    alt="Project Showcase - Nebula"
                    aria-label="Nebula screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>

            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2timbuktu_xthppi.png"
                    alt="Project Showcase - Timbuktu"
                    aria-label="Timbuktu screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>

            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2bravebear_gnod6e.png"
                    alt="Project Showcase - BraveBear"
                    aria-label="BraveBear screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>

            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632706808/2budget_xwrumq.png"
                    alt="Project Showcase - Budget App"
                    aria-label="Budget screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>

            <Card>
              <Item>
                <Modal
                  show={this.state.show}
                  handleClose={this.hideModal}
                ></Modal>
                <ModalWrapper type="button" onClick={this.showModal}>
                  <img
                    src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101036/2scraper_ce8h56.png"
                    alt="Project Showcase - Node Web Scraper"
                    aria-label="Node Scraper screenshot"
                  />
                </ModalWrapper>
              </Item>
            </Card>
          </Grid>
        </ProjectContainer>
      </Wrapper>
    );
  }
}
