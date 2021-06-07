module.exports = {
  title: 'Internet of Things',
  tagline: 'Gonzalo Miranda - Matias Bojko',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'bojkomatias', // Usually your GitHub org/user name.
  projectName: 'docusaurus-2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Internet Of Things',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Documentación',
          position: 'left',
        },

        {
          href: 'https://github.com/bojkomatias/docusaurus-2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentación',
              to: 'docs',
            },

          ],
        },

        {
          title: 'Repositorio',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bojkomatias/docusaurus-2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wiki-IoT, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
