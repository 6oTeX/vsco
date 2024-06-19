import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newContent, setNewContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = await getDoc(doc(db, "Posts", id));
        if (postDoc.exists()) {
          setPost(postDoc.data());
          setNewContent(postDoc.data().content);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "Posts", id), {
        content: newContent,
      });
      navigate("/explore");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {post && (
        <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-300">Edit Post</h1>
          <form onSubmit={handleUpdate}>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300">
                Content
              </label>
              <input
                type="text"
                name="editContent"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="block w-full mt-1 text-gray-300 bg-gray-700 border-gray-600 rounded-md shadow-sm"
                required
              />
            </div>
            <img
              src={post.content}
              alt={post.username}
              className="pt-1.5 rounded-lg w-fit"
            />
            <div className="mt-4">
              <button
                type="submitEdit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPost;
