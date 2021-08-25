import React, { useEffect, useState } from "react";
import { getId } from "../../services/urlForId/forId";

const NewsList = () => {
  const [id, setId] = useState([]);

  useEffect(() => {
    getId().then((item) => {
      setId(item);
    });
  }, []);
  console.log(id);

  if (id.length === 0) {
    return <p>{"LOADING"}</p>;
  }

  return (
    <div>
      {id.map((data, index) => {
        console.log(data);
        return (
          <div key={index}>
            <p>
              {index + 1}. {data.title}
            </p>
            <p>{data.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
