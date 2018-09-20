import React, { Component } from 'react'

export default class AddIdeaForm extends Component {
    render() {
        return (
            <form>
                <h4>Do you have something in mind?</h4>
                <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="ideaTitleHelp" placeholder="Write a name for it..." />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="You may want to give us a brief description..." rows="3"></textarea>
                </div>
                <div className="form-group">
                    <select class="custom-select">
                        <option selected>Are you in any this phases?</option>
                        <option value="1">Spreading the word</option>
                        <option value="1">Building bussiness plan</option>
                        <option value="2">Looking for a co-founder</option>
                        <option value="3">Looking for funds</option>
                    </select>
                </div>
                <div className="form-group">
                    <small> We notice you are looking for a partner, what skills should she/he has?</small>
                    <input type="text" className="form-control form-control-sm" placeholder="Ex: managment, marketing, code, etc" />
                </div>
                <div>
                    <span class="badge badge-pill badge-primary">code</span>
                    <span class="badge badge-pill badge-secondary">managment</span>
                    <span class="badge badge-pill badge-success">testing</span>
                    <span class="badge badge-pill badge-danger">marketing</span>
                    <span class="badge badge-pill badge-warning">finances</span>
                    <span class="badge badge-pill badge-info">networking</span>
                    <span class="badge badge-pill badge-light">leading</span>
                    <span class="badge badge-pill badge-dark">any</span>
                </div>
                <div className="form-group custom-control custom-checkbox">
                    <input checked type="checkbox" className="custom-control-input" id="publicOpinion" />
                    <label className="custom-control-label" for="publicOpinion">Anyone can have an opinion on my idea</label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Publish</button>
                </div>
            </form>
        )
    }
}
