import React, { Component } from 'react';

class HackathonForm extends Component {
    render() {
        return (
            <div className="hform">
                <form>
                    <div className="hformlab">
                        <label htmlFor="name">Hackathon name:</label>
                        <br />
                        <br />
                        <label htmlFor="tname">Team name:</label>
                        <br />
                        <br />
                        <label htmlFor="tlead">Team leader:</label>
                        <br />
                        <br />
                        <label htmlFor="nom">Number of members:</label>
                        <br />
                        <br />
                        <label htmlFor="tdesc">Team description:</label>
                        <br />
                        <br />
                        
                        <label htmlFor="skills">Skills you're looking for:</label>
                        <br />
                        <br />
                    </div>
                    <div className="hforminp">
                        <input type="text" id="name"></input>
                        <br />
                        <br />
                        <input type="text" id="tname"></input>
                        <br />
                        <br />
                        <input type="text" id="tlead"></input>
                        <br />
                        <br />
                        <input type="text" id="nom"></input>    
                        <br />
                        <br />
                        <input type="text" id="tdesc"> 
                        </input>
                        <br />
                        <br />
                        <input type="text" id="skills"></input>
                        <br />
                        <br />
                    </div>
                
                    <button type="submit">Create Team</button>
                </form>
            </div>
        );
    }
}

export default HackathonForm;