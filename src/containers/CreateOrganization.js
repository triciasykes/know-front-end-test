import React from "react";

const CreateForm = (props) => {
  return (
      <div>
        <div className="section-title"> 
        <p>Create Organization</p>
         </div>
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
