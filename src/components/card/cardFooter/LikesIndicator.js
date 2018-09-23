import React from 'react'

const LikesIndicator = (props) => {
    return (
        <span className="text-muted mr-2">
            <i className="far fa-heart"></i>
            <small>
                {props.count}
            </small>
        </span>
    )
}

export default LikesIndicator;
