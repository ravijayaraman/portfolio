import React from 'react';
import { Grommet, Nav, Footer, Grid, Anchor, Box, Text, Heading, Avatar, Card, CardHeader, CardBody, Image, Button } from 'grommet';
import { Linkedin, Github } from 'grommet-icons';
import avatar from './img/main-avatar.svg';
import skills from './img/skills.png';
import goals from './img/career-goals.png';
import past_exp from './img/past-exp.png';
import current_proj from './img/current-projects.png'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
      <Grommet theme={theme}>
          <Nav direction="row" background="status-warning" pad="medium" justify={"between"}>
              <Box direction="row" justify="start" align="center" gap="medium">
                  <Image size="xlarge" src={avatar} />
                  <Box direction={"column"} pad={"medium"} margin={"medium"}>
                      <Heading>Ravi Jayaraman</Heading>
                      <Text>I'm an aspiring web designer portraying my story through illustrations. Currently living and working in Sydney, Australia. Explore more about me through my website and get in touch with me</Text>
                  </Box>
              </Box>
              <Box justify="end" direction="row">
                  <Anchor icon={<Linkedin size='xlarge' />} href="https://www.linkedin.com/in/ravi-jayaraman-527b2183/" target="_blank" hoverIndicator color={"dark-1"}/>
                  <Anchor icon={<Github size='xlarge' />} href="https://github.com/ravijayaraman" target="_blank" hoverIndicator color={"dark-1"}/>
              </Box>
          </Nav>
          <Grid margin="20px">
              <Box direction={"row-responsive"} height={"medium"} gap={"medium"} justify={"center"}>
                  <Card background="light-1">
                      <CardHeader pad="medium"><h2>Skills</h2></CardHeader>
                      <CardBody pad="medium">
                          <Image fit={"contain"} src={skills} />
                      </CardBody>
                  </Card>
                  <Card background="light-1">
                      <CardHeader pad="medium"><h2>Career Goals</h2></CardHeader>
                      <CardBody pad="medium">
                          <Image fit={"contain"} src={goals}/>
                      </CardBody>
                  </Card>
                  <Card background="light-1">
                      <CardHeader pad="medium"><h2>Past Experience</h2></CardHeader>
                      <CardBody pad="medium">
                          <Image fit={"contain"} src={past_exp}/>
                      </CardBody>
                  </Card>
                  <Card background="light-1">
                      <CardHeader pad="medium"><h2>Current Projects</h2></CardHeader>
                      <CardBody pad="medium">
                          <Image fit={"contain"} src={current_proj}/>
                      </CardBody>
                  </Card>
              </Box>
          </Grid>
          <Footer background="status-warning" pad="small">
              <h3>Copyright © Ravi Jayaraman</h3>
          </Footer>
      </Grommet>
);
}

export default App;
