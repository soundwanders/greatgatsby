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
                          animal shelters and rescue organizations. <br />
                          - Embedded custom map with Leaflet.js. <br />
                          - Collapsible data table generated with JavaScript.{' '}
                          <br />
                          - Table populated by looping through an array of
                          Objects then appending to display. <br />
                          - Layout achieved with CSS Flexbox, focusing on a
                          mobile-friendly design. <br />- Bundled with Webpack.
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
                            Visit Project Demo{' '}
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
                          - An image gallery of nebulae, using content cards as
                          the display medium. - Built with Bootstrap. - Card
                          content containers, with a separate card for every
                          individual nebula. - Each nebula's image is a modal,
                          pops out to full screen when active. - Dynamic grid
                          layout changes at specified breakpoints for responsive
                          design.
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
                            Visit Project Demo{' '}
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
                          - Timbuktu is a demo digital library focused on
                          ancient civilizations. <br />
                          - Library holds Book title, author, format,
                          civilization. <br />
                          - Newly constructed Objects pushed to the library
                          array. <br />
                          - Skeleton CSS used to achieve a clean, responsive
                          design <br />- LocalStorage methods used to save and
                          retrieve library data.
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
                            Visit Project Demo{' '}
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
                          color schemes. <br />
                          - Built with React, more specifically
                          create-react-app. <br />
                          - Each template is a standalone component exported
                          into the app. <br />
                          - React-router switches between pages without
                          reloading. <br />- Mobile-first design that scales up,
                          layout uses CSS Grid.
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
                            Visit Project Demo{' '}
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
                          <br />
                          - User can input monthly income, create an expense
                          list and calculate available budget. <br />
                          - Expense name and cost combined into one variable
                          before appending to expense list. <br />
                          - Regular expressions are used to check all user
                          inputs for correct values. <br />
                          - Runs boolean checks to validate the data passing
                          through regular expressions. <br />- To retrieve
                          localStorage data, uses JSON to stringify and parse
                          the budget data.
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
                            Visit Project Demo{' '}
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
                          - Exploring Web Scraping with Node. <br />
                          - Crawling the web, exploring use of CSS selectors and
                          accessing APIs. <br />
                          - Scraping data with Axios, Cheerio, Puppeteer,
                          Request. <br />
                          - First scraper pulls results from Minnesota High
                          School Hockey State Championships. <br />
                          - Second scraper retrieves NHL game results and
                          current statistic leaders. <br />- Third scraper
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
