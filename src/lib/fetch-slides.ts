const { GH_TOKEN } = process.env;
const GH_API = 'https://api.github.com/graphql';
const REPO = 'fewd-lessons';
const USER = 'pataruco';

const fetchSettings: RequestInit = {
  method: 'POST',
  headers: {
    Authorization: `bearer ${GH_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

const getQuery = (slide: string): string => {
  return `{ repository(name: "${REPO}", owner: "${USER}") { object(expression: "master:${slide}") { ... on Blob { text } } }}`;
};

const getSlide = async (slide: string): Promise<string | undefined> => {
  const query = getQuery(slide);
  fetchSettings.body = JSON.stringify({ query });
  try {
    const response = await fetch(GH_API, fetchSettings);
    const data = await response.json();
    return data.data.repository.object.text;
    // .then(response => response.json())
    // .then(data => data.data.repository.object.text);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};

export default getSlide;
