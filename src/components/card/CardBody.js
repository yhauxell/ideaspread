import React from 'react'
import CardTitle from './cardBody/CardTitle';
import CardContent from './cardBody/CardContent';

const CardBody = ({title, content,createdAt}) => {
    return (
        <div className="card-body">
            <CardTitle title={title} createdAt={createdAt}></CardTitle>
            <CardContent content={content}></CardContent>
        </div>
    )
}

export default CardBody;
