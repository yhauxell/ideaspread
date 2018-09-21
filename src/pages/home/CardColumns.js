import React, { Component } from 'react'
import Card from '../../components/Card';

export default class CardColumns extends Component {
    render() {
        return (
            <div class="card-columns">
                {this.props.cards.map((card)=>{
                    return <Card card={card}/>
                })}
            </div>
        )
    }
}
