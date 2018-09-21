import React from 'react'

export default (props) => {
    return (
        <span className="text-muted mr-2">
            <i class="far fa-comments"></i>
            <small>
                {props.count}
            </small>
        </span>
    )
}
