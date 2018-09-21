import React from 'react'
import CardTitle from './cardBody/CardTitle';
import CardContent from './cardBody/CardContent';

export default (props) => {
    return (
        <div class="card-body">
            <CardTitle title={props.title} createdAt={props.createdAt}></CardTitle>
            <CardContent content={props.content}></CardContent>
        </div>
    )
}
