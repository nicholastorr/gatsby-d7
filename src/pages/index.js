import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import HomeCategories from "../components/homeCategories"
import Header from "../components/header"
import Footer from "../components/footer"
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
  const data = useStaticQuery(graphql`
  {
    allCommerceProduct(
        filter: {data: {field_web_site: {elemMatch: {id: {eq: "10482"}}}, type: {eq: "vinyl"}}}
        limit: 25
      ) {
        totalCount
        nodes {
          data {
            sku
            title
          }
        }
      }
}`)

  return (
    <div style={{width: "100%"}}>
      {console.log(data)}
    <body>
      <Header />
        <Container>
          <StaticImage src="https://mbs-signsupply.com/web/images/Mbs-standoff-Home-Page-Delay-Banner.jpg" alt="shipping-delay" quality={100} width={1280}/>
          <MyCarousel />
          <HomeCategories />
        </Container>
    </body>
    <Footer />
    </div>
  )
}

export default IndexPage
