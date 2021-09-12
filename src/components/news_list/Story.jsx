import { Fragment, useEffect, useState } from "react";
import { getStory } from "../../services/urlForId/forId";
import { mapTime } from "./mapTime";
import "./story.css";

export const Story = ({ storyId, num }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, []);

  return (
    <Fragment>
      <div className="row mt-3">
        <div className="col-12">
          <p>
            {num + 1}. <a href={story.url}>{story.title}</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 border-bottom">
          <p>points: {story.score}</p>
        </div>
        <div className="col-2 border-bottom">
          <p>
            by: <span>{story.by}</span>
          </p>
        </div>
        <div className="col-2 border-bottom">
          <p>
            <span>{mapTime(story.time)} ago</span>
          </p>
        </div>
        <div className="col-6 border-bottom"></div>
      </div>
    </Fragment>
  );
};
