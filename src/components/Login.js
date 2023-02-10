import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/fire";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [haveAnAcc, setHaveAnAcc] = useState(true);

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setHaveAnAcc(false);
      });
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          background: "#28282B",
          margin: "auto",
          marginTop: "50px"
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Log In
          </h5>
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
            placeholder="Enter Password"
            style={{ marginTop: "20px" }}
            onChange={(e) => handleChange(e)}
            value={password}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
            onClick={() => handleSubmit()}
          >
            Loged In
          </button>
        </div>
        {!haveAnAcc && <a href="/signup">Dont have an Account? Sign up</a>}
      </div>
    </>
  );
};

export default Login;
