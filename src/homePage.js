import React from "react";
import Nav from "./components/nav";
import { useState } from "react";

const HomePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div>
      <Nav isUser={isSidebarExpanded} handleToggle={handleToggleSidebar} />

      <div
        className={`flex justify-center w-full transition-all duration-300 ${
          isSidebarExpanded ? "ml-16" : "ml-52"
        }`}>
        <div className="w-full p-10">
          <h1 className="text-3xl font-bold">Home</h1>
          <p className="mt-4 text-gray-300">
            Welcome to the home page. This is a protected route.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
