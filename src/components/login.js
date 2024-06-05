import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/dashboard"); // Redirect to the dashboard or home page after login
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-full bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <img
              className="w-auto h-12 mx-auto text-center"
              src="https://cdn.cookielaw.org/logos/92fde338-ebfd-46b1-a470-ca95a04a4b8d/018e3e2c-ec43-7c82-957c-894f4ab401b0/ac653fba-f539-439a-869d-d5fa8e74868d/VSCO-logo-white.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-300">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            <form onSubmit={signIn} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-300 text-start">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 text-gray-300 sm:text-sm pl-2 sm:leading-6"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-300 text-start">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 text-gray-300 sm:text-sm pl-2 sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-gray-300 hover:text-gray-400">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-gray-800">
                  Sign In
                </button>
              </div>
            </form>
            <p className="mt-2 text-sm text-center text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/auth"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Apple-iPhone-13-Black-And-White-BW-Photo.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
