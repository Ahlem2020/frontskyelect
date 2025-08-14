import React from 'react'
import Head from "next/head"
import favicon from "../../../public/assets/img/brand/favicon.ico"

const Seo = ({ title }) => {
  let i = `Élections Côte d'Ivoire - ${title}`
  return (
    <Head>
      <title>{i}</title>
      <link rel="icon" href={favicon.src} />
    </Head>
  )
}

export default Seo