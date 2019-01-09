import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CreateTeam from './CreateTeam';

class Creation extends Component {


    render() {
        return (

            <div className="tabs">
                <Tabs>
                    <TabList>
                        <Tab>Create a Team</Tab>
                        <Tab>Join a Team</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="crt">
                            <CreateTeam />
                        </div>    
                    </TabPanel>
                    <TabPanel>
                        <h2>Join a team</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Creation;