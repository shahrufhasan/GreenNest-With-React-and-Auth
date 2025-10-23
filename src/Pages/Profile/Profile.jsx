import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthContex";
import { Link, useNavigate } from "react-router";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) return <Loading />;

  if (!user) return null;

  const { displayName, email, photoURL } = user;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <img
        src={photoURL}
        alt={displayName}
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <h1 className="text-4xl font-bold">{displayName}</h1>
      <p>{email}</p>
      <Link className="btn btn-primary" to="/">
        Go Back To Home
      </Link>
    </div>
  );
};

export default Profile;
