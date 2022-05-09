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
import { Input, Menu, Dropdown, Space, SubMenu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import  Searchbar  from "../components/Searchbar"

const { Search } = Input;


const index = new Document({
  id: "objectID",
  index: ["sku", "title"],
  store: true,
  tokenize: "forward",
});


const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`



// markup
const IndexPage = (data) => {
  const [searchProducts, setSearchProducts] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [click, setClicked] = React.useState(false);

  const products = data.pageContext.data.data.allCommerceProduct.nodes


  products.forEach(product => {
    index.add({
      sku: product.data.sku,
      title: product.data.title,
      objectID: product.data.product_id,
    });
  });

  const onSearch = value => {
    //var result = index.search(value, {enrich: true});
    //console.log(result)
  }


  const addClick = () => {
    setClicked(!click);
    console.log(click)
  }
  
  const onChange = (e) => {
      var result = index.search(e.target.value, {limit: 10}, {enrich: true});
      console.log(result)
    }

  

  console.log(index)


  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "15px"}}>
      <Header />
      <Searchbar data={index} />
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
