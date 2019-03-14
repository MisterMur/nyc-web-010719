// import uuid from 'uuid';
import { id, database } from './database'; // API

class ReddotAdapter {
  static requestSimulator(result, delay = 1000, body = "json") {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ [body]: () => result });
      }, delay);
    });
  }

  static getPosts() {
    return this.requestSimulator(this.db.posts, 0);
  }

  static addPost(body) {
    const newPost = { ...body, id: ++this.pk };
    this.db.posts.push(newPost);
    return this.requestSimulator(newPost,  500);
  }

  static editPost(body) {
    this.db.posts = this.db.posts.map(post => {
      if (post.id === body.id) {
        return {...body};
      }
      return post;
    });
    return this.requestSimulator(body,  500);
  }

  static getComments(postId) {
    const post = this.db.posts.find(post => post.id === postId);
    return this.requestSimulator(post.comments,  500);
  }
}

ReddotAdapter.db = {
  pk: id,
  posts: database,
}

export default ReddotAdapter;
