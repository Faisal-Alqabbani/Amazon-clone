import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  sign in function
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // some fancy firebase login Something.
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successflly created a user with email and password!
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
    // some fancy firebase Register!
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__singinButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By Singing in you aree the fake Amazon clone condition of use & Sale.
          Please see our privacy notice, our cookies notice our Interested based
          Ads notice!{" "}
        </p>
        <button
          type="submit"
          className="login__registerButton"
          onClick={register}
        >
          Create an Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
