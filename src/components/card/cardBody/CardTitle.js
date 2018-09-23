import React from 'react'
import CreationTime from './cardTitle/CreationTime';

export default (props) => {
    return (
        <div className="card-title">
            <h2>{props.title}</h2>
            <CreationTime createdAt={props.createdAt}></CreationTime>
        </div>
    )
}
