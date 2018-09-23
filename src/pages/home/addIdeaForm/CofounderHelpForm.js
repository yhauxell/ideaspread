import React from 'react'

export default () => {
    return (
        <div>
            <div className="form-group">
                <small> We notice you are looking for a partner, what skills should she/he has?</small>
                <input name="cofounder_skills" value={this.state.stage} onChange={this.handleInputChange} type="text" className="form-control form-control-sm" placeholder="Ex: managment, marketing, code, etc" />
            </div>
            <div>
                <span className="badge badge-pill badge-primary">code</span>
                <span className="badge badge-pill badge-secondary">managment</span>
                <span className="badge badge-pill badge-success">testing</span>
                <span className="badge badge-pill badge-danger">marketing</span>
                <span className="badge badge-pill badge-warning">finances</span>
                <span className="badge badge-pill badge-info">networking</span>
                <span className="badge badge-pill badge-light">leading</span>
                <span className="badge badge-pill badge-dark">any</span>
            </div>
        </div>
    )
}
