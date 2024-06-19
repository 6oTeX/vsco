import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CreatePosts = ({ uid }) => {
  const [newContent, setNewContent] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      if (uid) {
        try {
          const userDoc = await getDoc(doc(db, "Users", uid));
          if (userDoc.exists()) {
            setNewUsername(userDoc.data().username);
          } else {
            console.error("No such document!");
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUsername();
  }, [uid]);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newContent.trim() || !newUsername.trim()) {
      alert("Username or content cannot be empty.");
      return;
    }

    try {
      await addDoc(collection(db, "Posts"), {
        user_id: uid,
        username: newUsername,
        content: newContent,
        likes: 0,
      });
      setNewContent("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleCreatePost} className="space-y-6">
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-gray-300 text-start">
            Post Content
          </label>
          <div className="mt-2">
            <input
              id="content"
              name="content"
              type="text"
              autoComplete="content"
              onChange={(e) => setNewContent(e.target.value)}
              value={newContent}
              required
              className="block w-full rounded-md border-0 py-1.5 bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 text-gray-300 sm:text-sm pl-2 sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-3 py-2 text-sm font-semibold text-gray-300 bg-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-white hover:bg-gray-800">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePosts;
