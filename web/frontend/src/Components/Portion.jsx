import React from "react";
import { useState } from "react";
import Slice from "../Math/Slice";
import Pagination from "./Pagination";

const Portion = ({ GetPosts, GetPerPostsPage, GetCurrentPage }) => {
  const [getShow, setShow] = useState([]);

  return (
    <>
      {getShow.map((record) => (
        <h2>{record.Name}</h2>
      ))}
      <Pagination
        GetPosts={GetPosts}
        GetPerPostsPage={GetPerPostsPage}
        GetCurrentPage={GetCurrentPage}
        SetShow={setShow}
      />
    </>
  );
};

export default Portion;
