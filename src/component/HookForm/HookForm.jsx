import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br />
        <input onChange={emailOnChange} type="email" />
        <br />
        <input type="password" onChange={passwordOnChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default HookForm;
