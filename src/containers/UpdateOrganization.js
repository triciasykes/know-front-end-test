import React from "react";

   
const UpdateForm = (props) => (
      <div className="update-organization-form">
        <form onSubmit={props.onSubmit}>
          <input
            value={props.inputText}
            onChange={props.onChange}
            required
          />
          <button className="update-organization-btn"> update </button>
        </form>
      </div>
    );



export default UpdateForm;

