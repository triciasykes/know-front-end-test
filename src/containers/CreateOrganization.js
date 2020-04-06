import React from "react";
import Header from './Header'

const CreateForm = (props) => {
  return (
      <div>
        <Header sectionTitle={"Create Organization"} />
        <div className="create-organization-form">

          <form onSubmit={props.onSubmit} >
            <input
              type="text"
              placeholder="organization name"
              value={props.inputValue}
              onChange={props.onInputChange}
            />
            <button className="create-organization-btn">Create</button>
          </form>
        </div>
      </div>
      )
  }



export default CreateForm;
