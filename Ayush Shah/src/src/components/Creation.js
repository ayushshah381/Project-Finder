import React, { Component } from 'react';
import '../css/buddy.css';
import '../css/buddy.css.map';
import '../js/buddy';
import '../js/buddy.js.map';
import CreateTeam from './CreateTeam';
import JoinTeam from './JoinTeam';

class Creation extends Component {
    render() {
        return (
            <div>
                <div class="tabs-wrapper" id="tabsWrapper">
                    <ul role="tablist" class="tabs" arial-label="tabs-description">
                        <li>
                            <button role="tab" aria-selected="true" aria-controls="tab-1">Create A Team</button>
                            <div tabindex="0" role="tabpanel" id="tab-1" aria-labelledby="tab-1" tabindex="0">
                                <CreateTeam />
                            </div>
                        </li>
                        <li>
                            <button role="tab" aria-selected="false" aria-controls="tab-2">Join A Team</button>
                            <div tabindex="0" role="tabpanel" id="tab-2" aria-labelledby="tab-2" tabindex="0" hidden="">
                                <JoinTeam />
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Creation;