/* eslint-disable */
/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://barbacodes.com.br',
  generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
      'https://barbacodes.com.br/sitemap.xml',
      'https://barbacodes.com.br/server-sitemap-index.xml',
    ],
    policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: '*', disallow: '/secret' },
		]
	},
	exclude: ['/secret', '/server-sitemap-index.xml'],
}

module.exports = config