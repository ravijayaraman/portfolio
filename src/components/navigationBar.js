import {Anchor, Box, Heading, Image, Nav, Text} from "grommet";
import React from "react";

import avatar from "../img/main-avatar.svg";
import {Github, Linkedin} from "grommet-icons";

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
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
        );
    }
}

export default NavigationBar;