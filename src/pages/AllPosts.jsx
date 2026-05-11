import { useEffect, useState } from "react";
import Container from "../Layout/Container";
import Services from "../appwrite/config";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    async function getAllPosts() {
      await Services.getAllPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
    getAllPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        {!authStatus && (
          <div className="w-full min-h-screen">
            <div className="p-8 font-paragraph  bg-slate-900 text-white mx-8 mt-8 rounded-md font-medium">
              <h1 className="mb-2 lg:text-md">Log in to read the posts</h1>
              <div className="flex gap-x-2 mt-4">
                <Link to="/signup">
                  <Button
                    label="Signup"
                    bgColor="bg-amber-400"
                  />
                </Link>
                <Link to="/login">
                  <Button
                    label="Login"
                    bgColor="bg-red-600"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
        {authStatus && (
          <div className="w-full min-h-screen">
            <h1 className="p-8 font-paragraph  bg-slate-900 text-white mx-8 mt-8 rounded-md font-medium">
              No posts yet. Create post.
            </h1>
          </div>
        )}
      </Container>
    );
  }

  return (
    <Container>
      <div className="px-4 sm:my-20 my-10 max-w-lg lg:max-w-full mx-auto lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 sm:gap-x-10 lg:gap-x-2 xl:gap-y-14">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </Container>
  );
}

export default AllPosts;
