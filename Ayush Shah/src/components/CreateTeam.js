import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import HackathonForm from './HackathonForm';
import ProjectForm from './ProjectForm';
class CreateTeam extends Component {

    // state={
    //     hname: '',
    //     hteamname: '',
    //     htlead:'',
    //     hnom:'',
    //     htd:'',
    //     hskills:'',
    //     pname: '',
    //     pteamname: '',
    //     ptlead:'',
    //     pnom:'',
    //     ptd:'',
    //     pskills:''
    // }

    // handleChange = input => e => {
    //     this.setState({ [input]: e.target.value })
    // };

    render() {

        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Create Hackathon Team</Tab>
                        <Tab>Create Project Team</Tab>
                    </TabList>

                    <TabPanel>
                        <HackathonForm />
                    </TabPanel>
                    <TabPanel>
                        <ProjectForm />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default CreateTeam;