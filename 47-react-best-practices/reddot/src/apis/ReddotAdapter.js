import { postPK, postsTable, commentPK, commentsTable } from './database';

class ReddotAdapter {
  static requestSimulator(result, delay = 1000, body = "json") {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ [body]: () => result });
      }, delay);
    });
  }

  static getPosts() {
    return this.requestSimulator([...this.db.posts], 0);
  }

  static getPost(postId) {
    return this.requestSimulator({...this.db.posts.find(post => post.id === postId)},  0);
  }

  static addPost(title, src) {
    const newPost = { title, src, id: ++this.db.postPK, likes: 0 };
    this.db.posts.push(newPost);
    this.db.comments.push({ comments: [], postId: this.db.postPK });
    return this.requestSimulator({...newPost},  0);
  }

  static likePost(postId) {
    this.db.posts = this.db.posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      }
      return post;
    });
    return this.requestSimulator({...this.db.posts.find(post => post.id === postId)},  0);
  }

  static dislikePost(postId) {
    this.db.posts = this.db.posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes - 1};
      }
      return post;
    });
    return this.requestSimulator({...this.db.posts.find(post => post.id === postId)},  0);
  }

  static editPost(body) {
    this.db.posts = this.db.posts.map(post => {
      if (post.id === body.id) {
        return {...body};
      }
      return post;
    });
    return this.requestSimulator(body,  0);
  }

  static getComments(postId) {
    const comments = this.db.comments.find(comment => comment.postId === postId);
    return this.requestSimulator([...comments.comments],  0);
  }
}

ReddotAdapter.db = {
  postPK,
  posts: postsTable,
  commentPK,
  comments: commentsTable,
}

export default ReddotAdapter;
