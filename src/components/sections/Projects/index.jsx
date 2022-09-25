import React, { Component } from 'react';
import Modal from 'react-modal';
import './index.css';
import projectData from './projects.json';
import {
  ProjectContainer,
  Wrapper,
  Grid,
  Card,
  Item,
  ModalWrapper,
  ModalHeader,
  Swatch,
  ModalContent,
  Close,
  List,
  ListItem,
  Info,
} from './style';

Modal.setAppElement('#___gatsby');

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleOpenModal: false,
      activeModal: '',
      _isMounted: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    this._isMounted = true;
  }

  handleOpenModal(val) {
    this.setState({ activeModal: val });
    this.setState({ handleOpenModal: true });
    Modal.setAppElement('#___gatsby');
  }

  handleCloseModal() {
    this.setState({ handleOpenModal: false });
    this.setState({ handleOpenModal: '' });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
                    aria-label="Coral Dashboard screenshot"
                    onClick={() => this.handleOpenModal('coral')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1664139976/coral_gd6xu3.png"
                      alt="Project Showcase -- Coral Dashboard"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'coral'
                    }
                    contentLabel="Coral Modal"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[0].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Coral Dashboard is a React application beautified with
                          styled-components.
                        </Info>
                        <Info>
                          Mock json database holds client data that is used to
                          populate page content.
                        </Info>
                        <Info>
                          Utilizes ES6 array methods map, filter, reduce,
                          manipulating fetched data to eliminate redundant code.
                        </Info>
                        <Info>
                          Flexbox-based responsive design with a modified UI for
                          mobile devices.
                        </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[0].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[0].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[0].date}</ListItem>
                      </List>
                    </ModalContent>
                  </Modal>
                </Item>
              </Card>

              <Card>
                <Item>
                  <ModalWrapper
                    type="button"
                    onClick={() => this.handleOpenModal('helter')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632100132/2shelter_dy1pwr.png"
                      alt="Project Showcase -- Helter Shelter"
                      aria-label="Helter Shelter screenshot"
                      draggable="false"
                    />
                  </ModalWrapper>

                  <Modal
                    closeTimeout={200}
                    isOpen={
                      this.state.handleOpenModal &&
                      this.state.activeModal === 'helter'
                    }
                    contentLabel="Helter Shelter Modal"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[1].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Helter-Shelter supports New Hampshire animal shelters
                          &amp; rescue organizations.
                        </Info>
                        <Info>
                          Embedded custom interactive map containing shelter locations,
                          built with Leaflet.js.
                        </Info>
                        <Info>
                          Collapsible data table is an array of objects
                          generated from JSON data.{' '}
                        </Info>
                        <Info>
                          CSS Flexbox &amp; Grid combined to achieve a fluid
                          layout suitable for all devices.
                        </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[1].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[1].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[1].date}</ListItem>
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
                      alt="Project Showcase -- Nebula"
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
                    portalClassName="activeModal"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[2].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          An image gallery built to demo Bootstrap, showcasing
                          high-res photographs of nebulae.
                        </Info>
                        <Info>
                          Responsive content cards hold photos with their
                          description underneath.
                        </Info>
                        <Info>
                          Each nebula's image is a modal that renders as a
                          full-screen image on click.
                        </Info>
                        <Info>
                          Use of common media query breakpoints creates a
                          dynamic, adaptable grid layout. </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[2].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[2].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[2].date}</ListItem>
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
                      alt="Project Showcase -- Timbuktu"
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
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[3].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Timbuktu is a demo digital library centered around
                          ancient civilizations.
                        </Info>

                        <Info>
                          Library holds constructed Object 'Book' with
                          properties for title, author, media and civilization.
                        </Info>

                        <Info>
                          Skeleton CSS framework used to achieve fast load times
                          with a clean, responsive design.
                        </Info>

                        <Info>
                          LocalStorage methods saves &amp; loads data to
                          preserve state on page refresh.
                        </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[3].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[3].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[3].date}</ListItem>
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
                      alt="Project Showcase -- BraveBear"
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
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[4].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Brave Bear features multiple layouts built with React,
                          exploring a component-based build.
                        </Info>
                        <Info>
                          Each template is a React component that serves as a
                          Route to its path.
                        </Info>
                        <Info>
                          React-router used to switch between pages without
                          reloading content. No need for repeated HTTP requests.
                        </Info>
                        <Info>
                          Mobile-first design that scales up to desktop.
                        </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[4].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[4].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[4].date}</ListItem>
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
                      alt="Project Showcase -- Simple Budget"
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
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        background: '#f9f9f9',
                        border: '1px solid #dbdbdb',
                        borderRadius: '12px',
                        boxShadow: '0px 10px 13px -12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[5].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Simple Budget application built with vanilla
                          JavaScript.{' '}
                        </Info>
                        <Info>
                          User inputs monthly income, creates an expense list
                          and calculates budget.
                        </Info>
                        <Info>
                          Regular expression checks used to validate all user
                          inputs.
                        </Info>
                        <Info>
                          Strings are reformatted and converted to numbers to
                          enable Math calculations.
                        </Info>

                        <ListItem>
                          {' '}
                          <a
                            href={projectData[5].repo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a
                            href={projectData[5].link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>{projectData[5].date}</ListItem>
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
