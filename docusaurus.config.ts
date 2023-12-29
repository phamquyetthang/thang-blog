import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Code đủ thứ",
  tagline: "Code đủ thứ - Blog của code và thơ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://tutiplaylab.io.vn",
  customFields: {
    // Put your custom environment here
    teamEmail: "quyetthang.phucchi@gmail.com",
  },
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "phamquyetthang", // Usually your GitHub org/user name.
  projectName: "thang-blog", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          blogTitle: "Code đủ thứ - blog về lập trình",
          blogDescription:
            "Blog về lập trình của Thắng - Code đủ thứ, javascript, godot và mọi thứ xung quanh",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-7Y4H6WLK3Z",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "poem",
        routeBasePath: "poem",
        path: "./poem",
        blogTitle: "Lượn vượn vườn thơ",
        blogDescription: "Lượn vượn vườn thơ",
        blogSidebarTitle: 'Tất cả',
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          frontMatter.hide_reading_time
            ? undefined
            : defaultReadingTime({ content }),
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/codeduthu.webp",
    metadata: [
      {
        name: "description",
        content:
          "Blog về lập trình của Thắng - Code đủ thứ, javascript, godot và mọi thứ xung quanh",
      },
      {
        name: "keywords",
        content:
          "code đủ thứ, coding, blog, js, react, js blog, dev blog, lượn vượn vườn thơ",
      },
      {
        name: "google-adsense-account",
        content: "ca-pub-7099570900840464",
      },
    ],
    headTags: [
      {
        tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Organization",
          name: "Blog của Thắng - Code đủ thứ",
          url: "https://tutiplaylab.io.vn",
          logo: "https://tutiplaylab.io.vn/img/codeduthu.webp",
          description:
            "Blog về lập trình của Thắng - Code đủ thứ, javascript, godot và mọi thứ xung quanh",
        }),
      },
    ],
    navbar: {
      title: "Code Đủ Thứ",
      logo: {
        alt: "Code Đủ Thứ Logo",
        src: "img/codeduthu.webp",
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: "/blog", label: "Blog lập trình 📝", position: "left" },
        { to: "/blog", label: "Khóa học 🎓", position: "left" },
        { to: "/poem", label: "Lượn vượn vườn thơ 🌻", position: "left" },
        { to: "/donate", label: "Buy me a coffee", position: "right" },
        {
          href: "https://github.com/phamquyetthang",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: "My networks",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCvh5_f6mJzVOthh42uojXbg",
            },
            {
              label: "Blog",
              href: "https://tutiplaylab.io.vn",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Lượn vượn vườn thơ",
              to: "/poem",
            },
            {
              label: "GitHub",
              href: "https://github.com/phamquyetthang",
            },
          ],
        },
        {
          title: "Buy me a coffee",
          items: [
            {
              label: "Donate",
              to: "/donate",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blog của Thắng - Code đủ thứ.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      description:
        "Blog về lập trình của Thắng - Code đủ thứ, javascript, godot và mọi thứ xung quanh",
    },
    scripts: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7099570900840464",
        crossorigin: "anonymous"
      }
    ]
  } satisfies Preset.ThemeConfig,
};

export default config;
