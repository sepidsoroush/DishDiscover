import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  const submitHandler = () => {
    const postId = initialValues.id
      ? initialValues.id
      : Math.floor(Math.random() * 99999);

    onSubmit({
      id: postId,
      title,
      content,
    });
  };

  return (
    <View>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        value={title}
        placeholder="title"
        style={styles.input}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput
        value={content}
        placeholder="content"
        style={styles.input}
        onChangeText={setContent}
      />
      <Button title="Save Blog Post" onPress={submitHandler} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
