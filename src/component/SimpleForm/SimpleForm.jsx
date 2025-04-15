import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submit",e.target.name.value);
    console.log("form submit",e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="email"/>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
