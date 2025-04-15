import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("secret");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" required />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="password"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ControlledField;
