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
  ModalContent,
  Close,
  List,
  ListItem,
} from './style';

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
                    closeTimeout={200}
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
                        <ListItem>
                          - Helter-Shelter is a site supporting New Hampshire
                          animal shelters and rescue organizations. <br /><br />
                          - Embedded custom map with Leaflet.js. <br /><br />
                          - Collapsible data table generated with JavaScript.{' '}
                          <br /><br />
                          - Table is populated by looping through an array of
                          Objects then appending to display. <br /><br />
                          - Mobile-friendly design focused on CSS Flexbox. <br /><br />
                          - Bundled with Webpack, deployed using Netlify. <br /><br />
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[0].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[0].link}>
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[0].date}</ListItem>
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
                    portalClassName="activeModal"
                  >
                    <ModalContent>
                      <Close onClick={this.handleCloseModal}>X</Close>
                      <ModalHeader>{projectData[1].title}</ModalHeader>
                      <List>
                        <ListItem>
                          - An image gallery built with Bootstrap, showcasing high-res photographs of nebulae. <br /><br />
                          - Responsive content cards hold photos with their description underneath. <br /><br />
                          - Each nebula's image is a modal that pops out to full-screen. <br /><br />
                          - Use of media query breakpoints allows dynamic resizing of grid layout. <br />
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[1].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[1].link}>
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[1].date}</ListItem>
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
                        <ListItem>
                          - Timbuktu is a demo digital library centered around
                          ancient civilizations. <br /><br />
                          - Library holds Book title, author, format,
                          civilization. <br /><br />
                          - Objects constructed and pushed to the library
                          array. <br /><br />
                          - Skeleton CSS used to achieve a clean, responsive
                          design. <br /><br />
                          - LocalStorage methods save and
                          load library data to preserve state on page refresh. <br />
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[2].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[2].link}>
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[2].date}</ListItem>
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
                        <ListItem>
                          - Bravebear features three templates with different
                          color schemes. <br /><br />
                          - Built with React, more specifically
                          create-react-app. <br /><br />
                          - Each template is a standalone component exported
                          into the main App directory. <br /><br />
                          - React-router switches between pages without
                          reloading. <br /><br />
                          - Mobile-first design scales up to any device, page
                          layout built with CSS Grid. <br />
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[3].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[3].link}>
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[3].date}</ListItem>
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
                        <ListItem>
                          - Simple Budget application written in JavaScript.{' '}
                          <br /><br />
                          - User can input monthly income, create an expense
                          list and calculate available budget. <br /><br />
                          - Regular expressions are used to check all user
                          inputs for correct values. <br /><br />
                          - Runs boolean checks to validate the data passing
                          through regular expressions. <br /><br />
                          - LocalStorage data stringified/parsed with JSON. <br />
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[4].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[4].link}>
                            {' '}
                            Project Demo{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[4].date}</ListItem>
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
                        <ListItem>
                          - Exploring Web Scraping with Node. <br /><br />
                          - Retrieving data with Axios, Cheerio, Puppeteer,
                          Request. <br /><br />
                          - First scraper pulls results from the Minnesota High
                          School Hockey State Championships. <br /><br />
                          - Second scraper retrieves NHL game results and
                          current statistic leaders. <br /><br />
                          - Third scraper
                          gathers data on endangered and at-risk animal
                          populations.
                        </ListItem>
                        <ListItem>
                          {' '}
                          <a href={projectData[5].repo}>
                            {' '}
                            Visit Repository{' '}
                          </a>{' '}
                        </ListItem>
                        <ListItem>Date: {projectData[5].date}</ListItem>
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
