import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/fire";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div>This is Home Page</div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => handleLogout()}
      >
        Sign Out
      </button>
    </>
  );
};

export default Home;
