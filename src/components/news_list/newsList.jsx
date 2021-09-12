import React, { useEffect, useState } from "react";
import { getId } from "../../services/urlForId/forId";
import { Story } from "./Story";

const NewsList = () => {
  const [id, setId] = useState([]);

  useEffect(() => {
    getId().then((item) => setId(item));
  }, []);

  return id.map((storyId, index) => (
    <Story key={storyId} storyId={storyId} num={index} />
  ));
};

export default NewsList;
