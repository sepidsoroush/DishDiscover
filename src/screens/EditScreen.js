import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";
// import { usePostsContext } from "../context/BlogContext";

const EditScreen = ({ route }) => {
  const id = route.params.id;
  const navigation = useNavigation();
  // const { data, updatePost } = usePostsContext();
  // const blogPost = data.find((item) => item.id === id);

  const submitHandler = (updatedPost) => {
    // updatePost(id, updatedPost);
    navigation.pop();
  };

  return <BlogPostForm initialValues={blogPost} onSubmit={submitHandler} />;
};
const styles = StyleSheet.create({});

export default EditScreen;
