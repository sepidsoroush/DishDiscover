import { useState } from "react";
import jsonServer from "../api/json-server";

const usePostsApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const findAllPosts = async () => {
    try {
      const response = await jsonServer.get("/posts");
      setData(response.data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (newPost) => {
    try {
      const createdPost = await jsonServer.post(
        "/posts",
        JSON.stringify(newPost)
      );
      setData([...data, createdPost]);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error adding post");
    }
  };

  const updatePost = async (postId, updatedPost) => {
    try {
      await jsonServer.put(`/posts/${postId}`, JSON.stringify(updatedPost));
      const updatedData = data.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      );
      setData(updatedData);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error updating post");
    }
  };

  const deletePost = async (postId) => {
    try {
      await jsonServer.delete(`/posts/${postId}`);
      const updatedData = data.filter((post) => post.id !== postId);
      setData(updatedData);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error deleting post");
    }
  };

  return {
    data,
    loading,
    errorMessage,
    findAllPosts,
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePostsApi;
