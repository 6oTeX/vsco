import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Posts from "./components/posts";
import CreatePosts from "./components/createPost";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const ExplorePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [uid, setUid] = useState(null);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        console.log(user.uid);
      } else {
        setUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex w-full h-full">
      <Nav isUser={isSidebarExpanded} handleToggle={handleToggleSidebar} />
      <div
        className={`flex flex-col w-full h-full transition-all duration-300 bg-black text-white ${
          isSidebarExpanded ? "ml-16" : "ml-52"
        }`}>
        <div className="w-full h-full p-10">
          <h1 className="text-3xl font-bold">VSCO</h1>
          <div className="">
            {uid ? (
              <div className="absolute p-4 text-white bg-gray-300 right-12 w-fit rounded-xl">
                <CreatePosts uid={uid} />
              </div>
            ) : (
              <p>Please log in to create posts.</p>
            )}
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default ExplorePage;
