import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: ""
    };
  }

    async componentDidMount() {
        const orgID = this.props.orgID;
        const getOrganization = `
            query getOrganization {
            organization(id: "${orgID}") {
                name
                }
            }
            `;
    try {
      const resp = await API.graphql(
        graphqlOperation(getOrganization, { id: orgID })
      );
      this.setState({ organization: resp.data.organization });
    } catch (err) {
      console.log(err);
        }
    }

    onChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }
  handleSubmit = async event => {
    event.preventDefault();
    const updateOrganization = `
        mutation updateOrg {
            updateOrganization(input: {
                id: "${this.props.orgID}"
                name: "${this.state.name}"
            }) {
                id
                name
            }
        }
        `;
    const updateOrg = await API.graphql(graphqlOperation(updateOrganization));
    const org = updateOrg.data.updateOrganization
    // this.setState({
    //     organization: updateOrg.data
    // })
  };

  render() {
    return (
      <div className="company-list">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            defaultValue={this.state.organization.name || ""}
            onChange={this.onChangeHandler}
            required
          />
          <button className="update-organization-btn"> update </button>
        </form>
      </div>
    );
  }
}

export default Organization;
