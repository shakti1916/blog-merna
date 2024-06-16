import { AddPostResponse } from "../response/add-post";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

console.log(API_BASE_URL)

export const AddPost = async (addPost: AddPostResponse) => {

  const response = await fetch(`${API_BASE_URL}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addPost)
  });

console.log(response, "")

  const responseBody = await response.json();
  console.log(responseBody)
  if(!response.ok){
    throw new Error(responseBody.message)
  }
};


export const GetMyPost = async() => {
    const response = await fetch(`${API_BASE_URL}/api/posts`)

    const responseBody = await response.json();
    if(!response.ok) {
        throw new Error(responseBody.message)
    }

    return  responseBody;

}

export const DeletePost = async(id:string)=> {
    const response = await fetch(`${API_BASE_URL}/api/posts/${id}`,{
        method:"DELETE"
    }
        
    );
    const responseBody = await response.json();
    console.log(responseBody)
    if(!response.ok) {
        throw new Error(responseBody.message)
    }

    return responseBody
}
