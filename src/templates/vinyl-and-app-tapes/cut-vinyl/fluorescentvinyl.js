import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import  styled  from 'styled-components';
import { Sidebar } from '../../../components/vinyl-application-tapes/cut-vinyl/fluorescent-vinyl/Sidebar';
import ProductImage from '../../../components/vinyl-application-tapes/cut-vinyl/fluorescent-vinyl/ProductImage';
import  Header  from '../../../components/header';
import { InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';


const ProductList = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     width: 915px;
`


const FluorescentVinyl = ( data, imageData ) => {
    const arr = [];
    //set products to state
    //set filter to state and send to Siderbar to filter products
    const [count, setCount] = React.useState(24);
    const [products, setProducts] = React.useState(data.pageContext.data);
    const [filtered, setFiltered] = React.useState(false);

    const handleCount = () => {
        setCount(count + 24);
    }

    function onChange(value) {
        console.log('changed', value);
    }

    products.forEach(product => {
        if (product.data.field_product_image.length > 0) {
            arr.push(product.data.field_product_image[0].file.uuid);
    }})
    
    console.log(arr);


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
            <h1 style={{width: "50%"}}>Fluorescent Vinyl</h1>
            <h3>Product Count: {products.length}</h3>
            <ProductList>
            {products.slice(0, count).map(product => {
                if (filtered === false && product.data.field_open_sku != null) {
                    const bullet1 = product.data.title.split('•');
                    console.log(bullet1);
                    return (
                        <div style={{marginBottom: "15px"}}><a href={`/products/${product.data.field_open_sku}`}>
                            {product.data.field_product_image.length > 0 ? 
                            <ProductImage uuid={product.data.field_product_image[0].file.uuid}  /> : 
                            <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={250} alt=""/>}
                             <h3 style={{height: "78px"}}>{product.data.sku}</h3>
                             </a>
                             <h4 style={{fontWeight: "bold"}}>•{bullet1[1]}</h4>
                             <h4 style={{fontWeight: "bold"}}>•{bullet1[2]}</h4>
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
                        <div style={{marginBottom: "15px"}}><a href={`/products/${product.data.sku}`}>
                            {product.data.field_product_image.length > 0 ? 
                            <ProductImage uuid={product.data.field_product_image[0].file.uuid}  /> : 
                            <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={250} alt=""/>}
                             <h3>{product.data.title}</h3>
                             </a>
                             <h4 style={{fontWeight: "bold"}}>{product.data.sku}</h4>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <span style={{display: "flex", flexDirection: "row"}}>
                                    <h4 style={{marginRight: "7px"}}>Price:</h4><h4 style={{color: "red"}}>${product.data.commerce_price.amount_decimal}</h4>
                                </span>
                             </div>
                             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <InputNumber min={1} defaultValue={1} onChange={onChange} />
                                <Button type="primary"  onClick={onclick}>Add to cart</Button>
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

export default FluorescentVinyl;