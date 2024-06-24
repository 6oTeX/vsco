import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Posts from "./components/posts";
import CreatePosts from "./components/createPost";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const ExplorePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [uid, setUid] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex w-full">
      <Nav isUser={isSidebarExpanded} handleToggle={handleToggleSidebar} />

      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isSidebarExpanded ? "ml-16" : "ml-52"
        }`}>
        <div className="w-full p-10">
          <h1 className="text-3xl font-bold">VSCO</h1>
          <div className="flex flex-row items-center">
            <div className="w-1/2">
          <input
            type="text"
            placeholder="Search by username"
            className="w-1/3 p-2 mt-4 border-2 border-black border-solid rounded"
            onChange={handleSearch}
          />
          </div>
          <div className="w-1/2">
          <CreatePosts />
            
          </div>
          </div>
  
          <Posts searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
