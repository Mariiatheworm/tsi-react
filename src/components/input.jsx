import React, { useState } from "react";

const Input = ({label}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
        {label}
      <input
        className="border border-black rounded-xl"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
};

export default Input;


