import React from "react";


  const OrganizationList = (props) => (

        <ul>
        {props.organizationList.map(organization => 
            <li
              className="organization-name"
              key={organization.id}
              id={organization.id}
              onClick={() => props.handleClick(organization)}
            >
              {organization.name}
            </li>
          )}
        </ul>
      
    );

export default OrganizationList;


