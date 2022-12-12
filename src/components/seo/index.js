import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const SEO = (props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `}
    render={({site: {siteMetadata: seo}}) => {
      const image = props.image ? props.image : seo.image;
      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={seo.canonicalUrl} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.social.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
        </React.Fragment>
      );
    }}
  />
);

export default SEO;
