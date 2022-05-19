import React from "react";

const Post = ({ Posts, Loading }) => {
  if (Loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="Posts">
      {Posts.map((Post) => (
        <section className="Post">
          <h5>
            {Post.ID}
            <br />
            {Post.Name}
            <br />
            {Post.Title}
            <br />
            {Post.Year}
          </h5>
          <img
            src={`https://s${Post.Cover.Server}.picofile.com/file/${Post.Cover.Code}/5.${Post.Cover.Format}`}
            alt=""
            className="cover"
          />
        </section>
      ))}
    </section>
  );
};

export default Post;
