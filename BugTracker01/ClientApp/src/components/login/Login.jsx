import React, { useState, useEffect } from "react";
import "./login.css";
import bug from "../assets/bug.png";
import Button from "react-bootstrap/Button";
import { db } from "../fakedb/db.js";
import { useNavigate } from "react-router-dom";

import Alert from 'react-bootstrap/Alert';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [account, setAccount] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("name");
    localStorage.removeItem("role");
  }, []);

  const handleChange = () => {
    setAccount(account == "signup" ? "signin" : "signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emails = db.filter((e) => e.email === email);
  
    if (emails.length > 0) {
      const name = emails[0].name;
      const role = emails[0].role;
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
  
      toast.success("Logged in successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShow(false)  
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setError("Invalid email or password.");
      setShow(true);

    }
  };

  console.log(db);

  const handleSignup = (e) => {
    e.preventDefault();
    const schema = {
      id: db.length + 1,
      name: name,
      email: email,
      password: password,
    };

    db.push(schema);
    setName("");
    setEmail("");
    setPassword("");

    toast.success("Signed up successfuly!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      setAccount("signup");
    }, 3000);

    console.log("success");
    console.log(db[db.length - 1]);
  };

  if (account === "signup") {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="mainPage">
        <div className="loginContainer">
          <form onSubmit={handleLogin} className="loginForm">
            <div className="titles">
              <img style={{ top: 0, width: "30%" }} src={bug} />
              <h4 className="mt-1 mb-5 pb-1">BUGTRACKER APP.</h4>
            </div>
            <p>Please login to your account</p>
            <div className="content">
              <div className="field">
                <input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
              </div>
              <div className="field">
                <input
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                />
               
              <div className="pt-3">
                {show && <Alert  variant="danger" onClose={() => setShow(false)}>
                  <Alert.Heading>{error}</Alert.Heading>
                </Alert> }
              </div>
                <Button
                  className="mt-5"
                  style={{ backgroundColor: "rgba(255, 118, 48, 1)" }}
                  variant="danger"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>



            <p>
              Don't have an account?{" "}
              <a className="link-warning" onClick={handleChange}>
                Sign up.
              </a>
            </p>
          <p>Demo admin: admin@email.com<br/>
          Demo developer: dev@email.com<br/>
          password: enter something random</p>
          </form></div>
        </div>
      </>
    );
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="mainPage">
      <div className="loginContainer">
        <form onSubmit={handleSignup} className="loginForm">
          <div className="titles">
            <img style={{ top: 0, width: "30%" }} src={bug} />
            <h4 className="mt-1 mb-5 pb-1">BUGTRACKER APP.</h4>
          </div>
          <div className="content">
            <div className="field">
              <p>Please enter your credentials</p>
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className="field">
              <input
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                type="date"
              />
            </div>
            <div className="field">
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </div>
            <div className="field">
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />

            <div className="pt-3">
                {show && <Alert  variant="danger" onClose={() => setShow(false)}>
                  <Alert.Heading>{error}</Alert.Heading>
                </Alert> }
              </div>

              <Button
                style={{ backgroundColor: "#FF7630" }}
                className="mt-5"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>

          <p>
            Already registered?{" "}
            <a className="link-warning" onClick={handleChange}>
              Sign in.
            </a>
          </p>
        </form> 
        </div>
      </div>
    </>
  );
}

export default Login;
