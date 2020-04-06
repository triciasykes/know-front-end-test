import React from "react";
import Header from "./Header";

const UpdateForm = props => (
  <div>
    <Header sectionTitle={"Update Organization"} />
    <div className="update-organization-form">
      <form onSubmit={props.onSubmit}>
        <input value={props.inputText} onChange={props.onChange} required />
        <button className="update-organization-btn"> update </button>
      </form>
    </div>
  </div>
);

export default UpdateForm;
