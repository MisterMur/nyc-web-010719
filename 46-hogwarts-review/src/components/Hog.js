import React from "react";

class Hog extends React.Component {
  state = {
    showDetails: false
  };

  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };
  render() {
    let imgUrl = this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
    return (

        !this.state.showDetails ? (
          <div className="pigTile" onClick={this.toggleDetails}>
            <h3>{this.props.hog.name}</h3>
            <img src={require(`../hog-imgs/${imgUrl}.jpg`)} />
          </div>
        ) : (
          <div className="pigTile" onClick={this.toggleDetails}>
            <h3>{this.props.hog.name}</h3>
            <img src={require(`../hog-imgs/${imgUrl}.jpg`)} />
            <p>{this.props.hog.specialty
        )
      </div>
    );
  }
}
export default Hog;
