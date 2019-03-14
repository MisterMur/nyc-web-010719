import React from 'react';

// data is down here

class PostForm extends React.Component {
  // console.log('PostForm', props);

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Title: </label>
        <input type="text" value={this.props.title} onChange={this.props.handleTitleChange}></input>
        <label>URL: </label>
        <input type="text" value={this.props.url} onChange={this.props.handleUrlChange}></input>
        <input type="submit" value="Add Post"/>
      </form>
    );
  }

}

export default PostForm;
