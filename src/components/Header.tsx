import React from "react"
import logo from '../assets/logo.svg';
import ReactMarkdown from 'react-markdown'
const markdown = `A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

`
export  function Header() {
    return <article className="prose lg:prose-md text-center">
      {/* <img className="w-20" src={logo} alt="logo" /> */}
      {/* <ReactMarkdown children={markdown} /> */}
      <h1>Cuestionarios de KFS</h1>
  </article>
}