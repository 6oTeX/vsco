import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate(`/details/${user.uid}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
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
                Create your new account
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium leading-6 text-gray-300">
                    Sign in with
                  </p>

                  <div className="grid grid-cols-3 gap-3 mt-2">
                    <div>
                      <a
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-gray-900 focus:outline-offset-0">
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-gray-900 focus:outline-offset-0">
                        <span className="sr-only">Sign in with Twitter</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-gray-900 focus:outline-offset-0">
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true">
                    <div className="w-full border-t border-white" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-100 bg-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
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
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        autoComplete="current-password"
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
                      onClick={signUp}
                      className="flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-gray-800">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
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
    </>
  );
};
export default Auth;
