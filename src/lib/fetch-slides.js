const { GH_TOKEN } = process.env;
const GH_API = 'https://api.github.com/graphql';

const fetchSettings = {
  method: 'POST',
  headers: {
    Authorization: `bearer ${GH_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

const getQuery = slide => {
  return `{ repository(name: "fewd-lessons", owner: "pataruco") { object(expression: "master:${slide}") { ... on Blob { text } } }}`;
};

const getSlide = async slide => {
  const query = getQuery(slide);
  fetchSettings.body = JSON.stringify({ query });
  try {
    const data = await fetch(GH_API, fetchSettings)
      .then(response => response.json())
      .then(data => data.data.repository.object.text);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getSlide;
