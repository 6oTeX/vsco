import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // Redirect to the dashboard or home page after login
    } catch (err) {
      setErrorMessage("Invalid email or password. Please try again.");
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user details exist in Firestore
      const userDocRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // If user details exist, navigate to home
        navigate("/home");
      } else {
        // If user details do not exist, navigate to user details page
        navigate(`/details/${user.uid}`);
      }
    } catch (err) {
      setErrorMessage("Google sign-in failed. Please try again.");
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

          {errorMessage && (
            <div className="mt-4 text-center text-red-500">{errorMessage}</div>
          )}

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium leading-6 text-gray-900">
                  Sign in with
                </p>

                <div className="flex justify-center w-full mt-2 align-middle">
                  <div>
                    <button
                      onClick={signInWithGoogle}
                      className="flex justify-center w-full px-3 py-2 text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-gray-800">
                      <span className="pr-2">Sign in with Google</span>

                      <svg
                        className="w-5"
                        aria-hidden="true"
                        viewBox="0 0 24 24">
                        <path
                          d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                          fill="#EA4335"></path>
                        <path
                          d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                          fill="#4285F4"></path>
                        <path
                          d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                          fill="#FBBC05"></path>
                        <path
                          d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                          fill="#34A853"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-300 bg-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>
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

export default Login;
