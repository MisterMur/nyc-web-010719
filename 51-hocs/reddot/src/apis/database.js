let postPK = 0;
let commentPK = 0;
let userPK = 0;

const postsTable = [];
const commentsTable = [];
const usersTable = [];

function addPost(title, src, likes = 0, comments = []) {
  postsTable.push({ title, src, likes, id: ++postPK });
  const newComments = comments.map(comment => ({ id: ++commentPK, message: comment }));
  commentsTable.push({ comments: newComments, postId: postPK });
}

function addUser(username, password, avatar) {
  usersTable.push({ username, password, avatar, id: ++userPK });
}

addPost(
  "What video game sound effect can you still hear in your head?",
  "https://loremflickr.com/320/240/dog",
  343,
  ["hello", "first", "didn't get first"]
);

addPost(
  "something else",
  "https://loremflickr.com/320/300/dog",
  1,
  ["first", "cool"]
);

addPost(
  "Sugar is too fat now.",
  "https://loremflickr.com/320/280/dog",
  11.2,
  ["I like React.", "React React React!", "first"]
);

addUser("sugar", "meow", "https://scontent-lga3-1.cdninstagram.com/vp/dcf7cae82b34f0827fdf71ee3c538688/5D14A93F/t51.2885-15/e35/47691413_127094851630958_8777326067936952339_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com");
addUser("cinnamon", "nyaa", "https://scontent-lga3-1.cdninstagram.com/vp/91a5f2cc1c90debf2d71fb1a2d9478e5/5D4CA010/t51.2885-15/e35/40644250_286807805466764_7084831219434651648_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com");
addUser("mike", "123", "https://scontent-lga3-1.cdninstagram.com/vp/044ce553d568ca5726180e21555b8e62/5D481139/t51.2885-15/e35/43598987_330771441020847_4562942086624572522_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com");

export { postPK, commentPK, postsTable, commentsTable, userPK, usersTable };
