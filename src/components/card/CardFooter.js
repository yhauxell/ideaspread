import React from 'react'
import CommentsIndicator from './cardFooter/CommentsIndicator';
import LikesIndicator from './cardFooter/LikesIndicator';

export default (props) => {
    return (
        <div class="card-footer bg-transparent">
            <CommentsIndicator count={props.comments}></CommentsIndicator>
            <LikesIndicator count={props.likes}></LikesIndicator>
        </div>
    )
}
