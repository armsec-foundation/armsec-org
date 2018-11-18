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

const renderTalks = (talks) => {
  return talks.map((edge) => {
    if (edge.node.frontmatter.type === 'milestone') {
      return <Milestone key={edge.node.id} milestone={edge.node} />
    } else {
      return <Talk key={edge.node.id} talk={edge.node} />
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
    <Header></Header>
    <Advantages></Advantages>
    <Schedule coming={true}>
      <div className="row">
        {renderTalks(talks.edges)}
      </div>
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
      sort: {order: ASC, fields: [frontmatter___date]}
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            type
            icon
            author
            title
            date
            duration
          }
        }
      }
    }
    speakers: allMarkdownRemark(
      filter: {
        frontmatter: { author: { ne: null } }
      }
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            about
            twitter
            website
            github
          }
        }
      }
    }
  }
`
