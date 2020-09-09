import React  from 'react';
import { Card, Text, Box, DataTable, Meter } from 'grommet';
import {Swift, Js, Reactjs, Node} from "grommet-icons";

class CardDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card background="light-1">
                <div class="card-details-container">
                    <div class="overlay">
                        <Card margin={"20px"}>
                            <DataTable
                                columns={[
                                    {
                                        property: 'name',
                                        header: <Text>Skill</Text>,
                                        primary: true,
                                    },
                                    {
                                        property: 'percent',
                                        header: 'Level',
                                        render: datum => (
                                            <Box pad={{ vertical: 'xsmall' }}>
                                                <Meter
                                                    values={[{ value: datum.percent }]}
                                                    thickness="small"
                                                    size="small"
                                                />
                                            </Box>
                                        ),
                                    },
                                ]}
                                data={[
                                    { name: 'Swift', percent: 80 },
                                    { name: 'Node', percent: 60 },
                                    { name: 'JavaScript', percent: 70 },
                                    { name: 'ReactJS', percent: 40 },
                                    { name: 'MongoDB', percent: 90 },
                                    { name: 'Docker', percent: 60 },
                                ]}
                            />
                        </Card>
                    </div>
                    <div>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div>
                        <img class="card-detail-image" src={this.props.image}/>
                    </div>
                </div>
            </Card>
        );
    }
}

export default CardDetails;