import React, { Component } from 'react';
import Ad from '../components/Ad';

function withAd(WrappedComponent) {
  return class extends Component {
    state = {
      showAd: false,
    }

    openAd = () => {
      this.setState({ showAd: true });
    }

    closeAd = () => {
      this.setState({ showAd: false });
    }

    render() {
      if (!this.state.showAd) { // if the data is loaded, render the actual component
        return <div onMouseOver={this.openAd}>
          <WrappedComponent {...this.props} />
        </div>
      } else { // else render a spinner
        return <Ad toggleAd={this.closeAd} />
      }

    }
  }
}

export default withAd;
