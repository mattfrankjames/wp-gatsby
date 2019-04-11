import React, { Component } from 'react';
import { graphql } from 'gatsby';

class Page extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML = {{
            __html: data.wordpressPage.content
          }}
        />
      </div>
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