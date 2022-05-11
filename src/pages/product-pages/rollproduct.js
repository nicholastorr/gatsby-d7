import * as React from 'react';
import { graphql } from 'gatsby';
import 'antd/dist/antd.css';
import "../../../src/styles/product.css";
import Header from '../../components/header';
import Footer from "../../components/footer";
import Extremefooter from "../../components/extremefooter";
import { FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import Cartbox from '../../components/CartBox';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import DetailTable from '../../components/product-detail/detailTable';



const RollProduct = (data) => {
    const [imgIndex, setImgIndex] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);

    console.log(data)
    const product = data.pageContext.data;

    function makeActive(props) {
        setImgIndex(props);
    }

    const images = data.data.allFiles.nodes

    return (
        <div>
          <Header />
          <p style={{fontSize: "13px", marginLeft: "17%", marginTop: "30px"}}><a href="/">Home</a><span style={{marginLeft: "7px", marginRight: "7px"}}>/</span>{product.title}<span style={{marginLeft: "400px"}}><FacebookFilled style={{fontSize: "50px"}} /><TwitterSquareFilled style={{fontSize: "50px"}}/></span></p>
          <div className="product-page">
          <div className="product-container">
            {images.length > 0 ?
            <img src={images[imgIndex].data.url}  id="main" alt="" /> :
            <img loading='lazy' src="https://mbs-signsupply.com/sites/default/files/default_images/drupalcommerce.png" alt="" />
            }
            <div className="thumbs">
              {data.data.allFiles.nodes.map((node, index) => {
                if (node.data.url) {
                  return (
                    <img loading='lazy' src={node.data.url} id="img-2" onClick={() => { makeActive(index) }} style={{marginRight: "8px"}} key={index}/>
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
              </div>
          </div>
          <DetailTable data={data.pageContext.data} images={data.data.allFiles.nodes} relatedProduct={data.data.related.nodes} />
          <Footer />
          <Extremefooter />
        </div>
    )
}

export const query = graphql`
    query($images: [String], $series: String!, $related: [String])
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
              related: allCommerceProduct(filter: {data: {uuid: {in: $related}}}) {
                totalCount
                nodes {
                  data {
                    sku
                    title
                    commerce_price {
                      amount_decimal
                    }
                    field_product_image {
                      file {
                        uuid
                      }
                    }
                  }
                }
              }
        }`

export default RollProduct;