let id = 0;

const database = [
  {
    id: ++id,
    title: "What video game sound effect can you still hear in your head?",
    src: "https://loremflickr.com/320/240/dog",
    likes: 343,
    comments: [
      "hello",
      "first",
      "didn't get first"
    ],
  },
  {
    id: ++id,
    title: "something else",
    src: "https://loremflickr.com/320/300/dog",
    likes: 1,
    comments: [
      "hello",
      "first",
      "didn't get first"
    ],
  },
  {
    id: ++id,
    title: "Sugar is too fat now.",
    src: "https://loremflickr.com/320/280/dog",
    likes: 11.2,
    comments: [
      "hello",
      "first",
      "didn't get first"
    ],
  }
];

export { id, database };
