import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div className='card'>

      <a href={props.link}>
        <img alt={props.name} src={props.image} />
      </a>

      <div className='content'>
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard;