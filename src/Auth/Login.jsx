import React, { useState, use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContex";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle, setUser, logOut } = use(AuthContext);
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
        setUser(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => setError(error.code));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (result) => {
        // Check if the user is new
        const isNewUser = result._tokenResponse?.isNewUser;
        if (isNewUser) {
          // If the user is new, log them out and show alert
          await logOut();
          alert(
            "This Google account is not registered. Please register first."
          );
        } else {
          // Existing Google user, log in normally
          setUser(result.user);
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5 space-y-3">
        <div className="text-center">
          <h4 className="font-semibold text-4xl mb-4">Welcome Back</h4>
          <p className="text-primary text-sm">
            Login to continue your green journey
          </p>
        </div>

        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button type="submit" className="btn btn-primary mt-4 w-full">
            Login
          </button>

          <div className="my-2 text-center">OR CONTINUE WITH</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn w-full flex items-center justify-center gap-2"
          >
            <FcGoogle /> Continue With Google
          </button>

          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary px-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
