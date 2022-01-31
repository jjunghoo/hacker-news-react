export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStories = async () => {
  try {
    const response = await fetch(topStoriesUrl).then((data) => data.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getStory = async (storyId) => {
  try {
    const response = await fetch(`${itemUrl + storyId}.json`).then((data) =>
      data.json()
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
