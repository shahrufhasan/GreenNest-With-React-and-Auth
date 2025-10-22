import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-green-50  ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="text-center ">
          <h4 className="font-semibold text-4xl mb-4">Join GreenNest</h4>
          <p className="text-primary text-sm">
            Login to continue your green journey
          </p>
        </div>
        <form action="" className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
