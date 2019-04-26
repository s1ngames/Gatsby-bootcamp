import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CounterContainer from "../state/containers/container"
import { Subscribe } from "unstated"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>about here</p>
      <p>
        Need a developer?<Link to="/contact">Contact me.</Link>
      </p>
      <Subscribe to={[CounterContainer]}>
        {counter => {
          return (
            <div>
              <input
                name="text"
                onChange={e => {
                  counter.update_text(e.target.value)
                }}
              />
              <br />
              {counter.state.text.toString()}
            </div>
          )
        }}
      </Subscribe>
    </Layout>
  )
}

export default AboutPage
