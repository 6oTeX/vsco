import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/auth";
import UserDetails from "./components/userDetails";
import Login from "./components/login";
import Nav from "./components/nav";
import CreatePost from "./components/createPost";
import Posts from "./components/posts";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex w-full h-screen">
      <Router>
        <Nav isUser={isSidebarExpanded} handleToggle={handleToggleSidebar} />
        <div
          className={`p-10 ${
            isSidebarExpanded ? "ml-16" : "ml-52"
          } transition-all duration-300`}>
          <CreatePost />
          <Posts />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:uid" element={<UserDetails />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
