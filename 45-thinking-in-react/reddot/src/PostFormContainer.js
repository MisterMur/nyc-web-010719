import React from 'react';
import Post from './Post';

class PostFormContainer extends React.Component {
  state = {
    title: "",
    src: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    this.props.addPost(this.state.title, this.state.src)
    this.setState({
      title: "",
      src: "",
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.state.title, this.state.src);
    return (
      <div className="border">
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <label>Image: </label>
          <input type="text"  name="src" value={this.state.src} onChange={this.handleChange} />
          <input type="submit" value="Create Post" />
        </form>
        <Post title="preview" src="http://" />
      </div>
    );
  }
}

export default PostFormContainer;
