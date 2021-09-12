import React, { useEffect, useState } from "react";
import { getId } from "../../services/urlForId/forId";
import { Story } from "./Story";
import "./newsList.css";

const NewsList = () => {
  const [id, setId] = useState([]);

  useEffect(() => {
    getId().then((item) => setId(item));
  }, []);

  return (
    <div className="container">
      <div className="row rcolor">
        {id.slice(0, 10).map((storyId, index) => (
          <Story key={storyId} storyId={storyId} num={index} />
        ))}
        ;
      </div>
    </div>
  );
};

export default NewsList;
