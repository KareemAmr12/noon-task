"use client";

import { usePostsArray } from "../components/PostsArrayContext";
import { Post } from "../components/postsList";

//favorites page to only show liked/favorited posts from the main posts page.
export default function favorites() {
  //using context to get the posts array from provider.
  const { posts, addFavorite, removeFavorite } = usePostsArray();

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

  //mapping through the whole posts array and only showing the liked/favorited posts in the favorites page.
  return (
    <div className="container">
      {" "}
      {posts.map((post) => {
        if (post.isFav) {
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
        }
      })}
    </div>
  );
}
