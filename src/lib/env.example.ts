import convict from 'convict';

const config = convict({
  env: {
    GH_TOKEN: '',
  },
});

export default config;
