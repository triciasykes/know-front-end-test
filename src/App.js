import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from "./config";
import OrganizationList from "./containers/OrganizationList";
import CreateForm from "./containers/CreateOrganization.js";

Amplify.configure(config);

class App extends Component {
  state = {
      profiles: [],
      visible: false
  }
  async componentDidMount() {
    try {
      const getOrganizations = `
      query getOrganizations {
        organizations {
          name
          id
        }
      }
      `;
      const resp = await API.graphql(graphqlOperation(getOrganizations));
      this.setState({
      profiles: resp.data.organizations
      });
      console.log(this.state.profiles)

    } catch (err) {
      console.log(err);
    }
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render(){
      return (
           <div className="organization-page-main-container">
            <div className="create-organization-container">
              <div className="section-title">
                Create Organization
              </div>
                <CreateForm onSubmit={this.addNewProfile}/>
              </div>
              <OrganizationList profiles={this.state.profiles}/>
          </div>
      )
    }
  }


export default withAuthenticator(App, { 
  includeGreetings: true,
  usernameAttributes: 'email'
 });
