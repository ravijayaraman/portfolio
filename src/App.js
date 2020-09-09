import React from 'react';
import { Grommet, Nav, Footer, Grid, Anchor, Box, Text, Heading, Avatar, Card, CardHeader, CardBody, Image, Button } from 'grommet';
import avatar from './img/main-avatar.svg';
import skills from './img/skills.png';
import goals from './img/career-goals.png';
import past_exp from './img/past-exp.png';
import current_proj from './img/current-projects.png'

import CardDetails from './components/cardDetails';
import NavigationBar from "./components/navigationBar";

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
          <NavigationBar />
          <Box class="box-container" direction={"row"} height={"medium"} gap={"medium"} justify={"center"} margin={"medium"}>
              <CardDetails title={"Skills"} image={skills} />
              <CardDetails title={"Career Goals"} image={goals} />
              <CardDetails title={"Past Experience"} image={past_exp} />
              <CardDetails title={"Current Projects"} image={current_proj} />
          </Box>
          <Footer background="status-warning" pad="small">
              <h3>Copyright © Ravi Jayaraman</h3>
          </Footer>
      </Grommet>
);
}

export default App;
