import React, { Component } from 'react';
import { graphql } from 'gatsby';

class Post extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.wordpressPost.title}</h1>
        <div
          dangerouslySetInnerHTML = {{
            __html: data.wordpressPost.content
          }}
        />
      </div>
    );
  }
}

export default Post;

export const query =  graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: {eq:$slug}){
  title
  slug
  content
}
  }
`