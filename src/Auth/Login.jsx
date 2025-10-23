import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContex";

const Login = () => {
  const { signIn } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 space-y-3">
        <div className="text-center">
          <h4 className="font-semibold text-4xl mb-4">Welcome Back</h4>
          <p className="text-primary text-sm">
            Login to continue your green journey
          </p>
        </div>
        <form onSubmit={handleLogin} action="" className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
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
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
            {/* main login button */}
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <div className="my-2 text-center">
              <p>OR CONTINUE WITH</p>
            </div>
            <button className="btn">Continue With Google</button>
            <p className="text-center mt-2 flex items-center justify-center">
              Don't have an account?
              <Link to="/auth/register" className="text-primary px-1">
                {" "}
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
