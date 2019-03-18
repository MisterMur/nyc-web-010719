let postPK = 0;
let commentPK = 0;

const postsTable = [];
const commentsTable = [];

function addPost(title, src, likes = 0, comments = []) {
  postsTable.push({ title, src, likes, id: ++postPK });
  const newComments = comments.map(comment => ({ id: ++commentPK, message: comment }));
  commentsTable.push({ comments: newComments, postId: postPK });
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

export { postPK, commentPK, postsTable, commentsTable };
