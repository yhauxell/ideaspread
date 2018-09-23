import React, { Component } from 'react'
import Card from '../../components/Card';

export default class CardColumns extends Component {
    render() {
        return (
            <div className="card-columns">
                {this.props.cards.map((card)=>{
                    return <Card key={card.id} card={card}/>
                })}
            </div>
        )
    }
}
