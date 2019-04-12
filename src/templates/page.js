import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

class Page extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML = {{
            __html: data.wordpressPage.content
          }}
        />
      </Layout>
    );
  }
}

export default Page;

export const query =  graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: {eq:$slug}){
  title
  slug
  content
}
  }
`