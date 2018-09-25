import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card';
import { selectCard } from '../../store/actions';
import { bindActionCreators } from 'redux';

class CardColumns extends Component {
    render() {
        return (
            <div className="card-columns">
                {
                    this.props.cards.map((card) => {
                        return <Card key={card.id} card={card} onClick={() => { this.props.selectCard(card) }} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    }
}

const mapDistpatchToProps = (distpatch) => {
    return bindActionCreators({ selectCard }, distpatch);
}

export default connect(mapStateToProps, mapDistpatchToProps)(CardColumns);