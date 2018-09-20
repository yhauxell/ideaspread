import React from 'react'
import CommentsIndicator from './cardFooter/CommentsIndicator';
import LikesIndicator from './cardFooter/LikesIndicator';

export default () => {
    return (
        <div class="card-footer bg-transparent">
            <CommentsIndicator></CommentsIndicator>
            <LikesIndicator></LikesIndicator>
        </div>
    )
}
