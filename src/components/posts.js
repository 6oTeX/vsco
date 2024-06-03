import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const Posts = () => {
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

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Posts</h1>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.user_id} className="p-4 mb-4 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-bold">{post.username}</h2>
              <img src={post.content} alt={post.username} className="mt-2" />
              <p className="mt-2 text-gray-300">{post.likes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Posts;
