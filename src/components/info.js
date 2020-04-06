import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as LinkedIn,
  FaAngellist as AngelList,
  FaFacebookF as Facebook,
  FaRedditAlien as Reddit,
  FaPinterest as Pinterest,
  FaSpotify as Spotify,
  FaSoundcloud as Soundcloud,
  FaMediumM as Medium
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Gene Smith.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 info">
        Seasoned marketing executive, experienced marketing technologist and a machine learning & red wine enthusiast.
        <br />
        <br />Follow me. Contact me. Etc....
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://www.linkedin.com/in/genesmith1" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="https://angel.co/gene-smith?public_profile=1" target="_blank" rel="noopener noreferrer">
          <AngelList />
        </a>
        <a className="mr-5 icon" href="https://www.facebook.com/gene.r.smith" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a className="mr-5 icon" href="https://github.com/gene-smith" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.reddit.com/user/gene-smith/" target="_blank" rel="noopener noreferrer">
          <Reddit />
        </a>
        <a className="mr-5 icon" href="https://twitter.com/gene_r_smith" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://medium.com/@gene_r_smith" target="_blank" rel="noopener noreferrer">
          <Medium />
        </a>
        <a className="mr-5 icon" href="http://www.pinterest.com/gene_smith.com/gene-smith" target="_blank" rel="noopener noreferrer">
          <Pinterest />
        </a>
        <a className="mr-5 icon" href="https://open.spotify.com/user/genesmith?si=xDf3RF02RFCHuXH5FZB82w" target="_blank" rel="noopener noreferrer">
          <Spotify />
        </a>
        <a className="mr-5 icon" href="https://soundcloud.com/gene_smith" target="_blank" rel="noopener noreferrer">
          <Soundcloud />
        </a>
      </div>
    </div >
  )
}
