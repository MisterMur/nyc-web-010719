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
    ReddotAdapter.getComments(this.props.postId)
      .then(res => res.json())
      .then(comments => this.setState({ comments }));

    ReddotAdapter.getPost(this.props.postId)
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
      </Fragment>
    );
  }
}

export default CommentsPage;
