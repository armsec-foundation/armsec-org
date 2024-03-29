import { graphql } from 'gatsby';
import React from 'react';

import About from '../components/about';
import Advantages from '../components/advantages';
import Footer from '../components/footer';
import Header from '../components/header';
import Milestone from '../components/milestone';
import Organizers from '../components/organizers';
import Schedule from '../components/schedule';
import SEO from '../components/seo';
import Speaker from '../components/speaker';
import Speakers from '../components/speakers';
import Sponsors from '../components/sponsors';
import Talk from '../components/talk';
import '../styles/main.scss';

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
    organizers,
    generalSponsors,
    sponsors,
  },
}) => {
  return <div className="container-fluid">
    <SEO />
    <Header date="24 November" year="2018" subtitle="OWASP Security Conference">
    </Header>
    <Advantages></Advantages>
    <Schedule cols={['Manoogian Hall', 'Room 113W', 'Room 114W']}>
      {renderTalks(talks.edges)}
    </Schedule>
    <About date="November 24, 9:30 AM"></About>
    <Speakers>
      {renderSpeakers(speakers.edges)}
    </Speakers>
    <Organizers data={organizers.edges} color="green" />
    <Sponsors
      title="Sponsors and Partners"
      generalSponsors={generalSponsors.edges}
      sponsors={sponsors.edges} />
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
      filter: {
        frontmatter: {type: {eq: "author"}}
        fileAbsolutePath: {regex: "/2018\/authors/"}
      }
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
    organizers: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {fileAbsolutePath: {regex: "/2018\/organizers/"}}
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            url
            description
            logo {
              childImageSharp {
                fluid(maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    generalSponsors: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {
        fileAbsolutePath: {regex: "/2018\/sponsors/"}
        frontmatter: {general: {eq: true}}
      }
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            general
            url
            name
            logo {
              childImageSharp {
                fluid(maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    sponsors: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {
        fileAbsolutePath: {regex: "/2018\/sponsors/"}
        frontmatter: {general: {ne: true}}
      }
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            general
            url
            name
            logo {
              childImageSharp {
                fluid(maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
