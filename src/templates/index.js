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
import { Document } from "flexsearch"
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;


const index = new Document({
  id: "objectID",
  index: ["sku", "title"],
  store: true
});


const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`


const onSearch = value => {
  var result = index.search(value, {enrich: true});
  console.log(result)
}

const onChange = (e) => {
  console.log(e.target.value);
}


// markup
const IndexPage = (data) => {
  const products = data.pageContext.data.data.allCommerceProduct.nodes

  console.log(products)

  products.forEach(product => {
    index.add({
      sku: product.data.sku,
      title: product.data.title,
      objectID: product.data.product_id
    });
  });



  



  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "15px"}}>
      <Header />
      <Search style={{ width: 200 }} allowClear placeholder="Basic usage" onSearch={onSearch} onChange={onChange} />
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
