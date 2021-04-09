import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

export default function Home({ data }) {
  return (
    <Layout>
      <PageTitle text={data.site.siteMetadata.title}></PageTitle>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        footer
      }
    }
  }
`;
