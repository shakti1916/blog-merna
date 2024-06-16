import { useEffect, useState } from "react";
import { DeletePost, GetMyPost } from "../api/api-client";
import { AddPostResponse } from "../response/add-post";


const MyPost = () => {
    const [getMyPost,setMyPost] = useState<AddPostResponse[]>([])


    const fetchPost = async() => {
        try {

            const posts = await GetMyPost();
            setMyPost(posts)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleDeletePost = async (id:string) => {
        try {
            await DeletePost(id);
            setMyPost(getMyPost.filter(post=>post._id !== id))
            alert('Post deleted Successfully')
            
        } catch (error) {
            console.log(error)
            
        }
       

    }


    useEffect(()=> {
        fetchPost()

    },[])


   
  return (
    <div className="flex flex-wrap justify-center mt-10">
    {getMyPost.map((post,index)=> (
          <div key={index} className=" w-[380px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-5 mt-2 ml-5 mr-5">
          <div className="flex flex-col justify-center gap-4">
            <h5 className="text-2xl uppercase text-center">
                {post.title}
  
            </h5>
            <p className="text-2xl ">
                {post.content}
            </p>
          </div>
          <div className="flex justify-end">
            {post._id && (
                <button onClick={()=>handleDeletePost(post._id!)} className="bg-slate-700 text-white p-3 border rounded uppercase mt-5 flex">
                Delete
              </button>

            )}
          
          </div>
        </div>

    ))}
    
    </div>
  );
};

export default MyPost;
