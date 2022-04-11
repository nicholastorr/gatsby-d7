import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
        //filter array and return image that matches sku
       const imageData = useStaticQuery(graphql`
       {
        allFiles(filter: {data: {uuid: {in: [

        ]}}}) {
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
       }`)

       const image = imageData.allFiles.nodes.filter(node => node.data.uuid == uuid.uuid)


    return (
        <div>
            {image.length > 0 ? <img src={image[0].data.url} alt={image[0].data.field_file_image_alt_text} width={250} /> : <img src="https://mbs-standoffs.com/web/images/mbs-standoffs.svg"  width={250}/>}
        </div>
    )
}



export default ProductImage;


    
