import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Components/Post";
import Pagination from "./Components/Pagination";

const App = () => {
  const [getPosts, setPosts] = useState([]);
  const [getLoading, setLoading] = useState(false);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPostsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get("http://localhost:3000/Animation");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const handleChangePerPage = (much) => {
    if (much == 0) {
      getPostsPerPage > 5 ? (setPostsPerPage(getPostsPerPage - 1)) : (setPostsPerPage(getPostsPerPage))
    } else {
      getPostsPerPage <= 14 ? (setPostsPerPage(getPostsPerPage + 1)) : (setPostsPerPage(getPostsPerPage))
    }
  }


  const indexOfLastPost = getCurrentPage * getPostsPerPage;
  const indexOfFirstPost = indexOfLastPost - getPostsPerPage;
  const currentPosts = getPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const Paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Post Posts={currentPosts} loading={getLoading} />
      <Pagination
        PostsPerPage={getPostsPerPage}
        TotalPosts={getPosts.length}
        Paginate={Paginate}
      />
      <section className="PerPage">
        <button className="remove" onClick={() => handleChangePerPage(0)}>
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <input type="number" value={getPostsPerPage} disabled />
        <button className="add" onClick={() => handleChangePerPage(1)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </section>
    </>
  );
};

export default App;
