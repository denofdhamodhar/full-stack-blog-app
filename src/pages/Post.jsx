import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../appwrite/config";
import Container from "../Layout/Container";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, SetPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthour = post && userData ? post.userId == userData.$id : false;

  useEffect(() => {
    async function fetchPost() {
      await Services.getPost(slug).then((result) => {
        if (result) {
          SetPost(result);
        }
      });
    }
    fetchPost();
  }, [slug, navigate]);

  async function deletePost() {
    try {
      if (post.featuredImage) {
        try {
          await Services.deleteFile(post.featuredImage);
        } catch (error) {
          console.warn(
            "Cover image delete failed, continuing post deletion:",
            error,
          );
        }
      }
      await Services.deletePost(post.$id);
      navigate("/");
    } catch (error) {
      console.error("Delete post failed:", error);
    }
  }

  return (
    <Container>
      <div className="w-full h-auto px-4 my-4 sm:my-8 max-w-lg lg:max-w-full mx-auto lg:px-6 overflow-x-hidden">
        <div className="mx-auto w-full">
          <img
            className="h-96 lg:h-125 object-center object-cover w-full"
            src={Services.getFile(post.featuredImage)}
            alt={post.title}
          />
        </div>
        <div className="my-6">
          <h1 className="font-headings font-bold leading-relaxed text-pretty md:text-balance pb-4 text-xl lg:text-2xl xl:text-3xl uppercase px-2.5">
            {post.title}
          </h1>
          <p className="font-subparagraph leading-1 text-left px-2.5 font-medium text-sm text-slate-500">
            Written by<span className="lowercase "> {post.authour}</span>
          </p>
          <div className="px-2.5 mt-8 font-paragraph leading-8 text-left md:text-justify hyphens-auto">
            <div>{post.content ? parse(post.content) : ""}</div>
          </div>
          {isAuthour && (
            <div className="flex items-center my-6 gap-x-2.5">
              <Button
                onClick={() => navigate(`/edit-post/${post.$id}`)}
                label={"Edit Post"}
                bgColor="bg-amber-400"
                className={"font-semibold"}
              />
              <Button
                onClick={deletePost}
                label={"Delete Post"}
                bgColor="bg-red-600"
                className={"font-semibold"}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Post;
