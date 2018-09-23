import React, { Component } from 'react'
import CardColumns from './home/CardColumns';
import AddIdeaForm from './home/AddIdeaForm';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: "1",
                    title: "Idea number lorem",
                    createdAt: "a minute ago",
                    content: "This is a longer card with supporting text below as a natural lead-in to additional content.",
                    comments: 10,
                    likes: 100
                },
                {
                    id: "2",
                    title: "Idea number ipsum",
                    createdAt: "Feb 24th, 2018",
                    content: "A natural lead-in to additional content this is a longer card with supporting text below as.",
                    comments: 46,
                    likes: 300
                },
                {
                    id: "3",
                    title: "My very own number ipsum",
                    createdAt: "2 days ago",
                    content: "Supporting text below as a natural lead-in to additional content this is a longer card with.",
                    comments: 5,
                    likes: 0
                },
                {
                    id: "4",
                    title: "Total idea number ipsum",
                    createdAt: "Feb 24th, 2018",
                    content: "Additional content this is a longer a natural lead-in to  card with supporting text below as.",
                    comments: 46,
                    likes: 3400
                },
                {
                    id: "5",
                    title: "Revolutionary Idea number ipsum",
                    createdAt: "Sept 21th, 2018",
                    content: "Card with supporting text below as a natural lead-in to additional content this is a longer.",
                    comments: 0,
                    likes: 990
                },
            ]
        }
    }
    render() {
        return (
            <div className="row">
                <main className="col-8">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col">
                            <CardColumns cards={this.state.cards}></CardColumns>
                        </div>
                    </div>
                </main>
                <aside className="col-4">
                    <AddIdeaForm></AddIdeaForm>
                </aside>
            </div>
        )
    }
}
