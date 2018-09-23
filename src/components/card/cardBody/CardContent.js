import React from 'react'

export default (props) => {
    return (
        <div className="card-text">
            <p className="text-truncate">
                {props.content}
            </p>
        </div>
    )
}
