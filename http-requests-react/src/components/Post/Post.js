import React from 'react';
// since Routing props is not available to child components, withRouter can be used. check video 12 in routing section.
// import {withRouter} from 'react-router-dom'

import './Post.css';

const post = (props) =>(
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);


export default post;