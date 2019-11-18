import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file, className, alt) {
  return <Img
    fluid={file.node.childImageSharp.fluid}
    className={className} alt={alt}/>
}

const Image = function(props) {
  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {
            extension: {
              regex: "/jpeg|jpg|png|gif/"
            }
            relativePath: {
              regex: "/images/"
            }
          }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src), props.className, props.alt)}
  />
}

export default Image;
