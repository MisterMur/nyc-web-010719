console.log('%c whacky colors', "color:blue")

//grab some divs

document.addEventListener("DOMContentLoaded", function(e) {


  // add event listener to THE FORM for a submit
  const commentForm = document.querySelector("#comment-form")
  // console.log(commentForm, "this is the form :)")


  // listen for when the form is submitted
  commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    // grab the VALUE of the input for the comment
    const input = commentForm.querySelector("#new-comment").value
    // take that VALUE 👆 Append to the page
    // WHERE to append on the page GRAB that container
    const commentsContainer = document.querySelector("#comments-container")
    // create the element
    const pTag = document.createElement("p")
    pTag.innerText = input
    console.log(pTag)
    // append to THE CONTAINER
    commentsContainer.appendChild(pTag)
    // for MAXIMUM POWER and UX
    commentForm.reset()

  })


  const alertBtn = document.querySelector("#alert-btn")
  alertBtn.addEventListener("click", function(e) {
    alert("HA I alerted you")
  })

  const consoleLogBtn = document.querySelector("#log")
  consoleLogBtn.addEventListener("click", function(e) {
    console.log("logged me")
  })
  //
  const errorBtn = document.querySelector("#error")
  errorBtn.addEventListener("click", function() {
    console.warn("this is BADDDDD to the ☠︎")
  })

  document.addEventListener("click", function(event) {
    // console.log(event)
  })


  const bodyTag = document.querySelector("#comments")
  console.log(bodyTag)






})
// events?
