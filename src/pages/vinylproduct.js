import * as React from 'react';
import { graphql } from 'gatsby';

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