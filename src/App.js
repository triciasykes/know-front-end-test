import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from "./config";
import OrganizationList from "./containers/OrganizationList";
import CreateForm from "./containers/CreateOrganization.js";
import UpdateForm from "./containers/UpdateOrganization";

Amplify.configure(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationList: [],
      newOrganizationName: "",
      formVisible: false,
      selectedItem: {},
      updateNameValue: ""
    };
  }
  async componentDidMount() {
    try {
      const getOrganizationList = `
      query getOrganizations {
        organizations {
          name
          id
        }
      }
      `;
      const resp = await API.graphql(graphqlOperation(getOrganizationList));
      this.setState({
        organizationList: resp.data.organizations
      });
    } catch (err) {
      console.log(err);
    }
  }

  createInputChangeHandler = event => {
    this.setState({ newOrganizationName: event.target.value });
  };

  createHandleSubmit = async event => {
    event.preventDefault();
    const createOrganization = `mutation CreateOrg($input: CreateOrganizationInput) {
      createOrganization(input: $input) {
          id
          name
        }
      }`;

    try {
      const newOrg = { name: this.state.newOrganizationName };
      const resp = await API.graphql(
        graphqlOperation(createOrganization, { input: newOrg })
      );
      const addedOrganization = resp.data.createOrganization;
      this.setState(state => {
        const organizationList = [...state.organizationList, addedOrganization];
        return {
          organizationList,
          newOrganization: ""
        };
      });
    } catch (err) {
      alert("there was an error");
      console.log(err);
    }
  };

  generateUpdateForm() {
    if (this.state.formVisible) {
      return (
        <div>
          <UpdateForm
          inputText={this.state.updateNameValue}
          onChange={this.updateInputChangeHandler}
          onSubmit={this.updateHandlerSubmit}
        />
        </div>
      );
    }
  }
  handleClick = organization => {
    try {
      this.setState({
        selectedItem: organization,
        updateNameValue: organization.name,
        formVisible: !this.state.formVisible
      });
      this.generateUpdateForm();
    } catch (err) {
      console.log(err);
    }
  };

  updateInputChangeHandler = event => {
    this.setState({ updateNameValue: event.target.value });
  };

  updateHandlerSubmit = async event => {
    event.preventDefault();
    const organization = {
      id: this.state.selectedItem.id,
      name: this.state.updateNameValue
    };
    const updateOrganization = `
        mutation updateOrg {
            updateOrganization(input: {
                id: "${organization.id}"
                name: "${organization.name}"
            }) {
                id
                name
            }
        }
        `;
    try {
      await API.graphql(graphqlOperation(updateOrganization));
      const newOrganizationList = this.state.organizationList.map(item => {
        if (item.id === organization.id) item.name = this.state.updateNameValue;
        return item;
      });
      this.setState({
        organizationList: newOrganizationList
      });
    } catch (err) {
      alert("There was an error&");
      console.log(err);
    }
  };

  render() {
    return (
      <div className="organization-page-main-container">
        <div className="create-organization-container">
          <CreateForm
            onSubmit={this.createHandleSubmit}
            onInputChange={this.createInputChangeHandler}
            inputValue={this.state.newOrganizationName}
          />
        </div>
        <div>
          <OrganizationList
            organizationList={this.state.organizationList}
            handleClick={this.handleClick}
          />
        </div>
          { this.generateUpdateForm() }
      </div>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true,
  usernameAttributes: "email"
});
