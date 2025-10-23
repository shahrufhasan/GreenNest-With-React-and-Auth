import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContex";
import { Link, useNavigate } from "react-router";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { user, loading, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) navigate("/");
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user, loading, navigate]);

  if (loading) return <Loading />;
  if (!user) return null;

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdating(true);
    setError("");

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setEditMode(false);
      })
      .catch((err) => setError(err.message))
      .finally(() => setUpdating(false));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <img
        src={photo || "https://via.placeholder.com/150"}
        alt={name}
        className="max-w-sm rounded-lg shadow-2xl"
      />

      {editMode ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-3 w-80">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Display Name"
            className="input"
            required
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL"
            className="input"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={updating}>
            {updating ? "Updating..." : "Update Profile"}
          </button>
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-4xl font-bold">{user.displayName}</h1>
          <p>{user.email}</p>
          <button
            className="btn btn-primary px-10"
            onClick={() => setEditMode(true)}
          >
            Update Profile
          </button>
          <Link className="btn btn-outline btn-secondary px-7" to="/">
            Go Back To Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
