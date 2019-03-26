import React, { Component } from 'react';

import ReddotAdapter from '../apis/ReddotAdapter';
import withLoading from '../hocs/withLoading';

class ProfilePage extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    ReddotAdapter.getUser()
      .then(res => res.json())
      .then(profile => {
        this.setState({ profile });
      })
  }

  render() {
    const { profile } = this.state;

    return (
      <div className="profile-card">
        <h2>{profile.username}</h2>
        <img src={profile.avatar} alt={profile.username} />
      </div>
    );
  }
}

export default ProfilePage;
