import React from "react";

const Checkbox = ({ checked, id, htmlfor, name }) => {
  return (
    <div class="new">
      <div class="form-group">
        <input
          onChange={(e) => console.log(e.target.checked)}
          name={name}
          checked={checked}
          type="checkbox"
          id={id}
        />
        <label htmlFor={htmlfor}> </label>
      </div>
    </div>
  );
};

export default Checkbox;
