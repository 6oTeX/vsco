import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Ensure the correct path to your firebase configuration
import { doc, setDoc } from "firebase/firestore"; // Ensure you import the necessary Firestore functions

export const UserDetails = () => {
  const { uid } = useParams();
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const saveUserDetails = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "Users", uid), {
        username,
        dateOfBirth,
        followers: [],
        following: [],
      });
      navigate("/home"); // Redirect to the profile or home page after saving details
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-full bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-300">
            Complete your profile
          </h2>
          <form onSubmit={saveUserDetails} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-300 text-start">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 text-gray-300 sm:text-sm pl-2 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium leading-6 text-gray-300 text-start">
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  autoComplete="dateOfBirth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 text-gray-300 sm:text-sm pl-2 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-gray-800">
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative flex-1 w-full lg:block">
        <img
          className="object-cover w-full h-full "
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Apple-iPhone-13-Black-And-White-BW-Photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default UserDetails;
