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
    // debugger
    ReddotAdapter.getComments(this.props.postId)
      .then(res => res.json()) // handle the error here
      .then(comments => this.setState({ comments }));
      // .catch()

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
    //. confuse future you
    const { post: { title, src, likes, id } } = this.state; // how readable is it?
    // const { post } = this.state;

    return (
      <Fragment>
        <Post title={title} src={src}>
          <PostAttributes
            likes={likes}
            likePost={() => this.likePost(id)}
            dislikePost={() => this.dislikePost(id)}
            goToComments={() => console.log("HACK: Already here. Don't go anywhere.")}
          />
        </Post>
        <CommentList comments={this.state.comments} />
      </Fragment>
    );
  }
}

CommentsPage.defaultProps = {
  postId: 0,
  // func: () => {} // this thing if I clicked it won't crash
}

// start typing your props
// prop-types

export default CommentsPage;
