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



const TransferTape = (data) => {
    const [imgIndex, setImgIndex] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const [flipped2, setFlipped2] = React.useState(false);
    const [flipped3, setFlipped3] = React.useState(false);
    const [flipped4, setFlipped4] = React.useState(false);
    const [flipped5, setFlipped5] = React.useState(false);

    

    const flipMaker = () => {
        setFlipped(!flipped);
    }

    const flipMaker2 = () => {
        setFlipped2(!flipped2);
    }

    const flipMaker3 = () => {
        setFlipped3(!flipped3);
    }

    const product = data.pageContext.data;

    function makeActive(props) {
      setImgIndex(props);
    }

    const images = data.data.allFiles.nodes

    const colorProducts = data.data.allCommerceProduct.nodes.filter(products => 
      products.data.field_product_width == product.field_product_width && products.data.field_product_level == product.field_product_level
    )

    const widthProducts = data.data.allCommerceProduct.nodes.filter(products =>
      products.data.field_product_color == product.field_product_color && products.data.field_product_level == product.field_product_level
    )

    const tackProducts = data.data.allCommerceProduct.nodes.filter(products =>
      products.data.field_product_width == product.field_product_width && products.data.field_product_color == product.field_product_color 
    )



    const widths = [];
    
    const tacks = [];
  
    const colors= [];


    colorProducts.forEach(colorProduct => {
      if (colorProduct.data.field_product_color) {
        const refactorcolor = colorProduct.data.field_product_color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear');
        const newcolor = refactorcolor.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        colors.push({ 'color': `${newcolor}`, 'sku': `${colorProduct.data.sku}` });
      }
    });

    widthProducts.forEach(widthProduct => {
      if (widthProduct.data.field_product_width) {
        const refactorwidth = widthProduct.data.field_product_width.replace('"', '').replace("00", "").replace("1108", "6").replace("in", "");
        widths.push({ 'width': `${refactorwidth}`, 'sku': `${widthProduct.data.sku}` });
      }
    });

    tackProducts.forEach(lengthProduct => {
      tacks.push({ 'length': `${lengthProduct.data.field_product_level}`, 'sku': `${lengthProduct.data.sku}` });
    });

          
    //const uniqueColors = [...new Set(data.data.allCommerceProduct.nodes.map(products => fields.data.field_product_color))];

    const variationColor = (
      <Menu style={{display: "flex", flexDirection: "column", width: "100%", height: "auto", maxHeight: "500px", overflow: "scroll", justifyContent: "space-between"}}>
        {
          colors.sort((a, b) => a.color.localeCompare(b.color)).map((color, index) => {
            return (
              <a href={`/products/${color.sku}`}><Menu.Item key={index}>
                {color.color}
                <img loading='lazy' src={`https://mbs-signsupply.com/web/images/${color.color}.jpg`} style={{width: "30px", height: "30px"}} />
              </Menu.Item></a>
            )
          })
        }
      </Menu>
    );

    const variationWidth = (
      <Menu style={{display: "flex", flexDirection: "column", width: "100%", height: "auto", maxHeight: "500px", overflow: "scroll", justifyContent: "space-between"}}>
        {
          widths.sort((a, b) => a.sku.localeCompare(b.sku)).map((width, index) => {
            return (
              <a href={`/products/${width.sku}`}><Menu.Item key={index}>
                {width.width}"
              </Menu.Item></a>
            )
          })
        }
      </Menu>
    );

    const variationTack = (
      <Menu style={{display: "flex", flexDirection: "column", width: "100%", height: "auto", maxHeight: "500px", overflow: "scroll", justifyContent: "space-between"}}>
        {
          tacks.sort((a, b) => a.sku.localeCompare(b.sku)).map((length, index) => {
            return (
              <a href={`/products/${length.sku}`}><Menu.Item key={index}>
                {length.length}
              </Menu.Item></a>
            )
          })
        }
      </Menu>
    );

    console.log(product);
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
              {colors.length > 1 ?
                <div>
                  <p style={{fontWeight: "bold"}}>Select Color:</p>
                  <Dropdown className="color-variation" overlay={variationColor} style={{width: "500px"}}  trigger={['click']}>
                    <a onClick={flipMaker} style={{color: "black"}}>{product.field_product_color.replaceAll('_', ' ').replaceAll('-', ' ').replace('100', 'Blue').replace('101', 'Gloss Gold').replace('102', 'Gloss Orange').replace('105', 'Gloss Yellow').replace('1200', 'Gloss Green').replace('1269', 'Gloss Silver').replace('1283', 'Gloss Red').replace('1269', 'Gloss Silver').replace('1290', 'Gloss White').replace('1317', 'Clear').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    {flipped ? <DownOutlined style={{marginRight: "20px", fontSize: "20px", color: "black"}}/> :
                    <UpOutlined  style={{marginRight: "20px", fontSize: "20px", color: "black"}}/>}</a>
                  </Dropdown>
                </div> :
                null}
                {widths.length > 1 ?
                <div>
                  <p style={{fontWeight: "bold"}}>Select Width:</p>
                  <Dropdown className="color-variation" overlay={variationWidth} style={{width: "500px"}}  trigger={['click']}>
                    <a onClick={flipMaker2} style={{color: "black"}}>{product.field_product_width.replace('"', '').replace("00", "").replace("1108", "6").replace("in", "")}"
                    {flipped2 ? <DownOutlined style={{marginRight: "20px", fontSize: "20px", color: "black"}}/> :
                    <UpOutlined  style={{marginRight: "20px", fontSize: "20px", color: "black"}}/>}</a>
                  </Dropdown>
                </div> :
                null}
                {tacks.length > 1 ?
                <div>
                  <p style={{fontWeight: "bold"}}>Select Tack Level:</p>
                  <Dropdown className="color-variation" overlay={variationTack} style={{width: "500px"}}  trigger={['click']}>
                    <a onClick={flipMaker3} style={{color: "black"}}>{product.field_product_level}
                    {flipped3 ? <DownOutlined style={{marginRight: "20px", fontSize: "20px", color: "black"}}/> :
                    <UpOutlined  style={{marginRight: "20px", fontSize: "20px", color: "black"}}/>}</a>
                  </Dropdown>
                </div> :
                null}
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
                    field_product_width
                    field_product_length
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
            

export default TransferTape; 