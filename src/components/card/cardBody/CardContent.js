import React from 'react'

export default (props) => {
    return (
        <div class="card-text">
            <p className="text-truncate">
                {props.content}
            </p>
        </div>
    )
}
