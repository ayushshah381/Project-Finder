import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
import '../css/buddy.css';
import '../css/buddy.css.map';
import '../js/buddy';
import '../js/buddy.js.map';
import HackathonForm from './HackathonForm';
import ProjectForm from './ProjectForm';

class CreateTeam extends Component {

    state = {
        hname: '',
        hteamname: '',
        htlead: '',
        hnom: '',
        htd: '',
        hskills: '',
        pname: '',
        pteamname: '',
        ptlead: '',
        pnom: '',
        ptd: '',
        pskills: ''
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {

        const { hname, hteamname, htlead, hnom, htd, hskills, pname, pteamname, ptlead, pnom, ptd, pskills } = this.state;
        const values = { hname, hteamname, htlead, hnom, htd, hskills, pname, pteamname, ptlead, pnom, ptd, pskills };

        return (
            <div>
                <div class="tabs-wrapper" id="tabsWrapper">
                    <ul role="tablist" class="tabs" arial-label="tabs-description">
                        <li>
                            <button role="tab" aria-selected="true" aria-controls="tab-1">Create Hackathon Team</button>
                            <div tabindex="0" role="tabpanel" id="tab-1" aria-labelledby="tab-1" tabindex="0">
                                <HackathonForm 
                                    values={values}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </li>
                        <li>
                            <button role="tab" aria-selected="false" aria-controls="tab-2">Create Project Team</button>
                            <div tabindex="0" role="tabpanel" id="tab-2" aria-labelledby="tab-2" tabindex="0" hidden="">
                                <ProjectForm 
                                    values={values}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default CreateTeam;