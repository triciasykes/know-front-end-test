import React, { Component } from 'react';
// import Amplify from 'aws-amplify';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries.graphql'



  const orgID = "abc123"


async function queryFetch(query, id) {
    const res = await fetch(API.graphql(graphqlOperation(query, { input: { id }})), {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: {
        input: {
          id: id
        }
      }
    })
  });
  return await res.json();
}

function getOrganizations(id) {
  return queryFetch(`
  query getOrgs($id: ID!){
  	organization(id: $id) {
      name: name
      companies {
        name
        id
      }
    }
  

       `, { id: id }).then(data => {
           console.log(data)
       })   
}
    
const orgs = getOrganizations(orgID)


    class Organizations extends Component {

        constructor(){
            super()
           this.state = { 
               organizations: [],
               companies: []
           }
        }
       
        componentDidMount() {
          try {
             queryFetch(orgs, orgID)
          } catch(err) {
            return err
          }
        }
     

      
    
    render() {

        return ( 
         <div>
           <div className="org-name">
           {
             <p>{this.state.organizationName} -- id:{this.state.organizationID}</p>
      
           }
           </div>
           <div className="list">
             {
             this.state.companies.map((company, index ) => (
               <p  key={index}>{company.id}:  {company.name}</p>
             ))
           }
           </div>
        </div>
         
        );
      }
    }

export default Organizations;
