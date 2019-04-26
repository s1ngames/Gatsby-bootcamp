import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        contact{" "}
        <a href="http://www.google.com" target="_blank">
          here
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage

//target_blank is open in new tab and not redirect
