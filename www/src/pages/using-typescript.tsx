// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <Banner
        subtitle="GitHub Teacher Toolbox"
        title={<h1>Let’s Focus on Teaching Code, not Tedious Setups!</h1>}
        paragraph={<span>Data from The Norwegian Meteorological Institute<Link to="/education">Learn more</Link></span>}
        linkPath="https://gitpod.io/subscription/"
        linkText="Claim Offer"
        img={<img src="https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fqnimate.com%2Fwp-content%2Fuploads%2F2014%2F03%2Fimages2.jpg&sp=1593686763T18e720774efe4512cda2ff5541b21d2c2b5d6684726af197b71f067b152ccbd0" alt="GitHub Teacher Toolbox" />}
    />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
    <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.org/docs/typescript/">documentation about TypeScript</a>.</p>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
