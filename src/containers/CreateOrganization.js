import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

class CreateForm extends Component {
  state = { 
    profileName: ""
  }

  handleSubmit = async (event) =>{
    event.preventDefault()
    const createOrganization = `mutation CreateOrg($input: CreateOrganizationInput) {
      createOrganization(input: $input) {
          id
          name
      }
    }`;
    const newOrg= {name: this.state.profileName}
    try {
      const resp = await API.graphql(graphqlOperation(createOrganization, { input: newOrg}))
      this.props.onSubmit(resp.data)
      this.setState({ profileName: ''})
    } catch(err) {
        alert('there was an error')
        console.log(err)
    }
  }  
  
  render(){
      return(
          <form onSubmit={this.handleSubmit}>
              <input
               type="text"
               placeholder="organization name"
               value={this.state.profileName}
               onChange={event => this.setState({ profileName: event.target.value})}
             />
              <button>Create</button>
          </form>
      )
  }
}


// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: ""  }
     
//   }



//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const newOrg= {name: this.state.name}

//     try {
//       await API.graphql(graphqlOperation(createOrganization, {input: newOrg}))
//       this.clearForm()
//       alert('Your organization has beed created')
//     } catch(err) {
//         alert('there was an error')
//         console.log(err)
//     }
//   }  

//   changeHandler = (event) => {
//     this.setState({name: event.target.value});
//   }


//   render() {
//     return (
//       <div className='create-organization-form'>
//          <form onSubmit={this.handleSubmit}>
//             <input
//             type="text"
//             value={ this.state.name }
//             onChange={ this.changeHandler }
//             placeholder="Organization name"
//             required
//             />
//         <button className='submit-create-organization-btn'>Create Organization</button>
//         </form>
//       </div>
//     );
//   }
// }

export default CreateForm;
