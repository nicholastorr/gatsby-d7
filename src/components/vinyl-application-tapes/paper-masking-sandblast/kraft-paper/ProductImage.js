import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
   const imageData = useStaticQuery(graphql`
   {
    allFiles(filter: {data: {uuid: {in:
      [
        "9d761666-2e8b-41d3-aff9-456c191e69d1",
        "6acec71f-64a5-4f23-ab0d-dd90d276cf80"
      ]
    }}}) {
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
            {image.length > 0 ? <img src={image[0].data.url} alt={image[0].data.field_file_image_alt_text} width={250} /> : <StaticImage src="http://stagingsupply.htm-mbs.com/sites/default/files/default_images/drupalcommerce.png" alt="logo"  width={250}/>}
        </div>
    )
}



export default ProductImage;