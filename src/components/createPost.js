import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const CreatePosts = () => {
  const [newContent, setNewContent] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const fetchUsername = async (userId) => {
      try {
        const userDocRef = doc(db, "Users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setNewUsername(userDoc.data().username);
        } else {
          console.error("No such document!");
          setError("User not found");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchUsername(user.uid);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const createPost = async () => {
    if (!newUsername || !newContent) {
      setError("Username or content cannot be empty.");
      return;
    }

    try {
      await addDoc(postsCollectionRef, {
        username: newUsername,
        content: newContent,
        user_id: currentUser.uid,
        likes: 0,
        isPrivate: false,
      });
      setNewContent("");
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center border-2 border-black border-solid rounded">
        <p className="p-2 mt-4 text-red-500">
          You must be logged in to create a post.
        </p>
        <button
          className="p-2 mt-4 text-white bg-blue-500 rounded-lg"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-2 border-2 border-black border-solid rounded w-fit">
      <h1>
        Create a post as <span className="font-bold">{newUsername}</span>
      </h1>
      <input
        type="text"
        value={newUsername}
        readOnly
        className="p-2 mt-4 border-2 border-black border-solid rounded"
        placeholder="Username"
      />
      <input
        type="text"
        placeholder="Enter your post content"
        className="p-2 mt-4 border-2 border-black border-solid rounded"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button
        className="p-2 mt-4 text-white bg-blue-500 rounded-lg"
        onClick={createPost}
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePosts;
