import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import { tsPropertySignature } from '@babel/types';

function Thumbnail(props) {
    return (
        <div className="projects">
            <Link to={props.link}>
                <div className="project-image">
                    <img src={props.image} alt="Project Image" width="200" height="200" />
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-category">{props.category}</div>
            </Link>
        </div>
    )
}

export default Thumbnail