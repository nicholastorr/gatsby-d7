import * as React from 'react';


//static query product data

const Product = ( data ) => {

    
    return (
        <div>
            <h1>{data.pageContext.title}</h1>
            <h3>{data.pageContext.sku}</h3>
            {console.log(data)}
        </div>
    );
}

export default Product;