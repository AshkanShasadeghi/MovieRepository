import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Components/Post";
import Pagination from "./Components/Pagination";

const App = () => {
  const [getPosts, setPosts] = useState([]);
  const [getLoading, setLoading] = useState(false);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPostsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get("http://localhost:3000/Animation");
      setPosts(res.data);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchPosts();
  }, []);

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
    </>
  );
};

export default App;
