export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStories = async (menu) => {
  try {
    const response = await fetch(
      `${baseUrl}/${menu}stories.json?print=pretty`
    ).then((data) => data.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getStory = async (storyId) => {
  try {
    const response = await fetch(
      `${itemUrl + storyId}.json?print=pretty`
    ).then((data) => data.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (userName) => {
  try {
    const response = await fetch(
      `${baseUrl}/user/${userName}.json?print=pretty`
    ).then((data) => data.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
