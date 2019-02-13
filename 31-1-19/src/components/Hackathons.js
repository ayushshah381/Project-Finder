import React, { Component } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
// import "../css/styles.css";
class Hackathons extends Component {
  state = {
    teamName: "Team Name",
    hackathonName: "Hackathon name",
    members: ["Name1,", "Name2,", "Name3"],
    tdesc: "We are a team of SEs,looking for a frontend developer",
    SkillRequired: ["Skill1,", "Skill2,", "Skill3,", "Skill4"],
    ProjectLink: "Project Link"
  };
  render() {
    return (
      <React.Fragment>
        <Card className="card">
          <CardContent>
            <p style={{ fontSize: "18px", fontWeight: "initial" }}>
              {this.state.teamName}
            </p>
            <p
              style={{ color: "#12b6a6", fontWeight: "600", fontSize: "24px" }}
            >
              {this.state.hackathonName}
            </p>
            <p style={{ color: "#484349", fontSize: "16px" }}>
              {this.state.members}
            </p>
            <br />
            <p>Description</p>
            <p style={{ opacity: "80%", fontSize: "16px", color: "#484349" }}>
              {this.state.tdesc}
            </p>
            <br />
            <p>Skills Required</p>
            <p style={{ fontSize: "15px", color: "#ff9e98", opacity: "80%" }}>
              {this.state.SkillRequired}
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#29B6F6",
                marginLeft: "243px"
              }}
            >
              Accept
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#FF9E98"
              }}
            >
              Decline
            </button>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default Hackathons;
