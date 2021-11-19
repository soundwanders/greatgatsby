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
                      <ModalHeader>{projectData[0].title}</ModalHeader>
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
                          Embedded custom map containing shelter locations,
                          built with Leaflet.js.
                        </Info>
                        <Info>
                          Collapsible data table is an array of objects
                          generated with JavaScript.{' '}
                        </Info>
                        <Info>
                          CSS Flexbox &amp; Grid used to achieve a fluid layout.
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
                      <ModalHeader>{projectData[1].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          An image gallery built with Bootstrap, showcasing
                          high-res photographs of nebulae.
                        </Info>
                        <Info>
                          Responsive content cards hold photos with their
                          description underneath.
                        </Info>
                        <Info>
                          Each nebula's image is a modal that pops out to
                          full-screen.
                        </Info>
                        <Info>
                          Use of media query breakpoints allows dynamic resizing
                          of grid layout.
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
                      <ModalHeader>{projectData[2].title}</ModalHeader>
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
                          Library holds Book title, author, format,
                          civilization.
                        </Info>

                        <Info>
                          Skeleton CSS used to achieve a clean, responsive
                          design.
                        </Info>

                        <Info>
                          LocalStorage methods saves &amp; loads data to
                          preserve state on page refresh.
                        </Info>

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
                      <ModalHeader>{projectData[3].title}</ModalHeader>
                      <Swatch
                        src="https://res.cloudinary.com/cloudwanders/image/upload/v1635202021/gradient_yv70qf.png"
                        alt="Gradient underline"
                        aria-hidden="true"
                        draggable="false"
                      />

                      <List>
                        <Info>
                          Brave Bear features multiple layouts built with React.
                        </Info>
                        <Info>
                          Each template is a React component with its own path.
                        </Info>
                        <Info>
                          React-router used to switch between pages without
                          reloading content.
                        </Info>
                        <Info>
                          Mobile-first design that scales up to desktop.
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
                      <ModalHeader>{projectData[4].title}</ModalHeader>
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
                          User can input monthly income, create an expense list
                          and calculate a spending budget.
                        </Info>
                        <Info>
                          Regular expression checks are used to validate all
                          user inputs.
                        </Info>
                        <Info>
                          Strings are reformatted and converted to numbers to
                          enable Math calculations.
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
                    onClick={() => this.handleOpenModal('scraper')}
                  >
                    <img
                      src="https://res.cloudinary.com/cloudwanders/image/upload/v1632101036/2scraper_ce8h56.png"
                      alt="Project Showcase -- Node Scraper"
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
                          Exploring Web Scraping with Node, Axios, Cheerio,
                          Puppeteer.
                        </Info>
                        <Info>
                          View the winners &amp; runner-ups of the Minnesota
                          High School State Hockey Championship.
                        </Info>
                        <Info>
                          Browse NHL's statistic leaders or display the results
                          of recent NHL games.
                        </Info>
                        <Info>
                          Fetch a list of endangered species and their
                          conservation status.
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
                        <ListItem>Runs in Terminal, No Live Demo</ListItem>
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
