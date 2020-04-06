import React from "react"
import "../style.css"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Gene Smith</title>
        <link rel="icon" href="../images/soul2soul.ico" type="image/x-icon" />
      </Helmet>
    </div>
  )
}

export default index
