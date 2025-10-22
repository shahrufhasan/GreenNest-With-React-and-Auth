import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 space-y-3">
        <div className="text-center">
          <h4 className="font-semibold text-4xl mb-4">Join GreenNest</h4>
          <p className="text-primary text-sm">
            Login to continue your green journey
          </p>
        </div>
        <form action="" className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="text"
              type="email"
              className="input"
              placeholder="Name"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              name="text"
              type="email"
              className="input"
              placeholder="Photo URl"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Register</button>
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
