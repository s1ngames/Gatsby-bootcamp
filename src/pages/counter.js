import React from "react"
import { Subscribe } from "unstated"

import CounterContainer from "../state/containers/container"
import Layout from "../components/layout"
import Head from "../components/head"


const Counter = () => {
  return (
    <Layout>
      <div>
        <Head title='Counter'/>
        <h1>Counter app</h1>
        <h3>lets make it work</h3>
        <Subscribe to={[CounterContainer]}>
          {counter => {
            return (
              <div>
                <p>hi from subscribe</p>
                <p>{counter.state.count}</p>
                <button
                  type="button"
                  onClick={() => {
                    counter.increment()
                  }}
                >
                  +1
                </button>
                <button
                  type="button"
                  onClick={() => {
                    counter.decrement()
                  }}
                >
                  -1
                </button>
              </div>
            )
          }}
        </Subscribe>
      </div>
    </Layout>
  )
}

export default Counter
