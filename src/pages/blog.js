import React from "react"
import { Subscribe } from "unstated"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import CounterContainer from "../state/containers/container"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <Subscribe to={[CounterContainer]}>
        {counter => {
          return (
            <div>
              <p>
                Counter is{" "}
                <span style={{ color: "red" }}>{counter.state.count}</span>{" "}
                right now
              </p>
            </div>
          )
        }}
      </Subscribe>
    </Layout>
  )
}

export default BlogPage

//###.md posts
// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(edge => {
//           return (
//             <li className={blogStyles.post}>
//               <Link to={`/blog/${edge.node.fields.slug}`}>
//                 <h2>{edge.node.frontmatter.title}</h2>
//                 <p>{edge.node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//       <Subscribe to={[CounterContainer]}>
//         {counter => {
//           return (
//             <div>
//               <p>
//                 Counter is{" "}
//                 <span style={{ color: "red" }}>{counter.state.count}</span>{" "}
//                 right now
//               </p>
//             </div>
//           )
//         }}
//       </Subscribe>
//     </Layout>
//   )
// }

// export default BlogPage
