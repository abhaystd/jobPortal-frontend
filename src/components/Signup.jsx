
import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
const Signup = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conformPassword: "", 
    file: File, // To store the uploaded file
  });
  console.log(user);
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const fileChangeHandler = (e) => {
    setUserDetails({
      ...user,
      file: e.target.files[0],
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (values.password !== values.conformPassword) {
      errors.conformPassword = "Passwords must match";
    }
    if (!values.file) {
      errors.file = "Resume is required";
    }
    return errors;
  };

  const signupHandler = async (e) => {

    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const formData = new FormData();
      formData.set("firstName", user.firstName);
      formData.set("lastName", user.lastName);
      formData.set("email", user.email);
      formData.set("password", user.password);
      formData.set("conformPassword", user.conformPassword);
      formData.append("file", user.file);

      console.log(formData);
      // /api/v1/signup
      // const base_url="http://localhost:4000"
      const base_url="https://job-portal-backend-piiu.onrender.com"
      try {
        const response = await axios.post(`${base_url}/api/v1/signup`, formData
          , {
          headers: {
            "Content-Type": "multipart/form-data",
          },}
        );
        alert(response.data.message);
      } 
      catch (error) {
        console.error("There was an error signing up!", error);
        alert("Failed to register. Please try again.");
      }
    }
  };

  return (
    <div className="register">
      <form onSubmit={signupHandler}>
        <h1>Fill up the info.</h1>
        
        <label htmlFor="firstName">
          First name:
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.firstName}
          />
        </label>
        <p className="error">{formErrors.firstName}</p>

        <label htmlFor="lastName">
          Last name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lastName}
          />
        </label>
        <p className="error">{formErrors.lastName}</p>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
        </label>
        <p className="error">{formErrors.email}</p>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
        </label>
        <p className="error">{formErrors.password}</p>

        <label htmlFor="conformPassword">
          Confirm pass:
          <input
            type="password"
            name="conformPassword"
            id="conformPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.conformPassword}
          />
        </label>
        <p className="error">{formErrors.conformPassword}</p>

        <label htmlFor="resume">
          Resume:
          <input
            type="file"
            name="file"
            id="resume"
            onChange={fileChangeHandler}
          />
        </label>
        <p className="error">{formErrors.resume}</p>
        <p className="redAlert">Please wait while we process your request after you've clicked the registration button.</p>
        <p>A alert will show after registration it can take time upto 45 second.</p>
        <button className="button_common" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;

