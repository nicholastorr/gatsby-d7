import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import HomeCategories from "../components/homeCategories"
import Header from "../components/header"
import Footer from "../components/footer"
import Extremefooter from "../components/extremefooter"
import "./index.css"
import MyCarousel from "../components/MyCarousel"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`






// markup
const IndexPage = () => {

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "15px"}}>
      <Header />
        <Container>
          <MyCarousel />
          <HomeCategories />
        </Container>
      <Footer />
      <Extremefooter />
    </div>
  )
}

export default IndexPage
