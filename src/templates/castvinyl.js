import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProductImage from '../components/cast-vinyl/ProductImage';
import  styled  from 'styled-components';
import { Sidebar } from '../components/cast-vinyl/Sidebar';
import  Header  from '../components/header';
import { InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';


const ProductList = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     width: 915px;
`

const CastVinyl = ( data, imageData ) => {
    const arr = []
    //set products to state 
    //set filter to state and send to Siderbar to filter products
    const [count, setCount] = React.useState(24);
    const [products, setProducts] = React.useState(data.pageContext.data);
    const [filtered, setFiltered] = React.useState(false);

    //increase number of products displayed on list page
    const handleCount = () => {
        setCount(count + 24);
    }

    function onChange(value) {
        console.log('changed', value);
    }


    console.log(filtered);

    return (
        <div style={{width: "100%", marginTop: "-15px"}}> 
        <Header/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Sidebar 
            products={products}
            setProducts={setProducts}
            baseProducts={data.pageContext.data}
            filtered={filtered}
            setFiltered={setFiltered}
            />
            <div style={{display: "flex", flexDirection: "column"}}>
            <h1 style={{width: "50%"}}>Cast vinyl</h1>
            <h3>Product Count: {products.length}</h3>
            <ProductList>
            {products.slice(0, count).map(product => {
                if (filtered === false && product.data.field_open_sku != null) {
                    return (
                        <div style={{marginBottom: "15px"}}><a href={`/products/${product.data.field_open_sku}`}>
                            {product.data.field_product_image.length > 0 ? 
                            <ProductImage uuid={product.data.field_product_image[0].file.uuid}  /> : 
                            <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={250} alt=""/>}
                             <h3>{product.data.sku}</h3>
                             </a>
                             <h4 style={{fontWeight: "bold"}}>{product.data.title}</h4>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <span style={{display: "flex", flexDirection: "row"}}>
                                    <h4 style={{marginRight: "7px"}}>Prices starting from:</h4><h4 style={{color: "red"}}>${product.data.commerce_price.amount_decimal}</h4>
                                </span>
                             </div>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                    <a href={`/products/${product.data.field_open_sku}`}><Button type="primary"  onClick={onclick}>Click for more</Button></a>
                             </div>
                        </div>
                        )
                }
                else if (filtered === false && product.data.field_open_sku == null) {
                    return (
                        <div>

                        </div>
                    )
                }
                else if (filtered === true && product.data.field_open_sku == null) {
                    return (
                        <div style={{marginBottom: "15px"}}><a href={`/products/${product.data.field_open_sku}`}>
                            {product.data.field_product_image.length > 0 ? 
                            <ProductImage uuid={product.data.field_product_image[0].file.uuid}  /> : 
                            <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={250} alt=""/>}
                             <h3>{product.data.sku}</h3>
                             </a>
                             <h4 style={{fontWeight: "bold"}}>{product.data.title}</h4>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <span style={{display: "flex", flexDirection: "row"}}>
                                    <h4 style={{marginRight: "7px"}}>Prices starting from:</h4><h4 style={{color: "red"}}>${product.data.commerce_price.amount_decimal}</h4>
                                </span>
                             </div>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                    <a href={`/products/${product.data.field_open_sku}`}><Button type="primary"  onClick={onclick}>Click for more</Button></a>
                             </div>
                        </div>
                        )
                    }
                else if (filtered === true && product.data.field_open_sku != null) {
                    return (
                        <div>

                        </div>
                    )
                }
            })}
            </ProductList>
            <h3 onClick={handleCount}>Load more</h3>
            </div>
        </div>
        </div>
    )
}




// graphql query for product pics

export default CastVinyl;