import React, { Component, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Organization from './Organization'

// const getOrganizations = `
//       query getOrganizations {
//         organizations {
//           name
//           id
//         }
//       }
//       `;
const OrganizationList = (props) => (
  <div>
      <div className="section-title">Organizations</div>
      <div>
          {props.profiles.map(profile => <Organization key={profile.id} {...profile}/>)}
      </div>
    </div>
)
// class OrganizationList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       organizations: [],
//       detailsVisible: false,
//       organization: ""
//     };
  
//   }
  // async componentDidMount() {
  //   try {
  //     const getOrganizations = `
  //     query getOrganizations {
  //       organizations {
  //         name
  //         id
  //       }
  //     }
  //     `;
  //     const resp = await API.graphql(graphqlOperation(getOrganizations));
  //     this.setState({
  //     organizations: resp.data.organizations,
      
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // handleClick = (event) => {
  //   this.setState({ detailsVisible: !this.state.detailsVisible,
  //                   clickedID: event.target.id });
  // };

  // onValueChange = (key, value) =>  {
  //   this.setState({[key] :value})
  // }
  // generateDetails() {
  //   if(this.state.detailsVisible){
  //     return (
  //       <Organization orgID={this.state.clickedID}  onChange={this.onValueChange.bind(this, "name")} />
  //     )
  //   }
  // }
  
//   render() {
//     return (
//       <ul>
//            {this.state.organizations.map(organization => (
//           <li className="organization-name" key={organization.id}  id={organization.id} onClick={this.handleClick}>
//             {organization.name}
//           </li>
//            ))}
//           { this.generateDetails() }
//       </ul>
//     );
//   }
// }

export default OrganizationList;
