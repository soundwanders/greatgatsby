import React, { Component } from 'react';
import Modal from 'react-modal';
import {
  ProjectContainer,
  Wrapper,
  Grid,
  Card,
  Item,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  Close,
  List,
  ListItem,
} from './style';
import projectData from './projects.json';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleOpenModal: false,
      activeModal: '',
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(val) {
    this.setState({ activeModal: val });
    this.setState({ handleOpenModal: true });
  }

  handleCloseModal() {
    this.setState({ handleOpenModal: false });
    this.setState({ handleOpenModal: '' });
  }

  render() {
    return (
      <>
        <Wrapper>
          <ProjectContainer id="projects">
            <Grid>
              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('helter')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100132/2shelter_dy1pwr.png"
                      alt="Project Showcase - Helter Shelter"
                      aria-label="Helter Shelter screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'helter'
                    }
                    contentLabel="Helter Shelter Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[0].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[0].content}</ListItem>
                        <ListItem>{projectData[0].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('nebula')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101037/2nebula_p6uq1n.png"
                      alt="Project Showcase - Nebula"
                      aria-label="Nebula screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'nebula'
                    }
                    contentLabel="Nebula Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[1].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[1].content}</ListItem>
                        <ListItem>{projectData[1].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('timbuktu')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2timbuktu_xthppi.png"
                      alt="Project Showcase - Timbuktu"
                      aria-label="Timbuktu screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>
                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'timbuktu'
                    }
                    contentLabel="Timbuktu Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[2].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[2].content}</ListItem>
                        <ListItem>{projectData[2].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('bravebear')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100133/2bravebear_gnod6e.png"
                      alt="Project Showcase - BraveBear"
                      aria-label="BraveBear screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'bravebear'
                    }
                    contentLabel="BraveBear Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[3].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[3].content}</ListItem>
                        <ListItem>{projectData[3].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('budget')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632706808/2budget_xwrumq.png"
                      alt="Project Showcase - Budget App"
                      aria-label="Budget screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>
                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'budget'
                    }
                    contentLabel="Budget Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[4].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[4].content}</ListItem>
                        <ListItem>{projectData[4].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('scraper')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101036/2scraper_ce8h56.png"
                      alt="Project Showcase - Node Web Scraper"
                      aria-label="Node Scraper screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'scraper'
                    }
                    contentLabel="Node Scraper Modal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[5].title}</ModalHeader>
                      <List>
                        <ListItem>{projectData[5].content}</ListItem>
                        <ListItem>{projectData[5].link}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>
            </Grid>
          </ProjectContainer>
        </Wrapper>
      </>
    );
  }
}
