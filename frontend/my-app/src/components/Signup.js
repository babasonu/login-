import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectdata = async () => {
    console.warn(name, email, password);
    try {
      let result = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "content-type": "application/json",
        },
      });

      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      console.log("date submitted", result.date)
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.log ("error",error)
    }
  };

  return (
    <div className=" input01">
      <h1> Ragister </h1>
      <input
        type="text"
        placeholder="enter your name "
        onChange={(e) => setName(e.target.value)}
        className="inputbox"
        value={name}
      />

      <input
        type="text"
        placeholder="enter your email "
        onChange={(e) => setEmail(e.target.value)}
        className="inputbox"
        value={email}
      />
      <input
        type="text"
        placeholder="enter your password  "
        className="inputbox"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={collectdata} className="submit01">
        submit
      </button>
    </div>
  );
};

export default Register;
