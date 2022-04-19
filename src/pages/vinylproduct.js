import * as React from 'react';

const VinylProduct = (data) => {
    const product = data.pageContext.data;
    console.log(data);

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>{product.sku}</h3>
            <h5>{product.field_product_description}</h5>
        </div>
    )
}

export default VinylProduct; 