// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevNotes',
  tagline: 'Developer Notes by PeterOnCode',
  url: 'https://devnotes-peteroncode.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'peteroncode', // Usually your GitHub org/user name.
  projectName: 'DevNotes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/PeterOnCode/devnotes',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'DevNotes by PeterOnCode',
          logo: {
            alt: 'Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'contents',
              position: 'left',
              label: 'Tutorial',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            // {
            //   href: 'https://github.com/facebook/docusaurus',
            //   label: 'GitHub',
            //   position: 'right',
            // },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/contents',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                // {
                //   label: 'Stack Overflow',
                //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                // },
                // {
                //   label: 'Discord',
                //   href: 'https://discordapp.com/invite/docusaurus',
                // },
                // {
                //   label: 'Twitter',
                //   href: 'https://twitter.com/docusaurus',
                // },
              ],
            },
            // {
            //   title: 'More',
            //   items: [
            //     {
            //       label: 'Blog',
            //       to: '/blog',
            //     },
            //     {
            //       label: 'GitHub',
            //       href: 'https://github.com/facebook/docusaurus',
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright ?? ${new Date().getFullYear()} PeterOnCode. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
