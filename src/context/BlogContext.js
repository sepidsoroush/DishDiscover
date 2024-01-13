export default {};
// import React, { createContext, useContext } from "react";
// import usePostsApi from "../hooks/usePostsApi";

// const PostsContext = createContext();

// export const usePostsContext = () => {
//   const context = useContext(PostsContext);
//   if (!context) {
//     throw new Error("usePostsContext must be used within a PostsProvider");
//   }
//   return context;
// };

// export const PostsProvider = ({ children }) => {
//   const postsApiHook = usePostsApi();

//   return (
//     <PostsContext.Provider value={postsApiHook}>
//       {children}
//     </PostsContext.Provider>
//   );
// };
