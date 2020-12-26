module.exports = {
  siteMetadata: {
    title: `Portfolio by Mia Le`,
    name: `Mia Le`,
    siteUrl: `https://google.com/`,
    description: `Hi! I'm Mia Le. I majored in CS at Grinnell College (2021) and I build apps & websites using React!`,
    hero: {
      heading: `Hi! I'm Mia. I like building apps & websites using React. Take a look at some of my projects here!`,
      maxWidth: 800,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/minhanhminhanh`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/minh-anh-le/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio by Mia Le`,
        short_name: `Mia Le Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //   },
    // },
  ],
};
