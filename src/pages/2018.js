import React from 'react';
import {graphql} from 'gatsby';

import '../styles/main.scss';
import Header from '../components/header';
import Advantages from '../components/advantages';
import Talk from '../components/talk';
import Milestone from '../components/milestone';
import Schedule from '../components/schedule';
import About from '../components/about';
import Speaker from '../components/speaker';
import Speakers from '../components/speakers';
import Sponsors from '../components/sponsors';
import Organizers from '../components/organizers';
import Footer from '../components/footer';
import SEO from '../components/seo';

const renderTalks = (talks) => {
  return talks.map((edge) => {
    if (edge.node.frontmatter.type === 'milestone') {
      return <Milestone key={edge.node.id} milestone={edge.node} />
    } else {
      return <Talk
        key={edge.node.id} talk={edge.node}
        singleClassName="col-md-4" />
    }
  });
};

const renderSpeakers = (speakers) => {
  return speakers.map((edge) => {
    return <Speaker key={edge.node.id} speaker={edge.node} />
  });
}

const IndexPage = ({
  data: {
    talks,
    speakers,
  },
}) => {
  return <div className="container-fluid">
    <SEO />
    <Header date="24 November" year="2018">
    </Header>
    <Advantages></Advantages>
    <Schedule cols={['Manoogian Hall', 'Room 113W', 'Room 114W']}>
      {renderTalks(talks.edges)}
    </Schedule>
    <About></About>
    <Speakers>
      {renderSpeakers(speakers.edges)}
    </Speakers>
    <Organizers />
    <Sponsors />
    <Footer />
  </div>
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    talks: allMarkdownRemark(
      filter: {frontmatter: {
        type: {
          in: ["talk", "milestone", "panel", "empty"],
        },
        date: {
          gte: "2018-11-24 00:00:00",
          lt: "2018-11-25 00:00:00"
        }
      }}
      sort: {order: ASC, fields: [fileAbsolutePath, frontmatter___date]}
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            type
            icon
            authors
            location
            moderator
            photos {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            single
            title
            date
            duration
            video
            presentation
          }
        }
      }
    }
    speakers: allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___author]}
      filter: {frontmatter: {type: {eq: "author"}}}
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            about
            photo {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            gender
          }
        }
      }
    }
  }
`
