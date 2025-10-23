import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContex";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [nameError, setNameError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (nameError.length < 6) {
      setNameError("Name should be at least 6 characters");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({ name, email, photo, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 space-y-3">
        <div className="text-center">
          <h4 className="font-semibold text-4xl mb-4">Join GreenNest</h4>
          <p className="text-primary text-sm">
            Login to continue your green journey
          </p>
        </div>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {/* Register Button */}
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            <div className="my-2 text-center">
              <p>OR CONTINUE WITH</p>
            </div>
            <button className="btn">Continue With Google</button>
            <p className="text-center mt-2 flex items-center justify-center">
              Aready Have An Account?{" "}
              <Link to="/auth/login" className="text-primary px-1">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
