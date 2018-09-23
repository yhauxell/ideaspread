import React from 'react'

const CommentsIndicator = (props) => {
    return (
        <span className="text-muted mr-2">
            <i className="far fa-comments"></i>
            <small>
                {props.count}
            </small>
        </span>
    )
}

export default CommentsIndicator;
