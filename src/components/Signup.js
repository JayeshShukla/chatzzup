import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/fire";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          background: "#c1e1ec",
          margin: "auto",
          marginTop: "50px"
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Sign Up</h5>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={{ marginTop: "20px" }}
            onChange={(e) => handleChange(e)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            style={{ marginTop: "20px" }}
            onChange={(e) => handleChange(e)}
            value={password}
          />
          <button
            type="button"
            className="btn btn-success"
            style={{ marginTop: "20px" }}
            onClick={() => handleSubmit()}
          >
            Sigup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
