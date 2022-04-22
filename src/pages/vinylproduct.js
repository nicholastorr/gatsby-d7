import * as React from 'react';
import { graphql } from 'gatsby';
import 'antd/dist/antd.css';
import "../../src/styles/product.css";
import Header from '../components/header';
import Footer from "../components/footer";
import Extremefooter from "../components/extremefooter";
import { FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import Cartbox from '../components/CartBox';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';



const VinylProduct = (data) => {
    const [imgIndex, setImgIndex] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);


    const flipMaker = () => {
        setFlipped(!flipped);
    }

    const product = data.pageContext.data;

    function makeActive(props) {
      setImgIndex(props);
    }
    console.log(data);

    const images = data.data.allFiles.nodes

    const colorProducts = data.data.allCommerceProduct.nodes.filter(products => 
      products.data.field_product_width_in == product.field_product_width_in && products.data.field_product_length_in_yards == product.field_product_length_in_yards
    )
  
    
    const colors= []

    colorProducts.forEach(colorProduct => {
      const refactorcolor = colorProduct.data.field_product_color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear');
      const newcolor = refactorcolor.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      colors.push({ 'color': `${newcolor}`, 'sku': `${colorProduct.data.sku}` });
    });
          

    
    console.log(colors.sort((a, b) => a.color.localeCompare(b.color)));




    const variationColor = (
      <Menu style={{display: "flex", flexDirection: "column", width: "100%", height: "500px", overflow: "scroll", justifyContent: "space-between"}}>
        {
          colors.sort((a, b) => a.color.localeCompare(b.color)).map((color, index) => {
            return (
              <a href={`/products/${color.sku}`}><Menu.Item key={index}>
                {color.color}
                <img src={`https://mbs-signsupply.com/web/images/${color.color}.jpg`} style={{width: "30px", height: "30px"}} />
              </Menu.Item></a>
            )
          })
        }
      </Menu>
    );

    return (
      
        <div>
          <Header />
          <p style={{fontSize: "13px", marginLeft: "17%", marginTop: "30px"}}><a href="/">Home</a><span style={{marginLeft: "7px", marginRight: "7px"}}>/</span>{product.title}<span style={{marginLeft: "400px"}}><FacebookFilled style={{fontSize: "50px"}} /><TwitterSquareFilled style={{fontSize: "50px"}}/></span></p>
          <div className="product-page">
          <div className="product-container">
            <img src={images[imgIndex].data.url}  id="main" alt="" />
            <div className="thumbs">
              {data.data.allFiles.nodes.map((node, index) => {
                if (node.data.url) {
                  return (
                    <img src={node.data.url} id="img-2" onClick={() => { makeActive(index) }} style={{marginRight: "8px"}} key={index}/>
                  )
                }
              })}
            </div>
          </div>
          <div className="product-info">
              <h1>{product.title}</h1>
              <h3><span>SKU:</span>{product.sku}</h3>
              <h4>Unit Price<span style ={{fontSize: "35px", marginLeft: "10px"}}>${product.commerce_price.amount_decimal}</span></h4>
              <Cartbox />
              <p style={{fontWeight: "bold"}}>Select Color:</p>
              <Dropdown className="color-variation" overlay={variationColor} style={{width: "500px"}}  trigger={['click']}>
                  <a onClick={flipMaker} style={{color: "black"}}>{product.field_product_color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  {flipped ? <DownOutlined style={{marginRight: "20px", fontSize: "20px", color: "black"}}/> :
                  <UpOutlined  style={{marginRight: "20px", fontSize: "20px", color: "black"}}/>}</a>
              </Dropdown>
          </div>
          </div>
          <Footer />
          <Extremefooter />
        </div>
    )
}

export const query = graphql`
    query($images: [String], $series: String!)
        {
            allFiles(filter: {data: {uuid: {in: $images}}}) {
                totalCount
                nodes {
                  data {
                    field_file_image_alt_text
                    fid
                    name
                    mime
                    size
                    url
                    timestamp
                    type
                    uuid
                  }
                }
              }
            allCommerceProduct(filter: {data: {field_product_series: {eq: $series}}}) {
                nodes {
                  data {
                    field_product_width_in
                    field_product_length_in_yards
                    field_product_finish
                    field_product_punched
                    sku
                    field_product_color
                    field_product_series
                  }
                }
                totalCount
            }
        }`
            

export default VinylProduct; 