require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	pathPrefix: "/acoustic5",
	siteMetadata: {
		title: `Aiyush.exe`,
		author: `Aiyush Gupta`,
		description: `This is Aiyush Gupta's E-Portolfio for his passive acoustic speaker project`,
		siteUrl: `https://aiyush-g.github.io/Acoustic4/`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-156011027-1`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Aiyush Gupta`,
				short_name: `Aiyush`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/icon.png`,
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
	],
};
