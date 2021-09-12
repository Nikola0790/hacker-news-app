const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;
const storyUrl = `${baseUrl}/item/`;

export const getId = async () => {
  return await fetch(topStoriesUrl).then((response) => {
    return response.json();
  });
};

export const getStory = async (storyId) => {
  const result = await fetch(`${storyUrl}${storyId}.json?print=pretty`).then(
    (response) => {
      return response.json();
    }
  );
  return result;
};
