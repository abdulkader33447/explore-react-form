import React, { useRef} from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password)

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="email" />
        <br />
        <input ref={passwordRef} type="password" placeholder="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
