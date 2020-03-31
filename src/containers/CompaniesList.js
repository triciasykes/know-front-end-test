import React, { Component } from "react";
// import Amplify from 'aws-amplify';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries.graphql";

const orgID = "abc123";

const listCompanies = `
      query getCompanies {
        organization(id: "${orgID}") {
          name
          companies {
            name
            id
          }
        }
      }
      `;

class CompaniesList extends Component {
  constructor() {
    super();
    this.state = {
      companies: []
    };
  }

  async componentDidMount() {
    try {
      const resp = await API.graphql(graphqlOperation(listCompanies));
      console.log(resp);

      this.setState({
        companies: resp.data.organization.companies
      });
    } catch (err) {
      console.log(err);
    }
  }

  // generateServicesList() {
  //   if(this.state.visible)
  //     return (
  //       <ul>
  //         {this.state.services.map((service, index) => (
  //           <Services key={index} name={service.name} />
  //         ))}
  //       </ul>
  //     );
  // }

  render() {
    return (
      <div>
        <ul className="company-list">
          {this.state.companies.map((company, index) => (
            <li key={index}>
               {this.props.company.name}
               
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CompaniesList;
