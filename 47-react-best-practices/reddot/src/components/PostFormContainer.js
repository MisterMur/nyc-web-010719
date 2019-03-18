import React from 'react';
import Post from './Post';

class PostFormContainer extends React.Component {
  state = {
    title: "",
    src: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addPost(this.state.title, this.state.src);

    this.setState({
      title: "",
      src: "",
    });
  }

  handleChange = (event) => {
    // event.target.name == "title"
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="form-preview-container">
        <h2>Submit A Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>Image:
            <input
              type="text"
              name="src"
              value={this.state.src}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Create Post" />
        </form>
        <Post title={this.state.title} src={this.state.src} />
      </div>
    );
  }
}

export default PostFormContainer;
