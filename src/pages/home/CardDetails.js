import React from 'react'
import { connect } from 'react-redux'

const CardDetails = ({selectedCard}) => {
    
    return (
        <div>
            Selected card {selectedCard.title}
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedCard: state.selectedCard,
})
export default connect(mapStateToProps)(CardDetails)

