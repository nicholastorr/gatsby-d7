import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import  styled  from 'styled-components';
import { Sidebar } from '../components/calendered-vinyl/Sidebar';
import { ProductImage } from '../components/calendered-vinyl/ProductImage';
import  Header  from '../components/header';


const ProductList = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     width: 915px;
`


const CalenderedVinyl = ( data, images ) => {
    //set products to state
    //set filter to state and send to Siderbar to filter products
    const [count, setCount] = React.useState(24);
    const [products, setProducts] = React.useState(data.pageContext.data);

    const handleCount = () => {
        setCount(count + 24);
    }

    console.log(data.pageContext);
    return (
        <div style={{width: "100%", marginTop: "-15px"}}> 
        <Header/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Sidebar 
            products={products}
            setProducts={setProducts}
            baseProducts={data.pageContext.data}
            />
            <div style={{display: "flex", flexDirection: "column"}}>
            <h1 style={{width: "50%"}}>Cast vinyl</h1>
            <h3>Product Count: {products.length}</h3>
            <ProductList>
            {products.slice(0, count).map(product => {
              
                return (
                    <a href={`/vinyl/${product.data.sku}`}><div>
                <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" width={250} alt=""/>
                             <h3>{product.data.title}</h3>
                                <h5>{product.data.sku}</h5>
                    </div></a>
                    ) 
            })}
            </ProductList>
            <h3 onClick={handleCount}>Load more</h3>
            </div>
        </div>
        </div>
    )
}

export default CalenderedVinyl;