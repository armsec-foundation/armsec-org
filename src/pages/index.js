import { graphql } from 'gatsby';
import React from 'react';

import logo from '../../content/2022/images/logo.png';
import About from '../components/about';
import Advantages from '../components/advantages';
import Footer from '../components/footer';
import Header from '../components/header';
import Milestone from '../components/milestone';
import Organizers from '../components/organizers';
import Schedule from '../components/schedule';
import SEO from '../components/seo';
import Speaker from '../components/speaker';
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
        singleClassName="col-md-6" />
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
    cfp: {edges: [{node: {html: cfpContent}}]},
    organizers,
    sponsors,
    talks,
    speakers
  },
}) => {
  return <div className="container-fluid">
    <SEO image={logo}/>
    <Header date="18 December" year="2022" subtitle="Cybersecurity Conference"
      fbEvent="https://www.facebook.com/events/1516700898836612"
      ticket="https://www.eventbrite.co.uk/e/armsec-2022-cybersecurity-conference-tickets-484018451217">
    </Header>
    <Advantages></Advantages>
    <Schedule cols={['Manoogian Hall', 'Faculty Launge']}>
      {renderTalks(talks.edges)}
    </Schedule>
    <About date="December 18, 10:00 AM"></About>
    {/* <Speakers>
      {renderSpeakers(speakers.edges)}
    </Speakers> */}
    <Sponsors title="Sponsors / Partners"
      sponsors={sponsors.edges} />
    <Organizers data={organizers.edges} color="green"/>
    <Footer />
  </div>
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    talks: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/2022\/talks/"}
        frontmatter: {
          type: {
            in: ["talk", "milestone", "panel", "empty"],
          },
          date: {
            gte: "2022-12-18 00:00:00",
            lt: "2022-12-19 00:00:00"
          }
        }
      }
      sort: {
        order: ASC,
        fields: [fileAbsolutePath, frontmatter___date]
      }
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
        fileAbsolutePath: {regex: "/2022\/authors/"}
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
    cfp: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {
        fileAbsolutePath: {regex: "/2022\/sections/"}
        frontmatter: {title: {eq: "CFP"}}
      }
      limit: 1
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
    organizers: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {fileAbsolutePath: {regex: "/2022\/organizers/"}}
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
    sponsors: allMarkdownRemark(
      sort: {order: ASC, fields: [fileAbsolutePath]}
      filter: {
        fileAbsolutePath: {regex: "/2022\/sponsors/"}
      }
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            url
            name
            general
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
