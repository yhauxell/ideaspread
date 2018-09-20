import React, { Component } from 'react'
import CardColumns from './home/CardColumns';
import AddIdeaForm from './home/AddIdeaForm';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <main className="col-8">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col">
                            <CardColumns></CardColumns>
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
