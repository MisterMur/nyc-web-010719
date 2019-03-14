import React from 'react';

class PostForm extends React.Component {
  // console.log('PostForm', props);
  state = {
    title: "",
    url: "",
  }

  handleSubmit = (event) => {
    event.preventDefault(); // default of a form submits
    console.log("it works", this.state.title);

    this.props.createPost(this.state.title, this.state.url);

    this.setState({
      title: "",
      url: "",
    });
  }

  handleTitleChange = (event) => {
    console.log('it works again', event.target.value);
    this.setState({ title: event.target.value.toUpperCase() });
  }

  handleUrlChange = (event) => {
    console.log('it works again', event.target.value);
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange}></input>
        <label>URL: </label>
        <input type="text" value={this.state.url} onChange={this.handleUrlChange}></input>
        <input type="submit" value="Add Post"/>
      </form>
    );
  }

}

export default PostForm;
