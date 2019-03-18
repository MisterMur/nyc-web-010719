import React from "react";

const HogForm = props => {
  return (
    <div className="" onChange={e => props.handleSort(e.target.value)}>
      <select name="sort">
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <input
        type="checkbox"
        value="greased"
        onChange={props.handleFilterPigs}
      />
    </div>
  );
};

export default HogForm;
