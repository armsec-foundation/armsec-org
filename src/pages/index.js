import React from 'react';
import {graphql} from 'gatsby';

import '../styles/main.scss';
import Header from '../components/header';
import Advantages from '../components/advantages';
import Talk from '../components/talk';
import Schedule from '../components/schedule';
import About from '../components/about';
import Speaker from '../components/speaker';
import Speakers from '../components/speakers';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';

const IndexPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const Talks = edges.map((edge) => {
    return <Talk key={edge.node.id} talk={edge.node} />
  });
  return <div className="container-fluid">
    <Header></Header>
    <Advantages></Advantages>
    <Schedule>
      <div className="row">
        {Talks}
      </div>
    </Schedule>
    <About></About>
    <Speakers>
      <Speaker />
      <Speaker />
    </Speakers>
    <Sponsors />
    <Footer />
  </div>
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___date]}
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            author
            title
            date
            duration
          }
        }
      }
    }
  }
`
