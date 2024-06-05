import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const CreatePosts = () => {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        const posts = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  const [newUsername, setNewUsername] = useState("");
  const [newContent, setNewContent] = useState("");

  // Create new post
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      username: newUsername,
      content: newContent,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter your username"
        className="p-2 mt-4"
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter your post content"
        className="p-2 mt-4"
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
      />
      <button
        className="p-2 mt-4 text-white bg-blue-500 rounded-lg"
        onClick={createPost}>
        Create Post
      </button>
    </div>
  );
};
export default CreatePosts;
