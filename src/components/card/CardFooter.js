import React from 'react'
import CommentsIndicator from './cardFooter/CommentsIndicator';
import LikesIndicator from './cardFooter/LikesIndicator';

const CardFooter = (props) => {
    return (
        <div className="card-footer bg-transparent">
            <CommentsIndicator count={props.comments}></CommentsIndicator>
            <LikesIndicator count={props.likes}></LikesIndicator>
        </div>
    )
}

export default CardFooter;
