import React, { Component } from 'react';

class CommentForm extends Component {
    state = {  
        name: "",
        message: ""
    }


    handleChangeName = (e) => {
        this.setState({
        name:  e.target.value
        })
    }

    handleChangeMessage = (e) => {
        this.setState({
        message:  e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.message);
    }


    render() { 
        return (
            <div className="column CommentForm">

                <h2 className="title is-2">Ajouter un commentaire</h2>
                <form onSubmit={this.handleSubmit} >

                
                <div class="field">
                    <label class="label">Label</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input"
                        onChange={this.handleChangeName} value={this.state.name} />
                    </div>
                </div>

                <div class="field">
                    <label className="label">Message</label>
                    <div class="control">
                        <textarea className="textarea" placeholder="Yo la miff tapper le texte description ici stp  ;)"
                        onChange={this.handleChangeMessage}
                        value={this.state.message}></textarea>
                    </div>
                </div>

                <button className="button is-primary">Comment</button>
                </form>
               
            </div>
          );
    }
}
 
export default CommentForm;