import React, { Component } from 'react';

class ProjectForm extends Component {
    render() {
        return (
            <div className="pform">
                <form>
                    <div className="pformlab">
                        <label htmlFor="pname">Project name:</label>
                        <br />
                        <br />
                        <label htmlFor="ptname">Team name:</label>
                        <br />
                        <br />
                        <label htmlFor="ptlead">Team leader:</label>
                        <br />
                        <br />
                        <label htmlFor="pnom">Number of members:</label>
                        <br />
                        <br />
                        <label htmlFor="ptdesc">Team description:</label>
                        <br />
                        <br />
                        <label htmlFor="pskills">Skills you're looking for:</label>
                        <br />
                        <br />
                    </div>
                    <div className="pforminp">
                        <input type="text" id="pname"></input>
                        <br />
                        <br />
                        <input type="text" id="ptname"></input>
                        <br />
                        <br />
                        <input type="text" id="ptlead"></input>
                        <br />
                        <br />
                        <input type="text" id="pnom"></input>
                         <br />
                        <br />
                        <input type="text" id="ptdesc"> 
                        </input>
                        <br />
                        <br />
                        <input type="text" id="pskills"></input>
                        <br />
                        <br />
                    </div>
                
                    <button type="submit">Create Team</button>
                </form>
            </div>
        );
    }
}

export default ProjectForm;