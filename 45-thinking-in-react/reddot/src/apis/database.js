let id = 0;

const database = [
  {
    id: ++id,
    title: "What video game sound effect can you still hear in your head?",
    src: "https://loremflickr.com/320/240/dog",
    likes: 343,
    // comments: [
    //   { id: 1, message: "hello" },
    //   { id: 2, message: "first" },
    //   { id: 3, message: "didn't get first" },
    // ],
  },
  {
    id: ++id,
    title: "something else",
    src: "https://loremflickr.com/320/300/dog",
    likes: 1,
    // comments: [
    //   { id: 4, message: "first" },
    //   { id: 5, message: "cool" },
    // ],
  },
  {
    id: ++id,
    title: "Sugar is too fat now.",
    src: "https://loremflickr.com/320/280/dog",
    likes: 11.2,
    // comments: [
    //   { id: 7, message: "I like React." },
    //   { id: 8, message: "React React React!" },
    //   { id: 9, message: "first" },
    // ],
  }
];

export { id, database };
