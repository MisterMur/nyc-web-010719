import React, { Component, Fragment } from 'react';
import Post from './Post';
import PostAttributes from './PostAttributes';
import CommentList from './CommentList';
import ReddotAdapter from '../apis/ReddotAdapter';

class CommentsPage extends Component {
  state = {
    post: {},
    comments: [],
  }

  componentDidMount() {
    // TODO: Consider using Promise.all here.
    // it's a string... I forgot...
    ReddotAdapter.getComments(parseInt(this.props.match.params.id))
      .then(res => res.json())
      .then(comments => this.setState({ comments }));

    ReddotAdapter.getPost(parseInt(this.props.match.params.id))
      .then(res => res.json())
      .then(post => this.setState({ post }));
  }

  likePost = (postId) => {
    ReddotAdapter.likePost(postId)
      .then(res => res.json())
      .then(post => {
        this.setState(prevState => {
          const posts = prevState.posts.map(p => {
            if (p.id === postId) {
              return post;
            }
            return p;
          });

          return { posts }
        });
      });
  }

  dislikePost = (postId) => {
    ReddotAdapter.dislikePost(postId)
      .then(res => res.json())
      .then(post => {
        this.setState(prevState => {
          const posts = prevState.posts.map(p => {
            if (p.id === postId) {
              return post;
            }
            return p;
          });

          return { posts }
        });
      });
  }

  handleClick = (event) => {
    // react uses webpack to transform, // _this

    // we also lose context here in an event
    let that = this;
    // debugger

    //. you want to do logic before changing routes
    // login, .then()
    // logout
    this.props.history.push("/")
  }

  render() {
    return (
      <Fragment>
        <Post title={this.state.post.title} src={this.state.post.src}>
          <PostAttributes
            likes={this.state.post.likes}
            likePost={() => this.likePost(this.state.post.id)}
            dislikePost={() => this.dislikePost(this.state.post.id)}
            goToComments={() => console.log("HACK: Already here. Don't go anywhere.")}
          />
        </Post>
        <CommentList comments={this.state.comments} />
        <button onClick={this.handleClick}>Example</button>
      </Fragment>
    );
  }
}

export default CommentsPage;
