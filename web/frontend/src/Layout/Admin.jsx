import React from "react";
import Pagination from "../Components/Pagination";
import Portion from "../Components/Portion";

const Admin = ({
  GetPosts,
  GetCurrentPage,
  SetCurrentPage,
  GetPerPostsPage,
  SetPerPostsPage,
}) => {
  return (
    <>
      <Portion
        GetPosts={GetPosts}
        GetPerPostsPage={GetPerPostsPage}
        GetCurrentPage={GetCurrentPage}
      />
    </>
  );
};

export default Admin;
