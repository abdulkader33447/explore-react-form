import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email, password);
    if (password.length < 6) {
      setError("password must be 6 character or longer .");
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 character or longer .");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          defaultValue={name}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          defaultValue={email}
          placeholder="email"
          required
        />
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
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
