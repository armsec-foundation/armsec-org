import { graphql } from 'gatsby';
import React from 'react';

import logo from '../../content/2022/images/logo.png';
import About from '../components/about';
import Footer from '../components/footer';
import Header from '../components/header';
import Organizers from '../components/organizers';
import Section from '../components/section';
import SEO from '../components/seo';
import '../styles/main.scss';


const IndexPage = ({
  data: {
    cfp: {edges: [{node: {html: cfpContent}}]},
    organizers,
  },
}) => {
  return <div className="container-fluid">
    <SEO image={logo}/>
    <Header date="18 December" year="2022" subtitle="Cybersecurity Conference"
      fbEvent="https://www.facebook.com/events/1516700898836612"
      ticket="https://www.eventbrite.co.uk/e/armsec-2022-cybersecurity-conference-tickets-484018451217">
    </Header>
    <Section title="Call For Papers" color="green">{cfpContent}</Section>
    <About date="December 18, 10:00 AM" color="black"></About>
    <Organizers data={organizers.edges} color="green" />
    <Footer />
  </div>
}

export default IndexPage;

export const pageQuery = graphql`
  query {
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
  }
`
