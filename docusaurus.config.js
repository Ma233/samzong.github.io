// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SAMZONG",
  tagline: "Samzong blogs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://samzong.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "samzong", // Usually your GitHub org/user name.
  projectName: "samzong.me", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          `https://github.com/samzong/samzong.me/edit/main/${blogDirPath}/${blogPath}`,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogTitle: "Samzong blog!",
          blogDescription: "A Docusaurus powered blog!",
          postsPerPage: 1,
          blogSidebarCount: 50, // or 'ALL'
          blogSidebarTitle: "Recent posts",
          tagsBasePath: "tags",
          archiveBasePath: "archives",
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: '',
      navbar: {
        title: "SAMZONG",
        logo: {
          alt: "Samzong",
          src: "img/logo.png",
          href: 'https://samzong.me',
        },
        items: [
          { to: "/tags", label: "Tags", position: "right" },
          { to: "/archives", label: "Archives", position: "right" },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        content:
          '⭐️ If you find my articles beneficial, feel free to follow me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/samzong">GitHub</a>! ⭐️',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "QHUDGE595D",
        // Public API key: it is safe to commit it
        apiKey: "f17f47c5f11046d10c0d3651447e85c1",
        indexName: "samzong.me",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      metadata: [{ name: "keywords", content: "cooking, blog" }],
    }),
};

module.exports = config;
