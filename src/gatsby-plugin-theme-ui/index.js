import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: '#231123',
    secondary: '#73737D', 
    accent: '#476A6F',
    grey: '#73737D',
    background: '#F1DEDE',
    gradient: "#fff0",
    // gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #fff 50%)",
  },
};