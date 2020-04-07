import gql from 'graphql-tag'

export const GET_ORGANIZATIONS = `
   query getOrganizations {
        organizations {
          name
          id
        }
      }
      `
export const CREATE_ORGANIZATION =
  `mutation CreateOrg($input: CreateOrganizationInput) {
    createOrganization(input: $input) {
      id
      name
    }
  }`;

export const UPDATE_ORGANIZATION = 
  `mutation updateOrganization($input: UpdateOrganizationInput) {
    updateOrganization(input: $input) {
      name
    }
}
`;


//----this works directly in app---////
// mutation updateOrg {
//   updateOrganization(input: {
//       id: "${organization.id}"
//       name: "${organization.name}"
//   }) {
//       id
//       name
//   }
// }
// `;