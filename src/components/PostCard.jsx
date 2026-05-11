import Services from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <div>
       <Link to={`/post/${$id}`}>
      <div className="max-w-75 shadow-lg backdrop-blur-2xl shadow-slate-400/50 h-72 overflow-hidden">
        <img src={Services.getFile(featuredImage)} alt={title} className="w-full h-60 object-cover" />
        <h1
          className="font-semibold p-2 flex justify-center items-center text-center text-wrap font-subheadings"
        >
          {title ? title.slice(0, 40) + "..." : "Untitled Post"}
        </h1>
      </div>
    </Link>
   </div>
  );
}

export default PostCard;
