import React from 'react';

const FormAction = () => {

const handleFormAction = (formData) => {
  // formData.preventDefault()
  console.log(formData.get('name'))
  console.log(formData.get('email'))
}


  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name='name' placeholder='Name' />
        <br />
        <input type="email" name='email' placeholder='email' />
        <br />
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default FormAction;