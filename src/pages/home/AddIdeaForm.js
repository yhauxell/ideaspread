import React, { Component } from 'react'

export default class AddIdeaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:"",
            help_with: "idea",
            accept_terms:true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h4>Do you have something in mind?</h4>
                <div className="form-group">
                    <input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" className="form-control" aria-describedby="ideaTitleHelp" placeholder="Write a name for it..." />
                </div>
                <div className="form-group">
                    <textarea name="content" value={this.state.content} onChange={this.handleInputChange} className="form-control" placeholder="You may want to give us a brief description..." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label>What can we help you with?</label>
                    <select name="help_with" value={this.state.help_with} onChange={this.handleInputChange} className="custom-select">
                        <option value="idea">Just let my idea be popular</option>
                        <option value="businessplan">Get some help with my bussiness plan</option>
                        <option value="cofounder">Find the perfect co-founder</option>
                        <option value="funds">Get some funds</option>
                    </select>
                </div>
                {}
                <div className="form-group custom-control custom-checkbox">
                    <input name="accept_terms" value={this.state.accept_terms} onChange={this.handleInputChange} checked type="checkbox" className="custom-control-input" id="publicOpinion" />
                    <label className="custom-control-label" htmlFor="accept_terms">I'm a cool person who can handle negative feedback</label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Publish</button>
                </div>
            </form>
        )
    }

}
