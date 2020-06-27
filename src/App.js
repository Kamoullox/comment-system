import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { 
    comments: [  
      { id: 1,name: "JB", message: "Youhou la famille!"},
      { id: 2, name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ],
    isAdmin : false
   }

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message
    }
    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }

  changeMode = () => { 
    this.setState({ 
        isAdmin: !this.state.isAdmin
    })
 }


  deleteComment = (id) => {
    let comments = this.state.comments.filter(comment => comment.id !== id);
    console.log("Youhou la famille");
    console.log(comments);
    this.setState ({
      comments: comments
    })
  }

  render() { 

    return ( 
      <div className="App container">

        <AdminMode admin={this.state.isAdmin} changeMode={this.changeMode}/>


        <div className="columns">

          <CommentForm addComment={this.addComment} />

          <CommentList comments={this.state.comments} 
          deleteComment={this.deleteComment} admin={this.state.isAdmin}/> 

        </div>

      </div>
     );
  }
}

 
export default App;