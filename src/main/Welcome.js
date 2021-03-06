import React, { Component } from 'react';

import {UISref} from 'ui-router-react';

class Welcome extends Component {
  render () {
    return (
      <div className="container-fluid">
        <h3>UI-Router Sample App</h3>
        <p>Welcome to the sample app!</p>
        <p>This is a demonstration app intended to highlight some patterns that can be used within UI-Router.
          These patterns should help you to to build cohesive, robust apps.  Additionally, this app uses state-vis
          to show the tree of states, and a transition log visualizer.</p>
        <h4>App Overview</h4>
        <p>First, start exploring the application's functionality at a high level by activating
          one of the three submodules: Messages, Contacts, or Preferences. If you are not already logged in,
          you will be taken to an authentication screen (the authentication is fake; the password is "password")
        </p>
        <div>
          <UISref to={'mymessages'}><button className="btn btn-primary"><i className="fa fa-envelope"></i><span>Messages</span></button></UISref>
          <UISref to={'contacts'}><button className="btn btn-primary"><i className="fa fa-users"></i><span>Contacts</span></button></UISref>
          <UISref to={'prefs'}><button className="btn btn-primary"><i className="fa fa-cogs"></i><span>Preferences</span></button></UISref>
        </div>
        <h4>Patterns and Recipes</h4>
        <ul>
          <li>Require Authentication</li>
          <li>Previous State</li>
          <li>Redirect Hook</li>
          <li>Default Param Values</li>
        </ul>
      </div>
    );
  }
}

export default Welcome;