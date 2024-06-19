import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getDocs(collection(db, "Posts"));
        const posts = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    fetchPosts();

    return () => unsubscribe();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "Posts", postId));
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Posts</h1>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.id} className="m-2 bg-black rounded-lg ">
              <div className="px-3 pt-1">
                <div className="flex justify-between w-full p-1.5 text-sm align-middle text-gray-300 ">
                  <h4 className="p-1.5 font-bold">{post.username}</h4>
                  {currentUser?.uid === post.user_id && (
                    <div className="p-1.5 flex flex-row gap-3">
                      <button
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigate(`/edit-post/${post.id}`)}>
                        Edit
                      </button>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(post.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <img
                  src={post.content}
                  alt={post.username}
                  className="pt-1.5 rounded-lg w-fit"
                  // width={500}
                  // height={500}
                />
                <div className="flex justify-between w-full p-1.5 text-sm align-middle">
                  <p className="text-gray-300 max-w-fit">
                    <span className="font-bold">{post.username}:</span>{" "}
                    TDGAPgpdskgpdskpgkpdss
                  </p>
                  <div>
                    <p className="text-gray-300">
                      {" "}
                      <span className="font-bold">Likes:</span> {post.likes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
