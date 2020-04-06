import gql from 'graphql-tag'

const getOrganizations = gql`
   query getOrganizations {
        organizations {
          name
          id
        }
      }
      `
export default getOrganizations