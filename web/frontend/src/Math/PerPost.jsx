import React from "react";

const PerPost = () => {
  const handleChangePerPage = (much) => {
    if (much == 0) {
      getPostsPerPage > 5
        ? setPostsPerPage(getPostsPerPage - 1)
        : setPostsPerPage(getPostsPerPage);
    } else {
      getPostsPerPage <= 14
        ? setPostsPerPage(getPostsPerPage + 1)
        : setPostsPerPage(getPostsPerPage);
    }
  };
  return (
    <section className="PerPage">
        <button className="remove" onClick={() => handleChangePerPage(0)}>
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <input type="number" value={getPostsPerPage} disabled />
        <button className="add" onClick={() => handleChangePerPage(1)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </section>
  );
};

export default PerPost;
