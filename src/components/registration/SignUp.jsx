import { useState } from 'react'
import './registration.css'
import FormInput from './FormInput/FormInput'

import React from 'react'

const SignUp = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      label: 'First Name',
    },
    {
      id: 3,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      label: 'Last Name',
    },
    {
      id: 4,
      name: 'street',
      type: 'text',
      placeholder: 'Street',
      label: 'Street',
    },
    {
      id: 5,
      name: 'city',
      type: 'text',
      placeholder: 'City',
      label: 'City',
    },
    {
      id: 6,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
      label: 'Phone',
    },
    {
      id: 7,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 8,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ]

  //da se ne bi refreshovala cela stranica
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
