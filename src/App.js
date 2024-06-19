import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./auth";
import UserDetails from "./components/userDetails";
import Login from "./login";
import CreatePost from "./components/createPost";
import Posts from "./components/posts";
import HomePage from "./homePage";
import EditPost from "./components/editPost"; // Import the EditPost component
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ExplorePage from "./explorePage";

function App() {
  const [uid, setUid] = useState(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

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

  return (
    <div className="flex w-full h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            element={uid ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:uid" element={<UserDetails />} />
          <Route
            path="/create-post"
            element={uid ? <CreatePost uid={uid} /> : <Navigate to="/login" />}
          />
          <Route path="/posts" element={<Posts />} />
          <Route
            path="/home"
            element={<HomePage isSidebarExpanded={isSidebarExpanded} />}
          />
          <Route
            path="/explore"
            element={<ExplorePage isSidebarExpanded={isSidebarExpanded} />}
          />
          <Route path="/edit-post/:id" element={<EditPost />} />{" "}
          {/* Add the EditPost route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
