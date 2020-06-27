import React, { Component } from 'react';
import "./commentList.scss";

class CommentList extends Component {
    render() { 
        
        let classInvisible = !this.props.admin ? "delete invisible": "delete";

        let commentsList = this.props.comments.map(comment => {
            return <article key={comment.id} className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong> {comment.name} </strong>
                            <br/>
                            {comment.message}
                        </p>
                    </div>       
                </div>
                <button className={classInvisible} onClick={() => {this.props.deleteComment(comment.id)}}>
                    ::before
                    "x"
                    ::after 
                </button>

            </article>
         })



        return (
            <div className="column comment-list">
                <h2 className="title is-2">Liste des commentaires({this.props.comments.length})</h2>
                {commentsList}
            </div>
          );
    }
}
 
export default CommentList;
