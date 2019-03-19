import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  //get sushi from server
  //put them in local state
  state={
    sushis: [],
    displayIndex: 0,
    eatenSushi: [],
    plates: [],
    money: 100
  }

  componentDidMount(){
    fetch(API).then(r=>r.json())
    .then(json=>{
      this.setState({
        sushis: json
      })
    })
  }


  //pass a reference to a piece of code (function) in app
  //to more button
  //via props

  moreButtonClick = () =>{
    let newIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newIndex
    })
  }

  sushiClick = (id) =>{
    //add it to the eaten sushi
    //remove it from the non-eaten sushi array
    let sushi = this.state.sushis.find(sushi=>sushi.id===id)
    let currentlyEaten = this.state.eatenSushi
    let newAmount = this.state.money - sushi.price
    this.setState({
      eatenSushi: [...currentlyEaten, sushi],
      money: newAmount
    })

  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleMoneyIssue={this.handleMoneyIssue} eatenSushi={this.state.eatenSushi} sushiClick={this.sushiClick} moreButtonClick={this.moreButtonClick} displayIndex={this.state.displayIndex} sushis={this.state.sushis}/>
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
