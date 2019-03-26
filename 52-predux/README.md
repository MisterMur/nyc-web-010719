Predux
======

## SWBATs
v
Take what they learned in Mods 1 through 4 and use them as examples to explain these concepts in programming:

- [ ] message passing
- [ ] abstraction
- [ ] layers
- [ ] APIs

request response

## Lecture Overview

[**Message Passing**](https://en.wikipedia.org/wiki/Message_passing) per Wikipedia:

> message passing is a technique for invoking behavior (i.e., running a program) on a computer. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.

1. Message passing is a technique for invoking behavior (i.e., running a program) on a computer.
  - Message passing is a technique for getting the computer to do something.
2. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run.
  - Send a message to X, trusts that X will do what it's told to do.
3. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.
  - No separate methods. Just one method to rule them all.



ran a file
clicked on something, double clicked

ruby(squirrels.rb)
ruby(run.rb)
ruby hasketball.rb

shotgun

rails s
rails c
rails db:migrate

# think
# what did we do in Mod 1 that got "something" to do anything based on the message we gave it

ruby every operator
something.send(:+)

.send => mentioned for 2 minutes, then moved on
"we send a message to an object to do work"

class Cat
  attr_accessor :name, :age, :color

  def initialize(name, age, color)
    @name = name
    @age = age
    @color = color
  end
end

cat1 = Cat.new("Sugar", 1.5, "black and white")

cat1.name
cat1.age
cat1.name = "Sugaraararar"

cat1.send(:name)
cat1.send(:name=, "Sugarararar")


Mod 2

Layers => MVC
model
view
controller

Model
View
View Controller


click on something
forms
login
url => Browser => type in a url => hit enter
request <---> response lifecycle
- everything

- GET request
- server
- chain of servers DNS until it gets to the right server
- routes => REST, if/else
- controller
- action
- data / model (optionally)
- response / view

Mod 3

request <---> response

fetch('url', method, body)
.then()
.then()

- uniofied API to rul them all
XHR
axios, requests,


Mod 4

- what parallel am i going to make here?
- lifecycle => render => setState()
- props => state components
-

setState({ counter: 1 })
- i need to run render again? forceUpdate
- state.counter = 1



Every techinique in programming is a solution for a problem.
If you don't have the problem, don't use that solution.



JavaScript

state = {}
state.counter = 1
state.cat = "Sugar"

// how would you design this?
// we want a function that changes our state object to a new state object

function changeState(arg) { // what is arg? key value pair, obj
  // just spread it
  Object.assign({ ...state }, arg)
  <!-- {...state, ...arg} -->
}

changeState({ counter: 1 })
changeState({ something: "else" })


state = {
  counter: 0,
  pizzas: 3,
  cats: 7,
  dog: "Buddy",
  teacher: "Mike Cheng"
}

// there;s a better more generic way
// callback, object, higher order return functions... OMG!
// set to generic argument
function changeState(route, params) { // mod 3, url, body
  //. what to do + any additional input => redux is easy

  // 1. increment the counter
  // 2. decrement the counter
  // 3. adopt a cat
  // 4. rename dog to Milly
  // 5. change teacher to Evans
  // 6. eat a pizza => decremnting a counter
  // 7. change theacher to X
  // 8. rename the dog to X
  // 9. set the pizzas to N
  if/else or a switch

  // request response, routes
  switch(message) { // routes
    case "add_counter": // each indivual route
      // 1. increment the counter
      state.counter++
      break;
    case "subtract_counter": // confusing? but it works
      // 2. decrement the counter
      state.counter--
      break;
    case "adopt_cat":
      // 3. adopt a cat
      state.cats++
      break;
    case "rename_dog":

      state.dog = arg
      break;
    case "change_teacher":

      state.teacher = arg // params
      break;
    case "eat_pizza":
      // 6. eat a pizza => decremnting a counter
      state.pizzas--
      break;
    case "rename_dog_to_milly":
      // 4. rename dog to Milly
      state.dog = "Milly"
    case "rename_teacher_to_evans":
      // 5. change teacher to Evans
      state.teacher = "Evans"
  }

}


// this is exactly what redux is


// Redux is just message passing. You write the giant switch case. You get to decide what those routes and params are.
// you have this base idea of message passing
// someone is going to want to abstract
// everyone does it different in Redux
// the solution => the recommended solution
// prescribes to abstract in specific ways










Everything boils down to:

* message passing
  * ruby run.rb, rails s, npm start
  * OOP => `.send()`
  * request <---> response
  * fetch
  * setState
* abstraction
  * helper methods
  * OOP => inheritance
  * factory pattern
  * higher order functions
  * higher order components
* layers
  * OOP => encapsulation
  * ORM
  * MVC
  * DOM
  * Components
* APIs
  * class & instance methods
  * RESTful routes
  * JS & the DOM
  * Adapter Pattern
