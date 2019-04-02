import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimal, fetchDog } from '../actions';

import AnimalAdapter from '../apis/AnimalAdapter';

class AnimalPicture extends Component {

  //. thunks purpose is:
  // 1. to help clean up your code so it looks more like reactish
  // 2. is to put our fetch with our dispatch

  // do we need thunk?
  getCat = (event) => {
    // this.props.updateAnimal(url);
    // whatup?
    AnimalAdapter.getCat()
      .then(url => {
        // render it => update our state in redux => dispatch
        this.props.updateAnimal(url);
        // this.setState({ url });
      })
  }

  // do we need to do anything else?
  getDog = (event) => {
    // this.props.updateAnimal(url);

    // let's fetch a picture
    // AnimalAdapter.getDog()
    //   .then(url => {
    //     // render it => update our state in redux => dispatch
    //     this.props.updateAnimal(url);
    //     // this.setState({ url });
    //   })

    this.props.fetchDog();

  }

  reset = (event) => {
    this.props.dispatch({ type: "RESET" })
  }
  renderPicture = () => {
    if (!this.props.isFetching) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    console.log('AnimalPicture', this.props);
    return (
    <div className="animal-picture">
      <button onClick={this.getCat}>Fetch Cat</button>
      <button onClick={this.getDog}>Fetch Dog</button>
      {this.renderPicture()}
      <button onClick={this.reset}>reset!!!</button>
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    animalSrc: state.animal.animalSrc,
    isFetching: state.animal.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAnimal: (url) => dispatch(updateAnimal(url)),
    fetchDog: () => dispatch(fetchDog()),
    // fetchDog: () => {
    //   AnimalAdapter.getDog()
    //     .then(url => {
    //       // render it => update our state in redux => dispatch
    //       // this.props.updateAnimal(url);
    //       dispatch(updateAnimal(url))
    //       // this.setState({ url });
    //     })
    // },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
