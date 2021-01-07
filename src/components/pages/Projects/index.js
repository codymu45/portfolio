import React, { Component } from "react";
import ProjectCard from "../../ProjectCard";
import Wrapper from "../../Wrapper";
import projects from "../../../projects.json";

class Projects extends Component {
  state = {
    projects
  };

  removeFriend = id => {

    const projects = this.state.projects.filter(project => project.id !== id);

    this.setState({ projects });
  };

  
  render() {
    return (
      <Wrapper>
        {this.state.projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            ghLink={project.ghLink}
            dLink={project.dLink}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Projects;
