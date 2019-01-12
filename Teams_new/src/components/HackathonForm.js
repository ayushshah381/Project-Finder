import React, { Component } from 'react';
import '../css/buddy.css';
import '../css/buddy.css.map';
import '../js/buddy';
import '../js/buddy.js.map';

class HackathonForm extends Component {
    render() {
        console.log(this.props.values);
        return (
            <div className="hform">
                <form>
                    <div className="hformlab">
                        <label htmlFor="name">Hackathon name:</label>
                        <br />
                        
                        <label htmlFor="tname">Team name:</label>
                        <br />
                        <label htmlFor="tlead">Team leader:</label>
                        <br />
                        <label htmlFor="nom">Number of members:</label>
                        <br />
                        <label htmlFor="tdesc">Team description:</label>
                        <br />
                        <label htmlFor="skills">Skills you're looking for:</label>
                        <br />
                    </div>
                    <div className="hforminp">
                        <div className="imput">
                            <input type="text" id="name" onChange={this.props.handleChange('hname')}></input>
                            <input type="text" id="tname" onChange={this.props.handleChange('hteamname')} ></input>
                            <input type="text" id="tlead" onChange={this.props.handleChange('htlead')}></input>
                            <br />
                            <input type="text" id="nom" onChange={this.props.handleChange('hnom')}></input>    
                            <br />
                            <input type="text" id="tdesc" onChange={this.props.handleChange('htd')}> 
                            </input>
                            <input type="text" id="skills" onChange={this.props.handleChange('hskills')}></input>
                            
                        </div>    
                    </div>
                
                    <button type="submit">Create Team</button>
                </form>
            </div>
        );
    }
}

export default HackathonForm;