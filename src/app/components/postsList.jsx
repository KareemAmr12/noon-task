"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/test.jpeg";
import { usePostsArray } from "./PostsArrayContext";

//posts component to handle creating, getting, updating all posts in the main page.
export default function Posts() {
  //using context to get the shared array between all pages in the application.
  const { posts, addFavorite, removeFavorite } = usePostsArray();

  //console.log("posts ", posts); //uncomment for debugging purposes.

  //functions to handle liking and unliking of a post.
  const handleAddFavorite = (newFavPost) => {
    addFavorite(newFavPost);
  };

  const handleRemoveFavorite = (favPostDel) => {
    removeFavorite(favPostDel);
  };

  /*const handleLike = (likedPost) => {
    likePost(likedPost);
  };

  const handleUnlike = (unlikedPost) => {
    unlikePost(unlikedPost);
  };*/

  //mapping through the posts array, applying multiple manipulations in the post component, then outputing the results to the user in the main page.
  return (
    //container div for all posts.
    <div className="container">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            handleAddFavorite={handleAddFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
            //handleLike={handleLike}
            //handleUnlike={handleUnlike}
          />
        );
      })}
    </div>
  );
}

//post component to help shape and create the post for both home and favorites pages
export function Post({ post, handleAddFavorite, handleRemoveFavorite }) {
  return (
    //div container for the whole post. Each part of the post is divided into sections each doing a different purpose in the post.
    <div className="post">
      <div className="profile-section">
        <Image
          width={45}
          height={45}
          quality={100}
          src={post.author.pic}
          className="profile-picture"
        />
        <label className="profile-name">{post.author.name}</label>
      </div>

      <div className="picture-section">
        <Image
          width={450}
          height={450}
          quality={100}
          src={post.img}
          className="post-picture"
        />
        {/*}<button
          onClick={() =>
            post.isFav ? handleRemoveFavorite(post) : handleAddFavorite(post)
          }
          className={"favorite-button" + (post.isFav ? "-fav" : "")}
        >
          <FontAwesomeIcon icon={solidHeart} />
        </button>
        {*/}
      </div>

      <div className="like-section">
        <button
          onClick={() =>
            post.liked ? handleRemoveFavorite(post) : handleAddFavorite(post)
          }
          className={"like-button" + (post.liked ? "-liked" : "")}
        >
          <FontAwesomeIcon icon={solidHeart} />
        </button>
        <label className="post-likes">{post.noLikes} likes</label>
      </div>

      <div className="caption-section">
        <p className="caption">{post.caption}</p>
        <label className="tags">{post.tags}</label>
        <label className="comments">View {post.noComments} comments</label>
      </div>
    </div>
  );
}
