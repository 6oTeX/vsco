import React from "react";
import { useAuth } from "./api/AuthProvider"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

const Nav = ({ isUser, handleToggle }) => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 h-screen overflow-hidden">
      <div
        className={`flex flex-col items-center h-full overflow-hidden text-gray-400 bg-gray-900 rounded-e${
          isUser ? "-e w-16" : " w-52"
        }`}>
        <button
          className="flex items-center justify-center mt-3"
          onClick={handleToggle}>
          <img
            className="w-full h-8 rounded-full"
            src={
              isUser
                ? "https://assets.vsco.co/assets/images/homepage-2018/app-icon@2x.png"
                : "https://cdn.cookielaw.org/logos/92fde338-ebfd-46b1-a470-ca95a04a4b8d/018e3e2c-ec43-7c82-957c-894f4ab401b0/ac653fba-f539-439a-869d-d5fa8e74868d/VSCO-logo-white.png"
            }
            alt="avatar"
          />
        </button>
        {isUser ? (
          <div className="flex flex-col items-center mt-3 border-t border-gray-700">
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/home">
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <Link
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/explore">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 11C0 4.92525 4.92525 0 11 0C17.0747 0 22 4.92525 22 11C22 17.0747 17.0747 22 11 22C4.92525 22 0 17.0747 0 11ZM11.7218 19.9713C11.4837 19.9903 11.243 20 11 20C10.757 20 10.5163 19.9903 10.2782 19.9713C9.51921 19.2472 8.89448 17.4093 8.56135 15H13.4387C13.1055 17.4093 12.4808 19.2472 11.7218 19.9713ZM13.6375 13H8.36248C8.32156 12.3558 8.3 11.6866 8.3 11C8.3 10.3134 8.32156 9.64423 8.36248 9H13.6375C13.6784 9.64423 13.7 10.3134 13.7 11C13.7 11.6866 13.6784 12.3558 13.6375 13ZM15.2764 15C15.0641 16.7413 14.698 18.2548 14.1674 19.4247C16.3017 18.6196 18.0522 17.0256 19.0613 15H15.2764ZM19.776 13H15.4484C15.4829 12.3534 15.5 11.6852 15.5 11C15.5 10.3148 15.4829 9.64658 15.4484 9H19.776C19.9226 9.64342 20 10.3128 20 11C20 11.6872 19.9226 12.3566 19.776 13ZM6.55159 13C6.51705 12.3534 6.5 11.6852 6.5 11C6.5 10.3148 6.51705 9.64658 6.55159 9H2.22397C2.07741 9.64342 2 10.3128 2 11C2 11.6872 2.07741 12.3566 2.22397 13H6.55159ZM2.93868 15C3.94784 17.0256 5.69834 18.6196 7.83263 19.4247C7.30199 18.2548 6.9359 16.7413 6.72358 15H2.93868ZM10.2782 2.02866C9.51921 2.75278 8.89448 4.59072 8.56135 7H13.4387C13.1055 4.59072 12.4808 2.75278 11.7218 2.02866C11.4837 2.00968 11.243 2 11 2C10.757 2 10.5163 2.00968 10.2782 2.02866ZM15.2764 7H19.0613C18.0522 4.97444 16.3017 3.38036 14.1674 2.57531C14.698 3.74519 15.0641 5.25873 15.2764 7ZM2.93868 7H6.72358C6.9359 5.25873 7.30199 3.74519 7.83263 2.57531C5.69834 3.38036 3.94784 4.97444 2.93868 7Z"
                  fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        ) : (
          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to="/home">
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Home</span>
              </Link>
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                to="/explore">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11C0 4.92525 4.92525 0 11 0C17.0747 0 22 4.92525 22 11C22 17.0747 17.0747 22 11 22C4.92525 22 0 17.0747 0 11ZM11.7218 19.9713C11.4837 19.9903 11.243 20 11 20C10.757 20 10.5163 19.9903 10.2782 19.9713C9.51921 19.2472 8.89448 17.4093 8.56135 15H13.4387C13.1055 17.4093 12.4808 19.2472 11.7218 19.9713ZM13.6375 13H8.36248C8.32156 12.3558 8.3 11.6866 8.3 11C8.3 10.3134 8.32156 9.64423 8.36248 9H13.6375C13.6784 9.64423 13.7 10.3134 13.7 11C13.7 11.6866 13.6784 12.3558 13.6375 13ZM15.2764 15C15.0641 16.7413 14.698 18.2548 14.1674 19.4247C16.3017 18.6196 18.0522 17.0256 19.0613 15H15.2764ZM19.776 13H15.4484C15.4829 12.3534 15.5 11.6852 15.5 11C15.5 10.3148 15.4829 9.64658 15.4484 9H19.776C19.9226 9.64342 20 10.3128 20 11C20 11.6872 19.9226 12.3566 19.776 13ZM6.55159 13C6.51705 12.3534 6.5 11.6852 6.5 11C6.5 10.3148 6.51705 9.64658 6.55159 9H2.22397C2.07741 9.64342 2 10.3128 2 11C2 11.6872 2.07741 12.3566 2.22397 13H6.55159ZM2.93868 15C3.94784 17.0256 5.69834 18.6196 7.83263 19.4247C7.30199 18.2548 6.9359 16.7413 6.72358 15H2.93868ZM10.2782 2.02866C9.51921 2.75278 8.89448 4.59072 8.56135 7H13.4387C13.1055 4.59072 12.4808 2.75278 11.7218 2.02866C11.4837 2.00968 11.243 2 11 2C10.757 2 10.5163 2.00968 10.2782 2.02866ZM15.2764 7H19.0613C18.0522 4.97444 16.3017 3.38036 14.1674 2.57531C14.698 3.74519 15.0641 5.25873 15.2764 7ZM2.93868 7H6.72358C6.9359 5.25873 7.30199 3.74519 7.83263 2.57531C5.69834 3.38036 3.94784 4.97444 2.93868 7Z"
                    fill="currentColor"></path>
                </svg>

                <span className="ml-2 text-sm font-medium">Explore</span>
              </Link>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300">
          {currentUser ? (
            <button
              className="flex items-center justify-center w-full h-16 bg-red-800 hover:bg-red-700 hover:text-gray-200"
              onClick={logout}>
              <svg
                className="w-6 h-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 12L13 12"
                    stroke="#cfcfcf"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                    stroke="#cfcfcf"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                    stroke="#cfcfcf"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </g>
              </svg>
              <span className="ml-2 text-sm font-medium">Logout</span>
            </button>
          ) : (
            <>
              <Link
                className="flex items-center justify-center w-full h-16 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                to="/login">
                <span className="ml-2 text-sm font-medium">Login</span>
              </Link>
              <Link
                className="flex items-center justify-center w-full h-16 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                to="/auth">
                <span className="ml-2 text-sm font-medium">Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
