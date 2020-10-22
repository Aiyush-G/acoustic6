import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				const metaDesc = description || data.site.siteMetadata.description;
				return (
					<Helmet
						htmlAttributes={{ lang }}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDesc,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDesc,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDesc,
							},
						]
							.concat(
								keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `),
									  }
									: []
							)
							.concat(meta)}
					/>
				);
			}}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;
