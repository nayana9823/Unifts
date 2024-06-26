import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authenticationContext";

import "./signupCard.css";
export const SignupCard = () => {
  const { signUpHandler } = useContext(AuthContext);
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="signup-card-container">
        <div className="signup-form-container">
          <div className="signup-form-header">
            <p> We are all out of ordinary!</p>
            <h1>SignUp</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signUpHandler(signUpDetails);
            }}
          >
            <input
              style={{ border: "1px solid black" }}
              id="signup-first-name"
              type="text"
              value={signUpDetails.firstName}
              onChange={(e) =>
                setSignUpDetails((prevState) => ({
                  ...prevState,
                  firstName: e.target.value,
                }))
              }
              placeholder="Enter First Name"
            />

            <input
              style={{ border: "1px solid black" }}
              id="signup-last-name"
              type="text"
              value={signUpDetails.lastName}
              onChange={(e) =>
                setSignUpDetails((prevState) => ({
                  ...prevState,
                  lastName: e.target.value,
                }))
              }
              placeholder="Enter Last Name"
            />

            <input
              style={{ border: "1px solid black" }}
              id="signup-email"
              type="email"
              value={signUpDetails.email}
              onChange={(e) =>
                setSignUpDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              placeholder="Enter Email Address"
            />

            <input
              style={{ border: "1px solid black" }}
              id="signup-pwd"
              type="text"
              value={signUpDetails.password}
              onChange={(e) =>
                setSignUpDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="fill-color-button"
              onClick={() => {
                signUpHandler();
              }}
            >
              Signup
            </button>
          </form>
          <p>
            Existing User?{" "}
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
