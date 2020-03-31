import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import config from "./config";
import Organizations from "./containers/Organizations.js";
import Form from "./containers/CreateOrganization.js";


Amplify.configure(config);

class App extends Component {
  
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  renderCreateCompanyForm() {
    if (this.state.visible) {
      return <Form />;
    }
  }

  render() {
   
    return (
      <div className="organization-page-main-container">
        <div className="create-organization-container">
          <div className="section-title">
            Create Organization
            <button
              className="create-organization-btn"
              onClick={this.handleClick}
            >
              Create
            </button>
            {this.renderCreateCompanyForm()}
          </div>
        </div>
        <div className="organization-container">
          <span className="section-title">Organizations</span>
            <Organizations  />
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, { 
  includeGreetings: true,
  usernameAttributes: 'email'
 });
