// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Larri AI',
	tagline: 'Utiliza todo el potencial de Larri',
	favicon: 'img/favicon.png',

	// Set the production url of your site here
	url: 'https://larri-ai.com/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'jgra1999', // Usually your GitHub org/user name.
	projectName: 'larri-ai-docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['es', 'en'],
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
				htmlLang: 'en-US',
				calendar: 'gregory',
				path: 'en'
			},
			es: {
				label: 'Spanish',
				direction: 'ltr',
				htmlLang: 'es-VE',
				calendar: 'gregory',
				path: 'es'
			}
		}
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
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Larri AI',
				logo: {
					alt: 'Larri AI Logo',
					src: 'img/icon.png'
				},
				items: [
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'tutorialSidebar',
					// 	position: 'left',
					// 	label: 'Tutorial'
					// }
					// { to: '/blog', label: 'Blog', position: 'left' },
					// {
					// 	href: 'https://github.com/facebook/docusaurus',
					// 	label: 'GitHub',
					// 	position: 'right'
					// }
					{
						type: 'localeDropdown',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'light',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Docs',
								to: '/docs/intro'
							}
						]
					},
					{
						title: 'Social Media',
						items: [
							{
								label: 'Facebook',
								href: 'https://www.facebook.com/Iventium'
							},
							{
								label: 'Instagram',
								href: 'https://instagram.com/iventium?igshid=YjNmNGQ3MDY='
							},
							{
								label: 'Email',
								href: 'mailto:soporte@larri-ai.com'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Iventium',
								href: 'https://iventium.com/'
							},
							{
								label: 'E-konexuim',
								href: 'https://ekonexium.com/'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Larri AI, Inc.All rights reserved.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
}

module.exports = config
