import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProductImage = (uuid) => {
    //filter array and return image that matches sku
   const imageData = useStaticQuery(graphql`
   {
    allFiles(filter: {data: {uuid: {in:
      [
        "68573cc5-1415-4094-99a6-3b91fe2f56f5",
        "4e2f5aee-cf82-4d8d-9649-06b92a5dffa7",
        "1a47ae45-305d-4d82-8d22-897e0b103769",
        "202f8b20-9fb1-488f-ae54-c81a65414495",
        "e53f0a91-fbac-4fc3-8336-3140575d0c55",
        "a4ffe0e0-76ee-49ae-8537-2b9ac2d932e9",
        "e92f046e-700c-40a4-b454-706a1efde480",
        "de532e84-ba07-49ea-b64a-1c91f977d0ea",
        "89905e54-d99e-4c2b-a5a9-683c8b31b060",
        "ce381e5d-2bcc-449a-9263-b0129251c978",
        "a78bea52-f266-4413-9424-8f7e1f0a61c4",
        "340a00c2-e69e-4805-acc7-c7cd4641432c",
        "d8ac3fea-0693-4101-8821-388d5c3e878d"
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