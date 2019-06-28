import envs from './env';

const GH_TOKEN = envs.get('env.GH_TOKEN');
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

const getSlide = async (slide: string): Promise<string | null> => {
  const query = getQuery(slide);
  fetchSettings.body = JSON.stringify({ query });
  try {
    const response = await fetch(GH_API, fetchSettings);
    if (response.ok) {
      const data = await response.json();
      if (!data.data.repository.object) {
        return null;
      }
      return data.data.repository.object.text;
    }
    return null;
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
    return null;
  }
};

export default getSlide;
