import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
   const imageData = useStaticQuery(graphql`
   {
    allFiles(filter: {data: {uuid: {in: 
      [
        "79bdc5dc-dc58-4855-8e5d-75db1073e888",
        "94bea68c-177d-4786-ba23-fb0e15e6b3ea",
        "4dda77c0-f603-4d6b-8421-2c8939c42391",
        "3d3140cf-c740-45fc-9f6c-d35c79d60e25",
        "4a806920-557b-48ad-8b06-7689ee0c5016",
        "8de2ea27-7e75-4c12-971d-f9e380d1053f",
        "3b474dbf-3f16-458a-b99e-20d688974669",
        "ef4eaecc-b35b-468f-b432-4377bcbc3036",
        "2b37906a-8e1e-4837-9d53-99581e35778c",
        "4b2f5742-670a-4b9a-9a4e-a13ff42e42b4",
        "53fff6c3-8534-4c8c-ac34-9d16b2d09c5c",
        "0161cf9b-f6e0-4799-a800-c26cc0bccc10",
        "70cf05b2-ff19-44cc-af5c-d6be4a3a4d33",
        "8216535f-e338-43ca-b9b0-43b4e4e69b3c",
        "bf28b32b-79a3-4e79-9176-88b0552543c3",
        "8128dd31-e766-4f16-b8be-b20eff06a9ee",
        "0528dfb8-a756-4f83-9c19-7c47eebca69e"
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