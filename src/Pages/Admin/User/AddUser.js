import React, { useState } from 'react'

import "./AddUser.css";

import AdminService from "../../../Services/admin.service"

export default function AddUser() {
  const initialState = {
    name: "",
    phone: "",
    password: "",
    address: ""
  };

  const [state, setState] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    AdminService.postClient(state).then(console.log(state)).then(clearState)
  };


  return (

    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="John"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          required
        />
        <label>Phone</label>
        <input
          type="text"
          placeholder="+84 123 456 78"
          name="phone"
          value={state.phone}
          onChange={handleOnChange}
          required 
          />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleOnChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          placeholder="New York | USA"
          name="address"
          value={state.address}
          onChange={handleOnChange}
          required
        />

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
