import { useEffect, useState } from "react";
import { getStory } from "../../services/urlForId/forId";

export const Story = ({ storyId, num }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, []);

  console.log(story);

  return (
    <div>
      <p>
        {num + 1}. <a href={story.url}>{story.title}</a>
      </p>
      <p>
        point: - {story.score} / by: {story.by}
      </p>
    </div>
  );
};
