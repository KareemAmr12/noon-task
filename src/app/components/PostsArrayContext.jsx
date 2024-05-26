"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { initPosts } from "./InitialList";

//creating a context for the posts array so that we can use it in all pages in our application. (shared array with shared data to displayed synced data between pages)
//Initalizing the array to the initposts array provided in the initialList.jsx.
const PostsArrayContext = createContext(initPosts);

//reading the posts array from the local storage if found locally, if not found, the provided initial posts array is the used.
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : initPosts;
  });

  //function to add a post to the likes/favorites and incrementing the likes of the post.
  const addFavorite = (favPost) => {
    const newPostsArray = posts.map((post) => {
      if (post.id === favPost.id) {
        let likes = post.noLikes + 1;
        return { ...post, isFav: true, liked: true, noLikes: likes };
      } else {
        return post;
      }
    });
    setPosts(newPostsArray);
  };

  //function to remove a post from the likes/favorites (if they are already liked), and decrementing the likes of the post.
  const removeFavorite = (FavpostDel) => {
    const newPostsArray = posts.map((post) => {
      if (post.id === FavpostDel.id) {
        let likes = post.noLikes - 1;
        return { ...post, isFav: false, liked: false, noLikes: likes };
      } else {
        return post;
      }
    });
    setPosts(newPostsArray);
  };

  /*const likePost = (likedPost) => {
    const newPostsArray = posts.map((post) => {
      if (post.id === likedPost.id) {
        let likes = post.noLikes + 1;
        return { ...post, liked: true, noLikes: likes };
      } else return post;
    });
    setPosts(newPostsArray);
  };*/

  /*const unlikePost = (unlikedPost) => {
    const newPostsArray = posts.map((post) => {
      if (post.id === unlikedPost.id) {
        let likes = post.noLikes - 1;
        return { ...post, liked: false, noLikes: likes };
      } else return post;
    });
    setPosts(newPostsArray);
  };*/

  //Updating the posts array located in the localstorage everytime the posts array gets updated by a new user input (liking, and unliking a post)
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  //providing the posts array context to be used by other pages.
  return (
    <PostsArrayContext.Provider value={{ posts, addFavorite, removeFavorite }}>
      {children}
    </PostsArrayContext.Provider>
  );
};
export const usePostsArray = () => useContext(PostsArrayContext);
