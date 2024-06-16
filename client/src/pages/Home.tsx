import { useState } from "react";
import { AddPost } from "../api/api-client";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleAddPost = async () => {
    try {
      setLoading(true);

      await AddPost({ title, content });
      alert("Post added Successfully");
      setTitle("");
      setContent("");

      setLoading(false);
      navigate("/my-post")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex mt-10 justify-center ">
        <div className=" w-[380px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div className="flex flex-col justify-center gap-4">
            <h5 className="text-2xl uppercase text-center">Title</h5>

            <input
              type="text"
              className="border border-gray-200 rounded-lg p-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h5 className="text-2xl uppercase text-center">Content</h5>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name=""
              id=""
              className="rounded-lg border p-3"
            />

            <button
              onClick={handleAddPost}
              type="button"
              className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80"
            >
              {loading ? "Loading" : "Add Post"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
