import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

class Organization extends Component {


    render(){
        const profile = this.props
        return(
            <div className="single-organization">
                <div className="profile-name" onClick={this.handleClick}>{profile.name}</div>
            </div>
        )
    }
  
  }



//   onChangeHandler = (event) =>{
//     this.setState({ name: event.target.value})

//   }

  
//   handleSubmit = async event => {
//     event.preventDefault();
//     const updateOrganization = `
//         mutation updateOrg {
//             updateOrganization(input: {
//                 id: "${this.props.orgID}"
//                 name: "${this.state.value}"
//             }) {
//                 id
//                 name
//             }
//         }
//         `;
//         try {
//          const resp = await API.graphql(graphqlOperation(updateOrganization));
//          console.log(resp)
//          alert('Organization updated')
//          this.clearForm()
//         } catch(err) {
//             alert('There was an error')
//             console.log(err)
//         }
//   };

//   render() {
//     return (
//       <div className="update-organization-form">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={ this.props.onValueChange }
//             required
//           />
//           <button className="update-organization-btn"> update </button>
//         </form>
//       </div>
//     );
//   }
// }

export default Organization;
