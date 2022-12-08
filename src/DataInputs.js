import React, { useState } from "react";

function DataInputs() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userDetails, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);
    console.log(records);

    setUserDetails({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  // setRecords ([...records, newRecords]);

  return (
    <div
      className="h-screen flex flex-col 
      items-center justify-center bg-purple-400 "
    >
      <form action="" onSubmit={handleSubmit}>
        <div className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-1 border 
                              border-gray-200 rounded mb-2 bg-purple-300">
          <label htmlFor="username"> Full Name :</label>
          <input
            type="text"
            autoComplete="off"
            value={userDetails.username}
            onChange={handleInput}
            name="username"
            id="username"
          ></input>
        </div>

        <div className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-1 border 
                              border-gray-200 rounded mb-2  bg-purple-300">
          <label htmlFor="email"> E-mail :</label>
          <input
            type="text"
            autoComplete="off"
            value={userDetails.email}
            onChange={handleInput}
            name="email"
            id="email"
          ></input>
        </div>

        <div className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-1 border 
                              border-gray-200 rounded mb-2  bg-purple-300">
          <label htmlFor="phone"> Contact : </label>
          <input
            type="text"
            autoComplete="off"
            value={userDetails.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          ></input>
        </div>

        <div className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-1 border 
                              border-gray-200 rounded mb-2  bg-purple-300">
          <label htmlFor="password"> Password :</label>
          <input
            type="password"
            autoComplete="off"
            value={userDetails.password}
            onChange={handleInput}
            name="password"
            id="password"
          ></input>
        </div>

        <button
          className="bg-green-400 w-full mt-4 tracking-wider  "
          type="submit"
        >
          {" "}
          Register{" "}
        </button>
      </form>

      <div>
        {records.map((element) => {
          return (
            <div className=" " key={element.id}>
              <p> {element.username}</p>
              <p> {element.email}</p>
              <p> {element.phone}</p>
              <p> {element.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DataInputs;
