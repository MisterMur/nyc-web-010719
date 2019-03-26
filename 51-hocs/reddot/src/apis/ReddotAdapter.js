import { postPK, postsTable, commentPK, commentsTable, userPK, usersTable } from './database';
import { userSerializer } from './serializers';

class ReddotAdapter {
  static requestSimulator(result, delay = 1000, body = "json") {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ [body]: () => result });
      }, delay);
    });
  }

  static getPosts() {
    // return fetch('soime url/posts')
    //   .then(res => res.json())
    //   .then(data => {
    //     return //structured version of your data
    //   })
    return this.requestSimulator([...this.db.posts], 1000);
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

  static login(username, password) {
    const user = this.db.users.find(user => user.username === username && user.password === password);
    if (!!user) {
      return this.requestSimulator(userSerializer(user), 0);
    } else {
      return this.requestSimulator("no such user", 0);
    }
  }

  static getUser() {
    const user = this.db.users.find(user => user.id === parseInt(localStorage.getItem('fake_session'), 10));
    return this.requestSimulator(userSerializer(user), 0);
  }
}

ReddotAdapter.db = {
  postPK,
  posts: postsTable,
  commentPK,
  comments: commentsTable,
  userPK,
  users: usersTable,
}

export default ReddotAdapter;
