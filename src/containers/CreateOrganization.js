import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";



const createOrganization = `mutation CreateOrg($input: CreateOrganizationInput) {
  createOrganization(input: $input) {
      id
      name
  }
}`;


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ""  }
     
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const testOrg= {
      name: this.state.name
      }
  
    const newOrg = await API.graphql(graphqlOperation(createOrganization, {input: testOrg}))
    console.log(newOrg)
  }  

  onChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }

  
  render() {
    return (
      <div className='create-organization-form'>
         <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            value={ this.state.orgName || "" }
            onChange={ this.onChangeHandler }
            placeholder="Organization name"
            required
            />
        <button className='submit-create-organization-btn'>Create Organization</button>
        </form>
      </div>
    );
  }
}

export default Form;
