import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Organization from './Organization'

const getOrganizations = `
      query getOrganizations {
        organizations {
          name
          id
        }
      }
      `;
    
class Organizations extends Component {
  constructor() {
    super();
    this.state = {
      organizations: [],
      organization: "",
      detailsVisible: false
    };
  }

  async componentDidMount() {
    try {
      const resp = await API.graphql(graphqlOperation(getOrganizations));
      this.setState({
      organizations: resp.data.organizations,

      });
    } catch (err) {
      console.log(err);
    }
  }
  handleClick = (event) => {
    this.setState({ detailsVisible: !this.state.detailsVisible,
                    clickedID: event.target.id });
  };

  generateDetails() {
    if(this.state.detailsVisible){
      return (
        <Organization orgID={this.state.clickedID}/>
      )
    }
  }

  render() {
    return (
      <ul>
           {this.state.organizations.map(organization => (
          <li className="organization-name" key={organization.id} id={organization.id} onClick={this.handleClick}>
            {organization.name}
          </li>
           ))}
          { this.generateDetails() }
      </ul>
    );
  }
}

export default Organizations;
