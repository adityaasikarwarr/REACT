import React, { useState } from "react";

function MyComponent() {

  const [name, setName] = useState("hello");
  const [age, setAge] = useState(20);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Aditya Sikarwarr");
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmploye = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>

      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age : {age}</p>
      <button onClick={IncrementAge}>Increment age </button>

      <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmploye}>Employee Status</button>

    </div>
  );
}

export default MyComponent;
