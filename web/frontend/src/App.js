import axios from "axios";
import React, { useEffect, useState } from "react";
import Portion from "./Components/Portion";

const App = () => {
  const [getAPI, setAPI] = useState();
  const [getMap, setMap] = useState();

  useEffect(() => {
    const FetchData = async () => {
      let ResponseData = await axios.get("http://localhost:3000/Movie");
      setAPI(ResponseData);
      console.log(getAPI);
    };
    FetchData();
  }, []);

  return <></>;
};

export default App;
